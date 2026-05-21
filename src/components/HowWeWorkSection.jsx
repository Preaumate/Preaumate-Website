import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ClipboardList, Wrench, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const stepIcons = [MessageCircle, ClipboardList, Wrench, HeadphonesIcon];
const stepColors = ['#10b981', '#0ea5e9', '#8b5cf6', '#f59e0b'];
const DARK  = "#020818";
const LIGHT = "#1e293b";
const MEDIUM = "#0f172a";

const HowWeWorkSection = () => {
  const { t } = useLanguage();
  const h = t.howWeWork;

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: DARK }}
    >
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
              color: '#10b981',
            }}
          >
            {h.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#f0f4ff' }}
          >
            {h.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            {h.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(16,185,129,0.3), rgba(14,165,233,0.3), rgba(139,92,246,0.3), rgba(245,158,11,0.3))' }}
          />

          {h.steps.map((step, index) => {
            const Icon = stepIcons[index];
            const color = stepColors[index];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10"
                  style={{
                    background: '#1e293b',
                    border: `2px solid ${color}`,
                    boxShadow: `0 0 20px ${color}30`,
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color }} />

                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ background: color, color: '#020818' }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-black mb-3"
                  style={{ color: '#f0f4ff' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#94a3b8' }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowWeWorkSection;