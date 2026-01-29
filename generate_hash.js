const crypto = require('crypto');

// Generate a random 40-character string (20 bytes = 40 hex characters)
const secretHash = crypto.randomBytes(20).toString('hex');

console.log('Generated Secret Hash for Flutterwave Webhook:');
console.log(secretHash);
console.log('\nCopy this hash and use it in your Flutterwave dashboard webhook settings.'); 