-- Create AACIS Database Schema for MySQL

-- Create the leads table for tracking potential customers
CREATE TABLE IF NOT EXISTS `leads` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255),
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `contact_number` VARCHAR(50),
    `job_title` VARCHAR(255),
    `company_name` VARCHAR(255),
    `website` VARCHAR(500),
    `country` VARCHAR(100),
    `is_accomodation_needed` BOOLEAN DEFAULT FALSE,
    `is_guest_coming` BOOLEAN DEFAULT FALSE,
    `dietary_preference` VARCHAR(100),
    `how_you_heard_about_us` VARCHAR(100),
    `price_option` DECIMAL(10,2),
    `discount_code` VARCHAR(100),
    `guest_names` JSON,
    `agreement` BOOLEAN DEFAULT FALSE,
    `profile_picture` LONGBLOB,
    `profile_picture_type` VARCHAR(50),
    `currency` VARCHAR(3) DEFAULT 'NGN',
    `lead_status` ENUM('new', 'updated', 'converted', 'abandoned') DEFAULT 'new',
    `source` VARCHAR(100) DEFAULT 'form_submission',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `converted_at` TIMESTAMP NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create the main registrations table
CREATE TABLE IF NOT EXISTS `registrations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `contact_number` VARCHAR(50) NOT NULL,
    `job_title` VARCHAR(255) NOT NULL,
    `company_name` VARCHAR(255) NOT NULL,
    `website` VARCHAR(500),
    `country` VARCHAR(100),
    `is_accomodation_needed` BOOLEAN DEFAULT FALSE,
    `is_guest_coming` BOOLEAN DEFAULT FALSE,
    `dietary_preference` VARCHAR(100),
    `how_you_heard_about_us` VARCHAR(100),
    `price_option` DECIMAL(10,2) NOT NULL,
    `discount_percentage` DECIMAL(5,2) DEFAULT 0,
    `discount_code` VARCHAR(100),
    `guest_names` JSON,
    `agreement` BOOLEAN DEFAULT FALSE,
    `profile_picture` LONGBLOB, -- Stores image as binary data
    `profile_picture_type` VARCHAR(50), -- MIME type (e.g., image/jpeg)
    `paystack_reference` VARCHAR(255),
    `flutterwave_reference` VARCHAR(255),
    `currency` VARCHAR(3) DEFAULT 'NGN',
    `payment_status` VARCHAR(20) DEFAULT 'pending',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create discount codes table
CREATE TABLE IF NOT EXISTS `discount_codes` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `code` VARCHAR(100) UNIQUE NOT NULL,
    `discount_percentage` DECIMAL(5,2) NOT NULL,
    `max_usage` INT NOT NULL,
    `usage_count` INT DEFAULT 0,
    `is_active` BOOLEAN DEFAULT TRUE,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `expires_at` TIMESTAMP NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create index for faster email lookups
CREATE INDEX `idx_registrations_email` ON `registrations`(`email`);
CREATE INDEX `idx_leads_email` ON `leads`(`email`);

-- Create index for payment status
CREATE INDEX `idx_registrations_payment_status` ON `registrations`(`payment_status`);

-- Create index for lead status
CREATE INDEX `idx_leads_status` ON `leads`(`lead_status`);

-- Create index for discount codes
CREATE INDEX `idx_discount_codes_code` ON `discount_codes`(`code`);

-- Insert some sample discount codes (optional)
INSERT INTO `discount_codes` (`code`, `discount_percentage`, `max_usage`, `expires_at`) VALUES
('EARLYBIRD100', 100.00, 50, '2025-12-31 23:59:59'),
('VIP50', 50.00, 20, '2025-12-31 23:59:59')
ON DUPLICATE KEY UPDATE `code` = `code`; 