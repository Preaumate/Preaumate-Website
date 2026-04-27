import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'AI-Powered Automation',
    description: 'Leverage cutting-edge artificial intelligence to automate complex industrial processes with unprecedented accuracy.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Monitor every aspect of your production line in real time with advanced IoT sensor networks and dashboards.',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
  },
  {
    icon: Zap,
    title: 'Energy Optimisation',
    description: 'Reduce energy consumption by up to 40% through intelligent load balancing and predictive power management.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
  },
  {
    icon: Shield,
    title: 'Predictive Maintenance',
    description: 'Prevent costly downtime by predicting equipment failures before they happen using machine learning models.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
  },
];

const stats = [
  { number: '200+', label: 'Projects Delivered' },
  { number: '98%',  label: 'Client Satisfaction' },
  { number: '40%',  label: 'Average Energy Saved' },
  { number: '15+',  label: 'Years Experience' },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: '#1e293b' }}
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
            ABOUT PREAUMATE
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#f0f4ff' }}
          >
            Why Choose Us
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            We combine deep industrial expertise with cutting-edge technology
            to deliver automation solutions that actually work on the factory floor.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl transition-all duration-300"
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(16,185,129,0.12)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = feature.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: feature.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: '#f0f4ff' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#94a3b8' }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl"
              style={{
                background: '#0f172a',
                border: '1px solid rgba(16,185,129,0.12)'
              }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ color: '#10b981' }}
              >
                {stat.number}
              </div>
              <div
                className="text-sm"
                style={{ color: '#64748b' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;