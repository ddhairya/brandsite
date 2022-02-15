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


$user = $_POST['username'];
$pwd = $_POST['password'];
$pwd_pep = hash_hmac("sha256", $pwd, $pep);

$pwd_DB=mysqli_fetch_row(mysqli_query($con,"SELECT `password` from `ticket_user` WHERE `username`='".$user."'"));
//$locMailCC2=$loc_detail[0];

if (password_verify($pwd_pep, $pwd_DB[0])) {
    echo "$user";
}
else {
    echo "";
}
?>