import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Reader from './pages/Reader';

function App() {
  return (
    <Router>
      <LoadingSpinner />
      <BackToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reader" element={<Reader />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
