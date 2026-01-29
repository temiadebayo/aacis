<?php
// Test database connection
require_once 'config/database.php';

try {
    $database = new Database();
    $conn = $database->getConnection();
    
    if ($conn) {
        echo "✅ Database connection successful!<br>";
        echo "Connected to: " . $conn->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "<br>";
        echo "Server version: " . $conn->getAttribute(PDO::ATTR_SERVER_VERSION) . "<br>";
    } else {
        echo "❌ Database connection failed!";
    }
} catch (Exception $e) {
    echo "❌ Connection error: " . $e->getMessage();
}
?> 