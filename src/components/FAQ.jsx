import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Building2, HeadphonesIcon, GraduationCap, Smartphone } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      icon: Shield,
      question: 'How secure is your ERP?',
      answer: 'Your data is protected with top-tier security—256-bit SSL encryption, regular audits, and GDPR compliance. We take your privacy seriously, so you can focus on your business.'
    },
    {
      id: 2,
      icon: Building2,
      question: 'Can it handle multiple branches?',
      answer: 'Absolutely! Manage all your branches from one dashboard, each with its own settings and reports, but all under your control.'
    },
    {
      id: 3,
      icon: HeadphonesIcon,
      question: 'What support options are available?',
      answer: 'We\'re here for you—24/7 email support, live chat, and phone support for premium plans. Plus, helpful guides and webinars whenever you need them.'
    },
    {
      id: 4,
      icon: GraduationCap,
      question: 'Is training provided?',
      answer: 'Yes! We offer live onboarding, video tutorials, and personal sessions for your team. You\'ll be up and running in no time.'
    },
    {
      id: 5,
      icon: Smartphone,
      question: 'Is there a mobile version?',
      answer: 'Yes, we have mobile apps for iOS and Android, plus a responsive web app—so you can work from anywhere.'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24  bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-responsive-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about Revlient ERP and how it can transform your education consultancy
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-[#2d3748] rounded-2xl border border-[#FF6F61]/20 dark:border-[#E55B4D]/20 overflow-hidden animate-slide-up transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#FFF5E6] dark:hover:bg-[#2d3748] transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-4 flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#FF6F61]/10 dark:bg-[#E55B4D]/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6F61] group-hover:text-white transition-all duration-300">
                    <faq.icon size={20} className="text-[#FF6F61] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Question */}
                  <h3 className="text-responsive-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#FF6F61] dark:group-hover:text-[#E55B4D] transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>

                {/* Chevron */}
                <div className="ml-4 flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-[#FF6F61] dark:group-hover:text-[#E55B4D] transition-all duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-[#FF6F61] dark:group-hover:text-[#E55B4D] transition-all duration-300" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-16">
                    <p className="text-responsive-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-[#FFF5E6] to-[#FFE4CC] dark:from-[#2d3748] dark:to-[#1a202c] rounded-2xl p-8 border border-[#FF6F61]/30 dark:border-[#E55B4D]/30">
            <h3 className="text-responsive-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-responsive-base text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Our team is here to help you understand how Revlient ERP can transform your education consultancy operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-[#FF6F61] hover:bg-[#E55B4D] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                Contact Support
              </a>
              <button className="bg-white dark:bg-dark-800 border border-[#FF6F61] text-[#FF6F61] dark:text-[#E55B4D] hover:bg-[#FF6F61] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;