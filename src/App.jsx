import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreFeatures from './components/CoreFeatures';
import About from './components/About';
import Customization from './components/Customization';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudy';
import Testimonials from './components/Testimonial';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreFeatures />
        <Customization />
        <WhyChooseUs />
        <Testimonials />
        <CaseStudies />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />

        <div className="fixed bottom-6 right-6 p-4 bg-primary-600 text-white rounded-full cursor-pointer hover:bg-primary-700 transition-colors">
        ?
        </div>
      </main>
    </div>
  );
}

export default App;