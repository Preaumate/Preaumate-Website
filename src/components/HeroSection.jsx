import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import AnimatedLogo  from "@/components/AnimatedLogo";
import { Button }    from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import factoryEvolution from "@/assets/factory-evolution2.jpg";

// ─────────────────────────────────────────────────────────────────────────────
// Hero copy — pulled from i18n with hardcoded fallbacks so the page works
// even before you update translations.json.
//
// ADD THESE KEYS to translations.json for all 6 languages, then run:
//   python i18n_tools.py build
//
//   hero.eyebrow        EN: "BUILT BY ENGINEERS"
//   hero.titleLine1     EN: "Your Factory Floor,"
//   hero.titleLine2     EN: "Fully Connected."
//   hero.subtitle       EN: "PLC · SCADA · IoT · Robotics · AI — by engineers
//                            who've stood on your production floor."
//
// The existing hero.cta, hero.cta2 and hero.trustBadges keys are unchanged.
// ─────────────────────────────────────────────────────────────────────────────

const HeroSection = () => {
  const { t } = useLanguage();
  const h = t.hero;

  const eyebrow   = h.eyebrow    || "BUILT BY ENGINEERS";
  const line1     = h.titleLine1 || "Your Factory Floor,";
  const line2     = h.titleLine2 || "Fully Connected to the Future";
  const subtitle  = h.subtitle   || "PLC · SCADA · IoT · Robotics · AI — by engineers who've stood on your production floor.";
  const cta1      = h.cta        || "Contact an Engineer";
  const cta2      = h.cta2       || "View Our Services";
  const badges    = h.trustBadges || [
    "40+ years combined experience",
    "Europe & and the Americas",
    "PLC · SCADA · Robotics · IoT · AI",
    "Siemens · Rockwell · CoDeSys · Omron",
  ];

  // Split each headline into individual words for the stagger animation.
  // Each word slides up and fades in a fraction of a second after the previous.
  const words1 = line1.split(" ");
  const words2 = line2.split(" ");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* ── Background layers ───────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-700" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${factoryEvolution})`, backgroundBlendMode: "overlay" }}
      />

      {/* Tech grid */}
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

      {/* Corner bracket accents */}
      {["top-12 left-12", "top-12 right-12"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-10 h-10 opacity-30 pointer-events-none`}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ background: "#10b981" }} />
          <div className="absolute top-0 left-0 h-full w-px" style={{ background: "#10b981" }} />
        </div>
      ))}

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 text-center w-full">
        <div className="max-w-5xl mx-auto">

          {/* Logo */}
          <div className="flex justify-center mb-12">
            <AnimatedLogo isCompact={false} />
          </div>

          {/* Eyebrow tag — small label above the headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-black tracking-[0.25em] px-5 py-2 rounded-full"
              style={{
                background: "rgba(16,185,129,0.12)",
                border:     "1px solid rgba(16,185,129,0.35)",
                color:      "#10b981",
              }}
            >
              {/* Blinking green dot — signals "live / active" */}
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "#10b981" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#10b981" }} />
              </span>
              {eyebrow}
            </span>
          </motion.div>

          {/* ── HEADLINE — word-by-word stagger animation ─────────────────
              Each word slides up from below and fades in individually.
              Line 1 is white. Line 2 is emerald — the key promise.
              This creates a dramatic reveal that draws the eye down.
          ─────────────────────────────────────────────────────────────── */}
          <h1 className="leading-tight mb-6">

            {/* Line 1 — white */}
            <div
              className="block font-black"
              style={{
                fontSize:   "clamp(1rem, 2.1vw, 5rem)",
                color:      "#f0f4ff",
                lineHeight: 1.1,
              }}
            >
              {words1.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  style={{ marginRight: "0.28em" }}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.8 + i * 0.13, duration: 0.5, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Line 2 — emerald gradient, slightly larger, the "punch" */}
            <div
              className="block font-black"
              style={{
                fontSize:        "clamp(1.1rem, 2.2vw, 5.2rem)",
                lineHeight:      1.05,
                background:      "linear-gradient(90deg, #10b981, #34d399, #10b981)",
                backgroundSize:  "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip: "text",
              }}
            >
              {words2.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  style={{ marginRight: "0.28em" }}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay:    3.8 + (words1.length * 0.13) + 0.1 + i * 0.15,
                    duration: 0.55,
                    ease:     "easeOut",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Supporting sentence */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.7, duration: 0.7 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {subtitle}
          </motion.p>

          {/* ── CTAs ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.1, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            {/* Primary — green */}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto h-auto min-h-[3.5rem] whitespace-normal border-0"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              {cta1}
            </Button>

            {/* Secondary — ghost button (improvement 4, kept) */}
            <button
              onClick={() => scrollTo("services")}
              className="flex items-center gap-2 font-semibold text-base rounded-lg transition-all duration-300 group w-full sm:w-auto justify-center py-4 px-7"
              style={{
                color:          "rgba(255,255,255,0.88)",
                border:         "1px solid rgba(255,255,255,0.25)",
                background:     "rgba(255,255,255,0.06)",
                backdropFilter: "blur(4px)",
                minHeight:      "3.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background  = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color       = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.background  = "rgba(255,255,255,0.06)";
                e.currentTarget.style.color       = "rgba(255,255,255,0.88)";
              }}
            >
              {cta2}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.4, duration: 0.7 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {badges.map((badge, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background:     "rgba(255,255,255,0.07)",
                  border:         "1px solid rgba(255,255,255,0.14)",
                  color:          "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator — bounces gently to invite scrolling */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 5.8, duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollTo("services")}
      >
        <ChevronDown
          className="w-7 h-7"
          style={{ color: "rgba(255,255,255,0.3)" }}
        />
      </motion.div>

      {/* Bottom fade into DARK (#020818) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #020818)" }}
      />
    </section>
  );
};

export default HeroSection;