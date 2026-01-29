<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require_once '../config/database.php';

try {
    // Get email from request
    $input = json_decode(file_get_contents('php://input'), true);
    $email = $input['email'] ?? '';
    
    if (empty($email)) {
        http_response_code(400);
        echo json_encode(['error' => 'Email is required']);
        exit;
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email format']);
        exit;
    }
    
    $email = strtolower(trim($email));
    
    // Initialize database
    $database = new Database();
    $conn = $database->getConnection();
    
    if (!$conn) {
        throw new Exception('Database connection failed');
    }
    
    // Check if email already exists
    $checkQuery = "SELECT email FROM leads WHERE email = ? UNION SELECT email FROM registrations WHERE email = ?";
    $checkStmt = $conn->prepare($checkQuery);
    $checkStmt->execute([$email, $email]);
    
    if ($checkStmt->rowCount() > 0) {
        echo json_encode(['message' => 'Email already captured', 'email' => $email]);
        exit;
    }
    
    // Insert email as lead
    $query = "INSERT INTO leads (email, lead_status, source, created_at) VALUES (?, 'email_capture', 'email_entry', NOW())";
    $stmt = $conn->prepare($query);
    $stmt->execute([$email]);
    
    echo json_encode([
        'message' => 'Email captured successfully',
        'email' => $email,
        'id' => $conn->lastInsertId()
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error: ' . $e->getMessage()]);
}
?>
