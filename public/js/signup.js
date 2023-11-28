document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#signup-form');

  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (name && email && password) {
      try {
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          console.log('Signup successful');
          document.location.replace('/auth');
        } else {
          console.log('Signup failed');
          alert('Failed to sign up');
        }
      } catch (error) {
        console.error('Failed to sign up:', error);
      }
    }
  });
});
