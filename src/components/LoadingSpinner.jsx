import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'var(--bg-parchment)',
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem'
    }}>
      <div className="spinning-book" style={{
        fontSize: '4rem',
        animation: 'float 2s ease-in-out infinite'
      }}>
        📖
      </div>
      <div className="serif" style={{ fontSize: '1.5rem', color: 'var(--primary)', letterSpacing: '2px' }}>
        Opening the Library...
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
