

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
//import CookieBanner, { getCookieConsent } from '@/components/CookieBanner';

// ============================================================
// GOOGLE ANALYTICS SETUP
// This section configures analytics but does NOT load it yet
// Loading only happens after the user gives cookie consent
// ============================================================

// Your unique Google Analytics ID — replace with your real one
// You get this from your Google Analytics dashboard
// It always starts with G- followed by letters and numbers

// ↓ Replace with your actual Google Analytics ID (looks like G-XXXXXXXXXX)


// ============================================================
// HOMEPAGE COMPONENT
// ============================================================

const HomePage = () => {


  return (
    <>
      <Helmet>
        <title>Preaumate - Industrial Automation Reimagined | AI-Powered Smart Factory Solutions</title>
        <meta 
          name="description" 
          content="Transform your manufacturing with Preaumate's AI-powered automation, predictive analytics, IoT integration, and smart factory solutions. Industry 4.0 expertise for modern industrial operations." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Fixed Header */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      <Toaster />
    </>
  );
};

export default HomePage;