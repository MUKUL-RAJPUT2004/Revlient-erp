import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreFeatures from './components/CoreFeatures';
import About from './components/About';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/ContactUs';
import Footer from './components/Footer';
import Customization from './components/Customization';
import CaseStudy from './components/CaseStudy';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonial';


function App() {
  // Initialize scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-warmwind transition-colors duration-300 flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreFeatures />
        <Customization />
        <WhyChooseUs />
        <CaseStudy />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;