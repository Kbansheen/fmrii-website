<?php

include("connect.php");

$id = $_GET['id'];

$query = "DELETE FROM client where Request_id = '$id'";
$data = mysqli_query($conn,$query);

if($data)
{
  echo "record deleted";
}
else {
  echo "failed";
}

 ?>
<meta http-equiv = "refresh" content = "0; url = http://localhost/fmri/display.php" />
