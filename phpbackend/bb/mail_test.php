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
			
			
			
			// $mail->Host = 'bareburger.ae';  // Specify main and backup SMTP servers
			// $mail->SMTPAuth = true;                               // Enable SMTP authentication
			// $mail->Username = 'it@bareburger.ae';                 // SMTP username
			// $mail->Password = 'LyXW;Rh0y;}L';                           // SMTP password
			// $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			// $mail->Port = 465;                                    // TCP port to connect to
			
			
			
			
			
//          $mail->setFrom('it@alahliagroup.com', 'IT');
			$mail->setFrom('it@bareburger.ae', 'IT');
			//$mail->addAddress('dhairya@alahliagroup.com', 'Dhairya');     // Add a recipient
			
			$mail->addAddress($id);               
			//$mail->addAddress('dhairya@alahliagroup.com');	// Name is optional
			//$mail->addReplyTo('info@example.com', 'Information');
			//$mail->addCC('d_dhairya@yahoo.com');
			//$mail->addCC('dhairya9276@gmail.com');			
			//$mail->addBCC('bcc@example.com');
			
			//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
			//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
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