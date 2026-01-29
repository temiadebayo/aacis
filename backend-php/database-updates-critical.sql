-- Critical Database Updates for AACIS Registration System
-- Run this SQL file to add missing fields to the database
-- Note: If you get "Duplicate column" errors, that's OK - it means the columns already exist

-- Add missing fields to leads table
ALTER TABLE `leads` 
ADD COLUMN `summit_attendance` VARCHAR(10) DEFAULT NULL AFTER `lead_status`,
ADD COLUMN `concierge_services` VARCHAR(10) DEFAULT NULL AFTER `summit_attendance`,
ADD COLUMN `payment_type` VARCHAR(20) DEFAULT 'full' AFTER `concierge_services`,
ADD COLUMN `installment_plan` VARCHAR(20) DEFAULT NULL AFTER `payment_type`,
ADD COLUMN `installment_number` INT DEFAULT NULL AFTER `installment_plan`;

-- Add missing fields to registrations table
ALTER TABLE `registrations` 
ADD COLUMN `summit_attendance` VARCHAR(10) DEFAULT NULL AFTER `payment_status`,
ADD COLUMN `concierge_services` VARCHAR(10) DEFAULT NULL AFTER `summit_attendance`,
ADD COLUMN `payment_type` VARCHAR(20) DEFAULT 'full' AFTER `concierge_services`,
ADD COLUMN `installment_plan` VARCHAR(20) DEFAULT NULL AFTER `payment_type`,
ADD COLUMN `installment_number` INT DEFAULT NULL AFTER `installment_plan`;

-- Verify the changes (run this manually if needed)
-- SHOW COLUMNS FROM leads;
-- SHOW COLUMNS FROM registrations;

