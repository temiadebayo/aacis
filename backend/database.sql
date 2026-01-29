-- Create AACIS Database Schema

-- Create the main registrations table
CREATE TABLE IF NOT EXISTS registrations (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    contact_number VARCHAR(50) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    website VARCHAR(500),
    country VARCHAR(100),
    is_accomodation_needed BOOLEAN DEFAULT FALSE,
    is_guest_coming BOOLEAN DEFAULT FALSE,
    dietary_preference VARCHAR(100),
    how_you_heard_about_us VARCHAR(100),
    price_option DECIMAL(10,2) NOT NULL,
    discount_percentage DECIMAL(5,2) DEFAULT 0,
    discount_code VARCHAR(100),
    guest_names JSONB,
    agreement BOOLEAN DEFAULT FALSE,
    profile_picture BYTEA, -- Stores image as binary data
    profile_picture_type VARCHAR(50), -- MIME type (e.g., image/jpeg)
    paystack_reference VARCHAR(255),
    currency VARCHAR(3) DEFAULT 'NGN',
    payment_status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create discount codes table
CREATE TABLE IF NOT EXISTS discount_codes (
    id SERIAL PRIMARY KEY,
    code VARCHAR(100) UNIQUE NOT NULL,
    discount_percentage DECIMAL(5,2) NOT NULL,
    max_usage INTEGER NOT NULL,
    usage_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);

-- Create index for payment status
CREATE INDEX IF NOT EXISTS idx_registrations_payment_status ON registrations(payment_status);

-- Create index for discount codes
CREATE INDEX IF NOT EXISTS idx_discount_codes_code ON discount_codes(code);

-- Insert some sample discount codes (optional)
INSERT INTO discount_codes (code, discount_percentage, max_usage, expires_at) VALUES
('EARLYBIRD100', 100.00, 50, '2025-12-31 23:59:59'),
('VIP50', 50.00, 20, '2025-12-31 23:59:59')
ON CONFLICT (code) DO NOTHING;

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_registrations_updated_at 
    BEFORE UPDATE ON registrations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 