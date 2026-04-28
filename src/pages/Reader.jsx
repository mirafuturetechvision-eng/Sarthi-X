import React from 'react';
import { Link } from 'react-router-dom';

const Reader = () => {
  return (
    <div className="reader-page fade-in" style={{ background: '#EFEBE0', minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        {/* Reader Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ color: 'var(--primary)', fontWeight: '600' }}>← Return to Library</Link>
          <div className="serif" style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>Meditations — Marcus Aurelius</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ background: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #D7CFC0' }}>A-</button>
            <button style={{ background: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #D7CFC0' }}>A+</button>
          </div>
        </div>

        {/* Book Spread */}
        <div className="book-spread" style={{ 
          background: '#FDF9F1', 
          minHeight: '70vh', 
          borderRadius: '8px', 
          boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Center Binding */}
          <div style={{ 
            position: 'absolute', 
            top: 0, bottom: 0, left: '50%', 
            width: '40px', 
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0), rgba(0,0,0,0.05))',
            borderLeft: '1px solid rgba(0,0,0,0.05)',
            borderRight: '1px solid rgba(0,0,0,0.05)',
            zIndex: 10
          }}></div>

          {/* Left Page */}
          <div style={{ padding: '4rem', borderRight: '1px solid #EFEBE0' }}>
            <span style={{ fontSize: '0.8rem', color: '#A1887F', display: 'block', marginBottom: '2rem' }}>BOOK I — CHAPTER I</span>
            <h2 className="serif" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem' }}>On the Nature of Time</h2>
            <p style={{ lineHeight: '1.8', color: '#3E2723', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              From my grandfather Verus I learned good morals and the government of my temper. From the reputation and memory of my father, self-respect and manliness.
            </p>
            <p style={{ lineHeight: '1.8', color: '#3E2723', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts; and further, simplicity in my way of living, far removed from the habits of the rich.
            </p>
            <p style={{ lineHeight: '1.8', color: '#3E2723', fontSize: '1.1rem' }}>
              From my great-grandfather, not to have frequented public schools, and to have had good teachers at home, and to know that on such things a man should spend liberally.
            </p>
          </div>

          {/* Right Page */}
          <div style={{ padding: '4rem' }}>
            <p style={{ lineHeight: '1.8', color: '#3E2723', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              From my tutor, not to have been a partisan of the Green or the Blue, nor a supporter of the Gladiators with the light shield or the heavy.
            </p>
            <p style={{ lineHeight: '1.8', color: '#3E2723', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              From Diognetus, not to busy myself with trifling things, and not to give credit to what was said by miracle-workers and jugglers about incantations and the driving away of daemons and such things.
            </p>
            <p style={{ lineHeight: '1.8', color: '#3E2723', fontSize: '1.1rem' }}>
              To have become intimate with philosophy; and to have been a hearer, first of Bacchius, then of Tandasis and Marcianus; and to have written dialogues in my youth.
            </p>
            <div style={{ marginTop: '4rem', textAlign: 'center', color: '#D7CFC0', fontSize: '1.5rem' }}>❧ 2 ❧</div>
          </div>
        </div>

        {/* Reader Footer */}
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <button style={{ background: 'var(--primary)', color: '#fff', padding: '0.8rem 2rem', borderRadius: '4px' }}>Previous Chapter</button>
          <button style={{ background: 'var(--primary)', color: '#fff', padding: '0.8rem 2rem', borderRadius: '4px' }}>Next Chapter</button>
        </div>
      </div>
    </div>
  );
};

export default Reader;
