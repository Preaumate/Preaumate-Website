import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StatsBar from '@/components/StatsBar';
import FeaturesBar from '@/components/FeaturesBar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ConsentBanner, { getCookieConsent } from '@/components/ConsentBanner';
import { Toaster } from '@/components/ui/toaster';

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

const loadGoogleAnalytics = () => {
  if (document.getElementById('ga-script')) return;
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
};

const loadTawkTo = () => {
  if (document.getElementById('tawkto-script')) return;
  const s1 = document.createElement('script');
  s1.id = 'tawkto-script';
  s1.async = true;
  s1.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  document.head.appendChild(s1);
};

const HomePage = () => {

  useEffect(() => {
    if (getCookieConsent() === 'accepted') {
      loadGoogleAnalytics();
      loadTawkTo();
    }
  }, []);

  const handleConsentChange = (consent) => {
    if (consent === 'accepted') {
      loadGoogleAnalytics();
      loadTawkTo();
    }
  };

  return (
    <>
      <Helmet>
        <title>Preaumate — Industrial Automation Reimagined | AI-Powered Smart Factory Solutions</title>
        <meta
          name="description"
          content="Transform your manufacturing with Preaumate's AI-powered automation, predictive analytics, IoT integration, and smart factory solutions. Siemens certified."
        />
      </Helmet>

      <div className="min-h-screen" style={{ background: '#0f172a' }}>
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsBar />
        <section
          id="contact"
          className="py-24"
          style={{ background: '#0f172a' }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  color: '#10b981'
                }}
              >
                GET IN TOUCH
              </span>
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ color: '#f0f4ff' }}
              >
                Start Your Automation Journey
              </h2>
              <p
                className="text-lg max-w-xl mx-auto"
                style={{ color: '#94a3b8' }}
              >
                Ready to transform your operations? Let's talk about your automation needs.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
        <FeaturesBar />
        <Footer />
      </div>

      <ConsentBanner onConsentChange={handleConsentChange} />
      <Toaster />
    </>
  );
};

export default HomePage;