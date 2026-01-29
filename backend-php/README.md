# AACIS PHP Backend API

PHP backend API for AACIS registration form with MySQL database and image storage. Perfect for cPanel hosting!

## Features

- ✅ **Registration Form API** - Handle form submissions with image uploads
- ✅ **MySQL Database** - Store all data including images as LONGBLOB
- ✅ **Discount Code System** - Manage and validate discount codes
- ✅ **Image Storage** - Store profile pictures directly in database
- ✅ **Payment Integration** - Support for Paystack payments
- ✅ **CORS Support** - Cross-origin requests from frontend
- ✅ **cPanel Compatible** - Works with standard cPanel hosting

## Setup Instructions

### 1. Database Setup (cPanel)

1. **Login to cPanel**
2. **Go to "MySQL® Databases"**
3. **Create a new database** (e.g., `yourusername_aacis_db`)
4. **Create a database user** and assign it to the database
5. **Note down the database name, username, and password**

### 2. Import Database Schema

1. **Go to "phpMyAdmin"** in cPanel
2. **Select your database**
3. **Go to "Import" tab**
4. **Upload the `database.sql` file**
5. **Click "Go" to import the schema**

### 3. Configure Database Connection

1. **Edit `config/database.php`**
2. **Update the database credentials**:
   ```php
   private $host = 'localhost';
   private $db_name = 'yourusername_aacis_db'; // Your cPanel database name
   private $username = 'yourusername_dbuser';  // Your database username
   private $password = 'your_password';        // Your database password
   ```

### 4. Upload Files to cPanel

1. **Upload the entire `backend-php` folder** to your cPanel public_html directory
2. **Rename it to `api`** (or your preferred name)
3. **Ensure file permissions** are set correctly (644 for files, 755 for directories)

### 5. Test the API

Your API will be available at:
- `https://yourdomain.com/api/health` - Health check
- `https://yourdomain.com/api/registrations` - Registration endpoints
- `https://yourdomain.com/api/discounts` - Discount code endpoints

## API Endpoints

### Registrations
- `GET /api/registrations` - Get all registrations
- `POST /api/registrations` - Create new registration (with image upload)
- `GET /api/registrations/:id` - Get single registration
- `PUT /api/registrations/:id` - Update registration
- `DELETE /api/registrations/:id` - Delete registration
- `GET /api/registrations/:id/profile-picture` - Get profile picture

### Discount Codes
- `GET /api/discounts` - Get all discount codes
- `POST /api/discounts` - Create new discount code
- `GET /api/discounts/:code` - Get single discount code
- `PUT /api/discounts/:id` - Update discount code
- `DELETE /api/discounts/:id` - Delete discount code

### Health Check
- `GET /api/health` - API health status

## Database Schema

### Registrations Table
- `id` - Primary key (auto-increment)
- `full_name` - Full name
- `email` - Email (unique)
- `contact_number` - Phone number
- `job_title` - Job title
- `company_name` - Company name
- `website` - Company website (optional)
- `country` - Country (optional)
- `is_accomodation_needed` - Boolean
- `is_guest_coming` - Boolean
- `dietary_preference` - Dietary preference
- `how_you_heard_about_us` - Source
- `price_option` - Price amount
- `discount_percentage` - Applied discount
- `discount_code` - Used discount code
- `guest_names` - JSON array of guest names
- `agreement` - Terms agreement
- `profile_picture` - Image as LONGBLOB
- `profile_picture_type` - MIME type
- `paystack_reference` - Payment reference
- `currency` - Currency (NGN/USD)
- `payment_status` - Payment status
- `created_at` - Creation timestamp
- `updated_at` - Update timestamp

### Discount Codes Table
- `id` - Primary key (auto-increment)
- `code` - Discount code (unique)
- `discount_percentage` - Discount percentage
- `max_usage` - Maximum usage limit
- `usage_count` - Current usage count
- `is_active` - Active status
- `created_at` - Creation timestamp
- `expires_at` - Expiration date

## Frontend Integration

Update your React form to use the new PHP API:

```javascript
// Example: Submit registration
const submitRegistration = async (formData) => {
  try {
    const response = await fetch('https://yourdomain.com/api/registrations', {
      method: 'POST',
      body: formData // FormData with file upload
    });
    
    const result = await response.json();
    console.log('Registration successful:', result);
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
```

## Security Features

- ✅ **SQL Injection Protection** - Prepared statements
- ✅ **File Upload Validation** - Type and size checks
- ✅ **CORS Configuration** - Cross-origin request handling
- ✅ **Input Validation** - Server-side validation
- ✅ **Error Handling** - Proper error responses

## Troubleshooting

### Common Issues:

1. **Database Connection Error**
   - Check database credentials in `config/database.php`
   - Ensure database exists in cPanel

2. **File Upload Issues**
   - Check PHP upload limits in `.htaccess`
   - Verify file permissions

3. **CORS Errors**
   - Ensure `.htaccess` is properly configured
   - Check if mod_rewrite is enabled

4. **404 Errors**
   - Verify file paths and `.htaccess` rules
   - Check if files are uploaded correctly

## Support

For issues or questions:
1. Check the error logs in cPanel
2. Verify database connection
3. Test API endpoints individually
4. Contact your hosting provider if needed

## Next Steps

1. **Update Frontend** - Connect React form to new PHP API
2. **Add Authentication** - Admin panel access
3. **Email Integration** - Configure email notifications
4. **Payment Webhooks** - Handle Paystack callbacks
5. **Admin Dashboard** - View and manage registrations

Your PHP backend is now ready for cPanel deployment! 🚀 