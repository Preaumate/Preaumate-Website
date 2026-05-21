import React from "react";
import { motion } from "framer-motion";
import { Linkedin, MapPin, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO FILL IN THIS SECTION
// ─────────────────────────────────────────────────────────────────────────────
// 1. Go to src/lib/i18n.js and fill in founders.founders[0] and [1]
//    for every language:
//      - name         → your real first + last name
//      - role         → your job title (e.g. "Industrial Automation Engineer")
//      - location     → city / country
//      - years        → "20 years of experience in ..."
//      - bio          → 2–3 sentences: what you've done, what you focus on
//      - specializations → ["Siemens TIA Portal", "PLC migration", ...]
//      - industries   → ["Food & Beverage", "Packaging", ...]
//      - linkedin     → your real LinkedIn profile URL
//
// 2. Add a profile photo (optional but strongly recommended for trust):
//    - Put your photo in /public/images/ (e.g. founder1.jpg)
//    - Set photoUrl in the founders[0] i18n object (or hardcode here)
//    - The component will show initials avatar if no photo is supplied
//
// This is ONE OF THE MOST TRUST-CRITICAL sections on the site.
// Industrial buyers want to know: who are these engineers, what have they done?
// ─────────────────────────────────────────────────────────────────────────────

const FounderSection = () => {
  const { t } = useLanguage();
  const fo = t.founders;

  if (!fo) return null; // guard until i18n key is added

  return (
    <section
      id="founders"
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
            {fo.badge}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "#f0f4ff" }}
          >
            {fo.title}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            {fo.subtitle}
          </p>
        </motion.div>

        {/* Founder cards — centered, max 2 wide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {fo.founders.map((founder, index) => {
            const isPlaceholder =
              founder.name.startsWith("[") || !founder.name.trim();
            const initials = isPlaceholder
              ? "?"
              : founder.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();
            const accentColor = index === 0 ? "#10b981" : "#0ea5e9";
            const accentBg =
              index === 0
                ? "rgba(16,185,129,0.1)"
                : "rgba(14,165,233,0.1)";
            const accentBorder =
              index === 0
                ? "rgba(16,185,129,0.2)"
                : "rgba(14,165,233,0.2)";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-2xl p-8 flex flex-col gap-6"
                style={{
                  background: "#0f172a",
                  border: `1px solid ${accentBorder}`,
                }}
              >
                {/* Avatar + name */}
                <div className="flex items-start gap-5">
                  {/* Photo or initials avatar */}
                  {founder.photoUrl ? (
                    <img
                      src={founder.photoUrl}
                      alt={founder.name}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                      style={{ border: `2px solid ${accentBorder}` }}
                    />
                  ) : (
                    <div
                      className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl font-black"
                      style={{
                        background: accentBg,
                        border: `2px solid ${accentBorder}`,
                        color: accentColor,
                      }}
                    >
                      {initials}
                    </div>
                  )}

                  {/* Name + role + location */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-black text-xl mb-1 leading-tight"
                      style={{
                        color: isPlaceholder ? "#475569" : "#f0f4ff",
                        fontStyle: isPlaceholder ? "italic" : "normal",
                      }}
                    >
                      {founder.name}
                    </h3>
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: accentColor }}
                    >
                      {founder.role}
                    </p>
                    <div
                      className="flex items-center gap-1.5 text-xs"
                      style={{ color: "#64748b" }}
                    >
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      {founder.location}
                    </div>
                  </div>
                </div>

                {/* Experience summary */}
                <div
                  className="flex items-start gap-2.5 p-4 rounded-lg"
                  style={{ background: accentBg }}
                >
                  <Briefcase
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: accentColor }}
                  />
                  <p
                    className="text-sm leading-relaxed font-medium"
                    style={{ color: "#94a3b8" }}
                  >
                    {founder.years}
                  </p>
                </div>

                {/* Bio */}
                {founder.bio && (
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: founder.bio.startsWith("[") ? "#475569" : "#94a3b8",
                      fontStyle: founder.bio.startsWith("[") ? "italic" : "normal",
                    }}
                  >
                    {founder.bio}
                  </p>
                )}

                {/* Specializations */}
                {founder.specializations && founder.specializations.length > 0 && (
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest mb-2 uppercase"
                      style={{ color: accentColor }}
                    >
                      {fo.specializationsLabel || "Specialized in"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {founder.specializations.map((spec, si) => (
                        <span
                          key={si}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: accentBg,
                            border: `1px solid ${accentBorder}`,
                            color: spec.startsWith("[") ? "#475569" : accentColor,
                            fontStyle: spec.startsWith("[") ? "italic" : "normal",
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Industries */}
                {founder.industries && founder.industries.length > 0 && (
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest mb-2 uppercase"
                      style={{ color: "#475569" }}
                    >
                      {fo.industriesLabel || "Worked across"}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: founder.industries[0].startsWith("[") ? "#475569" : "#64748b",
                        fontStyle: founder.industries[0].startsWith("[") ? "italic" : "normal",
                      }}
                    >
                      {founder.industries.join(" · ")}
                    </p>
                  </div>
                )}

                {/* LinkedIn button */}
                {founder.linkedin && founder.linkedin !== "#" && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group w-fit"
                    style={{ color: accentColor }}
                  >
                    <Linkedin className="w-4 h-4" />
                    {fo.linkedinLabel || "View LinkedIn"}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FounderSection;