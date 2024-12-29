document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const res = await fetch('https://imminent-reliable-wizard.glitch.me');
      const accounts = await res.json();
  
      const account = accounts.find((u) => u.email === email && u.password === password);
      if (user) {
        alert('Login successful!');
        window.location.href = 'todos.html';
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  });
  