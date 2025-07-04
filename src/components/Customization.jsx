import React from 'react';
import { Smartphone, Workflow, Globe, Database, Heart, Move, PlusSquare, Plug } from "lucide-react";

const features = [
  {
    icon: Move,
    title: 'Highlight flexibility',
    description: "Customize every module, tool, and workflow to match your consultancy's unique way of working."
  },
  {
    icon: PlusSquare,
    title: 'Add/remove modules',
    description: 'Tailor the platform by enabling only the features your consultancy needs.'
  },
  {
    icon: Plug,
    title: 'Integrate third-party tools',
    description: 'Seamlessly connect WhatsApp, Gmail, and more to streamline communication and workflow.'
  },
  {
    icon: Workflow,
    title: 'Custom workflows',
    description: 'Build unique, automated flows for HR, career, education, or wellness consultancies based on your process.'
  }
];

const architectureLayers = [
  {
    name: 'User Interface Layer',
    icon: Smartphone,
    color: 'from-accent-100 to-primary-600',
    components: ['Web Dashboard', 'Mobile App', 'Custom Themes', 'Responsive Design'],
    extraClass: 'border border-primary-200/40 shadow-xl'
  },
  {
    name: 'Business Logic Layer',
    icon: Workflow,
    color: 'from-accent-200 to-primary-600',
    components: ['Custom Workflows', 'Business Rules', 'Automation Engine', 'Process Templates']
  },
  {
    name: 'Integration Layer',
    icon: Globe,
    color: 'from-primary-600 to-primary-700',
    components: ['API Gateway', 'Third-party Connectors', 'Data Sync', 'Webhook Management']
  },
  {
    name: 'Data Layer',
    icon: Database,
    color: 'from-primary-700 to-[#B23A2B]',
    components: ['Secure Database', 'Data Backup', 'Analytics Store', 'Performance Cache']
  }
];

const Customization = () => (
  <section id="customization" className="py-16 lg:py-24 bg-white dark:bg-dark-900 duration-300 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-12 relative flex flex-col items-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-2xl opacity-60 z-0" />
        <h3 className="relative z-10 text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-primary-600 dark:text-white drop-shadow mb-4 animate-fade-in">
          Customizable Architecture
        </h3>
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Built with flexibility at its core, every layer can be customized to your needs.
        </p>
        
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-row items-center bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:bg-gradient-to-br hover:from-primary-50 hover:to-purple-50 dark:hover:from-dark-700 dark:hover:to-dark-800 group animate-slide-up"
            style={{ animationDelay: `${index * 0.15}s` }}
            tabIndex={0}
          >
            {/* Animated background blob on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 rounded-2xl bg-gradient-to-br from-primary-100/30 via-purple-100/20 to-blue-100/10 dark:from-primary-900/20 dark:via-purple-900/10 dark:to-blue-900/10" />
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full text-primary-600 group-hover:text-white transition-colors duration-300 bg-primary-100 dark:bg-primary-900/30 mr-6 z-10">
              <feature.icon className="w-8 h-8" />
            </div>
            <div className="text-left z-10">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex justify-center mb-16">
        <div className="h-1 w-32 bg-gradient-to-r from-primary-400 via-purple-400 to-blue-400 rounded-full opacity-60 animate-fade-in" style={{ animationDelay: '0.3s' }} />
      </div>

      {/* Architecture Section */}
      <div className="mx-auto max-w-4xl space-y-10">
        {architectureLayers.map((layer, index) => (
          <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.15}s` }}>
            <div className={`bg-gradient-to-r ${layer.color} rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] ${layer.extraClass || ''}`}>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-6">
                  <layer.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-extrabold text-2xl md:text-3xl">
                  {layer.name}
                </h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {layer.components.map((component, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center shadow-md hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    <div className="text-base font-semibold text-white">{component}</div>
                  </div>
                ))}
              </div>
            </div>
            {index < architectureLayers.length - 1 && (
              <div className="flex justify-center my-6">
                <svg className="w-8 h-8 text-gray-300 dark:text-gray-600 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="mt-24 text-center bg-gradient-to-r from-[#FFF5E6] to-[#FFE4CC] dark:from-[#2d3748] dark:to-[#1a202c] rounded-2xl p-12 border border-[#FF6F61]/30 dark:border-[#E55B4D]/30 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <Heart className="w-16 h-16 text-[#FF6F61] dark:text-[#E55B4D] mx-auto mb-6 animate-pulse" />
          <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
            Ready to Start Your Customization Journey?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            Let's work together to create an ERP system that perfectly fits your consultancy's unique needs and brings joy to your daily operations.
          </p>
          <button className="bg-[#FF6F61] hover:bg-[#E55B4D] text-white px-10 py-4 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg">
            Begin Your Custom ERP Journey ✨
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Customization;



    