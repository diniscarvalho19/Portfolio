<?php
// This is a simple example. In a real-world scenario, you'd validate input, sanitize data, etc.
$to = "your_email@example.com";
$subject = "New email from your website";
$message = "Someone clicked the send email button on your website.";
$headers = "From: your_website@example.com";

// Send email
mail($to, $subject, $message, $headers);
?>