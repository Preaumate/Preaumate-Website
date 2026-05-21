import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Cpu, Monitor, Wifi, Bot, BrainCircuit, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ── CARD CONFIG ───────────────────────────────────────────────────────────────
// Set learnMore.enabled: true once the corresponding /services/:slug page exists
// in src/data/services.js.
// Current slugs that exist: robotic-process-automation, assembly-automation,
// material-handling, quality-control.
// New service slugs (plc-programming, scada-hmi, industrial-iot, industrial-ai)
// need to be added to services.js before enabling those links.
// ─────────────────────────────────────────────────────────────────────────────
const cardConfig = [
  {
    Icon: Cpu,
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.2)",
    learnMore: { href: "/services/plc-programming", enabled: false },
  },
  {
    Icon: Monitor,
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.1)",
    border: "rgba(14,165,233,0.2)",
    learnMore: { href: "/services/scada-hmi", enabled: false },
  },
  {
    Icon: Wifi,
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.2)",
    learnMore: { href: "/services/industrial-iot", enabled: false },
  },
  {
    Icon: Bot,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
    learnMore: { href: "/services/robotic-process-automation", enabled: true },
  },
  {
    Icon: BrainCircuit,
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.2)",
    learnMore: { href: "/services/industrial-ai", enabled: false },
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-24 relative"
      style={{ background: "#0f172a" }}
    >
      <div className="container mx-auto px-6">

        {/* Header */}
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
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#10b981",
            }}
          >
            {t.services.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "#f0f4ff" }}
          >
            {t.services.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Service cards — 3 columns on desktop (5 cards = 3+2, centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.slice(0, 5).map((service, index) => {
            const config = cardConfig[index];
            const { Icon, color, bg, border } = config;
            const isClickable = config.learnMore.enabled;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => isClickable && navigate(config.learnMore.href)}
                className={`p-6 rounded-xl transition-all duration-300 group ${
                  isClickable ? "cursor-pointer" : "cursor-default"
                }`}
                style={{
                  background: "#1e293b",
                  border: `1px solid ${border}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = border;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: bg }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: "#f0f4ff" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#94a3b8" }}
                >
                  {service.description}
                </p>

                {/* Bullet points */}
                {service.bullets && (
                  <ul className="space-y-1 mb-4">
                    {service.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="text-xs flex items-center gap-2"
                        style={{ color: "#64748b" }}
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Learn more link */}
                <div
                  className={`flex items-center gap-1 text-xs font-semibold transition-all duration-300 ${
                    isClickable
                      ? "opacity-0 group-hover:opacity-100"
                      : "opacity-0 group-hover:opacity-30"
                  }`}
                  style={{ color }}
                >
                  <span>{service.learnMore || "Learn more"}</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;