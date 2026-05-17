import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, Waypoints, Forklift, ClipboardCheck, Factory, BarChart3, Wifi, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const icons = [Bot, Waypoints, Forklift, ClipboardCheck, Factory, BarChart3, Wifi];
const colors = [
  { color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { color: '#0ea5e9', bg: 'rgba(14,165,233,0.1)' },
  { color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
  { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
  { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { color: '#0ea5e9', bg: 'rgba(14,165,233,0.1)' },
];

// Maps service card index to its URL slug
const slugs = [
  'robotic-process-automation',
  'assembly-automation',
  'material-handling',
  'quality-control',
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
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
            {t.services.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#f0f4ff' }}
          >
            {t.services.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.slice(0, 4).map((service, index) => {
            const Icon = icons[index];
            const { color, bg } = colors[index];
            const slug = slugs[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(`/services/${slug}`)}
                className="p-6 rounded-xl transition-all duration-300 cursor-pointer group"
                style={{
                  background: '#1e293b',
                  border: '1px solid rgba(16,185,129,0.12)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: bg }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: '#f0f4ff' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#94a3b8' }}
                >
                  {service.description}
                </p>

                {/* Read more indicator */}
                <div
                  className="flex items-center gap-1 text-xs font-semibold transition-all duration-300"
                  style={{ color }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                  </span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;