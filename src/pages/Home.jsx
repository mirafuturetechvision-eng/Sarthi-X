import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">
      {/* 1. Welcome Banner */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text-content">
            <div className="badge">Learnable Sarthi-X</div>
            <h1 className="hero-title">Experience the Future of <br /><span className="accent">Intelligent Learning</span></h1>
            <p className="hero-subtitle">
              Sarthi-X is more than a platform; it's your personal guide to academic mastery. Discover a different way to learn where every solution is a step towards your excellence.
            </p>
            <div className="hero-btns">
              <Link to="/auth?mode=login" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Get Started Today</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="book-stack">
              <div className="book book-1"></div>
              <div className="book book-2"></div>
              <div className="book book-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Platform */}
      <section className="about-platform">
        <div className="container about-container">
          <div className="about-image glass-card">
            <div className="open-book-illustration">
              <div className="left-page-ill"></div>
              <div className="right-page-ill"></div>
            </div>
          </div>
          <div className="about-text">
            <h2 className="serif section-title">A Guidance System for Students</h2>
            <p className="about-description">
              We built Sarthi-X with a clear mission: to simplify the academic journey. We provide the tools and guidance needed to navigate complex studies with ease.
            </p>
            <ul className="about-list">
              <li><span className="check">❧</span> Expert solutions for complex problems</li>
              <li><span className="check">❧</span> Curated study materials (Books & Copies)</li>
              <li><span className="check">❧</span> Personalized guidance for every student</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Featured Courses Section */}
      <section className="featured-courses" style={{ padding: '6rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 className="serif section-title" style={{ margin: 0 }}>Structured Mastery</h2>
              <p className="section-subtitle">Deep dive into subjects with our comprehensive full courses.</p>
            </div>
            <Link to="/courses" className="accent-link-btn" style={{ fontSize: '1.1rem', fontWeight: '600' }}>View All Courses →</Link>
          </div>
          
          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon">⚛️</div>
              <h3 className="serif">Quantum Physics</h3>
              <p>Master the laws of the universe with our advanced quantum mechanics module.</p>
              <Link to="/courses/1" className="btn-outline-small">Start Learning</Link>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon">💻</div>
              <h3 className="serif">Data Structures</h3>
              <p>Build a strong foundation in computer science with our expert-led DSA course.</p>
              <Link to="/courses/4" className="btn-outline-small">Start Learning</Link>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon">📊</div>
              <h3 className="serif">Financial Audit</h3>
              <p>Learn the complexities of auditing and accounting from industry professionals.</p>
              <Link to="/courses/3" className="btn-outline-small">Start Learning</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Active Test Series Section */}
      <section className="active-tests" style={{ padding: '6rem 0', background: '#FDF9F1' }}>
        <div className="container">
          <h2 className="serif section-title text-center">Challenge Yourself</h2>
          <p className="section-subtitle text-center">Join thousands of students in our ongoing mock test series.</p>
          
          <div className="experience-wrapper glass-card" style={{ padding: '3rem', marginTop: '3rem', border: '1px solid #D7CFC0' }}>
            <div className="experience-text">
              <div className="badge" style={{ background: '#D32F2F', color: '#fff', marginBottom: '1rem' }}>LIVE: UPSC Mock 2024</div>
              <h3 className="serif" style={{ fontSize: '2rem' }}>General Studies Paper I</h3>
              <p style={{ margin: '1rem 0 2rem' }}>Experience the heat of the actual exam with our real-time simulation. Detailed ranking and solutions provided.</p>
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                <div><strong>120</strong> <span style={{ color: '#8D6E63' }}>Mins</span></div>
                <div><strong>100</strong> <span style={{ color: '#8D6E63' }}>Questions</span></div>
                <div><strong>12.5k</strong> <span style={{ color: '#8D6E63' }}>Participants</span></div>
              </div>
              <Link to="/test-series" className="btn-primary">Enter Exam Hall</Link>
            </div>
            <div className="experience-visual" style={{ textAlign: 'center', fontSize: '8rem' }}>
              ⏱️
            </div>
          </div>
        </div>
      </section>



      {/* NEW: Testimonials Section */}
      <section className="testimonials" style={{ padding: '6rem 0', background: '#FDF9F1' }}>
        <div className="container">
          <h2 className="serif text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Success Stories</h2>
          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="testimonial-card glass-card">
              <p className="quote">"Sarthi-X helped me crack my finals with their curated study books. The guidance was spot on!"</p>
              <div className="quote-author">
                <strong>Rahul S.</strong>
                <span>Engineering Student</span>
              </div>
            </div>
            <div className="testimonial-card glass-card">
              <p className="quote">"The digital copy feature is a lifesaver. I can organize all my notes from different subjects in one place."</p>
              <div className="quote-author">
                <strong>Priya K.</strong>
                <span>Medical Student</span>
              </div>
            </div>
            <div className="testimonial-card glass-card">
              <p className="quote">"Finally, a platform that actually provides solutions instead of just resources. Sarthi-X is my go-to for assignments."</p>
              <div className="quote-author">
                <strong>Amit V.</strong>
                <span>Graduate Student</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card glass-card">
            <div className="newsletter-content">
              <h2 className="serif">Join the Inner Circle</h2>
              <p>Receive weekly curated reading lists, rare book finds, and literary insights directly to your inbox.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="your@email.com" required />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
              <p className="newsletter-hint">We value your privacy as much as your academic success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Learning Experience Section */}
      <section className="learning-experience">
        <div className="container">
          <div className="experience-wrapper glass-card">
            <div className="experience-text">
              <h2 className="serif">A Different Way to Master Skills</h2>
              <p>We've reimagined education from the ground up. Sarthi-X provides a fluid, adaptive environment that responds to your pace and goals.</p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-value">50k+</span>
                  <span className="stat-label">Active Learners</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
            <div className="experience-visual">
              <div className="floating-elements">
                <div className="float-item item-1">📚</div>
                <div className="float-item item-2">💡</div>
                <div className="float-item item-3">🎓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="serif">Ready to start your next chapter?</h2>
            <p>Join thousands of readers who have already found their digital home.</p>
            <Link to="/register" className="btn-primary cta-btn">Join Sarthi-X Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
