import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('sarthi_user');
    if (!user) {
      navigate('/auth?mode=login');
    }
  }, [navigate]);
  const personalInfo = [
    { label: 'Full Name', value: 'Jane Doe' },
    { label: 'Date of Birth', value: 'May 12, 2002' },
    { label: 'Gender', value: 'Female' },
    { label: 'Contact', value: '+1 (555) 123-4567' },
    { label: 'Email', value: 'jane.doe@sarthi-x.com' },
    { label: 'Address', value: '123 Bibliophile Lane, Booktown, BK 56789' }
  ];

  const academicDetails = [
    { level: 'Post-Graduation', detail: 'M.Sc in Literary Sciences, Stanford University' },
    { level: 'Graduation', detail: 'B.A. in English Literature, Oxford University' },
    { level: 'Schooling', detail: 'St. Augustine High School' }
  ];

  const documents = [
    { name: 'ID_Proof_Passport.pdf', size: '1.2 MB', date: 'April 20, 2024' },
    { name: 'Graduation_Certificate.pdf', size: '2.5 MB', date: 'April 21, 2024' },
    { name: 'Admission_Letter.pdf', size: '800 KB', date: 'April 22, 2024' }
  ];

  return (
    <div className="profile-page container fade-in">
      {/* Header Section */}
      <header className="profile-dashboard-header">
        <div className="user-profile-summary">
          <div className="avatar-large">JD</div>
          <div className="user-title-box">
            <h2 className="serif">Jane Doe</h2>
            <p className="subtitle">Graduate Student | Sarthi-X ID: #88291</p>
          </div>
        </div>
        <button className="btn-edit-profile">
          <span className="icon">✎</span> Edit Profile
        </button>
      </header>

      <div className="profile-grid">
        {/* Left Column: Personal & Academic */}
        <div className="profile-main-content">
          
          {/* Section 1: Personal Information */}
          <section className="profile-section-card glass-card">
            <div className="section-header">
              <h3 className="serif"><span className="decoration-icon">❦</span> Personal Information</h3>
            </div>
            <div className="info-grid">
              {personalInfo.map((info, i) => (
                <div key={i} className="info-item">
                  <label>{info.label}</label>
                  <p>{info.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Academic Details */}
          <section className="profile-section-card glass-card">
            <div className="section-header">
              <h3 className="serif"><span className="decoration-icon">❧</span> Academic Details</h3>
            </div>
            <div className="academic-timeline">
              {academicDetails.map((edu, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="edu-level">{edu.level}</h4>
                    <p className="edu-detail">{edu.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NEW: Trends & Analytics Section */}
          <section className="profile-section-card glass-card">
            <div className="section-header">
              <h3 className="serif"><span className="decoration-icon">📊</span> Learning Progress & Skill Mastery</h3>
              <div className="period-selector">
                <span className="period active">Monthly</span>
                <span className="period">Yearly</span>
              </div>
            </div>
            <div className="analytics-grid">
              <div className="analytics-item">
                <div className="analytics-info">
                  <span className="label">Path Completion</span>
                  <span className="value">78%</span>
                </div>
                <div className="analytics-bar-bg">
                  <div className="analytics-bar-fill pulse" style={{ width: '78%' }}></div>
                </div>
                <p className="analytics-tip">Nearly there! Finish 2 more modules to reach 85%.</p>
              </div>
              
              <div className="analytics-item">
                <div className="analytics-info">
                   <span className="label">Problem Solving Score</span>
                  <span className="value high">92/100</span>
                </div>
                <div className="analytics-bar-bg">
                  <div className="analytics-bar-fill" style={{ width: '92%', background: 'linear-gradient(90deg, var(--accent) 0%, #4CAF50 100%)' }}></div>
                </div>
                <p className="analytics-tip">Excellent analytical skills! You've solved 15+ complex problems this week.</p>
              </div>

              <div className="analytics-item">
                <div className="analytics-info">
                  <span className="label">Skills Mastered</span>
                  <span className="value">15 Skills</span>
                </div>
                <div className="analytics-bar-bg">
                  <div className="analytics-bar-fill" style={{ width: '45%', background: 'linear-gradient(90deg, var(--secondary) 0%, var(--primary) 100%)' }}></div>
                </div>
                <p className="analytics-tip">You've unlocked 3 new skills this week. Keep learning!</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Documents */}
        <aside className="profile-sidebar">
          <section className="profile-section-card glass-card full-height">
            <div className="section-header">
              <h3 className="serif"><span className="decoration-icon">📁</span> Uploaded Documents</h3>
            </div>
            <div className="document-list">
              {documents.map((doc, i) => (
                <div key={i} className="document-item">
                  <div className="file-icon">📄</div>
                  <div className="file-info">
                    <h4 className="file-name">{doc.name}</h4>
                    <p className="file-meta">{doc.size} • Uploaded on {doc.date}</p>
                  </div>
                  <button className="btn-view">View</button>
                </div>
              ))}
              <div className="upload-new-box">
                <button className="btn-upload-dashed">+ Upload New Document</button>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Profile;
