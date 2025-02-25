<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Database connection logic
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tranquill";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Get the input JSON data
$inputData = file_get_contents("php://input");
$data = json_decode($inputData, true);

// Debugging logs to check what data was received
error_log("Received userId: " . $data['userId']);
error_log("Received tId: " . $data['tId']);

if (!isset($data['userId']) || !isset($data['tId'])) {
    echo json_encode(["error" => "User ID or Travel ID is missing."]);
    exit;
}

$userId = (int)$data['userId'];
$tId = (int)$data['tId'];

// Fetch travel details including date
$travelQuery = "SELECT destination, days, img, price, date FROM travel WHERE tId = ?";
$travelStmt = $conn->prepare($travelQuery);

if (!$travelStmt) {
    echo json_encode(["error" => "SQL preparation failed: " . $conn->error]);
    exit;
}

$travelStmt->bind_param("i", $tId);
$travelStmt->execute();
$travelResult = $travelStmt->get_result();

if ($travelResult->num_rows > 0) {
    $travelData = $travelResult->fetch_assoc();
} else {
    echo json_encode(["error" => "No data found for the provided Travel ID."]);
    exit;
}

$travelStmt->close();

// Insert into custinfo table, including the date field
$stmt = $conn->prepare(
    "INSERT INTO custinfo (userId, tId, destination, days, img, price, date) 
    VALUES (?, ?, ?, ?, ?, ?, ?)"
);

if (!$stmt) {
    echo json_encode(["error" => "SQL preparation failed: " . $conn->error]);
    exit;
}

// Bind the parameters, including the date
$stmt->bind_param(
    "iisssss", 
    $userId, 
    $tId, 
    $travelData['destination'], 
    $travelData['days'], 
    $travelData['img'], 
    $travelData['price'], 
    $travelData['date'] // Make sure the `custinfo` table has a `date` column
);

if ($stmt->execute()) {
    echo json_encode(["message" => "Registration successful!"]);
} else {
    echo json_encode(["error" => "Error during registration: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
