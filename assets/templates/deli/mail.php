<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$submitMessage = $_POST['submitMessage'];
	$formcontent=" From: $name \n subject: $subject \n Order: $phone \n Message: $message \n subject: $subject";
	$recipient = "support@devitems.com";
	$subject = "Add Your Subject Here";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	header("location: thank-you.html"); 
?>