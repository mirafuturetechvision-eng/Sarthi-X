import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('sarthi_user'));
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem('sarthi_user'));
    };
    window.addEventListener('authChange', checkAuth);
    window.addEventListener('storage', checkAuth);
    return () => {
      window.removeEventListener('authChange', checkAuth);
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('sarthi_user');
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="logo">
          <span className="serif">Sarthi</span><span className="accent">-X</span>
        </NavLink>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/collections" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Study Materials</NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/test-series" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Test Series</NavLink>
          <NavLink to="/questions" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Question Hub</NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Dashboard</NavLink>
              <div className="nav-divider"></div>
              <button className="btn-icon-search">🔍</button>
              <button className="btn-login" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <div className="nav-divider"></div>
              <button className="btn-icon-search">🔍</button>
              <NavLink to="/auth?mode=login" className="btn-login" style={{ padding: '0.8rem 2rem' }} onClick={() => setIsMobileMenuOpen(false)}>Access Portal</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
