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
    $source = isset($input['source']) ? $input['source'] : 'registration_start';
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email format']);
        exit;
    }
    
    // Database connection (adjust these settings)
    $host = 'localhost';
    $dbname = 'aacis_database';
    $username = 'your_username';
    $password = 'your_password';
    
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Check if email already exists
    $stmt = $pdo->prepare("SELECT id FROM leads WHERE email = ?");
    $stmt->execute([$email]);
    $existingLead = $stmt->fetch();
    
    if ($existingLead) {
        // Update existing lead
        $stmt = $pdo->prepare("UPDATE leads SET source = ?, updated_at = NOW() WHERE email = ?");
        $stmt->execute([$source, $email]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Email updated successfully',
            'existing' => true,
            'lead_id' => $existingLead['id']
        ]);
    } else {
        // Create new lead
        $stmt = $pdo->prepare("INSERT INTO leads (email, source, created_at, updated_at) VALUES (?, ?, NOW(), NOW())");
        $stmt->execute([$email, $source]);
        
        $leadId = $pdo->lastInsertId();
        
        echo json_encode([
            'success' => true,
            'message' => 'Email captured successfully',
            'existing' => false,
            'lead_id' => $leadId
        ]);
    }
    
} catch (PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Database error occurred']);
} catch (Exception $e) {
    error_log("General error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'An error occurred']);
}
?>

