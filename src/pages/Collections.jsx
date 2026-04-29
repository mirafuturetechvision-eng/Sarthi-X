import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Collections = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('sarthi_user');
    if (!user) {
      navigate('/auth?mode=login');
    }
  }, [navigate]);
  return (
    <div className="container fade-in" style={{ padding: '8rem 0', textAlign: 'center' }}>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 className="serif" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
          Study Materials
        </h1>
        <p style={{ color: '#8D6E63', fontSize: '1.2rem', marginBottom: '2.5rem', fontStyle: 'italic' }}>
          "The best way to predict the future is to create it through learning."
        </p>
        <div style={{ borderTop: '1px dashed #D7CFC0', padding: '2rem 0', marginBottom: '1rem' }}>
          <p style={{ fontWeight: '600', color: 'var(--primary)' }}>
            We are currently curating new Study Books and Digital Copies for your academic success. 
            Check back soon for our Featured Problem Sets and Subject Guides.
          </p>
        </div>
        <Link to="/" className="btn-primary">Return to Dashboard</Link>
        <div style={{ marginTop: '2rem', fontSize: '2rem', color: '#EFEBE0' }}>❧ ❦ ❧</div>
      </div>
    </div>
  );
};

export default Collections;
