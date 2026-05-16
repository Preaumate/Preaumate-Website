import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Wifi } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const cardIcons = [MapPin, Plane, Wifi];
const cardColors = ['#10b981', '#0ea5e9', '#8b5cf6'];
const cardBgs = [
  'rgba(16,185,129,0.08)',
  'rgba(14,165,233,0.08)',
  'rgba(139,92,246,0.08)',
];
const cardBorders = [
  'rgba(16,185,129,0.2)',
  'rgba(14,165,233,0.2)',
  'rgba(139,92,246,0.2)',
];

const ServiceAreaSection = () => {
  const { t } = useLanguage();
  const s = t.serviceArea;

  return (
    <section
      className="py-24"
      style={{ background: '#1e293b' }}
    >
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#10b981',
            }}
          >
            {s.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#f0f4ff' }}
          >
            {s.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto mb-6"
            style={{ color: '#94a3b8' }}
          >
            {s.subtitle}
          </p>
          <p
            className="text-base max-w-3xl mx-auto"
            style={{ color: '#64748b' }}
          >
            {s.intro}
          </p>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mb-8">
          {s.cards.map((card, index) => {
            const Icon = cardIcons[index];
            const color = cardColors[index];
            const bg = cardBgs[index];
            const border = cardBorders[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-7 rounded-2xl"
                style={{
                  background: '#0f172a',
                  border: `1px solid ${border}`,
                }}
              >
                {/* Region header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{card.flag}</span>
                    <h3
                      className="font-black text-lg"
                      style={{ color: '#f0f4ff' }}
                    >
                      {card.region}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: '#94a3b8' }}
                >
                  {card.description}
                </p>

                {/* Highlight list */}
                <ul className="space-y-2">
                  {card.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: color }}
                      />
                      <span style={{ color: '#64748b' }}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Travel note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm"
          style={{ color: '#475569' }}
        >
          ✈ {s.travelNote}
        </motion.p>

      </div>
    </section>
  );
};

export default ServiceAreaSection;