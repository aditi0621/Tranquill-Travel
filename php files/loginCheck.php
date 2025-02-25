<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Display all errors
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tranquill"; // Use your actual database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "error" => "Database connection failed: " . $conn->connect_error]));
}

// Get the JSON body from the request
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->email) || !isset($data->password)) {
    echo json_encode(["success" => false, "error" => "Invalid input data"]);
    exit();
}

$email = $data->email;
$inputPassword = $data->password;

// Prepare and execute SQL query to fetch user data
$stmt = $conn->prepare("SELECT id, password FROM logininfo WHERE email = ?");
if (!$stmt) {
    die(json_encode(["success" => false, "error" => "Prepare failed: " . $conn->error]));
}

$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    // Compare the input password with the stored password
    if ($inputPassword === $user['password']) {
        // Password matches
        echo json_encode(["success" => true, "userId" => $user['id']]);
    } else {
        // Password does not match
        echo json_encode(["success" => false, "error" => "Invalid email or password"]);
    }
} else {
    // No user found with the provided email
    echo json_encode(["success" => false, "error" => "Invalid email or password"]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
