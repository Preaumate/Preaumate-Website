import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Linkedin,
  MapPin,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Award,
  Globe,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  Share2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import useActiveSection from "@/hooks/useActiveSection";
import { useLanguage } from "@/context/LanguageContext";
import { curriculumData } from "@/data/curriculum";
import { images, getImage } from "@/data/images";

// ─────────────────────────────────────────────────────────────────────────────
// Colour tokens
// ─────────────────────────────────────────────────────────────────────────────
const DARK = "#020818";
const LIGHT = "#1e293b";
const CARD = "#0f172a";
const GREEN = "#10b981";
const BLUE = "#0ea5e9";
const PURPLE = "#8b5cf6";
const AMBER = "#f59e0b";
const TEXT = "#f0f4ff";
const MUTED = "#94a3b8";
const FAINT = "#64748b";

const ROLE_ACCENTS = [
  { color: GREEN, bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)" },
  { color: BLUE, bg: "rgba(14,165,233,0.1)", border: "rgba(14,165,233,0.25)" },
  {
    color: PURPLE,
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.25)",
  },
  { color: AMBER, bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)" },
  { color: BLUE, bg: "rgba(14,165,233,0.1)", border: "rgba(14,165,233,0.25)" },
];

const TECH_COLORS = [
  { color: GREEN, bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)" },
  { color: BLUE, bg: "rgba(14,165,233,0.1)", border: "rgba(14,165,233,0.2)" },
  { color: PURPLE, bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)" },
  { color: AMBER, bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Section ids — these must match the id="" on each <section> below.
// Every id is also a valid hash: preaumate.nl/curriculum#experience
// ─────────────────────────────────────────────────────────────────────────────
const SECTION_IDS = ["summary", "experience", "technical", "contact-cv"];

// Scroll smoothly and push the hash into the URL bar (no history entry)
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
};

// ─────────────────────────────────────────────────────────────────────────────
// Small helpers
// ─────────────────────────────────────────────────────────────────────────────
const SectionBadge = ({ children, color = GREEN }) => (
  <span
    className="inline-block text-xs font-black tracking-widest px-4 py-1.5 rounded-full mb-4"
    style={{ background: `${color}18`, border: `1px solid ${color}40`, color }}
  >
    {children}
  </span>
);

const Divider = ({ from, to }) => (
  <div
    style={{
      height: "56px",
      background: `linear-gradient(to bottom, ${from}, ${to})`,
    }}
  />
);

// ─────────────────────────────────────────────────────────────────────────────
// CurriculumPage
// ─────────────────────────────────────────────────────────────────────────────
const CurriculumPage = () => {
  const { t } = useLanguage();
  const cv = t.curriculum;
  const data = curriculumData;
  const photo = getImage(images.curriculum.theo, "");

  // Toast-style copy confirmation
  const [copied, setCopied] = useState(false);

  // useActiveSection watches the viewport and keeps the URL hash
  // in sync as the visitor scrolls — every position is shareable.
  const activeSection = useActiveSection(SECTION_IDS, {
    updateHash: true, // write #sectionId to the address bar on scroll
    initialHash: true, // on load, scroll to the section in the URL if present
  });

  // Copy the current section's direct link to clipboard
  const copyLink = () => {
    const url = `${window.location.origin}/curriculum#${activeSection}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!cv)
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: DARK }}
      >
        <p className="text-sm" style={{ color: MUTED }}>
          Add "curriculum" to translations.json then run: python i18n_tools.py
          build
        </p>
      </div>
    );

  // Nav labels per section — keeps the sidebar nav in sync with i18n
  const navItems = [
    { id: "summary", label: cv.summaryBadge || "Summary" },
    { id: "experience", label: cv.experienceBadge || "Experience" },
    { id: "technical", label: cv.technicalBadge || "Technical" },
    { id: "contact-cv", label: cv.contactBadge || "Contact" },
  ];

  return (
    <>
      <SEOHead
        title={cv.pageTitle}
        description={cv.metaDescription}
        path="/curriculum"
        noIndex={true}
      />

      <div className="min-h-screen" style={{ background: DARK }}>
        <Header />

        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <div
          className="pt-28 pb-16 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #020818 0%, #0c1a30 40%, #0f2a1a 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16,185,129,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Photo or initials avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                {photo ? (
                  <img
                    src={photo}
                    alt={cv.photoAlt}
                    className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover"
                    style={{ border: "3px solid rgba(16,185,129,0.4)" }}
                  />
                ) : (
                  <div
                    className="w-28 h-28 md:w-36 md:h-36 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-black"
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      border: "3px solid rgba(16,185,129,0.35)",
                      color: GREEN,
                    }}
                  >
                    {cv.photoPlaceholder}
                  </div>
                )}
              </motion.div>

              {/* Name + title */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex-1"
              >
                <SectionBadge>{cv.heroBadge}</SectionBadge>
                <h1
                  className="text-4xl md:text-5xl font-black mb-1 leading-tight"
                  style={{ color: TEXT }}
                >
                  {data.name}
                </h1>
                <p
                  className="text-lg md:text-xl font-semibold mb-3"
                  style={{ color: GREEN }}
                >
                  {cv.heroSubtitle}
                </p>
                <p
                  className="text-base leading-relaxed mb-5 max-w-xl"
                  style={{ color: MUTED }}
                >
                  {cv.heroTagline}
                </p>
                {/* Contact strip 
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: MapPin,   val: data.location },
                    { icon: Phone,    val: data.phone,   href: `tel:${data.phone}` },
                    { icon: Mail,     val: data.email,   href: `mailto:${data.email}` },
                    { icon: Linkedin, val: 'LinkedIn',   href: data.linkedIn, blank: true },
                  ].map(({ icon: Icon, val, href, blank }, i) =>
                    href ? (
                      <a key={i} href={href} target={blank ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                        style={{ color: MUTED }}>
                        <Icon className="w-4 h-4" style={{ color: GREEN }} />{val}
                      </a>
                    ) : (
                      <span key={i} className="flex items-center gap-2 text-sm" style={{ color: MUTED }}>
                        <Icon className="w-4 h-4" style={{ color: GREEN }} />{val}
                      </span>
                    )
                  )}
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>

        <Divider from="#0f2a1a" to={LIGHT} />

        {/* ══════════════════════════════════════════════════
            TWO-COLUMN BODY
            Left  sidebar (1 col): nav + skills + languages
                                   + education + certs
            Right main    (2 col): summary + timeline
        ══════════════════════════════════════════════════ */}
        <div className="py-12" style={{ background: LIGHT }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* ─────────────────────────────────────────
                  SIDEBAR  (sticky on desktop)
              ───────────────────────────────────────── */}
              <div className="lg:col-span-1 flex flex-col gap-6 lg:sticky lg:top-24">
                {/* ── Section navigation (hash routing) ── */}
                {/* This is the only new piece added to the original layout.
                    It sits at the top of the sidebar and highlights the
                    section currently visible in the viewport.              */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: CARD,
                    border: `1px solid rgba(16,185,129,0.2)`,
                  }}
                >
                  {/* Nav header */}
                  <div
                    className="px-4 py-3 flex items-center gap-2"
                    style={{ borderBottom: "1px solid rgba(16,185,129,0.1)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: GREEN }}
                    />
                    <span
                      className="text-xs font-black tracking-widest"
                      style={{ color: GREEN }}
                    >
                      SECTIONS
                    </span>
                  </div>

                  {/* Nav links — one per hash section */}
                  <div className="p-2">
                    {navItems.map(({ id, label }) => {
                      const isActive = activeSection === id;
                      return (
                        <button
                          key={id}
                          onClick={() => scrollTo(id)}
                          className="w-full text-left text-xs font-semibold py-2.5 px-3 rounded-lg transition-all duration-200 flex items-center gap-2"
                          style={{
                            background: isActive
                              ? "rgba(16,185,129,0.12)"
                              : "transparent",
                            color: isActive ? GREEN : FAINT,
                            borderLeft: `2px solid ${isActive ? GREEN : "transparent"}`,
                          }}
                        >
                          <ChevronRight
                            className="w-3 h-3 flex-shrink-0"
                            style={{ opacity: isActive ? 1 : 0 }}
                          />
                          {label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Share link button */}
                  <div
                    className="px-4 py-3"
                    style={{ borderTop: "1px solid rgba(16,185,129,0.1)" }}
                  >
                    <button
                      onClick={copyLink}
                      className="w-full flex items-center gap-2 text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-200"
                      style={{
                        background: copied
                          ? "rgba(16,185,129,0.2)"
                          : "rgba(16,185,129,0.06)",
                        border: `1px solid rgba(16,185,129,${copied ? "0.4" : "0.2"})`,
                        color: GREEN,
                      }}
                    >
                      <Share2 className="w-3.5 h-3.5 flex-shrink-0" />
                      {copied ? "✓ Link copied!" : `Share #${activeSection}`}
                    </button>
                    <p
                      className="text-xs mt-2 leading-relaxed"
                      style={{ color: FAINT }}
                    >
                      Copies a direct link to the current section.
                    </p>
                  </div>
                </motion.div>

                {/* ── Core competencies ────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="rounded-2xl p-6"
                  style={{
                    background: CARD,
                    border: `1px solid rgba(16,185,129,0.15)`,
                  }}
                >
                  <SectionBadge>{cv.skillsBadge}</SectionBadge>
                  <h3
                    className="text-base font-bold mb-4"
                    style={{ color: TEXT }}
                  >
                    {cv.skillsTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cv.skills?.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{
                          background: "rgba(16,185,129,0.08)",
                          border: "1px solid rgba(16,185,129,0.2)",
                          color: GREEN,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* ── Languages spoken ─────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-2xl p-6"
                  style={{
                    background: CARD,
                    border: `1px solid rgba(14,165,233,0.15)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-4 h-4" style={{ color: BLUE }} />
                    <span
                      className="text-xs font-black tracking-widest"
                      style={{ color: BLUE }}
                    >
                      {cv.languagesBadge}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {data.spokenLanguages.map(({ langKey, flag }) => {
                      const lang = cv.spokenLanguages?.[langKey];
                      if (!lang) return null;
                      return (
                        <div
                          key={langKey}
                          className="flex items-center justify-between"
                        >
                          <span
                            className="flex items-center gap-2 text-sm"
                            style={{ color: MUTED }}
                          >
                            <span className="text-base">{flag}</span>
                            {lang.language}
                          </span>
                          <span
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: "rgba(14,165,233,0.1)",
                              border: "1px solid rgba(14,165,233,0.2)",
                              color: BLUE,
                            }}
                          >
                            {lang.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* ── Education ────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="rounded-2xl p-6"
                  style={{
                    background: CARD,
                    border: `1px solid rgba(139,92,246,0.15)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap
                      className="w-4 h-4"
                      style={{ color: PURPLE }}
                    />
                    <span
                      className="text-xs font-black tracking-widest"
                      style={{ color: PURPLE }}
                    >
                      {cv.educationBadge}
                    </span>
                  </div>
                  <p
                    className="text-sm font-bold leading-snug mb-1"
                    style={{ color: TEXT }}
                  >
                    {cv.degreeTitle}
                  </p>
                  <p
                    className="text-xs font-medium mb-0.5"
                    style={{ color: PURPLE }}
                  >
                    {data.education.institution}
                  </p>
                  <p className="text-xs" style={{ color: FAINT }}>
                    {data.education.period} · {data.education.location}
                  </p>
                </motion.div>

                {/* ── Certifications ───────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-2xl p-6"
                  style={{
                    background: CARD,
                    border: `1px solid rgba(245,158,11,0.15)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4" style={{ color: AMBER }} />
                    <span
                      className="text-xs font-black tracking-widest"
                      style={{ color: AMBER }}
                    >
                      {cv.certificationsBadge}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {data.certifications.map(({ certKey }) => {
                      const cert = cv.certifications?.[certKey];
                      if (!cert) return null;
                      return (
                        <div key={certKey}>
                          <p
                            className="text-sm font-bold leading-snug mb-0.5"
                            style={{ color: TEXT }}
                          >
                            {cert.title}
                          </p>
                          <p
                            className="text-xs leading-relaxed"
                            style={{ color: FAINT }}
                          >
                            {cert.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
              {/* end sidebar */}

              {/* ─────────────────────────────────────────
                  MAIN CONTENT
              ───────────────────────────────────────── */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* ── Professional summary ─────────────
                    id="summary" makes this section the target of
                    preaumate.nl/curriculum#summary               */}
                <section id="summary" className="scroll-mt-28">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl p-6"
                    style={{
                      background: CARD,
                      border: `1px solid rgba(16,185,129,0.15)`,
                    }}
                  >
                    <SectionBadge>{cv.summaryBadge}</SectionBadge>
                    <h2
                      className="text-xl font-black mb-3"
                      style={{ color: TEXT }}
                    >
                      {cv.summaryTitle}
                    </h2>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: MUTED }}
                    >
                      {cv.summaryText}
                    </p>
                  </motion.div>
                </section>

                {/* ── Experience timeline ──────────────
                    id="experience" → preaumate.nl/curriculum#experience */}
                <section id="experience" className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-5">
                    <Briefcase className="w-4 h-4" style={{ color: GREEN }} />
                    <SectionBadge>{cv.experienceBadge}</SectionBadge>
                  </div>

                  <div className="relative">
                    {/* Vertical timeline line */}
                    <div
                      className="absolute left-[1.1rem] top-0 bottom-0 w-px"
                      style={{ background: "rgba(16,185,129,0.15)" }}
                    />
                    <div className="flex flex-col gap-5">
                      {data.roles.map((role, index) => {
                        const roleContent = cv.roles?.[role.roleKey];
                        if (!roleContent) return null;
                        const accent = ROLE_ACCENTS[index] || ROLE_ACCENTS[0];
                        return (
                          <motion.div
                            key={role.roleKey}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="flex gap-4"
                          >
                            {/* Dot */}
                            <div className="flex flex-col items-center flex-shrink-0 pt-1">
                              <div
                                className="w-9 h-9 rounded-full flex items-center justify-center z-10"
                                style={{
                                  background: role.current ? GREEN : accent.bg,
                                  border: `2px solid ${role.current ? GREEN : accent.color}`,
                                }}
                              >
                                <ChevronRight
                                  className="w-4 h-4"
                                  style={{
                                    color: role.current
                                      ? "#020818"
                                      : accent.color,
                                  }}
                                />
                              </div>
                            </div>
                            {/* Card */}
                            <div
                              className="flex-1 rounded-xl p-5 mb-1"
                              style={{
                                background: CARD,
                                border: `1px solid ${role.current ? accent.color + "60" : accent.border}`,
                              }}
                            >
                              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                {/* LEFT SIDE: Title and Company info */}
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <h3
                                      className="text-base font-black leading-snug"
                                      style={{ color: TEXT }}
                                    >
                                      {roleContent.roleTitle}
                                    </h3>
                                    {/* Removed the badge from here so the title can sit cleanly on the left */}
                                  </div>
                                  <p
                                    className="text-sm font-semibold mt-0.5"
                                    style={{ color: accent.color }}
                                  >
                                    {role.company}
                                  </p>
                                </div>

                                {/* RIGHT SIDE: Shows either the 'Current' badge OR the Date/Location info */}
                                {role.current ? (
                                  <div className="text-right flex-shrink-0">
                                    <span
                                      className="text-xs px-2 py-0.5 rounded-full font-bold inline-block"
                                      style={{
                                        background: "rgba(16,185,129,0.15)",
                                        border:
                                          "1px solid rgba(16,185,129,0.4)",
                                        color: GREEN,
                                      }}
                                    >
                                      {cv.currentBadge}
                                    </span>
                                  </div>
                                ) : (
                                  <div className="text-right flex-shrink-0">
                                    <p
                                      className="text-xs font-medium"
                                      style={{ color: FAINT }}
                                    >
                                      {role.period}
                                    </p>
                                    <p
                                      className="text-xs"
                                      style={{ color: FAINT }}
                                    >
                                      {role.location}
                                    </p>
                                  </div>
                                )}
                              </div>
                              <p
                                className="text-xs leading-relaxed mb-3"
                                style={{ color: MUTED }}
                              >
                                {roleContent.description}
                              </p>
                              {roleContent.highlights?.length > 0 && (
                                <ul className="space-y-1.5">
                                  {roleContent.highlights.map((h, hi) => (
                                    <li
                                      key={hi}
                                      className="flex items-start gap-2 text-xs"
                                      style={{ color: FAINT }}
                                    >
                                      <CheckCircle2
                                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                                        style={{ color: accent.color }}
                                      />
                                      {h}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Earlier career — compact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl p-5 mt-5"
                    style={{
                      background: CARD,
                      border: "1px solid rgba(100,116,139,0.2)",
                    }}
                  >
                    <SectionBadge color={FAINT}>
                      {cv.earlierCareerBadge}
                    </SectionBadge>
                    <div
                      className="divide-y"
                      style={{ borderColor: "rgba(100,116,139,0.1)" }}
                    >
                      {data.earlierRoles.map((r, i) => (
                        <div
                          key={i}
                          className="py-3 flex justify-between items-start gap-4"
                        >
                          <div>
                            <p
                              className="text-sm font-semibold"
                              style={{ color: MUTED }}
                            >
                              {r.role}
                            </p>
                            <p className="text-xs" style={{ color: FAINT }}>
                              {r.company} · {r.location}
                            </p>
                          </div>
                          <span
                            className="text-xs flex-shrink-0"
                            style={{ color: FAINT }}
                          >
                            {r.period}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>
              </div>
              {/* end main content */}
            </div>
            {/* end grid */}
          </div>
        </div>

        <Divider from={LIGHT} to={DARK} />

        {/* ══════════════════════════════════════════════════
            TECHNICAL SKILLS  (full width, DARK background)
            id="technical" → preaumate.nl/curriculum#technical
        ══════════════════════════════════════════════════ */}
        <section
          id="technical"
          className="py-16 scroll-mt-24"
          style={{ background: DARK }}
        >
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <SectionBadge>{cv.technicalBadge}</SectionBadge>
              <h2 className="text-3xl font-black" style={{ color: TEXT }}>
                {cv.technicalTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.technicalCategories.map(({ titleKey, items }, ci) => {
                const c = TECH_COLORS[ci] || TECH_COLORS[0];
                return (
                  <motion.div
                    key={titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.08 }}
                    className="rounded-xl overflow-hidden"
                    style={{ border: `1px solid ${c.border}` }}
                  >
                    <div className="px-4 py-2.5" style={{ background: c.bg }}>
                      <p
                        className="text-xs font-black tracking-widest uppercase"
                        style={{ color: c.color }}
                      >
                        {cv[titleKey] || titleKey}
                      </p>
                    </div>
                    <div className="p-4 space-y-2" style={{ background: CARD }}>
                      {items.map((item, ii) => (
                        <div key={ii} className="flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: c.color + "80" }}
                          />
                          <span
                            className="text-xs font-medium"
                            style={{ color: MUTED }}
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

        <Divider from={DARK} to={LIGHT} />

        {/* ══════════════════════════════════════════════════
            CTA  (LIGHT background)
            id="contact-cv" → preaumate.nl/curriculum#contact-cv
        ══════════════════════════════════════════════════ */}
        <section
          id="contact-cv"
          className="py-20 scroll-mt-24"
          style={{ background: LIGHT }}
        >
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge>{cv.contactBadge}</SectionBadge>
              <h2 className="text-4xl font-black mb-4" style={{ color: TEXT }}>
                {cv.contactTitle}
              </h2>
              <p className="text-lg mb-8" style={{ color: MUTED }}>
                {cv.contactSubtitle}
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${GREEN}, #059669)`,
                  boxShadow: "0 0 30px rgba(16,185,129,0.3)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 45px rgba(16,185,129,0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(16,185,129,0.3)")
                }
              >
                {cv.contactButton}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CurriculumPage;
