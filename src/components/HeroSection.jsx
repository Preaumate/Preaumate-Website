import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedLogo from '@/components/AnimatedLogo';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full width background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay so text stays readable over the image */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(2,8,24,0.92) 0%, rgba(15,23,42,0.85) 50%, rgba(2,8,24,0.90) 100%)'
        }}
      />

      {/* Animated grid pattern on top of overlay */}
      <div
        className="absolute inset-0 z-10 opacity-8"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">

        {/* Tech badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-medium"
          style={{
            background: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.35)',
            color: '#10b981'
          }}
        >
          <Cpu className="w-4 h-4" />
          Industry 4.0 Solutions · Siemens PLC · TIA Portal · WinCC HMI
        </motion.div>

        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <AnimatedLogo isCompact={false} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          style={{ color: '#f0f4ff' }}
        >
          Industrial<br />
          <span style={{ color: '#10b981' }}>Automation</span><br />
          Reimagined
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: '#94a3b8' }}
        >
          Transform your manufacturing with AI-powered automation,
          predictive analytics, and smart factory solutions built
          for the next generation of industry.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* Primary green button */}
          <Button
            onClick={scrollToContact}
            className="w-full sm:w-auto h-auto min-h-[3.5rem] whitespace-normal flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-bold text-white border-0 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              boxShadow: '0 0 30px rgba(16,185,129,0.4)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #059669, #047857)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(16,185,129,0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #10b981, #059669)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(16,185,129,0.4)';
            }}
          >
            Start Your Automation Journey
            <ArrowRight className="w-6 h-6 flex-shrink-0" />
          </Button>

          {/* Secondary outline button */}
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            style={{
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.35)',
              color: '#10b981',
              minHeight: '3.5rem'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(16,185,129,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(16,185,129,0.08)';
            }}
          >
            Explore Services
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-8 flex-wrap"
        >
          {[
            { icon: Shield, text: '200+ Projects Delivered' },
            { icon: Cpu, text: 'Siemens Certified' },
            { icon: Headphones, text: '24/7 Remote Support' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-sm"
              style={{ color: '#64748b' }}
            >
              <Icon className="w-4 h-4" style={{ color: '#10b981' }} />
              {text}
            </div>
          ))}
        </motion.div>

      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-20"
        style={{ background: 'linear-gradient(transparent, #0f172a)' }}
      />
    </section>
  );
};

export default HeroSection;