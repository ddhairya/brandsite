<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//header("Access-Control-Allow-Origin: https://bareburger.ae/feedback");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
//header("Content-Type:application/json");
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Methods: PUT, GET, POST");
include("connection_db.php");
require("vendor/autoload.php");
date_default_timezone_set("Asia/Dubai");



//$pwd = $_POST['password'];
$user = 'test';
$pwd = 'testpassword';
$pwd_pep = hash_hmac("sha256", $pwd, $pep);
echo $pwd_pep;
$pwd_hash = password_hash($pwd_pep, PASSWORD_DEFAULT);
//$pwd_hash = "$2y$10$PzkLdGLRHGBXWV022dlKQ.L6C2kzceyEMdYI364jS9MD1zIh7V2eO";


//$pwd_to_DB = "$2y$10$PzkLdGLRHGBXWV022dlKQ.L6C2kzceyEMdYI364jS9MD1zIh7V2eO";

mysqli_query($con,"INSERT INTO `ticket_user`( `username`, `password`) VALUES ('".$user."','".$pwd_hash."')");



// if (password_verify($pwd, $pwd_hash)) {
//     echo "Password matches.";
// }
// else {
//     echo "Password incorrect.";
// }

echo $pwd_hash

?>