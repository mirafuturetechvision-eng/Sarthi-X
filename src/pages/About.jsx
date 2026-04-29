import React from 'react';

const About = () => {
  return (
    <div className="about-page fade-in">
      {/* Hero Section */}
      <section className="about-hero" style={{ 
        padding: '8rem 0', 
        background: 'var(--primary)', 
        color: 'var(--text-light)', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h1 className="serif" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Our Story</h1>
          <p className="serif" style={{ fontSize: '1.5rem', opacity: 0.8, fontStyle: 'italic' }}>
            "Preserving the past, empowering the future."
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
            <div className="mission-visual" style={{ 
              height: '300px', 
              background: '#D7CFC0', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '5rem'
            }}>
              🏛️
            </div>
            <div className="mission-text">
              <h2 className="serif" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                Guiding Your Academic Journey
              </h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Sarthi-X was founded with a single purpose: to build the world's most **learnable platform**. 
                We guide students through every lesson and provide solutions that foster real intellectual growth.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                We believe that every student deserves a mentor and a guide. Our platform is designed 
                to help students access premium study materials (Books and Copies), track their progress, 
                and find solutions that make learning efficient and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Journey Section */}
      <section className="about-values" style={{ padding: '4rem 0 8rem 0', backgroundColor: '#FDF9F1' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="serif" style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>The Candidate Journey</h2>
            <p style={{ color: '#8D6E63', fontSize: '1.2rem' }}>How Sarthi-X empowers your path to mastery</p>
          </div>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🔐</div>
              <h3 className="serif" style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>Student Login</h3>
              <p style={{ fontSize: '1.05rem', color: '#5D4037' }}>Securely access your personalized learning environment with your unique Sarthi-X ID.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>📊</div>
              <h3 className="serif" style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>Dashboard Access</h3>
              <p style={{ fontSize: '1.05rem', color: '#5D4037' }}>Instantly unlock your dashboard to track skill mastery, view progress, and manage your studies.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🚀</div>
              <h3 className="serif" style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>Mastery & Growth</h3>
              <p style={{ fontSize: '1.05rem', color: '#5D4037' }}>Use interactive solutions and learning paths to accelerate your academic and professional growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
