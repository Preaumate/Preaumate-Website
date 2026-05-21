import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CrossoverSection from "@/components/CrossoverSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhyPreaumateSection from "@/components/WhyPreaumateSection";
import EndorsementsSection from "@/components/EndorsementsSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import FeaturesBar from "@/components/FeaturesBar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ConsentBanner, { getCookieConsent } from "@/components/ConsentBanner";
import { Toaster } from "@/components/ui/toaster";
import { useLanguage } from "@/context/LanguageContext";
import { seo } from "@/data/seo";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const loadGoogleAnalytics = () => {
  if (document.getElementById("ga-script")) return;
  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
};

const TAWKTO_PROPERTY_ID = "69d715a8a5ae3e1c3b561962";
const TAWKTO_WIDGET_ID = "1jlo2p6mb";

const loadTawkTo = () => {
  if (document.getElementById("tawkto-script")) return;
  const s1 = document.createElement("script");
  s1.id = "tawkto-script";
  s1.async = true;
  s1.src = `https://embed.tawk.to/${TAWKTO_PROPERTY_ID}/${TAWKTO_WIDGET_ID}`;
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  document.head.appendChild(s1);
};

const HomePage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    if (getCookieConsent() === "accepted") {
      loadGoogleAnalytics();
      loadTawkTo();
    }
  }, []);

  const handleConsentChange = (consent) => {
    if (consent === "accepted") {
      loadGoogleAnalytics();
      loadTawkTo();
    }
  };

  return (
    <>
      <Helmet>
        <title>{seo.home.title}</title>
        <meta name="description" content={seo.home.description} />
        {/* Open Graph — improves how your site appears when shared on LinkedIn */}
        <meta property="og:title" content={seo.home.title} />
        <meta property="og:description" content={seo.home.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.preaumate.com" />
        {/* Replace og:image with your real hero image URL once you have one */}
        {/* <meta property="og:image" content="https://www.preaumate.com/images/og-image.jpg" /> */}
      </Helmet>

      <div className="min-h-screen" style={{ background: "#0a1628" }}>
        <Header />
        <HeroSection />
        <CrossoverSection />
        <AboutSection />
        <ServicesSection />
        <HowWeWorkSection />
        <WhyPreaumateSection />
        <ServiceAreaSection />
        <EndorsementsSection />
        <FeaturesBar />

        {/* Contact section */}
        <section
          id="contact"
          className="py-24"
          style={{ background: "#0a1628" }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  color: "#10b981",
                }}
              >
                {t.contactSection.badge}
              </span>
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ color: "#f0f4ff" }}
              >
                {t.contactSection.title}
              </h2>
              <p
                className="text-lg max-w-xl mx-auto mb-3"
                style={{ color: "#94a3b8" }}
              >
                {t.contactSection.subtitle}
              </p>
              <p className="text-sm" style={{ color: "#64748b" }}>
                {t.pricing.signal}
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>

      <ConsentBanner onConsentChange={handleConsentChange} />
      <Toaster />
    </>
  );
};

export default HomePage;
