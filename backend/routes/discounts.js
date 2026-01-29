const express = require('express');
const pool = require('../config/database');
const router = express.Router();

// GET all discount codes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM discount_codes ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching discount codes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single discount code
router.get('/:code', async (req, res) => {
  try {
    const { code } = req.params;
    const result = await pool.query(
      'SELECT * FROM discount_codes WHERE code = $1',
      [code]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Discount code not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching discount code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new discount code
router.post('/', async (req, res) => {
  try {
    const {
      code,
      discount_percentage,
      max_usage,
      expires_at
    } = req.body;

    const result = await pool.query(
      'INSERT INTO discount_codes (code, discount_percentage, max_usage, expires_at) VALUES ($1, $2, $3, $4) RETURNING *',
      [code, discount_percentage, max_usage, expires_at]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating discount code:', error);
    if (error.code === '23505') { // Unique violation
      res.status(400).json({ error: 'Discount code already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// PUT update discount code
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      code,
      discount_percentage,
      max_usage,
      is_active,
      expires_at
    } = req.body;

    const result = await pool.query(
      'UPDATE discount_codes SET code = $1, discount_percentage = $2, max_usage = $3, is_active = $4, expires_at = $5 WHERE id = $6 RETURNING *',
      [code, discount_percentage, max_usage, is_active, expires_at, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Discount code not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating discount code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE discount code
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'DELETE FROM discount_codes WHERE id = $1 RETURNING id',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Discount code not found' });
    }

    res.json({ message: 'Discount code deleted successfully' });
  } catch (error) {
    console.error('Error deleting discount code:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 