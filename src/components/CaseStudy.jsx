import React, { useEffect } from 'react';
import { Briefcase, Users, Clock, TrendingUp, Award, BarChart2 } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Medcity International',
      industry: 'Education & Training',
      challenge: 'Managing 500+ international students with manual processes',
      solution: 'A fully fledged ERP software with advanced call recording features, designed to streamline operations for an international education and training institute.',
      metrics: [
        { icon: Clock, value: '50%', label: 'Admin Time Saved' },
        { icon: Users, value: '40%', label: 'Increase in Satisfaction' },
        { icon: TrendingUp, value: '3x', label: 'Faster Onboarding' }
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop'
    },
    {
      id: 2,
      title: 'Blueberry Global Purchase',
      industry: 'Procurement & Logistics',
      challenge: 'Tracking international inventory across multiple locations',
      solution: 'Stock management ERP for global procurement with real-time inventory tracking and supplier management.',
      metrics: [
        { icon: BarChart2, value: '65%', label: 'Inventory Accuracy' },
        { icon: Clock, value: '72%', label: 'Process Efficiency' },
        { icon: TrendingUp, value: '2.5x', label: 'Order Fulfillment' }
      ],
      image: 'https://images.pexels.com/photos/3283186/pexels-photo-3283186.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop'
    },
    {
      id: 3,
      title: 'Bandaraz Legal',
      industry: 'Legal Services',
      challenge: 'Tracking client interactions and case management',
      solution: 'ERP with call recording and client management workflows tailored for legal consultancy services.',
      metrics: [
        { icon: Users, value: '85%', label: 'Client Retention' },
        { icon: Award, value: '43%', label: 'Revenue Growth' },
        { icon: Clock, value: '68%', label: 'Faster Case Resolution' }
      ],
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop'
    },
    {
      id: 4,
      title: 'Gloria Global Ventures',
      industry: 'Educational Consulting',
      challenge: 'Disconnected tools and poor student application tracking',
      solution: 'Custom ERP for student admissions management with application tracking and communication tools.',
      metrics: [
        { icon: TrendingUp, value: '70%', label: 'Client Retention' },
        { icon: Clock, value: '45%', label: 'Faster Response Times' },
        { icon: Users, value: '60%', label: 'Reduced Missed Appointments' }
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=350&fit=crop'
    }
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
        {/* Section Header with enhanced styling */}
        <div className="text-center mb-16 scroll-reveal" style={{ animationDelay: '0s' }}>
          <h3 className="text-responsive-4xl font-extrabold text-warmwind mb-4">
            Success Stories
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-warmwind-light max-w-3xl mx-auto">
            Real results from consultancies that transformed their business with our ERP solution
          </p>
          <div className="w-24 h-1 bg-warmwind-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Case Studies Grid with enhanced cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-warmwind-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-reveal overflow-hidden border border-warmwind"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image section with improved overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/10"></div>
                <div className="absolute top-4 right-4 bg-warmwind-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {study.industry}
                </div>
                <div className="absolute bottom-4 left-6">
                  <h4 className="text-white font-bold text-xl sm:text-2xl tracking-tight">
                    {study.title}
                  </h4>
                </div>
              </div>

              {/* Content section with challenge and solution */}
              <div className="p-6">
                <div className="mb-6">
                  <h5 className="font-semibold text-warmwind-accent mb-2 text-base">The Challenge:</h5>
                  <p className="text-warmwind-light text-sm">
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-warmwind-accent mb-2 text-base">Our Solution:</h5>
                  <p className="text-warmwind-light text-sm">
                    {study.solution}
                  </p>
                </div>

                {/* Metrics section with icons */}
                <div className="mt-8">
                  <h5 className="font-semibold text-warmwind-accent mb-4 text-base">Impact Metrics:</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center p-3 bg-warmwind bg-opacity-5 rounded-lg">
                        <metric.icon className="w-5 h-5 text-warmwind-accent mb-2" />
                        <span className="font-bold text-lg text-warmwind">{metric.value}</span>
                        <span className="text-xs text-warmwind-light text-center mt-1">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;