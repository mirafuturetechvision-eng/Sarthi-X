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
            <div className="badge">Welcome to LibraryBooks</div>
            <h1 className="hero-title">Your Digital Haven for <br /><span className="accent">Literary Exploration</span></h1>
            <p className="hero-subtitle">
              Step into a beautifully crafted digital library. Curate your collection, discover new worlds, and connect with fellow bibliophiles in a serene, distraction-free environment.
            </p>
            <div className="hero-btns">
              <Link to="/register" className="btn-primary">Get Your Library Card</Link>
              <Link to="/login" className="btn-accent">Open Your Books</Link>
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
            <h2 className="serif section-title">A Sanctuary for Readers</h2>
            <p className="about-description">
              We built this platform with a single goal: to recreate the peaceful, focused feeling of reading in a quiet library corner. Every element of our interface is designed to fade into the background, letting the words take center stage.
            </p>
            <ul className="about-list">
              <li><span className="check">❧</span> Distraction-free reading environment</li>
              <li><span className="check">❧</span> Hand-picked recommendations based on your taste</li>
              <li><span className="check">❧</span> Connect with a community of thoughtful readers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="features">
        <div className="container">
          <h2 className="serif section-title text-center">Curate Your Experience</h2>
          <p className="section-subtitle text-center">Everything you need to organize your reading life.</p>
          
          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon">📚</div>
              <h3 className="serif">Smart Shelving</h3>
              <p>Organize your books into custom collections, track your reading progress, and build your digital TBR pile effortlessly.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon">✍️</div>
              <h3 className="serif">Reading Journal</h3>
              <p>Keep a private diary of your thoughts, highlight favorite quotes, and write comprehensive reviews to share.</p>
            </div>
            <div className="feature-card glass-card">
              <div className="feature-icon">🎯</div>
              <h3 className="serif">Reading Goals</h3>
              <p>Set yearly reading challenges, track your pages per day, and visualize your literary journey over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Library Spotlight */}
      <section className="library-spotlight">
        <div className="container">
          <div className="spotlight-header">
            <h2 className="serif section-title">Library Spotlight</h2>
            <Link to="/collections" className="btn-text">Browse All Collections ➝</Link>
          </div>
          <div className="spotlight-grid">
            <Link to="/reader" className="book-card">
              <div className="book-cover-wrap">
                <div className="book-cover" style={{ backgroundColor: '#4E342E' }}>
                  <div className="book-spine"></div>
                  <div className="book-title-small serif">Classic Wisdom</div>
                </div>
              </div>
              <h4 className="serif">The Art of Living</h4>
              <p className="author">Epictetus</p>
            </Link>
            <Link to="/reader" className="book-card">
              <div className="book-cover-wrap">
                <div className="book-cover" style={{ backgroundColor: '#8D6E63' }}>
                  <div className="book-spine"></div>
                  <div className="book-title-small serif">Modern Poetry</div>
                </div>
              </div>
              <h4 className="serif">Leaves of Grass</h4>
              <p className="author">Walt Whitman</p>
            </Link>
            <Link to="/reader" className="book-card">
              <div className="book-cover-wrap">
                <div className="book-cover" style={{ backgroundColor: '#5D4037' }}>
                  <div className="book-spine"></div>
                  <div className="book-title-small serif">Great Novels</div>
                </div>
              </div>
              <h4 className="serif">Moby Dick</h4>
              <p className="author">Herman Melville</p>
            </Link>
            <Link to="/reader" className="book-card">
              <div className="book-cover-wrap">
                <div className="book-cover" style={{ backgroundColor: '#A1887F' }}>
                  <div className="book-spine"></div>
                  <div className="book-title-small serif">Philosophy</div>
                </div>
              </div>
              <h4 className="serif">Meditations</h4>
              <p className="author">Marcus Aurelius</p>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Testimonials Section */}
      <section className="testimonials" style={{ padding: '6rem 0', background: '#FDF9F1' }}>
        <div className="container">
          <h2 className="serif text-center" style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Voices from the Sanctuary</h2>
          <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="testimonial-card glass-card">
              <p className="quote">"This platform has completely transformed how I organize my thesis research. The immersive reader is a masterpiece."</p>
              <div className="quote-author">
                <strong>Eleanor Vance</strong>
                <span>Literary Scholar</span>
              </div>
            </div>
            <div className="testimonial-card glass-card">
              <p className="quote">"Finally, a digital space that respects the quietude and dignity of a real library. The aesthetics are simply unmatched."</p>
              <div className="quote-author">
                <strong>Julian Blackwood</strong>
                <span>Bibliophile & Collector</span>
              </div>
            </div>
            <div className="testimonial-card glass-card">
              <p className="quote">"The student dashboard helps me stay on top of my reading goals while feeling inspired by the beautiful parchment interface."</p>
              <div className="quote-author">
                <strong>Theodora C.</strong>
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
              <p className="newsletter-hint">We value your privacy as much as your silence in the library.</p>
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
            <Link to="/register" className="btn-primary cta-btn">Join the Library Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
