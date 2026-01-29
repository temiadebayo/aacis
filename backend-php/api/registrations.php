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

class RegistrationAPI {
    private $conn;
    
    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }
    
    // GET all registrations
    public function getAllRegistrations() {
        try {
            $query = "SELECT id, full_name, email, contact_number, job_title, company_name, 
                             price_option, currency, payment_status, created_at 
                      FROM registrations 
                      ORDER BY created_at DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            
            $registrations = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($registrations);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    // GET single registration
    public function getRegistration($id) {
        try {
            $query = "SELECT * FROM registrations WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(['error' => 'Registration not found']);
                return;
            }
            
            $registration = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($registration);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    // POST new registration
    public function createRegistration() {
        try {
            // Check if email already exists
            $email = strtolower(trim($_POST['email']));
            $checkQuery = "SELECT email FROM registrations WHERE email = ?";
            $checkStmt = $this->conn->prepare($checkQuery);
            $checkStmt->execute([$email]);
            
            if ($checkStmt->rowCount() > 0) {
                http_response_code(400);
                echo json_encode(['error' => 'Email already registered']);
                return;
            }
            
            // Handle discount code validation
            $discountPercentage = 0;
            if (!empty($_POST['discount_code'])) {
                $discountCode = $_POST['discount_code'];
                $discountQuery = "SELECT * FROM discount_codes 
                                 WHERE code = ? AND is_active = 1 
                                 AND (expires_at IS NULL OR expires_at > NOW())";
                $discountStmt = $this->conn->prepare($discountQuery);
                $discountStmt->execute([$discountCode]);
                
                if ($discountStmt->rowCount() === 0) {
                    http_response_code(400);
                    echo json_encode(['error' => 'Invalid discount code']);
                    return;
                }
                
                $discountData = $discountStmt->fetch(PDO::FETCH_ASSOC);
                if ($discountData['usage_count'] >= $discountData['max_usage']) {
                    http_response_code(400);
                    echo json_encode(['error' => 'Discount code usage limit reached']);
                    return;
                }
                
                $discountPercentage = $discountData['discount_percentage'];
                
                // Update usage count
                $updateQuery = "UPDATE discount_codes SET usage_count = usage_count + 1 WHERE code = ?";
                $updateStmt = $this->conn->prepare($updateQuery);
                $updateStmt->execute([$discountCode]);
            }
            
            // Handle image upload
            $profilePictureData = null;
            $profilePictureType = null;
            
            // Debug logging
            error_log("POST data received: " . print_r($_POST, true));
            error_log("FILES data received: " . print_r($_FILES, true));
            
            if (isset($_FILES['profile_picture']) && $_FILES['profile_picture']['error'] === UPLOAD_ERR_OK) {
                $file = $_FILES['profile_picture'];
                
                // Validate file type
                $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
                if (!in_array($file['type'], $allowedTypes)) {
                    http_response_code(400);
                    echo json_encode(['error' => 'Only JPEG and PNG images are allowed']);
                    return;
                }
                
                // Validate file size (5MB limit)
                if ($file['size'] > 5 * 1024 * 1024) {
                    http_response_code(400);
                    echo json_encode(['error' => 'File size must be less than 5MB']);
                    return;
                }
                
                $profilePictureData = file_get_contents($file['tmp_name']);
                $profilePictureType = $file['type'];
            }
            
            // Insert registration
            $query = "INSERT INTO registrations (
                full_name, email, contact_number, job_title, company_name, website, country,
                is_accomodation_needed, is_guest_coming, dietary_preference, how_you_heard_about_us,
                price_option, discount_percentage, discount_code, guest_names, agreement,
                profile_picture, profile_picture_type, paystack_reference, flutterwave_reference, currency, payment_status,
                summit_attendance, concierge_services, payment_type, installment_plan, installment_number
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $_POST['full_name'],
                $email,
                $_POST['contact_number'],
                $_POST['job_title'],
                $_POST['company_name'],
                $_POST['website'] ?? null,
                $_POST['country'] ?? null,
                filter_var($_POST['is_accomodation_needed'], FILTER_VALIDATE_BOOLEAN),
                filter_var($_POST['is_guest_coming'], FILTER_VALIDATE_BOOLEAN),
                $_POST['dietary_preference'] ?? null,
                $_POST['how_you_heard_about_us'] ?? null,
                $_POST['price_option'],
                $discountPercentage,
                $_POST['discount_code'] ?? null,
                $_POST['guest_names'] ?? null,
                filter_var($_POST['agreement'], FILTER_VALIDATE_BOOLEAN),
                $profilePictureData,
                $profilePictureType,
                $_POST['paystack_reference'] ?? null,
                $_POST['flutterwave_reference'] ?? null,
                $_POST['currency'] ?? 'NGN',
                $_POST['payment_status'] ?? 'pending',
                $_POST['summit_attendance'] ?? null,
                $_POST['concierge_services'] ?? null,
                $_POST['payment_type'] ?? 'full',
                $_POST['installment_plan'] ?? null,
                $_POST['installment_number'] ?? null
            ]);
            
            $registrationId = $this->conn->lastInsertId();
            
            http_response_code(201);
            echo json_encode([
                'message' => 'Registration successful',
                'id' => $registrationId,
                'discountPercentage' => $discountPercentage
            ]);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    // GET profile picture
    public function getProfilePicture($id) {
        try {
            $query = "SELECT profile_picture, profile_picture_type FROM registrations WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(['error' => 'Profile picture not found']);
                return;
            }
            
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$result['profile_picture']) {
                http_response_code(404);
                echo json_encode(['error' => 'Profile picture not found']);
                return;
            }
            
            header('Content-Type: ' . $result['profile_picture_type']);
            echo $result['profile_picture'];
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    // PUT update registration
    public function updateRegistration($id) {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            $query = "UPDATE registrations 
                     SET payment_status = ?, paystack_reference = ?, updated_at = CURRENT_TIMESTAMP 
                     WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $input['payment_status'],
                $input['paystack_reference'],
                $id
            ]);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(['error' => 'Registration not found']);
                return;
            }
            
            echo json_encode(['message' => 'Registration updated successfully']);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    // DELETE registration
    public function deleteRegistration($id) {
        try {
            $query = "DELETE FROM registrations WHERE id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$id]);
            
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(['error' => 'Registration not found']);
                return;
            }
            
            echo json_encode(['message' => 'Registration deleted successfully']);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
}

// Handle requests
$api = new RegistrationAPI();
$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['REQUEST_URI'];
$pathParts = explode('/', trim($path, '/'));

// Extract ID from URL if present
$id = null;
if (count($pathParts) > 2 && is_numeric($pathParts[2])) {
    $id = $pathParts[2];
}

// Check if requesting profile picture
$isProfilePicture = count($pathParts) > 3 && $pathParts[3] === 'profile-picture';

switch ($method) {
    case 'GET':
        if ($isProfilePicture && $id) {
            $api->getProfilePicture($id);
        } elseif ($id) {
            $api->getRegistration($id);
        } else {
            $api->getAllRegistrations();
        }
        break;
        
    case 'POST':
        $api->createRegistration();
        break;
        
    case 'PUT':
        if ($id) {
            $api->updateRegistration($id);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Registration ID required']);
        }
        break;
        
    case 'DELETE':
        if ($id) {
            $api->deleteRegistration($id);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Registration ID required']);
        }
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?> 