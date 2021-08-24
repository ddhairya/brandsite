<?php

//header("Access-Control-Allow-Origin: https://bareburger.ae/feedback");
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Headers: Content-Type');


$rest_json = file_get_contents("php://input");
//echo $rest_json;
$_POST = json_decode($rest_json, true);


$myfile = fopen("newfile.txt", "a") or die("Unable to open file!");
$txt = $rest_json;
//$txt = $_POST;
fwrite($myfile, $txt);
fclose($myfile);
http_response_code(200);


if (1 == 1){
    //@important: Please change this before using
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => "Error222222222"
     ]
 );
}