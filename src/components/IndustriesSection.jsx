import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Package,
  Utensils,
  Car,
  Warehouse,
  Zap,
  Wrench,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// One icon per industry card — order matches i18n industries.items array
const industryIcons = [
  Factory,
  Package,
  Utensils,
  Car,
  Warehouse,
  Zap,
  Wrench,
  Building2,
];

// Subtle color rotation across cards
const cardAccents = [
  { color: "#10b981", bg: "rgba(16,185,129,0.08)" },
  { color: "#0ea5e9", bg: "rgba(14,165,233,0.08)" },
  { color: "#8b5cf6", bg: "rgba(139,92,246,0.08)" },
  { color: "#10b981", bg: "rgba(16,185,129,0.08)" },
  { color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
  { color: "#0ea5e9", bg: "rgba(14,165,233,0.08)" },
  { color: "#10b981", bg: "rgba(16,185,129,0.08)" },
  { color: "#8b5cf6", bg: "rgba(139,92,246,0.08)" },
];

const DARK  = "#020818";
const LIGHT = "#1e293b";
const MEDIUM = "#0f172a";

const IndustriesSection = () => {
  const { t } = useLanguage();
  const ind = t.industries;

  if (!ind) return null; // guard until i18n key is added

  return (
    <section
      id="industries"
      className="py-24 relative overflow-hidden"
      style={{ background: DARK }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16,185,129,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

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
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#10b981",
            }}
          >
            {ind.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "#f0f4ff" }}
          >
            {ind.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            {ind.subtitle}
          </p>
        </motion.div>

        {/* Industry cards — 4 per row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ind.items.map((item, index) => {
            const Icon = industryIcons[index] || Factory;
            const accent = cardAccents[index] || cardAccents[0];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col items-center text-center p-5 rounded-xl transition-all duration-300"
                style={{
                  background: "#0f172a",
                  border: "1px solid rgba(16,185,129,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent.color;
                  e.currentTarget.style.background = accent.bg;
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.1)";
                  e.currentTarget.style.background = "#0f172a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: accent.bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent.color }} />
                </div>
                <span
                  className="text-sm font-semibold leading-tight"
                  style={{ color: "#94a3b8" }}
                >
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;