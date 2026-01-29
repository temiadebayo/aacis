<?php
require_once 'config/database.php';

try {
    $database = new Database();
    $conn = $database->getConnection();
    
    if ($conn) {
        echo "Database connection successful!<br>";
        
        // Test if tables exist
        $stmt = $conn->query("SHOW TABLES");
        $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
        
        echo "Tables found: " . implode(', ', $tables) . "<br>";
        
        // Test leads table
        if (in_array('leads', $tables)) {
            $stmt = $conn->query("SELECT COUNT(*) as count FROM leads");
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            echo "Leads table has " . $result['count'] . " records<br>";
        }
        
        // Test registrations table
        if (in_array('registrations', $tables)) {
            $stmt = $conn->query("SELECT COUNT(*) as count FROM registrations");
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            echo "Registrations table has " . $result['count'] . " records<br>";
        }
        
    } else {
        echo "Database connection failed!";
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
