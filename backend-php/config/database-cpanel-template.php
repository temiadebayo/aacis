<?php
class Database {
    // Update these with your cPanel database details
    private $host = 'localhost'; // Usually localhost even on cPanel
    private $db_name = 'yourusername_aacis_db'; // Replace with your actual database name
    private $username = 'yourusername_dbuser'; // Replace with your actual database user
    private $password = 'your_database_password'; // Replace with your actual password
    private $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
