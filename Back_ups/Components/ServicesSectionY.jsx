import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, Waypoints, Forklift, ClipboardCheck, Factory, BarChart3, Wifi } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── CARD CONFIG ───────────────────────────────────────────────────────────────
// learnMore.enabled: true  → card is clickable, shows "Learn more" on hover
// learnMore.enabled: false → card is informational only, link hidden
// Change enabled to true when the sub-page is ready
// ─────────────────────────────────────────────────────────────────────────────
const cardConfig = [
  {
    icon: Bot,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    learnMore: { href: '/services/robotic-process-automation', enabled: true },
  },
  {
    icon: Waypoints,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
    learnMore: { href: '/services/assembly-automation', enabled: true },
  },
  {
    icon: Forklift,
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    learnMore: { href: '/services/material-handling', enabled: true },
  },
  {
    icon: ClipboardCheck,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    learnMore: { href: '/services/quality-control', enabled: true },
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  /* Updated service descriptions - operational focused, no buzzwords */
  const serviceDescriptions = [
    {
      title: 'PLC Programming',
      description: 'We develop, modify and troubleshoot PLC systems for industrial production environments. Supported platforms: Siemens, Rockwell, CoDeSys.',
      bullets: [
        'PLC migrations',
        'Machine commissioning',
        'Process optimization',
        'Troubleshooting support',
        'Remote diagnostics',
      ]
    },
    {
      title: 'SCADA & HMI',
      description: 'We build operator interfaces and SCADA systems that improve visibility, diagnostics and production monitoring.',
      bullets: [
        'Alarm handling',
        'Production dashboards',
        'Historian integration',
        'Remote monitoring',
        'Operator workflow optimization',
      ]
    },
    {
      title: 'Industrial IoT',
      description: 'We connect machines, PLCs and industrial equipment to modern data systems using secure industrial communication methods.',
      bullets: [
        'OPC UA integration',
        'MQTT infrastructure',
        'Machine data collection',
        'Cloud connectivity',
        'Edge computing',
      ]
    },
    {
      title: 'Industrial AI',
      description: 'We help manufacturers identify practical AI opportunities using production data, machine diagnostics and operational insights.',
      bullets: [
        'Anomaly detection',
        'Predictive maintenance',
        'Production analytics',
        'AI pilot projects',
        'Operational reporting',
      ]
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-slate-950 relative"
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
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ color: '#f0f4ff' }}
          >
            Our Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            Practical industrial automation, integration and optimization
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceDescriptions.map((service, index) => {
            const config = cardConfig[index];
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
                  background: '#1e293b',
                  border: '1px solid rgba(16,185,129,0.12)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = config.color;
                  e.currentTarget.style.borderWidth = '2px';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                  e.currentTarget.style.borderWidth = '1px';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: config.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: config.color }} />
                </div>

                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: '#f0f4ff' }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#94a3b8' }}
                >
                  {service.description}
                </p>

                {/* Bullet points for capabilities */}
                <ul className="text-xs mb-4 space-y-1" style={{ color: '#cbd5e1' }}>
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn more — visible on hover when enabled */}
                <div
                  className={`flex items-center gap-1 text-xs font-semibold transition-all duration-300 ${
                    isClickable
                      ? 'opacity-0 group-hover:opacity-100'
                      : 'opacity-0 group-hover:opacity-30'
                  }`}
                  style={{ color: config.color }}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;