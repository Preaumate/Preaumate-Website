import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-700" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1582533632670-55d43ff95331)",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border-2 border-emerald-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-12">
            <AnimatedLogo isCompact={false} />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.8 }}
            className="pt-4 flex justify-center"
          >
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto h-auto min-h-[3.5rem] whitespace-normal"
            >
              {t.hero.cta}
              <ArrowRight className="w-6 h-6 flex-shrink-0" />
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent" />
    </section>
  );
};

export default HeroSection;