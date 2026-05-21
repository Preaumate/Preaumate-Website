import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Colors for each category column
const categoryColors = [
  { header: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)",  dot: "rgba(16,185,129,0.6)"  },
  { header: "#0ea5e9", bg: "rgba(14,165,233,0.08)", border: "rgba(14,165,233,0.2)",  dot: "rgba(14,165,233,0.6)"  },
  { header: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)",  dot: "rgba(139,92,246,0.6)"  },
  { header: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)",  dot: "rgba(245,158,11,0.6)"  },
];

const TechnologiesSection = () => {
  const { t } = useLanguage();
  const tech = t.technologies;

  if (!tech) return null; // guard until i18n key is added

  return (
    <section
      id="technologies"
      className="py-24"
      style={{ background: "#1e293b" }}
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
            {tech.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "#f0f4ff" }}
          >
            {tech.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            {tech.subtitle}
          </p>
        </motion.div>

        {/* 4-column platform grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tech.categories.map((category, colIndex) => {
            const c = categoryColors[colIndex] || categoryColors[0];
            return (
              <motion.div
                key={colIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: colIndex * 0.1 }}
                className="rounded-xl overflow-hidden"
                style={{ border: `1px solid ${c.border}` }}
              >
                {/* Category header */}
                <div
                  className="px-5 py-3"
                  style={{ background: c.bg }}
                >
                  <h3
                    className="text-xs font-black tracking-widest uppercase"
                    style={{ color: c.header }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Items list */}
                <div
                  className="p-4 space-y-2.5"
                  style={{ background: "#0f172a" }}
                >
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2.5"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: c.dot }}
                      />
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#94a3b8" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;