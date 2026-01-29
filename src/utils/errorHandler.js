// Centralized error handling utility
export class PaymentError extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = 'PaymentError';
    this.code = code;
    this.details = details;
  }
}

export const handlePaymentError = (error) => {
  console.error('Payment Error:', error);
  
  let userMessage = 'An unexpected error occurred during payment.';
  
  if (error instanceof PaymentError) {
    switch (error.code) {
      case 'INVALID_KEY':
        userMessage = 'Payment system configuration error. Please contact support.';
        break;
      case 'NETWORK_ERROR':
        userMessage = 'Network connection error. Please check your internet and try again.';
        break;
      case 'VALIDATION_ERROR':
        userMessage = error.message;
        break;
      case 'PAYMENT_FAILED':
        userMessage = 'Payment was not successful. Please try again or contact support.';
        break;
      default:
        userMessage = error.message || userMessage;
    }
  } else if (error.message) {
    userMessage = error.message;
  }
  
  alert(userMessage);
  return userMessage;
};

export const handleRegistrationError = (error) => {
  console.error('Registration Error:', error);
  
  let userMessage = 'Registration failed. Please try again.';
  
  if (error.message) {
    if (error.message.includes('email already registered')) {
      userMessage = 'This email is already registered. Please use a different email address.';
    } else if (error.message.includes('invalid discount code')) {
      userMessage = 'Invalid discount code. Please check and try again.';
    } else {
      userMessage = error.message;
    }
  }
  
  alert(userMessage);
  return userMessage;
};

export const validatePaymentData = (data) => {
  const errors = [];
  
  if (!data.email) errors.push('Email is required');
  if (!data.name) errors.push('Name is required');
  if (!data.amount || data.amount <= 0) errors.push('Valid amount is required');
  if (!data.reference) errors.push('Payment reference is required');
  
  if (errors.length > 0) {
    throw new PaymentError(errors.join(', '), 'VALIDATION_ERROR');
  }
  
  return true;
}; 