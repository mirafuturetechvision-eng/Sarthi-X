import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questions.css';

const Questions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('sarthi_user');
    if (!user) {
      navigate('/auth?mode=login');
    }
  }, [navigate]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  const categories = ['All', 'Mathematics', 'Physics', 'Python', 'Java', 'C++', 'History'];

  const questionsData = [
    {
      id: 1,
      category: 'Mathematics',
      difficulty: 'Medium',
      question: 'Evaluate the integral of sin(x)cos(x) from 0 to π/2.',
      solution: 'Using the identity sin(2x) = 2sin(x)cos(x), the integral becomes 1/2 ∫ sin(2x) dx from 0 to π/2. Integrating gives [-1/4 cos(2x)] from 0 to π/2 = -1/4[cos(π) - cos(0)] = -1/4[-1 - 1] = 1/2.'
    },
    {
      id: 2,
      category: 'Physics',
      difficulty: 'Hard',
      question: 'State and explain Heisenberg\'s Uncertainty Principle.',
      solution: 'The principle states that it is impossible to simultaneously measure the position and momentum of a particle with absolute precision. Mathematically: Δx * Δp ≥ h/4π.'
    },
    {
      id: 3,
      category: 'Python',
      difficulty: 'Easy',
      question: 'What is a lambda function in Python?',
      solution: 'A lambda function is a small anonymous function. It can take any number of arguments, but can only have one expression. Syntax: lambda arguments : expression.'
    },
    {
      id: 4,
      category: 'Java',
      difficulty: 'Medium',
      question: 'What is the purpose of the "static" keyword in Java?',
      solution: 'The "static" keyword in Java is used for memory management. It belongs to the class rather than the instance of the class. It can be used with variables, methods, blocks, and nested classes.'
    },
    {
      id: 5,
      category: 'C++',
      difficulty: 'Hard',
      question: 'Explain RAII (Resource Acquisition Is Initialization) in C++.',
      solution: 'RAII is a programming idiom where resource management (like memory or file handles) is tied to object lifetime. Resources are acquired in the constructor and released in the destructor.'
    },
    {
      id: 6,
      category: 'Python',
      difficulty: 'Medium',
      question: 'What are decorators in Python?',
      solution: 'Decorators are a design pattern in Python that allows a user to add new functionality to an existing object without modifying its structure. They are usually called before the definition of a function you want to decorate.'
    },
    {
      id: 7,
      category: 'History',
      difficulty: 'Medium',
      question: 'What were the primary causes of the Industrial Revolution?',
      solution: 'Key causes include the accumulation of capital, technological innovations (like the steam engine), availability of natural resources (coal and iron), and agricultural improvements.'
    }
  ];

  const filteredQuestions = questionsData.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSolution = (id) => {
    setActiveQuestionId(activeQuestionId === id ? null : id);
  };

  return (
    <div className="questions-page container fade-in">
      <header className="hub-header">
        <h1 className="serif">Question Hub</h1>
        <p className="subtitle">Explore solutions to complex academic problems.</p>
      </header>

      <div className="hub-controls glass-card">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search questions..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="category-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="questions-grid">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(q => (
            <div key={q.id} className="question-card glass-card">
              <div className="card-meta">
                <span className="category-tag">{q.category}</span>
                <span className={`difficulty-tag ${q.difficulty.toLowerCase()}`}>{q.difficulty}</span>
              </div>
              <h3 className="serif question-text">{q.question}</h3>
              
              <div className={`solution-container ${activeQuestionId === q.id ? 'expanded' : ''}`}>
                <button 
                  className="btn-toggle-solution"
                  onClick={() => toggleSolution(q.id)}
                >
                  {activeQuestionId === q.id ? 'Hide Solution' : 'Reveal Solution'}
                </button>
                {activeQuestionId === q.id && (
                  <div className="solution-content fade-in">
                    <div className="solution-divider"></div>
                    <p>{q.solution}</p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No questions found for your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
