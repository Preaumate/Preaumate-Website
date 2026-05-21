// =============================================================================
// i18n_additions.js — PREAUMATE REBUILD 2026
// =============================================================================
//
// HOW TO USE THIS FILE
// ─────────────────────────────────────────────────────────────────────────────
// This file contains TWO things:
//
// PART A — REPLACE EXISTING KEYS
//   Search for these keys inside each language block in src/lib/i18n.js
//   and replace the current values with the ones below.
//   Keys changed: hero, services.title/subtitle/items, contactSection,
//   footer.description, howWeWork.steps
//
// PART B — ADD NEW KEYS
//   Paste the new top-level keys (trust, problems, technologies, industries,
//   projectProof, founders) into the SAME language block — anywhere inside
//   the { } of the language object (e.g. just before the closing brace of en:{}).
//
// The language blocks in i18n.js look like:
//   export const translations = {
//     en: { nav: {...}, hero: {...}, ... },   ← PART A: replace hero etc. here
//     nl: { ... },                            ← PART B: add new keys here too
//     ...
//   };
//
// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT PLACEHOLDERS
// ─────────────────────────────────────────────────────────────────────────────
// Strings marked [PLACEHOLDER] MUST be replaced with real content before
// the section is shown to visitors.  The components hide placeholder text
// visually (italic grey) but it is still visible if you inspect the DOM.
// =============================================================================


// ─────────────────────────────────────────────────────────────────────────────
// ██████████████████████  ENGLISH (en)  ██████████████████████████████████████
// ─────────────────────────────────────────────────────────────────────────────

// ── PART A — Replace these keys inside  en: { }  in i18n.js ─────────────────

const en_REPLACE = {

  hero: {
    title: "Industrial Automation Experts — Factory Floor to Data Layer",
    subtitle:
      "Preaumate helps manufacturers modernize industrial systems through PLC programming, robotics, SCADA, industrial IoT and AI-driven automation. Built by engineers with real factory-floor experience in Europe and Latin America.",
    cta:  "Talk to an Engineer",
    cta2: "View Our Services",
    trustBadges: [
      "30+ years combined experience",
      "Europe & Latin America",
      "PLC · SCADA · Robotics · IoT",
      "Siemens · Rockwell · CoDeSys",
    ],
  },

  services: {
    badge:    "WHAT WE DO",
    title:    "Industrial Automation Services",
    subtitle:
      "From PLC programming to industrial IoT and AI — practical engineering solutions for manufacturers.",
    items: [
      {
        title:       "PLC Programming",
        description:
          "We develop, migrate and troubleshoot PLC systems for industrial production environments. Supported platforms include Siemens, Rockwell and CoDeSys-based controllers.",
        bullets: [
          "PLC migrations and upgrades",
          "Machine commissioning",
          "Process optimization",
          "Remote diagnostics",
          "Troubleshooting support",
        ],
        learnMore: "Learn more",
      },
      {
        title:       "SCADA & HMI Development",
        description:
          "We build operator interfaces and SCADA systems that improve visibility, diagnostics and production monitoring across the factory floor.",
        bullets: [
          "Production dashboards",
          "Alarm handling",
          "Historian integration",
          "Remote monitoring",
          "Operator workflow optimization",
        ],
        learnMore: "Learn more",
      },
      {
        title:       "Industrial IoT",
        description:
          "We connect machines, PLCs and industrial equipment to modern data systems using secure industrial communication protocols.",
        bullets: [
          "OPC UA integration",
          "MQTT infrastructure",
          "Machine data collection",
          "Cloud and edge connectivity",
          "Industrial gateway setup",
        ],
        learnMore: "Learn more",
      },
      {
        title:       "Robotics Integration",
        description:
          "We integrate robotic systems into production environments with a focus on reliability, safety and long-term maintainability.",
        bullets: [
          "Robotic cell commissioning",
          "Motion optimization",
          "Safety system integration",
          "Process synchronization",
          "Production support",
        ],
        learnMore: "Learn more",
      },
      {
        title:       "Industrial AI",
        description:
          "We help manufacturers identify and implement practical AI opportunities using production data, machine diagnostics and operational insights.",
        bullets: [
          "Anomaly detection",
          "Predictive maintenance",
          "Production analytics",
          "AI pilot projects",
          "Operational reporting",
        ],
        learnMore: "Learn more",
      },
    ],
  },

  contactSection: {
    badge:    "GET IN TOUCH",
    title:    "Ready to Solve Your Production Challenges?",
    subtitle:
      "Talk directly with an engineer about your operational problems. No sales scripts — just a technical conversation.",
  },

  footer: {
    tagline:          "INDUSTRIAL AUTOMATION",
    description:
      "Practical industrial automation engineering — connecting factory systems, machine data and production intelligence.",
    navHeading:       "NAVIGATION",
    resourcesHeading: "RESOURCES",
    contactHeading:   "CONTACT",
    navLinks:         ["Home", "About", "Services", "Contact"],
    resourceLinks:    ["Blog", "Q&A", "Privacy Policy", "Terms & Conditions"],
    rights:           "All rights reserved.",
    privacyPolicy:    "Privacy Policy",
    terms:            "Terms & Conditions",
  },

}; // end en_REPLACE


// ── PART B — Add these new keys inside  en: { }  in i18n.js ─────────────────

const en_ADD = {

  trust: {
    badge:    "BUILT BY ENGINEERS",
    title:    "Real Factory-Floor Experience",
    subtitle:
      "Preaumate was founded by automation engineers who have spent years solving problems directly on production floors. We understand the pressure of downtime, integration challenges, legacy equipment and production reliability — because we have worked inside industrial environments ourselves.",
    cards: [
      {
        title:       "Factory-Floor Experience",
        description:
          "Real-world industrial commissioning, troubleshooting and integration experience across multiple production environments and sectors.",
      },
      {
        title:       "Cross-Border Engineering",
        description:
          "Engineering support across Europe and Latin America, with remote capabilities that cover all time zones.",
      },
      {
        title:       "Modernization Focused",
        description:
          "Connecting legacy industrial systems with modern data and automation platforms — step by step, without unnecessary complexity.",
      },
      {
        title:       "Practical Implementation",
        description:
          "Solutions designed for operational reliability, maintainability and production continuity. Not theoretical frameworks — working systems.",
      },
    ],
  },

  problems: {
    badge:    "PROBLEMS WE SOLVE",
    title:    "Industrial Challenges We Address",
    subtitle:
      "We work with manufacturers facing real operational problems — the kind that slow production, cause downtime and make systems hard to manage.",
    cards: [
      {
        title:       "Legacy PLC Systems",
        description:
          "Migrating outdated PLC systems to modern platforms without disrupting production schedules or losing critical process knowledge.",
      },
      {
        title:       "Missing Production Visibility",
        description:
          "Collecting and visualizing machine data across the factory floor to support better operational decisions and faster diagnostics.",
      },
      {
        title:       "Difficult System Integrations",
        description:
          "Connecting PLCs, SCADA, MES, ERP and IoT systems into a reliable, unified data architecture that actually works in production.",
      },
      {
        title:       "Robotics Implementation",
        description:
          "Programming and integrating robotic systems into production environments with a focus on reliability, safety and maintainability.",
      },
      {
        title:       "Downtime & Troubleshooting",
        description:
          "Diagnosing recurring automation failures, improving system reliability and reducing unplanned downtime across the production line.",
      },
      {
        title:       "Industrial AI Adoption",
        description:
          "Applying AI where it creates measurable operational value — anomaly detection, predictive maintenance and production analytics.",
      },
    ],
  },

  technologies: {
    badge:    "PLATFORMS & TOOLS",
    title:    "Technologies We Work With",
    subtitle:
      "We work with the industrial platforms and tools your production environment already uses — no vendor lock-in, no unnecessary replacements.",
    categories: [
      {
        title: "Automation",
        items: [
          "Siemens TIA Portal",
          "Rockwell Studio 5000",
          "CoDeSys",
          "WinCC",
          "FactoryTalk",
        ],
      },
      {
        title: "Industrial Communication",
        items: [
          "OPC UA",
          "MQTT",
          "Modbus TCP",
          "Profinet",
          "EtherNet/IP",
        ],
      },
      {
        title: "Data & Software",
        items: [
          "Node-RED",
          "Python",
          "SQL",
          "REST APIs",
          "Edge Gateways",
        ],
      },
      {
        title: "Infrastructure",
        items: [
          "Industrial Networking",
          "Remote Access",
          "Virtualization",
          "Cloud Integration",
          "Industrial PCs",
        ],
      },
    ],
  },

  industries: {
    badge:    "INDUSTRIES",
    title:    "Industries We Support",
    subtitle:
      "We have hands-on experience across a wide range of industrial sectors — from food production lines to machine builders.",
    items: [
      { title: "Manufacturing" },
      { title: "Packaging" },
      { title: "Food & Beverage" },
      { title: "Automotive" },
      { title: "Warehousing & Logistics" },
      { title: "Energy & Utilities" },
      { title: "Machine Builders" },
      { title: "Industrial Infrastructure" },
    ],
  },

  projectProof: {
    badge:        "EXAMPLE PROJECTS",
    title:        "Industrial Projects",
    subtitle:
      "A selection of the types of challenges we have solved. Specific case studies and references available on request.",
    resultsLabel: "Results",
    note:         "Client details kept confidential on request. Contact us to discuss references relevant to your sector.",
    projects: [
      {
        title:   "PLC Migration for Legacy Production System",
        // ← REPLACE this with a real project summary (2–4 sentences)
        summary:
          "[ADD PROJECT SUMMARY — describe the production environment, the problem that triggered the migration, what was done and what systems were involved. Keep it factual and specific. Anonymize client name if needed.]",
        results: [
          "Reduced unplanned downtime",
          "Improved remote diagnostics",
          "Modernized maintainability",
        ],
        tech: ["Siemens TIA Portal", "HMI", "OPC UA"],
      },
      {
        title:   "Factory Data Collection & Monitoring System",
        summary:
          "[ADD PROJECT SUMMARY — describe the factory, the data challenge (e.g. no visibility into machine output), and what integration approach was used. Mention number of machines or lines if possible.]",
        results: [
          "Unified machine visibility",
          "Centralized production monitoring",
          "Remote diagnostics enabled",
        ],
        tech: ["MQTT", "Node-RED", "SQL", "Industrial IoT"],
      },
      {
        title:   "Robotic Cell Integration",
        summary:
          "[ADD PROJECT SUMMARY — describe the robotic cell context, what production step it handles, integration scope with existing PLC/SCADA and any safety considerations.]",
        results: [
          "Increased production throughput",
          "Improved repeatability",
          "Reduced manual handling",
        ],
        tech: ["Robotics", "PLC", "Safety Systems"],
      },
    ],
  },

  founders: {
    badge:               "MEET THE TEAM",
    title:               "The Engineers Behind Preaumate",
    subtitle:
      "Preaumate was founded by engineers with hands-on experience in industrial automation, system integration and factory operations across Europe and Latin America.",
    specializationsLabel: "Specialized in",
    industriesLabel:      "Worked across",
    linkedinLabel:        "View LinkedIn",
    founders: [
      {
        // ← REPLACE all [PLACEHOLDER] values with real information
        name:            "[YOUR FULL NAME]",
        role:            "Automation Engineer",
        location:        "Netherlands",
        years:           "20+ years of industrial automation experience across multiple production sectors.",
        bio:             "[2–3 sentences about your background, what types of systems you have worked on, and what drives your approach to engineering.]",
        photoUrl:        "",  // ← Set to "/images/founder1.jpg" once you have a photo
        specializations: [
          "[e.g. Siemens PLC programming]",
          "[e.g. SCADA & HMI development]",
          "[e.g. System integration]",
        ],
        industries: [
          "[e.g. Food & Beverage]",
          "[e.g. Packaging]",
          "[e.g. Water treatment]",
        ],
        linkedin: "#",  // ← Replace with your real LinkedIn URL
      },
      {
        name:            "[YOUR FULL NAME]",
        role:            "Automation & Integration Engineer",
        location:        "Monterrey, Mexico",
        years:           "10+ years of industrial systems and integration experience.",
        bio:             "[2–3 sentences about your background, the types of automation work you have done, and what your engineering focus is.]",
        photoUrl:        "",  // ← Set to "/images/founder2.jpg" once you have a photo
        specializations: [
          "[e.g. Industrial IoT & connectivity]",
          "[e.g. Rockwell / CoDeSys programming]",
          "[e.g. Machine commissioning]",
        ],
        industries: [
          "[e.g. Automotive]",
          "[e.g. Logistics]",
          "[e.g. Manufacturing]",
        ],
        linkedin: "#",  // ← Replace with your real LinkedIn URL
      },
    ],
  },

}; // end en_ADD


// ─────────────────────────────────────────────────────────────────────────────
// ██████████████████████  NEDERLANDS (nl)  ████████████████████████████████████
// ─────────────────────────────────────────────────────────────────────────────

const nl_REPLACE = {

  hero: {
    title:    "Industriële Automatisering — Van Fabrieksvloer tot Datalaag",
    subtitle:
      "Preaumate helpt fabrikanten industriële systemen te moderniseren via PLC-programmering, robotica, SCADA, industriële IoT en AI-gestuurde automatisering. Gebouwd door ingenieurs met echte fabrieksvloer ervaring in Europa en Latijns-Amerika.",
    cta:  "Praat met een Ingenieur",
    cta2: "Bekijk Onze Diensten",
    trustBadges: [
      "30+ jaar gecombineerde ervaring",
      "Europa & Latijns-Amerika",
      "PLC · SCADA · Robotica · IoT",
      "Siemens · Rockwell · CoDeSys",
    ],
  },

  services: {
    badge:    "WAT WE DOEN",
    title:    "Industriële Automatiseringsdiensten",
    subtitle:
      "Van PLC-programmering tot industriële IoT en AI — praktische engineeringsoplossingen voor fabrikanten.",
    items: [
      {
        title:       "PLC-programmering",
        description:
          "Wij ontwikkelen, migreren en troubleshooten PLC-systemen voor industriële productieomgevingen. Ondersteunde platforms: Siemens, Rockwell en CoDeSys.",
        bullets: [
          "PLC-migraties en upgrades",
          "Machine inbedrijfstelling",
          "Procesoptimalisatie",
          "Remote diagnostiek",
          "Storingsanalyse",
        ],
        learnMore: "Meer informatie",
      },
      {
        title:       "SCADA & HMI Ontwikkeling",
        description:
          "Wij bouwen operatorinterfaces en SCADA-systemen die de zichtbaarheid, diagnostiek en productiemonitoring verbeteren.",
        bullets: [
          "Productiedashboards",
          "Alarmbeheer",
          "Historian integratie",
          "Remote monitoring",
          "Operator workflow optimalisatie",
        ],
        learnMore: "Meer informatie",
      },
      {
        title:       "Industriële IoT",
        description:
          "Wij verbinden machines, PLC's en industriële apparatuur met moderne datasystemen via veilige industriële communicatieprotocollen.",
        bullets: [
          "OPC UA integratie",
          "MQTT infrastructuur",
          "Machinedata verzameling",
          "Cloud en edge connectiviteit",
          "Industriële gateway configuratie",
        ],
        learnMore: "Meer informatie",
      },
      {
        title:       "Robotica Integratie",
        description:
          "Wij integreren robotsystemen in productieomgevingen met focus op betrouwbaarheid, veiligheid en onderhoudbaarheid op lange termijn.",
        bullets: [
          "Robotcel inbedrijfstelling",
          "Bewegingsoptimalisatie",
          "Veiligheidssysteem integratie",
          "Processynchronisatie",
          "Productieondersteuning",
        ],
        learnMore: "Meer informatie",
      },
      {
        title:       "Industriële AI",
        description:
          "Wij helpen fabrikanten praktische AI-kansen te identificeren en te implementeren op basis van productiedata en machineanalyses.",
        bullets: [
          "Anomaliedetectie",
          "Voorspellend onderhoud",
          "Productieanalyses",
          "AI pilotprojecten",
          "Operationele rapportage",
        ],
        learnMore: "Meer informatie",
      },
    ],
  },

  contactSection: {
    badge:    "CONTACT",
    title:    "Klaar om Uw Productie-uitdagingen Op te Lossen?",
    subtitle:
      "Praat rechtstreeks met een ingenieur over uw operationele problemen. Geen verkoopgesprekken — gewoon een technisch gesprek.",
  },

  footer: {
    tagline:          "INDUSTRIËLE AUTOMATISERING",
    description:
      "Praktische industriële automatiserings­engineering — fabriekssystemen, machinedata en productie-intelligentie verbonden.",
    navHeading:       "NAVIGATIE",
    resourcesHeading: "INFORMATIE",
    contactHeading:   "CONTACT",
    navLinks:         ["Home", "Over ons", "Diensten", "Contact"],
    resourceLinks:    ["Blog", "V&A", "Privacybeleid", "Algemene Voorwaarden"],
    rights:           "Alle rechten voorbehouden.",
    privacyPolicy:    "Privacybeleid",
    terms:            "Algemene Voorwaarden",
  },

};

const nl_ADD = {

  trust: {
    badge:    "GEBOUWD DOOR INGENIEURS",
    title:    "Echte Fabrieksvloer Ervaring",
    subtitle:
      "Preaumate is opgericht door automatiseringsingenieurs die jarenlang problemen direct op productievloeren hebben opgelost. Wij begrijpen de druk van stilstand, integratie-uitdagingen, verouderde apparatuur en productiereliabiliteit — omdat wij zelf in industriële omgevingen hebben gewerkt.",
    cards: [
      {
        title:       "Fabrieksvloer Ervaring",
        description:
          "Praktijkgerichte industriële inbedrijfstelling, probleemoplossing en integratie-ervaring in meerdere productieomgevingen en sectoren.",
      },
      {
        title:       "Grensoverschrijdende Engineering",
        description:
          "Engineering ondersteuning in Europa en Latijns-Amerika, met remote mogelijkheden die alle tijdzones bestrijken.",
      },
      {
        title:       "Gericht op Modernisering",
        description:
          "Het verbinden van verouderde industriële systemen met moderne data- en automatiseringsplatforms — stap voor stap, zonder onnodige complexiteit.",
      },
      {
        title:       "Praktische Implementatie",
        description:
          "Oplossingen ontworpen voor operationele betrouwbaarheid, onderhoudbaarheid en productiecontinuïteit. Geen theoretische kaders — werkende systemen.",
      },
    ],
  },

  problems: {
    badge:    "PROBLEMEN DIE WE OPLOSSEN",
    title:    "Industriële Uitdagingen Die Wij Aanpakken",
    subtitle:
      "Wij werken met fabrikanten die te maken hebben met echte operationele problemen — het soort dat productie vertraagt, stilstand veroorzaakt en systemen moeilijk beheersbaar maakt.",
    cards: [
      {
        title:       "Verouderde PLC-systemen",
        description:
          "Migratie van verouderde PLC-systemen naar moderne platforms zonder productieschema's te verstoren of kritische proceskennis te verliezen.",
      },
      {
        title:       "Ontbrekende Productievisibiliteit",
        description:
          "Machinedata verzamelen en visualiseren over de gehele fabrieksvloer voor betere operationele beslissingen en snellere diagnostiek.",
      },
      {
        title:       "Moeilijke Systeemintegraties",
        description:
          "PLC's, SCADA, MES, ERP en IoT-systemen verbinden tot een betrouwbare, uniforme data-architectuur die daadwerkelijk werkt in productie.",
      },
      {
        title:       "Robotica-implementatie",
        description:
          "Robotsystemen programmeren en integreren in productieomgevingen met focus op betrouwbaarheid, veiligheid en onderhoudbaarheid.",
      },
      {
        title:       "Uitval & Probleemoplossing",
        description:
          "Terugkerende automatiseringsfouten diagnosticeren, systeembetrouwbaarheid verbeteren en ongeplande stilstand verminderen.",
      },
      {
        title:       "Industriële AI-adoptie",
        description:
          "AI toepassen waar het meetbare operationele waarde creëert — anomaliedetectie, voorspellend onderhoud en productieanalyses.",
      },
    ],
  },

  technologies: {
    badge:    "PLATFORMS & TOOLS",
    title:    "Technologieën Waarmee We Werken",
    subtitle:
      "Wij werken met de industriële platforms en tools die uw productieomgeving al gebruikt — geen vendor lock-in, geen onnodige vervangingen.",
    categories: [
      {
        title: "Automatisering",
        items: ["Siemens TIA Portal", "Rockwell Studio 5000", "CoDeSys", "WinCC", "FactoryTalk"],
      },
      {
        title: "Industriële Communicatie",
        items: ["OPC UA", "MQTT", "Modbus TCP", "Profinet", "EtherNet/IP"],
      },
      {
        title: "Data & Software",
        items: ["Node-RED", "Python", "SQL", "REST API's", "Edge Gateways"],
      },
      {
        title: "Infrastructuur",
        items: ["Industriële Netwerken", "Remote Toegang", "Virtualisatie", "Cloud Integratie", "Industriële PC's"],
      },
    ],
  },

  industries: {
    badge:    "SECTOREN",
    title:    "Sectoren Die Wij Bedienen",
    subtitle:
      "Wij hebben praktijkervaring in een breed scala aan industriële sectoren — van voedingsproductielijnen tot machinebouwers.",
    items: [
      { title: "Productie" },
      { title: "Verpakking" },
      { title: "Voeding & Dranken" },
      { title: "Automotive" },
      { title: "Opslag & Logistiek" },
      { title: "Energie & Nutsvoorzieningen" },
      { title: "Machinebouwers" },
      { title: "Industriële Infrastructuur" },
    ],
  },

  projectProof: {
    badge:        "VOORBEELDPROJECTEN",
    title:        "Industriële Projecten",
    subtitle:
      "Een selectie van de soorten uitdagingen die wij hebben opgelost. Specifieke casestudies en referenties beschikbaar op verzoek.",
    resultsLabel: "Resultaten",
    note:         "Klantgegevens worden op verzoek vertrouwelijk behandeld. Neem contact op om referenties te bespreken die relevant zijn voor uw sector.",
    projects: [
      {
        title:   "PLC-migratie voor Verouderd Productiesysteem",
        summary: "[VOEG PROJECTBESCHRIJVING TOE — beschrijf de productieomgeving, het probleem dat de migratie aanleiding gaf, wat er is gedaan en welke systemen betrokken waren.]",
        results: ["Minder ongeplande stilstand", "Verbeterde remote diagnostiek", "Modernere onderhoudbaarheid"],
        tech:    ["Siemens TIA Portal", "HMI", "OPC UA"],
      },
      {
        title:   "Fabrieks Data Verzameling & Monitoringsysteem",
        summary: "[VOEG PROJECTBESCHRIJVING TOE — beschrijf de fabriek, de data-uitdaging en de integratiemethode.]",
        results: ["Uniforme machinevisibiliteit", "Gecentraliseerde productiemonitoring", "Remote diagnostiek ingeschakeld"],
        tech:    ["MQTT", "Node-RED", "SQL", "Industriële IoT"],
      },
      {
        title:   "Robotcel Integratie",
        summary: "[VOEG PROJECTBESCHRIJVING TOE — beschrijf de robotcel, de productiecontext en de integratiescope.]",
        results: ["Hogere productiedoorvoer", "Verbeterde herhaalbaarheid", "Minder handmatige handelingen"],
        tech:    ["Robotica", "PLC", "Veiligheidssystemen"],
      },
    ],
  },

  founders: {
    badge:               "ONS TEAM",
    title:               "De Ingenieurs Achter Preaumate",
    subtitle:
      "Preaumate is opgericht door ingenieurs met praktijkervaring in industriële automatisering, systeemintegratie en fabrieksoperaties in Europa en Latijns-Amerika.",
    specializationsLabel: "Gespecialiseerd in",
    industriesLabel:      "Werkervaring in",
    linkedinLabel:        "Bekijk LinkedIn",
    founders: [
      {
        name:            "[UW VOLLEDIGE NAAM]",
        role:            "Automatiseringsingenieur",
        location:        "Nederland",
        years:           "20+ jaar ervaring in industriële automatisering in meerdere productiesectoren.",
        bio:             "[2–3 zinnen over uw achtergrond, de systemen waaraan u heeft gewerkt en uw aanpak.]",
        photoUrl:        "",
        specializations: ["[bv. Siemens PLC programmering]", "[bv. SCADA & HMI]", "[bv. Systeemintegratie]"],
        industries:      ["[bv. Voeding & Dranken]", "[bv. Verpakking]", "[bv. Waterbehandeling]"],
        linkedin:        "#",
      },
      {
        name:            "[UW VOLLEDIGE NAAM]",
        role:            "Automatiserings- & Integratie-ingenieur",
        location:        "Monterrey, Mexico",
        years:           "10+ jaar ervaring in industriële systemen en integratie.",
        bio:             "[2–3 zinnen over uw achtergrond en technische focus.]",
        photoUrl:        "",
        specializations: ["[bv. Industriële IoT]", "[bv. Rockwell / CoDeSys]", "[bv. Machine inbedrijfstelling]"],
        industries:      ["[bv. Automotive]", "[bv. Logistiek]", "[bv. Productie]"],
        linkedin:        "#",
      },
    ],
  },

};


// ─────────────────────────────────────────────────────────────────────────────
// ██████████████████████  ESPAÑOL (es)  ███████████████████████████████████████
// ─────────────────────────────────────────────────────────────────────────────

const es_REPLACE = {

  hero: {
    title:    "Expertos en Automatización Industrial — Del Piso de Planta a la Capa de Datos",
    subtitle:
      "Preaumate ayuda a los fabricantes a modernizar sus sistemas industriales mediante programación PLC, robótica, SCADA, IoT industrial y automatización con IA. Desarrollado por ingenieros con experiencia real en plantas industriales en Europa y América Latina.",
    cta:  "Habla con un Ingeniero",
    cta2: "Ver Nuestros Servicios",
    trustBadges: [
      "30+ años de experiencia combinada",
      "Europa y América Latina",
      "PLC · SCADA · Robótica · IoT",
      "Siemens · Rockwell · CoDeSys",
    ],
  },

  services: {
    badge:    "LO QUE HACEMOS",
    title:    "Servicios de Automatización Industrial",
    subtitle:
      "Desde programación PLC hasta IoT industrial e IA — soluciones de ingeniería práctica para fabricantes.",
    items: [
      {
        title:       "Programación PLC",
        description: "Desarrollamos, migramos y diagnosticamos sistemas PLC para entornos de producción industrial. Plataformas: Siemens, Rockwell y CoDeSys.",
        bullets:     ["Migraciones y actualizaciones PLC", "Puesta en marcha de máquinas", "Optimización de procesos", "Diagnóstico remoto", "Soporte de resolución de problemas"],
        learnMore:   "Más información",
      },
      {
        title:       "Desarrollo SCADA & HMI",
        description: "Construimos interfaces de operador y sistemas SCADA que mejoran la visibilidad, el diagnóstico y el monitoreo de producción.",
        bullets:     ["Paneles de producción", "Gestión de alarmas", "Integración con historian", "Monitoreo remoto", "Optimización del flujo de trabajo"],
        learnMore:   "Más información",
      },
      {
        title:       "IoT Industrial",
        description: "Conectamos máquinas, PLCs y equipos industriales a sistemas de datos modernos mediante protocolos de comunicación industrial seguros.",
        bullets:     ["Integración OPC UA", "Infraestructura MQTT", "Recolección de datos de máquinas", "Conectividad en la nube y en el borde", "Configuración de gateways"],
        learnMore:   "Más información",
      },
      {
        title:       "Integración de Robótica",
        description: "Integramos sistemas robóticos en entornos de producción con enfoque en confiabilidad, seguridad y mantenibilidad.",
        bullets:     ["Puesta en marcha de celdas robóticas", "Optimización de movimiento", "Integración de sistemas de seguridad", "Sincronización de procesos", "Soporte de producción"],
        learnMore:   "Más información",
      },
      {
        title:       "IA Industrial",
        description: "Ayudamos a los fabricantes a identificar e implementar oportunidades prácticas de IA usando datos de producción y diagnósticos de máquinas.",
        bullets:     ["Detección de anomalías", "Mantenimiento predictivo", "Analítica de producción", "Proyectos piloto de IA", "Informes operacionales"],
        learnMore:   "Más información",
      },
    ],
  },

  contactSection: {
    badge:    "CONTÁCTANOS",
    title:    "¿Listo para Resolver sus Desafíos de Producción?",
    subtitle: "Hable directamente con un ingeniero sobre sus problemas operativos. Sin scripts de ventas — solo una conversación técnica.",
  },

  footer: {
    tagline:          "AUTOMATIZACIÓN INDUSTRIAL",
    description:      "Ingeniería práctica de automatización industrial — conectando sistemas de planta, datos de máquinas e inteligencia de producción.",
    navHeading:       "NAVEGACIÓN",
    resourcesHeading: "RECURSOS",
    contactHeading:   "CONTACTO",
    navLinks:         ["Inicio", "Sobre nosotros", "Servicios", "Contacto"],
    resourceLinks:    ["Blog", "Preguntas", "Política de Privacidad", "Términos y Condiciones"],
    rights:           "Todos los derechos reservados.",
    privacyPolicy:    "Política de Privacidad",
    terms:            "Términos y Condiciones",
  },

};

const es_ADD = {

  trust: {
    badge:    "CONSTRUIDO POR INGENIEROS",
    title:    "Experiencia Real en Piso de Planta",
    subtitle: "Preaumate fue fundada por ingenieros de automatización que han pasado años resolviendo problemas directamente en plantas de producción. Entendemos la presión del tiempo de inactividad, los desafíos de integración, los equipos heredados y la confiabilidad de la producción.",
    cards: [
      { title: "Experiencia en Planta",          description: "Experiencia real en puesta en marcha, resolución de problemas e integración en múltiples entornos de producción y sectores." },
      { title: "Ingeniería Transfronteriza",     description: "Soporte de ingeniería en Europa y América Latina, con capacidades remotas que cubren todas las zonas horarias." },
      { title: "Enfocados en Modernización",     description: "Conectando sistemas industriales heredados con plataformas modernas de datos y automatización — paso a paso, sin complejidad innecesaria." },
      { title: "Implementación Práctica",        description: "Soluciones diseñadas para la confiabilidad operacional, mantenibilidad y continuidad de producción. No marcos teóricos — sistemas que funcionan." },
    ],
  },

  problems: {
    badge:    "PROBLEMAS QUE RESOLVEMOS",
    title:    "Desafíos Industriales que Abordamos",
    subtitle: "Trabajamos con fabricantes que enfrentan problemas operativos reales — del tipo que ralentiza la producción, causa tiempos de inactividad y dificulta la gestión.",
    cards: [
      { title: "Sistemas PLC Heredados",              description: "Migración de sistemas PLC obsoletos a plataformas modernas sin interrumpir los cronogramas de producción." },
      { title: "Falta de Visibilidad de Producción",  description: "Recolección y visualización de datos de máquinas en todo el piso de planta para mejores decisiones operativas." },
      { title: "Integraciones de Sistemas Difíciles", description: "Conexión de PLCs, SCADA, MES, ERP y sistemas IoT en una arquitectura de datos confiable y unificada." },
      { title: "Implementación de Robótica",          description: "Programación e integración de sistemas robóticos en entornos de producción con enfoque en confiabilidad y seguridad." },
      { title: "Tiempos de Inactividad y Diagnóstico",description: "Diagnóstico de fallas recurrentes de automatización y mejora de la confiabilidad del sistema." },
      { title: "Adopción de IA Industrial",           description: "Aplicación de IA donde crea valor operativo medible — detección de anomalías, mantenimiento predictivo y analítica." },
    ],
  },

  technologies: {
    badge:    "PLATAFORMAS Y HERRAMIENTAS",
    title:    "Tecnologías con las que Trabajamos",
    subtitle: "Trabajamos con las plataformas e instrumentos industriales que su entorno de producción ya utiliza.",
    categories: [
      { title: "Automatización",           items: ["Siemens TIA Portal", "Rockwell Studio 5000", "CoDeSys", "WinCC", "FactoryTalk"] },
      { title: "Comunicación Industrial",  items: ["OPC UA", "MQTT", "Modbus TCP", "Profinet", "EtherNet/IP"] },
      { title: "Datos y Software",         items: ["Node-RED", "Python", "SQL", "REST APIs", "Gateways de borde"] },
      { title: "Infraestructura",          items: ["Redes Industriales", "Acceso Remoto", "Virtualización", "Integración en la Nube", "PCs Industriales"] },
    ],
  },

  industries: {
    badge:    "INDUSTRIAS",
    title:    "Industrias que Apoyamos",
    subtitle: "Tenemos experiencia práctica en una amplia gama de sectores industriales.",
    items: [
      { title: "Manufactura" }, { title: "Empaque" }, { title: "Alimentos & Bebidas" },
      { title: "Automotriz" }, { title: "Almacenamiento & Logística" }, { title: "Energía & Utilities" },
      { title: "Constructores de Máquinas" }, { title: "Infraestructura Industrial" },
    ],
  },

  projectProof: {
    badge:        "PROYECTOS DE EJEMPLO",
    title:        "Proyectos Industriales",
    subtitle:     "Una selección de los tipos de desafíos que hemos resuelto. Estudios de caso específicos disponibles a solicitud.",
    resultsLabel: "Resultados",
    note:         "Detalles del cliente mantenidos confidenciales. Contáctenos para discutir referencias relevantes para su sector.",
    projects: [
      { title: "Migración PLC para Sistema de Producción Heredado",    summary: "[AGREGAR RESUMEN DEL PROYECTO]", results: ["Reducción de tiempo de inactividad", "Diagnóstico remoto mejorado", "Mayor facilidad de mantenimiento"], tech: ["Siemens TIA Portal", "HMI", "OPC UA"] },
      { title: "Sistema de Recolección y Monitoreo de Datos de Planta", summary: "[AGREGAR RESUMEN DEL PROYECTO]", results: ["Visibilidad unificada de máquinas",  "Monitoreo centralizado", "Diagnóstico remoto habilitado"], tech: ["MQTT", "Node-RED", "SQL", "IoT Industrial"] },
      { title: "Integración de Celda Robótica",                        summary: "[AGREGAR RESUMEN DEL PROYECTO]", results: ["Mayor throughput",               "Mejor repetibilidad",          "Manejo manual reducido"],         tech: ["Robótica", "PLC", "Sistemas de Seguridad"] },
    ],
  },

  founders: {
    badge:               "NUESTRO EQUIPO",
    title:               "Los Ingenieros Detrás de Preaumate",
    subtitle:            "Preaumate fue fundada por ingenieros con experiencia práctica en automatización industrial, integración de sistemas y operaciones de fábrica en Europa y América Latina.",
    specializationsLabel: "Especializado en",
    industriesLabel:      "Experiencia en",
    linkedinLabel:        "Ver LinkedIn",
    founders: [
      { name: "[SU NOMBRE COMPLETO]", role: "Ingeniero de Automatización",           location: "Países Bajos", years: "20+ años de experiencia en automatización industrial.", bio: "[2–3 oraciones sobre su trayectoria y enfoque.]", photoUrl: "", specializations: ["[ej. Programación PLC Siemens]", "[ej. SCADA & HMI]", "[ej. Integración]"], industries: ["[ej. Alimentos]", "[ej. Empaque]"], linkedin: "#" },
      { name: "[SU NOMBRE COMPLETO]", role: "Ingeniero de Automatización e Integración", location: "Monterrey, México", years: "10+ años de experiencia en sistemas industriales.", bio: "[2–3 oraciones sobre su trayectoria y enfoque.]", photoUrl: "", specializations: ["[ej. IoT Industrial]", "[ej. Rockwell/CoDeSys]", "[ej. Puesta en marcha]"], industries: ["[ej. Automotriz]", "[ej. Logística]"], linkedin: "#" },
    ],
  },

};


// ─────────────────────────────────────────────────────────────────────────────
// ██████████████████████  DEUTSCH (de)  ███████████████████████████████████████
// ─────────────────────────────────────────────────────────────────────────────

const de_REPLACE = {
  hero: {
    title:    "Industrielle Automatisierungsexperten — Von der Fabrikhalle bis zur Datenschicht",
    subtitle: "Preaumate hilft Herstellern, Industriesysteme zu modernisieren — durch SPS-Programmierung, Robotik, SCADA, Industrial IoT und KI-gesteuerte Automatisierung. Entwickelt von Ingenieuren mit echter Fabrikerfahrung in Europa und Lateinamerika.",
    cta:  "Mit einem Ingenieur sprechen",
    cta2: "Unsere Leistungen ansehen",
    trustBadges: ["30+ Jahre kombinierte Erfahrung", "Europa & Lateinamerika", "SPS · SCADA · Robotik · IoT", "Siemens · Rockwell · CoDeSys"],
  },
  services: {
    badge:    "WAS WIR TUN",
    title:    "Industrielle Automatisierungsleistungen",
    subtitle: "Von SPS-Programmierung bis Industrial IoT und KI — praktische Ingenieurlösungen für Hersteller.",
    items: [
      { title: "SPS-Programmierung",           description: "Wir entwickeln, migrieren und entstören SPS-Systeme für industrielle Produktionsumgebungen. Siemens, Rockwell und CoDeSys.", bullets: ["SPS-Migrationen", "Inbetriebnahme", "Prozessoptimierung", "Ferndiagnose", "Fehleranalyse"], learnMore: "Mehr erfahren" },
      { title: "SCADA & HMI-Entwicklung",      description: "Wir erstellen Bedieneroberflächen und SCADA-Systeme für verbesserte Transparenz und Produktionsüberwachung.", bullets: ["Produktions-Dashboards", "Alarmmanagement", "Historian-Integration", "Fernüberwachung", "Workflow-Optimierung"], learnMore: "Mehr erfahren" },
      { title: "Industrial IoT",               description: "Wir verbinden Maschinen, SPS und Industrieausrüstung mit modernen Datensystemen über sichere industrielle Kommunikationsprotokolle.", bullets: ["OPC UA Integration", "MQTT Infrastruktur", "Maschinendatenerfassung", "Cloud & Edge Konnektivität", "Gateway-Einrichtung"], learnMore: "Mehr erfahren" },
      { title: "Robotik-Integration",          description: "Wir integrieren Robotiksysteme in Produktionsumgebungen mit Fokus auf Zuverlässigkeit, Sicherheit und Wartbarkeit.", bullets: ["Roboterzellen-Inbetriebnahme", "Bewegungsoptimierung", "Sicherheitssystem-Integration", "Prozesssynchronisation", "Produktionsunterstützung"], learnMore: "Mehr erfahren" },
      { title: "Industrial KI",               description: "Wir helfen Herstellern, praktische KI-Chancen mithilfe von Produktionsdaten und Maschinendiagnosen zu identifizieren.", bullets: ["Anomalieerkennung", "Vorausschauende Wartung", "Produktionsanalyse", "KI-Pilotprojekte", "Betriebsberichte"], learnMore: "Mehr erfahren" },
    ],
  },
  contactSection: { badge: "KONTAKT", title: "Bereit, Ihre Produktionsherausforderungen zu Lösen?", subtitle: "Sprechen Sie direkt mit einem Ingenieur über Ihre betrieblichen Probleme. Kein Verkaufsgespräch — nur ein technisches Gespräch." },
  footer: { tagline: "INDUSTRIELLE AUTOMATISIERUNG", description: "Praktische Automatisierungstechnik — Fabriksysteme, Maschinendaten und Produktionsintelligenz verbunden.", navHeading: "NAVIGATION", resourcesHeading: "RESSOURCEN", contactHeading: "KONTAKT", navLinks: ["Startseite", "Über uns", "Leistungen", "Kontakt"], resourceLinks: ["Blog", "FAQ", "Datenschutz", "AGB"], rights: "Alle Rechte vorbehalten.", privacyPolicy: "Datenschutz", terms: "AGB" },
};

const de_ADD = {
  trust: { badge: "VON INGENIEUREN GEBAUT", title: "Echte Fabrik-Erfahrung", subtitle: "Preaumate wurde von Automatisierungsingenieuren gegründet, die jahrelang Probleme direkt in Produktionshallen gelöst haben.", cards: [{ title: "Fabrikerfahrung", description: "Reale industrielle Inbetriebnahme, Fehlerdiagnose und Integrationserfahrung." }, { title: "Grenzüberschreitende Ingenieurleistung", description: "Technische Unterstützung in Europa und Lateinamerika, auch remote." }, { title: "Fokus auf Modernisierung", description: "Verbindung veralteter Systeme mit modernen Daten- und Automatisierungsplattformen." }, { title: "Praktische Umsetzung", description: "Lösungen für Betriebszuverlässigkeit und Produktionskontinuität — keine theoretischen Konzepte." }] },
  problems: { badge: "PROBLEME DIE WIR LÖSEN", title: "Industrielle Herausforderungen", subtitle: "Wir arbeiten mit Herstellern, die echte Betriebsprobleme haben.", cards: [{ title: "Veraltete SPS-Systeme", description: "Migration ohne Produktionsunterbrechung." }, { title: "Fehlende Produktionstransparenz", description: "Maschinendaten erfassen und visualisieren." }, { title: "Schwierige Systemintegrationen", description: "SPS, SCADA, MES, ERP und IoT zuverlässig verbinden." }, { title: "Robotik-Implementierung", description: "Robotik sicher und zuverlässig integrieren." }, { title: "Ausfallzeiten & Fehlersuche", description: "Wiederkehrende Automatisierungsfehler diagnostizieren." }, { title: "Industrial-KI-Einführung", description: "KI sinnvoll für messbare Betriebsvorteile einsetzen." }] },
  technologies: { badge: "PLATTFORMEN & WERKZEUGE", title: "Technologien mit denen wir Arbeiten", subtitle: "Wir arbeiten mit den Plattformen, die Ihre Produktionsumgebung bereits nutzt.", categories: [{ title: "Automatisierung", items: ["Siemens TIA Portal", "Rockwell Studio 5000", "CoDeSys", "WinCC", "FactoryTalk"] }, { title: "Industrielle Kommunikation", items: ["OPC UA", "MQTT", "Modbus TCP", "Profinet", "EtherNet/IP"] }, { title: "Daten & Software", items: ["Node-RED", "Python", "SQL", "REST APIs", "Edge Gateways"] }, { title: "Infrastruktur", items: ["Industrienetzwerke", "Fernzugriff", "Virtualisierung", "Cloud-Integration", "Industrie-PCs"] }] },
  industries: { badge: "BRANCHEN", title: "Branchen die wir Unterstützen", subtitle: "Wir haben praktische Erfahrung in einem breiten Spektrum industrieller Sektoren.", items: [{ title: "Fertigung" }, { title: "Verpackung" }, { title: "Lebensmittel & Getränke" }, { title: "Automotive" }, { title: "Lagerung & Logistik" }, { title: "Energie & Versorgung" }, { title: "Maschinenbau" }, { title: "Industrieinfrastruktur" }] },
  projectProof: { badge: "BEISPIELPROJEKTE", title: "Industrieprojekte", subtitle: "Auswahl der Arten von Herausforderungen, die wir gelöst haben.", resultsLabel: "Ergebnisse", note: "Kundendaten werden auf Anfrage vertraulich behandelt.", projects: [{ title: "SPS-Migration für Legacy-Produktionssystem", summary: "[PROJEKTBESCHREIBUNG HINZUFÜGEN]", results: ["Weniger ungeplante Ausfallzeiten", "Verbesserte Ferndiagnose", "Modernere Wartbarkeit"], tech: ["Siemens TIA Portal", "HMI", "OPC UA"] }, { title: "Fabrik-Datenerfassung & Monitoring", summary: "[PROJEKTBESCHREIBUNG HINZUFÜGEN]", results: ["Einheitliche Maschinentransparenz", "Zentrales Monitoring", "Ferndiagnose aktiviert"], tech: ["MQTT", "Node-RED", "SQL"] }, { title: "Roboterzellen-Integration", summary: "[PROJEKTBESCHREIBUNG HINZUFÜGEN]", results: ["Höherer Durchsatz", "Bessere Wiederholgenauigkeit", "Weniger Handarbeit"], tech: ["Robotik", "SPS", "Sicherheitssysteme"] }] },
  founders: { badge: "UNSER TEAM", title: "Die Ingenieure Hinter Preaumate", subtitle: "Preaumate wurde von Ingenieuren mit praktischer Erfahrung in industrieller Automatisierung gegründet.", specializationsLabel: "Spezialisiert auf", industriesLabel: "Erfahrung in", linkedinLabel: "LinkedIn ansehen", founders: [{ name: "[IHR NAME]", role: "Automatisierungsingenieur", location: "Niederlande", years: "20+ Jahre Erfahrung in industrieller Automatisierung.", bio: "[2–3 Sätze zu Ihrer Erfahrung.]", photoUrl: "", specializations: ["[z.B. Siemens SPS]", "[z.B. SCADA & HMI]", "[z.B. Systemintegration]"], industries: ["[z.B. Lebensmittel]", "[z.B. Verpackung]"], linkedin: "#" }, { name: "[IHR NAME]", role: "Automatisierungs- & Integrationsingenieur", location: "Monterrey, Mexiko", years: "10+ Jahre Erfahrung in industriellen Systemen.", bio: "[2–3 Sätze zu Ihrer Erfahrung.]", photoUrl: "", specializations: ["[z.B. Industrial IoT]", "[z.B. Rockwell]", "[z.B. Inbetriebnahme]"], industries: ["[z.B. Automotive]", "[z.B. Logistik]"], linkedin: "#" }] },
};


// ─────────────────────────────────────────────────────────────────────────────
// ████████████████████  FRANÇAIS (fr)  ████████████████████████████████████████
// ─────────────────────────────────────────────────────────────────────────────

const fr_REPLACE = {
  hero: { title: "Experts en Automatisation Industrielle — De l'Atelier à la Couche de Données", subtitle: "Preaumate aide les fabricants à moderniser leurs systèmes industriels grâce à la programmation API, la robotique, le SCADA, l'IoT industriel et l'automatisation par IA. Conçu par des ingénieurs avec une expérience réelle en environnements de production.", cta: "Parler à un Ingénieur", cta2: "Voir Nos Services", trustBadges: ["30+ ans d'expérience cumulée", "Europe & Amérique Latine", "API · SCADA · Robotique · IoT", "Siemens · Rockwell · CoDeSys"] },
  services: { badge: "CE QUE NOUS FAISONS", title: "Services d'Automatisation Industrielle", subtitle: "De la programmation API à l'IoT industriel et à l'IA — des solutions d'ingénierie pratiques pour les fabricants.", items: [{ title: "Programmation API/PLC", description: "Nous développons, migrons et dépannons des systèmes API pour les environnements de production industrielle.", bullets: ["Migrations API", "Mise en service", "Optimisation des processus", "Diagnostic à distance", "Support dépannage"], learnMore: "En savoir plus" }, { title: "Développement SCADA & IHM", description: "Nous créons des interfaces opérateur et des systèmes SCADA pour améliorer la visibilité et la surveillance de production.", bullets: ["Tableaux de bord de production", "Gestion des alarmes", "Intégration historian", "Surveillance à distance", "Optimisation workflow"], learnMore: "En savoir plus" }, { title: "IoT Industriel", description: "Nous connectons machines, APIs et équipements industriels aux systèmes de données modernes.", bullets: ["Intégration OPC UA", "Infrastructure MQTT", "Collecte de données machine", "Connectivité cloud et edge", "Configuration gateway"], learnMore: "En savoir plus" }, { title: "Intégration Robotique", description: "Nous intégrons des systèmes robotiques dans les environnements de production avec fiabilité et sécurité.", bullets: ["Mise en service cellule robotique", "Optimisation mouvement", "Intégration sécurité", "Synchronisation processus", "Support production"], learnMore: "En savoir plus" }, { title: "IA Industrielle", description: "Nous aidons les fabricants à identifier et mettre en œuvre des applications pratiques de l'IA.", bullets: ["Détection d'anomalies", "Maintenance prédictive", "Analytique de production", "Projets pilotes IA", "Rapports opérationnels"], learnMore: "En savoir plus" }] },
  contactSection: { badge: "CONTACTEZ-NOUS", title: "Prêt à Résoudre vos Défis de Production ?", subtitle: "Parlez directement à un ingénieur de vos problèmes opérationnels. Pas de discours commercial — juste une conversation technique." },
  footer: { tagline: "AUTOMATISATION INDUSTRIELLE", description: "Ingénierie pratique en automatisation industrielle — systèmes d'usine, données machine et intelligence de production connectés.", navHeading: "NAVIGATION", resourcesHeading: "RESSOURCES", contactHeading: "CONTACT", navLinks: ["Accueil", "À propos", "Services", "Contact"], resourceLinks: ["Blog", "FAQ", "Confidentialité", "Conditions"], rights: "Tous droits réservés.", privacyPolicy: "Politique de confidentialité", terms: "Conditions d'utilisation" },
};

const fr_ADD = {
  trust: { badge: "CONSTRUIT PAR DES INGÉNIEURS", title: "Expérience Réelle en Atelier de Production", subtitle: "Preaumate a été fondée par des ingénieurs en automatisation qui ont passé des années à résoudre des problèmes directement dans les ateliers de production.", cards: [{ title: "Expérience en atelier", description: "Mise en service industrielle, diagnostic et intégration dans plusieurs environnements de production." }, { title: "Ingénierie transfrontalière", description: "Support technique en Europe et en Amérique Latine, avec capacités à distance." }, { title: "Axé sur la modernisation", description: "Connexion des systèmes industriels hérités aux plateformes modernes, étape par étape." }, { title: "Mise en œuvre pratique", description: "Solutions conçues pour la fiabilité opérationnelle et la continuité de production — pas des cadres théoriques." }] },
  problems: { badge: "PROBLÈMES QUE NOUS RÉSOLVONS", title: "Défis Industriels que Nous Traitons", subtitle: "Nous travaillons avec des fabricants confrontés à de vrais problèmes opérationnels.", cards: [{ title: "Systèmes API obsolètes", description: "Migration sans interrompre la production." }, { title: "Manque de visibilité de production", description: "Collecte et visualisation des données machine." }, { title: "Intégrations difficiles", description: "Connexion fiable des APIs, SCADA, MES, ERP et IoT." }, { title: "Intégration robotique", description: "Programmation et intégration de systèmes robotiques." }, { title: "Temps d'arrêt & diagnostic", description: "Analyse des pannes et amélioration de la fiabilité." }, { title: "Adoption de l'IA industrielle", description: "Application de l'IA pour une valeur opérationnelle mesurable." }] },
  technologies: { badge: "PLATEFORMES & OUTILS", title: "Technologies avec lesquelles nous Travaillons", subtitle: "Nous travaillons avec les plateformes que votre environnement de production utilise déjà.", categories: [{ title: "Automatisation", items: ["Siemens TIA Portal", "Rockwell Studio 5000", "CoDeSys", "WinCC", "FactoryTalk"] }, { title: "Communication Industrielle", items: ["OPC UA", "MQTT", "Modbus TCP", "Profinet", "EtherNet/IP"] }, { title: "Données & Logiciels", items: ["Node-RED", "Python", "SQL", "REST APIs", "Passerelles Edge"] }, { title: "Infrastructure", items: ["Réseaux industriels", "Accès à distance", "Virtualisation", "Intégration cloud", "PC industriels"] }] },
  industries: { badge: "SECTEURS", title: "Secteurs que Nous Supportons", subtitle: "Nous avons une expérience pratique dans de nombreux secteurs industriels.", items: [{ title: "Fabrication" }, { title: "Emballage" }, { title: "Alimentation & Boissons" }, { title: "Automobile" }, { title: "Entreposage & Logistique" }, { title: "Énergie & Services publics" }, { title: "Constructeurs de machines" }, { title: "Infrastructure industrielle" }] },
  projectProof: { badge: "EXEMPLES DE PROJETS", title: "Projets Industriels", subtitle: "Une sélection des types de défis que nous avons résolus.", resultsLabel: "Résultats", note: "Détails client confidentiels sur demande.", projects: [{ title: "Migration API pour système de production hérité", summary: "[AJOUTER RÉSUMÉ DU PROJET]", results: ["Réduction des arrêts imprévus", "Diagnostic à distance amélioré", "Maintenance modernisée"], tech: ["Siemens TIA Portal", "IHM", "OPC UA"] }, { title: "Collecte de données et surveillance d'usine", summary: "[AJOUTER RÉSUMÉ DU PROJET]", results: ["Visibilité unifiée des machines", "Surveillance centralisée", "Diagnostic à distance activé"], tech: ["MQTT", "Node-RED", "SQL"] }, { title: "Intégration de cellule robotique", summary: "[AJOUTER RÉSUMÉ DU PROJET]", results: ["Débit de production accru", "Répétabilité améliorée", "Manutention manuelle réduite"], tech: ["Robotique", "API", "Systèmes de sécurité"] }] },
  founders: { badge: "NOTRE ÉQUIPE", title: "Les Ingénieurs Derrière Preaumate", subtitle: "Preaumate a été fondée par des ingénieurs avec une expérience pratique en automatisation industrielle.", specializationsLabel: "Spécialisé en", industriesLabel: "Expérience dans", linkedinLabel: "Voir LinkedIn", founders: [{ name: "[VOTRE NOM]", role: "Ingénieur en automatisation", location: "Pays-Bas", years: "20+ ans d'expérience en automatisation industrielle.", bio: "[2–3 phrases sur votre parcours.]", photoUrl: "", specializations: ["[ex. Programmation Siemens]", "[ex. SCADA & IHM]", "[ex. Intégration]"], industries: ["[ex. Alimentaire]", "[ex. Emballage]"], linkedin: "#" }, { name: "[VOTRE NOM]", role: "Ingénieur en automatisation & intégration", location: "Monterrey, Mexique", years: "10+ ans d'expérience en systèmes industriels.", bio: "[2–3 phrases sur votre parcours.]", photoUrl: "", specializations: ["[ex. IoT industriel]", "[ex. Rockwell]", "[ex. Mise en service]"], industries: ["[ex. Automobile]", "[ex. Logistique]"], linkedin: "#" }] },
};


// ─────────────────────────────────────────────────────────────────────────────
// ████████████████████  PORTUGUÊS (pt)  ███████████████████████████████████████
// ─────────────────────────────────────────────────────────────────────────────

const pt_REPLACE = {
  hero: { title: "Especialistas em Automação Industrial — Do Chão de Fábrica à Camada de Dados", subtitle: "A Preaumate ajuda fabricantes a modernizar sistemas industriais através de programação CLP, robótica, SCADA, IoT industrial e automação com IA. Desenvolvido por engenheiros com experiência real em chão de fábrica na Europa e América Latina.", cta: "Falar com um Engenheiro", cta2: "Ver Nossos Serviços", trustBadges: ["30+ anos de experiência combinada", "Europa e América Latina", "CLP · SCADA · Robótica · IoT", "Siemens · Rockwell · CoDeSys"] },
  services: { badge: "O QUE FAZEMOS", title: "Serviços de Automação Industrial", subtitle: "Da programação CLP ao IoT industrial e IA — soluções práticas de engenharia para fabricantes.", items: [{ title: "Programação CLP", description: "Desenvolvemos, migramos e diagnosticamos sistemas CLP para ambientes industriais. Siemens, Rockwell e CoDeSys.", bullets: ["Migrações de CLP", "Comissionamento de máquinas", "Otimização de processos", "Diagnóstico remoto", "Suporte a falhas"], learnMore: "Saiba mais" }, { title: "Desenvolvimento SCADA & IHM", description: "Criamos interfaces de operador e sistemas SCADA para visibilidade e monitoramento de produção.", bullets: ["Painéis de produção", "Gestão de alarmes", "Integração com historian", "Monitoramento remoto", "Otimização de fluxo"], learnMore: "Saiba mais" }, { title: "IoT Industrial", description: "Conectamos máquinas, CLPs e equipamentos industriais a sistemas de dados modernos.", bullets: ["Integração OPC UA", "Infraestrutura MQTT", "Coleta de dados de máquinas", "Conectividade cloud e edge", "Configuração de gateways"], learnMore: "Saiba mais" }, { title: "Integração de Robótica", description: "Integramos sistemas robóticos em ambientes de produção com foco em confiabilidade, segurança e manutenibilidade.", bullets: ["Comissionamento de células robóticas", "Otimização de movimento", "Integração de sistemas de segurança", "Sincronização de processos", "Suporte à produção"], learnMore: "Saiba mais" }, { title: "IA Industrial", description: "Ajudamos fabricantes a identificar e implementar oportunidades práticas de IA usando dados de produção.", bullets: ["Detecção de anomalias", "Manutenção preditiva", "Análise de produção", "Projetos piloto de IA", "Relatórios operacionais"], learnMore: "Saiba mais" }] },
  contactSection: { badge: "ENTRE EM CONTATO", title: "Pronto para Resolver seus Desafios de Produção?", subtitle: "Converse diretamente com um engenheiro sobre seus problemas operacionais. Sem discurso de vendas — apenas uma conversa técnica." },
  footer: { tagline: "AUTOMAÇÃO INDUSTRIAL", description: "Engenharia prática de automação industrial — conectando sistemas de fábrica, dados de máquinas e inteligência de produção.", navHeading: "NAVEGAÇÃO", resourcesHeading: "RECURSOS", contactHeading: "CONTATO", navLinks: ["Início", "Sobre nós", "Serviços", "Contato"], resourceLinks: ["Blog", "Perguntas", "Privacidade", "Termos"], rights: "Todos os direitos reservados.", privacyPolicy: "Política de Privacidade", terms: "Termos e Condições" },
};

const pt_ADD = {
  trust: { badge: "CONSTRUÍDO POR ENGENHEIROS", title: "Experiência Real no Chão de Fábrica", subtitle: "A Preaumate foi fundada por engenheiros de automação que passaram anos resolvendo problemas diretamente em plantas de produção.", cards: [{ title: "Experiência em Fábrica", description: "Comissionamento, diagnóstico e integração industrial em múltiplos ambientes de produção." }, { title: "Engenharia Transfronteiriça", description: "Suporte técnico na Europa e América Latina, com capacidades remotas." }, { title: "Foco em Modernização", description: "Conectando sistemas legados a plataformas modernas, passo a passo." }, { title: "Implementação Prática", description: "Soluções para confiabilidade operacional e continuidade de produção — não frameworks teóricos." }] },
  problems: { badge: "PROBLEMAS QUE RESOLVEMOS", title: "Desafios Industriais que Abordamos", subtitle: "Trabalhamos com fabricantes que enfrentam problemas operacionais reais.", cards: [{ title: "Sistemas CLP Legados", description: "Migração sem interromper a produção." }, { title: "Falta de Visibilidade de Produção", description: "Coleta e visualização de dados de máquinas." }, { title: "Integrações Difíceis", description: "Conectar CLPs, SCADA, MES, ERP e IoT de forma confiável." }, { title: "Implementação de Robótica", description: "Programar e integrar sistemas robóticos com segurança." }, { title: "Paradas e Diagnóstico", description: "Diagnosticar falhas e melhorar a confiabilidade." }, { title: "Adoção de IA Industrial", description: "Aplicar IA onde cria valor operacional mensurável." }] },
  technologies: { badge: "PLATAFORMAS & FERRAMENTAS", title: "Tecnologias com as quais Trabalhamos", subtitle: "Trabalhamos com as plataformas que seu ambiente de produção já utiliza.", categories: [{ title: "Automação", items: ["Siemens TIA Portal", "Rockwell Studio 5000", "CoDeSys", "WinCC", "FactoryTalk"] }, { title: "Comunicação Industrial", items: ["OPC UA", "MQTT", "Modbus TCP", "Profinet", "EtherNet/IP"] }, { title: "Dados & Software", items: ["Node-RED", "Python", "SQL", "REST APIs", "Gateways de Borda"] }, { title: "Infraestrutura", items: ["Redes Industriais", "Acesso Remoto", "Virtualização", "Integração Cloud", "PCs Industriais"] }] },
  industries: { badge: "SETORES", title: "Setores que Apoiamos", subtitle: "Temos experiência prática em uma ampla gama de setores industriais.", items: [{ title: "Manufatura" }, { title: "Embalagem" }, { title: "Alimentos & Bebidas" }, { title: "Automotivo" }, { title: "Armazenagem & Logística" }, { title: "Energia & Utilidades" }, { title: "Construtores de Máquinas" }, { title: "Infraestrutura Industrial" }] },
  projectProof: { badge: "PROJETOS DE EXEMPLO", title: "Projetos Industriais", subtitle: "Uma seleção dos tipos de desafios que resolvemos. Estudos de caso disponíveis sob solicitação.", resultsLabel: "Resultados", note: "Dados do cliente mantidos confidenciais sob solicitação.", projects: [{ title: "Migração de CLP para Sistema de Produção Legado", summary: "[ADICIONAR RESUMO DO PROJETO]", results: ["Redução de paradas não planejadas", "Diagnóstico remoto melhorado", "Manutenção modernizada"], tech: ["Siemens TIA Portal", "IHM", "OPC UA"] }, { title: "Coleta de Dados e Monitoramento de Fábrica", summary: "[ADICIONAR RESUMO DO PROJETO]", results: ["Visibilidade unificada de máquinas", "Monitoramento centralizado", "Diagnóstico remoto habilitado"], tech: ["MQTT", "Node-RED", "SQL"] }, { title: "Integração de Célula Robótica", summary: "[ADICIONAR RESUMO DO PROJETO]", results: ["Maior produtividade", "Repetibilidade melhorada", "Manuseio manual reduzido"], tech: ["Robótica", "CLP", "Sistemas de Segurança"] }] },
  founders: { badge: "NOSSA EQUIPE", title: "Os Engenheiros por Trás da Preaumate", subtitle: "A Preaumate foi fundada por engenheiros com experiência prática em automação industrial.", specializationsLabel: "Especializado em", industriesLabel: "Experiência em", linkedinLabel: "Ver LinkedIn", founders: [{ name: "[SEU NOME COMPLETO]", role: "Engenheiro de Automação", location: "Países Baixos", years: "20+ anos de experiência em automação industrial.", bio: "[2–3 frases sobre sua trajetória.]", photoUrl: "", specializations: ["[ex. Programação Siemens]", "[ex. SCADA & IHM]", "[ex. Integração]"], industries: ["[ex. Alimentos]", "[ex. Embalagem]"], linkedin: "#" }, { name: "[SEU NOME COMPLETO]", role: "Engenheiro de Automação e Integração", location: "Monterrey, México", years: "10+ anos de experiência em sistemas industriais.", bio: "[2–3 frases sobre sua trajetória.]", photoUrl: "", specializations: ["[ex. IoT Industrial]", "[ex. Rockwell]", "[ex. Comissionamento]"], industries: ["[ex. Automotivo]", "[ex. Logística]"], linkedin: "#" }] },
};


// =============================================================================
// HOW TO APPLY THESE CHANGES IN src/lib/i18n.js
// =============================================================================
//
// STEP 1 — Open src/lib/i18n.js
//
// STEP 2 — For each language block (en, nl, es, de, fr, pt):
//
//   A) REPLACE EXISTING KEYS
//      Find the existing "hero: {" block inside that language and replace
//      the entire object with the one from *_REPLACE above.
//      Do the same for services, contactSection, and footer.
//
//   B) ADD NEW KEYS
//      Just before the closing "}" of the language block, paste all
//      keys from the matching *_ADD object:
//        trust: { ... },
//        problems: { ... },
//        technologies: { ... },
//        industries: { ... },
//        projectProof: { ... },
//        founders: { ... },
//
// STEP 3 — Fill in all [PLACEHOLDER] fields before going live.
//
// STEP 4 — When you add founder photos:
//   - Put them in /public/images/  (e.g. founder1.jpg)
//   - Update photoUrl in founders[0] and founders[1] for all languages
//   - The FounderSection component picks them up automatically
//
// =============================================================================