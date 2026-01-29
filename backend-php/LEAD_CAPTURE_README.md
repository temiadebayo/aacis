# AACIS Lead Capture System

## Overview
The AACIS Lead Capture System is designed to track potential customers at multiple touchpoints throughout the registration process, even before payment is completed. This enables better customer support, lead tracking, and follow-up capabilities.

## How It Works

### 1. Email Entry Capture
- **When**: As soon as a user enters an email address in the registration form
- **What**: Basic lead information is captured with source "email_entry"
- **Purpose**: Track initial interest and enable early follow-up

### 2. Form Submission Capture
- **When**: When user submits the registration form (before payment)
- **What**: Complete form data is captured with source "form_submission"
- **Purpose**: Have full customer information even if payment fails

### 3. Payment Success Conversion
- **When**: After successful payment
- **What**: Lead is converted to a full registration
- **Purpose**: Maintain data integrity and track conversion rates

## Database Structure

### Leads Table
```sql
CREATE TABLE `leads` (
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
);
```

### Lead Statuses
- **new**: Initial lead capture
- **updated**: Lead information updated
- **converted**: Successfully converted to registration
- **abandoned**: User abandoned the process (can be set manually)

### Sources
- **email_entry**: Captured when email is entered
- **form_submission**: Captured when form is submitted
- **manual**: Manually entered by admin

## API Endpoints

### 1. Create/Update Lead
```
POST /api/leads
```
- Creates new lead or updates existing one
- Automatically handles duplicate emails

### 2. Convert Lead to Registration
```
POST /api/leads
Body: action=convert&email=user@example.com&...
```
- Converts lead to full registration
- Updates lead status to 'converted'

### 3. Get All Leads
```
GET /api/leads
```
- Returns all leads with status and source information

## Admin Dashboard

### Access
- URL: `/admin/dashboard.php`
- Password: `admin123` (change this in production)

### Features
- View all leads and their status
- View completed registrations
- Statistics dashboard
- Export capabilities (can be added)

## Customer Support Benefits

### 1. Lead Tracking
- Know who started the registration process
- Track where users drop off
- Identify potential customers who need follow-up

### 2. Follow-up Capabilities
- Send reminder emails to incomplete registrations
- Offer assistance to users with payment issues
- Provide personalized support based on captured information

### 3. Analytics
- Conversion rate analysis
- Drop-off point identification
- Source effectiveness tracking

## Implementation Notes

### Frontend Changes
- Modified `TextInput` component to support `onChange` handlers
- Added lead capture functions in `RegistrationForm.jsx`
- Integrated with existing payment flow

### Backend Changes
- New `leads.php` API endpoint
- Updated database schema
- Admin dashboard for monitoring

### Security Considerations
- Admin password should be changed in production
- Consider implementing proper authentication
- API endpoints include CORS headers for cross-origin requests

## Usage Examples

### 1. Manual Lead Entry
```php
// Create lead manually
$formData = new FormData();
$formData->append('email', 'user@example.com');
$formData->append('full_name', 'John Doe');
$formData->append('source', 'manual');

$response = fetch('/api/leads', {
    method: 'POST',
    body: $formData
});
```

### 2. Follow-up Email Script
```php
// Get abandoned leads for follow-up
$query = "SELECT * FROM leads WHERE lead_status = 'new' AND created_at < DATE_SUB(NOW(), INTERVAL 1 DAY)";
// Send follow-up emails
```

### 3. Conversion Rate Analysis
```php
// Calculate conversion rate
$conversionRate = ($convertedLeads / $totalLeads) * 100;
```

## Future Enhancements

1. **Automated Follow-up**: Email sequences for abandoned leads
2. **Lead Scoring**: Prioritize leads based on engagement
3. **Integration**: CRM system integration
4. **Analytics**: Advanced reporting and insights
5. **Notifications**: Real-time alerts for new leads

## Troubleshooting

### Common Issues
1. **Lead not captured**: Check API endpoint and database connection
2. **Duplicate leads**: System automatically handles duplicates
3. **Conversion failure**: Verify lead exists before conversion

### Debug Mode
Enable error logging in PHP to troubleshoot API issues:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```
