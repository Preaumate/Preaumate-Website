import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Wifi, Factory, LineChart } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Robotic Process Automation',
    description: 'Deploy intelligent robots and automated systems that handle repetitive tasks with precision and speed, freeing your workforce for strategic initiatives.',
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Collaborative Robots', 'Assembly Automation', 'Material Handling', 'Quality Control']
  },
  {
    icon: Wifi,
    title: 'IoT Integration',
    description: 'Connect your entire facility with smart sensors and devices that communicate seamlessly, providing real-time data for informed decision-making.',
    gradient: 'from-teal-500 to-cyan-500',
    features: ['Sensor Networks', 'Cloud Connectivity', 'Data Analytics', 'Remote Control']
  },
  {
    icon: Factory,
    title: 'Smart Factory Solutions',
    description: 'Transform traditional manufacturing into Industry 4.0 smart factories with interconnected systems, digital twins, and adaptive production lines.',
    gradient: 'from-cyan-500 to-blue-500',
    features: ['Digital Twins', 'MES Integration', 'Production Planning', 'Supply Chain Optimization']
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Harness the power of big data and machine learning to forecast trends, prevent failures, and optimize operations before issues arise.',
    gradient: 'from-blue-500 to-emerald-500',
    features: ['Machine Learning', 'Failure Prediction', 'Trend Analysis', 'Performance Optimization']
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1696241952049-993330609dfe)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Automation Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to implementation, we provide end-to-end automation services tailored to your industry's unique challenges.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className={`relative bg-gradient-to-br ${service.gradient} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 group overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                  }} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-center gap-2 text-white/90 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white rounded-2xl blur-xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Not sure which solution fits your needs? Our experts are here to help.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                });
              }
            }}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;