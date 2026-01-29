np<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AACIS Registration Admin Panel</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: #007bff;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f8f9fa;
            font-weight: bold;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
        .profile-pic {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
            cursor: pointer;
        }
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
        }
        .modal-content {
            margin: 5% auto;
            display: block;
            max-width: 80%;
            max-height: 80%;
        }
        .close {
            position: absolute;
            top: 15px;
            right: 35px;
            color: #f1f1f1;
            font-size: 40px;
            font-weight: bold;
            cursor: pointer;
        }
        .export-btn {
            background: #28a745;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px 5px;
        }
        .export-btn:hover {
            background: #218838;
        }
        .status-pending {
            color: #ffc107;
            font-weight: bold;
        }
        .status-success {
            color: #28a745;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎫 AACIS Registration Admin Panel</h1>
        
        <div class="stats" id="stats">
            <!-- Stats will be loaded here -->
        </div>

        <div>
            <button class="export-btn" onclick="exportToCSV()">📊 Export to CSV</button>
            <button class="export-btn" onclick="exportToExcel()">📈 Export to Excel</button>
            <button class="export-btn" onclick="refreshData()">🔄 Refresh Data</button>
        </div>

        <table id="registrationsTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Payment Ref</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="registrationsBody">
                <!-- Data will be loaded here -->
            </tbody>
        </table>
    </div>

    <!-- Modal for image preview -->
    <div id="imageModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="modalImage">
    </div>

    <script>
        let registrations = [];

        // Load data on page load
        document.addEventListener('DOMContentLoaded', function() {
            loadRegistrations();
        });

        async function loadRegistrations() {
            try {
                const response = await fetch('../api/registrations');
                if (response.ok) {
                    registrations = await response.json();
                    displayRegistrations();
                    updateStats();
                } else {
                    console.error('Failed to load registrations');
                }
            } catch (error) {
                console.error('Error loading registrations:', error);
            }
        }

        function displayRegistrations() {
            const tbody = document.getElementById('registrationsBody');
            tbody.innerHTML = '';

            registrations.forEach(reg => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${reg.id}</td>
                    <td>
                        ${reg.profile_picture ? 
                            `<img src="../api/registrations/${reg.id}/profile-picture" 
                                  class="profile-pic" 
                                  onclick="showImage(this.src)" 
                                  alt="Profile Picture">` : 
                            'No photo'
                        }
                    </td>
                    <td>${reg.full_name}</td>
                    <td>${reg.email}</td>
                    <td>${reg.contact_number}</td>
                    <td>${reg.company_name}</td>
                    <td>${reg.currency} ${reg.price_option}</td>
                    <td class="status-${reg.payment_status}">${reg.payment_status}</td>
                    <td>${reg.flutterwave_reference || reg.paystack_reference || 'N/A'}</td>
                    <td>${new Date(reg.created_at).toLocaleDateString()}</td>
                    <td>
                        <button onclick="viewDetails(${reg.id})" class="export-btn">👁️ View</button>
                        <button onclick="downloadImage(${reg.id})" class="export-btn">📷 Download</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function updateStats() {
            const statsDiv = document.getElementById('stats');
            const total = registrations.length;
            const pending = registrations.filter(r => r.payment_status === 'pending').length;
            const success = registrations.filter(r => r.payment_status === 'success').length;
            const withPhotos = registrations.filter(r => r.profile_picture).length;

            statsDiv.innerHTML = `
                <div class="stat-card">
                    <div class="stat-number">${total}</div>
                    <div>Total Registrations</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${success}</div>
                    <div>Paid</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${pending}</div>
                    <div>Pending</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${withPhotos}</div>
                    <div>With Photos</div>
                </div>
            `;
        }

        function showImage(src) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = "block";
            modalImg.src = src;
        }

        function downloadImage(id) {
            const registration = registrations.find(r => r.id === id);
            if (registration && registration.profile_picture) {
                const link = document.createElement('a');
                link.href = `../api/registrations/${id}/profile-picture`;
                link.download = `profile_${registration.full_name.replace(/\s+/g, '_')}.jpg`;
                link.click();
            } else {
                alert('No profile picture available');
            }
        }

        function viewDetails(id) {
            const registration = registrations.find(r => r.id === id);
            if (registration) {
                const details = `
Name: ${registration.full_name}
Email: ${registration.email}
Contact: ${registration.contact_number}
Job Title: ${registration.job_title}
Company: ${registration.company_name}
Website: ${registration.website || 'N/A'}
Country: ${registration.country || 'N/A'}
Accommodation: ${registration.is_accomodation_needed ? 'Yes' : 'No'}
Guest Coming: ${registration.is_guest_coming ? 'Yes' : 'No'}
Dietary Preference: ${registration.dietary_preference || 'N/A'}
How Heard: ${registration.how_you_heard_about_us || 'N/A'}
Price: ${registration.currency} ${registration.price_option}
Discount Code: ${registration.discount_code || 'N/A'}
Payment Status: ${registration.payment_status}
Created: ${new Date(registration.created_at).toLocaleString()}
                `;
                alert(details);
            }
        }

        function exportToCSV() {
            const headers = ['ID', 'Name', 'Email', 'Contact', 'Job Title', 'Company', 'Website', 'Country', 'Price', 'Currency', 'Payment Status', 'Created Date'];
            const csvContent = [
                headers.join(','),
                ...registrations.map(reg => [
                    reg.id,
                    `"${reg.full_name}"`,
                    reg.email,
                    reg.contact_number,
                    `"${reg.job_title}"`,
                    `"${reg.company_name}"`,
                    reg.website || '',
                    reg.country || '',
                    reg.price_option,
                    reg.currency,
                    reg.payment_status,
                    new Date(reg.created_at).toLocaleDateString()
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `aacis_registrations_${new Date().toISOString().split('T')[0]}.csv`;
            a.click();
        }

        function exportToExcel() {
            // For Excel export, we'll use a simple approach
            // You can enhance this with a proper Excel library if needed
            exportToCSV(); // For now, export as CSV which Excel can open
        }

        function refreshData() {
            loadRegistrations();
        }

        // Close modal when clicking X or outside
        document.querySelector('.close').onclick = function() {
            document.getElementById('imageModal').style.display = "none";
        }

        window.onclick = function(event) {
            const modal = document.getElementById('imageModal');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>
</body>
</html> 