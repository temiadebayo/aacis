# 🚀 AACIS Payment & Registration Setup Guide

## ⚠️ Critical Issues Fixed

This document outlines the issues found and how to set up your payment system correctly.

---

## 🔧 Issues Found & Fixed

### 1. **Database Schema Missing Fields** ✅ FIXED
**Problem:** Database was missing fields that the application tries to use.

**Solution:** Run the SQL update file to add missing fields.

```bash
mysql -u aacis_admin -p aacis_db < backend-php/database-updates-critical.sql
```

### 2. **Webhook Database Connection** ✅ FIXED
**Problem:** `flutterwave-webhook.php` referenced `$pdo` without initializing it.

**Solution:** Added proper database connection initialization.

### 3. **Missing Environment Variables** ✅ FIXED
**Problem:** No `.env` file with Flutterwave credentials.

**Solution:** Created `.env.example` template in `backend-php/` directory.

### 4. **Webhook Signature Verification** ✅ FIXED
**Problem:** Hardcoded fallback values for environment variables.

**Solution:** Improved environment variable loading with proper validation.

---

## 📋 Setup Instructions

### Step 1: Update Database Schema

Run the critical database updates:

```bash
cd backend-php
mysql -u aacis_admin -p aacis_db < database-updates-critical.sql
```

**Password:** `BlueCitrusIT@2025`

This adds the following fields to both `leads` and `registrations` tables:
- `summit_attendance`
- `concierge_services`
- `payment_type`
- `installment_plan`
- `installment_number`

---

### Step 2: Configure Flutterwave Credentials

#### A. Create Backend .env File

```bash
cd backend-php
cp env.example .env
```

#### B. Get Your Flutterwave Credentials

1. Go to [Flutterwave Dashboard](https://dashboard.flutterwave.com/settings/api)
2. Copy your **Secret Key** (starts with `FLWSECK_TEST-` or `FLWSECK-`)
3. Copy your **Public Key** (starts with `FLWPUBK_TEST-` or `FLWPUBK-`)

#### C. Generate Secret Hash for Webhook

The secret hash is a random string you create for webhook verification:

```bash
# On Windows PowerShell
[Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((New-Guid).ToString()))

# Or use a simple random string
# Example: "my_super_secret_hash_2025"
```

#### D. Update backend-php/.env File

```env
# Flutterwave Server Configuration
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-your_actual_secret_key_here
FLUTTERWAVE_SECRET_HASH=your_generated_secret_hash_here

# Database Configuration
DB_HOST=localhost
DB_NAME=aacis_db
DB_USER=aacis_admin
DB_PASSWORD=BlueCitrusIT@2025
```

---

### Step 3: Configure Frontend Environment Variables

#### A. Create Frontend .env File (in project root)

```bash
# In the project root (aquarian_aacis/)
echo "VITE_API_URL=http://localhost:8000/api" > .env
echo "VITE_BACKEND_URL=http://localhost:8000" >> .env
echo "VITE_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST-your_actual_public_key_here" >> .env
```

#### B. Or Create Manually

Create a `.env` file in the project root with:

```env
# API Configuration
VITE_API_URL=http://localhost:8000/api
VITE_BACKEND_URL=http://localhost:8000

# Flutterwave Public Key (for frontend)
VITE_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST-your_actual_public_key_here
```

**Important:** Use your **Public Key** (not Secret Key) for the frontend!

---

### Step 4: Configure Flutterwave Webhook

#### A. Set Up Webhook URL

1. Go to [Flutterwave Dashboard > Settings > Webhooks](https://dashboard.flutterwave.com/settings/webhooks)
2. Set webhook URL to: `https://yourdomain.com/backend-php/api/flutterwave-webhook.php`
3. Enter the **same Secret Hash** you put in the `.env` file
4. Click **Save**

#### B. For Local Testing (Optional)

Use a service like [ngrok](https://ngrok.com/) to expose your local server:

```bash
ngrok http 8000
```

Then use the ngrok URL for the webhook:
```
https://your-ngrok-url.ngrok.io/backend-php/api/flutterwave-webhook.php
```

---

### Step 5: Test the Setup

#### A. Start Your Development Server

```bash
# Frontend
npm run dev

# Backend (if using PHP built-in server)
cd backend-php
php -S localhost:8000
```

#### B. Test Registration Flow

1. Go to the registration page
2. Fill out the form
3. Select a price option
4. Click "Pay Now"
5. Complete payment on Flutterwave
6. Verify redirect to success page

#### C. Check Database

```sql
-- Check if lead was created
SELECT * FROM leads ORDER BY created_at DESC LIMIT 1;

-- Check if registration was created after payment
SELECT * FROM registrations ORDER BY created_at DESC LIMIT 1;

-- Check payment status
SELECT email, payment_status, flutterwave_reference FROM registrations WHERE payment_status = 'success';
```

---

## 🔄 Payment Flow

Here's how the payment process works:

1. **User fills form** → Creates a lead in `leads` table
2. **User submits form** → Updates lead with full data
3. **User clicks Pay** → Flutterwave modal opens
4. **Payment successful** → Frontend converts lead to registration
5. **Webhook receives confirmation** → Updates payment status
6. **User redirected** → Success page shows

---

## 🐛 Troubleshooting

### Payment Modal Not Opening

**Check:**
- Browser console for errors
- `VITE_FLUTTERWAVE_PUBLIC_KEY` is set correctly in `.env`
- Flutterwave script is loading (check Network tab)

**Fix:**
```bash
# Verify environment variable is loaded
console.log('Public Key:', import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY)
```

### Payment Successful but Registration Not Created

**Check:**
- Browser console for API errors
- Lead was created in database
- `/api/leads` endpoint is accessible
- CORS is properly configured

**Fix:**
```bash
# Check API endpoint
curl http://localhost:8000/api/leads

# Check backend logs
tail -f /path/to/php/error.log
```

### Webhook Not Receiving Data

**Check:**
- Webhook URL is correct in Flutterwave dashboard
- Secret hash matches in `.env` and Flutterwave
- Server is publicly accessible (use ngrok for local testing)

**Fix:**
```bash
# Check webhook logs
tail -f /path/to/php/error.log | grep "Flutterwave Webhook"

# Test webhook manually
curl -X POST http://localhost:8000/backend-php/api/flutterwave-webhook.php \
  -H "Content-Type: application/json" \
  -H "verif-hash: your_secret_hash" \
  -d '{"tx_ref":"TEST123","status":"successful"}'
```

### Database Connection Failed

**Check:**
- MySQL is running
- Database credentials are correct
- Database exists

**Fix:**
```bash
# Test database connection
mysql -u aacis_admin -p -h localhost aacis_db

# If database doesn't exist
mysql -u root -p
CREATE DATABASE aacis_db;
GRANT ALL PRIVILEGES ON aacis_db.* TO 'aacis_admin'@'localhost';
FLUSH PRIVILEGES;
```

---

## 🔒 Security Checklist

- [ ] Never commit `.env` files to git
- [ ] Use different keys for test and production
- [ ] Verify webhook signatures
- [ ] Use HTTPS in production
- [ ] Validate all user inputs
- [ ] Sanitize database queries (using PDO prepared statements ✅)
- [ ] Set proper CORS headers
- [ ] Limit file upload sizes
- [ ] Use environment variables for all sensitive data

---

## 📝 Production Deployment

### Before Going Live:

1. **Switch to Live Flutterwave Keys**
   - Replace test keys with live keys in `.env`
   - Update both frontend and backend

2. **Update API URLs**
   ```env
   # Frontend .env
   VITE_API_URL=https://yourdomain.com/backend-php/api
   VITE_BACKEND_URL=https://yourdomain.com
   VITE_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK-your_live_public_key
   
   # Backend .env
   FLUTTERWAVE_SECRET_KEY=FLWSECK-your_live_secret_key
   ```

3. **Update Webhook URL in Flutterwave**
   - Use production domain
   - Ensure HTTPS is enabled

4. **Test Everything**
   - Complete a test transaction
   - Verify webhook is working
   - Check email notifications
   - Verify database records

5. **Monitor**
   - Set up error logging
   - Monitor webhook responses
   - Track failed payments
   - Check database regularly

---

## 📞 Support

If you encounter any issues:

1. Check the error logs
2. Verify all environment variables are set
3. Test API endpoints manually
4. Review Flutterwave dashboard for transaction status

---

## ✅ Quick Checklist

Before testing:

- [ ] Database schema updated (`database-updates-critical.sql` executed)
- [ ] Backend `.env` file created with Flutterwave credentials
- [ ] Frontend `.env` file created with public key
- [ ] Webhook URL configured in Flutterwave dashboard
- [ ] Secret hash matches in both `.env` and Flutterwave
- [ ] MySQL server is running
- [ ] PHP server is running
- [ ] Frontend dev server is running

---

## 🎉 You're All Set!

Once all steps are completed, your payment system should work smoothly. Test thoroughly before going live!

