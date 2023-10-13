<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=" From: $name \n  Message: $message";
$recipient = "admin@softitbd.com";
$mailheader = "From: $email \r\n";
mail($recipient, $formcontent, $mailheader) or die("Error!");
header("location: thank-you.html")
?>