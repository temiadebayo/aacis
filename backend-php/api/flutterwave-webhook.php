<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Load environment variables from .env file
function loadEnv($path) {
    if (!file_exists($path)) {
        return false;
    }
    
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        
        if (!array_key_exists($name, $_ENV)) {
            putenv(sprintf('%s=%s', $name, $value));
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
    return true;
}

// Try to load .env file
loadEnv(__DIR__ . '/../.env');

// Get the raw POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Verify the webhook signature
$secret_hash = $_ENV['FLUTTERWAVE_SECRET_HASH'] ?? getenv('FLUTTERWAVE_SECRET_HASH') ?? '';
$signature = $_SERVER['HTTP_VERIF_HASH'] ?? '';

// Only verify signature if secret hash is configured
if (!empty($secret_hash) && $signature !== $secret_hash) {
    error_log('Webhook signature mismatch. Expected: ' . $secret_hash . ', Got: ' . $signature);
    http_response_code(401);
    echo json_encode(['error' => 'Invalid signature']);
    exit;
}

// Log the webhook data for debugging
error_log('Flutterwave Webhook: ' . $input);

try {
    // Include database configuration
    require_once '../config/database.php';
    
    // Initialize database connection
    $database = new Database();
    $pdo = $database->getConnection();
    
    if (!$pdo) {
        throw new Exception('Database connection failed');
    }
    
    // Extract transaction details
    $tx_ref = $data['tx_ref'] ?? '';
    $transaction_id = $data['transaction_id'] ?? '';
    $status = $data['status'] ?? '';
    $amount = $data['amount'] ?? 0;
    $currency = $data['currency'] ?? 'NGN';
    $customer_email = $data['customer']['email'] ?? '';
    $customer_name = $data['customer']['name'] ?? '';
    
    // Verify the transaction with Flutterwave
    $verification_url = 'https://api.flutterwave.com/v3/transactions/' . $transaction_id . '/verify';
    $secret_key = $_ENV['FLUTTERWAVE_SECRET_KEY'] ?? getenv('FLUTTERWAVE_SECRET_KEY') ?? '';
    
    if (empty($secret_key)) {
        throw new Exception('Flutterwave secret key not configured');
    }
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $verification_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $secret_key,
        'Content-Type: application/json'
    ]);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code !== 200) {
        throw new Exception('Failed to verify transaction with Flutterwave');
    }
    
    $verification_data = json_decode($response, true);
    
    // Check if the transaction is successful
    if ($verification_data['status'] === 'success' && $verification_data['data']['status'] === 'successful') {
        // Update the registration record with payment confirmation
        $stmt = $pdo->prepare("
            UPDATE registrations 
            SET payment_status = 'success', 
                flutterwave_reference = ?, 
                updated_at = NOW() 
            WHERE email = ? AND payment_status = 'pending'
        ");
        
        $stmt->execute([$transaction_id, $customer_email]);
        
        if ($stmt->rowCount() > 0) {
            // Send confirmation email to customer
            sendPaymentConfirmationEmail($customer_email, $customer_name, $amount, $currency, $transaction_id);
            
            echo json_encode([
                'status' => 'success',
                'message' => 'Payment processed successfully',
                'transaction_id' => $transaction_id
            ]);
        } else {
            echo json_encode([
                'status' => 'warning',
                'message' => 'No pending registration found for this payment'
            ]);
        }
    } else {
        // Update registration with failed payment status
        $stmt = $pdo->prepare("
            UPDATE registrations 
            SET payment_status = 'failed', 
                flutterwave_reference = ?, 
                updated_at = NOW() 
            WHERE email = ? AND payment_status = 'pending'
        ");
        
        $stmt->execute([$transaction_id, $customer_email]);
        
        echo json_encode([
            'status' => 'error',
            'message' => 'Payment verification failed'
        ]);
    }
    
} catch (Exception $e) {
    error_log('Flutterwave Webhook Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Internal server error'
    ]);
}

function sendPaymentConfirmationEmail($email, $name, $amount, $currency, $transaction_id) {
    $subject = '🎉 AACIS Summit Registration Payment Confirmed!';
    
    $currencySymbol = ($currency === 'NGN') ? '₦' : '$';
    $formattedAmount = $currencySymbol . number_format($amount, 2);
    
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #00159E, #032642); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .payment-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .highlight { color: #00159E; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>🎉 Payment Confirmed!</h1>
                <p>Your AACIS Summit registration payment has been successfully processed</p>
            </div>
            
            <div class='content'>
                <h2>Dear $name,</h2>
                
                <p>Thank you for registering for the <span class='highlight'>Afri-Caribbean Agriculture Food Security Summit (AACIS) 2026</span>!</p>
                
                <div class='payment-details'>
                    <h3>📋 Payment Details</h3>
                    <p><strong>Amount Paid:</strong> $formattedAmount</p>
                    <p><strong>Transaction ID:</strong> $transaction_id</p>
                    <p><strong>Status:</strong> <span style='color: #28a745; font-weight: bold;'>✓ Confirmed</span></p>
                    <p><strong>Date:</strong> " . date('F j, Y \a\t g:i A') . "</p>
                </div>
                
                <h3>🎯 What's Next?</h3>
                <ul>
                    <li>You will receive your official registration confirmation shortly</li>
                    <li>Event details and schedule will be sent closer to the date</li>
                    <li>For any questions, contact us at <a href='mailto:aacis@aquarianconsult.com'>aacis@aquarianconsult.com</a></li>
                </ul>
                
                <p><strong>Event Details:</strong></p>
                <ul>
                    <li><strong>Date:</strong> March 25-27, 2026</li>
                    <li><strong>Location:</strong> St. Kitts & Nevis</li>
                    <li><strong>Theme:</strong> "One Voice, One Vision: Advancing Afri-Caribbean Unity"</li>
                </ul>
                
                <p>We look forward to seeing you at this groundbreaking summit!</p>
                
                <p>Best regards,<br>
                <strong>AACIS Team</strong><br>
                <a href='mailto:aacis@aquarianconsult.com'>aacis@aquarianconsult.com</a></p>
            </div>
            
            <div class='footer'>
                <p>This is an automated message. Please do not reply to this email.</p>
                <p>© 2026 AACIS Summit. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = 'From: AACIS Summit <aacis@aquarianconsult.com>' . "\r\n" .
               'Reply-To: aacis@aquarianconsult.com' . "\r\n" .
               'Content-Type: text/html; charset=UTF-8' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();
    
    return mail($email, $subject, $message, $headers);
}
?> 