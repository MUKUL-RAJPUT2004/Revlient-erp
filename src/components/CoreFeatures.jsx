import React, { useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  DollarSign, 
  BarChart3, 
  MessageSquare,
  Video,
  Shield,
  Globe,
  Zap
} from 'lucide-react';

const CoreFeatures = () => {
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
    <section id="features" className="py-16 lg:py-24 bg-warmwind transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h3 className="text-responsive-4xl font-extrabold text-warmwind mb-6">
            Core Features
          </h3>
          <p className="text-responsive-lg text-warmwind-light max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to streamline your education consultancy operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group warmwind-card hover:warmwind-shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <feature.icon className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" size={20} />
              </div>

              {/* Content */}
              <h3 className="text-responsive-lg font-semibold text-warmwind mb-3">
                {feature.title}
              </h3>
              <p className="text-responsive-sm text-warmwind-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video Demo Section */}
        <div className="warmwind-card rounded-3xl p-8 lg:p-12 warmwind-shadow-xl scroll-reveal">
          <div className="text-center mb-8">
            <h3 className="text-responsive-3xl font-bold text-warmwind mb-4">
              See Revlient ERP in Action
            </h3>
            <p className="text-responsive-lg text-warmwind-light max-w-2xl mx-auto">
              Watch our comprehensive demo to understand how Revlient ERP can transform your operations
            </p>
          </div>
          
          {/* Video Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center shadow-inner">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600 transition-colors duration-300 cursor-pointer group shadow-lg">
                  <Video className="text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                <p className="text-responsive-base text-warmwind-light font-medium">
                  Click to Watch Product Demo
                </p>
                <p className="text-responsive-sm text-warmwind-light/70 mt-2">
                  Duration: 5 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;