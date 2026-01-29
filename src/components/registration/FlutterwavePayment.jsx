import React, { useState, useEffect } from 'react';

const FlutterwavePayment = ({ 
  amount, 
  email, 
  phone, 
  name, 
  onSuccess, 
  onClose, 
  onError,
  reference,
  currency = 'NGN'
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if environment variable is loaded
    console.log('Environment check - VITE_FLUTTERWAVE_PUBLIC_KEY:', import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY);
    
    // Load Flutterwave script if not already loaded
    if (!window.FlutterwaveCheckout) {
      const script = document.createElement('script');
      script.src = 'https://checkout.flutterwave.com/v3.js';
      script.async = true;
      script.onload = () => {
        console.log('Flutterwave script loaded successfully');
      };
      script.onerror = () => {
        console.error('Failed to load Flutterwave script');
      };
      document.body.appendChild(script);
    }
  }, []);

    const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      // Validate required fields
      if (!import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY) {
        throw new Error('Flutterwave public key is not configured');
      }

      if (!email || !name || !amount || !reference) {
        throw new Error('Missing required payment information');
      }

      // Wait for Flutterwave script to load if not already loaded
      let attempts = 0;
      while (!window.FlutterwaveCheckout && attempts < 10) {
        await new Promise(resolve => setTimeout(resolve, 500));
        attempts++;
      }

      if (!window.FlutterwaveCheckout) {
        throw new Error('Flutterwave SDK failed to load after 5 seconds');
      }

      const config = {
        public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
        tx_ref: reference,
        amount: amount,
        currency: currency,
        payment_options: 'card,banktransfer,ussd',
        redirect_url: `${window.location.origin}/aacis/payment-successful`,
        customer: {
          email: email,
          phone_number: phone,
          name: name,
        },
        customizations: {
          title: 'AACIS Registration Payment',
          description: 'Payment for AACIS Summit Registration',
          logo: '/src/assets/logo.png',
        },
        meta: {
          registration_type: 'aacis_summit',
          event_year: '2026'
        }
      };

      console.log('Flutterwave public key:', import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY);
      console.log('Initializing Flutterwave payment with config:', config);

      // Initialize Flutterwave payment
      window.FlutterwaveCheckout({
        ...config,
        callback: function(response) {
          console.log('Flutterwave callback:', response);
          if (response.status === 'successful') {
            onSuccess(response);
          } else {
            onError(response);
          }
          setIsLoading(false);
        },
        onClose: function() {
          console.log('Flutterwave payment closed');
          onClose();
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.error('Payment error:', error);
      alert(`Payment Error: ${error.message}`);
      onError(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Complete Your Registration
          </h3>
          <p className="text-gray-600">
            You will be redirected to Flutterwave to complete your payment
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Registration Fee:</span>
            <span className="font-semibold">
              {currency === 'NGN' ? '₦' : '$'}{amount.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Name:</span>
            <span className="font-semibold">{name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Email:</span>
            <span className="font-semibold">{email}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handlePayment}
            disabled={isLoading}
            className="flex-1 bg-[#00159E] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#00159E]/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Proceed to Payment'}
          </button>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Your payment is secured by Flutterwave
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlutterwavePayment; 