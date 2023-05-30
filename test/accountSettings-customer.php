<?php
define('SERVER_PATH', '../../private/server/');
define('PUBLIC_PATH', '../');
session_start();
error_reporting(0);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Washify | Account Settings</title>
    <!-- Styles -->
    <link rel="stylesheet" href="<?php echo PUBLIC_PATH ?>/css/style.css" />
    <link rel="icon" href="<?php echo PUBLIC_PATH ?>/img/laundry (1).png" />

    <!-- ====== ionicons ======= -->
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>

    <!-- =========== Scripts =========  -->
    <script src="<?php echo PUBLIC_PATH ?>/scripts/main.js"></script>
    <script src="<?php echo PUBLIC_PATH ?>/scripts/accountSettings-customer.js"></script>
    
    
  </head>
  <body>
    <!-- =============== Navigation ================ -->
  <div class="container">
  <?php require PUBLIC_PATH.'partials/navigation-manager.php' ?>

    <!-- ========================= Main ==================== -->
    <div class="main">
    <?php require PUBLIC_PATH.'partials/header-manager.php' ?>


    <!--insert content here----------------------------------->
    <div class="content">
        <h2>Account Settings</h2>
        <form id="accountForm">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="E.g. : John Doe" required>
        </div>
        <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="text" pattern="[88]{2}[01]{2}[3-9]{1}[0-9]{8}" id="phone" name="phone" placeholder="880-1X-XXXX-XXXX" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="example@domain.com" required>
        </div>
        <div class="form-group">
            <label for="oldPassword">Old Password:</label>
            <input type="password" id="oldPassword" name="oldPassword" placeholder="Old Password" required>
        </div>
        <div class="form-group">
            <label for="newPassword">Password:</label>
            <input type="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$" id="newPassword" name="newPassword" placeholder="Choose a strong password" required>
        </div>
        <div class="form-group">
            <label for="confirm-password">Confirm Password:</label>
            <input type="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$" id="confirm-password" name="confirm-password" placeholder="Re-enter your password" required>
        </div>
        <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" placeholder="54/1 House Building, Uttara, Dhaka." required>
        </div>
        <button type="submit">Save Changes</button>
        </form>
    </div>
    </div>
  </body>
</html>
