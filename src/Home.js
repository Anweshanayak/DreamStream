import React from 'react';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import FeedbackSection from './FeedbackSection';
import FAQSection from './FAQSection';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeedbackSection />
      <FAQSection />
    </div>
  );
}

export default Home;
