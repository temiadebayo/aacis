<?php
// Generate a secure random secret hash for Flutterwave webhook
$secret_hash = bin2hex(random_bytes(16)); // 32 characters
echo "Generated Secret Hash: " . $secret_hash . "\n";
echo "Copy this hash and use it in your Flutterwave dashboard and environment variables.\n";
?> 