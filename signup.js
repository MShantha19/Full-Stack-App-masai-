document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const res = await fetch('https://imminent-reliable-wizard.glitch.me');
      const accounts = await res.json();
  
      if (users.length > 0) {
        alert('Signup is restricted to one account only.');
        return;
      }
  
      await fetch('https://imminent-reliable-wizard.glitch.me', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      alert('Signup successful! Redirecting to login page.');
      window.location.href = 'index.html';
    } catch (error) {
      console.error('Error signing up:', error);
    }
  });
  
