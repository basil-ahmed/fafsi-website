<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $eveningNumber = $_POST['eveningNumber'];
    $coBorrower = $_POST['coBorrower'];
    $contactMethod = $_POST['contactMethod'];

    $to = "farid.premjee@fafsi.com"; // Your email address
    $subject = "New Form Submission";

    $message = "
    First Name: $firstName\n
    Last Name: $lastName\n
    Email: $email\n
    Evening Number: $eveningNumber\n
    Co-Borrower: $coBorrower\n
    Preferred Contact Method: $contactMethod
    ";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request method.";
}
?>
