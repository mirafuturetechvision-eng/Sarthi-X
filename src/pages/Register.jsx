import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eduSections, setEduSections] = useState({
    nursery: false,
    school: true,
    graduation: false,
    postGrad: false
  });

  const toggleSection = (section) => {
    setEduSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct user data object from form (simplified for demo)
    const userData = {
      fullName: e.target.elements[0].value,
      email: e.target.elements[4].value, // simplified index
      // ... other fields
    };

    try {
      const response = await register(userData);
      if (response.success) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-page fade-in">
      <div className="book-container large">
        <div className="open-book">
          
          <form className="register-form-container" onSubmit={handleSubmit}>
            {/* Left Page */}
            <div className="book-page left-page">
              <div className="page-content">
                <div className="register-header">
                  <h2 className="serif title">Student Registration</h2>
                  <p className="quote">"Every great journey begins with a single step."</p>
                  <div className="decoration">❧</div>
                </div>
                
                {/* Section 1: Personal Details */}
                <div className="form-section">
                  <h3 className="section-title">Personal Details</h3>
                  <div className="form-row">
                    <div className="input-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Jane Doe" required />
                    </div>
                    <div className="input-group">
                      <label>Date of Birth</label>
                      <input type="date" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-group">
                      <label>Gender</label>
                      <select required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Contact Number</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                  </div>
                </div>

                {/* Section 2: Address Information */}
                <div className="form-section">
                  <h3 className="section-title">Address Information</h3>
                  <div className="input-group">
                    <label>Full Address</label>
                    <textarea placeholder="Street, Apartment, Suite, etc." rows="3" required></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Page */}
            <div className="book-page right-page">
              <div className="page-content">
                {/* Section 3: Academic Journey */}
                <div className="form-section">
                  <h3 className="section-title">Academic Journey</h3>
                  <p className="section-instruction">Select your education levels to fill in details:</p>
                  
                  <div className="edu-selector">
                    <label className={`chip ${eduSections.nursery ? 'active' : ''}`}>
                      <input type="checkbox" checked={eduSections.nursery} onChange={() => toggleSection('nursery')} />
                      Nursery
                    </label>
                    <label className={`chip ${eduSections.school ? 'active' : ''}`}>
                      <input type="checkbox" checked={eduSections.school} onChange={() => toggleSection('school')} />
                      School
                    </label>
                    <label className={`chip ${eduSections.graduation ? 'active' : ''}`}>
                      <input type="checkbox" checked={eduSections.graduation} onChange={() => toggleSection('graduation')} />
                      Graduation
                    </label>
                    <label className={`chip ${eduSections.postGrad ? 'active' : ''}`}>
                      <input type="checkbox" checked={eduSections.postGrad} onChange={() => toggleSection('postGrad')} />
                      Post-Graduation
                    </label>
                  </div>

                  <div className="edu-fields-container">
                    {eduSections.nursery && (
                      <div className="input-group fade-in">
                        <label>Nursery School Name</label>
                        <input type="text" placeholder="Enter Nursery Name" />
                      </div>
                    )}
                    
                    {eduSections.school && (
                      <div className="input-group fade-in">
                        <label>Primary/High School Name</label>
                        <input type="text" placeholder="Enter School Name" required />
                      </div>
                    )}
                    
                    {eduSections.graduation && (
                      <div className="input-group fade-in">
                        <label>Graduation Degree & University</label>
                        <input type="text" placeholder="e.g. B.Sc in Computer Science, Oxford" />
                      </div>
                    )}
                    
                    {eduSections.postGrad && (
                      <div className="input-group fade-in">
                        <label>Post-Graduation Degree & University</label>
                        <input type="text" placeholder="e.g. M.Sc in AI, Stanford" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 4: Current Course Details */}
                <div className="form-section">
                  <h3 className="section-title">Current Pursuit</h3>
                  <div className="form-row">
                    <div className="input-group">
                      <label>Course / Stream</label>
                      <input type="text" placeholder="e.g. Computer Science" required />
                    </div>
                    <div className="input-group">
                      <label>Institution Name</label>
                      <input type="text" placeholder="University/College Name" required />
                    </div>
                  </div>
                </div>

                {/* Section 5: Documents */}
                <div className="form-section">
                  <h3 className="section-title">Document Upload</h3>
                  <div className="input-group">
                    <label>Academic Certificates / ID</label>
                    <div className="file-upload-wrapper">
                      <input type="file" id="doc-upload" className="file-input" multiple />
                      <label htmlFor="doc-upload" className="file-label">
                        <span className="upload-icon">📁</span>
                        <span>Click to upload or drag and drop</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="terms">
                  <label className="checkbox">
                    <input type="checkbox" required />
                    <span>I verify that all the information provided above is accurate.</span>
                  </label>
                </div>
                
                <button type="submit" className="btn-brown w-100" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating Your Library Card...' : 'Submit Registration'}
                </button>
                
                <div className="divider">or</div>

                <p className="login-prompt footer-text">
                  Already have an account? <a href="/login" className="accent-link">Open your library</a>
                </p>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Register;
