import React from 'react';

const Testimonials = () => {
  const clients = [
    { name: 'Blackonyx', logo: 'http://googleusercontent.com/image_collection/image_retrieval/4614205807065860021_0' },
    { name: 'IBS Consultancy', logo: 'http://googleusercontent.com/image_collection/image_retrieval/12709360724900641506_0' },
    { name: 'NutriBox', logo: 'http://googleusercontent.com/image_collection/image_retrieval/16596717629333170391_0' },
    { name: 'VickyMedia', logo: 'http://googleusercontent.com/image_collection/image_retrieval/9409350410556576151_0' },
    { name: 'Soumya Shyam Make-up Studio', logo: 'http://googleusercontent.com/image_collection/image_retrieval/15215207170445578404_0' },
    { name: 'Perpex Business School', logo: 'http://googleusercontent.com/image_collection/image_retrieval/9290193818957449565_0' },
    { name: 'Perpex', logo: 'http://googleusercontent.com/image_collection/image_retrieval/9563987828836515226_0' },
    { name: 'PlaceX', logo: 'http://googleusercontent.com/image_collection/image_retrieval/11982518350541440648_0' },
    { name: 'BamBrush', logo: 'http://googleusercontent.com/image_collection/image_retrieval/4675997699844299672_0' },
    { name: 'Prince Hotel', logo: 'http://googleusercontent.com/image_collection/image_retrieval/10596149329845787605_0' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-warmwind transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-responsive-4xl font-extrabold text-warmwind">
            Our Clients
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            REVMENT is trusted by businesses across industries.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="scroll-reveal" style={{ animationDelay: '0.1s' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-warmwind-card rounded-lg flex items-center justify-center h-24 w-full border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;