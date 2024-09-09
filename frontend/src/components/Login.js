// src/components/Login.js
import React from 'react';
import './styles.css';

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form id="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Create one</a></p>
    </div>
  );
};

export default Login;
