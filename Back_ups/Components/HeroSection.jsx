import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import factoryEvolution from "@/assets/factory-evolution2.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark industrial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      
      {/* Subtle background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url(${factoryEvolution})`,
          backgroundBlendMode: "overlay",
        }}
      />
      
      {/* Subtle industrial mesh grid - low motion */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(148,163,184,0.5)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle animated gradient overlay - very low motion */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-12">
            <AnimatedLogo isCompact={false} />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            {t.hero.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.8 }}
            className="pt-6 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-3 h-auto min-h-[3.5rem] whitespace-normal"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Button>
            <Button
              onClick={scrollToServices}
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-3 h-auto min-h-[3.5rem] whitespace-normal border border-slate-600 hover:border-slate-500"
            >
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.8 }}
            className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {t.hero.trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="text-sm text-gray-400 flex items-center justify-center gap-2"
              >
                <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                {indicator}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent" />
    </section>
  );
};

export default HeroSection;