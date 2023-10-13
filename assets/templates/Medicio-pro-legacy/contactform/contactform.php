<?php
/*
  PHP contact form script
  Copyrights BootstrapMade.com
*/

/***************** Configuration *****************/

// Enter your email, where you want to receive the messages.
$contact_email_to = '';

// Contact Subject
$contact_subject = 'Online Contat Form Appoinment';

// Name too short error text
$contact_error_name_first = 'First Name is too short or empty!';
$contact_error_name_last = 'Last Name is too short or empty!';

// Email invalid error text
$contact_error_email = 'Please enter a valid email!';

// Subject too short error text
$contact_error_phone = 'Phone is too short or empty!';

/********** Do not edit from the below line ***********/

if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) and strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
  // The Request must be Ajax POST, enter a message for direct access requests.
  die('Invalid Request!');
}

if ( isset($_POST) ) {
  $first_name = filter_var($_POST['first_name'], FILTER_SANITIZE_STRING);
  $last_name = filter_var($_POST['last_name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);

  if (strlen($first_name) < 3) {
    die($contact_error_name_first);
  }

  if (strlen($last_name) < 3) {
    die($contact_error_name_last);
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die($contact_error_email);
  }

  if (strlen($phone) < 1) {
    die($contact_error_phone);
  }

  $message = $contact_subject.PHP_EOL;
  $message .= 'Name: '.$first_name.' '.$last_name.PHP_EOL;
  $message .= 'Email: '.$email.PHP_EOL;
  $message .= 'Phone: '.$phone.PHP_EOL;

  if(!isset($contact_email_from)) {
    $contact_email_from = "contactform@" . @preg_replace('/^www\./','', $_SERVER['SERVER_NAME']);
  }

  $sendemail = mail($contact_email_to, $contact_subject, $message,
    "From:  $first_name  $last_name <$contact_email_from>" . PHP_EOL .
    "Reply-To: $email" . PHP_EOL .
    "X-Mailer: PHP/" . phpversion()
  );

  if ( $sendemail ) {
    echo 'OK';
  } else {
    echo 'Could not send mail! Please check your PHP mail configuration.';
  }
}
