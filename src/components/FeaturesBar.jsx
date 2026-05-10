import React from 'react';
import { motion } from 'framer-motion';
import {
  Headphones,
  Mail,
  Brain,
  TrendingUp,
  Factory,
  Shield,
  Wifi,
  Rocket
} from 'lucide-react';

const features = [
  { icon: Headphones, title: 'Remote Support', subtitle: '24/7' },
  { icon: Mail,       title: 'Contact Us',     subtitle: 'contact@preaumate.com' },
  { icon: Brain,      title: 'AI-Powered',     subtitle: 'Decisions' },
  { icon: TrendingUp, title: 'Predictive',     subtitle: 'Analytics' },
  { icon: Factory,    title: 'Smart Factory',  subtitle: 'Solutions' },
  { icon: Shield,     title: 'Cybersecurity',  subtitle: 'Ready' },
  { icon: Wifi,       title: 'IoT',            subtitle: 'Integration' },
  { icon: Rocket,     title: 'Built for',      subtitle: 'the Future' },
];

const FeaturesBar = () => {
  return (
    <section
      className="py-24 bg-slate-800 relative"
      //style={{ background: '#020818' }}
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span
            className="text-xs font-bold tracking-widest px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#10b981'
            }}
          >
            CAPABILITIES
          </span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 cursor-default"
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(16,185,129,0.12)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.5)';
                  e.currentTarget.style.background = '#1e293b';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                  e.currentTarget.style.background = '#0f172a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: 'rgba(16,185,129,0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#10b981' }} />
                </div>
                <div
                  className="text-xs font-bold leading-tight"
                  style={{ color: '#f0f4ff' }}
                >
                  {feature.title}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: '#64748b' }}
                >
                  {feature.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/*<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-950 to-slate-800" />*/}

    </section>
  );
};

export default FeaturesBar;