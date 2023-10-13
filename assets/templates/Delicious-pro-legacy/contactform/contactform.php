<?php
/*
  PHP book a table form script
  Copyrights BootstrapMade.com
*/

/***************** Configuration *****************/

// Enter your email, where you want to receive the bookings.
$contact_email_to = '';

// Subject
$contact_subject = 'Booking from the website';

// Name too short error text
$contact_error_name = 'Name is too short or empty!';

// Email invalid error text
$contact_error_email = 'Please enter a valid email!';

// Required fields error message
$contact_error_fields = 'Please, fill all the required fields';

// Message too short error text
$contact_error_message = 'Too short message! Please enter something';

/********** Do not edit from the below line ***********/

if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) and strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
  die('Sorry Request must be Ajax POST');
}

if ( isset($_POST) ) {
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
  $date = filter_var($_POST['date'], FILTER_SANITIZE_STRING);
  $time = filter_var($_POST['time'], FILTER_SANITIZE_STRING);
  $people = filter_var($_POST['people'], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

  if (strlen($name) < 4) {
    die($contact_error_name);
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die($contact_error_email);
  }

  if (strlen($message) < 3) {
    die($contact_error_message);
  }

  if (strlen($phone) < 1 || strlen($date) < 1 || strlen($time) < 1 || strlen($people) < 1 ) {
    die($contact_error_fields);
  }

  $prepare_smessage = $contact_subject.PHP_EOL;
  $prepare_smessage .= "Name: $name".PHP_EOL;
  $prepare_smessage .= "Phone: $phone".PHP_EOL;
  $prepare_smessage .= "Date: $date".PHP_EOL;
  $prepare_smessage .= "Time: $time".PHP_EOL;
  $prepare_smessage .= "People: $people".PHP_EOL;
  $prepare_smessage .= "Message: $message".PHP_EOL;

  if (!isset($contact_email_from)) {
    $contact_email_from = 'contactform@'.@preg_replace('/^www\./', '', $_SERVER['SERVER_NAME']);
  }

  $sendemail = mail($contact_email_to, $contact_subject, $prepare_smessage,
    "From:  $name <$contact_email_from>" . PHP_EOL .
    "Reply-To: $email" . PHP_EOL .
    "X-Mailer: PHP/" . phpversion()
  );

  if ( $sendemail ) {
    echo 'OK';
  } else {
    echo 'Could not send mail! Please check your PHP mail configuration.';
  }
}
