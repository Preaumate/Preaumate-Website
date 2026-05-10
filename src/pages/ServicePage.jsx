import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { servicesData, serviceCTA } from '@/data/services';

const ServicePage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // ── Look up the service data ──────────────────────────────
  const service = servicesData[slug];

  // If slug doesn't exist, redirect to home
  if (!service) {
    navigate('/');
    return null;
  }

  // Get content for current language, fall back to English
  const content = service[language] || service.en;
  const cta = serviceCTA[language] || serviceCTA.en;

  return (
    <>
      <Helmet>
        <title>{content.title} — Preaumate</title>
        <meta name="description" content={content.tagline} />
      </Helmet>

      <div className="min-h-screen" style={{ background: '#0f172a' }}>
        <Header />

        {/* ── HERO ─────────────────────────────────────────── */}
        <div
          className="pt-32 pb-20 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #020818 0%, #0f172a 50%, #0f2040 100%)'
          }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Hero image as subtle background */}
          {service.images[0] && (
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(${service.images[0].url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}

          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Back button */}
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-200"
                style={{ color: '#64748b' }}
                onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {/* Service badge */}
              <span
                className="inline-block text-xs font-bold tracking-widest mb-6 px-4 py-1.5 rounded-full"
                style={{
                  background: service.bg,
                  border: `1px solid ${service.color}40`,
                  color: service.color
                }}
              >
                PREAUMATE SERVICES
              </span>

              {/* Title */}
              <h1
                className="text-5xl md:text-6xl font-black mb-6 leading-tight"
                style={{ color: '#f0f4ff' }}
              >
                {content.title}
              </h1>

              {/* Tagline */}
              <p
                className="text-xl leading-relaxed max-w-2xl font-medium"
                style={{ color: service.color }}
              >
                {content.tagline}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── HERO IMAGE ───────────────────────────────────── */}
        {service.images[0] && (
          <div className="w-full overflow-hidden" style={{ maxHeight: '480px' }}>
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={service.images[0].url}
              alt={service.images[0].alt}
              className="w-full object-cover"
              style={{ maxHeight: '480px' }}
            />
            {service.images[0].caption && (
              <p
                className="text-center text-sm py-3 px-6"
                style={{
                  background: '#1e293b',
                  color: '#64748b',
                  borderBottom: '1px solid rgba(16,185,129,0.1)'
                }}
              >
                {service.images[0].caption}
              </p>
            )}
          </div>
        )}

        {/* ── INTRO TEXT ───────────────────────────────────── */}
        <section className="py-20" style={{ background: '#0f172a' }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-6">
              {content.intro.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-lg leading-relaxed"
                  style={{ color: '#94a3b8' }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECOND IMAGE (if available) ──────────────────── */}
        {service.images[1] && (
          <section className="py-4" style={{ background: '#1e293b' }}>
            <div className="container mx-auto px-6 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${service.color}25` }}
              >
                <img
                  src={service.images[1].url}
                  alt={service.images[1].alt}
                  className="w-full object-cover"
                  style={{ maxHeight: '360px' }}
                />
                {service.images[1].caption && (
                  <p
                    className="text-sm py-3 px-5"
                    style={{ background: '#0f172a', color: '#64748b' }}
                  >
                    {service.images[1].caption}
                  </p>
                )}
              </motion.div>
            </div>
          </section>
        )}

        {/* ── OFFERINGS ────────────────────────────────────── */}
        <section className="py-20" style={{ background: '#1e293b' }}>
          <div className="container mx-auto px-6 max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span
                className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
                style={{
                  background: service.bg,
                  border: `1px solid ${service.color}40`,
                  color: service.color
                }}
              >
                {content.offeringsTitle.toUpperCase()}
              </span>
              <h2
                className="text-3xl md:text-4xl font-black"
                style={{ color: '#f0f4ff' }}
              >
                {content.offeringsTitle}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {content.offerings.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-6 rounded-xl transition-all duration-300"
                  style={{
                    background: '#0f172a',
                    border: '1px solid rgba(16,185,129,0.12)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = service.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: service.color }}
                    />
                    <div>
                      <h3
                        className="font-bold text-base mb-2"
                        style={{ color: '#f0f4ff' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: '#94a3b8' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section
          className="py-20"
          style={{ background: '#020818' }}
        >
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl font-black mb-4"
                style={{ color: '#f0f4ff' }}
              >
                {cta.title}
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: '#94a3b8' }}
              >
                {cta.subtitle}
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  boxShadow: '0 0 30px rgba(16,185,129,0.3)'
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(16,185,129,0.5)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(16,185,129,0.3)'}
              >
                {cta.button}
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

export default ServicePage;