<?php

// Allow CORS
header("Access-Control-Allow-Origin: *"); // Change * to specific origin if needed
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle Preflight Requests (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$uploadDir = 'uploads/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];

    // Validate file size (max 5MB)
    $maxFileSize = 5 * 1024 * 1024; 
    if ($file['size'] > $maxFileSize) {
        die(json_encode(['status' => 'error', 'message' => 'File size exceeds 5MB limit.']));
    }

    // Validate file type (allow only specific formats)
    $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'zip'];
    $fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

    if (!in_array($fileExtension, $allowedExtensions)) {
        die(json_encode(['status' => 'error', 'message' => 'Invalid file type.']));
    }

    // Generate a unique file name to prevent overwrites
    $newFileName = uniqid() . '.' . $fileExtension;
    $targetFilePath = $uploadDir . $newFileName;

    // Move the uploaded file to the uploads directory
    if (move_uploaded_file($file['tmp_name'], $targetFilePath)) {
        echo json_encode(['status' => 'success', 'message' => 'File uploaded successfully.', 'file_path' => $targetFilePath]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to upload file.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No file uploaded.']);
}
?>
