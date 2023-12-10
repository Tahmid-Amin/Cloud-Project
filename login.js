// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulated validation (in a real scenario, you'd validate against stored credentials)
        if (username === 'user' && password === 'pass') {
            // Successful login
            redirectToDashboard(); // Simulated function, you can define your logic here
        } else {
            // Invalid login
            displayErrorMessage();
        }
    });

    function displayErrorMessage() {
        errorMessage.style.display = 'block'; // Display error message
    }

    function redirectToDashboard() {
        // Simulate redirection to dashboard or another page after successful login
        window.location.href = 'dashboard.html'; // Redirect to a dashboard page
    }
});
