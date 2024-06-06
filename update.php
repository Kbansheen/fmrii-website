
<?php
error_reporting(0);
include("connect.php");
$id =  $_GET['id'];

$query = "select * from client where Request_id = '$id'";

$data = mysqli_query($conn, $query);

$total = mysqli_num_rows($data);
$result = mysqli_fetch_assoc($data);

 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Update Request </title>



    <!-- BOOTSTRAP LINKS   -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

    <link rel="stylesheet"  href="css/form.css">

    <link rel="icon" href="favicon.ico">

    <!-- FONT AWESOME -->
    <script src="https://kit.fontawesome.com/3773351d80.js" crossorigin="anonymous"></script>

  </head>
  <body>

    <div class="popup" id="x-popup">
      <div class="popup-content">
        <a target="_blank" class="no-style" href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjus9OgsNWBAxWMF3IKHahAAJUYABAAGgJzZg&ase=2&gclid=CjwKCAjwseSoBhBXEiwA9iZtxvxKjjv2vV5AS2hZOJGmncbZDg7np1KVnRCa0VrpJj_Te5F7_ojB5xoCBCoQAvD_BwE&ohost=www.google.com&cid=CAESVeD2N3c64OVN2QaYVx_OyduPc84L7uhbZkjOtoCITvHlscmnUGkFUg2htPFCuioIivBS6_Ms1eavg0jqtG1pkF6riGAvU0HYPAZk-UzugyYDiDNmKBw&sig=AOD64_2skotKFH4RfM0-GocikZ9e3BTP7g&q&nis=4&adurl&ved=2ahUKEwip98WgsNWBAxWuSWwGHQBBA2IQ0Qx6BAgPEAE"><h3>Zoho</h3></a>
        <p class="zoho">Zoho Corporation is a multinational technology company that offers a suite of
           cloud-based software applications for businesses. It was founded in 1996 by Sridhar Vembu and
            Tony Thomas, and is headquartered in Chennai, India. Zoho provides a wide range of software
            solutions designed to streamline various aspects of business operations, including customer
           relationship management (CRM), project management, accounting, human resources, marketing automation, and more.</p>
           <img class="z-img" src="data:image/png;base64,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" alt="">
        <a class="close" href="#">x</a>

      </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark up-nav">
    <div class="container-fluid">



      <a class="navbar-brand" href="#">
<img class="fortis" src="data:image/png;base64,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" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
<img class="ibm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4rUVWDMjjaWBg4Z-GPl7e2d3gXJ6QcpcKQ&usqp=CAU" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item home">
            <a class="nav-link " aria-current="page" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="dash.html">Dashboard</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Requests</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#">Problems</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#">Changes</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#">Projects</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#">Solutions</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#">Assets</a>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#">Reports</a>
          </li>

          <li class="nav-item glass">
            <a class="nav-link " href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
            <span>Search</span>
          </li>

          <li class="nav-item raise">
            <a class="nav-link " href="#"><i class="fa-solid fa-hand"></i></a>
            <span>Raise request</span>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#"><i class="fa-solid fa-bolt"></i></a>
            <span>Quick actions</span>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#"><i class="fa-solid fa-clock-rotate-left"></i></a>
            <span>Recent items</span>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#"><i class="fa-regular fa-bell"></i></a>
            <span>Notifications</span>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#"><i class="fa-regular fa-circle-question"></i></a>
            <span>Help</span>
          </li>

          <li class="nav-item">
            <a class="nav-link " href="#"><i class="fa-solid fa-user"></i></a>
            <span>User profile</span>
          </li>
      </ul>

      </div>
    </div>
  </nav>

<div class="container-fluid title-container">
  <nav class="navbar bg-white down-nav">
  <form class="container-fluid justify-content-start">
    <button class="btn btn-sm btn-outline-secondary sp-button" type="button">AD Self Service</button>
    <button class="btn btn-sm btn-outline-secondary second-button sp-button" type="button">Zoho Creator App</button>
    <button class="btn btn-sm btn-outline-secondary second-button sp-button" type="button"><i class="fa-regular fa-clipboard clipboard"></i></button>

  </form>
</nav>
</div>



<div class="container-fluid middle-container">

  <nav class="navbar  request-nav">
     <div class="container-fluid">
    <form class="container-fluid justify-content-start   ">
<a href="display.php" class="btn req-button">
      <i class="fa-solid fa-left-long"></i>
      </a>
  <span class="navbar-text add-req">
      Update added request
    </span>
  </form>
  </div>
  </nav>


<form class="form-fill" action="#" method="POST">
  <div class="row">
    <div class="col-4">
      <label for="inlineFormInput">Requester Name</label>
      <input type="text" value="<?php echo $result['rname']; ?>"
      class="form-control mb-2" id="inlineFormInput" placeholder="Your name" name="rname" required>
    </div>

    <div class="form-group col-lg-2 req-type">
      <label for="inputState">Request type</label>
      <select id="inputState"  class="form-control" name="rtype" required>
        <option value="">Select..</option>

        <option value="incident"
        <?php
           if($result['rtype'] == 'incident')
           {
             echo "selected";
           }
         ?>>incident</option>
        <option value="service"
        <?php
           if($result['rtype'] == 'service')
           {
             echo "selected";
           }
         ?>>service</option>
      </select>
      </div>

  </div>

  <div class="row">
      <div class="col-7">
        <label for="inlineFormInput">Subject</label>
<input type="text" value="<?php echo $result['subject']; ?>" class="form-control mb-2 " id="inlineFormInput" placeholder="" name="subject" required>

      </div>

      <div class="form-group col-lg-4 status">
        <label for="inputState">Department</label>
        <select id="inputState"   class="form-control" name="department" required>
          <option value="">Select..</option>

          <option value="Anesthesia"
          <?php
             if($result['department'] == 'Anesthesia')
             {
               echo "selected";
             }

           ?>
          >Anesthesia</option>

          <option value="Biomedical"
          <?php
             if($result['department'] == 'Biomedical')
             {
               echo "selected";
             }
           ?>
          >Biomedical</option>

          <option value="Blood bank"
          <?php
             if($result['department'] == 'Blood bank')
             {
               echo "selected";
             }
           ?>
          >Blood bank</option>

          <option value="Cafeteria"
          <?php
             if($result['department'] == 'Cafeteria')
             {
               echo "selected";
             }
           ?>>Cafeteria</option>
          <option value="Cardiac OT"
          <?php
             if($result['department'] == 'Cardiac OT')
             {
               echo "selected";
             }
           ?>>Cardiac OT</option>
          <option value="CEO office"
          <?php
             if($result['department'] == 'CEO office')
             {
               echo "selected";
             }
           ?>>CEO office</option>
          <option value="Chemotherapy"
          <?php
             if($result['department'] == 'Chemotherapy')
             {
               echo "selected";
             }
           ?>>Chemotherapy</option>
          <option value="Dialysis"
          <?php
             if($result['department'] == 'Dialysis')
             {
               echo "selected";
             }
           ?>>Dialysis</option>
          <option value="ECG"
          <?php
             if($result['department'] == 'ECG')
             {
               echo "selected";
             }
           ?>>ECG</option>
          <option value="FortisINN"
          <?php
             if($result['department'] == 'FortisINN')
             {
               echo "selected";
             }
           ?>>FortisINN</option>
          <option value="Gynae"
          <?php
             if($result['department'] == 'Gynae')
             {
               echo "selected";
             }
           ?>>Gynae</option>
          <option value="HR"
          <?php
             if($result['department'] == 'HR')
             {
               echo "selected";
             }
           ?>>HR</option>
          <option value="ICU"
          <?php
             if($result['department'] == 'ICU')
             {
               echo "selected";
             }
           ?>>ICU</option>
          <option value="IT"
          <?php
             if($result['department'] == 'IT')
             {
               echo "selected";
             }
           ?>>IT</option>
          <option value="MRI"
          <?php
             if($result['department'] == 'MRI')
             {
               echo "selected";
             }
           ?>>MRI</option>
          <option value="NICU"
          <?php
             if($result['department'] == 'NICU')
             {
               echo "selected";
             }
           ?>>NICU</option>
          <option value="OICU"
          <?php
             if($result['department'] == 'OICU')
             {
               echo "selected";
             }
           ?>>OICU</option>
          <option value="OPD"
          <?php
             if($result['department'] == 'OPD')
             {
               echo "selected";
             }
           ?>>OPD</option>
          <option value="PICU"
          <?php
             if($result['department'] == 'PICU')
             {
               echo "selected";
             }
           ?>>PICU</option>
        </select>
        </div>

        <div class="row">
            <div class="col-4">
              <label for="inputState">Assigned to</label>
              <select id="inputState"  class="form-control" name="assigned" required>
                <option value="">Select..</option>

                <option value="Fortis Amritsar"
                <?php
                   if($result['assigned'] == 'Fortis Amritsar')
                   {
                     echo "selected";
                   }
                 ?>>Fortis Amritsar</option>
                <option value="Fortis Arcot"
                <?php
                   if($result['assigned'] == 'Fortis Arcot')
                   {
                     echo "selected";
                   }
                 ?>>Fortis Arcot</option>
                <option value="Fortis Bangalore"
                <?php
                   if($result['assigned'] == 'Fortis Bangalore')
                   {
                     echo "selected";
                   }
                 ?>>Fortis Bangalore</option>
                <option value="Fortis Dehradun"
                <?php
                   if($result['assigned'] == 'Fortis Dehradun')
                   {
                     echo "selected";
                   }
                 ?>>Fortis Dehradun</option>
                <option value="Fortis Faridabad"
                <?php
                   if($result['assigned'] == 'Fortis Faridabad')
                   {
                     echo "selected";
                   }
                 ?>>Fortis Faridabad</option>
                <option value="Fortis GGN-FMRI"
                <?php
                   if($result['assigned'] == 'Fortis GGN-FMRI')
                   {
                     echo "selected";
                   }
                 ?>>Fortis GGN-FMRI</option>
                <option value="Fortis Jaipur"
                <?php
                   if($result['assigned'] == 'Fortis Jaipur')
                   {
                     echo "selected";
                   }
                 ?>>Fortis Jaipur</option>
                <option value="Fortis Noida"
                <?php
                   if($result['assigned'] == 'Fortis Noida')
                   {
                     echo "selected";
                   }
                 ?>>Fortis Noida</option>
            </select>
            </div>

            <div class="form-group col-lg-2 status">
              <label for="inputState">Status</label>
              <select id="inputState"  class="form-control" name="status" required>
                <option value="">Select..</option>

                <option value="Open"
                <?php
                   if($result['status'] == 'Open')
                   {
                     echo "selected";
                   }
                 ?>>Open</option>
                <option value="WIP"
                <?php
                   if($result['status'] == 'WIP')
                   {
                     echo "selected";
                   }
                 ?>>WIP</option>
                <option value="Resolved"
                <?php
                   if($result['status'] == 'Resolved')
                   {
                     echo "selected";
                   }
                 ?>>Resolved</option>
              </select>
              </div>

              <div class="form-group col-lg-2 status">
                <label for="inputState">Priority</label>
                <select id="inputState" value="<?php echo $result['priority']; ?>"  class="form-control" name="priority" required>
                  <option value="">Select..</option>

                  <option value="s1"
                  <?php
                     if($result['priority'] == 's1')
                     {
                       echo "selected";
                     }
                   ?>
                  >s1</option>

                  <option value="s2"
                  <?php
                     if($result['priority'] == 's2')
                     {
                       echo "selected";
                     }
                    ?>
                  >s2</option>

                  <option value="s3"
                  <?php
                     if($result['priority'] == 's3')
                     {
                       echo "selected";
                     }
                   ?>
                  >s3</option>

                  <option value="s4"
                  <?php
                     if($result['priority'] == 's4')
                     {
                       echo "selected";
                     }
                   ?>
                  >s4</option>
                </select>
                </div>




<nav class="navbar fixed-bottom navbar-light  bottom-nav " >

  <input type="submit" name="update" value="Update" class="btn submit-button">

</nav>

</form>



</div>
      </body>
    </html>



<?php

if($_POST['update'])
{
    $rname =  $_POST['rname'];
    $rtype =  $_POST['rtype'];
    $subject =  $_POST['subject'];
    $department =  $_POST['department'];
    $assigned =  $_POST['assigned'];
    $status =  $_POST['status'];
    $priority =  $_POST['priority'];


    if($rname != "" && $rtype != "" && $subject != "" && $department != ""
     && $assigned != "" && $status != "" && $priority != "" )
    {

$query = "UPDATE client set rname='$rname', rtype='$rtype', subject='$subject', department='$department',
 assigned='$assigned', status='$status', priority='$priority' WHERE Request_id='$id'";

    $data = mysqli_query($conn,$query);

    if($data)
    {
      echo "<script>alert('Request updated');</script>";
      ?>
<meta http-equiv = "refresh" content = "0; url = http://localhost/fmri/display.php" />

      <?php
    }
    else
    {
        echo "<script>alert('failed to update');</script>";
    }
  }

  else
  {
    echo "<script>alert('please fill in all the details');</script>";
  }

}




 ?>
