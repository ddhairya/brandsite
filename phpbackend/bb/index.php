<?php

//header("Access-Control-Allow-Origin: https://bareburger.ae/feedback");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');

include("connection_db.php");
require("phpmail/PHPMailerAutoload.php");
date_default_timezone_set("Asia/Dubai");

$rest_json = file_get_contents("php://input");
//echo $rest_json;
$_POST = json_decode($rest_json, true);


$myfile = fopen("newfile.txt", "a") or die("Unable to open file!");
$txt = $rest_json;
//$txt = $_POST;
fwrite($myfile, $txt);
fclose($myfile);

//echo $_POST;

$yes=0;
$no=0;
$loc = $_POST['loc'];
$time= $_POST['time'];
$fname= $_POST['fname'];
$mob= $_POST['mob'];
$email= $_POST['email'];
$q1= $_POST['q1'];  //How would you rate food taste and quality?
if($q1 <= 24) {$no+=1;}
$q2= $_POST['q2'];  //How would you rate our staff performance?
if($q2 <= 24) {$no+=1;}
$q3= $_POST['q3'];  //How was your overall experience?
if($q3 <= 24) {$no+=1;}
$q4= $_POST['q4'];  //Value for money?
if($q4 <= 24) {$no+=1;}
$rb= $_POST['rb'];  //How did you hear about us?
$comment= $_POST['comment'];
$checkbx= $_POST['checkbx'];
if(!$checkbx){$checkbx = 0;}
//echo $checkbx;
//echo $no;
$statisfaction = "Satisfied";
if($no>=3){ $statisfaction = "Not Satisfied"; }
//echo $statisfaction;


//$location_query="SELECT `l_email`,`l_name` from `location` WHERE `l_code`='".$loc."'";
//echo $mail_select_query;
//$ex_mail_select_query=mysqli_query($con,"SELECT `l_email`,`l_name` from `location` WHERE `l_code`='".$loc."'");
$loc_detail=mysqli_fetch_row(mysqli_query($con,"SELECT `l_email`,`l_name` from `location` WHERE `l_code`='".$loc."'"));
$mailto=$loc_detail[0];
//echo $mailto;
$loc=$loc_detail[1];
echo $loc;


$insert_query= "INSERT INTO `test_survey`( `loc`, `fname`, `mob`, `email`, `q1`, `q2`, `q3`, `q4`, `q5`, `comment`, `allow_inbox`, `satisfaction`, `dine_time`) 
VALUES ('".$loc."','".$fname."','".$mob."','".$email."','".$q1."','".$q2."','".$q3."','".$q4."','".$rb."','".$comment."','".$checkbx."','".$statisfaction."','".$time."')";
//echo $insert_query;
//$ex_insert_query=mysqli_query($con,$insert_query);
http_response_code(200);



$id="dhairya@alahliagroup.com";


$message="<html><body><table>";
$message .="<tr> <td colspam='2'> Point are out of 50 </td></tr>";
$message .="<tr> <td colspam='2'> The customer is Not Satisfied with Bellow Details and Points: </td></tr>";
$message .= " <tr> <td> Name:</td><td>".$fname." </td> </tr>";
$message .= " <tr> <td> Mob No:</td><td>".$mob." </td> </tr>";
$message .= " <tr> <td> Mail:</td><td>".$email." </td> </tr>";
$message .= " <tr> <td> Location:</td><td>".$loc." </td> </tr>";
$message .= " <tr> <td> Time:</td><td>".$time." </td> </tr>";
$message .= " <tr> <td> How would you rate food taste and quality?:</td><td>".$q1." </td> </tr>";
$message .= " <tr> <td> How would you rate our staff performance?:</td><td>".$q2." </td> </tr>";
$message .= " <tr> <td> How was your overall experience?:</td><td>".$q3." </td> </tr>";
$message .= " <tr> <td> Value for money?:</td><td>".$q4." </td> </tr>";
$message .= " <tr> <td> How did you hear about us?:</td><td>".$rb." </td> </tr>";
$message .= " <tr> <td> Comment:</td><td>".$comment." </td> </tr>";
$message .="</table></body></html>";

$messagealt ="The customer is Not Satisfied with Bellow Details and Points: 
    Name = '".$fname."', Mobile = '".$mob."', Email = '".$email."', Q1 = '".$q1."', Q2 = '".$q2."', Q3 = '".$q3."', Q4 = '".$q4."', Q5 = '".$rb."', Comment = '".$comment."'";


$mail = new PHPMailer;
$mail->SMTPDebug = 4;                               // Enable verbose debug output
//$mail->IsSMTP();
$mail->Host = 'bareburger.ae';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'it@bareburger.ae';                 // SMTP username
$mail->Password = 'LyXW;Rh0y;}L';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->isHTML(true);                                  // Set email format to HTML
$mail->setFrom('it@bareburger.ae', 'Non-reply-mail');
$mail->addAddress($id);
//$mail->addAddress($mailto);
//$mail->addAddress($id);
//$mail->addCC($id);
//$mail->addCC('fabrice@alahliagroup.com');
// 	if($statisfaction == "Not Satisfied"){
// 	    $mail->addCC('fabrice@alahliagroup.com');
// 	}
$mail->Subject = $statisfaction." Customer" ;
$mail->Body    = $message;
$mail->AltBody = $messagealt;

if(!$mail->send()) {
    echo 'Mail could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo " - Thank you for the feedback " . date("h:i:sa");
    header("Location: https://bareburger.ae");
}


if ($_POST){
    //@important: Please change this before using
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => "Error2"
     ]
 );
}