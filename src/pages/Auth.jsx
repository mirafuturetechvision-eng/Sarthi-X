import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login, register } from '../services/authService';
import './Login.css'; // Reusing Login.css for the base "Open Book" styles
import './Register.css'; // Reusing Register.css for specific form layouts

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get initial mode from URL params (e.g. ?mode=register)
  const queryParams = new URLSearchParams(location.search);
  const initialMode = queryParams.get('mode') === 'register' ? 'register' : 'login';

  const [authMode, setAuthMode] = useState(initialMode); // 'login' or 'register'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eduLevel, setEduLevel] = useState('school'); // 'nursery' | 'school' | 'graduation' | 'postgrad'
  const [userRole, setUserRole] = useState('student'); // 'student' | 'admin'

  // Sync state with URL params when they change
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    if (mode === 'register' || mode === 'login') {
      setAuthMode(mode);
    }
  }, [location.search]);

  const toggleMode = () => {
    const newMode = authMode === 'login' ? 'register' : 'login';
    setAuthMode(newMode);
    // Optional: update URL to keep it in sync
    navigate(`/auth?mode=${newMode}`, { replace: true });
  };

  const handleLevelChange = (level) => {
    setEduLevel(level);
  };

  const handleRoleChange = (role) => {
    setUserRole(role);
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (authMode === 'login') {
        const email = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        const response = await login(email, password, userRole);
        if (response.success) {
          localStorage.setItem('sarthi_user', JSON.stringify({ ...response.user, role: userRole }));
          window.dispatchEvent(new Event('authChange'));
          navigate('/profile');
        }
      } else {
        const userData = {
          fullName: e.target.elements[0].value,
          email: e.target.elements[1].value,
          eduLevel: eduLevel,
          role: 'student' // Registration is for students
        };
        const response = await register(userData);
        if (response.success) {
          setAuthMode('login');
          alert('Registration successful! Please login.');
        }
      }
    } catch (error) {
      console.error('Auth failed:', error);
      setIsSubmitting(false);
    }
  };

  const renderForm = () => {
    switch (authMode) {
      case 'login':
        return (
          <div className="login-form fade-in">
            <h2 className="serif">{userRole === 'student' ? 'Student Login' : 'Admin Login'}</h2>
            <p className="subtitle">Sign in to your {userRole} account</p>
            
            <div className="role-selector">
              <button 
                type="button"
                className={`role-tab ${userRole === 'student' ? 'active' : ''}`}
                onClick={() => handleRoleChange('student')}
              >
                Student
              </button>
              <button 
                type="button"
                className={`role-tab ${userRole === 'admin' ? 'active' : ''}`}
                onClick={() => handleRoleChange('admin')}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleAuthSubmit}>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder={userRole === 'student' ? "student@sarthi-x.com" : "admin@sarthi-x.com"} required />
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
              <button type="submit" className="btn-brown" disabled={isSubmitting}>
                {isSubmitting ? 'Entering Portal...' : userRole === 'student' ? 'Start Learning' : 'Access Dashboard'}
              </button>
            </form>

            <div className="divider">or continue with</div>
            
            <div className="social-login">
              <button className="btn-outline-social">
                <span className="social-icon">G</span> One-Click Access
              </button>
            </div>

            <div className="divider">or</div>
            <p className="footer-text">
              {userRole === 'student' ? (
                <>New student? <button onClick={toggleMode} className="accent-link-btn">Join Sarthi-X</button></>
              ) : (
                <span>Request admin access from IT department</span>
              )}
            </p>
          </div>
        );
      case 'register':
        return (
          <div className="register-form-content fade-in">
            <h2 className="serif">Join Sarthi-X</h2>
            <p className="subtitle">Create your learnable profile</p>
            <form onSubmit={handleAuthSubmit}>
              <div className="form-section">
                <div className="form-row">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Jane Doe" required />
                  </div>
                  <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="jane@example.com" required />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <div className="form-row">
                  <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="••••••••" required />
                  </div>
                  <div className="input-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="••••••••" required />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h4 className="section-title">Select Your Learning Level</h4>
                <p className="subtitle">Pick one to tailor your learnable path</p>
                <div className="edu-selector single-select">
                  <label className={`chip ${eduLevel === 'school' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="eduLevel" 
                      checked={eduLevel === 'school'} 
                      onChange={() => handleLevelChange('school')} 
                    />
                    Schooling
                  </label>
                  <label className={`chip ${eduLevel === 'graduation' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="eduLevel" 
                      checked={eduLevel === 'graduation'} 
                      onChange={() => handleLevelChange('graduation')} 
                    />
                    Undergraduate
                  </label>
                  <label className={`chip ${eduLevel === 'postgrad' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="eduLevel" 
                      checked={eduLevel === 'postgrad'} 
                      onChange={() => handleLevelChange('postgrad')} 
                    />
                    Postgraduate
                  </label>
                </div>
              </div>

              <button type="submit" className="btn-brown w-100" disabled={isSubmitting}>
                {isSubmitting ? 'Joining Sarthi-X...' : 'Create Account'}
              </button>
            </form>
            <div className="divider">or</div>
            <p className="login-prompt footer-text">
              Already have an account? <button onClick={toggleMode} className="accent-link-btn">Access portal</button>
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="auth-page fade-in">
      <div className={`book-container ${authMode === 'register' ? 'large' : ''}`}>
        <div className="open-book">
          {/* Left Page (Fixed Content) */}
          <div className="book-page left-page">
            <div className="page-content">
              <h2 className="serif title">Sarthi-X</h2>
              <p className="quote">"The best way to predict the future is to create it through learning."</p>
              <div className="decoration">❧</div>
              <div className="auth-toggle-info">
                <p>Currently in <strong>{authMode === 'login' ? 'Login' : 'Sign Up'}</strong> mode.</p>
                <button onClick={toggleMode} className="btn-outline-small">
                  Switch to {authMode === 'login' ? 'Register' : 'Login'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Page (Dynamic Content based on Switch Case) */}
          <div className="book-page right-page">
            <div className="page-content">
              {renderForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
