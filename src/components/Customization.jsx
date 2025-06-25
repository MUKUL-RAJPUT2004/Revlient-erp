import React from 'react';
import { Move, PlusSquare, Plug, Workflow } from "lucide-react";




const Customization = () => {
    const features = [
      {
        icon: Move,
        title: 'Highlight flexibility',
        description: 'Customize every module, tool, and workflow to match your consultancy’s unique way of working.'
      },
      {
        icon: PlusSquare,
        title: 'Add/remove modules',
        description: 'Tailor the platform by enabling only the features your consultancy needs.'
      },
      {
        icon: Plug,
        title: ' Integrate third-party tools',
        description: 'Seamlessly connect WhatsApp, Gmail, and more to streamline communication and workflow.'
      },
      {
        icon: Workflow,
        title: ' Custom workflows',
        description: ' Build unique, automated flows for HR, career, education, or wellness consultancies based on your process.'
      }
    
    ];


return (
    <section id="customization" className=" py-16 lg:py-24 bg-white dark:bg-dark-900 duration-300" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-[clamp(1.5rem,4vw,2rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2rem,6vw,4rem)] font-extrabold text-gray-800 dark:text-gray-200 mb-4">
                    Customization
                </h2>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex flex-row items-center bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-1 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full text-primary-600 hover:text-white transition-colors duration-300 bg-primary-100 dark:bg-primary-900/30 mr-6">
                        <feature.icon className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-responsive-sm leading-relaxed">{feature.description}</p>
                    </div>
                </div>
            ))}

        </div>
    </section>
);
};

export default Customization;



    