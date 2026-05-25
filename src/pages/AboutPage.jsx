import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  Shield,
  Wifi,
  Brain,
  Headphones,
  Wrench,
  BarChart3,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsSection from "@/components/SolutionsSection";
import CrossoverSection from "@/components/CrossoverSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ProjectProofSection from "@/components/ProjectProofSection";
import SectionTransition from "@/components/SectionTransition";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/context/LanguageContext";
import { seo } from "@/data/seo";
import { brand } from "@/styles/brand";

const serviceIcons = [Cpu, Wrench, Wifi, Shield, Brain, Headphones, BarChart3];
const serviceColors = [
  { color: "#10b981", bg: "rgba(16,185,129,0.1)" },
  { color: "#0ea5e9", bg: "rgba(14,165,233,0.1)" },
  { color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
  { color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
  { color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  { color: "#10b981", bg: "rgba(16,185,129,0.1)" },
  { color: "#0ea5e9", bg: "rgba(14,165,233,0.1)" },
];

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT PAGE
//
// This page holds all the depth that does NOT belong on the homepage.
// Visitors who click "About" are already interested — they want the full story.
//
// Section order:
//   1. Hero                  — who you are in one paragraph
//   2. Our Story             — the human detail
//   3. How We Think          — CrossoverSection (OT / IoT / AI pillars)
//   4. Technologies          — platforms and tools
//   5. Industries            — sectors we have worked in
//   6. Example Projects      — proof of work (with placeholders until you fill in)
//   7. Where We Work         — service area map
//   8. CTA                   — send them to contact
// ─────────────────────────────────────────────────────────────────────────────

const AboutPage = () => {
  const { t } = useLanguage();
  const a = t.aboutPage;

  const Section = ({ badge, title, children, dark }) => (
    <section
      className="py-16"
      style={{ background: dark ? "#0f172a" : "#1e293b" }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {badge && (
          <span
            className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#10b981",
            }}
          >
            {badge}
          </span>
        )}
        {title && (
          <h2
            className="text-3xl md:text-4xl font-black mb-8"
            style={{ color: "#f0f4ff" }}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );

  const Paragraph = ({ children }) => (
    <p className="text-lg leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
      {children}
    </p>
  );

  return (
    <>
      {/*    <Helmet>
        <title>About Preaumate — Industrial Automation Consultancy</title>
        <meta name="description" content="Preaumate is an industrial automation consultancy built by engineers. 20+ years of combined experience across Siemens, Rockwell and CoDeSys platforms." />
      </Helmet>
*/}

      <Helmet>
        <title>{seo.about.title}</title>
        <meta name="description" content={seo.about.description} />
        <meta property="og:title" content={seo.about.title} />
        <meta property="og:description" content={seo.about.description} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen" style={{ background: brand.sections.dark }}>
        <Header />

        {/* ─ 1. Hero ───────────────────────────────────────────────────── */}
        <div
          className="pt-32 pb-20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #020818 0%, #0f172a 50%, #0f2040 100%)",
          }}
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="inline-block text-xs font-bold tracking-widest mb-6 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#10b981",
                }}
              >
                {a.heroBadge}
              </span>
              <h1
                className="text-5xl md:text-6xl font-black mb-6 leading-tight"
                style={{ color: "#f0f4ff" }}
              >
                {a.heroTitle1}
                <br />
                <span style={{ color: "#10b981" }}>{a.heroTitle2}</span>
              </h1>
              <p
                className="text-xl leading-relaxed max-w-2xl"
                style={{ color: "#94a3b8" }}
              >
                {a.heroSubtitle}
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                {a.locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      color: "#10b981",
                    }}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {loc}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── 2. OUR STORY ─────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: brand.sections.light }}>
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border:     "1px solid rgba(16,185,129,0.25)",
                  color:      "#10b981",
                }}
              >
                {a.whoWeAreBadge}
              </span>
              <h2
                className="text-3xl md:text-4xl font-black mb-8"
                style={{ color: "#f0f4ff" }}
              >
                {a.whoWeAreTitle}
              </h2>
              {[a.whoWeArePara1, a.whoWeArePara2, a.whoWeArePara3, a.whoWeArePara4]
                .filter(Boolean)
                .map((para, i) => (
                  <p
                    key={i}
                    className="text-lg leading-relaxed mb-5"
                    style={{ color: "#94a3b8" }}
                  >
                    {para}
                  </p>
                ))}
            </motion.div>
          </div>
        </section>
        <SectionTransition from={brand.sections.light} to={brand.sections.dark} />
 
        {/* ── 3. HOW WE THINK — the OT / IoT / AI convergence ─────────── */}
        {/* CrossoverSection already has its own background (#020818 = DARK)  */}
        <CrossoverSection />
        <SectionTransition from={brand.sections.dark} to={brand.sections.light} />
 
        {/* ── 4. TECHNOLOGIES & PLATFORMS ──────────────────────────────── */}
        {/* TechnologiesSection background is DARK — override to LIGHT here  */}
        <div style={{ background: brand.sections.light }}>
          <TechnologiesSection />
        </div>
        <SectionTransition from={brand.sections.light} to={brand.sections.dark} />
 
        {/* ── 5. INDUSTRIES ────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: brand.DARK }}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span
                className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border:     "1px solid rgba(16,185,129,0.25)",
                  color:      "#10b981",
                }}
              >
                {a.industriesBadge}
              </span>
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ color: "#f0f4ff" }}
              >
                {a.industriesTitle}
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "#94a3b8" }}
              >
                {a.industriesIntro}
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {a.industries?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{
                    background: "#0f172a",
                    border:     "1px solid rgba(16,185,129,0.12)",
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#94a3b8" }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <SectionTransition from={brand.sections.dark} to={brand.sections.light} />
 
        {/* ── 6. EXAMPLE PROJECTS ──────────────────────────────────────── */}
        {/* ProjectProofSection has its own background (#020818).
            Override wrapper to LIGHT so transition works correctly.        */}
        <div style={{ background: brand.LIGHT }}>
          <ProjectProofSection />
        </div>
        <SectionTransition from={brand.sections.light} to={brand.sections.dark} />
 
        {/* ── 7. WHERE WE WORK ─────────────────────────────────────────── */}
        <ServiceAreaSection />
        <SectionTransition from={brand.sections.dark} to={brand.sections.light} />
 
        {/* ── 8. CTA ───────────────────────────────────────────────────── */}
        <section className="py-24" style={{ background: brand.sections.light }}>
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ color: "#f0f4ff" }}
              >
                {a.ctaTitle}
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: "#94a3b8" }}
              >
                {a.ctaSubtitle}
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
                style={{
                  background:  "linear-gradient(135deg, #10b981, #059669)",
                  boxShadow:   "0 0 30px rgba(16,185,129,0.3)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(16,185,129,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(16,185,129,0.3)")}
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