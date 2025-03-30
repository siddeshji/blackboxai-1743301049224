// Form validation for authentication pages
document.addEventListener('DOMContentLoaded', function() {
    // Common validation functions
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    // Login form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.elements['email'].value;
            const password = this.elements['password'].value;
            const remember = this.elements['remember'].checked;

            // Basic validation
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }

            if (!validatePassword(password)) {
                alert('Password must be at least 8 characters');
                return;
            }

            // Simulate login (in a real app, this would be an API call)
            console.log('Login attempt with:', { email, password, remember });
            alert('Login successful (simulated)');
            
            // Redirect to home page after successful login
            window.location.href = '../index.html';
        });
    }

    // Signup form validation
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = this.elements['username'].value;
            const email = this.elements['email'].value;
            const password = this.elements['password'].value;
            const confirmPassword = this.elements['confirm-password'].value;
            const terms = this.elements['terms'].checked;

            // Validation
            if (username.length < 3) {
                alert('Username must be at least 3 characters');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }

            if (!validatePassword(password)) {
                alert('Password must be at least 8 characters');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            if (!terms) {
                alert('You must agree to the terms and conditions');
                return;
            }

            // Simulate signup (in a real app, this would be an API call)
            console.log('Signup attempt with:', { username, email, password });
            alert('Account created successfully (simulated)');
            
            // Redirect to login page after successful signup
            window.location.href = 'login.html';
        });
    }

    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-login');
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const provider = this.dataset.provider;
            console.log(`Attempting ${provider} login`);
            alert(`Redirecting to ${provider} login (simulated)`);
        });
    });
});