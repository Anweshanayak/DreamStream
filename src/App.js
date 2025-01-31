import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HR/Home';
import About from './About';
import OfferLetterGenerator from './OfferLetterGenerator';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './Dashboard';
import ResumeAnalyzer from './ResumeAnalyzer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offerlettergenerator" element={<OfferLetterGenerator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resumeanalyzer" element={<ResumeAnalyzer />} />
      </Routes>
    </Router>
  );
}

export default App;
