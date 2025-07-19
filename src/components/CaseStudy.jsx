import React, { useEffect } from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Career Consultancy Success',
      company: 'Future Path Consulting',
      challenge: 'Managing 500+ clients with manual processes',
      solution: 'Implemented custom CRM with automated workflows',
      results: ['50% reduction in admin time', '40% increase in client satisfaction', '3x faster client onboarding'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Wellness Transformation',
      company: 'Mindful Living Consultancy',
      challenge: 'Disconnected tools and poor client tracking',
      solution: 'Unified platform with integrated communication',
      results: ['70% improvement in client retention', '45% faster response times', '60% reduction in missed appointments'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
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
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 scroll-reveal" style={{ animationDelay: '0s' }}>
          <h3 className="text-[clamp(1.5rem,4vw,2rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2rem,6vw,4rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-4">
            Success Stories
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real results from consultancies that transformed their operations with our ERP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-reveal border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h4 className="text-white font-bold text-lg sm:text-xl">
                    {study.title}
                  </h4>
                  <p className="text-white/90 text-base sm:text-lg">
                    {study.company}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-base sm:text-lg">Challenge:</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-base sm:text-lg">Solution:</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-base sm:text-lg">Results:</h5>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                          {result}
                        </span>
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