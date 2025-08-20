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
  // const modules = [
  //   {
  //     icon: Users,
  //     title: 'Student Management',
  //     description: 'Complete student profiles, application tracking, and communication history in one centralized system.',
  //     features: ['Profile Management', 'Application Tracking', 'Communication Log']
  //   },
  //   {
  //     icon: FileText,
  //     title: 'Document Processing',
  //     description: 'Automated document collection, verification, and processing with secure cloud storage.',
  //     features: ['Document Collection', 'Verification System', 'Cloud Storage']
  //   },
  //   {
  //     icon: Calendar,
  //     title: 'Appointment System',
  //     description: 'Smart scheduling with automated reminders, calendar integration, and availability management.',
  //     features: ['Smart Scheduling', 'Automated Reminders', 'Calendar Integration']
  //   },
  //   {
  //     icon: DollarSign,
  //     title: 'Financial Management',
  //     description: 'Invoice generation, payment tracking, and comprehensive financial reporting tools.',
  //     features: ['Invoice Generation', 'Payment Tracking', 'Financial Reports']
  //   }
  // ];

  const targetAudiences = [
    {
      title: 'Education & Training Institutes',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Retail & Boutiques',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Healthcare & Clinics',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Logistics & Warehousing',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-warmwind transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* What is Revlient ERP Section */}
        <div className="mb-20 scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="text-responsive-4xl font-extrabold text-warmwind mb-6">
              What is REVMENT?
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="scroll-reveal">
              <div className="space-y-6">
                <p className="text-responsive-lg text-warmwind-light leading-relaxed mb-6">
                  REVMENT is a next-gen ERP platform built by Revlient Intercontinental LLP to simplify business operations for SMEs, startups, and enterprises. Whether you manage a single office or multiple branches, REVMENT helps you stay in control.
                </p>
                
                {/* Mission Statement */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
                  <h4 className="text-responsive-lg font-bold text-warmwind mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-500" />
                    Our Mission
                  </h4>
                  <p className="text-responsive-base text-warmwind-light italic leading-relaxed">
                    "Our mission is to automate all the processes that businesses rely on, enabling teams to save time, cut costs, and focus on growth."
                  </p>
                </div>
                {/* Key Features Grid - 1x4 Layout */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h5 className="font-semibold text-warmwind text-sm mb-2">Smart Staff Management</h5>
                    <p className="text-xs text-warmwind-light">Manage your team efficiently</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
                      <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h5 className="font-semibold text-warmwind text-sm mb-2">Lead Tracking & CRM</h5>
                    <p className="text-xs text-warmwind-light">Track leads and manage relationships</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-3">
                      <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h5 className="font-semibold text-warmwind text-sm mb-2">Call Recording & Logs</h5>
                    <p className="text-xs text-warmwind-light">Record and track all communications</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-3">
                      <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h5 className="font-semibold text-warmwind text-sm mb-2">Real-time Analytics</h5>
                    <p className="text-xs text-warmwind-light">Get insights with live data</p>
                  </div>
                </div> */}
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