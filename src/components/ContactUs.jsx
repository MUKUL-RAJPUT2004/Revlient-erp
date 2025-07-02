import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Upload,
  Linkedin,
  Instagram,
  Globe,
  Facebook,
  CheckCircle,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      file: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        file: null
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@revlient.com',
      link: 'mailto:hello@revlient.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '',
      color: 'hover:text-pink-600'
    },
    {
      icon: Globe,
      name: 'Website',
      url: '',
      color: 'hover:text-primary-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: '',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-responsive-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h2>
          <p className="text-responsive-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your education consultancy? Get in touch with our team for a personalized demo and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form - Left Side */}
          <div className="animate-slide-up h-full">
            <div className="bg-white dark:bg-dark-900 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-dark-700 h-full flex flex-col">
              <h3 className="text-responsive-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12 flex-1 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-responsive-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-responsive-base text-gray-600 dark:text-gray-400">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300 resize-none h-32"
                      placeholder="Tell us about your requirements and how we can help..."
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Attach File (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt"
                      />
                      <label
                        htmlFor="file"
                        className="w-full px-4 py-3 border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-xl cursor-pointer hover:border-primary-600 dark:hover:border-primary-400 transition-colors duration-300 flex items-center justify-center bg-gray-50 dark:bg-dark-700"
                      >
                        <Upload className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {formData.file ? formData.file.name : 'Upload File'}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:bg-[#FF6F61] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center mt-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information - Right Side */}
          <div className="animate-slide-up h-full" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8 h-full flex flex-col">
              
              {/* Contact Details */}
              <div className="bg-white dark:bg-dark-900 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-dark-700 flex-1">
                <h3 className="text-responsive-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in touch
                </h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        <p className="text-responsive-base font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 p-4 rounded-xl mb-8">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Office Location
                    </p>
                    <p className="text-responsive-base font-semibold text-gray-900 dark:text-white">
                      Kochi, India
                    </p>
                    <p className="text-responsive-sm text-gray-600 dark:text-gray-400">
                      123 Business District, Suite XYZ
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mb-8">
                  <h4 className="text-responsive-lg font-bold text-gray-900 dark:text-white mb-6">
                    Follow us
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gray-100 dark:bg-dark-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center mt-auto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;