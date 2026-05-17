import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Activity, Zap, Leaf, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const icons = [Cpu, Activity, Shield, Leaf, Shield];
const colors = [
  { color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { color: '#0ea5e9', bg: 'rgba(14,165,233,0.1)' },
  { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
];

// 200+ Projects delivered, 98% Client satisfaction, 15+ Years of experience, 24/7  Support availability
// 30 Years of combined experience, 5 Major Programming platforms, 6+ Industries served, 2 continents based
const statNumbers = ['30', '5', '6+', '2'];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 bg-slate-800 relative"
    >
      <div className="container mx-auto px-6">

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
            {t.about.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ color: '#f0f4ff' }}
          >
            {t.about.title1}<br />{t.about.title2}
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-left md:text-center">
            <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              {t.about.para1}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              {t.about.para2}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              {t.about.para3}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group"
              style={{ color: '#10b981' }}
            >
              {t.about.readMore}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {t.about.features.slice(0, 4).map((feature, index) => {
            const Icon = icons[index] || Cpu;
            const { color, bg } = colors[index] || colors[0];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl transition-all duration-300"
                style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.12)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: bg }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-base font-bold mb-3" style={{ color: '#f0f4ff' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.about.stats.slice(0, 0).map((label, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl"
              style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.12)' }}
            >
              <div className="text-3xl font-black mb-1" style={{ color: '#10b981' }}>
                {statNumbers[index]}
              </div>
              <div className="text-sm" style={{ color: '#64748b' }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-950 to-slate-800" />

    </section>
  );
};

export default AboutSection;