import React, { useState, useEffect } from 'react';
import { Check, Star, Users, Building2, Rocket, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter Plan',
      description: 'Basic features, limited users - Perfect for small businesses getting started.',
      icon: Users,
      color: 'from-blue-100 to-blue-600',
      popular: false,
      pricing: {
        monthly: 49,
        yearly: 39
      },
      features: [
        'Up to 10 users',
        'Basic staff management',
        'Lead tracking',
        'Call recording (100 hours/month)',
        'Basic reporting',
        'Email support',
        'Mobile app access',
        'Cloud storage (5GB)'
      ],
      cta: 'Start with Starter'
    },
    {
      name: 'Professional Plan',
      description: 'Advanced modules, more users - Our most popular plan for growing businesses.',
      icon: Building2,
      color: 'from-blue-600 to-blue-700',
      popular: true,
      pricing: {
        monthly: 99,
        yearly: 79
      },
      features: [
        'Up to 50 users',
        'Advanced staff management',
        'Full CRM & lead management',
        'Unlimited call recording',
        'Advanced analytics dashboard',
        'Multi-branch access',
        'Priority support',
        'Cloud storage (50GB)',
        'Custom workflows',
        'WhatsApp & SMS integration'
      ],
      cta: 'Go Professional'
    },
    {
      name: 'Enterprise Plan',
      description: 'Fully customized ERP for large organizations - Unlimited everything with dedicated support.',
      icon: Rocket,
      color: 'from-blue-700 to-blue-800',
      popular: false,
      pricing: {
        monthly: 'Custom',
        yearly: 'Custom'
      },
      features: [
        'Unlimited users',
        'Complete ERP suite',
        'Custom automation workflows',
        'Unlimited call recording & storage',
        'Advanced analytics & reporting',
        'Multi-branch & multi-company',
        'Dedicated account manager',
        'Unlimited cloud storage',
        'Custom integrations',
        'White-label solution',
        'On-premise deployment option',
        '24/7 priority support'
      ],
      cta: 'Request a Quote'
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
    <section id="pricing" className="py-16 lg:py-24 bg-warmwind duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal" style={{ animationDelay: '0s' }}>
          <h2 className="text-responsive-4xl font-extrabold text-warmwind mb-6">
            Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:items-end">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-warmwind-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-reveal border border-gray-200 dark:border-gray-700 overflow-hidden ${
                plan.popular ? 'lg:-mt-12 ring-4 ring-blue-600/20 lg:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-2xl border-4 border-white dark:border-gray-900">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className={`p-6 lg:p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <plan.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  {typeof plan.pricing[billingCycle] === 'number' ? (
                    <>
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-200">
                          ${plan.pricing[billingCycle]}
                        </span>
                        <span className="text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-1">
                          /month
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <div className="mt-2">
                          <span className="text-sm text-gray-500 dark:text-gray-500 line-through">
                            ${plan.pricing.monthly}/month
                          </span>
                          <span className="text-sm text-green-600 dark:text-green-400 ml-1 font-semibold">
                            Save 20%
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-200">
                      {plan.pricing[billingCycle]}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {plan.cta === 'Request a Quote' ? (
                  <a
                    href="#contact"
                    className="w-full py-3 px-6 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <button
                    className="w-full py-3 px-6 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Pricing;