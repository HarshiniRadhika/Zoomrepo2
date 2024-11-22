const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

//   const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
//   const confirmPassword = document.getElementById('confirmPassword').value.trim();

  let errors = [];

//   if (name === '') {
//     errors.push('Name is required');
//   }

  if (email === '') {
    errors.push('Email is required');
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.push('Invalid email');
  }

  if (password === '') {
    errors.push('Password is required');
  } else if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }

//   if (confirmPassword === '') {
//     errors.push('Confirm Password is required');
//   } else if (confirmPassword !== password) {
//     errors.push('Passwords do not match');
//   }

  // if (errors.length > 0) {
  //   const errorDiv = document.createElement('div');
  //   errorDiv.className = 'error';
  //   errorDiv.innerHTML = errors.join('<br>');
  //   form.appendChild(errorDiv);
  // } else {
  //   // Form is valid, submit data
  //   console.log('Form is valid');
    
  // }
});