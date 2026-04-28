import React, { useState } from 'react';

const AmbiencePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="ambience-player" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        title="Toggle Library Ambience"
        style={{
          background: isPlaying ? 'var(--accent)' : 'transparent',
          border: '1px solid var(--accent)',
          color: isPlaying ? 'white' : 'var(--accent)',
          padding: '0.4rem 0.8rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s ease'
        }}
      >
        <span>{isPlaying ? '🔊' : '🔈'}</span>
        <span className="ambience-text">{isPlaying ? 'Ambience On' : 'Focus Mode'}</span>
      </button>
      
      {/* Hidden Audio Elements (Placeholders) */}
      {isPlaying && (
        <div style={{ fontSize: '0.7rem', color: 'var(--accent)', fontStyle: 'italic' }}>
          Rainy Library...
        </div>
      )}
    </div>
  );
};

export default AmbiencePlayer;
