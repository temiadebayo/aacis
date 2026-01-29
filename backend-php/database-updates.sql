-- Database Updates for AACIS Registration System
-- Add new fields for enhanced features

-- Add new fields to leads table
ALTER TABLE `leads` 
ADD COLUMN IF NOT EXISTS `summit_attendance` VARCHAR(10) DEFAULT NULL COMMENT 'Agric summit attendance (Yes/No)',
ADD COLUMN IF NOT EXISTS `concierge_services` VARCHAR(10) DEFAULT NULL COMMENT 'Concierge services needed (Yes/No)',
ADD COLUMN IF NOT EXISTS `payment_type` VARCHAR(20) DEFAULT 'full' COMMENT 'Payment type: full or installment',
ADD COLUMN IF NOT EXISTS `installment_plan` VARCHAR(20) DEFAULT NULL COMMENT 'Installment plan: plan1 or plan2',
ADD COLUMN IF NOT EXISTS `installment_number` INT DEFAULT NULL COMMENT 'Current installment number being paid',
ADD COLUMN IF NOT EXISTS `total_paid` DECIMAL(10,2) DEFAULT 0 COMMENT 'Total amount paid so far',
ADD COLUMN IF NOT EXISTS `remaining_balance` DECIMAL(10,2) DEFAULT 0 COMMENT 'Remaining balance to be paid';

-- Add new fields to registrations table
ALTER TABLE `registrations` 
ADD COLUMN IF NOT EXISTS `summit_attendance` VARCHAR(10) DEFAULT NULL COMMENT 'Agric summit attendance (Yes/No)',
ADD COLUMN IF NOT EXISTS `concierge_services` VARCHAR(10) DEFAULT NULL COMMENT 'Concierge services needed (Yes/No)',
ADD COLUMN IF NOT EXISTS `payment_type` VARCHAR(20) DEFAULT 'full' COMMENT 'Payment type: full or installment',
ADD COLUMN IF NOT EXISTS `installment_plan` VARCHAR(20) DEFAULT NULL COMMENT 'Installment plan: plan1 or plan2',
ADD COLUMN IF NOT EXISTS `installment_number` INT DEFAULT NULL COMMENT 'Current installment number being paid',
ADD COLUMN IF NOT EXISTS `total_paid` DECIMAL(10,2) DEFAULT 0 COMMENT 'Total amount paid so far',
ADD COLUMN IF NOT EXISTS `remaining_balance` DECIMAL(10,2) DEFAULT 0 COMMENT 'Remaining balance to be paid';

-- Create installment payments tracking table
CREATE TABLE IF NOT EXISTS `installment_payments` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `registration_id` INT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `installment_number` INT NOT NULL,
    `installment_plan` VARCHAR(20) NOT NULL,
    `amount_paid` DECIMAL(10,2) NOT NULL,
    `currency` VARCHAR(3) NOT NULL,
    `payment_reference` VARCHAR(255),
    `payment_status` VARCHAR(20) DEFAULT 'pending',
    `payment_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`registration_id`) REFERENCES `registrations`(`id`) ON DELETE CASCADE,
    INDEX `idx_installment_email` (`email`),
    INDEX `idx_installment_registration` (`registration_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create volunteers table
CREATE TABLE IF NOT EXISTS `volunteers` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `contact_number` VARCHAR(50),
    `statement_of_interest` TEXT,
    `status` ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_volunteer_email` (`email`),
    INDEX `idx_volunteer_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create charter flight bookings table
CREATE TABLE IF NOT EXISTS `charter_flight_bookings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `contact_number` VARCHAR(50) NOT NULL,
    `passport_number` VARCHAR(100),
    `registration_confirmation` VARCHAR(255),
    `booking_status` ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    `notes` TEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_flight_email` (`email`),
    INDEX `idx_flight_status` (`booking_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Update existing data to set defaults for new fields
UPDATE `leads` 
SET `payment_type` = 'full' 
WHERE `payment_type` IS NULL;

UPDATE `registrations` 
SET `payment_type` = 'full' 
WHERE `payment_type` IS NULL;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS `idx_registrations_payment_type` ON `registrations`(`payment_type`);
CREATE INDEX IF NOT EXISTS `idx_leads_payment_type` ON `leads`(`payment_type`);

-- Add comment to explain installment plans
ALTER TABLE `registrations` COMMENT = 'Main registrations table with support for full and installment payments';
ALTER TABLE `installment_payments` COMMENT = 'Tracks individual installment payments for registrations';

