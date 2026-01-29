<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $debug = [];
    
    // Check if files are being received
    $debug['files_received'] = isset($_FILES);
    $debug['files_count'] = count($_FILES);
    
    if (isset($_FILES['profile_picture'])) {
        $file = $_FILES['profile_picture'];
        $debug['file_info'] = [
            'name' => $file['name'],
            'type' => $file['type'],
            'size' => $file['size'],
            'error' => $file['error'],
            'tmp_name' => $file['tmp_name']
        ];
        
        // Check if file was uploaded successfully
        if ($file['error'] === UPLOAD_ERR_OK) {
            $debug['upload_status'] = 'SUCCESS';
            $debug['file_contents_size'] = strlen(file_get_contents($file['tmp_name']));
        } else {
            $debug['upload_status'] = 'ERROR: ' . $file['error'];
        }
    } else {
        $debug['file_info'] = 'No profile_picture file received';
    }
    
    // Check POST data
    $debug['post_data'] = $_POST;
    
    echo json_encode($debug);
} else {
    echo json_encode(['error' => 'Only POST method allowed']);
}
?> 