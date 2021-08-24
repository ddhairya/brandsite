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


$com = $_POST['com'];
$loc= $_POST['loc'];
$equip= $_POST['equip'];
$desc= $_POST['desc'];
$priority= $_POST['priority'];
$fname= $_POST['fname'];
$emailCC1= $_POST['email'];


$target_dir = "ticket_upload/";

if($_FILES['fileToUpload'])
{
    $file_name = $_FILES["fileToUpload"]["name"];
    $file_tmp_name = $_FILES["fileToUpload"]["tmp_name"];
    $error = $_FILES["fileToUpload"]["error"];

    if($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    }else 
    {
        $random_name = date("Y-m-d h:i:sa")."-".$file_name;
        $upload_name = $target_dir.strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
        $upload_name = str_replace(':', '-', $upload_name);

        if(move_uploaded_file($file_tmp_name , $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully"
              );
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
    }    

}










$mailto1 = 'maintenance@labriocheuae.com';
$mailto2 = 'Ganesh@labriocheuae.com';

$loc_detail=mysqli_fetch_row(mysqli_query($con,"SELECT `l_email` from `location` WHERE `l_c_name`='".$com."'"));
$locMailCC2=$loc_detail[0];
//echo $mailto;


$insert_query= "INSERT INTO `test_ticket`(`t_l_name`, `t_c_name`, `t_equipment`, `t_description`, `t_priority`,`t_file`, `fname`, `t_email`) 
VALUES ('".$loc."','".$com."','".$equip."','".$desc."','".$priority."','".$upload_name."','".$fname."','".$emailCC1."')";
//echo $insert_query;
$ex_insert_query=mysqli_query($con,$insert_query);

http_response_code(200);

$last_id=mysqli_fetch_row(mysqli_query($con,"SELECT LAST_INSERT_ID();"));
$ticket_id = $last_id[0];
echo $ticket_id;
$id="dhairya@alahliagroup.com";


$message="<html><body><table>";
$message .="<tr> <td> Ticket Number - </td><td> '".$ticket_id."'</td></tr>";
$message .= " <tr> <td> Company:</td><td>".$com." </td> </tr>";
$message .= " <tr> <td> Location:</td><td>".$loc." </td> </tr>";
$message .= " <tr> <td> Equipment:</td><td>".$equip." </td> </tr>";
$message .= " <tr> <td> Description:</td><td>".$desc." </td> </tr>";
$message .= " <tr> <td> Priority:</td><td>".$priority." </td> </tr>";
$message .= " <tr> <td> User Name:</td><td>".$fname." </td> </tr>";
$message .="</table></body></html>";

$messagealt ="Ticket Number - '".$ticket_id."': Comapany = '".$com."', Location = '".$loc."', Equipemnt = '".$equip."', Description = '".$desc."', Priority = '".$priority."', User Name = '".$fname."'";


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

$mail->addAttachment($upload_name);  

$mail->Subject ="Do not reply ". $ticket_id." Ticket Number " ;
$mail->Body    = $message;
$mail->AltBody = $messagealt;

//$mail->send()

if(!$mail->send()) {
     echo 'Mail could not be sent.';
     echo 'Mailer Error: ' . $mail->ErrorInfo;
 } else {
     echo " - Thank you for the feedback " . date("h:i:sa");
     //header("Location: https://bareburger.ae");
 }


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