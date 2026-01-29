<?php
session_start();
require_once '../config/database.php';

// Handle logout
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: dashboard.php');
    exit;
}

// Simple authentication (you should implement proper authentication)
$admin_password = getenv('ADMIN_PASSWORD') ?: 'admin123'; // Use environment variable if available

if ($_POST['password'] === $admin_password) {
    $_SESSION['admin_logged_in'] = true;
    $_SESSION['admin_login_time'] = time();
}

// Session timeout after 2 hours
if (isset($_SESSION['admin_login_time']) && (time() - $_SESSION['admin_login_time']) > 7200) {
    session_destroy();
    header('Location: dashboard.php');
    exit;
}

if (!isset($_SESSION['admin_logged_in'])) {
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <title>Admin Login - AACIS</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
            .login-form { max-width: 400px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            input[type="password"] { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px; }
            button { width: 100%; padding: 12px; background: #00159E; color: white; border: none; border-radius: 4px; cursor: pointer; }
            button:hover { background: #032642; }
        </style>
    </head>
    <body>
        <div class="login-form">
            <h2>Admin Login</h2>
            <form method="POST">
                <input type="password" name="password" placeholder="Enter admin password" required>
                <button type="submit">Login</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit;
}

$database = new Database();
$conn = $database->getConnection();

// Get leads
$leadsQuery = "SELECT * FROM leads ORDER BY created_at DESC";
$leadsStmt = $conn->prepare($leadsQuery);
$leadsStmt->execute();
$leads = $leadsStmt->fetchAll(PDO::FETCH_ASSOC);

// Get registrations
$regQuery = "SELECT * FROM registrations ORDER BY created_at DESC";
$regStmt = $conn->prepare($regQuery);
$regStmt->execute();
$registrations = $regStmt->fetchAll(PDO::FETCH_ASSOC);

// Get statistics
$totalLeads = count($leads);
$totalRegistrations = count($registrations);
$convertedLeads = count(array_filter($leads, function($lead) { return $lead['lead_status'] === 'converted'; }));
$newLeads = count(array_filter($leads, function($lead) { return $lead['lead_status'] === 'new'; }));
$abandonedLeads = count(array_filter($leads, function($lead) { return $lead['lead_status'] === 'abandoned'; }));
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard - AACIS</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: #00159E; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }
        .stat-number { font-size: 2em; font-weight: bold; color: #00159E; }
        .tabs { display: flex; margin-bottom: 20px; }
        .tab { padding: 10px 20px; background: #ddd; border: none; cursor: pointer; }
        .tab.active { background: #00159E; color: white; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #00159E; color: white; }
        tr:hover { background: #f9f9f9; }
        .status-new { color: #007bff; }
        .status-converted { color: #28a745; }
        .status-abandoned { color: #dc3545; }
        .logout { float: right; background: #dc3545; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; text-decoration: none; }
        .logout:hover { background: #c82333; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>AACIS Admin Dashboard</h1>
            <a href="?logout=1" class="logout">Logout</a>
        </div>

        <div class="stats">
            <div class="stat-card">
                <div class="stat-number"><?php echo $totalLeads; ?></div>
                <div>Total Leads</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?php echo $totalRegistrations; ?></div>
                <div>Total Registrations</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?php echo $convertedLeads; ?></div>
                <div>Converted Leads</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?php echo $newLeads; ?></div>
                <div>New Leads</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?php echo $abandonedLeads; ?></div>
                <div>Abandoned</div>
            </div>
        </div>

        <div class="tabs">
            <button class="tab active" onclick="showTab('leads')">Leads</button>
            <button class="tab" onclick="showTab('registrations')">Registrations</button>
        </div>

        <div id="leads" class="tab-content active">
            <h2>Leads (Potential Customers)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Source</th>
                        <th>Created</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($leads as $lead): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($lead['full_name'] ?? 'N/A'); ?></td>
                        <td><?php echo htmlspecialchars($lead['email']); ?></td>
                        <td><?php echo htmlspecialchars($lead['company_name'] ?? 'N/A'); ?></td>
                        <td class="status-<?php echo $lead['lead_status']; ?>"><?php echo ucfirst($lead['lead_status']); ?></td>
                        <td><?php echo htmlspecialchars($lead['source']); ?></td>
                        <td><?php echo date('M j, Y H:i', strtotime($lead['created_at'])); ?></td>
                        <td><?php echo $lead['updated_at'] ? date('M j, Y H:i', strtotime($lead['updated_at'])) : 'N/A'; ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>

        <div id="registrations" class="tab-content">
            <h2>Registrations (Completed)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Currency</th>
                        <th>Payment Status</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($registrations as $reg): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($reg['full_name']); ?></td>
                        <td><?php echo htmlspecialchars($reg['email']); ?></td>
                        <td><?php echo htmlspecialchars($reg['company_name']); ?></td>
                        <td><?php echo $reg['price_option']; ?></td>
                        <td><?php echo $reg['currency']; ?></td>
                        <td><?php echo ucfirst($reg['payment_status']); ?></td>
                        <td><?php echo date('M j, Y H:i', strtotime($reg['created_at'])); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>

    <script>
        function showTab(tabName) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Remove active class from all tabs
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Show selected tab content
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }
    </script>
</body>
</html>
