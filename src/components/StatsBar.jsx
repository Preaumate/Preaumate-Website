import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

// 200+ Projects delivered, 98% Client satisfaction, 15+ Years of experience, 24/7  Support availability
// 30 Years of combined experience, 5 Major Programming platforms, 6+ Industries served, 2 continents based
const numbers = ['30+', '5', '6+', '2']; 

const StatsBar = () => {
  const { t } = useLanguage();

  return (
    <section
      style={{
        background: '#1e293b',
        borderTop: '1px solid rgba(16,185,129,0.1)',
        borderBottom: '1px solid rgba(16,185,129,0.1)'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {t.statsBar.map((label, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-10 px-6 text-center"
              style={{
                borderRight: index < 3 ? '1px solid rgba(16,185,129,0.1)' : 'none'
              }}
            >
              <div className="text-4xl font-black mb-1" style={{ color: '#10b981' }}>
                {numbers[index]}
              </div>
              <div className="text-sm" style={{ color: '#64748b' }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;