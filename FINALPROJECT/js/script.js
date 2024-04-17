const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if(username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('All fields are required');
        return;
    }

    if(password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // You can add AJAX request to register user here
    alert(`Registered as ${username}`);
});
