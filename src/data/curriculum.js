// ============================================================
// src/data/curriculum.js  —  Theo Rietveld CV Static Data
// ============================================================
// This file holds all the structural data for the CV page:
// company names, dates, locations, technical skills,
// certifications and contact details.
//
// These values do NOT change between languages — they are
// proper nouns, dates and technical terms.
//
// The translated text (descriptions, role titles, labels)
// lives in i18n.js under the "curriculum" key.
//
// HOW TO UPDATE:
//   Add a new job → add an entry to roles[]
//   Add a certification → add to certifications[]
//   Add a technical skill → add to the relevant category
// ============================================================

export const curriculumData = {

  // ── Personal details ─────────────────────────────────────
  name:       'Theo Rietveld',
  fullName:   'Theodorus Johan Rietveld',
  location:   'Oudewater, Netherlands',
  phone:      '+31 6 5272 9769',
  email:      'tjrietveld@gmail.com',
  linkedIn:   'https://linkedin.com/in/ronaldtjrietveld',

  // ── Work history ─────────────────────────────────────────
  // Ordered newest to oldest.
  // The i18n key "roleKey" maps to t.curriculum.roles[roleKey]
  // for translated role title, description and highlights.
  roles: [
    {
      roleKey:  'preaumate',
      company:  'Preaumate',
      period:   '2025 – Present',
      location: 'Oudewater, Netherlands',
      current:  true,
    },
    {
      roleKey:  'kiremko',
      company:  'Kiremko b.v.',
      period:   '2024 – 2025',
      location: 'Montfoort, Netherlands',
      current:  false,
    },
    {
      roleKey:  'gooiland',
      company:  'Gooiland Elektro b.v.',
      period:   '2012 – 2024',
      location: 'Hilversum, Netherlands',
      current:  false,
    },
    {
      roleKey:  'vandenPol',
      company:  'Van den Pol Elektrotechniek B.V.',
      period:   '2007 – 2012',
      location: 'Montfoort, Netherlands',
      current:  false,
    },
    {
      roleKey:  'elero',
      company:  'Elero Drives & Home Automation',
      period:   '2001 – 2007',
      location: 'Waddinxveen, Netherlands',
      current:  false,
    },
  ],

  // ── Earlier roles (shown compact, no description) ─────────
  earlierRoles: [
    { company: 'ETIB van der Wind',          role: 'Software Engineer',          period: '2001',        location: 'Woerden, Netherlands'   },
    { company: 'Velegro B.V. Elektrotechniek', role: 'Electrician & Home Automation', period: '1993 – 2001', location: 'Oudewater, Netherlands' },
  ],

  // ── Technical skills ─────────────────────────────────────
  // These names stay the same in every language.
  technicalCategories: [
    {
      titleKey: 'techPlc',     // maps to t.curriculum.techPlc
      items: [
        'Siemens Step 7 & TIA Portal',
        'Rockwell Studio 5000',
        'CoDeSys',
        'Beckhoff TwinCAT',
        'Schneider SoMachine / Expert',
        'Weidmüller U-Create',
        'Omron CX One',
      ],
    },
    {
      titleKey: 'techScada',
      items: [
        'Siemens WinCC',
        'Schneider Citect',
        'GE Cimplicity',
      ],
    },
    {
      titleKey: 'techSoftware',
      items: [
        'HTML5 / CSS / JavaScript',
        'C / C++',
        'Pascal / Basic / VBA',
        'MySQL',
        'OOP / SCL',
        'Java',
      ],
    },
    {
      titleKey: 'techProtocols',
      items: [
        'KNX / ETS',
        'OPC UA',
        'MQTT',
        'Modbus TCP',
        'Profinet',
        'EtherNet/IP',
      ],
    },
  ],

  // ── Education ────────────────────────────────────────────
  education: {
    institution: 'Hogeschool van Utrecht',
    period:      '1998 – 2001',
    location:    'Utrecht, Netherlands',
  },

  // ── Certifications ───────────────────────────────────────
  // certKey maps to t.curriculum.certifications[certKey]
  // for the translated title and detail text.
  certifications: [
    { certKey: 'siemens'  },
    { certKey: 'offshore' },
    { certKey: 'bosiet'   },
  ],

  // ── Languages spoken ─────────────────────────────────────
  // langKey maps to t.curriculum.spokenLanguages[langKey]
  spokenLanguages: [
    { langKey: 'dutch',   flag: '🇳🇱', code: 'NL' },
    { langKey: 'english', flag: '🇬🇧', code: 'EN' },
    { langKey: 'spanish', flag: '🇪🇸', code: 'ES' },
    { langKey: 'german',  flag: '🇩🇪', code: 'DE' },
  ],
};