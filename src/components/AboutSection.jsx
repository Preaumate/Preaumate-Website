import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Gauge, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Automation',
    description: 'Leverage cutting-edge artificial intelligence to automate complex industrial processes, reduce human error, and optimize production efficiency.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Monitor your entire operation in real-time with advanced IoT sensors and dashboards that provide actionable insights at a glance.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Gauge,
    title: 'Energy Optimization',
    description: 'Reduce energy consumption by up to 40% with intelligent systems that analyze and optimize power usage across your facility.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Maintenance',
    description: 'Prevent costly downtime with machine learning algorithms that predict equipment failures before they happen, saving time and money.',
    color: 'from-blue-500 to-emerald-500'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Excellence in Industrial Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preaumate combines decades of industrial expertise with cutting-edge technology to deliver automation solutions that drive real business results.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group"
              >
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent Border */}
                <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-500 rounded-full`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray-600 text-lg">Successful Implementations</p>
          </div>
          <div>
            <div className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              40%
            </div>
            <p className="text-gray-600 text-lg">Average Efficiency Increase</p>
          </div>
          <div>
            <div className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-gray-600 text-lg">Expert Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;