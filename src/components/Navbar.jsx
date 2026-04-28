import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import AmbiencePlayer from './AmbiencePlayer';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="logo">
          <span className="serif">Library</span><span className="accent">Books</span>
        </NavLink>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <AmbiencePlayer />
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/collections" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Collections</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Dashboard</NavLink>
          <div className="nav-divider"></div>
          <button className="btn-icon-search">🔍</button>
          <NavLink to="/login" className="btn-login" onClick={() => setIsMobileMenuOpen(false)}>Login</NavLink>
          <NavLink to="/register" className="btn-register" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
