
<?php // Check if form was submitted
if ($_POST['submit'] {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $messsage = $_POST['message'];

  $mailTo = "arrianneoshea@hotmail.co.uk";
  $headers = "From: ".$email;
  $txt = "You have received an email from ".$name".\n\n".$message;

  mail($mailTo, $txt, $headers);
  header("Location: index.html?mailsend");

}	?>
