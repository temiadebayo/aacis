-- Complete Database Setup for AACIS Registration System (Fixed)
-- This script creates all tables and applies all updates in one go
-- Handles existing indexes gracefully

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
    `converted_at` TIMESTAMP NULL,
    -- New fields for enhanced features
    `summit_attendance` VARCHAR(10) DEFAULT NULL COMMENT 'Agric summit attendance (Yes/No)',
    `concierge_services` VARCHAR(10) DEFAULT NULL COMMENT 'Concierge services needed (Yes/No)',
    `payment_type` VARCHAR(20) DEFAULT NULL COMMENT 'Payment type (full/installment)',
    `installment_plan` VARCHAR(20) DEFAULT NULL COMMENT 'Installment plan (plan1/plan2)',
    `installment_number` INT DEFAULT NULL COMMENT 'Current installment number',
    `total_paid` DECIMAL(10,2) DEFAULT 0.00 COMMENT 'Total amount paid so far',
    `remaining_balance` DECIMAL(10,2) DEFAULT 0.00 COMMENT 'Remaining balance to pay'
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
    `profile_picture` LONGBLOB,
    `profile_picture_type` VARCHAR(50),
    `paystack_reference` VARCHAR(255),
    `flutterwave_reference` VARCHAR(255),
    `currency` VARCHAR(3) DEFAULT 'NGN',
    `payment_status` VARCHAR(20) DEFAULT 'pending',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    -- New fields for enhanced features
    `summit_attendance` VARCHAR(10) DEFAULT NULL COMMENT 'Agric summit attendance (Yes/No)',
    `concierge_services` VARCHAR(10) DEFAULT NULL COMMENT 'Concierge services needed (Yes/No)',
    `payment_type` VARCHAR(20) DEFAULT NULL COMMENT 'Payment type (full/installment)',
    `installment_plan` VARCHAR(20) DEFAULT NULL COMMENT 'Installment plan (plan1/plan2)',
    `installment_number` INT DEFAULT NULL COMMENT 'Current installment number',
    `total_paid` DECIMAL(10,2) DEFAULT 0.00 COMMENT 'Total amount paid so far',
    `remaining_balance` DECIMAL(10,2) DEFAULT 0.00 COMMENT 'Remaining balance to pay'
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

-- Create installment payments table
CREATE TABLE IF NOT EXISTS `installment_payments` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `registration_id` INT NOT NULL,
    `installment_number` INT NOT NULL,
    `amount` DECIMAL(10,2) NOT NULL,
    `currency` VARCHAR(3) NOT NULL,
    `payment_reference` VARCHAR(255),
    `payment_method` VARCHAR(50),
    `payment_status` ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    `due_date` DATE,
    `paid_at` TIMESTAMP NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`registration_id`) REFERENCES `registrations`(`id`) ON DELETE CASCADE,
    INDEX `idx_installment_registration` (`registration_id`),
    INDEX `idx_installment_status` (`payment_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create volunteers table
CREATE TABLE IF NOT EXISTS `volunteers` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `contact_number` VARCHAR(50),
    `age` INT,
    `skills` TEXT,
    `availability` TEXT,
    `motivation` TEXT,
    `status` ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    `assigned_tasks` TEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_volunteers_status` (`status`),
    INDEX `idx_volunteers_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create charter flight bookings table
CREATE TABLE IF NOT EXISTS `charter_flight_bookings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `contact_number` VARCHAR(50) NOT NULL,
    `passport_number` VARCHAR(100),
    `nationality` VARCHAR(100),
    `departure_city` VARCHAR(100),
    `return_date` DATE,
    `special_requests` TEXT,
    `registration_confirmed` BOOLEAN DEFAULT FALSE,
    `booking_status` ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_flight_email` (`email`),
    INDEX `idx_flight_status` (`booking_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create indexes only if they don't exist (using stored procedures to handle gracefully)
DELIMITER $$

CREATE PROCEDURE CreateIndexIfNotExists()
BEGIN
    -- Create index for registrations email if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.statistics 
                   WHERE table_schema = DATABASE() 
                   AND table_name = 'registrations' 
                   AND index_name = 'idx_registrations_email') THEN
        ALTER TABLE `registrations` ADD INDEX `idx_registrations_email` (`email`);
    END IF;
    
    -- Create index for leads email if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.statistics 
                   WHERE table_schema = DATABASE() 
                   AND table_name = 'leads' 
                   AND index_name = 'idx_leads_email') THEN
        ALTER TABLE `leads` ADD INDEX `idx_leads_email` (`email`);
    END IF;
    
    -- Create index for payment status if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.statistics 
                   WHERE table_schema = DATABASE() 
                   AND table_name = 'registrations' 
                   AND index_name = 'idx_registrations_payment_status') THEN
        ALTER TABLE `registrations` ADD INDEX `idx_registrations_payment_status` (`payment_status`);
    END IF;
    
    -- Create index for lead status if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.statistics 
                   WHERE table_schema = DATABASE() 
                   AND table_name = 'leads' 
                   AND index_name = 'idx_leads_status') THEN
        ALTER TABLE `leads` ADD INDEX `idx_leads_status` (`lead_status`);
    END IF;
    
    -- Create index for discount codes if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.statistics 
                   WHERE table_schema = DATABASE() 
                   AND table_name = 'discount_codes' 
                   AND index_name = 'idx_discount_codes_code') THEN
        ALTER TABLE `discount_codes` ADD INDEX `idx_discount_codes_code` (`code`);
    END IF;
END$$

DELIMITER ;

-- Execute the procedure to create indexes
CALL CreateIndexIfNotExists();

-- Drop the procedure as it's no longer needed
DROP PROCEDURE CreateIndexIfNotExists;

-- Insert sample discount codes (ignore duplicates)
INSERT IGNORE INTO `discount_codes` (`code`, `discount_percentage`, `max_usage`, `expires_at`) VALUES
('EARLYBIRD100', 100.00, 50, '2025-12-31 23:59:59'),
('VIP50', 50.00, 20, '2025-12-31 23:59:59');

-- Success message
SELECT 'Database setup completed successfully!' as status;
