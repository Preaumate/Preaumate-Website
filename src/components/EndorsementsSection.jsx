import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

// ── IMPORTANT: REPLACE PLACEHOLDER QUOTES ─────────────────────────────────
// The quotes in i18n.js are placeholders showing format and tone.
// Replace them with real quotes from real people before going live.
// Ask former managers, senior colleagues or clients directly.
// Even one genuine quote is more valuable than three polished placeholders.
// ──────────────────────────────────────────────────────────────────────────

const EndorsementsSection = () => {
  const { t } = useLanguage();
  const e = t.endorsements;

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: '#020818' }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

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
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#10b981',
            }}
          >
            {e.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: '#f0f4ff' }}
          >
            {e.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            {e.subtitle}
          </p>
        </motion.div>

        {/* Quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {e.quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative p-7 rounded-2xl flex flex-col"
              style={{
                background: '#0f172a',
                border: '1px solid rgba(16,185,129,0.12)',
              }}
            >
              {/* Quote mark */}
              <Quote
                className="w-8 h-8 mb-5 flex-shrink-0"
                style={{ color: 'rgba(16,185,129,0.3)' }}
              />

              {/* Quote text */}
              <p
                className="text-sm leading-relaxed flex-1 mb-6 italic"
                style={{ color: '#94a3b8' }}
              >
                "{quote.text}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5"
                style={{ borderTop: '1px solid rgba(16,185,129,0.1)' }}
              >
                {/* Initials avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-black"
                  style={{
                    background: 'rgba(16,185,129,0.12)',
                    color: '#10b981',
                    border: '1px solid rgba(16,185,129,0.25)',
                  }}
                >
                  {quote.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-bold leading-tight"
                    style={{ color: '#f0f4ff' }}
                  >
                    {quote.author}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: '#475569' }}
                  >
                    {quote.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p
            className="text-base mb-4"
            style={{ color: '#64748b' }}
          >
            {e.cta}
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group"
            style={{ color: '#10b981' }}
          >
            {e.ctaButton}
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default EndorsementsSection;