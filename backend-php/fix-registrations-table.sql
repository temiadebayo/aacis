-- Add missing fields to registrations table only
-- Run this if the registrations table is missing the new columns

ALTER TABLE `registrations` 
ADD COLUMN `summit_attendance` VARCHAR(10) DEFAULT NULL AFTER `payment_status`,
ADD COLUMN `concierge_services` VARCHAR(10) DEFAULT NULL AFTER `summit_attendance`,
ADD COLUMN `payment_type` VARCHAR(20) DEFAULT 'full' AFTER `concierge_services`,
ADD COLUMN `installment_plan` VARCHAR(20) DEFAULT NULL AFTER `payment_type`,
ADD COLUMN `installment_number` INT DEFAULT NULL AFTER `installment_plan`;
