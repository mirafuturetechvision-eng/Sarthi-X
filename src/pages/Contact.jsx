import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <div className="container" style={{ padding: '6rem 0' }}>
        <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', overflow: 'hidden', padding: 0 }}>
          
          {/* Left Side: Info */}
          <div style={{ background: 'var(--primary)', color: 'var(--text-light)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
            <p style={{ opacity: 0.8, marginBottom: '2.5rem', lineHeight: '1.8' }}>
              Whether you're looking for a rare manuscript, need help with your student portal, or simply want to talk books—our librarians are here to help.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
                <span>123 Bibliophile Lane, Booktown</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📞</span>
                <span>+1 (555) 012-3456</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>✉️</span>
                <span>librarian@librarybooks.com</span>
              </div>
            </div>
            <div style={{ marginTop: '4rem', fontSize: '2rem', opacity: 0.3 }}>❧ ❦ ❧</div>
          </div>

          {/* Right Side: Form */}
          <div style={{ padding: '3rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--primary)' }}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.8rem', border: '1px solid #D7CFC0', borderRadius: '4px', background: '#FDF9F1' }} />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--primary)' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.8rem', border: '1px solid #D7CFC0', borderRadius: '4px', background: '#FDF9F1' }} />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--primary)' }}>Message</label>
                <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '0.8rem', border: '1px solid #D7CFC0', borderRadius: '4px', background: '#FDF9F1', resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
