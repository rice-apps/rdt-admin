// Create login container
const loginContainer = document.createElement('div');
loginContainer.className = 'login-container';

// Create form title
const title = document.createElement('h2');
title.textContent = 'Log into Rice Dance Theatre Admin';
loginContainer.appendChild(title);

// Create form and input fields
const form = document.createElement('form');
form.id = 'loginForm';

const emailInput = createInput('email', 'Email');
const passwordInput = createInput('password', 'Password');

// Create forgot password link
const forgotPasswordLink = document.createElement('a');
forgotPasswordLink.href = '#';
forgotPasswordLink.id = 'forgotPassword';
forgotPasswordLink.textContent = 'Forgot password?';

// Create log in button
const loginButton = document.createElement('button');
loginButton.type = 'submit';
loginButton.textContent = 'Log In';

// Create divider
const divider = document.createElement('div');
divider.className = 'divider';
divider.textContent = 'OR';

// Create Google log in button
const googleLoginButton = document.createElement('button');
googleLoginButton.type = 'button';
googleLoginButton.id = 'loginGoogle';
googleLoginButton.textContent = 'Log in with Google';

// Append elements to form
form.appendChild(emailInput);
form.appendChild(passwordInput);
form.appendChild(forgotPasswordLink);
form.appendChild(loginButton);
form.appendChild(divider);
form.appendChild(googleLoginButton);

// Append form to login container
loginContainer.appendChild(form);

// Append login container to body
document.body.appendChild(loginContainer);

// Utility function to create input fields
function createInput(type, placeholder) {
  const inputGroup = document.createElement('div');
  inputGroup.className = 'input-group';

  const input = document.createElement('input');
  input.type = type;
  input.name = type;
  input.placeholder = placeholder;
  input.required = true;

  inputGroup.appendChild(input);

  return inputGroup;
}

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.querySelector('#loginForm input[type=email]').value;
  const password = document.querySelector('#loginForm input[type=password]').value;
  
  console.log('Logging in with:', email, password);
  // Handle login logic here
});

// Event listener for Google login
document.getElementById('loginGoogle').addEventListener('click', function() {
  console.log('Logging in with Google');
  // Handle Google login logic here
});




