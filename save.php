<?php
$servername = "localhost";
$username = "chuka";
$password = "ilozulu";
$dbname = "futo_emails";

$user_email = $_POST['user_email'];
$user_name = $_POST['user_name'];

echo $user_email + "" + $user_name;
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO email_details (user_name, user_email)
    VALUES ('$user_name', '$user_email')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>