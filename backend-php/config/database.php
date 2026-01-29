<?php
class Database {
    private $host = 'localhost';
    private $db_name = 'n9u3kno2cjix_aacis_db'; // Updated with your username prefix
    private $username = 'n9u3kno2cjix'; // Your actual username
    private $password = 'your_database_password'; // You need to set this
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