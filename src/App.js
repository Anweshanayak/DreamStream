import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ResumeAnalyzer from './pages/ResumeAnalyzer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resumeanalyzer" element={<ResumeAnalyzer />} />
      </Routes>
    </Router>
  );
}

export default App;
