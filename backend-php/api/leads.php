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

class LeadsAPI {
    private $conn;
    
    public function __construct() {
        try {
            $database = new Database();
            $this->conn = $database->getConnection();
            
            if (!$this->conn) {
                throw new Exception('Database connection failed');
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
            exit;
        }
    }
    
    // POST new lead (when email is entered or form submitted before payment)
    public function createLead() {
        try {
            // Validate email
            if (!isset($_POST['email']) || empty(trim($_POST['email']))) {
                http_response_code(400);
                echo json_encode(['error' => 'Email is required']);
                return;
            }
            
            $email = strtolower(trim($_POST['email']));
            
            // Basic email validation
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                http_response_code(400);
                echo json_encode(['error' => 'Invalid email format']);
                return;
            }
            
            // Check if email already exists in leads or registrations
            $checkQuery = "SELECT email FROM leads WHERE email = ? UNION SELECT email FROM registrations WHERE email = ?";
            $checkStmt = $this->conn->prepare($checkQuery);
            $checkStmt->execute([$email, $email]);
            
            if ($checkStmt->rowCount() > 0) {
                // Update existing lead with new information
                $this->updateLead($email);
                return;
            }
            
            // Insert new lead
            $query = "INSERT INTO leads (
                full_name, email, contact_number, job_title, company_name, website, country,
                is_accomodation_needed, is_guest_coming, dietary_preference, how_you_heard_about_us,
                price_option, discount_code, guest_names, agreement, profile_picture, profile_picture_type,
                currency, lead_status, source, summit_attendance, concierge_services, 
                payment_type, installment_plan, installment_number, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";
            
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $_POST['full_name'] ?? null,
                $email,
                $_POST['contact_number'] ?? null,
                $_POST['job_title'] ?? null,
                $_POST['company_name'] ?? null,
                $_POST['website'] ?? null,
                $_POST['country'] ?? null,
                filter_var($_POST['is_accomodation_needed'] ?? false, FILTER_VALIDATE_BOOLEAN),
                filter_var($_POST['is_guest_coming'] ?? false, FILTER_VALIDATE_BOOLEAN),
                $_POST['dietary_preference'] ?? null,
                $_POST['how_you_heard_about_us'] ?? null,
                $_POST['price_option'] ?? null,
                $_POST['discount_code'] ?? null,
                $_POST['guest_names'] ?? null,
                filter_var($_POST['agreement'] ?? false, FILTER_VALIDATE_BOOLEAN),
                $_POST['profile_picture'] ?? null,
                $_POST['profile_picture_type'] ?? null,
                $_POST['currency'] ?? 'NGN',
                'new',
                $_POST['source'] ?? 'form_submission',
                $_POST['summit_attendance'] ?? null,
                $_POST['concierge_services'] ?? null,
                $_POST['payment_type'] ?? 'full',
                $_POST['installment_plan'] ?? null,
                $_POST['installment_number'] ?? null
            ]);
            
            $leadId = $this->conn->lastInsertId();
            
            http_response_code(201);
            echo json_encode([
                'message' => 'Lead captured successfully',
                'id' => $leadId,
                'email' => $email
            ]);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error: ' . $e->getMessage()]);
        }
    }
    
    // Update existing lead
    private function updateLead($email) {
        try {
            $query = "UPDATE leads SET 
                full_name = COALESCE(?, full_name),
                contact_number = COALESCE(?, contact_number),
                job_title = COALESCE(?, job_title),
                company_name = COALESCE(?, company_name),
                website = COALESCE(?, website),
                country = COALESCE(?, country),
                is_accomodation_needed = COALESCE(?, is_accomodation_needed),
                is_guest_coming = COALESCE(?, is_guest_coming),
                dietary_preference = COALESCE(?, dietary_preference),
                how_you_heard_about_us = COALESCE(?, how_you_heard_about_us),
                price_option = COALESCE(?, price_option),
                discount_code = COALESCE(?, discount_code),
                guest_names = COALESCE(?, guest_names),
                agreement = COALESCE(?, agreement),
                profile_picture = COALESCE(?, profile_picture),
                profile_picture_type = COALESCE(?, profile_picture_type),
                currency = COALESCE(?, currency),
                summit_attendance = COALESCE(?, summit_attendance),
                concierge_services = COALESCE(?, concierge_services),
                payment_type = COALESCE(?, payment_type),
                installment_plan = COALESCE(?, installment_plan),
                installment_number = COALESCE(?, installment_number),
                lead_status = 'updated',
                updated_at = NOW()
                WHERE email = ?";
            
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $_POST['full_name'] ?? null,
                $_POST['contact_number'] ?? null,
                $_POST['job_title'] ?? null,
                $_POST['company_name'] ?? null,
                $_POST['website'] ?? null,
                $_POST['country'] ?? null,
                filter_var($_POST['is_accomodation_needed'] ?? false, FILTER_VALIDATE_BOOLEAN),
                filter_var($_POST['is_guest_coming'] ?? false, FILTER_VALIDATE_BOOLEAN),
                $_POST['dietary_preference'] ?? null,
                $_POST['how_you_heard_about_us'] ?? null,
                $_POST['price_option'] ?? null,
                $_POST['discount_code'] ?? null,
                $_POST['guest_names'] ?? null,
                filter_var($_POST['agreement'] ?? false, FILTER_VALIDATE_BOOLEAN),
                $_POST['profile_picture'] ?? null,
                $_POST['profile_picture_type'] ?? null,
                $_POST['currency'] ?? 'NGN',
                $_POST['summit_attendance'] ?? null,
                $_POST['concierge_services'] ?? null,
                $_POST['payment_type'] ?? 'full',
                $_POST['installment_plan'] ?? null,
                $_POST['installment_number'] ?? null,
                $email
            ]);
            
            echo json_encode([
                'message' => 'Lead updated successfully',
                'email' => $email
            ]);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to update lead: ' . $e->getMessage()]);
        }
    }
    
    // GET all leads
    public function getAllLeads() {
        try {
            // Check if leads table exists
            $tableCheck = "SHOW TABLES LIKE 'leads'";
            $tableStmt = $this->conn->prepare($tableCheck);
            $tableStmt->execute();
            
            if ($tableStmt->rowCount() === 0) {
                http_response_code(500);
                echo json_encode(['error' => 'Leads table does not exist. Please run database setup.']);
                return;
            }
            
            $query = "SELECT id, full_name, email, contact_number, job_title, company_name, 
                             price_option, currency, lead_status, source, created_at, updated_at 
                      FROM leads 
                      ORDER BY created_at DESC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            
            $leads = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($leads);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error: ' . $e->getMessage()]);
        }
    }
    
    // Convert lead to registration (when payment is successful)
    public function convertLeadToRegistration() {
        try {
            $email = strtolower(trim($_POST['email']));
            
            // Get lead data
            $leadQuery = "SELECT * FROM leads WHERE email = ?";
            $leadStmt = $this->conn->prepare($leadQuery);
            $leadStmt->execute([$email]);
            
            if ($leadStmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(['error' => 'Lead not found']);
                return;
            }
            
            $leadData = $leadStmt->fetch(PDO::FETCH_ASSOC);
            
            // Insert into registrations table
            $regQuery = "INSERT INTO registrations (
                full_name, email, contact_number, job_title, company_name, website, country,
                is_accomodation_needed, is_guest_coming, dietary_preference, how_you_heard_about_us,
                price_option, discount_percentage, discount_code, guest_names, agreement,
                profile_picture, profile_picture_type, flutterwave_reference, currency, payment_status,
                summit_attendance, concierge_services, payment_type, installment_plan, installment_number,
                created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'success', ?, ?, ?, ?, ?, NOW())";
            
            $regStmt = $this->conn->prepare($regQuery);
            $regStmt->execute([
                $leadData['full_name'],
                $leadData['email'],
                $leadData['contact_number'],
                $leadData['job_title'],
                $leadData['company_name'],
                $leadData['website'],
                $leadData['country'],
                $leadData['is_accomodation_needed'],
                $leadData['is_guest_coming'],
                $leadData['dietary_preference'],
                $leadData['how_you_heard_about_us'],
                $_POST['price_option'] ?? $leadData['price_option'],
                $_POST['discount_percentage'] ?? 0,
                $leadData['discount_code'],
                $leadData['guest_names'],
                $leadData['agreement'],
                $leadData['profile_picture'],
                $leadData['profile_picture_type'],
                $_POST['flutterwave_reference'] ?? null,
                $_POST['currency'] ?? $leadData['currency'],
                $leadData['summit_attendance'] ?? null,
                $leadData['concierge_services'] ?? null,
                $leadData['payment_type'] ?? 'full',
                $leadData['installment_plan'] ?? null,
                $leadData['installment_number'] ?? null
            ]);
            
            $registrationId = $this->conn->lastInsertId();
            
            // Update lead status to converted
            $updateQuery = "UPDATE leads SET lead_status = 'converted', converted_at = NOW() WHERE email = ?";
            $updateStmt = $this->conn->prepare($updateQuery);
            $updateStmt->execute([$email]);
            
            http_response_code(200);
            echo json_encode([
                'message' => 'Lead converted to registration successfully',
                'registration_id' => $registrationId,
                'email' => $email
            ]);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error: ' . $e->getMessage()]);
        }
    }
}

// Handle requests
$api = new LeadsAPI();

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        if (isset($_POST['action']) && $_POST['action'] === 'convert') {
            $api->convertLeadToRegistration();
        } else {
            $api->createLead();
        }
        break;
    case 'GET':
        $api->getAllLeads();
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>
