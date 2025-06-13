import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Project from './components/Project';
import Work from './components/Work';
import Extention from './components/Extention';
import Customise from './components/Customise';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Project />
      <Work />
      <Extention />
      <Customise />
      {/* <Partners /> */}
      {/* <Features /> */}
      {/* <Testimonials /> */}
      <Pricing />
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
}

export default App;