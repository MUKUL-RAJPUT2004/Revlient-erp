import React from 'react';
import { 
  Users, 
  Target,
  Award,
  TrendingUp
} from 'lucide-react';


const About = () => {
  
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
    <section id="about" className="py-16 lg:py-24 bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* What is Revlient ERP Section */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.5rem,4vw,2rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2rem,6vw,4rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-4">
              What is Revlient ERP?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                <p className="text-responsive-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Revlient ERP is built just for education consultancies, immigration firms, and career counselors—so you get tools that actually fit your business, not just another generic CRM.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#FF6F61] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-responsive-base text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-white">Complete Business Management:</strong> We know your challenges—so we built features that make your day easier, not harder.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#FF6F61] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-responsive-base text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-white">Cloud-Based & Secure:</strong> Access your data anywhere, anytime, with peace of mind—your info is always safe and backed up.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#FF6F61] rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-responsive-base text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-white">Industry-Specific:</strong> From student management to application tracking, every tool is tailored for your workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Education consultancy team working with ERP system"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF6F61]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Stats Cards Section */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Education Consultancies', icon: Users },
              { number: '50K+', label: 'Students Managed', icon: Target },
              { number: '99.9%', label: 'Uptime Guarantee', icon: Award },
              { number: '300%', label: 'Average ROI Increase', icon: TrendingUp }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gray-50 dark:bg-dark-800 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-dark-700"
              >
                <div className="w-12 h-12 bg-[#FF6F61]/10 dark:bg-[#E55B4D]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-[#FF6F61]" size={24} />
                </div>
                <div className="text-responsive-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-responsive-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who is it for Section */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h3 className="text-[clamp(1.5rem,4vw,2rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2rem,6vw,4rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-4">
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
                    className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
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
                  <div className="w-3 h-3 bg-[#FF6F61] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-responsive-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {audience.title}
                    </h4>
                    <p className="text-responsive-base text-gray-600 dark:text-gray-400">
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