import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Brain } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const DARK  = "#020818";
const LIGHT = "#1e293b";

const pillars = [
  {
    icon: Cpu,
    key: 'pillar1',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    glow: 'rgba(16,185,129,0.15)',
    number: '01',
  },
  {
    icon: Database,
    key: 'pillar2',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    border: 'rgba(14,165,233,0.2)',
    glow: 'rgba(14,165,233,0.15)',
    number: '02',
  },
  {
    icon: Brain,
    key: 'pillar3',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    glow: 'rgba(139,92,246,0.15)',
    number: '03',
  },
];

const CrossoverSection = () => {
  const { t } = useLanguage();
  const c = t.crossover;

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: DARK }}
    >
      {/* Subtle background grid 
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16,185,129,0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      /> */}

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.04), transparent)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.04), transparent)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest mb-6 px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#10b981',
            }}
          >
            {c.badge}
          </span>

          <h2
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            style={{ color: '#f0f4ff' }}
          >
            {c.title}
          </h2>

          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed mb-4"
            style={{ color: '#94a3b8' }}
          >
            {c.subtitle}
          </p>

          <p
            className="text-base font-semibold max-w-2xl mx-auto"
            style={{ color: '#10b981' }}
          >
            {c.statement}
          </p>
        </motion.div>

        {/* Connector line — desktop only */}
        <div className="hidden lg:flex items-center justify-center mb-4 px-24">
          <div className="flex-1 h-px" style={{ background: 'rgba(16,185,129,0.15)' }} />
          <div className="mx-4 w-2 h-2 rounded-full" style={{ background: '#10b981' }} />
          <div className="flex-1 h-px" style={{ background: 'rgba(14,165,233,0.15)' }} />
          <div className="mx-4 w-2 h-2 rounded-full" style={{ background: '#0ea5e9' }} />
          <div className="flex-1 h-px" style={{ background: 'rgba(139,92,246,0.15)' }} />
          <div className="mx-4 w-2 h-2 rounded-full" style={{ background: '#8b5cf6' }} />
          <div className="flex-1 h-px" style={{ background: 'rgba(139,92,246,0.15)' }} />
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const content = c[pillar.key];

            return (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative p-8 rounded-2xl"
                style={{
                  background: '#0f172a',
                  border: `1px solid ${pillar.border}`,
                }}
              >
                {/* Number */}
                <div
                  className="absolute top-6 right-6 text-5xl font-black opacity-5 select-none"
                  style={{ color: pillar.color }}
                >
                  {pillar.number}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: pillar.bg,
                    border: `1px solid ${pillar.border}`,
                    boxShadow: `0 0 20px ${pillar.glow}`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: pillar.color }} />
                </div>

                {/* Label */}
                <span
                  className="inline-block text-xs font-bold tracking-widest mb-3 px-3 py-1 rounded-full"
                  style={{
                    background: pillar.bg,
                    color: pillar.color,
                  }}
                >
                  {content.label}
                </span>

                {/* Heading */}
                <h3
                  className="text-2xl font-black mb-4 leading-tight"
                  style={{ color: '#f0f4ff' }}
                >
                  {content.heading}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: '#94a3b8' }}
                >
                  {content.description}
                </p>

                {/* Capability tags */}
                <div className="flex flex-wrap gap-2">
                  {content.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: pillar.bg,
                        border: `1px solid ${pillar.border}`,
                        color: pillar.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-px rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${pillar.color}40, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div
            className="p-8 rounded-2xl"
            style={{
              background: 'rgba(16,185,129,0.04)',
              border: '1px solid rgba(16,185,129,0.15)',
            }}
          >
            {/* Three dot connector */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ background: '#10b981' }} />
              <div
                className="flex-1 h-px max-w-16"
                style={{ background: 'linear-gradient(90deg, #10b981, #0ea5e9)' }}
              />
              <div className="w-2 h-2 rounded-full" style={{ background: '#0ea5e9' }} />
              <div
                className="flex-1 h-px max-w-16"
                style={{ background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)' }}
              />
              <div className="w-2 h-2 rounded-full" style={{ background: '#8b5cf6' }} />
            </div>

            <p
              className="text-base leading-relaxed font-medium"
              style={{ color: '#94a3b8' }}
            >
              {c.closing}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CrossoverSection;