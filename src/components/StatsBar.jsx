import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '200+', label: 'Projects Delivered' },
  { number: '98%',  label: 'Client Satisfaction' },
  { number: '15+',  label: 'Years Experience' },
  { number: '24/7', label: 'Remote Support' },
];

const StatsBar = () => {
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
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-10 px-6 text-center"
              style={{
                borderRight: index < 3
                  ? '1px solid rgba(16,185,129,0.1)'
                  : 'none'
              }}
            >
              <div
                className="text-4xl font-black mb-1"
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

export default StatsBar;