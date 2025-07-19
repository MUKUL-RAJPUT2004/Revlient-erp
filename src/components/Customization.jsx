import React from 'react';
import { Smartphone, Workflow, Globe, Database, Heart, Move, PlusSquare, Plug } from "lucide-react";

const features = [
  {
    icon: Move,
    title: 'Highlight Flexibility',
    description: "Customize every module, tool, and workflow to match your consultancy's unique way of working."
  },
  {
    icon: PlusSquare,
    title: 'Add/Remove Modules',
    description: 'Tailor the platform by enabling only the features your consultancy needs.'
  },
  {
    icon: Plug,
    title: 'Integrate Third-Party Tools',
    description: 'Seamlessly connect WhatsApp, Gmail, and more to streamline communication and workflow.'
  },
  {
    icon: Workflow,
    title: 'Custom Workflows',
    description: 'Build unique, automated flows for HR, career, education, or wellness consultancies based on your process.'
  }
];

const architectureLayers = [
  {
    name: 'User Interface Layer',
    icon: Smartphone,
    color: 'from-blue-100 to-blue-600',
    components: ['Web Dashboard', 'Mobile App', 'Custom Themes', 'Responsive Design'],
    extraClass: 'border border-blue-200/40 shadow-xl'
  },
  {
    name: 'Business Logic Layer',
    icon: Workflow,
    color: 'from-blue-200 to-blue-600',
    components: ['Custom Workflows', 'Business Rules', 'Automation Engine', 'Process Templates']
  },
  {
    name: 'Integration Layer',
    icon: Globe,
    color: 'from-blue-600 to-blue-700',
    components: ['API Gateway', 'Third-party Connectors', 'Data Sync', 'Webhook Management']
  },
  {
    name: 'Data Layer',
    icon: Database,
    color: 'from-blue-700 to-red-600',
    components: ['Secure Database', 'Data Backup', 'Analytics Store', 'Performance Cache']
  }
];

const Customization = () => (
  <section id="customization" className="py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12 relative flex flex-col items-center scroll-reveal">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-2xl opacity-60 z-0" />
        <h3 className="relative z-10 text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-blue-600 dark:text-white drop-shadow mb-4">
          Customizable Architecture
        </h3>
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium max-w-2xl mx-auto">
          Built with flexibility at its core, every layer can be customized to your needs.
        </p>
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700 scroll-reveal"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                <feature.icon className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex justify-center mb-16">
        <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full opacity-60 scroll-reveal" style={{ animationDelay: '0.3s' }} />
      </div>

      {/* Architecture Layers */}
      <div className="mx-auto max-w-4xl space-y-10">
        {architectureLayers.map((layer, index) => (
          <div key={index} className="scroll-reveal" style={{ animationDelay: `${0.4 + index * 0.15}s` }}>
            <div className={`bg-gradient-to-r ${layer.color} rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-102 ${layer.extraClass || ''}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <layer.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-extrabold text-2xl">
                  {layer.name}
                </h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {layer.components.map((component, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center shadow-md hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    <div className="text-sm font-medium text-white">{component}</div>
                  </div>
                ))}
              </div>
            </div>
            {index < architectureLayers.length - 1 && (
              <div className="flex justify-center my-6">
                <svg className="w-6 h-6 text-gray-400 dark:text-gray-600 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 sm:p-8 border border-blue-300/30 dark:border-blue-700/30 mt-16 lg:mt-24 text-center shadow-lg relative overflow-hidden scroll-reveal" style={{ animationDelay: '0.5s' }}>
        <div className="relative z-10">
          <Heart className="w-14 h-14 text-blue-600 dark:text-blue-400 hover:bg-blue-600 mx-auto mb-6 animate-pulse" />
          <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
            Ready to Start Your Customization Journey?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            Let's work together to create an ERP system that perfectly fits your consultancy's unique needs and brings joy to your daily operations.
          </p>
          <button className="bg-white dark:bg-gray-800 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Begin Your Custom ERP Journey ✨
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Customization;