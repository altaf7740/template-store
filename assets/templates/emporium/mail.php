<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$number = $_POST['number'];
	$message = $_POST['message'];
	$formcontent=" From: $name \n subject: $subject \n Number: $number \n  Message: $message";
	$recipient = "admin@softitbd.com";
	$subject = "Add Your Subject Here";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	header("location: thank-you.html")
?>