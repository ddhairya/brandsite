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


//echo "This is data rows";

$result = mysqli_query(
    $con,
    "SELECT * FROM `test_ticket` WHERE `t_status` = 'Open' "
);
// // print_r( $result);
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_array($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
    //response($row);
    //echo $row;
    mysqli_close($con);
}


// $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
// echo json_encode($json);

?>