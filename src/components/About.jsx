import React from 'react';
import { 
  Users, 
  FileText, 
  Calendar, 
  DollarSign,
  Target,
  Award,
  TrendingUp,
  Building2,
  GraduationCap,
  Briefcase,
  BookOpen
} from 'lucide-react';

const About = () => {
  const modules = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Complete student profiles, application tracking, and communication history in one centralized system.',
      features: ['Profile Management', 'Application Tracking', 'Communication Log']
    },
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Automated document collection, verification, and processing with secure cloud storage.',
      features: ['Document Collection', 'Verification System', 'Cloud Storage']
    },
    {
      icon: Calendar,
      title: 'Appointment System',
      description: 'Smart scheduling with automated reminders, calendar integration, and availability management.',
      features: ['Smart Scheduling', 'Automated Reminders', 'Calendar Integration']
    },
    {
      icon: DollarSign,
      title: 'Financial Management',
      description: 'Invoice generation, payment tracking, and comprehensive financial reporting tools.',
      features: ['Invoice Generation', 'Payment Tracking', 'Financial Reports']
    }
  ];

  const targetAudiences = [
    {
      title: 'Education Consultancies',
      description: 'Agencies helping students with university applications and study abroad programs',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Immigration Consultants', 
      description: 'Professionals assisting with visa applications and immigration processes',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Career Counselors',
      description: 'Individual counselors and small firms providing career guidance services',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Training Institutes',
      description: 'Educational institutions offering test preparation and skill development',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-warmwind transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* What is Revlient ERP Section */}
        <div className="mb-20 scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="text-responsive-4xl font-extrabold text-warmwind mb-6">
              What is Revlient ERP?
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="scroll-reveal">
              <div className="space-y-6">
                <p className="text-responsive-lg text-warmwind-light leading-relaxed mb-6">
                  Revlient ERP is a comprehensive Enterprise Resource Planning system specifically designed for education consultancies, immigration firms, and career counseling services.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-responsive-base text-warmwind-light">
                      <strong className="text-warmwind">Complete Business Management:</strong> Unlike generic CRM systems, Revlient ERP understands the unique challenges of education consultancies.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-responsive-base text-warmwind-light">
                      <strong className="text-warmwind">Cloud-Based & Secure:</strong> Access your data anywhere, anytime with enterprise-grade security and regular backups.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-responsive-base text-warmwind-light">
                      <strong className="text-warmwind">Industry-Specific:</strong> Tailored solutions for student management, application tracking, and business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="scroll-reveal  ">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Education consultancy team working with ERP system"
                  className="w-full h-80 object-cover rounded-2xl warmwind-shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Stats Cards Section */}
        <div className="mb-20 scroll-reveal ">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 " >
            {[
              { number: '500+', label: 'Education Consultancies', icon: Users },
              { number: '50K+', label: 'Students Managed', icon: Target },
              { number: '99.9%', label: 'Uptime Guarantee', icon: Award },
              { number: '300%', label: 'Average ROI Increase', icon: TrendingUp }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="warmwind-card hover:warmwind-shadow-lg text-center warmwind-shadow  transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="text-responsive-3xl font-bold text-warmwind mb-2">
                  {stat.number}
                </div>
                <div className="text-responsive-sm text-warmwind-light font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who is it for Section */}
        <div className="mb-20 scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="text-responsive-3xl font-bold text-warmwind mb-6">
              Who is it for?
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images Grid - Left Side */}
            <div className="grid grid-cols-2 gap-4">
              {targetAudiences.map((audience, index) => (
                <div key={audience.title} className="relative group">
                  <img 
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-48 object-cover rounded-xl warmwind-shadow group-hover:warmwind-shadow-lg transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-sm">{audience.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Content List - Right Side */}
            <div className="space-y-6">
              {targetAudiences.map((audience, index) => (
                <div key={audience.title} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-responsive-lg font-semibold text-warmwind mb-2">
                      {audience.title}
                    </h4>
                    <p className="text-responsive-base text-warmwind-light">
                      {audience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
    </section>
  );
};

export default About;