import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cpu, Activity, Zap, Leaf, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── ICONS & COLORS ────────────────────────────────────────────────────────────
// One entry per feature card — matches the order of t.about.features
// ─────────────────────────────────────────────────────────────────────────────
const cardConfig = [
  {
    icon: Cpu,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    // ── LEARN MORE LINK ─────────────────────────────────────────────────────
    // Where this card's "Learn more" navigates to.
    // Change the href to any route when you are ready to activate.
    // Set enabled: true to make the link live.
    // { color: '#10b981', bg: 'rgba(16,185,129,0.1)' }, Green
    // { color: '#0ea5e9', bg: 'rgba(14,165,233,0.1)' }, Blue
    // { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' }, Orange
    // { color: '#10b981', bg: 'rgba(16,185,129,0.1)' }, Green
    // { color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' }, Purple
    // ────────────────────────────────────────────────────────────────────────
    learnMore: { href: '/solutions/custom-solutions', enabled: false },
  },
  {
    icon: Activity,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
    learnMore: { href: '/solutions/hmi-scada', enabled: false },
  },
  {
    icon: Shield,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    learnMore: { href: '/solutions/custom-solutions', enabled: false },
  },
  {
    icon: Leaf,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    learnMore: { href: '/about', enabled: false },
  },
  {
    icon: Zap,
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    learnMore: { href: '/solutions/custom-solutions', enabled: false },
  },
];

// ── HONEST STATS ──────────────────────────────────────────────────────────────
// These numbers are real and can be backed up.
// Do NOT use 200+ projects or 98% satisfaction — those are not yet true.
// ─────────────────────────────────────────────────────────────────────────────
const statNumbers = ['20+', '6+', '3', '2'];

const AboutSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="py-24 relative"
      style={{ background: '#1e293b' }}
    >
      <div className="container mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#10b981',
            }}
          >
            {t.about.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ color: '#f0f4ff' }}
          >
            {t.about.title1}<br />{t.about.title2}
          </h2>

          {/* Short about text */}
          <div className="max-w-3xl mx-auto space-y-4 text-left md:text-center mb-8">
            <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              {t.about.para1}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              {t.about.para2}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              {t.about.para3}
            </p>
          </div>

          {/* Read full story link — goes to /about page */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group"
              style={{ color: '#10b981' }}
            >
              {t.about.readMore}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>

        {/* ── FEATURE CARDS ─────────────────────────────────────────────────────
            Same UI pattern as ServicesSection — consistent clickable cards.
            Each card has a Learn More link that can be enabled independently.
            Set learnMore.enabled = true in cardConfig above to activate.
        ──────────────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {t.about.features.slice(0, 4).map((feature, index) => {
            const config = cardConfig[index] || cardConfig[0];
            const Icon = config.icon;
            const isClickable = config.learnMore.enabled;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => isClickable && navigate(config.learnMore.href)}
                className={`p-6 rounded-xl transition-all duration-300 group ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(16,185,129,0.12)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = config.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: config.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: config.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: '#f0f4ff' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#94a3b8' }}
                >
                  {feature.description}
                </p>

                {/* ── LEARN MORE LINK ─────────────────────────────────────────
                    Enabled/disabled per card via cardConfig above.
                    When enabled: shows on hover, navigates to the configured href.
                    When disabled: hidden — card is informational only.
                ───────────────────────────────────────────────────────────── */}
                {isClickable && (
                  <div
                    className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: config.color }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                )}

                {/* ── LEARN MORE PLACEHOLDER (disabled state) ──────────────────
                    Shows a subtle indicator that a link will be here.
                    Remove this block once the card is fully activated.
                    OR keep it and set enabled: true to activate cleanly.
                ───────────────────────────────────────────────────────────── */}
                {!isClickable && (
                  <div
                    className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ color: config.color }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ── HONEST STATS ────────────────────────────────────────────────────
            These four numbers are real and defensible.
            Do NOT replace with 200+ projects or 98% satisfaction
            until those numbers are genuinely earned.
        ──────────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.about.stats.slice(0, 0).map((label, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl"
              style={{
                background: '#0f172a',
                border: '1px solid rgba(16,185,129,0.12)',
              }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ color: '#10b981' }}
              >
                {statNumbers[index]}
              </div>
              <div
                className="text-sm"
                style={{ color: '#64748b' }}
              >
                {label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12"
        style={{ background: 'linear-gradient(transparent, #0a1628)' }}
      />
    </section>
  );
};

export default AboutSection;