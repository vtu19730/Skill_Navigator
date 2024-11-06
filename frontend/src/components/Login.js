// import React, { useState } from 'react';
// import authService from '../services/authService';
// import "./login.css"

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await authService.login({ email, password });
//             if (response.data.token) {
//                 localStorage.setItem('token', response.data.token);
//                 window.location.href = '/dashboard'; // Redirect to the dashboard
//             }
//         } catch (error) {
//             setError('Login failed. Please check your credentials.');
//         }
//     };

//     return (
//         <div className='login'>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Login</button>
//                 <p>If you don't have one<br />
//                 <a style={{color:"blue"}} href='/signup'>Create one</a></p>
//             </form>
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import authService from '../services/authService';
import './login.css'; // External CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login({ email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard'; // Redirect to the dashboard
      }
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-wrapper">
          <h1>Holla, Welcome Back</h1>
          <p>Hey, welcome back to your special place</p>
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
            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">Sign In</button>
            <p>
              Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
            </p>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <div className="login-right">
        <div className="login-illustration">
          {/* Insert the illustration as a background or use an <img> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
