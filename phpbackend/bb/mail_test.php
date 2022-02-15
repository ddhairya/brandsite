<?php 

			require("phpmail/PHPMailerAutoload.php");
			date_default_timezone_set("Asia/Dubai");
			$id="dhairya@alahliagroup.com";

			$mail = new PHPMailer;			
			//$mail->SMTPDebug = 4;                               // Enable verbose debug output
			//$mail->SMTPDebug = SMTP::DEBUG_SERVER;    
   			$mail->isSMTP();                                      // Set mailer to use SMTP
			$mail->Host = 'smtp.office365.com';  // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                               // Enable SMTP authentication
			$mail->Username = 'it@alahliagroup.com';                 // SMTP username
			$mail->Password = 'UmCn#73!8';                           // SMTP password
			$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 587;                                    // TCP port to connect to
			
			$mail->setFrom('it@bareburger.ae', 'IT');
			
			$mail->addAddress($id);               
			$mail->isHTML(true);                                  // Set email format to HTML
			
			$mail->Subject = 'Not Satisfied Customer';
			$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
			$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
			
			if($mail->send()) {
                //echo 'Message could not be sent.';
                echo 'Mailer Error: ' ;
            } else {
                
                echo "The time is " . date("h:i:sa");
                echo 'Message has been sent';
            }
?>