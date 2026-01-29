const express = require('express');
const multer = require('multer');
const pool = require('../config/database');
const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Store file in memory as buffer
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
});

// GET all registrations (for admin panel)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, full_name, email, contact_number, job_title, company_name, price_option, currency, payment_status, created_at FROM registrations ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single registration by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM registrations WHERE id = $1',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Registration not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new registration with image upload
router.post('/', upload.single('profile_picture'), async (req, res) => {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    
    const {
      full_name,
      email,
      contact_number,
      job_title,
      company_name,
      website,
      country,
      is_accomodation_needed,
      is_guest_coming,
      dietary_preference,
      how_you_heard_about_us,
      price_option,
      discount_code,
      guest_names,
      agreement,
      paystack_reference,
      currency,
      payment_status
    } = req.body;

    // Check if email already exists
    const existingUser = await client.query(
      'SELECT email FROM registrations WHERE email = $1',
      [email.trim().toLowerCase()]
    );

    if (existingUser.rows.length > 0) {
      await client.query('ROLLBACK');
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Handle discount code validation
    let discountPercentage = 0;
    if (discount_code) {
      const discountResult = await client.query(
        'SELECT * FROM discount_codes WHERE code = $1 AND is_active = true AND (expires_at IS NULL OR expires_at > NOW())',
        [discount_code]
      );

      if (discountResult.rows.length === 0) {
        await client.query('ROLLBACK');
        return res.status(400).json({ error: 'Invalid discount code' });
      }

      const discountData = discountResult.rows[0];
      if (discountData.usage_count >= discountData.max_usage) {
        await client.query('ROLLBACK');
        return res.status(400).json({ error: 'Discount code usage limit reached' });
      }

      discountPercentage = discountData.discount_percentage;

      // Update usage count
      await client.query(
        'UPDATE discount_codes SET usage_count = usage_count + 1 WHERE code = $1',
        [discount_code]
      );
    }

    // Prepare image data
    let profilePictureData = null;
    let profilePictureType = null;
    
    if (req.file) {
      profilePictureData = req.file.buffer;
      profilePictureType = req.file.mimetype;
    }

    // Insert registration
    const insertResult = await client.query(
      `INSERT INTO registrations (
        full_name, email, contact_number, job_title, company_name, website, country,
        is_accomodation_needed, is_guest_coming, dietary_preference, how_you_heard_about_us,
        price_option, discount_percentage, discount_code, guest_names, agreement,
        profile_picture, profile_picture_type, paystack_reference, currency, payment_status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
      RETURNING id`,
      [
        full_name,
        email.trim().toLowerCase(),
        contact_number,
        job_title,
        company_name,
        website || null,
        country || null,
        is_accomodation_needed === 'true' || is_accomodation_needed === true,
        is_guest_coming === 'true' || is_guest_coming === true,
        dietary_preference || null,
        how_you_heard_about_us || null,
        price_option,
        discountPercentage,
        discount_code || null,
        guest_names ? JSON.stringify(guest_names) : null,
        agreement === 'true' || agreement === true,
        profilePictureData,
        profilePictureType,
        paystack_reference || null,
        currency || 'NGN',
        payment_status || 'pending'
      ]
    );

    await client.query('COMMIT');

    res.status(201).json({
      message: 'Registration successful',
      id: insertResult.rows[0].id,
      discountPercentage
    });

  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.release();
  }
});

// GET profile picture
router.get('/:id/profile-picture', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT profile_picture, profile_picture_type FROM registrations WHERE id = $1',
      [id]
    );
    
    if (result.rows.length === 0 || !result.rows[0].profile_picture) {
      return res.status(404).json({ error: 'Profile picture not found' });
    }
    
    const { profile_picture, profile_picture_type } = result.rows[0];
    
    res.set('Content-Type', profile_picture_type);
    res.send(profile_picture);
  } catch (error) {
    console.error('Error fetching profile picture:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update registration
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { payment_status, paystack_reference } = req.body;
    
    const result = await pool.query(
      'UPDATE registrations SET payment_status = $1, paystack_reference = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
      [payment_status, paystack_reference, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Registration not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE registration (for admin use)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM registrations WHERE id = $1 RETURNING id',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Registration not found' });
    }
    
    res.json({ message: 'Registration deleted successfully' });
  } catch (error) {
    console.error('Error deleting registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 