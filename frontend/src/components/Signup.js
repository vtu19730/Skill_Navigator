import React, { useState } from 'react';
import authService from '../services/authService';
import './login.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.signup({ email, password });
      if (response.data.message === 'User created successfully') {
        window.location.href = '/login'; 
      }
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-form-wrapper">
          <h1>Welcome to Skill Navigator</h1>
          <p>Get started with a new account</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="signup-btn">Sign Up</button>
            <p>
              Already have an account? <a href="/login" className="login-link">Log In</a>
            </p>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <div className="signup-right">
        <div className="signup-illustration">
         
        </div>
      </div>
    </div>
  );
};

export default Signup;
