import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Link2, Zap, Cpu, Bug, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const problemIcons = [Cpu, Link2, Zap, AlertCircle, Bug, Lightbulb];
const problemColors = [
  '#10b981',
  '#0ea5e9',
  '#8b5cf6',
  '#f59e0b',
  '#ec4899',
  '#06b6d4',
];

const ProblemsWeSolveSection = () => {
  const { t } = useLanguage();
  const problemsData = t.problemsWeSolve;

  return (
    <section
      className="py-24 relative"
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
              color: '#10b981',
            }}
          >
            {problemsData.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#f0f4ff' }}
          >
            {problemsData.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            {problemsData.subtitle}
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemsData.problems.map((problem, index) => {
            const Icon = problemIcons[index];
            const color = problemColors[index];

            return (
              <motion.div
                key={index}
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
                  style={{
                    background: `${color}20`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>

                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: '#f0f4ff' }}
                >
                  {problem.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#94a3b8' }}
                >
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProblemsWeSolveSection;
