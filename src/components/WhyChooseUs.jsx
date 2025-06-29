import React, { useState } from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeImage, setActiveImage] = useState(0);

  const advantages = [
    'Built specifically for consultancies',
    'Quick deployment (2–5 days)',
    'Dedicated support team',
    'Affordable pricing with no hidden costs',
    'Customizable workflows and modules',
    'Enterprise-grade security'
  ];

  const images = [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2rem,6vw,4rem)] font-extrabold text-gray-800 dark:text-gray-200">
            Why choose us?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveImage(index)}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-6 group-hover:bg-primary-700 transition-colors duration-300">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-800 dark:text-gray-200 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-600 transition-colors duration-300">
                  {advantage}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image - Top Left */}
            <div className="col-span-1 row-span-2">
              <img 
                src={images[activeImage]} 
                alt="Consultancy workspace"
                className="w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl"
              />
            </div>
            
            {/* Small Images - Right Side */}
            <div className="space-y-4">
              <img 
                src={images[(activeImage + 1) % images.length]} 
                alt="Team collaboration"
                className="w-full h-32 object-cover rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer hover:scale-105"
                onClick={() => setActiveImage((activeImage + 1) % images.length)}
              />
              <img 
                src={images[(activeImage + 2) % images.length]} 
                alt="Business meeting"
                className="w-full h-32 object-cover rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer hover:scale-105"
                onClick={() => setActiveImage((activeImage + 2) % images.length)}
              />
            </div>
            
            {/* Bottom Images */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <img 
                src={images[(activeImage + 3) % images.length]} 
                alt="Office environment"
                className="w-full h-24 object-cover rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer hover:scale-105"
                onClick={() => setActiveImage((activeImage + 3) % images.length)}
              />
              <img 
                src={images[(activeImage + 4) % images.length]} 
                alt="Technology solutions"
                className="w-full h-24 object-cover rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer hover:scale-105"
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