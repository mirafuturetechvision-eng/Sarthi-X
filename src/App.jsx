import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import TestSeries from './pages/TestSeries';
import Reader from './pages/Reader';
import Questions from './pages/Questions';

function App() {
  return (
    <Router>
      <LoadingSpinner />
      <BackToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reader" element={<Reader />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
