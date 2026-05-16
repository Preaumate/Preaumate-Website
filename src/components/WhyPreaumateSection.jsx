import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Zap, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const cardIcons = [Users, Award, Zap, Target];

const WhyPreaumateSection = () => {
  const { t } = useLanguage();
  const w = t.whyPreaumate;

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
            {w.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#f0f4ff' }}
          >
            {w.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto mb-12"
            style={{ color: '#10b981', fontWeight: '500' }}
          >
            {w.intro}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {w.cards.map((card, index) => {
            const Icon = cardIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 rounded-xl flex items-start gap-5"
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(16,185,129,0.12)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(16,185,129,0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#10b981' }} />
                </div>
                <div>
                  <h3
                    className="font-bold text-base mb-2 leading-snug"
                    style={{ color: '#f0f4ff' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#94a3b8' }}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyPreaumateSection;