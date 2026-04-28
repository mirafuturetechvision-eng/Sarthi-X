import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button 
      onClick={scrollToTop}
      className="fade-in"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        background: 'var(--primary)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
    >
      ↑
    </button>
  );
};

export default BackToTop;
