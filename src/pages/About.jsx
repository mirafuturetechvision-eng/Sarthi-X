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
                A Sanctuary for Discovery
              </h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                LibraryBooks was founded with a single purpose: to democratize access to the world's greatest literature 
                while providing a digital space that feels as warm and welcoming as a physical library.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                We believe that reading is not just a hobby, but a journey of self-discovery. Our platform is designed 
                to help students and lifelong learners curate their own personal archives, track their intellectual 
                growth, and find inspiration in the written word.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="about-values" style={{ padding: '4rem 0 8rem 0' }}>
        <div className="container">
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📜</div>
              <h3 className="serif">Curation</h3>
              <p>We hand-select our collections to ensure only the highest quality of scholarly and literary works.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕯️</div>
              <h3 className="serif">Atmosphere</h3>
              <p>Our UI is engineered to provide a calm, focus-oriented environment that encourages deep reading.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h3 className="serif">Community</h3>
              <p>We connect like-minded bibliophiles to share insights and build a global network of knowledge.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
