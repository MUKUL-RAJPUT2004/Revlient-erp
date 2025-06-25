import React from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  DollarSign, 
  BarChart3, 
  MessageSquare,
  Shield,
  Globe,
  Zap
} from 'lucide-react';


const CoreFeatures = () => {
  const features = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Complete student profiles with application tracking and communication history.'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automated appointment system with calendar integration and reminders.'
    },
    {
      icon: FileText,
      title: 'Document Hub',
      description: 'Secure document storage with automated verification workflows.'
    },
    {
      icon: DollarSign,
      title: 'Financial Tracking',
      description: 'Invoice generation, payment tracking, and financial reporting.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights with customizable reports and metrics.'
    },
    {
      icon: MessageSquare,
      title: 'Communication Center',
      description: 'Integrated email, SMS, and notification management system.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encrypted data storage.'
    },
    {
      icon: Globe,
      title: 'Multi-Location',
      description: 'Manage multiple offices and locations from single dashboard.'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automated workflows to reduce manual tasks and errors.'
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2rem,6vw,4rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-4">
            Core Features
          </h2>
          <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to streamline your education consultancy operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white dark:bg-dark-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-up border border-gray-200 dark:border-dark-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <feature.icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={20} />
              </div>

              {/* Content */}
              <h3 className="text-responsive-lg font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-responsive-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video Demo Section */}
        <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 lg:p-12 shadow-xl animate-slide-up border border-gray-200 dark:border-dark-700" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-8">
            <h3 className="text-[clamp(1.5rem,4vw,2rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2rem,6vw,4rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-4">
              See Revlient ERP in Action
            </h3>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch our comprehensive demo to understand how Revlient ERP can transform your operations
            </p>
          </div>
          
          {/* Video Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
                <video controls className="w-full h-full object-cover rounded-lg" style={{ position: 'absolute', top: 0, left: 0 }}>
                <source src="../public/sample.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                
            </div>
            </div>

            
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;