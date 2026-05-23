import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import CrossoverSection from "@/components/CrossoverSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProjectProofSection from "@/components/ProjectProofSection";
import FounderSection from "@/components/FounderSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhyPreaumateSection from "@/components/WhyPreaumateSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import EndorsementsSection from "@/components/EndorsementsSection";
import FeaturesBar from "@/components/FeaturesBar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";
import ConsentBanner, { getCookieConsent } from "@/components/ConsentBanner";
import { Toaster } from "@/components/ui/toaster";
import { useLanguage } from "@/context/LanguageContext";
import { seo } from "@/data/seo";
import { brand, DARK, LIGHT, HERO_BOTTOM } from "@/styles/brand";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // ← replace with your real GA ID

const loadGoogleAnalytics = () => {
  if (document.getElementById("ga-script")) return;
  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
};

const TAWKTO_PROPERTY_ID = "69d715a8a5ae3e1c3b561962";
const TAWKTO_WIDGET_ID   = "1jlo2p6mb";

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

  const badgeStyle = brand.badgeStyle("green");

  return (
    <>
      <Helmet>
        <title>{seo.home.title}</title>
        <meta name="description" content={seo.home.description} />
        <meta property="og:title"       content={seo.home.title} />
        <meta property="og:description" content={seo.home.description} />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://www.preaumate.nl" />
      </Helmet>

      <div className="min-h-screen" style={{ background: DARK }}>
        <Header />

        {/* ── 1. HERO — own gradient, fades to HERO_BOTTOM at its bottom ── */}
        <HeroSection />
        {/* ── 2. TRUST  (DARK) ─────────────────────────────────────────── */}
        <TrustSection />
        <SectionTransition from={DARK} to={LIGHT} />

        {/* ── 3. CROSSOVER  (LIGHT) ────────────────────────────────────── */}
        <CrossoverSection />
        <SectionTransition from={LIGHT} to={DARK} />

        {/* ── 4. PROBLEMS  (DARK) ──────────────────────────────────────── */}
        <ProblemsSection />
        <SectionTransition from={DARK} to={LIGHT} />

        {/* ── 5. SERVICES  (LIGHT) ─────────────────────────────────────── */}
        <ServicesSection />
        <SectionTransition from={LIGHT} to={DARK} />

        {/* ── 6. TECHNOLOGIES  (DARK) ──────────────────────────────────── */}
        <TechnologiesSection />
        <SectionTransition from={DARK} to={LIGHT} />

        {/* ── 7. INDUSTRIES  (LIGHT) ───────────────────────────────────── */}
        <IndustriesSection />
        <SectionTransition from={LIGHT} to={DARK} />

        {/* ── 8. PROJECT PROOF  (DARK) ─────────────────────────────────── */}
        <ProjectProofSection />
        <SectionTransition from={DARK} to={LIGHT} />

        {/* ── 9. FOUNDERS  (LIGHT) ─────────────────────────────────────── */}
        <FounderSection />
        <SectionTransition from={LIGHT} to={DARK} />

        {/* ── 10. HOW WE WORK  (DARK) ──────────────────────────────────── */}
        <HowWeWorkSection />
        <SectionTransition from={DARK} to={LIGHT} />

        {/* ── 11. WHY PREAUMATE  (LIGHT) ───────────────────────────────── */}
        <WhyPreaumateSection />
        <SectionTransition from={LIGHT} to={DARK} />

        {/* ── 12. SERVICE AREA  (DARK) ─────────────────────────────────── */}
        <ServiceAreaSection />
        <SectionTransition from={DARK} to={LIGHT} />

        {/* ── 13. ENDORSEMENTS  (LIGHT) ────────────────────────────────── */}
        <EndorsementsSection />
        <SectionTransition from={LIGHT} to={DARK} />

        {/* ── 14. FEATURES BAR  (DARK) ─────────────────────────────────── */}
        <FeaturesBar />
        <SectionTransition from={DARK} to={LIGHT} />

        {/* ── 15. CONTACT  (LIGHT) ─────────────────────────────────────── */}
        <section id="contact" className="py-24" style={{ background: LIGHT }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
                style={badgeStyle}
              >
                {t.contactSection.badge}
              </span>
              <h2
                className={brand.type.sectionTitle + " mb-4"}
                style={{ color: brand.colors.text.primary }}
              >
                {t.contactSection.title}
              </h2>
              <p
                className="text-lg max-w-xl mx-auto"
                style={{ color: brand.colors.text.secondary }}
              >
                {t.contactSection.subtitle}
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