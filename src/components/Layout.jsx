import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        {children}
      </main>
      <footer className="app-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h2 className="serif">LibraryBooks</h2>
            <p>Your sanctuary for literary discovery and academic excellence.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <ul>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/collections">Collections</Link></li>
                <li><Link to="/profile">Dashboard</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><Link to="/contact">Contact Librarian</Link></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Guidelines</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container bottom-flex">
            <p className="serif">&copy; 2026 Virtual Library System. All rights reserved.</p>
            <div className="footer-decor">❧ ❦ ❧</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
