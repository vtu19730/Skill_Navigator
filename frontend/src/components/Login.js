import React, { useState } from 'react';
import authService from '../services/authService';
import "./login.css"

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
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <p>If you don't have one<br />
                <a style={{color:"blue"}} href='/signup'>Create one</a></p>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
