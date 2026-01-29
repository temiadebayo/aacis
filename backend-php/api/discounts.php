<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../config/database.php';

class DiscountAPI {
    private $conn;
    
    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }
    
    // GET all discount codes
    public function getAllDiscounts() {
        try {
            $query = "SELECT * FROM discount_codes ORDER BY created_at DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            
            $discounts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($discounts);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    // GET single discount code
    public function getDiscount($code) {
        try {
            $query = "SELECT * FROM discount_codes WHERE code = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$code]);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(['error' => 'Discount code not found']);
                return;
            }
            
            $discount = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($discount);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    // POST new discount code
    public function createDiscount() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            $query = "INSERT INTO discount_codes (code, discount_percentage, max_usage, expires_at) 
                     VALUES (?, ?, ?, ?)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $input['code'],
                $input['discount_percentage'],
                $input['max_usage'],
                $input['expires_at'] ?? null
            ]);
            
            $discountId = $this->conn->lastInsertId();
            
            http_response_code(201);
            echo json_encode([
                'message' => 'Discount code created successfully',
                'id' => $discountId
            ]);
            
        } catch (Exception $e) {
            if ($e->getCode() == 23000) { // Duplicate entry
                http_response_code(400);
                echo json_encode(['error' => 'Discount code already exists']);
            } else {
                http_response_code(500);
                echo json_encode(['error' => 'Internal server error']);
            }
        }
    }
    
    // PUT update discount code
    public function updateDiscount($id) {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            $query = "UPDATE discount_codes 
                     SET code = ?, discount_percentage = ?, max_usage = ?, 
                         is_active = ?, expires_at = ? 
                     WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $input['code'],
                $input['discount_percentage'],
                $input['max_usage'],
                $input['is_active'],
                $input['expires_at'] ?? null,
                $id
            ]);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(['error' => 'Discount code not found']);
                return;
            }
            
            echo json_encode(['message' => 'Discount code updated successfully']);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    // DELETE discount code
    public function deleteDiscount($id) {
        try {
            $query = "DELETE FROM discount_codes WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(['error' => 'Discount code not found']);
                return;
            }
            
            echo json_encode(['message' => 'Discount code deleted successfully']);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
}

// Handle requests
$api = new DiscountAPI();
$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['REQUEST_URI'];
$pathParts = explode('/', trim($path, '/'));

// Extract ID or code from URL if present
$id = null;
$code = null;
if (count($pathParts) > 2) {
    if (is_numeric($pathParts[2])) {
        $id = $pathParts[2];
    } else {
        $code = $pathParts[2];
    }
}

switch ($method) {
    case 'GET':
        if ($code) {
            $api->getDiscount($code);
        } else {
            $api->getAllDiscounts();
        }
        break;
        
    case 'POST':
        $api->createDiscount();
        break;
        
    case 'PUT':
        if ($id) {
            $api->updateDiscount($id);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Discount ID required']);
        }
        break;
        
    case 'DELETE':
        if ($id) {
            $api->deleteDiscount($id);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Discount ID required']);
        }
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?> 