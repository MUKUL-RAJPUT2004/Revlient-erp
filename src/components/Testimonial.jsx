import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Career Growth Consultancy',
      role: 'Founder & CEO',
      content: 'Revlient ERP transformed our consultancy operations completely. The customization options allowed us to create workflows that perfectly match our career counseling process. Our client satisfaction has increased by 40% since implementation.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Wellness Solutions Inc.',
      role: 'Operations Director',
      content: 'The deployment was incredibly smooth - just 3 days from start to finish. The team support was exceptional, and the system has streamlined our wellness consulting services beyond our expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Education First Consulting',
      role: 'Managing Partner',
      content: 'What impressed us most was how the system adapted to our unique education consulting methodology. The custom modules and integrations have made our processes 60% more efficient.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'HR Excellence Partners',
      role: 'Senior Consultant',
      content: 'The affordability combined with enterprise-grade features made this the perfect choice for our growing HR consultancy. The ROI was evident within the first month of usage.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-blue-600 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

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

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-warmwind transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal" style={{ animationDelay: '0s' }}>
          <h2 className="text-responsive-4xl font-extrabold text-warmwind">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="scroll-reveal" style={{ animationDelay: '0.1s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Navigation Button */}
            <div className="hidden lg:flex justify-start">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-warmwind-card rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Current Testimonial */}
            <div className="bg-warmwind-card rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-200 text-lg sm:text-xl">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm sm:text-base">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600 absolute -top-2 -left-2" />
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-normal leading-relaxed pl-6">
                  {testimonials[currentTestimonial].content}
                </p>
              </div>
            </div>

            {/* Next Testimonial Preview */}
            <div className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[(currentTestimonial + 1) % testimonials.length].image}
                  alt={testimonials[(currentTestimonial + 1) % testimonials.length].name}
                  className="w-12 h-12 rounded-full object-cover mr-4 opacity-80"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-200 text-base sm:text-lg">
                    {testimonials[(currentTestimonial + 1) % testimonials.length].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonials[(currentTestimonial + 1) % testimonials.length].company}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-normal leading-relaxed line-clamp-4">
                {testimonials[(currentTestimonial + 1) % testimonials.length].content}
              </p>
            </div>

            {/* Right Navigation Button */}
            <div className="hidden lg:flex justify-end">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;