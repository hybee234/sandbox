document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.querySelector('#logout-button');

  logoutButton.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log('Logout successful');
        document.location.replace('/auth'); 
      } else {
        console.log('Logout failed');
        alert('Failed to log out');
      }
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  });
});
