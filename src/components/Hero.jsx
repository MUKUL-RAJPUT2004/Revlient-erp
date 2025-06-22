import React from 'react';
import { ArrowRight, CheckCircle, Users, FileText, DollarSign, Clock } from 'lucide-react';


const Hero = () => {
  const benefits = [
    { icon: Users, title: 'Track Student Applications', description: 'Monitor and manage all student applications in one centralized dashboard' },
    { icon: Clock, title: 'Automate Follow-ups', description: 'Set up automated reminders and follow-up sequences for better engagement' },
    { icon: DollarSign, title: 'Manage Invoices Effortlessly', description: 'Generate, send, and track invoices with integrated payment processing' },
    { icon: FileText, title: 'Streamlined Documentation', description: 'Organize and access all student documents and records instantly' }
  ];


  
  return (
    <section id="home" className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,_#fff5e6_0%,_#ffe4cc_70%)] dark:bg-[radial-gradient(circle_at_20%_20%,_#1a202c_0%,_#2d3748_70%)] pt-16 relative">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-[clamp(1.5rem,5vw,3rem)] sm:text-[clamp(2rem,6vw,4rem)] md:text-[clamp(2.5rem,7vw,6rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-6 animate-slide-up leading-tight">
            Transform Your Education Business with
            <span className="block text-[clamp(2rem,6vw,4rem)] sm:text-[clamp(2.5rem,7vw,5rem)] md:text-[clamp(3rem,8vw,6rem)] text-[#FF6F61] dark:text-[#E55B4D] mt-2 font-extrabold">
              Revlient ERP
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            The complete ERP solution designed specifically for education consultancies. 
            Streamline operations, boost productivity, and grow your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button className="group bg-[#FF6F61] hover:bg-[#E55B4D] text-white px-8 py-6 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
              Request a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Sales
              </button>
          </div>
        </div>

        {/* Hero Image/Dashboard Mockup */}
<div className="mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-200 dark:border-dark-700">             
            {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-dark-600">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revlient ERP Dashboard</h3>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Total Applications</p>
                      <p className="text-2xl font-bold">1,247</p>
                    </div>
                    <Users className="text-blue-200" size={32} />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Revenue This Month</p>
                      <p className="text-2xl font-bold">$24,580</p>
                    </div>
                    <DollarSign className="text-green-200" size={32} />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Pending Follow-ups</p>
                      <p className="text-2xl font-bold">23</p>
                    </div>
                    <Clock className="text-purple-200" size={32} />
                  </div>
                </div>
              </div>

              {/* Dashboard Table Preview */}
              <div className="bg-gray-50 dark:bg-dark-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Recent Applications</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">View All</span>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-white dark:bg-dark-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-300 dark:bg-dark-600 rounded-full"></div>
                        <div>
                          <div className="w-24 h-3 bg-gray-300 dark:bg-dark-600 rounded"></div>
                          <div className="w-16 h-2 bg-gray-200 dark:bg-dark-700 rounded mt-1"></div>
                        </div>
                      </div>
                      <div className="w-16 h-6 bg-green-100 dark:bg-green-900 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Benefits Section */}
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-12">
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2rem,6vw,4rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-4">
               Key Benefits
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-200 mb-8 max-w-4xl mx-auto animate-slide-up leading-relaxed">
              Discover how Revlient ERP can transform your education consultancy operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-float border border-gray-100 dark:border-dark-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <benefit.icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}

            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;