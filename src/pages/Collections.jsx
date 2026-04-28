import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <div className="container fade-in" style={{ padding: '8rem 0', textAlign: 'center' }}>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 className="serif" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
          Expanding the Library
        </h1>
        <p style={{ color: '#8D6E63', fontSize: '1.2rem', marginBottom: '2.5rem', fontStyle: 'italic' }}>
          "A great library is never truly finished; it is always in the process of becoming."
        </p>
        <div style={{ borderTop: '1px dashed #D7CFC0', padding: '2rem 0', marginBottom: '1rem' }}>
          <p style={{ fontWeight: '600', color: 'var(--primary)' }}>
            We are currently curating new collections for your discovery. 
            Check back soon for our Featured Anthologies and Rare Editions.
          </p>
        </div>
        <Link to="/" className="btn-primary">Return to Foyer</Link>
        <div style={{ marginTop: '2rem', fontSize: '2rem', color: '#EFEBE0' }}>❧ ❦ ❧</div>
      </div>
    </div>
  );
};

export default Collections;
