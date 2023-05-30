document.getElementById("accountForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Fetch the form values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return false;
          }
    
        else
        alert("Account settings saved successfully!");
    }

    event.preventDefault(); // Prevent the default form submission behavior
  
    // Refresh the page after a short delay
    setTimeout(function() {
        location.reload();
    }, 100);
    
});