import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Reusing Home.css for layout consistency

const Courses = () => {
  const categories = ['All', 'Science', 'Arts', 'Commerce', 'Engineering', 'Medical'];
  
  const courses = [
    {
      id: 1,
      title: 'Advanced Physics: Quantum Mechanics',
      category: 'Science',
      instructor: 'Dr. Sarah Smith',
      students: 1250,
      rating: 4.8,
      image: '⚛️',
      price: 'Free'
    },
    {
      id: 2,
      title: 'Modern Literature & Poetics',
      category: 'Arts',
      instructor: 'Prof. James Wilson',
      students: 850,
      rating: 4.9,
      image: '📖',
      price: 'Premium'
    },
    {
      id: 3,
      title: 'Financial Accounting & Audit',
      category: 'Commerce',
      instructor: 'CA Rahul Gupta',
      students: 2100,
      rating: 4.7,
      image: '📈',
      price: 'Free'
    },
    {
      id: 4,
      title: 'Data Structures & Algorithms',
      category: 'Engineering',
      instructor: 'Anita Rao',
      students: 3500,
      rating: 4.9,
      image: '💻',
      price: 'Premium'
    },
    {
      id: 5,
      title: 'Human Anatomy: Part 1',
      category: 'Medical',
      instructor: 'Dr. Robert Chen',
      students: 1800,
      rating: 4.8,
      image: '🏥',
      price: 'Free'
    }
  ];

  return (
    <div className="courses-page fade-in" style={{ padding: '4rem 0', background: '#FDF9F1' }}>
      <div className="container">
        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div className="badge">Knowledge Library</div>
          <h1 className="serif" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Full Courses</h1>
          <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive learning paths designed by experts to guide you from foundational concepts to advanced mastery.
          </p>
        </header>

        {/* Category Tabs */}
        <div className="category-tabs" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`chip ${i === 0 ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="features-grid" style={{ marginTop: '0' }}>
          {courses.map(course => (
            <div key={course.id} className="feature-card glass-card" style={{ textAlign: 'left', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{course.image}</div>
              <div className="badge" style={{ marginBottom: '1rem', background: course.price === 'Free' ? '#E8F5E9' : '#FFF3E0', color: course.price === 'Free' ? '#2E7D32' : '#E65100' }}>
                {course.category} • {course.price}
              </div>
              <h3 className="serif" style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{course.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#795548', marginBottom: '1.5rem' }}>By {course.instructor}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <div style={{ fontSize: '0.85rem', color: '#A1887F' }}>
                  ⭐ {course.rating} ({course.students} students)
                </div>
                <Link to={`/courses/${course.id}`} className="accent-link-btn" style={{ fontWeight: '600' }}>View Syllabus →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-card" style={{ marginTop: '6rem', background: 'var(--primary)', color: '#fff' }}>
          <h2 className="serif">Can't find what you're looking for?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Our curriculum team is constantly adding new courses. Suggest a topic!</p>
          <button className="btn-accent" style={{ marginTop: '1.5rem' }}>Suggest a Course</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
