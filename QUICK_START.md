# ⚡ Quick Start Guide - AACIS Payment System

## 🔴 Critical: Do These 3 Things First

### 1️⃣ Update Database (2 minutes)
```bash
cd backend-php
mysql -u aacis_admin -p aacis_db < database-updates-critical.sql
```
**Password:** `BlueCitrusIT@2025`

---

### 2️⃣ Create .env Files (5 minutes)

#### Backend: `backend-php/.env`
```env
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-your_secret_key_here
FLUTTERWAVE_SECRET_HASH=your_random_hash_here
DB_HOST=localhost
DB_NAME=aacis_db
DB_USER=aacis_admin
DB_PASSWORD=BlueCitrusIT@2025
```

#### Frontend: `.env` (project root)
```env
VITE_API_URL=http://localhost:8000/api
VITE_BACKEND_URL=http://localhost:8000
VITE_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST-your_public_key_here
```

**Get Keys:** [Flutterwave Dashboard](https://dashboard.flutterwave.com/settings/api)

---

### 3️⃣ Configure Webhook (3 minutes)
1. Go to [Flutterwave Dashboard > Webhooks](https://dashboard.flutterwave.com/settings/webhooks)
2. Add webhook URL: `https://yourdomain.com/backend-php/api/flutterwave-webhook.php`
3. Add same secret hash from `.env`
4. Save

---

## 🧪 Quick Test

### Test Payment:
1. Go to registration page
2. Fill form and select price
3. Use test card:
   - **Card:** 5531886652142950
   - **CVV:** 564
   - **Expiry:** 09/32
   - **PIN:** 3310
   - **OTP:** 12345

### Verify:
```sql
SELECT * FROM registrations WHERE email = 'your_test_email@example.com';
```

---

## 📚 Full Documentation

- **Setup:** `PAYMENT_SETUP_GUIDE.md`
- **Testing:** `TESTING_CHECKLIST_PAYMENT.md`
- **Issues Fixed:** `FIXES_SUMMARY.md`

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Payment modal not opening | Check browser console, verify `VITE_FLUTTERWAVE_PUBLIC_KEY` in `.env` |
| Database error | Run `database-updates-critical.sql` |
| Webhook not working | Verify secret hash matches in Flutterwave and `.env` |
| "Email already registered" | This is correct - duplicate prevention working |

---

## ✅ You're Done When:

- [ ] Database updated
- [ ] Both .env files created
- [ ] Flutterwave webhook configured
- [ ] Test payment successful
- [ ] Registration appears in database

**That's it! Everything should work smoothly now.** 🎉

