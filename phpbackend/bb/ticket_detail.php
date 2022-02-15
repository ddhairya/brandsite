<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Type:application/json");
include("connection_db.php");
date_default_timezone_set("Asia/Dubai");

$id = $_GET['id'];
$location = array();
//echo $company;
$result = mysqli_query(
    $con,
    "SELECT * FROM `test_ticket` WHERE `t_id` = $id "
);

$result = mysqli_query(
    $con,
    "SELECT * FROM `test_ticket` WHERE `t_id` = $id "
);
$row[] = mysqli_fetch_array($result);
echo json_encode($row)

?>