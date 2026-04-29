import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const TestSeries = () => {
  const tests = [
    {
      id: 1,
      title: 'UPSC Prelims Mock 2024',
      subject: 'General Studies',
      duration: '120 mins',
      questions: 100,
      difficulty: 'Hard',
      active: true
    },
    {
      id: 2,
      title: 'JEE Main Physics Drill',
      subject: 'Physics',
      duration: '60 mins',
      questions: 30,
      difficulty: 'Medium',
      active: true
    },
    {
      id: 3,
      title: 'NEET Biology Sprint',
      subject: 'Biology',
      duration: '90 mins',
      questions: 90,
      difficulty: 'Medium',
      active: false
    },
    {
      id: 4,
      title: 'CFA Level 1 Ethics',
      subject: 'Finance',
      duration: '45 mins',
      questions: 40,
      difficulty: 'Hard',
      active: true
    }
  ];

  return (
    <div className="test-series-page fade-in" style={{ padding: '4rem 0', background: '#EFEBE0' }}>
      <div className="container">
        <header style={{ marginBottom: '4rem' }}>
          <div className="badge" style={{ background: 'var(--primary)', color: '#fff' }}>Evaluation Hub</div>
          <h1 className="serif" style={{ fontSize: '3rem', color: 'var(--primary)', marginTop: '1rem' }}>Test Series</h1>
          <p className="subtitle" style={{ maxWidth: '600px' }}>
            Measure your mastery with our timed simulations. Detailed analytics and peer ranking provided after every test.
          </p>
        </header>

        <div className="test-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {tests.map(test => (
            <div key={test.id} className="test-card glass-card" style={{ 
              padding: '2.5rem', 
              borderLeft: `5px solid ${test.difficulty === 'Hard' ? '#D32F2F' : '#FBC02D'}`,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{test.title}</h3>
                  <span style={{ fontSize: '0.85rem', color: '#A1887F', textTransform: 'uppercase', letterSpacing: '1px' }}>{test.subject}</span>
                </div>
                {test.active && <span className="badge" style={{ background: '#E8F5E9', color: '#2E7D32', fontSize: '0.7rem' }}>● LIVE NOW</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '4px' }}>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: '#8D6E63', marginBottom: '0.3rem' }}>DURATION</label>
                  <span style={{ fontWeight: '600' }}>{test.duration}</span>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '4px' }}>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: '#8D6E63', marginBottom: '0.3rem' }}>QUESTIONS</label>
                  <span style={{ fontWeight: '600' }}>{test.questions} Qs</span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.9rem', color: '#5D4037' }}>Difficulty: <strong>{test.difficulty}</strong></span>
                <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                  {test.active ? 'Start Test' : 'Notify Me'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar/Guide info */}
        <div className="experience-wrapper glass-card" style={{ marginTop: '6rem', display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <div style={{ flex: 1 }}>
            <h2 className="serif">How our Evaluation System works</h2>
            <p>Our "any way system" ensures that you are guided at every step. After each test, you get:</p>
            <ul className="about-list" style={{ marginTop: '1.5rem' }}>
              <li><span className="check">❧</span> Topic-wise accuracy heatmaps</li>
              <li><span className="check">❧</span> Video solutions for all questions</li>
              <li><span className="check">❧</span> AI-powered weak area identification</li>
            </ul>
          </div>
          <div style={{ flex: 1, textAlign: 'center', fontSize: '5rem' }}>
            📈
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;
