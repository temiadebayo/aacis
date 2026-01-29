<?php
// Simple PHP server for testing email capture
// Run with: php -S localhost:8000 -t src/php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Handle different endpoints
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = basename($request_uri);

if ($path === 'capture-email.php') {
    handleCaptureEmail();
} elseif ($path === 'send-welcome-email.php') {
    handleSendWelcomeEmail();
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Endpoint not found']);
}

function handleCaptureEmail() {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        return;
    }
    
    try {
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input || !isset($input['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Email is required']);
            return;
        }
        
        $email = trim(strtolower($input['email']));
        $source = isset($input['source']) ? $input['source'] : 'registration_start';
        
        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid email format']);
            return;
        }
        
        // For now, just log the email (you can add database logic later)
        error_log("Email captured: $email, Source: $source");
        
        echo json_encode([
            'success' => true,
            'message' => 'Email captured successfully',
            'email' => $email,
            'source' => $source
        ]);
        
    } catch (Exception $e) {
        error_log("Error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'An error occurred']);
    }
}

function handleSendWelcomeEmail() {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        return;
    }
    
    try {
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input || !isset($input['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Email is required']);
            return;
        }
        
        $email = trim(strtolower($input['email']));
        
        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid email format']);
            return;
        }
        
        // For now, just log the email (you can add email sending logic later)
        error_log("Welcome email would be sent to: $email");
        
        echo json_encode([
            'success' => true,
            'message' => 'Welcome email sent successfully',
            'email' => $email
        ]);
        
    } catch (Exception $e) {
        error_log("Error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'An error occurred']);
    }
}
?>
