import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import LoadingPage from './pages/Loading';
import Confirmation from './pages/Confrimation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resumeanalyzer" element={<ResumeAnalyzer />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
