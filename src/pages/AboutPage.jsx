import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cpu, Shield, Wifi, Brain, Headphones,
  Wrench, BarChart3, ArrowRight, MapPin
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import SolutionsSection from '@/components/SolutionsSection';

const serviceIcons = [Cpu, Wrench, Wifi, Shield, Brain, Headphones, BarChart3];
const serviceColors = [
  { color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { color: '#0ea5e9', bg: 'rgba(14,165,233,0.1)' },
  { color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
  { color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
  { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { color: '#0ea5e9', bg: 'rgba(14,165,233,0.1)' },
];

const AboutPage = () => {
  const { t } = useLanguage();
  const a = t.aboutPage;

  const Section = ({ badge, title, children, dark }) => (
    <section className="py-16" style={{ background: dark ? '#0f172a' : '#1e293b' }}>
      <div className="container mx-auto px-6 max-w-4xl">
        {badge && (
          <span
            className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10b981' }}
          >
            {badge}
          </span>
        )}
        {title && (
          <h2 className="text-3xl md:text-4xl font-black mb-8" style={{ color: '#f0f4ff' }}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );

  const Paragraph = ({ children }) => (
    <p className="text-lg leading-relaxed mb-5" style={{ color: '#94a3b8' }}>{children}</p>
  );

  return (
    <>
      <Helmet>
        <title>About Preaumate — Industrial Automation Consultancy</title>
        <meta name="description" content="Preaumate is an industrial automation consultancy built by engineers. 20+ years of combined experience across Siemens, Rockwell and CoDeSys platforms." />
      </Helmet>

      <div className="min-h-screen" style={{ background: '#0f172a' }}>
        <Header />

        {/* Hero */}
        <div className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #020818 0%, #0f172a 50%, #0f2040 100%)' }}
        >
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span
                className="inline-block text-xs font-bold tracking-widest mb-6 px-4 py-1.5 rounded-full"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981' }}
              >
                {a.heroBadge}
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ color: '#f0f4ff' }}>
                {a.heroTitle1}<br />
                <span style={{ color: '#10b981' }}>{a.heroTitle2}</span>
              </h1>
              <p className="text-xl leading-relaxed max-w-2xl" style={{ color: '#94a3b8' }}>
                {a.heroSubtitle}
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                {a.locations.map(loc => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' }}
                  >
                    <MapPin className="w-3.5 h-3.5" />{loc}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Who We Are */}
        <Section badge={a.whoWeAreBadge} title={a.whoWeAreTitle} dark>
          <Paragraph>{a.whoWeArePara1}</Paragraph>
          <Paragraph>{a.whoWeArePara2}</Paragraph>
          <Paragraph>{a.whoWeArePara3}</Paragraph>
          <Paragraph>{a.whoWeArePara4}</Paragraph>
        </Section>

        {/* Solutions — add this */}
        <SolutionsSection />

        {/* What We Do */}
        <Section badge={a.whatWeDoBadge} title={a.whatWeDoTitle}>
          <Paragraph>{a.whatWeDoIntro}</Paragraph>
          <div className="mt-8 space-y-4">
            {a.servicesList.map((svc, i) => {
              const Icon = serviceIcons[i] || Cpu;
              const { color, bg } = serviceColors[i] || serviceColors[0];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-xl mb-4"
                  style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.12)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ background: bg }}>
                      <Icon className="w-6 h-6" style={{ color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: '#f0f4ff' }}>{svc.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{svc.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* Industries */}
        <Section badge={a.industriesBadge} title={a.industriesTitle} dark>
          <Paragraph>{a.industriesIntro}</Paragraph>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {a.industries.map(item => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: '#1e293b', border: '1px solid rgba(16,185,129,0.12)' }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-semibold" style={{ color: '#f0f4ff' }}>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Philosophy */}
        <Section badge={a.philosophyBadge} title={a.philosophyTitle}>
          <Paragraph>{a.philosophyPara1}</Paragraph>
          <Paragraph>{a.philosophyPara2}</Paragraph>
          <Paragraph>{a.philosophyPara3}</Paragraph>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="p-6 rounded-xl" style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.2)' }}>
              <h4 className="font-bold text-base mb-3" style={{ color: '#10b981' }}>{a.classicalTitle}</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{a.classicalDesc}</p>
            </div>
            <div className="p-6 rounded-xl" style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.2)' }}>
              <h4 className="font-bold text-base mb-3" style={{ color: '#10b981' }}>{a.modernTitle}</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{a.modernDesc}</p>
            </div>
          </div>
          <p className="text-base leading-relaxed mt-8 font-medium" style={{ color: '#f0f4ff' }}>
            {a.finalNote}
          </p>
        </Section>

        {/* CTA */}
        <section className="py-20" style={{ background: '#020818' }}>
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-black mb-4" style={{ color: '#f0f4ff' }}>{a.ctaTitle}</h2>
              <p className="text-lg mb-8" style={{ color: '#94a3b8' }}>{a.ctaSubtitle}</p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 0 30px rgba(16,185,129,0.3)' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(16,185,129,0.5)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(16,185,129,0.3)'}
              >
                {a.ctaButton}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;