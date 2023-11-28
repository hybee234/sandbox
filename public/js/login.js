// Listen for the 'DOMContentLoaded' event to ensure the DOM is fully loaded before attaching event handlers
document.addEventListener('DOMContentLoaded', () => {

  // Attach event handler to the login form submission
  const loginForm = document.querySelector('#login-form');

  loginForm.addEventListener('submit', async (event) => {

    // Prevent default form submission behavior
    event.preventDefault();

    // Get the email and password from the form
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    // Make a POST request to the login API if both email and password are provided
    if (email && password) {
      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        // Handle the response: redirect on success or show an alert on failure
        if (response.ok) {
          console.log('Login successful');
          // Redirect users to homepage after login is successful
          document.location.replace('/');
        } else {
          console.log('Login failed');
          alert('Failed to log in');
        }
      } catch (error) {
        console.error('Failed to log in:', error);
      }
    }
  });
});
