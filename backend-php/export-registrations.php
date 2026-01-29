<?php
require_once 'config/database.php';

// Set headers for file download
header('Content-Type: application/zip');
header('Content-Disposition: attachment; filename="aacis_registrations_' . date('Y-m-d_H-i-s') . '.zip"');

// Create a temporary directory for files
$tempDir = sys_get_temp_dir() . '/aacis_export_' . uniqid();
mkdir($tempDir);

try {
    $database = new Database();
    $conn = $database->getConnection();
    
    // Get all registrations
    $query = "SELECT * FROM registrations ORDER BY created_at DESC";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $registrations = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Create CSV file
    $csvFile = $tempDir . '/registrations.csv';
    $csvHandle = fopen($csvFile, 'w');
    
    // Write CSV headers
    fputcsv($csvHandle, [
        'ID', 'Full Name', 'Email', 'Contact Number', 'Job Title', 'Company Name',
        'Website', 'Country', 'Accommodation Needed', 'Guest Coming', 'Dietary Preference',
        'How Heard About Us', 'Price Option', 'Discount Percentage', 'Discount Code',
        'Payment Status', 'Currency', 'Paystack Reference', 'Created Date', 'Has Photo'
    ]);
    
    // Process each registration
    foreach ($registrations as $reg) {
        // Write to CSV
        fputcsv($csvHandle, [
            $reg['id'],
            $reg['full_name'],
            $reg['email'],
            $reg['contact_number'],
            $reg['job_title'],
            $reg['company_name'],
            $reg['website'] ?? '',
            $reg['country'] ?? '',
            $reg['is_accomodation_needed'] ? 'Yes' : 'No',
            $reg['is_guest_coming'] ? 'Yes' : 'No',
            $reg['dietary_preference'] ?? '',
            $reg['how_you_heard_about_us'] ?? '',
            $reg['price_option'],
            $reg['discount_percentage'],
            $reg['discount_code'] ?? '',
            $reg['payment_status'],
            $reg['currency'],
            $reg['paystack_reference'] ?? '',
            $reg['created_at'],
            $reg['profile_picture'] ? 'Yes' : 'No'
        ]);
        
        // Save profile picture if exists
        if ($reg['profile_picture']) {
            $photoFile = $tempDir . '/photos/profile_' . $reg['id'] . '_' . 
                        preg_replace('/[^a-zA-Z0-9]/', '_', $reg['full_name']) . '.jpg';
            
            // Create photos directory if it doesn't exist
            if (!is_dir($tempDir . '/photos')) {
                mkdir($tempDir . '/photos');
            }
            
            file_put_contents($photoFile, $reg['profile_picture']);
        }
    }
    
    fclose($csvHandle);
    
    // Create ZIP file
    $zipFile = $tempDir . '/export.zip';
    $zip = new ZipArchive();
    $zip->open($zipFile, ZipArchive::CREATE);
    
    // Add CSV file to ZIP
    $zip->addFile($csvFile, 'registrations.csv');
    
    // Add photos directory to ZIP
    if (is_dir($tempDir . '/photos')) {
        $photos = glob($tempDir . '/photos/*');
        foreach ($photos as $photo) {
            $zip->addFile($photo, 'photos/' . basename($photo));
        }
    }
    
    $zip->close();
    
    // Output the ZIP file
    readfile($zipFile);
    
    // Clean up temporary files
    array_map('unlink', glob($tempDir . '/*'));
    array_map('unlink', glob($tempDir . '/photos/*'));
    rmdir($tempDir . '/photos');
    rmdir($tempDir);
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?> 