import React, { useState, useEffect } from 'react';
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

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal" style={{ animationDelay: '0s' }}>
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2rem,6vw,4rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about Revlient ERP and how it can transform your education consultancy
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-blue-600/20 dark:border-blue-700/20 overflow-hidden hover:shadow-lg transition-all duration-300 scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-4 flex-1">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <faq.icon size={20} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Question */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>

                {/* Chevron */}
                <div className="ml-4 flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4 sm:pb-6">
                  <div className="pl-14 sm:pl-16">
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 scroll-reveal" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 sm:p-8 border border-blue-300/30 dark:border-blue-700/30">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
              Still have questions?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Our team is here to help you understand how Revlient ERP can transform your education consultancy operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                Contact Support
              </a>
              <button className="bg-white dark:bg-gray-800 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
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