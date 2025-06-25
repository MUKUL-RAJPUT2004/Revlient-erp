import React, { useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, FileText, DollarSign, Clock, Star, TrendingUp, Zap } from 'lucide-react';

const Hero = () => {
  const benefits = [
    { 
      icon: Users, 
      title: 'Track Student Applications', 
      description: 'Monitor and manage all student applications in one centralized dashboard',
      gradient: 'from-[#FF6F61] to-[#E55B4D]' // Coral theme
    },
    { 
      icon: Clock, 
      title: 'Automate Follow-ups', 
      description: 'Set up automated reminders and follow-up sequences for better engagement',
      gradient: 'from-[#FF6F61] to-[#E55B4D]' // Coral theme
    },
    { 
      icon: DollarSign, 
      title: 'Manage Invoices Effortlessly', 
      description: 'Generate, send, and track invoices with integrated payment processing',
      gradient: 'from-[#FF6F61] to-[#E55B4D]' // Coral theme
    },
    { 
      icon: FileText, 
      title: 'Streamlined Documentation', 
      description: 'Organize and access all student documents and records instantly',
      gradient: 'from-[#FF6F61] to-[#E55B4D]' // Coral theme
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: TrendingUp },
    { number: '24/7', label: 'Support', icon: Star },
    { number: '50+', label: 'Countries', icon: Zap }
  ];

  return (
    <section id="home" className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,_#fff5e6_0%,_#ffe4cc_70%)] dark:bg-[radial-gradient(circle_at_20%_20%,_#1a202c_0%,_#2d3748_70%)] pt-16 relative" style={{ willChange: 'transform' }}>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6F61]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E55B4D]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in" style={{ willChange: 'opacity' }}>
         
          <div className="inline-flex items-center px-4 py-2 bg-[#FF6F61]/10 dark:bg-[#E55B4D]/30 rounded-full text-[#FF6F61] dark:text-[#E55B4D] text-sm font-medium mb-6 animate-slide-up">
            <Star className="w-4 h-4 mr-2" />
            #1 ERP Solution for Education Consultancies
          </div>

          {/* Main Heading */}
          <h1 className="text-[clamp(1.5rem,5vw,3rem)] sm:text-[clamp(2rem,6vw,4rem)] md:text-[clamp(2.5rem,7vw,6rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-6 animate-slide-up leading-tight" style={{ willChange: 'opacity' }}>
            Transform Your Education Business with
            <span className="block text-[clamp(2rem,6vw,4rem)] sm:text-[clamp(2.5rem,7vw,5rem)] md:text-[clamp(3rem,8vw,6rem)] text-[#FF6F61] dark:text-[#E55B4D] mt-2 font-extrabold">
              Revlient ERP
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            The complete ERP solution designed specifically for education consultancies. 
            <span className="block mt-2 font-semibold text-[#FF6F61] dark:text-[#E55B4D]">
              Streamline operations, boost productivity, and grow your business.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s', willChange: 'transform' }}>
            <button className="group bg-[#FF6F61] hover:bg-[#E55B4D] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
              Request a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button className="bg-transparent border-2 border-[#FF6F61] text-[#FF6F61] dark:text-[#E55B4D] hover:bg-[#FF6F61] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.6s', willChange: 'transform' }}>
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF6F61]/10 dark:bg-[#E55B4D]/30 rounded-full mb-3 group-hover:bg-[#FF6F61] group-hover:text-white transition-all duration-300">
                  <stat.icon size={20} />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
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
        <div className="animate-slide-up" style={{ animationDelay: '1s', willChange: 'opacity, transform' }}>
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
                className="group bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border border-gray-100 dark:border-dark-700 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s`, willChange: 'transform' }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`relative w-12 h-12 bg-${benefit.gradient.split(' ')[0]}/10 dark:bg-${benefit.gradient.split(' ')[1]}/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${benefit.gradient.split(' ')[0]} transition-colors duration-300 shadow-lg`}>
                  <benefit.icon className="text-[#FF6F61] group-hover:text-white transition-colors duration-300" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#FF6F61] dark:group-hover:text-[#E55B4D] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect  */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6F61] to-[#E55B4D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;