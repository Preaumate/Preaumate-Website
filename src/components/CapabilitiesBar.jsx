import React from 'react';
import { motion } from 'framer-motion';
import {
  Headphones, Mail, Brain, TrendingUp,
  Factory, Shield, Wifi, Rocket
} from 'lucide-react';

const capabilities = [
  {
    icon: Headphones,
    title: 'Remote Support',
    subtitle: '24/7'
  },
  {
    icon: Mail,
    title: 'Contact Us',
    subtitle: 'contact@preaumate.com'
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    subtitle: 'Decisions'
  },
  {
    icon: TrendingUp,
    title: 'Predictive',
    subtitle: 'Analytics'
  },
  {
    icon: Factory,
    title: 'Smart Factory',
    subtitle: 'Solutions'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    subtitle: 'Ready'
  },
  {
    icon: Wifi,
    title: 'IoT',
    subtitle: 'Integration'
  },
  {
    icon: Rocket,
    title: 'Built for',
    subtitle: 'the Future'
  },
];

const CapabilitiesBar = () => {
  return (
    <section className="bg-slate-800 relative border-t border-emerald-500/20 py-10 px-6">
      <div className="container mx-auto">

        {/* Section label */}
        <p className="text-xs font-bold tracking-widest text-emerald-500/60 uppercase mb-6">
          Our Capabilities
        </p>

        {/* 8 feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-emerald-500/20 bg-navy-900 hover:border-emerald-500/50 hover:bg-navy-800 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-tight">
                    {cap.title}
                  </p>
                  <p className="text-gray-400 text-xs leading-tight mt-0.5">
                    {cap.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-950 to-slate-800" />
    </section>
  );
};

export default CapabilitiesBar;