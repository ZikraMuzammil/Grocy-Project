
document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.querySelector(".btnRegister");
    registerBtn.addEventListener("click", function (event) {
        event.preventDefault();

    
        const firstName = document.querySelector('input[placeholder="First Name *"]').value;
        const lastName = document.querySelector('input[placeholder="Last Name *"]').value;
        const password = document.querySelector('#home #password').value;
        const confirmPassword = document.querySelector('#home #con-password').value;
        const email = document.querySelector('#home #email').value;
        const roleSelect = document.querySelector('#home select');
        const selectedRole = roleSelect.value;

        if (!firstName || !lastName || !password || !confirmPassword || !email || selectedRole === "Please select your Role") {
            alert("Please complete all fields correctly in the registration form.");
            return;
        }

        else if (password !== confirmPassword) {
            alert("Passwords do not match in the registration form.");
            return;
        }
    
        else{
            window.location.href = "salesDashBoard.html";
        }
       
    });

  
    const loginBtn = document.querySelector(".login-btn");
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const email = document.querySelector('#profile #email').value;
        const password = document.querySelector('#profile #password').value;
        const confirmPassword = document.querySelector('#profile #con-password').value;
        const roleSelect = document.querySelector('#profile select');
        const selectedRole = roleSelect.value;
        const allowedToAccessSalesDashboard = selectedRole === 'Admin';

        if (!email || !password || !confirmPassword || selectedRole === "Please select your Role") {
            alert("Please complete all fields correctly in the login form.");
            return;
        }

        if (!selectedRole) {
            alert("Please select your Role");
            return;
        }

        else if (password !== confirmPassword) {
            alert("Passwords do not match in the login form.");
            return;
        }

        if (allowedToAccessSalesDashboard) {
            // simulate redirect (or use window.location.href if login is successful)
            window.location.href = "salesDashBoard.html";
        } 
        
        else {
            // block and alert
            alert("You couldn't have access to the Sales Dashboard.");
            // optionally redirect to another page
            window.location.href = "order.html"; // or any accessible page
        }

      
        
    });
    const submitBtn = document.querySelector(".submit-btn");
     submitBtn.addEventListener("click", function (event){
         event.preventDefault();
        
     });

});


    




