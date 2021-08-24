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

$visit = $_POST['visit'];
$user= $_POST['user'];
$solt= $_POST['solt'];
$desc= $_POST['desc'];
$status= $_POST['status'];
$t_id= $_POST['id'];
$com= $_POST['comp'];
$resp_date = date("Y-m-d h:i:sa");
//t_resp_date


$mailcc1 = 'maintenance@labriocheuae.com';
$mailcc2 = 'Ganesh@labriocheuae.com';

$loc_detail=mysqli_fetch_row(mysqli_query($con,"SELECT `l_email` from `location` WHERE `l_c_name`='".$com."'"));
$locMailTo2=$loc_detail[0];
//echo $locMailTo2;

$user_detail=mysqli_fetch_row(mysqli_query($con,"SELECT `t_email` from `test_ticket` WHERE `t_id`='".$t_id."'"));
$locMailTo1=$user_detail[0];
//echo $locMailTo1;


// $insert_query= "INSERT INTO `test_ticket`(`t_l_name`, `t_c_name`, `t_equipment`, `t_description`, `t_priority`,`t_file`, `fname`, `t_email`) 
// VALUES ('".$loc."','".$com."','".$equip."','".$desc."','".$priority."','".$upload_name."','".$fname."','".$emailCC1."')";
// //echo $insert_query;
// $ex_insert_query=mysqli_query($con,$insert_query);

$update_query = "UPDATE `test_ticket` 
                 SET `t_status`='".$status."',`t_assign_user`='".$user."',`t_visit_date`='".$visit."',`t_maint_descript`='".$desc."',`t_maint_solution`= '".$solt."',`t_resp_date`= '".$resp_date."' 
                 WHERE `t_id` = '".$t_id."'";
$ex_insert_query=mysqli_query($con,$update_query);      

//echo $update_query;

http_response_code(200);

// $last_id=mysqli_fetch_row(mysqli_query($con,"SELECT LAST_INSERT_ID();"));
// $ticket_id = $last_id[0];
// echo $ticket_id;
$id="dhairya@alahliagroup.com";


$message="<html><body><table>";
$message .="<tr> <td> Ticket Number - </td><td> '".$t_id."'</td></tr>";
$message .= " <tr> <td> User:</td><td>".$user." </td> </tr>";
$message .= " <tr> <td> Solution:</td><td>".$solt." </td> </tr>";
$message .= " <tr> <td> Description:</td><td>".$desc." </td> </tr>";
$message .= " <tr> <td> Visit Details:</td><td>".$visit." </td> </tr>";
$message .= " <tr> <td> Status:</td><td>".$status." </td> </tr>";
$message .="</table></body></html>";

$messagealt ="Ticket Number - '".$t_id."': User = '".$user."', Solution = '".$solt."', Description = '".$desc."', Vistt Details = '".$visit."', Status = '".$status."'";


$mail = new PHPMailer(true);
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

//$mail->addAddress($mailto1);
//$mail->addAddress($mailto2);
$mail->addAddress($id);
//$mail->addCC($id);
//$mail->addCC($emailCC1);
//$mail->addCC($locMailCC2);
//$mail->addCC('fabrice@alahliagroup.com');


$mail->Subject ="Do not reply ". $t_id." Ticket Number " ;
$mail->Body    = $message;
$mail->AltBody = $messagealt;

//$mail->send()

// if(!$mail->send()) {
//      echo 'Mail could not be sent.';
//      echo 'Mailer Error: ' . $mail->ErrorInfo;
//  } else {
//      echo " - Thank you" . date("h:i:sa");
//      //header("Location: https://bareburger.ae");
//  }


// if ($_POST){
//     //@important: Please change this before using
// } else {
//  // tell the user about error
//  echo json_encode(
//      [
//         "sent" => false,
//         "message" => "Error2"
//      ]
//  );
//}
?>