<?php 
	$con=mysqli_connect("localhost","bb_admin","nr+2z87mtgsu");
	$db=mysqli_select_db($con,"bb");
	//echo"Hello";
	//$con=mysqli_connect("localhost","alahliag_bb","bb@123");
	//$db=mysqli_select_db($con,"alahliag_bb");

	$con=mysqli_connect("localhost","bb_admin","nr+2z87mtgsu");
	$db=mysqli_select_db($con,"bb");
	$pep = 'e444620b2b122ab8c2ecb76e7a15442c';
	
	if (mysqli_connect_errno($con))
		  {
		  echo "Failed to connect to MySQL: " . mysqli_connect_error();
		  }
		else
		{
			//echo "Success";
		}

?>