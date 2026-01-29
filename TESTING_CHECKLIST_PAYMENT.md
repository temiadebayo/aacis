# ✅ Payment System Testing Checklist

Use this checklist to verify everything is working correctly.

---

## 🔧 Pre-Testing Setup

### 1. Database Updates
- [ ] Run `database-updates-critical.sql` on your MySQL database
  ```bash
  mysql -u aacis_admin -p aacis_db < backend-php/database-updates-critical.sql
  ```

### 2. Environment Configuration

#### Backend (.env in `backend-php/`)
- [ ] Created `backend-php/.env` file from `backend-php/env.example`
- [ ] Set `FLUTTERWAVE_SECRET_KEY` (Secret Key from Flutterwave Dashboard)
- [ ] Set `FLUTTERWAVE_SECRET_HASH` (Your custom secret hash)
- [ ] Verified database credentials are correct

#### Frontend (.env in project root)
- [ ] Created `.env` file in project root
- [ ] Set `VITE_FLUTTERWAVE_PUBLIC_KEY` (Public Key from Flutterwave Dashboard)
- [ ] Set `VITE_API_URL` to your backend API URL
- [ ] Set `VITE_BACKEND_URL` to your backend URL

### 3. Flutterwave Dashboard
- [ ] Configured webhook URL: `https://yourdomain.com/backend-php/api/flutterwave-webhook.php`
- [ ] Webhook secret hash matches the one in `backend-php/.env`
- [ ] Using Test mode for testing

---

## 🧪 Testing Steps

### Test 1: Email Capture (Lead Generation)
1. [ ] Go to registration page
2. [ ] Scroll down 300px
3. [ ] Email capture popup appears
4. [ ] Enter email and submit
5. [ ] Check database: Lead should be created in `leads` table
   ```sql
   SELECT * FROM leads WHERE email = 'your_test_email@example.com';
   ```

### Test 2: Form Submission (Lead Update)
1. [ ] Fill out the registration form completely
   - [ ] Full name
   - [ ] Email (use same as above or different)
   - [ ] Contact number
   - [ ] Job title
   - [ ] Company name
   - [ ] Upload passport photo
   - [ ] Select summit attendance
   - [ ] Select concierge services
   - [ ] Select how you heard about us
   - [ ] Select price option (Nigeria or Diaspora)
2. [ ] Check console for "Lead captured successfully"
3. [ ] Check database: Lead should be created/updated
   ```sql
   SELECT * FROM leads ORDER BY created_at DESC LIMIT 1;
   ```

### Test 3: Full Payment Flow
1. [ ] On form, select price option
2. [ ] Choose "Pay in Full"
3. [ ] Accept terms and conditions
4. [ ] Click "Pay ₦500,000" (or "$300" for Diaspora)
5. [ ] Flutterwave modal should open
6. [ ] Complete test payment:
   - **Test Card:** 5531886652142950
   - **CVV:** 564
   - **Expiry:** 09/32
   - **PIN:** 3310
   - **OTP:** 12345
7. [ ] After successful payment:
   - [ ] Redirected to `/aacis/payment-successful`
   - [ ] Success message appears
8. [ ] Check database:
   ```sql
   -- Lead should be converted to registration
   SELECT * FROM registrations WHERE email = 'your_test_email@example.com';
   
   -- Check payment status
   SELECT email, payment_status, flutterwave_reference FROM registrations 
   WHERE email = 'your_test_email@example.com';
   ```
9. [ ] Payment status should be "success"
10. [ ] `flutterwave_reference` should be populated

### Test 4: Installment Payment Flow
1. [ ] On form, select price option
2. [ ] Choose "Pay in Installments"
3. [ ] Select installment plan (Plan I or Plan II)
4. [ ] Select installment number (1, 2, or 3)
5. [ ] Click "Pay [amount] (Installment X)"
6. [ ] Complete payment on Flutterwave
7. [ ] Check database:
   ```sql
   SELECT email, payment_type, installment_plan, installment_number, price_option 
   FROM registrations WHERE email = 'your_test_email@example.com';
   ```
8. [ ] `payment_type` should be "installment"
9. [ ] `installment_plan` should be "plan1" or "plan2"
10. [ ] `installment_number` should match selected installment

### Test 5: Discount Code (Free Registration)
1. [ ] On form, enter discount code: `EARLYBIRD100`
2. [ ] Select price option
3. [ ] Click "Register" (should show "Register" not "Pay")
4. [ ] Should redirect to success page without payment
5. [ ] Check database:
   ```sql
   SELECT email, discount_code, discount_percentage, payment_status 
   FROM registrations WHERE email = 'your_test_email@example.com';
   ```
6. [ ] `discount_percentage` should be 100
7. [ ] `payment_status` should be "success"
8. [ ] Check discount usage:
   ```sql
   SELECT code, usage_count, max_usage FROM discount_codes WHERE code = 'EARLYBIRD100';
   ```
9. [ ] `usage_count` should have increased by 1

### Test 6: Webhook Verification
1. [ ] After successful payment, check webhook logs
   ```bash
   # Linux/Mac
   tail -f /var/log/php_errors.log | grep "Flutterwave Webhook"
   
   # Windows (check your PHP error log location)
   ```
2. [ ] Webhook should receive payment confirmation
3. [ ] Database should be updated with payment status

### Test 7: Duplicate Email Prevention
1. [ ] Try to register with same email again
2. [ ] Should show error: "This email is already registered"
3. [ ] Registration should NOT proceed

### Test 8: File Upload
1. [ ] Upload passport photo (JPEG or PNG, under 5MB)
2. [ ] Check if file name appears
3. [ ] After registration, check database:
   ```sql
   SELECT email, profile_picture, profile_picture_type 
   FROM registrations WHERE email = 'your_test_email@example.com';
   ```
4. [ ] `profile_picture` should contain binary data
5. [ ] `profile_picture_type` should be "image/jpeg" or "image/png"

---

## 🐛 Common Issues & Solutions

### Issue 1: Payment Modal Not Opening
**Symptoms:** Click "Pay Now" but nothing happens

**Check:**
- [ ] Browser console for errors
- [ ] Flutterwave script loaded (Network tab)
- [ ] `VITE_FLUTTERWAVE_PUBLIC_KEY` is set in `.env`

**Debug:**
```javascript
// Add this to FlutterwavePayment.jsx
console.log('Public Key:', import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY);
console.log('FlutterwaveCheckout loaded:', !!window.FlutterwaveCheckout);
```

### Issue 2: Payment Successful but Not Recorded
**Symptoms:** Payment goes through but database not updated

**Check:**
- [ ] Browser console for API errors
- [ ] Lead exists in database
- [ ] API endpoint accessible: `http://localhost:8000/api/leads`
- [ ] CORS headers properly set

**Debug:**
```sql
-- Check if lead exists
SELECT * FROM leads WHERE email = 'your_email@example.com';

-- Check registrations
SELECT * FROM registrations WHERE email = 'your_email@example.com';
```

### Issue 3: Webhook Not Working
**Symptoms:** Payment successful but webhook not triggered

**Check:**
- [ ] Webhook URL is correct in Flutterwave dashboard
- [ ] Secret hash matches
- [ ] Server is publicly accessible
- [ ] PHP error logs for webhook errors

**Debug:**
```bash
# Test webhook manually
curl -X POST http://localhost:8000/backend-php/api/flutterwave-webhook.php \
  -H "Content-Type: application/json" \
  -H "verif-hash: your_secret_hash" \
  -d '{
    "event": "charge.completed",
    "data": {
      "tx_ref": "TEST123",
      "status": "successful",
      "transaction_id": "123456",
      "amount": 500000,
      "currency": "NGN",
      "customer": {
        "email": "test@example.com",
        "name": "Test User"
      }
    }
  }'
```

### Issue 4: Database Connection Failed
**Symptoms:** Error: "Database connection failed"

**Check:**
- [ ] MySQL is running
- [ ] Database credentials are correct
- [ ] Database `aacis_db` exists
- [ ] User has proper permissions

**Debug:**
```bash
# Test connection
mysql -u aacis_admin -p -h localhost aacis_db

# Check user permissions
mysql -u root -p
SHOW GRANTS FOR 'aacis_admin'@'localhost';
```

### Issue 5: CORS Error
**Symptoms:** API calls blocked by CORS policy

**Fix:**
Add to your PHP API files:
```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
```

---

## 📊 Database Verification Queries

### Check All Leads
```sql
SELECT id, email, full_name, lead_status, source, created_at 
FROM leads 
ORDER BY created_at DESC 
LIMIT 10;
```

### Check All Registrations
```sql
SELECT id, email, full_name, payment_status, flutterwave_reference, created_at 
FROM registrations 
ORDER BY created_at DESC 
LIMIT 10;
```

### Check Payment Statistics
```sql
-- Total registrations
SELECT COUNT(*) as total_registrations FROM registrations;

-- Successful payments
SELECT COUNT(*) as successful_payments 
FROM registrations 
WHERE payment_status = 'success';

-- Pending payments
SELECT COUNT(*) as pending_payments 
FROM registrations 
WHERE payment_status = 'pending';

-- Total revenue (NGN)
SELECT SUM(price_option) as total_revenue_ngn 
FROM registrations 
WHERE payment_status = 'success' AND currency = 'NGN';

-- Total revenue (USD)
SELECT SUM(price_option) as total_revenue_usd 
FROM registrations 
WHERE payment_status = 'success' AND currency = 'USD';
```

### Check Discount Usage
```sql
SELECT code, discount_percentage, usage_count, max_usage, 
       (max_usage - usage_count) as remaining_uses,
       is_active, expires_at
FROM discount_codes
ORDER BY created_at DESC;
```

### Check Installment Payments
```sql
SELECT email, full_name, payment_type, installment_plan, installment_number, 
       price_option, currency, payment_status
FROM registrations
WHERE payment_type = 'installment'
ORDER BY created_at DESC;
```

---

## ✅ Final Checklist

Before going live:

- [ ] All tests passed
- [ ] Database schema updated
- [ ] Environment variables configured
- [ ] Webhook working correctly
- [ ] Email notifications working (if configured)
- [ ] File uploads working
- [ ] Duplicate prevention working
- [ ] Discount codes working
- [ ] Installment payments working
- [ ] CORS properly configured
- [ ] Error handling tested
- [ ] Security measures in place
- [ ] Using HTTPS in production
- [ ] Switched to live Flutterwave keys for production

---

## 🎉 Success!

If all tests pass, your payment system is ready! 

For production deployment, remember to:
1. Switch to live Flutterwave keys
2. Update all URLs to production domain
3. Enable HTTPS
4. Set up proper error logging
5. Monitor transactions regularly

---

## 📞 Need Help?

If you encounter issues not covered here:
1. Check PHP error logs
2. Check browser console
3. Review Flutterwave dashboard for transaction details
4. Verify all environment variables are set correctly
5. Test API endpoints manually using curl or Postman

