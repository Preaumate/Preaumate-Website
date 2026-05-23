import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Eye,
  Cable,
  Bot,
  Wrench,
  BrainCircuit,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// One config per problem card — order matches i18n problems.cards array
const cardConfig = [
  { Icon: AlertTriangle, color: "#f59e0b", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.18)"  },
  { Icon: Eye,           color: "#0ea5e9", bg: "rgba(14,165,233,0.1)",  border: "rgba(14,165,233,0.18)"  },
  { Icon: Cable,         color: "#10b981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.18)"  },
  { Icon: Bot,           color: "#8b5cf6", bg: "rgba(139,92,246,0.1)",  border: "rgba(139,92,246,0.18)"  },
  { Icon: Wrench,        color: "#ef4444", bg: "rgba(239,68,68,0.1)",   border: "rgba(239,68,68,0.18)"   },
  { Icon: BrainCircuit,  color: "#10b981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.18)"  },
];

const ProblemsSection = () => {
  const { t } = useLanguage();
  const p = t.problems;

  if (!p) return null; // guard until i18n key is added

  return (
    <section
      id="problems"
      className="py-24 relative overflow-hidden"
      style={{ background: "#020818" }}
    >
      {/* Very subtle ambient glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.03), transparent)",
          filter: "blur(80px)",
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
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.25)",
              color: "#f59e0b",
            }}
          >
            {p.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "#f0f4ff" }}
          >
            {p.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            {p.subtitle}
          </p>
        </motion.div>

        {/* Problem cards — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.cards.map((card, index) => {
            const { Icon, color, bg, border } = cardConfig[index] || cardConfig[0];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-4 p-6 rounded-xl"
                style={{
                  background: "#0f172a",
                  border: `1px solid ${border}`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-bold text-base mb-1.5 leading-snug"
                    style={{ color: "#f0f4ff" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#94a3b8" }}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProblemsSection;