<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>helpdesk.myfortishealthcare</title>

    <!-- BOOTSTRAP LINKS   -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="css/login.css">



    <script src="https://kit.fontawesome.com/3773351d80.js" crossorigin="anonymous"></script>
  </head>
  <body>

    <!-- Section: Design Block -->
<section class="text-center fortis">
  <!-- Background image -->
  <div class="p-5 bg-image justify-content-center fortis-image " style="
        background-image: url('download.png');
       background-repeat: no-repeat;
       background-origin: content-box;

       background-position: center -80px;


        height: 300px;
        background-color: green;">
      </div>
  <!-- Background image -->

  <div class="card mx-4 mx-md-5 shadow-5-strong justify-content-center middle-container" style="
        margin-top: -160px;

        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
      
    <div class="card-body py-5 px-md-5 justify-content-center ">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8 high-div ">

          <form class="login-form justify-content-center" >


      <div class="login-container justify-content-center">
            <!-- Email input -->
            <div class="form-outline mb-4 justify-content-center email">
              <input type="text" id="inlineFormInput" class="form-control" />
              <label class="form-label" for="inlineFormInput"><b>Username</b></label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4 justify-content-center password">
              <input type="password" id="form3Example4" class="form-control" />
              <label class="form-label" for="form3Example4"><b>Password</b></label>
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-center mb-4">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
              <span class="checkmark"></span>
              <label class="form-check-label " for="form2Example33">
                Keep me signed in
              </label>
            </div>

            <!-- Submit button -->
            <button  class="btn btn-outline-success btn-block mb-4" onclick="validate()">
              Log in
            </button>





            <p>Help Desk Software by ManageEngine ServiceDesk Plus | 13.0
Copyright © 2023 ZOHO Corporation. All rights reserved.</p>




</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->



<script>

function validate()
{
  var username = document.getElementById("inlineFormInput").value;
  var password = document.getElementById("form3Example4").value;

  if(username == "hit.ggn" && password == "f@2023")
  {

    window.location.href = "home.php";
    alert("login success");

  }
  else
  {
    alert("login fail");
  }
}

</script>

  </body>
</html>
