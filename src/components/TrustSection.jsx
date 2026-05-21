import React from "react";
import { motion } from "framer-motion";
import { HardHat, Globe2, Wrench, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// One icon + color pair per trust card (order matches i18n trust.cards array)
const cardConfig = [
  { Icon: HardHat,     color: "#10b981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.2)"  },
  { Icon: Globe2,      color: "#0ea5e9", bg: "rgba(14,165,233,0.1)",  border: "rgba(14,165,233,0.2)"  },
  { Icon: Wrench,      color: "#10b981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.2)"  },
  { Icon: ShieldCheck, color: "#0ea5e9", bg: "rgba(14,165,233,0.1)",  border: "rgba(14,165,233,0.2)"  },
];

const TrustSection = () => {
  const { t } = useLanguage();
  const tr = t.trust;

  if (!tr) return null; // guard until i18n key is added

  return (
    <section
      id="trust"
      className="py-24"
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
            {tr.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ color: "#f0f4ff" }}
          >
            {tr.title}
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            {tr.subtitle}
          </p>
        </motion.div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tr.cards.map((card, index) => {
            const { Icon, color, bg, border } = cardConfig[index] || cardConfig[0];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl"
                style={{
                  background: "#1e293b",
                  border: `1px solid ${border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: bg }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3
                  className="font-bold text-base mb-2 leading-snug"
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
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;