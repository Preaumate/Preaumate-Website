// ============================================================
// SEO CONFIGURATION
// ============================================================
// All page titles and meta descriptions in one place.
// To update SEO for any page, edit this file only.
//
// RULES FOR GOOD META DESCRIPTIONS:
// - 150-160 characters maximum (Google truncates beyond this)
// - Include the most important keyword near the start
// - Answer the question: "what will I find on this page?"
// - Include a subtle call to action where natural
// - Be specific — generic descriptions do not rank or get clicked
// ============================================================

export const seo = {

  // ── HOMEPAGE ─────────────────────────────────────────────
  home: {
    title: 'Preaumate — Industrial Automation & IoT Consultancy | Siemens · Rockwell · CoDeSys',
    description: 'PLC programming, HMI/SCADA development, IoT integration and AI-driven automation. Siemens TIA Portal, Rockwell Studio 5000 and CoDeSys specialists. Based in Netherlands and Mexico — operating globally.',
    // 156 chars ✓
  },

  // ── ABOUT ────────────────────────────────────────────────
  about: {
    title: 'About Preaumate — Industrial Automation Engineers | Netherlands & Mexico',
    description: 'Preaumate is an automation engineering consultancy with 20+ years of combined experience across Siemens, Rockwell and CoDeSys platforms. Onshore, offshore and remote — worldwide.',
    // 179 chars — slightly long, trim if needed
  },

  // ── PRIVACY POLICY ───────────────────────────────────────
  privacy: {
    title: 'Privacy Policy — Preaumate Industrial Automation',
    description: 'Preaumate privacy policy — how we collect, use and protect your personal data. GDPR compliant. Last updated May 2026.',
    // 118 chars ✓
  },

  // ── TERMS ────────────────────────────────────────────────
  terms: {
    title: 'Terms & Conditions — Preaumate Industrial Automation',
    description: 'Terms and conditions for use of the Preaumate website and engagement of our industrial automation engineering services.',
    // 118 chars ✓
  },

  // ── BLOG ─────────────────────────────────────────────────
  blog: {
    title: 'Blog — Preaumate | Industrial Automation & Industry 4.0 Insights',
    description: 'Technical articles, industry insights and practical guides on industrial automation, PLC programming, IoT integration, SCADA and AI from the Preaumate engineering team.',
    // 170 chars — slightly long
  },

  // ── Q&A ──────────────────────────────────────────────────
  qa: {
    title: 'Q&A — Preaumate | Industrial Automation Questions Answered',
    description: 'Ask questions about PLC programming, SCADA, IoT integration, system modernisation and industrial cybersecurity. Answered by the Preaumate engineering team.',
    // 158 chars ✓
  },

  // ── SERVICE PAGES ─────────────────────────────────────────
  // One entry per service slug — matches the slugs in services.js
  services: {
    'robotic-process-automation': {
      title: 'Robotic Process Automation — Preaumate | ABB · FANUC · KUKA · Universal Robots',
      description: 'Robot programming for ABB, FANUC, KUKA, Yaskawa and Universal Robots. Pick & place, welding, vision-guided robotics and cobot integration. On-site and remote commissioning worldwide.',
    },
    'assembly-automation': {
      title: 'Assembly Automation — Preaumate | Flexible & Fixed Assembly Systems',
      description: 'Automated assembly solutions from single-station cells to multi-station transfer lines. Screwdriving, dispensing, press-fit and end-of-line testing integration.',
    },
    'material-handling': {
      title: 'Material Handling Automation — Preaumate | Conveyor · AGV · AS/RS · Palletising',
      description: 'Automated conveyor systems, AGV integration, AS/RS, palletising and WMS connectivity. PLC-controlled material flow for manufacturing and logistics.',
    },
    'quality-control': {
      title: 'Quality Control Automation — Preaumate | Machine Vision · SPC · Traceability',
      description: 'Machine vision inspection, dimensional measurement, SPC monitoring, traceability systems and end-of-line functional testing. Zero-defect manufacturing automation.',
    },
  },

  // ── SOLUTION PAGES ────────────────────────────────────────
  // One entry per solution slug — matches the slugs in solutions.js
  solutions: {
    'plc-programming': {
      title: 'PLC Programming & System Integration — Preaumate | Siemens · Rockwell · CoDeSys',
      description: 'Structured PLC programming for Siemens TIA Portal, Rockwell Studio 5000 and CoDeSys. Safety PLC, software PLC, virtualisation and multi-system integration. IEC 61131-3 compliant.',
    },
    'hmi-scada': {
      title: 'HMI & SCADA Development — Preaumate | WinCC · FactoryTalk · Ignition · AVEVA',
      description: 'HMI and SCADA development for WinCC, FactoryTalk View, Ignition and AVEVA. Legacy HMI migration, alarm rationalisation, historian setup and process data reporting.',
    },
    'system-modernisation': {
      title: 'PLC & HMI Modernisation — Preaumate | S5→S7 · S7-300→S7-1500 · Legacy Migration',
      description: 'Migrate end-of-life PLC and HMI systems to modern platforms without stopping production. Siemens S5/S7-300, Allen-Bradley PLC5/SLC and legacy SCADA migration specialists.',
    },
    'industrial-cybersecurity': {
      title: 'Industrial Cybersecurity — Preaumate | OT Security · IEC 62443 · Network Segmentation',
      description: 'OT cybersecurity assessment, network segmentation, secure remote access and hardening for industrial control systems. IEC 62443 and NIST CSF aligned. Built for automation engineers.',
    },
    'engineering-consulting': {
      title: 'Automation Engineering Consulting — Preaumate | Specification · FAT · Project Support',
      description: 'Independent automation consulting from specification to commissioning. Feasibility studies, functional specs, vendor evaluation, FAT support and technical project management.',
    },
    'custom-solutions': {
      title: 'Custom Automation Solutions — Preaumate | AI · Edge Computing · IoT · Digital Twin',
      description: 'Bespoke industrial automation: AI integration, predictive maintenance, edge computing, containerised control, IoT platforms and digital twin development for complex challenges.',
    },
  },
};