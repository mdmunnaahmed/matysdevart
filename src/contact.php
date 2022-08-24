<?php

if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])) {
    echo 'something is wrong! Please try agian';
    exit();
}
$email_from = $_POST['email'];
$email_subject = "Contact Form: ";
$email_message = "Please find below a message submitted by " . stripslashes($_POST['name']) . "\n\n";
$email_message .= " on " . date("d/m/Y") . " at " . date("H:i") . "\n\n";
$email_message .= $_POST['contact_message'];

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email_from \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

mail('posakele@email.com', $email_subject, $email_message, $headers);
echo "Thanks for contacting us.";
