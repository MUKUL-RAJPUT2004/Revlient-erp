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
    <footer className="bg-warmwind-card duration-300 relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 scroll-reveal" style={{ animationDelay: '0s' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-warmwind mb-6">Revlient</span>
            </div>
            <p className="text-warmwind-light mb-6 leading-relaxed text-sm sm:text-base">
              The complete ERP solution designed specifically for education consultancies. 
              Streamline operations and grow your business.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-warmwind-light">
                <Mail className="w-5 h-5 mr-3 text-warmwind-accent" />
                <span>hello@revlient.com</span>
              </div>
              <div className="flex items-center text-warmwind-light">
                <Phone className="w-5 h-5 mr-3 text-warmwind-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-warmwind-light">
                <MapPin className="w-5 h-5 mr-3 text-warmwind-accent" />
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
                  className={`w-10 h-10 bg-warmwind-card border border-warmwind rounded-lg flex items-center justify-center text-warmwind-light ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
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
                    className="text-warmwind-light hover:text-warmwind-accent transition-colors duration-300 flex items-center group"
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
                    className="text-warmwind-light hover:text-warmwind-accent transition-colors duration-300 flex items-center group"
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
            <p className="text-warmwind-light mb-4 text-sm sm:text-base">
              Get the latest updates and insights delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 sm:py-3 bg-warmwind-card border border-warmwind rounded-lg text-warmwind placeholder-warmwind-light focus:ring-2 focus:ring-warmwind-accent focus:border-transparent transition-all duration-300"
              />
              <button className="w-full bg-warmwind-accent hover:bg-opacity-80 text-white px-4 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-warmwind border-t border-warmwind">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-warmwind-light text-sm mb-4 md:mb-0">
              <span>© 2025 Revlient. All rights reserved.</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> for education consultancies
              </span>
            </div>

            {/* Developer Credits */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-warmwind-light text-sm">
                <Code className="w-4 h-4 mr-2 text-warmwind-accent" />
                <span>Developed by</span>
                <a 
                  href="https://www.linkedin.com/in/mukul-rajput-04114a225/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-warmwind-accent hover:text-warmwind font-semibold transition-colors duration-300 hover:underline text-blue-600"
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