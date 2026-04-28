import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    try {
      const email = e.target.elements[0].value;
      const password = e.target.elements[1].value;
      
      const response = await login(email, password);
      
      if (response.success) {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setIsLoggingIn(false);
    }
  };
  return (
    <div className="login-page fade-in">
      <div className="book-container">
        <div className="open-book">
          
          {/* Left Page */}
          <div className="book-page left-page">
            <div className="page-content">
              <h2 className="serif title">Welcome Back</h2>
              <p className="quote">"A room without books is like a body without a soul."</p>
              <div className="decoration">❧</div>
            </div>
          </div>

          {/* Right Page */}
          <div className="book-page right-page">
            <div className="page-content">
              <div className="login-form">
                <h2 className="serif">Login</h2>
                <p className="subtitle">Sign in to your library account</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="reader@library.com" required />
                  </div>
                  
                  <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="••••••••" required />
                  </div>
                  
                  <div className="form-options">
                    <label className="checkbox">
                      <input type="checkbox" /> Remember me
                    </label>
                    <a href="#forgot" className="forgot">Forgot password?</a>
                  </div>
                  
                  <button type="submit" className="btn-brown" disabled={isLoggingIn}>
                    {isLoggingIn ? 'Unlocking Library...' : 'Open Book'}
                  </button>
                </form>

                <div className="divider">or</div>
                
                <p className="footer-text">
                  New reader? <a href="/register" className="accent-link">Get a library card</a>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
