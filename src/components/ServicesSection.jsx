import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Wifi, Factory, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Robotic Process Automation',
    description: 'Deploy intelligent robots and automated systems that handle repetitive tasks with precision and speed.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    icon: Wifi,
    title: 'IoT Integration',
    description: 'Connect your entire factory floor with smart sensors and real-time data pipelines for full visibility.',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
  },
  {
    icon: Factory,
    title: 'Smart Factory Solutions',
    description: 'Transform traditional manufacturing into fully connected, self-optimising production environments.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Anticipate failures before they happen using AI-driven insights from your machine data.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24"
      style={{ background: '#0f172a' }}
    >
      <div className="container mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#10b981'
            }}
          >
            WHAT WE DO
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#f0f4ff' }}
          >
            End-to-End Automation
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            From robotics to analytics — we deliver complete industrial automation
            solutions built on proven Siemens technology.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl transition-all duration-300"
                style={{
                  background: '#1e293b',
                  border: '1px solid rgba(16,185,129,0.12)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = service.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: service.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: '#f0f4ff' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#94a3b8' }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;