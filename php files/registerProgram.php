<?php
// registerProgram.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tranquill";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Ensure the request is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if userId and programId are set
    if (!isset($_POST['userId']) || !isset($_POST['programId'])) {
        echo json_encode(["error" => "User ID or Program ID is missing."]);
        exit;
    }

    // Retrieve POST variables
    $userId = $_POST['userId'];
    $programId = $_POST['programId'];

    // Validate inputs
    if (empty($userId) || empty($programId)) {
        echo json_encode(["error" => "User ID or Program ID is missing."]);
        exit;
    }

    // Fetch data from 'medi' table for the given programId
    $mediQuery = "SELECT programName, location, language, startTime, endTime, startDate, endDate, fee, imgUrl FROM medi WHERE programId = ?";
    $mediStmt = $conn->prepare($mediQuery);
    if (!$mediStmt) {
        echo json_encode(["error" => "SQL preparation failed: " . $conn->error]);
        exit;
    }
    
    $mediStmt->bind_param("i", $programId);
    $mediStmt->execute();
    $mediResult = $mediStmt->get_result();

    // Check if data exists for the given programId
    if ($mediResult->num_rows > 0) {
        // Fetch the data
        $mediData = $mediResult->fetch_assoc();
    } else {
        echo json_encode(["error" => "No data found for the provided Program ID."]);
        exit;
    }

    // Close the statement for medi query
    $mediStmt->close();

    // Prepare the SQL statement to insert into 'cusInfo' table
    $stmt = $conn->prepare(
        "INSERT INTO cusInfo (userId, programId, programName, location, language, startTime, endTime, startDate, endDate, fee, imgUrl) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    if (!$stmt) {
        echo json_encode(["error" => "SQL preparation failed: " . $conn->error]);
        exit;
    }

    $stmt->bind_param(
        "iisssssssss", 
        $userId, $programId, 
        $mediData['programName'], $mediData['location'], $mediData['language'], 
        $mediData['startTime'], $mediData['endTime'], $mediData['startDate'], 
        $mediData['endDate'], $mediData['fee'], $mediData['imgUrl']
    );

    // Execute the statement and check for errors
    if ($stmt->execute()) {
        echo json_encode(["message" => "Registration successful!"]);
    } else {
        echo json_encode(["error" => "Error during registration: " . $stmt->error]);
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(["error" => "Invalid request method."]);
}

// Close the database connection
$conn->close();
?>
