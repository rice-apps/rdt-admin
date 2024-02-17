import React, { useState } from 'react';
import './loginpage.css'; // Make sure to create a LoginForm.css file in the same directory

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Add login logic here
  };

  return (
    <div className="login-form-container">
      <h2>Log into Rice Dance Theatre Admin</h2>
      <form onSubmit={handleSubmit}>
        <button type="button" className="google-button">Log in with Google</button>
      </form>
    </div>
  );
};

export default LoginForm;
