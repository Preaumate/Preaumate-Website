import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import factoryEvolution from "@/assets/factory-evolution2.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
  };

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
  };

  // Fallback trust badges if i18n key not yet added
  const trustBadges = t.hero.trustBadges || [
    "30+ years combined experience",
    "Europe & Latin America",
    "PLC · SCADA · Robotics · IoT",
    "Siemens · Rockwell · CoDeSys",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-700" />

      {/* Factory image – subtle overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${factoryEvolution})`,
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Calm tech grid — replaces the 20 spinning boxes */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16,185,129,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Corner bracket accents — industrial aesthetic */}
      <div className="absolute top-12 left-12 w-10 h-10 opacity-30 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: "#10b981" }}
        />
        <div
          className="absolute top-0 left-0 h-full w-px"
          style={{ background: "#10b981" }}
        />
      </div>
      <div className="absolute top-12 right-12 w-10 h-10 opacity-30 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-full h-px"
          style={{ background: "#10b981" }}
        />
        <div
          className="absolute top-0 right-0 h-full w-px"
          style={{ background: "#10b981" }}
        />
      </div>
      <div className="absolute bottom-20 left-12 w-10 h-10 opacity-20 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{ background: "#10b981" }}
        />
        <div
          className="absolute bottom-0 left-0 h-full w-px"
          style={{ background: "#10b981" }}
        />
      </div>
      <div className="absolute bottom-20 right-12 w-10 h-10 opacity-20 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-full h-px"
          style={{ background: "#10b981" }}
        />
        <div
          className="absolute bottom-0 right-0 h-full w-px"
          style={{ background: "#10b981" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <AnimatedLogo isCompact={false} />
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {t.hero.title1}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {t.hero.title2}
          </motion.h1>
          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.0, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.8 }}
            className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto h-auto min-h-[3.5rem] whitespace-normal"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              {t.hero.cta}
            </Button>

            {/* Secondary CTA */}
            <button
              onClick={scrollToServices}
              className="flex items-center gap-2 font-semibold text-white/75 hover:text-white transition-colors duration-300 group py-4 px-4"
            >
              {t.hero.cta2 || "View Our Services"}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Trust indicator badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.0, duration: 0.8 }}
            className="pt-1 flex flex-wrap gap-2 justify-center"
          >
            {trustBadges.map((badge, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
