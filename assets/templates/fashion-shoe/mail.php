<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$submitMessage = $_POST['submitMessage'];
	$formcontent=" From: $name \n subject: $subject \n Message: $message";
	$recipient = "admin@DevItems.com";
	$subject = "Add Your Subject Here";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	header("location: thank-you.html"); 
?>