<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['email'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Email is required']);
        exit;
    }
    
    $email = trim(strtolower($input['email']));
    $type = isset($input['type']) ? $input['type'] : 'welcome_registration';
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email format']);
        exit;
    }
    
    // Email configuration
    $to = $email;
    $subject = "Welcome to AACIS 2025 - Complete Your Registration";
    
    // Email template
    $message = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Welcome to AACIS 2025</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #032642, #00159E); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: linear-gradient(135deg, #032642, #00159E); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; }
            .highlight { background: #e8f0fe; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Welcome to AACIS 2025!</h1>
                <p>Afri-Caribbean Investment Summit</p>
            </div>
            <div class='content'>
                <h2>Hello!</h2>
                <p>Thank you for starting your registration for the Aquarian Consult Limited Afri-Caribbean Investment Summit 2025.</p>
                
                <div class='highlight'>
                    <h3>📧 Complete Your Registration</h3>
                    <p>We've received your email address. To complete your registration and secure your spot at this prestigious event, please click the button below:</p>
                    <a href='https://your-website.com/aacis/register' class='button'>Continue Registration</a>
                </div>
                
                <h3>Event Highlights:</h3>
                <ul>
                    <li>🎯 Keynote by Dr. Terrance Michael Drew, Prime Minister of St. Kitts and Nevis</li>
                    <li>🌱 Focus on Agriculture and Food Security</li>
                    <li>🤝 Networking Opportunities</li>
                    <li>💼 Investment Opportunities</li>
                    <li>🌍 Afri-Caribbean Partnerships</li>
                </ul>
                
                <h3>Registration Options:</h3>
                <div style='background: white; padding: 20px; border-radius: 8px; margin: 20px 0;'>
                    <p><strong>🇳🇬 Nigeria Rate:</strong> ₦525,000</p>
                    <p><strong>🌍 Diaspora Rate:</strong> $350</p>
                    <p><strong>💳 Payment Plans:</strong> Pay in full or choose from our flexible installment plans</p>
                </div>
                
                <p>If you have any questions or need assistance with your registration, please don't hesitate to contact us at <a href='mailto:aacis@aquarianconsult.com'>aacis@aquarianconsult.com</a></p>
                
                <p>We look forward to seeing you at AACIS 2025!</p>
                
                <div class='footer'>
                    <p>Best regards,<br>
                    The AACIS 2025 Team<br>
                    Aquarian Consult Limited</p>
                    <p>This email was sent because you started the registration process on our website.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Email headers
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: AACIS 2025 <noreply@aquarianconsult.com>',
        'Reply-To: aacis@aquarianconsult.com',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    // Send email
    $mailSent = mail($to, $subject, $message, implode("\r\n", $headers));
    
    if ($mailSent) {
        // Log email sent (optional)
        error_log("Welcome email sent to: $email");
        
        echo json_encode([
            'success' => true,
            'message' => 'Welcome email sent successfully',
            'email' => $email
        ]);
    } else {
        error_log("Failed to send welcome email to: $email");
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
    
} catch (Exception $e) {
    error_log("Email error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'An error occurred while sending email']);
}
?>

