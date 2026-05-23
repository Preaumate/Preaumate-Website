// =============================================================================
// src/styles/brand.js  —  Preaumate Corporate Design System
// =============================================================================
//
// Single source of truth for all colours, gradients, typography tokens,
// spacing, animation defaults and component styles used across the site.
//
// HOW TO USE IN A COMPONENT:
//   import { brand } from "@/styles/brand";
//
//   // Colour
//   style={{ background: brand.colors.dark }}
//   style={{ color: brand.colors.text.primary }}
//
//   // Badge (section label pill)
//   const b = brand.badge("green");
//   style={{ background: b.bg, border: `1px solid ${b.border}`, color: b.text }}
//
//   // Accent card
//   const a = brand.accent("blue");
//   style={{ background: a.bg, border: `1px solid ${a.border}` }}
//
//   // Motion props (spread onto a framer-motion element)
//   <motion.div {...brand.motion.fadeUp} transition={{ duration: brand.motion.duration }}>
//
// =============================================================================


// ── Section backgrounds ───────────────────────────────────────────────────────
// Two alternating section backgrounds used throughout the homepage.
// DARK is the "cold deep navy", LIGHT is the "softer dark slate".
// SectionTransition blends between them.

const sections = {
  dark:       "#020818",   // odd sections  (Trust, Problems, Technologies, ProjectProof, HowWeWork, ServiceArea, FeaturesBar)
  light:      "#1e293b",   // even sections (Crossover, Services, Industries, Founders, WhyPreaumate, Endorsements, Contact)
  heroBottom: "#020818",   // colour the Hero gradient fades to at its bottom edge
  card: {
    onDark:  "#0f172a",    // card surface on dark sections
    onLight: "#0f172a",    // card surface on light sections (same — sits midway between the two)
  },
};


// ── Brand accent colours ──────────────────────────────────────────────────────
// Primary accent: emerald green (calls to action, highlights, primary icons)
// Secondary:      sky blue     (secondary icons, info states)
// Tertiary:       purple       (IoT, AI, data topics)
// Warning:        amber        (robotics, problems/alerts)
// Danger:         red          (error states — use sparingly)

const accents = {
  green:  "#10b981",
  blue:   "#0ea5e9",
  purple: "#8b5cf6",
  amber:  "#f59e0b",
  red:    "#ef4444",
};


// ── Text colours ──────────────────────────────────────────────────────────────

const text = {
  primary:   "#f0f4ff",   // headings, important labels
  secondary: "#94a3b8",   // body copy, card descriptions
  muted:     "#64748b",   // less important meta text
  faint:     "#475569",   // placeholder text, disabled states, footnotes
};


// ── Accent colour helpers ─────────────────────────────────────────────────────
// Returns bg / border / text colour for a given accent name.
// Used for icon backgrounds, card borders, badge pills, tech tags etc.

const accentMap = {
  green:  { color: accents.green,  bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.2)",  borderStrong: "rgba(16,185,129,0.25)" },
  blue:   { color: accents.blue,   bg: "rgba(14,165,233,0.1)",  border: "rgba(14,165,233,0.2)",  borderStrong: "rgba(14,165,233,0.25)" },
  purple: { color: accents.purple, bg: "rgba(139,92,246,0.1)",  border: "rgba(139,92,246,0.2)",  borderStrong: "rgba(139,92,246,0.25)" },
  amber:  { color: accents.amber,  bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.2)",  borderStrong: "rgba(245,158,11,0.25)" },
  red:    { color: accents.red,    bg: "rgba(239,68,68,0.1)",   border: "rgba(239,68,68,0.2)",   borderStrong: "rgba(239,68,68,0.25)"  },
};

/**
 * accent(name)
 * Returns { color, bg, border, borderStrong } for the named accent.
 * @param {"green"|"blue"|"purple"|"amber"|"red"} name
 */
const accent = (name = "green") => accentMap[name] || accentMap.green;

/**
 * badge(name)
 * Alias of accent() — used specifically for section badge pills.
 * Returns the same { color, bg, border, borderStrong } object.
 */
const badge = accent;


// ── Gradients ─────────────────────────────────────────────────────────────────

const gradients = {
  // Hero background (base layer, overlaid by factory image)
  hero: "linear-gradient(135deg, #1e3a5f 0%, #0f4c3a 50%, #1a2f1a 100%)",

  // Primary call-to-action button
  ctaButton:      "linear-gradient(to right, #10b981, #14b8a6)",
  ctaButtonHover: "linear-gradient(to right, #059669, #0d9488)",

  // Subtle tech grid overlay used in some section backgrounds
  techGrid: [
    "linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px)",
    "linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)",
  ].join(", "),

  // Slightly more prominent version (used in Hero)
  techGridHero: [
    "linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px)",
    "linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)",
  ].join(", "),
};


// ── Section transition ────────────────────────────────────────────────────────
// Values used by <SectionTransition from={...} to={...} />
// Reference these constants in HomePage.jsx instead of hardcoding hex strings.

const transition = {
  fromHero:  sections.heroBottom,   // Hero → TrustSection
  darkLight: { from: sections.dark,  to: sections.light },
  lightDark: { from: sections.light, to: sections.dark  },
  height: 200,   // px — default gradient height for SectionTransition
};


// ── Typography tokens ─────────────────────────────────────────────────────────
// Tailwind class strings for consistent section headers and card text.
// Use with className={brand.type.sectionTitle} etc.

const type = {
  // Section-level badge pill label
  badgeClass:    "text-xs font-bold tracking-widest",

  // Main section heading
  sectionTitle:  "text-4xl md:text-5xl font-black",

  // Section intro paragraph
  sectionSubtitle: "text-lg leading-relaxed",

  // Card heading
  cardTitle:     "text-base font-bold leading-snug",

  // Card body copy
  cardBody:      "text-sm leading-relaxed",

  // Small label / meta text
  label:         "text-xs font-bold tracking-widest uppercase",
};


// ── Spacing & layout tokens ───────────────────────────────────────────────────

const spacing = {
  sectionPy:   "py-24",       // vertical padding on every section
  containerPx: "px-6",        // horizontal padding inside container
  cardPadding: "p-6",         // inner padding of a card
  headerMb:    "mb-14",       // margin below section header block
  gridGap:     "gap-6",       // gap in most card grids
  gridGapSm:   "gap-5",       // tighter gap variant
  iconSize:    "w-12 h-12",   // standard icon container size
  iconSizeSm:  "w-11 h-11",   // slightly smaller icon container
  iconRadius:  "rounded-lg",  // icon container border-radius
};


// ── Animation defaults ────────────────────────────────────────────────────────
// Spread these directly onto framer-motion elements.

const motion = {
  // Standard fade-up (use on section headers)
  fadeUp: {
    initial:    { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport:   { once: true },
    transition: { duration: 0.6 },
  },

  // Staggered card (add delay: index * staggerDelay to the transition)
  card: {
    initial:    { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport:   { once: true },
  },

  staggerDelay: 0.1,   // seconds per card
  duration:     0.5,   // card animation duration
};


// ── Card hover handler ────────────────────────────────────────────────────────
// Pass to onMouseEnter / onMouseLeave for consistent interactive card hover.
//
// Example:
//   const hover = brand.cardHover(brand.accent("green").color);
//   <div onMouseEnter={hover.enter} onMouseLeave={hover.leave} ...>

const cardHover = (accentColor) => ({
  enter: (e) => {
    e.currentTarget.style.borderColor = accentColor;
    e.currentTarget.style.transform   = "translateY(-4px)";
  },
  leave: (e) => {
    e.currentTarget.style.borderColor = "rgba(16,185,129,0.2)";
    e.currentTarget.style.transform   = "translateY(0)";
  },
});


// ── Section badge component helper ───────────────────────────────────────────
// Returns the full inline style object for a section badge pill.
//
// Example:
//   <span style={brand.badgeStyle("green")}>{t.section.badge}</span>

const badgeStyle = (colorName = "green") => {
  const b = badge(colorName);
  return {
    background: b.bg,
    border:     `1px solid ${b.borderStrong}`,
    color:      b.color,
  };
};


// ── Icon box helper ───────────────────────────────────────────────────────────
// Returns the inline style for an icon background box.
//
// Example:
//   <div style={brand.iconBox("blue")}><Icon /></div>

const iconBox = (colorName = "green") => {
  const a = accent(colorName);
  return { background: a.bg };
};


// ── Named service → accent colour mapping ─────────────────────────────────────
// Used in ServicesSection and anywhere services are rendered.

const serviceColors = {
  plc:         "green",
  scada:       "blue",
  iot:         "purple",
  robotics:    "amber",
  ai:          "green",
};


// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export const brand = {
  colors: {
    ...accents,
    text,
    sections,
    card: sections.card,
  },
  sections,
  accents,
  accent,
  badge,
  badgeStyle,
  iconBox,
  gradients,
  transition,
  type,
  spacing,
  motion,
  cardHover,
  serviceColors,
};

// Named exports for convenience (so you can do:  import { DARK, LIGHT } from ...)
export const DARK  = sections.dark;
export const LIGHT = sections.light;
export const HERO_BOTTOM = sections.heroBottom;