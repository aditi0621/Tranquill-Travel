<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Database connection details
$servername = "localhost";
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "tranquill"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch family packages with valid data only
$sql = "SELECT tId, destination, days, img, price, date 
        FROM travel 
        WHERE person = 'Family' 
        AND img != '' 
        AND price != '0'";

$result = $conn->query($sql);

$packages = array();

if ($result->num_rows > 0) {
    // Fetch all results as an associative array
    while($row = $result->fetch_assoc()) {
        $packages[] = $row;
    }
} else {
    echo json_encode([]); // Return an empty array if no results
}

// Convert the array to JSON format and output it
echo json_encode($packages);

// Close the database connection
$conn->close();
?>
