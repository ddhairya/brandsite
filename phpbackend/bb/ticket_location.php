<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Type:application/json");
include("connection_db.php");
date_default_timezone_set("Asia/Dubai");


$company = $_GET['company'];
$location = array();
//echo $company;
$result = mysqli_query(
    $con,
    "SELECT * FROM `location` WHERE `l_c_name` = '".$company."'"
);
// print_r( $result);
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_array($result)) {
        $location[] = $row;
    }
    echo json_encode($location);
    //response($row);
    //echo $row;
    mysqli_close($con);
}
?>