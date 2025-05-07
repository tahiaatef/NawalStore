
// const form = document.getElementById('login-form');
// const errorMessage = document.getElementById('error-message');

// form.addEventListener('submit', (e) => {
//     e.preventDefault(); 

//     const username = document.getElementById('username').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;

//     if (!username || !email || !password || !confirmPassword) {
//         errorMessage.textContent = 'All fields are required.';
//         return;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         errorMessage.textContent = 'Please enter a valid email.';
//         return;
//     }
//     if (password !== confirmPassword) {
//         errorMessage.textContent = 'Passwords do not match.';
//         return;
//     }

//     localStorage.setItem('username', username);
//     localStorage.setItem('email', email);
//     window.location.href = 'home.html'; 
// });

// Select the form and error message elements
const form = document.getElementById('loginForm');
const errorMessages = document.querySelectorAll('.error-message');

// Add submit event listener
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    // Clear all previous error messages
    errorMessages.forEach((error) => (error.textContent = ''));

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true; // Flag to track overall form validity

    // Validate username
    if (!username || username.length < 3) {
        document.querySelector('#username + .error-message').textContent =
            'Username must be at least 3 characters long.';
        document.querySelector('#username + .error-message').style.display = 'block';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.querySelector('#email + .error-message').textContent =
            'Please enter a valid email.';
        document.querySelector('#email + .error-message').style.display = 'block';
        isValid = false;
    }

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!password || !passwordRegex.test(password)) {
        document.querySelector('#password + .error-message').textContent =
            'Password must be at least 6 characters long, contain an uppercase letter, a lowercase letter, and a number.';
        document.querySelector('#password + .error-message').style.display = 'block';
        isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword || password !== confirmPassword) {
        document.querySelector('#confirm-password + .error-message').textContent =
            'Passwords do not match.';
        document.querySelector('#confirm-password + .error-message').style.display = 'block';
        isValid = false;
    }

    // If all validations pass, redirect to home page
    if (isValid) {
        localStorage.setItem('username', username); // Store username
        localStorage.setItem('email', email); // Store email
        window.location.href = 'home.html'; // Redirect to home page
    }
});
