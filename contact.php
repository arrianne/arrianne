<!-- https://www.youtube.com/watch?v=j7lnU8hJRjo -->
<!-- this was very helpful ^ -->

<?php // Check if form was submitted
if(isset($_POST['submit'])) {
  $name = trim(htmlspecialchars($_POST['name'], ENT_QUOTES));
  $email = trim($_POST['email']);
  $messsage = trim(htmlspecialchars($_POST['message'], ENT_QUOTES));

  $mailTo = "arrianneoshea@hotmail.co.uk";
  $headers = "From: ".$email;
  $txt = "You have received an email from ".$name".\n\n".$message;

  mail($mailTo, $txt, $headers);
  header("Location: index.html?mailsend");

}	?>
