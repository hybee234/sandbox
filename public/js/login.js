document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (email && password) {
      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

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
