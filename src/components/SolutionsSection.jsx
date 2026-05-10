import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cpu, Monitor, RefreshCw, Shield, Briefcase, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { solutionsData, solutionsSectionLabels } from '@/data/solutions';

const iconMap = { cpu: Cpu, monitor: Monitor, refresh: RefreshCw, shield: Shield, briefcase: Briefcase, sparkles: Sparkles };

const solutionSlugs = [
  'plc-programming',
  'hmi-scada',
  'system-modernisation',
  'industrial-cybersecurity',
  'engineering-consulting',
  'custom-solutions',
];

const SolutionsSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const labels = solutionsSectionLabels[language] || solutionsSectionLabels.en;

  return (
    <section className="py-24" style={{ background: '#0f172a' }}>
      <div className="container mx-auto px-6">

        {/* Header */}
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
            {labels.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#f0f4ff' }}>
            {labels.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            {labels.subtitle}
          </p>
        </motion.div>

        {/* Solution cards — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionSlugs.map((slug, index) => {
            const solution = solutionsData[slug];
            const content = solution[language] || solution.en;
            const Icon = iconMap[solution.icon] || Cpu;

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => navigate(`/solutions/${slug}`)}
                className="group p-7 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden"
                style={{
                  background: '#1e293b',
                  border: '1px solid rgba(16,185,129,0.12)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = solution.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 w-12 h-12"
                  style={{ background: solution.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: solution.color }} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-black mb-3 leading-tight" style={{ color: '#f0f4ff' }}>
                  {content.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#94a3b8' }}>
                  {content.tagline}
                </p>

                {/* Platform tags — first 3 only */}
                {content.platforms && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {content.platforms.slice(0, 3).map(p => (
                      <span
                        key={p}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          background: 'rgba(16,185,129,0.06)',
                          border: '1px solid rgba(16,185,129,0.15)',
                          color: '#64748b'
                        }}
                      >
                        {p}
                      </span>
                    ))}
                    {content.platforms.length > 3 && (
                      <span className="text-xs px-2 py-0.5" style={{ color: '#475569' }}>
                        +{content.platforms.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Learn more */}
                <div
                  className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-300"
                  style={{ color: solution.color }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Subtle color glow in corner on hover */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background: solution.color,
                    filter: 'blur(20px)',
                    transform: 'translate(30%, -30%)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;