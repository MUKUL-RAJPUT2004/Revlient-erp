import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeImage, setActiveImage] = useState(0);

  const advantages = [
    'We provide any type of automation your business requires.',
    'Seamless integration with your existing ERP or third-party tools.',
    'Intuitive and easy-to-use interface.',
    'Scalable for small to large businesses.',
    'Dedicated support team to ensure smooth operations.',
    
  ];

  const images = [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ];

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
            Why Choose Us?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-center group cursor-pointer scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveImage(index)}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors duration-300">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-800 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {advantage}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image - Top Left */}
            <div className="col-span-1 row-span-2 scroll-reveal" style={{ animationDelay: '0.4s' }}>
              <img
                src={images[activeImage]}
                alt="Consultancy workspace"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              />
            </div>

            {/* Small Images - Right Side */}
            <div className="space-y-4">
              <img
                src={images[(activeImage + 1) % images.length]}
                alt="Team collaboration"
                className="w-full h-32 object-cover rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 scroll-reveal"
                style={{ animationDelay: '0.5s' }}
                onClick={() => setActiveImage((activeImage + 1) % images.length)}
              />
              <img
                src={images[(activeImage + 2) % images.length]}
                alt="Business meeting"
                className="w-full h-32 object-cover rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 scroll-reveal"
                style={{ animationDelay: '0.6s' }}
                onClick={() => setActiveImage((activeImage + 2) % images.length)}
              />
            </div>

            {/* Bottom Images */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <img
                src={images[(activeImage + 3) % images.length]}
                alt="Office environment"
                className="w-full h-24 object-cover rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 scroll-reveal"
                style={{ animationDelay: '0.7s' }}
                onClick={() => setActiveImage((activeImage + 3) % images.length)}
              />
              <img
                src={images[(activeImage + 4) % images.length]}
                alt="Technology solutions"
                className="w-full h-24 object-cover rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 scroll-reveal"
                style={{ animationDelay: '0.8s' }}
                onClick={() => setActiveImage((activeImage + 4) % images.length)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;