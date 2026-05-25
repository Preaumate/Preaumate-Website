// =============================================================================
// src/data/seo.js  —  Preaumate SEO Configuration
// =============================================================================
//
// WHAT THIS FILE DOES
// ───────────────────
// Every page on your site needs two things Google reads:
//   1. A title  (the blue link text in search results)
//   2. A description  (the grey paragraph under the link)
//
// This file also contains JSON-LD structured data — invisible code that tells
// Google: "this is a professional services company in Netherlands, offering
// these specific services, operating in these countries." Google uses this to
// show enhanced listings ("rich results") that stand out from plain blue links.
//
// HOW TO USE IN A PAGE COMPONENT
// ───────────────────────────────
// import SEOHead from '@/components/SEOHead';
// import { seo } from '@/data/seo';
//
// <SEOHead
//   title={seo.home.title}
//   description={seo.home.description}
//   path="/"
// />
//
// RULES FOR WRITING GOOD DESCRIPTIONS
// ─────────────────────────────────────
// - Keep between 140–160 characters (Google cuts off anything longer)
// - Include your most important keyword near the start
// - Make it sound useful, not spammy
// - Think: "what would make a plant engineer click this?"
// =============================================================================

// ── Your company details — used in JSON-LD on every page ─────────────────────
// UPDATE THESE before deploying. The placeholders will not cause errors
// but they reduce the quality of your structured data.
export const SITE = {
  name:        'Preaumate',
  url:         'https://www.preaumate.nl',
  logo:        'https://www.preaumate.nl/logo.png',  // ← update with real logo URL
  email:       'contact@preaumate.nl',               // ← update with real email
  //phone:       '+31000000000',                       // ← update with real phone
  kvk:         '00000000',                           // ← update with real KVK number
  vatNumber:   'NL000000000B00',                     // ← update with real VAT number
  foundingYear: 2026,                                // ← update with real year
  address: {
    streetAddress:   '',                             // ← optional, add if comfortable
    addressLocality: 'Netherlands',
    addressCountry:  'NL',
  },
  // Countries where you actively operate — used in structured data
  areaServed: ['NL', 'DE', 'BE', 'FR', 'MX', 'CO', 'BR', 'ES'],
  // Your LinkedIn company page URL
  linkedIn: 'https://www.linkedin.com/company/preaumate', // ← update with real URL
};


// ── Organisation JSON-LD schema ───────────────────────────────────────────────
// This is the "business card" you hand to Google.
// Included automatically on every page via SEOHead.
export function getOrganizationSchema() {
  return {
    '@context':    'https://schema.org',
    '@type':       'ProfessionalService',
    name:          SITE.name,
    url:           SITE.url,
    logo:          SITE.logo,
    email:         SITE.email,
    telephone:     SITE.phone,
    foundingDate:  String(SITE.foundingYear),
    description:   'Industrial automation engineering — PLC programming, SCADA development, industrial IoT, robotics integration and AI-driven automation. Based in Netherlands, operating across Europe and Latin America.',
    address: {
      '@type':           'PostalAddress',
      addressLocality:   SITE.address.addressLocality,
      addressCountry:    SITE.address.addressCountry,
    },
    areaServed: SITE.areaServed,
    // What Google should understand you know about
    knowsAbout: [
      'PLC Programming',
      'SCADA Development',
      'Industrial IoT',
      'Robotics Integration',
      'Industrial Automation',
      'Siemens TIA Portal',
      'Rockwell Studio 5000',
      'CoDeSys',
      'OPC UA',
      'MQTT',
      'Industry 4.0',
      'Legacy System Modernisation',
    ],
    sameAs: [
      SITE.linkedIn,
    ],
  };
}

// ── Service page JSON-LD schema ───────────────────────────────────────────────
// Used on individual service pages to tell Google exactly what the page is about.
export function getServiceSchema(name, description, pageUrl) {
  return {
    '@context':   'https://schema.org',
    '@type':      'Service',
    name,
    description,
    url:          pageUrl,
    provider: {
      '@type': 'Organization',
      name:    SITE.name,
      url:     SITE.url,
    },
    areaServed: SITE.areaServed,
    serviceType: name,
  };
}

// ── Breadcrumb JSON-LD schema ─────────────────────────────────────────────────
// Shows the page path in Google results: Preaumate > Services > PLC Programming
// Pass an array like: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]
export function getBreadcrumbSchema(items) {
  return {
    '@context':        'https://schema.org',
    '@type':           'BreadcrumbList',
    itemListElement:   items.map((item, index) => ({
      '@type':    'ListItem',
      position:   index + 1,
      name:       item.name,
      item:       SITE.url + item.url,
    })),
  };
}


// =============================================================================
// PAGE SEO DATA
// title        = shown as the blue link in Google results (50–60 chars ideal)
// description  = shown as the grey paragraph (140–160 chars ideal)
// jsonLd       = optional extra structured data for that specific page
// =============================================================================
export const seo = {

  // ── HOMEPAGE ──────────────────────────────────────────────────────────────
  home: {
    title:       'Preaumate — Industrial Automation Engineers | PLC · SCADA · IoT · Robotics',
    description: 'PLC programming, SCADA, industrial IoT and robotics by engineers with real factory-floor experience. 30+ years combined. Europe and Latin America.',
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  about: {
    title:       'About Preaumate — Industrial Automation Engineers | Netherlands & Mexico',
    description: 'Founded by engineers with hands-on factory experience. Preaumate delivers PLC, SCADA, IoT and robotics automation across Europe and Latin America.',
  },

  // ── BLOG ──────────────────────────────────────────────────────────────────
  blog: {
    title:       'Blog — Preaumate | Industrial Automation & Industry 4.0 Insights',
    description: 'Practical articles on PLC programming, SCADA, industrial IoT, robotics and AI from Preaumate automation engineers.',
  },

  // ── Q&A ───────────────────────────────────────────────────────────────────
  qa: {
    title:       'Q&A — Preaumate | Industrial Automation Questions Answered',
    description: 'Answers to common questions about PLC programming, SCADA, IoT integration, system modernisation and industrial cybersecurity.',
  },

  // ── PRIVACY ───────────────────────────────────────────────────────────────
  privacy: {
    title:       'Privacy Policy — Preaumate Industrial Automation',
    description: 'How Preaumate collects, uses and protects personal data. GDPR / AVG compliant. Last updated May 2026.',
  },

  // ── TERMS ─────────────────────────────────────────────────────────────────
  terms: {
    title:       'Terms & Conditions — Preaumate Industrial Automation',
    description: 'Terms and conditions for use of the Preaumate website and engagement of industrial automation engineering services.',
  },

  // ── SERVICE PAGES ─────────────────────────────────────────────────────────
  // These are your most important pages for search traffic.
  // Each slug must exactly match the URL in your router and in sitemap.xml.
  services: {

    'plc-programming': {
      title:       'PLC Programming | Siemens · Rockwell · CoDeSys — Preaumate',
      description: 'Industrial PLC programming for Siemens TIA Portal, Rockwell Studio 5000 and CoDeSys. Migrations, commissioning, troubleshooting and remote diagnostics across Europe and Latin America.',
      jsonLd: getServiceSchema(
        'PLC Programming',
        'Industrial PLC programming for Siemens, Rockwell and CoDeSys. Migrations, commissioning, troubleshooting and remote diagnostics.',
        SITE.url + '/services/plc-programming',
      ),
      breadcrumbs: getBreadcrumbSchema([
        { name: 'Home',     url: '/' },
        { name: 'Services', url: '/services/plc-programming' },
        { name: 'PLC Programming', url: '/services/plc-programming' },
      ]),
    },

    'scada-hmi': {
      title:       'SCADA & HMI Development | Production Visibility — Preaumate',
      description: 'SCADA and HMI systems for factory monitoring, alarm handling and production dashboards. WinCC, FactoryTalk and custom solutions. Remote monitoring capability.',
      jsonLd: getServiceSchema(
        'SCADA & HMI Development',
        'SCADA and HMI systems for production monitoring, alarm rationalisation and remote factory visibility.',
        SITE.url + '/services/scada-hmi',
      ),
      breadcrumbs: getBreadcrumbSchema([
        { name: 'Home',     url: '/' },
        { name: 'SCADA & HMI', url: '/services/scada-hmi' },
      ]),
    },

    'industrial-iot': {
      title:       'Industrial IoT Integration | OPC UA · MQTT · Machine Data — Preaumate',
      description: 'Connect factory machines and PLCs to modern data systems using OPC UA, MQTT and industrial gateways. Edge computing, cloud connectivity and production data pipelines.',
      jsonLd: getServiceSchema(
        'Industrial IoT Integration',
        'Machine connectivity using OPC UA, MQTT and industrial gateways. Edge computing and cloud integration for production data.',
        SITE.url + '/services/industrial-iot',
      ),
      breadcrumbs: getBreadcrumbSchema([
        { name: 'Home',          url: '/' },
        { name: 'Industrial IoT', url: '/services/industrial-iot' },
      ]),
    },

    'robotics-integration': {
      title:       'Robotics Integration | Industrial Robot Programming — Preaumate',
      description: 'Robotic cell commissioning, safety integration and motion programming for industrial production. Reliability and long-term maintainability focused.',
      jsonLd: getServiceSchema(
        'Robotics Integration',
        'Industrial robot programming, safety system integration and robotic cell commissioning.',
        SITE.url + '/services/robotics-integration',
      ),
      breadcrumbs: getBreadcrumbSchema([
        { name: 'Home',               url: '/' },
        { name: 'Robotics Integration', url: '/services/robotics-integration' },
      ]),
    },

    'industrial-ai': {
      title:       'Industrial AI | Predictive Maintenance & Anomaly Detection — Preaumate',
      description: 'Practical AI for manufacturers — anomaly detection, predictive maintenance and production analytics built on real operational data for measurable results.',
      jsonLd: getServiceSchema(
        'Industrial AI',
        'Anomaly detection, predictive maintenance and production analytics using real industrial data.',
        SITE.url + '/services/industrial-ai',
      ),
      breadcrumbs: getBreadcrumbSchema([
        { name: 'Home',         url: '/' },
        { name: 'Industrial AI', url: '/services/industrial-ai' },
      ]),
    },

    'legacy-modernization': {
      title:       'Legacy PLC & SCADA Modernisation | System Migration — Preaumate',
      description: 'Migrate end-of-life PLC and SCADA systems to modern platforms without disrupting production. Siemens S5/S7-300, legacy HMI and outdated SCADA specialists.',
      jsonLd: getServiceSchema(
        'Legacy System Modernisation',
        'PLC and SCADA migration from end-of-life platforms. Minimal production disruption. Siemens, Rockwell and CoDeSys specialists.',
        SITE.url + '/services/legacy-modernization',
      ),
      breadcrumbs: getBreadcrumbSchema([
        { name: 'Home',                  url: '/' },
        { name: 'Legacy Modernisation',  url: '/services/legacy-modernization' },
      ]),
    },

    // ── Old slugs kept so existing Google links do not break ────────────────
    // These were your original service pages. Do not delete them — Google
    // may still have them indexed. They will just show with basic titles.
    'robotic-process-automation': {
      title:       'Robotics & Process Automation — Preaumate',
      description: 'Industrial robot programming and process automation for manufacturing environments.',
    },
    'assembly-automation': {
      title:       'Assembly Automation — Preaumate',
      description: 'Automated assembly solutions from single-station cells to multi-station lines.',
    },
    'material-handling': {
      title:       'Material Handling Automation — Preaumate',
      description: 'Conveyor systems, AGV integration and palletising automation for manufacturing.',
    },
    'quality-control': {
      title:       'Quality Control Automation — Preaumate',
      description: 'Machine vision inspection, SPC monitoring and end-of-line testing automation.',
    },
  },

};
