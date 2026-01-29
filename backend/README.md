# AACIS Backend API

Backend API for AACIS registration form with PostgreSQL database and image storage.

## Features

- ✅ **Registration Form API** - Handle form submissions with image uploads
- ✅ **PostgreSQL Database** - Store all data including images as BLOB
- ✅ **Discount Code System** - Manage and validate discount codes
- ✅ **Image Storage** - Store profile pictures directly in database
- ✅ **Payment Integration** - Support for Paystack payments
- ✅ **Email Notifications** - Send confirmation emails
- ✅ **CORS Support** - Cross-origin requests from frontend

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Database Setup

1. **Install PostgreSQL** on your system
2. **Create a database**:
   ```sql
   CREATE DATABASE aacis_db;
   ```
3. **Run the schema**:
   ```bash
   psql -d aacis_db -f database.sql
   ```

### 3. Environment Configuration

1. **Copy the environment file**:
   ```bash
   cp env.example .env
   ```

2. **Update `.env` with your settings**:
   ```env
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=aacis_db
   DB_USER=your_username
   DB_PASSWORD=your_password

   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # CORS Origin (your frontend URL)
   CORS_ORIGIN=http://localhost:5173
   ```

### 4. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The API will be available at `http://localhost:5000`

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
- `id` - Primary key
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
- `profile_picture` - Image as BLOB
- `profile_picture_type` - MIME type
- `paystack_reference` - Payment reference
- `currency` - Currency (NGN/USD)
- `payment_status` - Payment status
- `created_at` - Creation timestamp
- `updated_at` - Update timestamp

### Discount Codes Table
- `id` - Primary key
- `code` - Discount code (unique)
- `discount_percentage` - Discount percentage
- `max_usage` - Maximum usage limit
- `usage_count` - Current usage count
- `is_active` - Active status
- `created_at` - Creation timestamp
- `expires_at` - Expiration date

## Deployment

### Railway (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Render
1. Create new Web Service
2. Connect your repository
3. Set build command: `npm install`
4. Set start command: `npm start`

### DigitalOcean
1. Create a Droplet
2. Install Node.js and PostgreSQL
3. Clone repository and deploy

## Next Steps

1. **Update Frontend** - Connect React form to new API
2. **Add Authentication** - Admin panel access
3. **Email Integration** - Configure email notifications
4. **Payment Webhooks** - Handle Paystack callbacks
5. **Admin Dashboard** - View and manage registrations

## Support

For issues or questions, please check the logs or contact the development team. 