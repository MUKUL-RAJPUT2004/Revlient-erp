import React, { useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Globe, 
  Facebook,
  ArrowRight,
  Heart,
  Code
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const solutions = [
    { name: 'Student Management', href: '#features' },
    { name: 'Document Processing', href: '#features' },
    { name: 'Financial Tracking', href: '#features' },
    { name: 'Smart Scheduling', href: '#features' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '',
      color: 'hover:bg-pink-600'
    },
    {
      icon: Globe,
      name: 'Website',
      url: '',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: '',
      color: 'hover:bg-blue-700'
    }
  ];

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
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 scroll-reveal" style={{ animationDelay: '0s' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="ml-3 text-2xl font-bold">Revlient</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed text-sm sm:text-base">
              The complete ERP solution designed specifically for education consultancies. 
              Streamline operations and grow your business.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400 dark:text-gray-500">
                <Mail className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                <span>hello@revlient.com</span>
              </div>
              <div className="flex items-center text-gray-400 dark:text-gray-500">
                <Phone className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400 dark:text-gray-500">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <a
                    href={solution.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {solution.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4 text-sm sm:text-base">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 scroll-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
              <span>© 2025 Revlient. All rights reserved.</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> for education consultancies
              </span>
            </div>

            {/* Developer Credits */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm">
                <Code className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span>Developed by</span>
                <a 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  MUKUL RAJPUT
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 dark:text-green-500 text-sm font-medium">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;