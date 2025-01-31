import React from 'react';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import FeedbackSection from '../FeedbackSection';
import FAQSection from './FAQSection';
import Logo from './Logo';
import Frame from './Frame';
import TestimonialsAndOffer from './TestimonialsAndOffer';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';
import Testimonials from './Testimonials';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Logo />
      <Frame />
      <Testimonials/>
      <TestimonialsAndOffer/>
      <NewsletterSection/>
      <FAQSection />
      <Footer/>
    </div>
  );
}

export default Home;
