import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Wifi, Bot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// One icon per project card — order matches i18n projectProof.projects array
const projectIcons = [Cpu, Wifi, Bot];

const projectColors = [
  { color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)" },
  { color: "#0ea5e9", bg: "rgba(14,165,233,0.1)", border: "rgba(14,165,233,0.2)" },
  { color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)" },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO USE THIS SECTION
// ─────────────────────────────────────────────────────────────────────────────
// 1. Fill in the project summaries in src/lib/i18n.js under projectProof.projects
//    for each language. Replace the [PLACEHOLDER] text with real descriptions.
// 2. Replace the results bullets with real, specific outcomes.
// 3. Update the tech tags to match what was actually used.
// 4. Do NOT invent numbers or outcomes you cannot back up.
// 5. Even one real anonymized project is more powerful than three polished fakes.
// ─────────────────────────────────────────────────────────────────────────────

const ProjectProofSection = () => {
  const { t } = useLanguage();
  const pp = t.projectProof;

  if (!pp) return null; // guard until i18n key is added

  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{ background: "#020818" }}
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
            {pp.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "#f0f4ff" }}
          >
            {pp.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            {pp.subtitle}
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pp.projects.map((project, index) => {
            const Icon = projectIcons[index] || Cpu;
            const c = projectColors[index] || projectColors[0];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: "#1e293b",
                  border: `1px solid ${c.border}`,
                }}
              >
                {/* Card header */}
                <div
                  className="p-5 flex items-start gap-4"
                  style={{ background: c.bg, borderBottom: `1px solid ${c.border}` }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0f172a" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <h3
                    className="font-bold text-base leading-snug"
                    style={{ color: "#f0f4ff" }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1 gap-5">

                  {/* Project summary */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{
                      color: project.summary.startsWith("[")
                        ? "#475569"
                        : "#94a3b8",
                      fontStyle: project.summary.startsWith("[") ? "italic" : "normal",
                    }}
                  >
                    {project.summary}
                  </p>

                  {/* Results */}
                  {project.results && project.results.length > 0 && (
                    <div>
                      <p
                        className="text-xs font-bold tracking-widest mb-2 uppercase"
                        style={{ color: c.color }}
                      >
                        {pp.resultsLabel || "Results"}
                      </p>
                      <ul className="space-y-1.5">
                        {project.results.map((result, ri) => (
                          <li
                            key={ri}
                            className="flex items-center gap-2 text-sm"
                            style={{ color: "#94a3b8" }}
                          >
                            <CheckCircle2
                              className="w-4 h-4 flex-shrink-0"
                              style={{ color: c.color }}
                            />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech tags */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag, ti) => (
                        <span
                          key={ti}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{
                            background: c.bg,
                            border: `1px solid ${c.border}`,
                            color: c.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        {pp.note && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-sm mt-8"
            style={{ color: "#475569" }}
          >
            {pp.note}
          </motion.p>
        )}

      </div>
    </section>
  );
};

export default ProjectProofSection;