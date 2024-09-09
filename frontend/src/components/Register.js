// src/components/Register.js
import React from 'react';
import './styles.css';

const Register = () => {
  return (
    <div className="container">
      <h1>Create Account</h1>
      <form id="create-account-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;
