import React from 'react';
import './login.css'; // Custom styles for the login page
import kwoteLogo from './img/kwote.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // You can add your authentication logic here
        navigate('/dashboard'); // Navigate to the dashboard after successful login
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="logo-section">
                    <img src={kwoteLogo} alt="Kwote Logo" className="logo" />
                </div>
                <div className="form-section">
                    <h2 className="welcome-text">Welcome</h2>
                    <p className="instruction-text">Please login to admin dashboard</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" className="form-control" placeholder="Enter Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" placeholder="Enter Password" />
                        </div>
                        <div className="button-container">
                            <button type="submit" className="login-button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
