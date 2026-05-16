export const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

export const translations = {
  // ─── ENGLISH ─────────────────────────────────────────────────────
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      blog: "Blog",
      qa: "Q&A",
      contact: "Contact",
    },
    hero: {
      title: "Industrial Automation Reimagined",
      subtitle:
        "Transform your manufacturing with AI-powered automation, predictive analytics, and smart factory solutions.",
      cta: "Start Your Automation Journey",
    },
    about: {
      badge: "ABOUT PREAUMATE",
      title1: "Built by Engineers.",
      title2: "Driven by Passion.",
      para1:
        "Preaumate is an industrial automation consultancy built by engineers, with a genuine passion for the industry. Our team brings over 20 years of combined experience across Siemens, Rockwell and CoDeSys platforms — and we are as comfortable on a factory floor as we are in a server room.",
      para2:
        "We have worked across robotic manufacturing, food and beverage, water treatment, HVAC, logistics and offshore installations. Based in the Netherlands and Mexico, we operate globally — onshore, offshore and remotely — with quick response times across time zones.",
      para3:
        "We know the classical industrial automation world well. We also understand the transformation that is underway. Our role is to help clients navigate both — whether that means delivering a proven hardware-based solution, or helping them take the first steps towards modernisation.",
      readMore: "Read our full story",
      features: [
        {
          title: "AI-Powered Automation",
          description:
            "Leverage cutting-edge artificial intelligence to automate complex industrial processes with unprecedented accuracy.",
        },
        {
          title: "Real-Time Monitoring",
          description:
            "Monitor every aspect of your production line in real time with advanced IoT sensor networks and dashboards.",
        },
        {
          title: "Data, IoT & Cloud",
          description:
            "Real-time data acquisition, IoT connectivity, cloud and edge processing — making your machine data work for you.",
        },
        {
          title: "Energy Optimisation",
          description:
            "Reduce energy consumption by up to 40% through intelligent load balancing and predictive power management.",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Prevent costly downtime by predicting equipment failures before they happen using machine learning models.",
        },
      ],
      stats: [
        "Projects Delivered",
        "Client Satisfaction",
        "Average Energy Saved",
        "Years Experience",
      ],
    },
    services: {
      badge: "WHAT WE DO",
      title: "End-to-End Automation",
      subtitle:
        "From robotics to analytics — we deliver complete industrial automation solutions built on proven Siemens technology.",
      items: [
        {
          title: "Robotic Process Automation",
          description:
            "Deploy intelligent robots and automated systems that handle repetitive tasks with precision and speed.",
        },
        {
          title: "Assembly Automation",
          description:
            "Streamline your production with flexible and efficient assembly automation solutions.",
        },
        {
          title: "Material Handling",
          description:
            "Intelligent material handling solutions that improve flow, safety, and operational efficiency.",
        },
        {
          title: "Quality Control",
          description:
            "Advanced inspection and quality control systems to ensure consistency and excellence.",
        },
        {
          title: "Smart Factory Solutions",
          description:
            "Transform traditional manufacturing into fully connected, self-optimising production environments.",
        },
        {
          title: "Predictive Analytics",
          description:
            "Anticipate failures before they happen using AI-driven insights from your machine data.",
        },
        {
          title: "IoT Integration",
          description:
            "Connect your entire factory floor with smart sensors and real-time data pipelines for full visibility.",
        },
      ],
    },
    statsBar: [
      "Projects Delivered",
      "Client Satisfaction",
      "Years Experience",
      "Remote Support",
    ],
    featuresBar: {
      badge: "CAPABILITIES",
      items: [
        { title: "Remote Support", subtitle: "24/7" },
        { title: "Contact Us", subtitle: "contact@preaumate.com" },
        { title: "AI-Powered", subtitle: "Decisions" },
        { title: "Predictive", subtitle: "Analytics" },
        { title: "Smart Factory", subtitle: "Solutions" },
        { title: "Cybersecurity", subtitle: "Ready" },
        { title: "IoT", subtitle: "Integration" },
        { title: "Built for", subtitle: "the Future" },
      ],
    },
    contactSection: {
      badge: "GET IN TOUCH",
      title: "Start Your Automation Journey",
      subtitle:
        "Ready to transform your operations? Let's talk about your automation needs.",
    },
    form: {
      title: "Get in Touch",
      subtitle:
        "Ready to transform your industrial operations? Let's discuss your needs.",
      companyName: "Company Name",
      companyPlaceholder: "Enter your company name",
      email: "Email Address",
      emailPlaceholder: "your.email@company.com",
      phone: "Phone Number",
      phonePlaceholder: "+31 (0) 000 000 000",
      serviceInterest: "Service Interest",
      servicePlaceholder: "Select a service...",
      message: "Message",
      messagePlaceholder: "Tell us about your automation needs...",
      send: "Send Message",
      sending: "Sending...",
      services: [
        "Robotic Process Automation",
        "IoT Integration",
        "Smart Factory Solutions",
        "Predictive Analytics",
        "General Consultation",
      ],
      errors: {
        companyRequired: "Company name is required",
        emailRequired: "Email is required",
        emailInvalid: "Invalid email format",
        phoneRequired: "Phone number is required",
        serviceRequired: "Please select a service",
        messageRequired: "Message is required",
        validationTitle: "Form Validation Error",
        validationDesc: "Please fill in all required fields correctly.",
        errorTitle: "Something went wrong",
        errorDesc:
          "Your message couldn't be sent. Please try again or contact us directly.",
        successTitle: "Message Sent Successfully!",
        successDesc:
          "Thank you! We'll contact you soon to discuss your automation needs.",
      },
    },
    footer: {
      tagline: "INDUSTRIAL AUTOMATION",
      description:
        "Reimagining industrial automation for the next generation of manufacturing. Siemens certified. Industry 4.0 ready.",
      navHeading: "NAVIGATION",
      resourcesHeading: "RESOURCES",
      contactHeading: "CONTACT",
      navLinks: ["Home", "About", "Services", "Contact"],
      resourceLinks: ["Blog", "Q&A", "Privacy Policy", "Terms & Conditions"],
      rights: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    consent: {
      title: "🍪 We use cookies",
      text: "We use essential cookies to make our site work. With your consent, we also use analytics cookies to understand how you use our site and improve your experience. Your data is processed in accordance with our",
      privacyPolicy: "Privacy Policy",
      and: "and",
      cookiePolicy: "Cookie Policy",
      reject: "Reject Non-Essential",
      accept: "Accept All",
    },
    aboutPage: {
      heroBadge: "ABOUT PREAUMATE",
      heroTitle1: "Built by Engineers.",
      heroTitle2: "Driven by Passion.",
      heroSubtitle:
        "Preaumate is an industrial automation consultancy with over 20 years of combined experience, operating globally from the Netherlands and Mexico.",
      locations: ["Netherlands", "Mexico", "Global Operations"],
      whoWeAreBadge: "WHO WE ARE",
      whoWeAreTitle: "Our Story",
      whoWeArePara1:
        "Preaumate is an industrial automation consultancy built by engineers, with an enthusiastic and genuine passion for the industry. We are a young company — but we are not a new team. Between us we bring over 20 years of hands-on automation experience to every project we take on.",
      whoWeArePara2:
        "Our team is based in the Netherlands and Mexico — a geographical spread that is not incidental, but by design. We work globally, respond quickly, and are set up to support clients onshore, offshore and remotely across time zones. Whether your installation is on a production floor in Europe, a platform in the North Sea, or a facility on the other side of the world — we are there.",
      whoWeArePara3:
        "We started Preaumate because we believe the best automation work happens when the people doing it are close to the problem, personally invested in the outcome, and not slowed down by corporate layers. We combine the proven reliability of traditional industrial automation with the rapidly evolving technology landscape — AI integration, IoT connectivity, cloud and edge computing, cybersecurity — to make every type of automation project more efficient, more connected, and more future-ready than it would otherwise be.",
      whoWeArePara4:
        "We know the classical industrial automation world well — because we came from it. And we understand the transformation that is underway. Our role is to help clients navigate both.",
      whatWeDoBadge: "WHAT WE DO",
      whatWeDoTitle: "Our Services",
      whatWeDoIntro:
        "We are automation specialists who are as comfortable in a server room as we are on a factory floor. We get involved where it matters — hands-on, problem-solving, and fully committed to making things work. Our core focus is software, but we are a service and solutions team first. If a problem needs solving, we solve it.",
      servicesList: [
        {
          title: "PLC Programming",
          description:
            "We programme across the major platforms — Siemens (TIA Portal, S7-1200/1500), Rockwell Automation (Studio 5000), and CoDeSys-based controllers. We work with traditional hardware PLC setups as well as modern software PLC environments, virtualisation and containerisation platforms. We also programme Safety PLCs — functional safety done properly, to the standards that matter. If a client needs a classical, proven hardware-based setup, we deliver that with confidence. If a client wants to explore modernisation, we consult, advise and help choose what is genuinely best for their specific situation.",
        },
        {
          title: "HMI Development",
          description:
            "We design and build operator interfaces that are intuitive, clear and built for the people who actually use them. Good HMI design is consistently underestimated — we take it seriously.",
        },
        {
          title: "Data Acquisition, IoT, Cloud and Edge",
          description:
            "We connect machines, sensors and systems so that data flows where it needs to go — OPC-UA, MQTT, database connectivity, MES and SCADA integration. We implement both cloud-based and edge data processing architectures, depending on what the application requires.",
        },
        {
          title: "Cybersecurity",
          description:
            "Industrial cybersecurity is no longer optional. As automation systems become more connected, the attack surface grows — and the consequences of a breach in an industrial environment can be severe. We design and implement automation architectures with security built in from the start: network segmentation, secure remote access, hardened configurations, and compliance with relevant industrial security standards.",
        },
        {
          title: "AI Integration",
          description:
            "We integrate AI-driven capabilities into automation projects — predictive maintenance, anomaly detection, process optimisation. Not as buzzwords, but as practical tools that make industrial systems perform better and smarter.",
        },
        {
          title: "Remote Services",
          description:
            "We are built for remote work. We support, troubleshoot and modify systems from anywhere in the world — securely, reliably and with minimal disruption to your operations. Our presence across Europe and the Americas means we cover a wide range of time zones without delay. Remote does not mean distant — we are responsive, available, and engaged.",
        },
        {
          title: "Project Preparation and Management",
          description:
            "We support clients from the earliest stages — functional specifications, software architecture, scope definition — through to commissioning and handover. Good preparation at the front end prevents expensive problems at the back end.",
        },
      ],
      industriesBadge: "EXPERIENCE",
      industriesTitle: "Industries We Have Worked In",
      industriesIntro:
        "Our team's experience spans a wide range of industrial environments — on land, offshore, and across continents. Each of these industries has its own requirements, its own standards, and its own way of working.",
      industries: [
        { label: "Robotic Manufacturing", icon: "🦾" },
        { label: "Food & Beverage Production", icon: "🏭" },
        { label: "Water Treatment & Utilities", icon: "💧" },
        { label: "HVAC & Building Automation", icon: "🌡️" },
        { label: "Warehousing & Logistics", icon: "📦" },
        { label: "Offshore Installations", icon: "⚓" },
      ],
      philosophyBadge: "OUR PHILOSOPHY",
      philosophyTitle: "Classical Automation and the New Industrial Reality",
      philosophyPara1:
        "We have deep respect for the engineering traditions that built the industrial automation industry. The standards, the methodologies, the hardware platforms — they exist because they work, and they will continue to work. We know that world well, and we are fully capable of operating within it.",
      philosophyPara2:
        "But the industry is changing. Software PLCs, virtualisation, containerisation, edge computing, AI-driven analytics, cloud connectivity and industrial cybersecurity are no longer experimental — they are production-ready, and they are transforming what is possible in automation.",
      philosophyPara3:
        "Our value to clients is that we understand both worlds. We can deliver a classical, reliable, standards-compliant automation project. And we can help clients who are ready to modernise understand what that means for them — what it costs, what it gains, and how to get there without unnecessary risk.",
      classicalTitle: "Classical Automation",
      classicalDesc:
        "Proven hardware platforms, established standards, reliable architectures that have been running industry for decades. If this is what your project needs — we deliver it with full confidence and respect for what works.",
      modernTitle: "Modern Automation",
      modernDesc:
        "Software PLCs, cloud connectivity, AI-driven insights, edge computing, industrial cybersecurity. If you are ready to modernise — we help you choose the right path, at the right pace, for your specific needs.",
      finalNote:
        "We do not believe every project needs the newest technology. We believe every project deserves the right technology — and we have the experience and the perspective to tell the difference.",
      ctaTitle: "Ready to Work Together?",
      ctaSubtitle:
        "If you are looking for a partner who will treat your project as their own, respond without delay, and deliver work that stands up — we would like to talk.",
      ctaButton: "Get in Touch",
    },
    crossover: {
      badge: "THE CONVERGENCE",
      title: "Where the Factory Floor Meets the Data Layer",
      subtitle:
        "Most automation engineers understand control systems. Most data engineers understand connectivity. Very few understand both deeply — and fewer still know how to bring AI into that picture practically.",
      statement:
        "We sit at that intersection. And we think it is the most important place to be in industrial automation right now.",
      pillar1: {
        label: "Classical Control",
        heading: "The machine runs reliably.",
        description:
          "Siemens, Rockwell, CoDeSys — structured PLC code written to last, Safety systems programmed to standard, HMI and SCADA built for the operator who actually uses it. The foundation everything else depends on.",
        tags: [
          "PLC Programming",
          "Safety Systems",
          "HMI / SCADA",
          "System Integration",
        ],
      },
      pillar2: {
        label: "Connected Data",
        heading: "The machine talks.",
        description:
          "OPC-UA and MQTT pipelines that move data from the factory floor to where it needs to go. Edge computing that processes locally when cloud is not an option. Dashboards that show operators what is happening — and historians that remember everything.",
        tags: [
          "OPC-UA / MQTT",
          "Edge Computing",
          "Cloud Connectivity",
          "Data Pipelines",
        ],
      },
      pillar3: {
        label: "AI & Intelligence",
        heading: "The machine thinks.",
        description:
          "Predictive maintenance models that flag failures before they happen. Anomaly detection that catches process drift in real time. Computer vision for quality inspection. AI APIs integrated into industrial software — not as a feature, but as a genuine operational tool.",
        tags: [
          "Predictive Maintenance",
          "Anomaly Detection",
          "Computer Vision",
          "AI API Integration",
        ],
      },
      closing:
        "This is not three separate services. It is one integrated approach — built for the generation of industrial automation where the control layer and the intelligence layer are the same system.",
    },
    howWeWork: {
  badge: 'HOW WE WORK',
  title: 'What Working With Us Looks Like',
  subtitle: 'We keep it simple, direct and transparent — no account managers, no handoffs. You deal with the engineers doing the work.',
  steps: [
    {
      number: '01',
      title: 'We Talk',
      description: 'You tell us about your challenge. We ask the questions that matter. No sales pitch — just an honest conversation about whether we are the right fit for your project.',
    },
    {
      number: '02',
      title: 'We Plan',
      description: 'We define the scope, the approach and the timeline together. You get a clear picture of what we will deliver, how long it will take, and what it will cost — before any work begins.',
    },
    {
      number: '03',
      title: 'We Build',
      description: 'We do the work. You have direct access to the engineers building your system throughout — not a project manager relaying messages. Issues are resolved quickly because decisions are made by the people who understand the problem.',
    },
    {
      number: '04',
      title: 'We Support',
      description: 'We do not disappear after handover. We document thoroughly, train your team properly, and stay available for questions and support. Remote-first by design means we can respond fast regardless of where you are.',
    },
  ],
},

whyPreaumate: {
  badge: 'WHY US',
  title: 'The Honest Case for Working With a Small Team',
  intro: 'We are a new company. We know that is the first objection. Here is our honest answer to it.',
  cards: [
    {
      title: 'You get the senior engineers — on every job',
      description: 'With a large integrator, your project might be scoped by a senior engineer and delivered by a junior one. With us, the people you speak to are the people doing the work. Every time.',
    },
    {
      title: 'Thirty years of experience is not a small number',
      description: 'Preaumate is new. The expertise behind it is not. Our team has delivered automation projects across multiple industries, platforms and countries. We bring that experience to your project from day one.',
    },
    {
      title: 'We move faster because we are smaller',
      description: 'No internal approval chains. No scheduling conflicts between departments. When something needs resolving, we resolve it. The speed of a small team is a genuine operational advantage.',
    },
    {
      title: 'Our business depends on your project going well',
      description: 'A large company can absorb a project that did not go well. We cannot. That asymmetry works in your favour — every project we take on gets our full attention because our reputation depends on it.',
    },
  ],
},

pricing: {
  signal: 'We work on a project and day-rate basis. Contact us for a quote — we respond within one business day.',
},

endorsements: {
  badge: 'WHAT COLLEAGUES SAY',
  title: 'Trusted by Engineers Who Know the Work',
  subtitle: 'Preaumate is a new company. The people behind it are not. Here is what those who have worked alongside us have to say.',
  cta: 'Want to discuss your project?',
  ctaButton: 'Get in Touch',
  // ── IMPORTANT ─────────────────────────────────────────────────────────────
  // Replace these placeholder quotes with real ones from former colleagues,
  // managers or clients. Ask them directly — a one-sentence genuine quote is
  // more valuable than a paragraph of marketing copy.
  // Remove the 'company' field or replace with 'Former employer' if preferred.
  // ─────────────────────────────────────────────────────────────────────────
  quotes: [
    {
      text: 'One of the most technically capable automation engineers I have worked with. Structured code, clear thinking, and the kind of problem-solving ability that shows up when things get complicated on site.',
      author: 'Senior Project Engineer',
      company: 'Former employer — name withheld on request',
      initials: 'SP',
    },
    {
      text: 'What sets this team apart is that they actually understand both the control layer and the data layer. That combination is rare in the industry and makes a real difference on complex integration projects.',
      author: 'Automation Manager',
      company: 'Industrial manufacturer — Netherlands',
      initials: 'AM',
    },
    {
      text: 'Reliable, fast to respond, and genuinely invested in getting the result right. The documentation and handover were the best I have seen on a project of this kind.',
      author: 'Plant Operations Manager',
      company: 'Food & Beverage production facility',
      initials: 'PO',
    },
  ],
},

serviceArea: {
  badge: 'WHERE WE OPERATE',
  title: 'Global Reach. Personal Engagement.',
  subtitle: 'Industrial automation work often requires physical presence. Here is how we work across borders.',
  intro: 'We are based in the Netherlands and Mexico — two locations that together cover European and American time zones without delay. We work onshore, offshore and remotely, and we travel globally for on-site commissioning, FAT witnessing and site support.',
  cards: [
    {
      region: 'Europe',
      flag: '🇪🇺',
      description: 'Our Netherlands base covers Western Europe. We work on-site across the EU and UK, and are set up to respond quickly to projects across the region.',
      highlights: ['Netherlands — primary base', 'On-site across EU and UK', 'Offshore — North Sea and beyond'],
    },
    {
      region: 'Americas',
      flag: '🌎',
      description: 'Our Mexico base covers North and Latin America. From offshore platforms in the Gulf of Mexico to production facilities across the continent.',
      highlights: ['Mexico — primary base', 'North and Latin America', 'Gulf of Mexico offshore'],
    },
    {
      region: 'Remote & Global',
      flag: '🌐',
      description: 'Many automation tasks — PLC programming, HMI development, SCADA work, data platform development — can be delivered fully remotely. We have secure remote access infrastructure and communicate across time zones reliably.',
      highlights: ['Secure remote access', 'Full remote delivery for software work', 'Worldwide travel for on-site phases'],
    },
  ],
  travelNote: 'Travel costs and logistics are discussed transparently as part of every project scope. We do not hide them in the rate.',
},
  },

  // ─── DUTCH ───────────────────────────────────────────────────────
  nl: {
    nav: {
      home: "Home",
      about: "Over ons",
      services: "Diensten",
      blog: "Blog",
      qa: "V&A",
      contact: "Contact",
    },
    hero: {
      title: "Industriële Automatisering Opnieuw Bedacht",
      subtitle:
        "Transformeer uw productie met AI-gestuurde automatisering, voorspellende analyses en slimme fabrieksoplossingen.",
      cta: "Begin Uw Automatiseringsreis",
    },
    about: {
      badge: "OVER PREAUMATE",
      title1: "Gebouwd door Ingenieurs.",
      title2: "Gedreven door Passie.",
      para1:
        "Preaumate is een industrieel automatiseringsbedrijf opgericht door ingenieurs, met een echte passie voor de industrie. Ons team brengt meer dan 20 jaar gecombineerde ervaring mee op het gebied van Siemens, Rockwell en CoDeSys platforms — en we voelen ons even thuis op een fabrieksvloer als in een serverruimte.",
      para2:
        "Wij hebben gewerkt in robotproductie, voedings- en drankenindustrie, waterbehandeling, HVAC, logistiek en offshore installaties. Gevestigd in Nederland en Mexico, opereren wij wereldwijd — onshore, offshore en op afstand — met snelle responstijden in alle tijdzones.",
      para3:
        "Wij kennen de klassieke industriële automatiseringswereld goed. Wij begrijpen ook de transformatie die gaande is. Onze rol is klanten door beide te navigeren — of dat nu betekent een bewezen hardware-oplossing leveren, of hen helpen de eerste stappen naar modernisering te zetten.",
      readMore: "Lees ons volledige verhaal",
      features: [
        {
          title: "AI-gestuurde Automatisering",
          description:
            "Benut geavanceerde kunstmatige intelligentie om complexe industriële processen te automatiseren met ongekende nauwkeurigheid.",
        },
        {
          title: "Real-time Monitoring",
          description:
            "Monitor elk aspect van uw productielijn in real-time met geavanceerde IoT-sensornetwerken en dashboards.",
        },
        {
          title: "Data, IoT & Cloud",
          description:
            "Real-time gegevensacquisitie, IoT-connectiviteit, cloud- en edge-verwerking — uw machinedata laten werken voor u.",
        },
        {
          title: "Energieoptimalisatie",
          description:
            "Verminder het energieverbruik met maximaal 40% door intelligente lastbalancering en voorspellend vermogensbeheer.",
        },
        {
          title: "Voorspellend Onderhoud",
          description:
            "Voorkom kostbare stilstand door apparatuurstoringen te voorspellen voordat ze optreden met machine learning modellen.",
        },
      ],
      stats: [
        "Geleverde Projecten",
        "Klanttevredenheid",
        "Gem. Energiebesparing",
        "Jaar Ervaring",
      ],
    },
    services: {
      badge: "WAT WE DOEN",
      title: "End-to-End Automatisering",
      subtitle:
        "Van robotica tot analytics — wij leveren complete industriële automatiseringsoplossingen gebouwd op bewezen Siemens technologie.",
      items: [
        {
          title: "Robotprocesautomatisering",
          description:
            "Implementeer intelligente robots en geautomatiseerde systemen die repetitieve taken uitvoeren met precisie en snelheid.",
        },
        {
          title: "Assemblageautomatisering",
          description:
            "Stroomlijn uw productie met flexibele en efficiënte assemblageautomatiseringsoplossingen.",
        },
        {
          title: "Materiaalbehandeling",
          description:
            "Intelligente materiaalbehandelingsoplossingen die de doorstroom, veiligheid en operationele efficiëntie verbeteren.",
        },
        {
          title: "Kwaliteitscontrole",
          description:
            "Geavanceerde inspectie- en kwaliteitscontrolesystemen voor consistentie en uitmuntendheid.",
        },
        {
          title: "Slimme Fabriekssystemen",
          description:
            "Transformeer traditionele productie naar volledig verbonden, zelfoptimaliserende productieomgevingen.",
        },
        {
          title: "Voorspellende Analyses",
          description:
            "Anticipeer op storingen voordat ze optreden met AI-gestuurde inzichten uit uw machinedata.",
        },
        {
          title: "IoT-integratie",
          description:
            "Verbind uw volledige fabrieksvloer met slimme sensoren en real-time datapipelines voor volledige zichtbaarheid.",
        },
      ],
    },
    statsBar: [
      "Geleverde Projecten",
      "Klanttevredenheid",
      "Jaar Ervaring",
      "Support op Afstand",
    ],
    featuresBar: {
      badge: "MOGELIJKHEDEN",
      items: [
        { title: "Support op Afstand", subtitle: "24/7" },
        { title: "Neem Contact Op", subtitle: "contact@preaumate.com" },
        { title: "AI-gestuurd", subtitle: "Beslissingen" },
        { title: "Voorspellende", subtitle: "Analyses" },
        { title: "Slimme Fabriek", subtitle: "Oplossingen" },
        { title: "Cyberbeveiliging", subtitle: "Gereed" },
        { title: "IoT", subtitle: "Integratie" },
        { title: "Gebouwd voor", subtitle: "de Toekomst" },
      ],
    },
    contactSection: {
      badge: "NEEM CONTACT OP",
      title: "Begin Uw Automatiseringsreis",
      subtitle:
        "Klaar om uw activiteiten te transformeren? Laten we praten over uw automatiseringsbehoeften.",
    },
    form: {
      title: "Neem Contact Op",
      subtitle:
        "Klaar om uw industriële activiteiten te transformeren? Laten we uw behoeften bespreken.",
      companyName: "Bedrijfsnaam",
      companyPlaceholder: "Voer uw bedrijfsnaam in",
      email: "E-mailadres",
      emailPlaceholder: "uw.email@bedrijf.com",
      phone: "Telefoonnummer",
      phonePlaceholder: "+31 (0) 000 000 000",
      serviceInterest: "Interesse in Dienst",
      servicePlaceholder: "Selecteer een dienst...",
      message: "Bericht",
      messagePlaceholder: "Vertel ons over uw automatiseringsbehoeften...",
      send: "Bericht Verzenden",
      sending: "Verzenden...",
      services: [
        "Robotprocesautomatisering",
        "IoT-integratie",
        "Slimme Fabriekssystemen",
        "Voorspellende Analyses",
        "Algemeen Advies",
      ],
      errors: {
        companyRequired: "Bedrijfsnaam is vereist",
        emailRequired: "E-mailadres is vereist",
        emailInvalid: "Ongeldig e-mailformaat",
        phoneRequired: "Telefoonnummer is vereist",
        serviceRequired: "Selecteer een dienst",
        messageRequired: "Bericht is vereist",
        validationTitle: "Formuliervalidatiefout",
        validationDesc: "Vul alle verplichte velden correct in.",
        errorTitle: "Er is iets misgegaan",
        errorDesc:
          "Uw bericht kon niet worden verzonden. Probeer het opnieuw of neem rechtstreeks contact op.",
        successTitle: "Bericht Succesvol Verzonden! 🎉",
        successDesc:
          "Bedankt! Wij nemen binnenkort contact met u op om uw automatiseringsbehoeften te bespreken.",
      },
    },
    footer: {
      tagline: "INDUSTRIËLE AUTOMATISERING",
      description:
        "Industriële automatisering opnieuw bedacht voor de volgende generatie productie. Siemens gecertificeerd. Industrie 4.0 gereed.",
      navHeading: "NAVIGATIE",
      resourcesHeading: "BRONNEN",
      contactHeading: "CONTACT",
      navLinks: ["Home", "Over ons", "Diensten", "Contact"],
      resourceLinks: ["Blog", "V&A", "Privacybeleid", "Algemene Voorwaarden"],
      rights: "Alle rechten voorbehouden.",
      privacyPolicy: "Privacybeleid",
      terms: "Algemene Voorwaarden",
    },
    consent: {
      title: "🍪 Wij gebruiken cookies",
      text: "Wij gebruiken essentiële cookies om onze site te laten werken. Met uw toestemming gebruiken wij ook analytische cookies om te begrijpen hoe u onze site gebruikt en uw ervaring te verbeteren. Uw gegevens worden verwerkt in overeenstemming met ons",
      privacyPolicy: "Privacybeleid",
      and: "en",
      cookiePolicy: "Cookiebeleid",
      reject: "Niet-essentieel Weigeren",
      accept: "Alles Accepteren",
    },
    aboutPage: {
      heroBadge: "OVER PREAUMATE",
      heroTitle1: "Gebouwd door Ingenieurs.",
      heroTitle2: "Gedreven door Passie.",
      heroSubtitle:
        "Preaumate is een industrieel automatiseringsbedrijf met meer dan 20 jaar gecombineerde ervaring, wereldwijd actief vanuit Nederland en Mexico.",
      locations: ["Nederland", "Mexico", "Wereldwijde Activiteiten"],
      whoWeAreBadge: "WIE WE ZIJN",
      whoWeAreTitle: "Ons Verhaal",
      whoWeArePara1:
        "Preaumate is een industrieel automatiseringsbedrijf opgericht door ingenieurs, met een enthousiaste en echte passie voor de industrie. Wij zijn een jong bedrijf — maar geen nieuw team. Samen brengen wij meer dan 20 jaar praktische automatiseringserfvaring mee naar elk project.",
      whoWeArePara2:
        "Ons team is gevestigd in Nederland en Mexico — een geografische spreiding die niet toevallig is, maar by design. Wij werken wereldwijd, reageren snel en zijn er op ingericht om klanten onshore, offshore en op afstand te ondersteunen over tijdzones heen.",
      whoWeArePara3:
        "Wij zijn Preaumate begonnen omdat wij geloven dat het beste automatiseringswerk gebeurt wanneer de mensen die het doen dicht bij het probleem staan, persoonlijk geïnvesteerd zijn in het resultaat en niet worden vertraagd door bedrijfslagen.",
      whoWeArePara4:
        "Wij kennen de klassieke industriële automatiseringswereld goed — want wij komen er zelf uit. En wij begrijpen de transformatie die gaande is. Onze rol is klanten door beide te navigeren.",
      whatWeDoBadge: "WAT WE DOEN",
      whatWeDoTitle: "Onze Diensten",
      whatWeDoIntro:
        "Wij zijn automatiseringsspecialisten die zich even thuis voelen in een serverruimte als op een fabrieksvloer. Wij gaan aan de slag waar het telt — hands-on, probleemoplossend en volledig toegewijd.",
      servicesList: [
        {
          title: "PLC Programmering",
          description:
            "Wij programmeren op de grote platforms — Siemens (TIA Portal, S7-1200/1500), Rockwell Automation (Studio 5000) en CoDeSys-gebaseerde controllers. Wij werken met traditionele hardware PLC-opstellingen en moderne software PLC-omgevingen, virtualisatie- en containerisatieplatforms. Wij programmeren ook Safety PLCs — functionele veiligheid op de juiste manier, volgens de geldende normen.",
        },
        {
          title: "HMI Ontwikkeling",
          description:
            "Wij ontwerpen en bouwen bedieningsinterfaces die intuïtief, duidelijk en gebouwd zijn voor de mensen die ze daadwerkelijk gebruiken. Goed HMI-ontwerp wordt consequent onderschat — wij nemen het serieus.",
        },
        {
          title: "Dataverzameling, IoT, Cloud en Edge",
          description:
            "Wij verbinden machines, sensoren en systemen zodat data stroomt waar het naartoe moet — OPC-UA, MQTT, databaseconnectiviteit, MES en SCADA integratie. Wij implementeren zowel cloud-gebaseerde als edge dataverwerking architecturen.",
        },
        {
          title: "Cyberbeveiliging",
          description:
            "Industriële cyberbeveiliging is niet langer optioneel. Naarmate automatiseringssystemen meer verbonden worden, groeit het aanvalsoppervlak. Wij ontwerpen architecturen met beveiliging vanaf het begin: netwerksegmentatie, veilige toegang op afstand, geharde configuraties.",
        },
        {
          title: "AI-integratie",
          description:
            "Wij integreren AI-gestuurde mogelijkheden in automatiseringsprojecten — voorspellend onderhoud, anomaliedetectie, procesoptimalisatie. Niet als buzzwords, maar als praktische tools.",
        },
        {
          title: "Remote Services",
          description:
            "Wij zijn gebouwd voor werk op afstand. Wij ondersteunen, lossen problemen op en wijzigen systemen vanuit elke plek ter wereld — veilig, betrouwbaar en met minimale verstoring.",
        },
        {
          title: "Projectvoorbereiding en Management",
          description:
            "Wij ondersteunen klanten vanaf de vroegste fasen — functionele specificaties, softwarearchitectuur, scopebepaling — tot en met inbedrijfstelling en overdracht.",
        },
      ],
      industriesBadge: "ERVARING",
      industriesTitle: "Sectoren Waarin Wij Hebben Gewerkt",
      industriesIntro:
        "De ervaring van ons team strekt zich uit over een breed scala aan industriële omgevingen — aan land, offshore en over continenten.",
      industries: [
        { label: "Robotproductie", icon: "🦾" },
        { label: "Voedings- en Drankenindustrie", icon: "🏭" },
        { label: "Waterbehandeling & Nutsvoorzieningen", icon: "💧" },
        { label: "HVAC & Gebouwautomatisering", icon: "🌡️" },
        { label: "Opslag & Logistiek", icon: "📦" },
        { label: "Offshore Installaties", icon: "⚓" },
      ],
      philosophyBadge: "ONZE FILOSOFIE",
      philosophyTitle:
        "Klassieke Automatisering en de Nieuwe Industriële Realiteit",
      philosophyPara1:
        "Wij hebben groot respect voor de ingenieerstradities die de industriële automatiseringsindustrie hebben opgebouwd. De normen, de methodologieën, de hardwareplatforms — ze bestaan omdat ze werken.",
      philosophyPara2:
        "Maar de industrie verandert. Software PLC's, virtualisatie, containerisatie, edge computing, AI-gestuurde analyses, cloudconnectiviteit en industriële cyberbeveiliging zijn productieklaar en transformeren wat mogelijk is.",
      philosophyPara3:
        "Onze waarde voor klanten is dat wij beide werelden begrijpen. Wij kunnen een klassiek, betrouwbaar project leveren. En wij kunnen klanten die klaar zijn voor modernisering helpen begrijpen wat dat voor hen betekent.",
      classicalTitle: "Klassieke Automatisering",
      classicalDesc:
        "Bewezen hardwareplatforms, gevestigde normen, betrouwbare architecturen die al decennia lang de industrie aandrijven. Als dit is wat uw project nodig heeft — wij leveren het met volledig vertrouwen.",
      modernTitle: "Moderne Automatisering",
      modernDesc:
        "Software PLC's, cloudconnectiviteit, AI-gestuurde inzichten, edge computing, industriële cyberbeveiliging. Als u klaar bent voor modernisering — wij helpen u het juiste pad te kiezen.",
      finalNote:
        "Wij geloven niet dat elk project de nieuwste technologie nodig heeft. Wij geloven dat elk project de juiste technologie verdient.",
      ctaTitle: "Klaar om Samen te Werken?",
      ctaSubtitle:
        "Als u op zoek bent naar een partner die uw project als het eigen behandelt, zonder vertraging reageert en werk levert dat standhoudt — wij horen graag van u.",
      ctaButton: "Neem Contact Op",
    },
    crossover: {
      badge: "DE CONVERGENTIE",
      title: "Waar de Fabrieksvloer de Datalaag Ontmoet",
      subtitle:
        "De meeste automatiseringsingenieurs begrijpen besturingssystemen. De meeste data-ingenieurs begrijpen connectiviteit. Zeer weinigen begrijpen beide diepgaand — en nog minder weten hoe ze AI daar praktisch in kunnen brengen.",
      statement:
        "Wij bevinden ons op dat snijpunt. En wij denken dat het de belangrijkste positie is in industriële automatisering op dit moment.",
      pillar1: {
        label: "Klassieke Besturing",
        heading: "De machine werkt betrouwbaar.",
        description:
          "Siemens, Rockwell, CoDeSys — gestructureerde PLC code geschreven om te blijven, veiligheidssystemen geprogrammeerd volgens de norm, HMI en SCADA gebouwd voor de operator die het daadwerkelijk gebruikt.",
        tags: [
          "PLC Programmering",
          "Veiligheidssystemen",
          "HMI / SCADA",
          "Systeemintegratie",
        ],
      },
      pillar2: {
        label: "Verbonden Data",
        heading: "De machine communiceert.",
        description:
          "OPC-UA en MQTT pipelines die data van de fabrieksvloer verplaatsen naar waar het naartoe moet. Edge computing dat lokaal verwerkt wanneer cloud geen optie is. Dashboards die operators laten zien wat er gebeurt.",
        tags: [
          "OPC-UA / MQTT",
          "Edge Computing",
          "Cloud Connectiviteit",
          "Data Pipelines",
        ],
      },
      pillar3: {
        label: "AI & Intelligentie",
        heading: "De machine denkt.",
        description:
          "Voorspellende onderhoudsmodellen die storingen signaleren voordat ze optreden. Anomaliedetectie die procesdrift in real-time opvangt. Computer vision voor kwaliteitsinspectie. AI API's geïntegreerd in industriële software als een echte operationele tool.",
        tags: [
          "Voorspellend Onderhoud",
          "Anomaliedetectie",
          "Computer Vision",
          "AI API Integratie",
        ],
      },
      closing:
        "Dit zijn geen drie afzonderlijke diensten. Het is één geïntegreerde aanpak — gebouwd voor de generatie industriële automatisering waarbij de besturingslaag en de intelligentielaag hetzelfde systeem zijn.",
    },
    howWeWork: {
  badge: 'HOE WIJ WERKEN',
  title: 'Hoe het Is om Met Ons te Werken',
  subtitle: 'Wij houden het eenvoudig, direct en transparant — geen accountmanagers, geen overdrachten. U werkt rechtstreeks met de ingenieurs die het werk doen.',
  steps: [
    { number: '01', title: 'Wij Praten', description: 'U vertelt ons over uw uitdaging. Wij stellen de vragen die er toe doen. Geen verkooppraatje — gewoon een eerlijk gesprek over of wij de juiste match zijn voor uw project.' },
    { number: '02', title: 'Wij Plannen', description: 'Wij definiëren samen de scope, de aanpak en de tijdlijn. U krijgt een duidelijk beeld van wat wij zullen leveren, hoe lang het duurt en wat het kost — voordat het werk begint.' },
    { number: '03', title: 'Wij Bouwen', description: 'Wij doen het werk. U heeft gedurende het hele project directe toegang tot de ingenieurs die uw systeem bouwen. Problemen worden snel opgelost omdat beslissingen worden genomen door de mensen die het probleem begrijpen.' },
    { number: '04', title: 'Wij Ondersteunen', description: 'Wij verdwijnen niet na de overdracht. Wij documenteren grondig, trainen uw team goed en blijven beschikbaar voor vragen en ondersteuning.' },
  ],
},

whyPreaumate: {
  badge: 'WAAROM WIJ',
  title: 'Het Eerlijke Argument voor Samenwerken met een Klein Team',
  intro: 'Wij zijn een nieuw bedrijf. We weten dat dat het eerste bezwaar is. Hier is ons eerlijke antwoord daarop.',
  cards: [
    { title: 'U krijgt de senior ingenieurs — bij elk project', description: 'Bij een grote integrator kan uw project worden opgezet door een senior ingenieur en worden uitgevoerd door een junior. Bij ons zijn de mensen met wie u spreekt de mensen die het werk doen. Altijd.' },
    { title: 'Twintig jaar ervaring is geen klein getal', description: 'Preaumate is nieuw. De expertise erachter niet. Ons team heeft automatiseringsprojecten geleverd in meerdere sectoren, op meerdere platforms en in meerdere landen.' },
    { title: 'Wij bewegen sneller omdat wij kleiner zijn', description: 'Geen interne goedkeuringsketens. Geen planningsconflicten tussen afdelingen. Wanneer iets opgelost moet worden, lossen wij het op.' },
    { title: 'Ons bedrijf hangt af van het succes van uw project', description: 'Een groot bedrijf kan een project dat niet goed ging absorberen. Wij kunnen dat niet. Die asymmetrie werkt in uw voordeel.' },
  ],
},

pricing: {
  signal: 'Wij werken op project- en dagtarief basis. Neem contact op voor een offerte — wij reageren binnen één werkdag.',
},

endorsements: {
  badge: 'WAT COLLEGA\'S ZEGGEN',
  title: 'Vertrouwd door Ingenieurs die het Werk Kennen',
  subtitle: 'Preaumate is een nieuw bedrijf. De mensen erachter zijn dat niet. Dit is wat degenen die naast ons hebben gewerkt te zeggen hebben.',
  cta: 'Wilt u uw project bespreken?',
  ctaButton: 'Neem Contact Op',
  quotes: [
    {
      text: 'Een van de technisch meest bekwame automatiseringsingenieurs waarmee ik heb gewerkt. Gestructureerde code, helder denken en het soort probleemoplossend vermogen dat zichtbaar wordt wanneer het op locatie ingewikkeld wordt.',
      author: 'Senior Projectingenieur',
      company: 'Vorige werkgever — naam op verzoek niet vermeld',
      initials: 'SP',
    },
    {
      text: 'Wat dit team onderscheidt is dat ze zowel de besturingslaag als de datalaag echt begrijpen. Die combinatie is zeldzaam in de industrie en maakt een echt verschil bij complexe integratieprojecten.',
      author: 'Automatiseringsmanager',
      company: 'Industriële fabrikant — Nederland',
      initials: 'AM',
    },
    {
      text: 'Betrouwbaar, snel in reageren en oprecht geïnvesteerd in het goed laten verlopen. De documentatie en overdracht waren de beste die ik heb gezien bij een project van dit soort.',
      author: 'Plant Operations Manager',
      company: 'Voedings- en drankenfaciliteit',
      initials: 'PO',
    },
  ],
},

serviceArea: {
  badge: 'WAAR WIJ ACTIEF ZIJN',
  title: 'Wereldwijd Bereik. Persoonlijke Betrokkenheid.',
  subtitle: 'Industriële automatisering vereist vaak fysieke aanwezigheid. Zo werken wij over grenzen heen.',
  intro: 'Wij zijn gevestigd in Nederland en Mexico — twee locaties die samen Europese en Amerikaanse tijdzones zonder vertraging bestrijken. Wij werken onshore, offshore en op afstand, en reizen wereldwijd voor inbedrijfstelling op locatie, FAT-begeleiding en locatieondersteuning.',
  cards: [
    {
      region: 'Europa',
      flag: '🇪🇺',
      description: 'Onze Nederlandse basis bestrijkt West-Europa. Wij werken op locatie in de hele EU en het VK, en kunnen snel reageren op projecten in de regio.',
      highlights: ['Nederland — primaire basis', 'Op locatie in EU en VK', 'Offshore — Noordzee en verder'],
    },
    {
      region: 'Amerika',
      flag: '🌎',
      description: 'Onze Mexicaanse basis bestrijkt Noord- en Latijns-Amerika. Van offshore platforms in de Golf van Mexico tot productiefaciliteiten op het continent.',
      highlights: ['Mexico — primaire basis', 'Noord- en Latijns-Amerika', 'Offshore Golf van Mexico'],
    },
    {
      region: 'Remote & Wereldwijd',
      flag: '🌐',
      description: 'Veel automatiseringstaken — PLC-programmering, HMI-ontwikkeling, SCADA-werk, dataplatformontwikkeling — kunnen volledig op afstand worden uitgevoerd.',
      highlights: ['Veilige toegang op afstand', 'Volledige remote levering voor softwarewerk', 'Wereldwijd reizen voor fasen op locatie'],
    },
  ],
  travelNote: 'Reiskosten en logistiek worden transparant besproken als onderdeel van elke projectscope. Wij verbergen ze niet in het tarief.',
},
  },

  // ─── SPANISH ─────────────────────────────────────────────────────
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      blog: "Blog",
      qa: "P&R",
      contact: "Contacto",
    },
    hero: {
      title: "Automatización Industrial Reimaginada",
      subtitle:
        "Transforme su manufactura con automatización impulsada por IA, análisis predictivos y soluciones de fábrica inteligente.",
      cta: "Comience Su Viaje de Automatización",
    },
    about: {
      badge: "SOBRE PREAUMATE",
      title1: "Construido por Ingenieros.",
      title2: "Impulsado por Pasión.",
      para1:
        "Preaumate es una consultora de automatización industrial creada por ingenieros, con una genuina pasión por la industria. Nuestro equipo aporta más de 20 años de experiencia combinada en plataformas Siemens, Rockwell y CoDeSys — y nos sentimos igual de cómodos en una planta de producción que en una sala de servidores.",
      para2:
        "Hemos trabajado en manufactura robótica, alimentos y bebidas, tratamiento de agua, HVAC, logística e instalaciones offshore. Con sede en los Países Bajos y México, operamos globalmente — onshore, offshore y de forma remota — con tiempos de respuesta rápidos en todas las zonas horarias.",
      para3:
        "Conocemos bien el mundo clásico de la automatización industrial. También entendemos la transformación que está en curso. Nuestro papel es ayudar a los clientes a navegar por ambos mundos.",
      readMore: "Lea nuestra historia completa",
      features: [
        {
          title: "Automatización con IA",
          description:
            "Aproveche la inteligencia artificial de vanguardia para automatizar procesos industriales complejos con precisión sin precedentes.",
        },
        {
          title: "Monitoreo en Tiempo Real",
          description:
            "Monitoree cada aspecto de su línea de producción en tiempo real con redes avanzadas de sensores IoT y paneles de control.",
        },
        {
          title: "Datos, IoT y Nube",
          description:
            "Adquisición de datos en tiempo real, conectividad IoT, procesamiento en nube y borde — haciendo que los datos de sus máquinas trabajen para usted.",
        },
        {
          title: "Optimización Energética",
          description:
            "Reduzca el consumo de energía hasta un 40% mediante el balanceo inteligente de carga y la gestión predictiva de energía.",
        },
        {
          title: "Mantenimiento Predictivo",
          description:
            "Prevenga costosas paradas prediciendo fallos de equipos antes de que ocurran mediante modelos de aprendizaje automático.",
        },
      ],
      stats: [
        "Proyectos Entregados",
        "Satisfacción del Cliente",
        "Ahorro Energético Promedio",
        "Años de Experiencia",
      ],
    },
    services: {
      badge: "LO QUE HACEMOS",
      title: "Automatización de Principio a Fin",
      subtitle:
        "Desde robótica hasta análisis — entregamos soluciones completas de automatización industrial basadas en tecnología Siemens probada.",
      items: [
        {
          title: "Automatización de Procesos Robóticos",
          description:
            "Despliegue robots inteligentes y sistemas automatizados que manejan tareas repetitivas con precisión y velocidad.",
        },
        {
          title: "Automatización de Ensamblaje",
          description:
            "Optimice su producción con soluciones de automatización de ensamblaje flexibles y eficientes.",
        },
        {
          title: "Manejo de Materiales",
          description:
            "Soluciones inteligentes de manejo de materiales que mejoran el flujo, la seguridad y la eficiencia operativa.",
        },
        {
          title: "Control de Calidad",
          description:
            "Sistemas avanzados de inspección y control de calidad para garantizar consistencia y excelencia.",
        },
        {
          title: "Soluciones de Fábrica Inteligente",
          description:
            "Transforme la manufactura tradicional en entornos de producción totalmente conectados y auto-optimizados.",
        },
        {
          title: "Análisis Predictivos",
          description:
            "Anticipe fallos antes de que ocurran utilizando perspectivas impulsadas por IA de los datos de su maquinaria.",
        },
        {
          title: "Integración IoT",
          description:
            "Conecte toda su planta de producción con sensores inteligentes y canales de datos en tiempo real.",
        },
      ],
    },
    statsBar: [
      "Proyectos Entregados",
      "Satisfacción del Cliente",
      "Años de Experiencia",
      "Soporte Remoto",
    ],
    featuresBar: {
      badge: "CAPACIDADES",
      items: [
        { title: "Soporte Remoto", subtitle: "24/7" },
        { title: "Contáctenos", subtitle: "contact@preaumate.com" },
        { title: "Impulsado por IA", subtitle: "Decisiones" },
        { title: "Análisis", subtitle: "Predictivos" },
        { title: "Fábrica", subtitle: "Inteligente" },
        { title: "Ciberseguridad", subtitle: "Lista" },
        { title: "Integración", subtitle: "IoT" },
        { title: "Construido para", subtitle: "el Futuro" },
      ],
    },
    contactSection: {
      badge: "PÓNGASE EN CONTACTO",
      title: "Comience Su Viaje de Automatización",
      subtitle:
        "¿Listo para transformar sus operaciones? Hablemos sobre sus necesidades de automatización.",
    },
    form: {
      title: "Póngase en Contacto",
      subtitle:
        "¿Listo para transformar sus operaciones industriales? Analicemos sus necesidades.",
      companyName: "Nombre de la Empresa",
      companyPlaceholder: "Ingrese el nombre de su empresa",
      email: "Correo Electrónico",
      emailPlaceholder: "su.correo@empresa.com",
      phone: "Número de Teléfono",
      phonePlaceholder: "+52 (0) 000 000 0000",
      serviceInterest: "Servicio de Interés",
      servicePlaceholder: "Seleccione un servicio...",
      message: "Mensaje",
      messagePlaceholder:
        "Cuéntenos sobre sus necesidades de automatización...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      services: [
        "Automatización de Procesos Robóticos",
        "Integración IoT",
        "Soluciones de Fábrica Inteligente",
        "Análisis Predictivos",
        "Consultoría General",
      ],
      errors: {
        companyRequired: "El nombre de la empresa es requerido",
        emailRequired: "El correo electrónico es requerido",
        emailInvalid: "Formato de correo electrónico inválido",
        phoneRequired: "El número de teléfono es requerido",
        serviceRequired: "Por favor seleccione un servicio",
        messageRequired: "El mensaje es requerido",
        validationTitle: "Error de Validación del Formulario",
        validationDesc:
          "Por favor complete todos los campos requeridos correctamente.",
        errorTitle: "Algo salió mal",
        errorDesc:
          "Su mensaje no pudo enviarse. Inténtelo de nuevo o contáctenos directamente.",
        successTitle: "¡Mensaje Enviado Exitosamente! 🎉",
        successDesc:
          "¡Gracias! Nos pondremos en contacto pronto para analizar sus necesidades de automatización.",
      },
    },
    footer: {
      tagline: "AUTOMATIZACIÓN INDUSTRIAL",
      description:
        "Reimaginando la automatización industrial para la próxima generación de manufactura. Certificados por Siemens. Listos para la Industria 4.0.",
      navHeading: "NAVEGACIÓN",
      resourcesHeading: "RECURSOS",
      contactHeading: "CONTACTO",
      navLinks: ["Inicio", "Nosotros", "Servicios", "Contacto"],
      resourceLinks: [
        "Blog",
        "P&R",
        "Política de Privacidad",
        "Términos y Condiciones",
      ],
      rights: "Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      terms: "Términos y Condiciones",
    },
    consent: {
      title: "🍪 Usamos cookies",
      text: "Usamos cookies esenciales para que nuestro sitio funcione. Con su consentimiento, también usamos cookies analíticas para entender cómo usa nuestro sitio. Sus datos son procesados de acuerdo con nuestra",
      privacyPolicy: "Política de Privacidad",
      and: "y",
      cookiePolicy: "Política de Cookies",
      reject: "Rechazar No Esenciales",
      accept: "Aceptar Todo",
    },
    aboutPage: {
      heroBadge: "SOBRE PREAUMATE",
      heroTitle1: "Construido por Ingenieros.",
      heroTitle2: "Impulsado por Pasión.",
      heroSubtitle:
        "Preaumate es una consultora de automatización industrial con más de 20 años de experiencia combinada, operando globalmente desde los Países Bajos y México.",
      locations: ["Países Bajos", "México", "Operaciones Globales"],
      whoWeAreBadge: "QUIÉNES SOMOS",
      whoWeAreTitle: "Nuestra Historia",
      whoWeArePara1:
        "Preaumate es una consultora de automatización industrial creada por ingenieros, con un entusiasmo y pasión genuinos por la industria. Somos una empresa joven — pero no un equipo nuevo. Entre nosotros aportamos más de 20 años de experiencia práctica en automatización.",
      whoWeArePara2:
        "Nuestro equipo está ubicado en los Países Bajos y México — una distribución geográfica que no es incidental, sino por diseño. Trabajamos globalmente, respondemos rápidamente y estamos configurados para apoyar a los clientes onshore, offshore y remotamente en todas las zonas horarias.",
      whoWeArePara3:
        "Fundamos Preaumate porque creemos que el mejor trabajo de automatización ocurre cuando las personas que lo hacen están cerca del problema, invierten personalmente en el resultado y no son frenadas por capas corporativas.",
      whoWeArePara4:
        "Conocemos bien el mundo clásico de la automatización industrial — porque venimos de él. Y entendemos la transformación que está en curso. Nuestro papel es ayudar a los clientes a navegar por ambos.",
      whatWeDoBadge: "LO QUE HACEMOS",
      whatWeDoTitle: "Nuestros Servicios",
      whatWeDoIntro:
        "Somos especialistas en automatización que nos sentimos tan cómodos en una sala de servidores como en el piso de una fábrica. Nos involucramos donde importa — manos a la obra, resolviendo problemas.",
      servicesList: [
        {
          title: "Programación PLC",
          description:
            "Programamos en las plataformas principales — Siemens (TIA Portal, S7-1200/1500), Rockwell Automation (Studio 5000) y controladores basados en CoDeSys. Trabajamos con configuraciones PLC de hardware tradicional así como entornos PLC de software moderno, plataformas de virtualización y contenerización. También programamos Safety PLCs.",
        },
        {
          title: "Desarrollo HMI",
          description:
            "Diseñamos y construimos interfaces de operador que son intuitivas, claras y construidas para las personas que realmente las usan. El buen diseño de HMI es consistentemente subestimado — nosotros lo tomamos en serio.",
        },
        {
          title: "Adquisición de Datos, IoT, Nube y Edge",
          description:
            "Conectamos máquinas, sensores y sistemas para que los datos fluyan donde necesitan ir — OPC-UA, MQTT, conectividad de bases de datos, integración MES y SCADA. Implementamos arquitecturas de procesamiento en nube y edge.",
        },
        {
          title: "Ciberseguridad",
          description:
            "La ciberseguridad industrial ya no es opcional. A medida que los sistemas de automatización se vuelven más conectados, la superficie de ataque crece. Diseñamos arquitecturas con seguridad integrada desde el inicio.",
        },
        {
          title: "Integración de IA",
          description:
            "Integramos capacidades impulsadas por IA en proyectos de automatización — mantenimiento predictivo, detección de anomalías, optimización de procesos.",
        },
        {
          title: "Servicios Remotos",
          description:
            "Estamos construidos para el trabajo remoto. Soportamos, resolvemos problemas y modificamos sistemas desde cualquier lugar del mundo — de forma segura y con mínima interrupción.",
        },
        {
          title: "Preparación y Gestión de Proyectos",
          description:
            "Apoyamos a los clientes desde las etapas más tempranas — especificaciones funcionales, arquitectura de software, definición de alcance — hasta la puesta en marcha y entrega.",
        },
      ],
      industriesBadge: "EXPERIENCIA",
      industriesTitle: "Industrias en las que Hemos Trabajado",
      industriesIntro:
        "La experiencia de nuestro equipo abarca una amplia gama de entornos industriales — en tierra, offshore y en todos los continentes.",
      industries: [
        { label: "Manufactura Robótica", icon: "🦾" },
        { label: "Producción Alimentos y Bebidas", icon: "🏭" },
        { label: "Tratamiento de Agua y Utilities", icon: "💧" },
        { label: "HVAC y Automatización de Edificios", icon: "🌡️" },
        { label: "Almacenamiento y Logística", icon: "📦" },
        { label: "Instalaciones Offshore", icon: "⚓" },
      ],
      philosophyBadge: "NUESTRA FILOSOFÍA",
      philosophyTitle: "Automatización Clásica y la Nueva Realidad Industrial",
      philosophyPara1:
        "Tenemos un profundo respeto por las tradiciones de ingeniería que construyeron la industria de automatización industrial. Los estándares, las metodologías, las plataformas de hardware — existen porque funcionan.",
      philosophyPara2:
        "Pero la industria está cambiando. Los PLC de software, la virtualización, la contenerización, el edge computing, los análisis impulsados por IA, la conectividad en la nube y la ciberseguridad industrial están listos para producción.",
      philosophyPara3:
        "Nuestro valor para los clientes es que entendemos ambos mundos. Podemos entregar un proyecto clásico, confiable y conforme a normas. Y podemos ayudar a los clientes que están listos para modernizarse.",
      classicalTitle: "Automatización Clásica",
      classicalDesc:
        "Plataformas de hardware probadas, estándares establecidos, arquitecturas confiables que han impulsado la industria durante décadas.",
      modernTitle: "Automatización Moderna",
      modernDesc:
        "PLC de software, conectividad en la nube, perspectivas impulsadas por IA, edge computing, ciberseguridad industrial.",
      finalNote:
        "No creemos que todo proyecto necesite la tecnología más nueva. Creemos que todo proyecto merece la tecnología correcta.",
      ctaTitle: "¿Listo para Trabajar Juntos?",
      ctaSubtitle:
        "Si busca un socio que trate su proyecto como propio, responda sin demora y entregue trabajo que se sostenga — nos gustaría hablar.",
      ctaButton: "Ponerse en Contacto",
    },
    crossover: {
      badge: "LA CONVERGENCIA",
      title: "Donde el Piso de Fábrica Encuentra la Capa de Datos",
      subtitle:
        "La mayoría de los ingenieros de automatización entienden los sistemas de control. La mayoría de los ingenieros de datos entienden la conectividad. Muy pocos entienden ambos profundamente — y menos aún saben cómo integrar la IA de manera práctica.",
      statement:
        "Nosotros estamos en esa intersección. Y creemos que es el lugar más importante en la automatización industrial ahora mismo.",
      pillar1: {
        label: "Control Clásico",
        heading: "La máquina funciona de manera confiable.",
        description:
          "Siemens, Rockwell, CoDeSys — código PLC estructurado escrito para durar, sistemas de seguridad programados según norma, HMI y SCADA construidos para el operador que realmente los usa.",
        tags: [
          "Programación PLC",
          "Sistemas de Seguridad",
          "HMI / SCADA",
          "Integración de Sistemas",
        ],
      },
      pillar2: {
        label: "Datos Conectados",
        heading: "La máquina habla.",
        description:
          "Pipelines OPC-UA y MQTT que mueven datos del piso de fábrica a donde necesitan ir. Edge computing que procesa localmente cuando la nube no es una opción. Dashboards que muestran a los operadores lo que está sucediendo.",
        tags: [
          "OPC-UA / MQTT",
          "Edge Computing",
          "Conectividad Cloud",
          "Pipelines de Datos",
        ],
      },
      pillar3: {
        label: "IA e Inteligencia",
        heading: "La máquina piensa.",
        description:
          "Modelos de mantenimiento predictivo que señalan fallos antes de que ocurran. Detección de anomalías que capta la deriva del proceso en tiempo real. Visión artificial para inspección de calidad. APIs de IA integradas en software industrial como herramienta operacional real.",
        tags: [
          "Mantenimiento Predictivo",
          "Detección de Anomalías",
          "Visión Artificial",
          "Integración API IA",
        ],
      },
      closing:
        "No son tres servicios separados. Es un enfoque integrado — construido para la generación de automatización industrial donde la capa de control y la capa de inteligencia son el mismo sistema.",
    },
    howWeWork: {
  badge: 'CÓMO TRABAJAMOS',
  title: 'Cómo Es Trabajar Con Nosotros',
  subtitle: 'Lo mantenemos simple, directo y transparente — sin gerentes de cuenta, sin transferencias. Trata directamente con los ingenieros que hacen el trabajo.',
  steps: [
    { number: '01', title: 'Hablamos', description: 'Nos cuenta su desafío. Hacemos las preguntas que importan. Sin discurso de ventas — solo una conversación honesta sobre si somos la combinación correcta para su proyecto.' },
    { number: '02', title: 'Planificamos', description: 'Definimos juntos el alcance, el enfoque y el cronograma. Obtiene una imagen clara de lo que entregaremos, cuánto tiempo tomará y qué costará — antes de que comience cualquier trabajo.' },
    { number: '03', title: 'Construimos', description: 'Hacemos el trabajo. Tiene acceso directo a los ingenieros que construyen su sistema durante todo el proceso. Los problemas se resuelven rápidamente porque las decisiones las toman las personas que entienden el problema.' },
    { number: '04', title: 'Apoyamos', description: 'No desaparecemos después de la entrega. Documentamos exhaustivamente, capacitamos a su equipo correctamente y permanecemos disponibles para preguntas y soporte.' },
  ],
},

whyPreaumate: {
  badge: 'POR QUÉ NOSOTROS',
  title: 'El Argumento Honesto para Trabajar con un Equipo Pequeño',
  intro: 'Somos una empresa nueva. Sabemos que esa es la primera objeción. Aquí está nuestra respuesta honesta.',
  cards: [
    { title: 'Obtiene los ingenieros senior — en cada trabajo', description: 'Con un integrador grande, su proyecto puede ser diseñado por un ingeniero senior y entregado por uno junior. Con nosotros, las personas con las que habla son las personas que hacen el trabajo. Siempre.' },
    { title: 'Veinte años de experiencia no es un número pequeño', description: 'Preaumate es nueva. La experiencia detrás de ella no. Nuestro equipo ha entregado proyectos de automatización en múltiples industrias, plataformas y países.' },
    { title: 'Nos movemos más rápido porque somos más pequeños', description: 'Sin cadenas de aprobación internas. Sin conflictos de programación entre departamentos. Cuando algo necesita resolverse, lo resolvemos.' },
    { title: 'Nuestro negocio depende de que su proyecto salga bien', description: 'Una empresa grande puede absorber un proyecto que no salió bien. Nosotros no. Esa asimetría trabaja a su favor.' },
  ],
},

pricing: {
  signal: 'Trabajamos en base a proyectos y tarifa diaria. Contáctenos para un presupuesto — respondemos en un día hábil.',
},

endorsements: {
  badge: 'LO QUE DICEN LOS COLEGAS',
  title: 'Confiado por Ingenieros que Conocen el Trabajo',
  subtitle: 'Preaumate es una empresa nueva. Las personas detrás de ella no lo son. Esto es lo que tienen que decir quienes han trabajado junto a nosotros.',
  cta: '¿Quiere discutir su proyecto?',
  ctaButton: 'Ponerse en Contacto',
  quotes: [
    {
      text: 'Uno de los ingenieros de automatización más capaces técnicamente con los que he trabajado. Código estructurado, pensamiento claro y el tipo de capacidad de resolución de problemas que se nota cuando las cosas se complican en el sitio.',
      author: 'Ingeniero de Proyectos Senior',
      company: 'Empleador anterior — nombre retenido a petición',
      initials: 'SP',
    },
    {
      text: 'Lo que distingue a este equipo es que realmente entienden tanto la capa de control como la capa de datos. Esa combinación es rara en la industria y marca una diferencia real en proyectos de integración complejos.',
      author: 'Gerente de Automatización',
      company: 'Fabricante industrial — Países Bajos',
      initials: 'AM',
    },
    {
      text: 'Confiable, rápido en responder y genuinamente comprometido con obtener el resultado correcto. La documentación y la entrega fueron las mejores que he visto en un proyecto de este tipo.',
      author: 'Gerente de Operaciones de Planta',
      company: 'Instalación de producción de alimentos y bebidas',
      initials: 'PO',
    },
  ],
},

serviceArea: {
  badge: 'DÓNDE OPERAMOS',
  title: 'Alcance Global. Compromiso Personal.',
  subtitle: 'El trabajo de automatización industrial a menudo requiere presencia física. Así es como trabajamos a través de fronteras.',
  intro: 'Estamos ubicados en los Países Bajos y México — dos ubicaciones que juntas cubren las zonas horarias europeas y americanas sin demora. Trabajamos onshore, offshore y de forma remota, y viajamos globalmente para la puesta en marcha en sitio, la supervisión de FAT y el soporte en sitio.',
  cards: [
    {
      region: 'Europa',
      flag: '🇪🇺',
      description: 'Nuestra base en los Países Bajos cubre Europa Occidental. Trabajamos en sitio en toda la UE y el Reino Unido.',
      highlights: ['Países Bajos — base principal', 'En sitio en toda la UE y UK', 'Offshore — Mar del Norte y más allá'],
    },
    {
      region: 'América',
      flag: '🌎',
      description: 'Nuestra base en México cubre Norte y Latinoamérica. Desde plataformas offshore en el Golfo de México hasta instalaciones de producción en todo el continente.',
      highlights: ['México — base principal', 'Norte y Latinoamérica', 'Offshore Golfo de México'],
    },
    {
      region: 'Remoto y Global',
      flag: '🌐',
      description: 'Muchas tareas de automatización pueden entregarse completamente de forma remota. Tenemos infraestructura de acceso remoto seguro y nos comunicamos en todas las zonas horarias de manera confiable.',
      highlights: ['Acceso remoto seguro', 'Entrega remota completa para trabajo de software', 'Viajes mundiales para fases en sitio'],
    },
  ],
  travelNote: 'Los costos de viaje y la logística se discuten de forma transparente como parte de cada alcance de proyecto. No los ocultamos en la tarifa.',
},
  },

  // ─── GERMAN ──────────────────────────────────────────────────────
  de: {
    nav: {
      home: "Start",
      about: "Über uns",
      services: "Leistungen",
      blog: "Blog",
      qa: "F&A",
      contact: "Kontakt",
    },
    hero: {
      title: "Industrieautomatisierung Neu Gedacht",
      subtitle:
        "Transformieren Sie Ihre Fertigung mit KI-gesteuerter Automatisierung, prädiktiver Analytik und Smart-Factory-Lösungen.",
      cta: "Starten Sie Ihre Automatisierungsreise",
    },
    about: {
      badge: "ÜBER PREAUMATE",
      title1: "Von Ingenieuren gebaut.",
      title2: "Von Leidenschaft angetrieben.",
      para1:
        "Preaumate ist eine Unternehmensberatung für industrielle Automatisierung, gegründet von Ingenieuren mit echter Leidenschaft für die Branche. Unser Team bringt über 20 Jahre kombinierte Erfahrung mit Siemens-, Rockwell- und CoDeSys-Plattformen mit — und wir fühlen uns auf dem Fabrikboden genauso wohl wie im Serverraum.",
      para2:
        "Wir haben in der Roboterfertigung, Lebensmittel- und Getränkeindustrie, Wasseraufbereitung, HLK, Logistik und Offshore-Anlagen gearbeitet. Mit Standorten in den Niederlanden und Mexiko operieren wir weltweit — onshore, offshore und remote — mit schnellen Reaktionszeiten über alle Zeitzonen.",
      para3:
        "Wir kennen die klassische Welt der industriellen Automatisierung gut. Wir verstehen auch die laufende Transformation. Unsere Rolle ist es, Kunden durch beide Welten zu navigieren.",
      readMore: "Lesen Sie unsere vollständige Geschichte",
      features: [
        {
          title: "KI-gesteuerte Automatisierung",
          description:
            "Nutzen Sie modernste künstliche Intelligenz, um komplexe Industrieprozesse mit beispielloser Präzision zu automatisieren.",
        },
        {
          title: "Echtzeit-Überwachung",
          description:
            "Überwachen Sie jeden Aspekt Ihrer Produktionslinie in Echtzeit mit fortschrittlichen IoT-Sensornetzwerken und Dashboards.",
        },
        {
          title: "Daten, IoT & Cloud",
          description:
            "Echtzeit-Datenerfassung, IoT-Konnektivität, Cloud- und Edge-Verarbeitung — Ihre Maschinendaten für Sie arbeiten lassen.",
        },
        {
          title: "Energieoptimierung",
          description:
            "Reduzieren Sie den Energieverbrauch um bis zu 40% durch intelligenten Lastausgleich und prädiktives Energiemanagement.",
        },
        {
          title: "Prädiktive Instandhaltung",
          description:
            "Vermeiden Sie kostspielige Ausfallzeiten, indem Sie Geräteausfälle mit Machine-Learning-Modellen vorhersagen.",
        },
      ],
      stats: [
        "Abgeschlossene Projekte",
        "Kundenzufriedenheit",
        "Durchschn. Energieeinsparung",
        "Jahre Erfahrung",
      ],
    },
    services: {
      badge: "WAS WIR TUN",
      title: "Automatisierung von A bis Z",
      subtitle:
        "Von Robotik bis Analytik — wir liefern vollständige industrielle Automatisierungslösungen auf Basis bewährter Siemens-Technologie.",
      items: [
        {
          title: "Roboterprozessautomatisierung",
          description:
            "Setzen Sie intelligente Roboter und automatisierte Systeme ein, die repetitive Aufgaben präzise und schnell ausführen.",
        },
        {
          title: "Montageautomatisierung",
          description:
            "Optimieren Sie Ihre Produktion mit flexiblen und effizienten Montageautomatisierungslösungen.",
        },
        {
          title: "Materialhandhabung",
          description:
            "Intelligente Materialhandhabungslösungen, die Fluss, Sicherheit und Betriebseffizienz verbessern.",
        },
        {
          title: "Qualitätskontrolle",
          description:
            "Fortschrittliche Inspektions- und Qualitätskontrollsysteme für Konsistenz und Exzellenz.",
        },
        {
          title: "Smart-Factory-Lösungen",
          description:
            "Verwandeln Sie traditionelle Fertigung in vollständig vernetzte, selbstoptimierende Produktionsumgebungen.",
        },
        {
          title: "Prädiktive Analytik",
          description:
            "Antizipieren Sie Ausfälle bevor sie auftreten, mit KI-gesteuerten Einblicken aus Ihren Maschinendaten.",
        },
        {
          title: "IoT-Integration",
          description:
            "Verbinden Sie Ihren gesamten Fabrikboden mit intelligenten Sensoren und Echtzeit-Datenpipelines.",
        },
      ],
    },
    statsBar: [
      "Abgeschlossene Projekte",
      "Kundenzufriedenheit",
      "Jahre Erfahrung",
      "Remote-Support",
    ],
    featuresBar: {
      badge: "KOMPETENZEN",
      items: [
        { title: "Remote-Support", subtitle: "24/7" },
        { title: "Kontaktieren Sie uns", subtitle: "contact@preaumate.com" },
        { title: "KI-gesteuert", subtitle: "Entscheidungen" },
        { title: "Prädiktive", subtitle: "Analytik" },
        { title: "Intelligente Fabrik", subtitle: "Lösungen" },
        { title: "Cybersicherheit", subtitle: "Bereit" },
        { title: "IoT", subtitle: "Integration" },
        { title: "Gebaut für", subtitle: "die Zukunft" },
      ],
    },
    contactSection: {
      badge: "KONTAKT AUFNEHMEN",
      title: "Starten Sie Ihre Automatisierungsreise",
      subtitle:
        "Bereit, Ihre Abläufe zu transformieren? Lassen Sie uns über Ihre Automatisierungsanforderungen sprechen.",
    },
    form: {
      title: "Kontakt aufnehmen",
      subtitle:
        "Bereit, Ihre industriellen Abläufe zu transformieren? Lassen Sie uns Ihre Bedürfnisse besprechen.",
      companyName: "Firmenname",
      companyPlaceholder: "Geben Sie Ihren Firmennamen ein",
      email: "E-Mail-Adresse",
      emailPlaceholder: "ihre.email@unternehmen.com",
      phone: "Telefonnummer",
      phonePlaceholder: "+49 (0) 000 000 000",
      serviceInterest: "Leistungsinteresse",
      servicePlaceholder: "Wählen Sie eine Leistung...",
      message: "Nachricht",
      messagePlaceholder:
        "Erzählen Sie uns von Ihren Automatisierungsanforderungen...",
      send: "Nachricht Senden",
      sending: "Wird gesendet...",
      services: [
        "Roboterprozessautomatisierung",
        "IoT-Integration",
        "Smart-Factory-Lösungen",
        "Prädiktive Analytik",
        "Allgemeine Beratung",
      ],
      errors: {
        companyRequired: "Firmenname ist erforderlich",
        emailRequired: "E-Mail-Adresse ist erforderlich",
        emailInvalid: "Ungültiges E-Mail-Format",
        phoneRequired: "Telefonnummer ist erforderlich",
        serviceRequired: "Bitte wählen Sie eine Leistung",
        messageRequired: "Nachricht ist erforderlich",
        validationTitle: "Formularvalidierungsfehler",
        validationDesc: "Bitte füllen Sie alle Pflichtfelder korrekt aus.",
        errorTitle: "Etwas ist schiefgelaufen",
        errorDesc:
          "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        successTitle: "Nachricht erfolgreich gesendet! 🎉",
        successDesc:
          "Vielen Dank! Wir werden uns bald mit Ihnen in Verbindung setzen.",
      },
    },
    footer: {
      tagline: "INDUSTRIEAUTOMATISIERUNG",
      description:
        "Industrieautomatisierung neu gedacht für die nächste Generation der Fertigung. Siemens-zertifiziert. Industrie 4.0 bereit.",
      navHeading: "NAVIGATION",
      resourcesHeading: "RESSOURCEN",
      contactHeading: "KONTAKT",
      navLinks: ["Start", "Über uns", "Leistungen", "Kontakt"],
      resourceLinks: ["Blog", "F&A", "Datenschutzrichtlinie", "AGB"],
      rights: "Alle Rechte vorbehalten.",
      privacyPolicy: "Datenschutzrichtlinie",
      terms: "AGB",
    },
    consent: {
      title: "🍪 Wir verwenden Cookies",
      text: "Wir verwenden notwendige Cookies, damit unsere Website funktioniert. Mit Ihrer Zustimmung verwenden wir auch Analyse-Cookies. Ihre Daten werden gemäß unserer",
      privacyPolicy: "Datenschutzrichtlinie",
      and: "und",
      cookiePolicy: "Cookie-Richtlinie",
      reject: "Nicht Notwendige Ablehnen",
      accept: "Alle Akzeptieren",
    },
    aboutPage: {
      heroBadge: "ÜBER PREAUMATE",
      heroTitle1: "Von Ingenieuren gebaut.",
      heroTitle2: "Von Leidenschaft angetrieben.",
      heroSubtitle:
        "Preaumate ist eine Unternehmensberatung für industrielle Automatisierung mit über 20 Jahren kombinierter Erfahrung, weltweit tätig von den Niederlanden und Mexiko aus.",
      locations: ["Niederlande", "Mexiko", "Weltweite Aktivitäten"],
      whoWeAreBadge: "WER WIR SIND",
      whoWeAreTitle: "Unsere Geschichte",
      whoWeArePara1:
        "Preaumate ist eine Unternehmensberatung für industrielle Automatisierung, gegründet von Ingenieuren mit echter und enthusiastischer Leidenschaft für die Branche. Wir sind ein junges Unternehmen — aber kein neues Team. Gemeinsam bringen wir über 20 Jahre praktische Automatisierungserfahrung in jedes Projekt ein.",
      whoWeArePara2:
        "Unser Team sitzt in den Niederlanden und Mexiko. Wir arbeiten weltweit, reagieren schnell und sind darauf ausgerichtet, Kunden onshore, offshore und remote über Zeitzonen hinweg zu unterstützen.",
      whoWeArePara3:
        "Wir haben Preaumate gegründet, weil wir glauben, dass die beste Automatisierungsarbeit entsteht, wenn die Menschen nah am Problem sind, persönlich investiert sind und nicht durch Unternehmensschichten verlangsamt werden.",
      whoWeArePara4:
        "Wir kennen die klassische Welt der industriellen Automatisierung gut — denn wir kommen aus ihr. Und wir verstehen die laufende Transformation.",
      whatWeDoBadge: "WAS WIR TUN",
      whatWeDoTitle: "Unsere Leistungen",
      whatWeDoIntro:
        "Wir sind Automatisierungsspezialisten, die sich im Serverraum genauso wohl fühlen wie auf dem Fabrikboden. Wir engagieren uns dort, wo es darauf ankommt — hands-on und lösungsorientiert.",
      servicesList: [
        {
          title: "SPS-Programmierung",
          description:
            "Wir programmieren auf den großen Plattformen — Siemens (TIA Portal, S7-1200/1500), Rockwell Automation (Studio 5000) und CoDeSys-basierte Controller. Wir arbeiten mit traditionellen Hardware-SPS-Aufbauten sowie modernen Software-SPS-Umgebungen, Virtualisierungs- und Containerisierungsplattformen. Wir programmieren auch Safety-SPSen.",
        },
        {
          title: "HMI-Entwicklung",
          description:
            "Wir entwerfen und bauen Bedieneroberflächen, die intuitiv, klar und für die Menschen gebaut sind, die sie tatsächlich verwenden.",
        },
        {
          title: "Datenerfassung, IoT, Cloud und Edge",
          description:
            "Wir verbinden Maschinen, Sensoren und Systeme — OPC-UA, MQTT, Datenbankanbindung, MES- und SCADA-Integration. Wir implementieren cloud-basierte und Edge-Datenverarbeitungsarchitekturen.",
        },
        {
          title: "Cybersicherheit",
          description:
            "Industrielle Cybersicherheit ist keine Option mehr. Wir entwerfen Automatisierungsarchitekturen mit integrierter Sicherheit von Anfang an: Netzsegmentierung, sicherer Fernzugriff, gehärtete Konfigurationen.",
        },
        {
          title: "KI-Integration",
          description:
            "Wir integrieren KI-gesteuerte Fähigkeiten in Automatisierungsprojekte — prädiktive Instandhaltung, Anomalieerkennung, Prozessoptimierung.",
        },
        {
          title: "Remote-Services",
          description:
            "Wir sind für Remote-Arbeit gebaut. Wir unterstützen und beheben Störungen von überall auf der Welt — sicher, zuverlässig und mit minimalen Betriebsunterbrechungen.",
        },
        {
          title: "Projektvorbereitung und Management",
          description:
            "Wir unterstützen Kunden von den frühesten Phasen — funktionale Spezifikationen, Softwarearchitektur, Scoping — bis zur Inbetriebnahme und Übergabe.",
        },
      ],
      industriesBadge: "ERFAHRUNG",
      industriesTitle: "Branchen, in denen wir tätig waren",
      industriesIntro:
        "Die Erfahrung unseres Teams erstreckt sich über ein breites Spektrum industrieller Umgebungen — an Land, offshore und auf allen Kontinenten.",
      industries: [
        { label: "Roboterfertigung", icon: "🦾" },
        { label: "Lebensmittel- & Getränkeindustrie", icon: "🏭" },
        { label: "Wasseraufbereitung & Versorgung", icon: "💧" },
        { label: "HLK & Gebäudeautomation", icon: "🌡️" },
        { label: "Lagerung & Logistik", icon: "📦" },
        { label: "Offshore-Anlagen", icon: "⚓" },
      ],
      philosophyBadge: "UNSERE PHILOSOPHIE",
      philosophyTitle:
        "Klassische Automatisierung und die neue industrielle Realität",
      philosophyPara1:
        "Wir haben tiefen Respekt vor den Ingenieurstraditionen, die die Branche aufgebaut haben. Die Normen, die Methoden, die Hardwareplattformen — sie existieren, weil sie funktionieren.",
      philosophyPara2:
        "Aber die Branche verändert sich. Software-SPSen, Virtualisierung, Containerisierung, Edge-Computing, KI-Analytik und industrielle Cybersicherheit sind produktionsreif.",
      philosophyPara3:
        "Wir verstehen beide Welten. Wir liefern klassische, zuverlässige Projekte. Und wir helfen Kunden bei der Modernisierung.",
      classicalTitle: "Klassische Automatisierung",
      classicalDesc:
        "Bewährte Hardwareplattformen, etablierte Normen, zuverlässige Architekturen. Wenn Ihr Projekt das braucht — wir liefern es mit vollem Vertrauen.",
      modernTitle: "Moderne Automatisierung",
      modernDesc:
        "Software-SPSen, Cloud-Konnektivität, KI-Einblicke, Edge-Computing, Cybersicherheit. Bereit für die Modernisierung — wir helfen Ihnen den richtigen Weg zu wählen.",
      finalNote:
        "Wir glauben nicht, dass jedes Projekt die neueste Technologie braucht. Wir glauben, jedes Projekt verdient die richtige Technologie.",
      ctaTitle: "Bereit zur Zusammenarbeit?",
      ctaSubtitle:
        "Suchen Sie einen Partner, der Ihr Projekt wie sein eigenes behandelt, ohne Verzögerung reagiert und standfeste Arbeit liefert — wir würden gerne sprechen.",
      ctaButton: "Kontakt aufnehmen",
    },
    crossover: {
      badge: "DIE KONVERGENZ",
      title: "Wo der Fabrikboden auf die Datenschicht Trifft",
      subtitle:
        "Die meisten Automatisierungsingenieure verstehen Steuerungssysteme. Die meisten Dateningenieure verstehen Konnektivität. Sehr wenige verstehen beides tiefgreifend — und noch weniger wissen, wie sie KI praktisch einbringen können.",
      statement:
        "Wir befinden uns an genau diesem Schnittpunkt. Und wir glauben, dass es der wichtigste Ort in der industriellen Automatisierung gerade jetzt ist.",
      pillar1: {
        label: "Klassische Steuerung",
        heading: "Die Maschine läuft zuverlässig.",
        description:
          "Siemens, Rockwell, CoDeSys — strukturierter SPS-Code, der für die Langlebigkeit geschrieben ist, Sicherheitssysteme nach Norm programmiert, HMI und SCADA für den Bediener gebaut, der sie tatsächlich verwendet.",
        tags: [
          "SPS-Programmierung",
          "Sicherheitssysteme",
          "HMI / SCADA",
          "Systemintegration",
        ],
      },
      pillar2: {
        label: "Vernetzte Daten",
        heading: "Die Maschine kommuniziert.",
        description:
          "OPC-UA und MQTT-Pipelines, die Daten vom Fabrikboden dorthin transportieren, wo sie gebraucht werden. Edge Computing, das lokal verarbeitet, wenn die Cloud keine Option ist. Dashboards, die Bedienern zeigen, was gerade passiert.",
        tags: [
          "OPC-UA / MQTT",
          "Edge Computing",
          "Cloud-Konnektivität",
          "Datenpipelines",
        ],
      },
      pillar3: {
        label: "KI & Intelligenz",
        heading: "Die Maschine denkt.",
        description:
          "Prädiktive Wartungsmodelle, die Ausfälle signalisieren, bevor sie auftreten. Anomalieerkennung, die Prozessabweichungen in Echtzeit erkennt. Computer Vision für Qualitätsprüfung. KI-APIs in industrielle Software integriert — nicht als Feature, sondern als echtes Betriebswerkzeug.",
        tags: [
          "Prädiktive Wartung",
          "Anomalieerkennung",
          "Computer Vision",
          "KI-API-Integration",
        ],
      },
      closing:
        "Das sind keine drei getrennten Leistungen. Es ist ein integrierter Ansatz — gebaut für die Generation industrieller Automatisierung, bei der Steuerungs- und Intelligenzschicht dasselbe System sind.",
    },
    howWeWork: {
  badge: 'WIE WIR ARBEITEN',
  title: 'Wie Es Ist, Mit Uns zu Arbeiten',
  subtitle: 'Wir halten es einfach, direkt und transparent — keine Account Manager, keine Übergaben. Sie arbeiten direkt mit den Ingenieuren, die die Arbeit leisten.',
  steps: [
    { number: '01', title: 'Wir Sprechen', description: 'Sie schildern uns Ihre Herausforderung. Wir stellen die Fragen, die wichtig sind. Kein Verkaufsgespräch — nur ein ehrliches Gespräch darüber, ob wir die richtige Wahl für Ihr Projekt sind.' },
    { number: '02', title: 'Wir Planen', description: 'Wir definieren gemeinsam den Umfang, den Ansatz und den Zeitplan. Sie erhalten ein klares Bild davon, was wir liefern werden, wie lange es dauern wird und was es kosten wird.' },
    { number: '03', title: 'Wir Bauen', description: 'Wir leisten die Arbeit. Sie haben während des gesamten Projekts direkten Zugang zu den Ingenieuren, die Ihr System entwickeln. Probleme werden schnell gelöst.' },
    { number: '04', title: 'Wir Unterstützen', description: 'Wir verschwinden nicht nach der Übergabe. Wir dokumentieren gründlich, schulen Ihr Team ordentlich und bleiben für Fragen und Support verfügbar.' },
  ],
},

whyPreaumate: {
  badge: 'WARUM WIR',
  title: 'Das Ehrliche Argument für die Zusammenarbeit mit einem Kleinen Team',
  intro: 'Wir sind ein neues Unternehmen. Wir wissen, dass das der erste Einwand ist. Hier ist unsere ehrliche Antwort darauf.',
  cards: [
    { title: 'Sie bekommen die Senior-Ingenieure — bei jedem Projekt', description: 'Bei einem großen Integrator kann Ihr Projekt von einem Senior-Ingenieur konzipiert und von einem Junior-Ingenieur umgesetzt werden. Bei uns sind die Menschen, mit denen Sie sprechen, die Menschen, die die Arbeit leisten. Immer.' },
    { title: 'Zwanzig Jahre Erfahrung ist keine kleine Zahl', description: 'Preaumate ist neu. Die Expertise dahinter nicht. Unser Team hat Automatisierungsprojekte in mehreren Branchen, auf mehreren Plattformen und in mehreren Ländern geliefert.' },
    { title: 'Wir bewegen uns schneller, weil wir kleiner sind', description: 'Keine internen Genehmigungsketten. Keine Terminierungskonflikte zwischen Abteilungen. Wenn etwas gelöst werden muss, lösen wir es.' },
    { title: 'Unser Unternehmen hängt davon ab, dass Ihr Projekt gut läuft', description: 'Ein großes Unternehmen kann ein Projekt, das nicht gut lief, absorbieren. Wir können das nicht. Diese Asymmetrie arbeitet zu Ihren Gunsten.' },
  ],
},

pricing: {
  signal: 'Wir arbeiten auf Projekt- und Tagessatzbasis. Kontaktieren Sie uns für ein Angebot — wir antworten innerhalb eines Werktages.',
},

endorsements: {
  badge: 'WAS KOLLEGEN SAGEN',
  title: 'Vertraut von Ingenieuren, die die Arbeit kennen',
  subtitle: 'Preaumate ist ein neues Unternehmen. Die Menschen dahinter sind es nicht. Das sagen diejenigen, die neben uns gearbeitet haben.',
  cta: 'Möchten Sie Ihr Projekt besprechen?',
  ctaButton: 'Kontakt aufnehmen',
  quotes: [
    {
      text: 'Einer der technisch fähigsten Automatisierungsingenieure, mit denen ich gearbeitet habe. Strukturierter Code, klares Denken und die Art von Problemlösungsfähigkeit, die sich zeigt, wenn es auf der Baustelle kompliziert wird.',
      author: 'Senior Projektingenieur',
      company: 'Früherer Arbeitgeber — Name auf Wunsch nicht genannt',
      initials: 'SP',
    },
    {
      text: 'Was dieses Team auszeichnet, ist, dass sie sowohl die Steuerungsschicht als auch die Datenschicht wirklich verstehen. Diese Kombination ist selten in der Branche und macht bei komplexen Integrationsprojekten einen echten Unterschied.',
      author: 'Automatisierungsmanager',
      company: 'Industriehersteller — Niederlande',
      initials: 'AM',
    },
    {
      text: 'Zuverlässig, schnell in der Reaktion und wirklich investiert, das richtige Ergebnis zu erzielen. Die Dokumentation und Übergabe waren die besten, die ich bei einem Projekt dieser Art gesehen habe.',
      author: 'Werksleiter Operations',
      company: 'Lebensmittel- und Getränkeproduktionsanlage',
      initials: 'PO',
    },
  ],
},

serviceArea: {
  badge: 'WO WIR TÄTIG SIND',
  title: 'Globale Reichweite. Persönliches Engagement.',
  subtitle: 'Industrielle Automatisierungsarbeit erfordert oft physische Präsenz. So arbeiten wir über Grenzen hinweg.',
  intro: 'Wir haben Standorte in den Niederlanden und Mexiko — zwei Standorte, die zusammen europäische und amerikanische Zeitzonen ohne Verzögerung abdecken. Wir arbeiten onshore, offshore und remote, und reisen weltweit für Vor-Ort-Inbetriebnahmen, FAT-Begleitung und Standortunterstützung.',
  cards: [
    {
      region: 'Europa',
      flag: '🇪🇺',
      description: 'Unser Standort in den Niederlanden deckt Westeuropa ab. Wir arbeiten vor Ort in der gesamten EU und Großbritannien.',
      highlights: ['Niederlande — Hauptstandort', 'Vor Ort in EU und UK', 'Offshore — Nordsee und darüber hinaus'],
    },
    {
      region: 'Amerika',
      flag: '🌎',
      description: 'Unser Standort in Mexiko deckt Nord- und Lateinamerika ab. Von Offshore-Plattformen im Golf von Mexiko bis zu Produktionsanlagen auf dem Kontinent.',
      highlights: ['Mexiko — Hauptstandort', 'Nord- und Lateinamerika', 'Offshore Golf von Mexiko'],
    },
    {
      region: 'Remote & Global',
      flag: '🌐',
      description: 'Viele Automatisierungsaufgaben können vollständig remote erbracht werden. Wir verfügen über sichere Fernzugriffsinfrastruktur und kommunizieren zuverlässig über alle Zeitzonen.',
      highlights: ['Sicherer Fernzugriff', 'Vollständige Remote-Lieferung für Software-Arbeit', 'Weltweite Reisen für Vor-Ort-Phasen'],
    },
  ],
  travelNote: 'Reisekosten und Logistik werden transparent als Teil jedes Projektumfangs besprochen. Wir verstecken sie nicht im Stundensatz.',
},
  },

  // ─── FRENCH ──────────────────────────────────────────────────────
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      blog: "Blog",
      qa: "Q&R",
      contact: "Contact",
    },
    hero: {
      title: "L'Automatisation Industrielle Réinventée",
      subtitle:
        "Transformez votre production avec l'automatisation pilotée par l'IA, l'analyse prédictive et les solutions d'usine intelligente.",
      cta: "Commencez Votre Parcours d'Automatisation",
    },
    about: {
      badge: "À PROPOS DE PREAUMATE",
      title1: "Construit par des Ingénieurs.",
      title2: "Porté par la Passion.",
      para1:
        "Preaumate est un cabinet de conseil en automatisation industrielle créé par des ingénieurs, avec une véritable passion pour l'industrie. Notre équipe apporte plus de 20 ans d'expérience combinée sur les plateformes Siemens, Rockwell et CoDeSys — et nous sommes aussi à l'aise sur le plancher d'usine que dans une salle serveur.",
      para2:
        "Nous avons travaillé dans la fabrication robotique, l'alimentation et les boissons, le traitement de l'eau, le CVC, la logistique et les installations offshore. Basés aux Pays-Bas et au Mexique, nous opérons à l'échelle mondiale — onshore, offshore et à distance — avec des temps de réponse rapides.",
      para3:
        "Nous connaissons bien le monde classique de l'automatisation industrielle. Nous comprenons également la transformation en cours. Notre rôle est d'aider les clients à naviguer dans les deux.",
      readMore: "Lisez notre histoire complète",
      features: [
        {
          title: "Automatisation Pilotée par l'IA",
          description:
            "Tirez parti de l'intelligence artificielle de pointe pour automatiser des processus industriels complexes avec une précision sans précédent.",
        },
        {
          title: "Surveillance en Temps Réel",
          description:
            "Surveillez chaque aspect de votre ligne de production en temps réel avec des réseaux de capteurs IoT avancés et des tableaux de bord.",
        },
        {
          title: "Données, IoT et Cloud",
          description:
            "Acquisition de données en temps réel, connectivité IoT, traitement cloud et edge — faisant travailler les données de vos machines pour vous.",
        },
        {
          title: "Optimisation Énergétique",
          description:
            "Réduisez la consommation d'énergie jusqu'à 40% grâce à l'équilibrage intelligent de charge.",
        },
        {
          title: "Maintenance Prédictive",
          description:
            "Évitez les temps d'arrêt coûteux en prédisant les pannes d'équipement avant qu'elles ne surviennent.",
        },
      ],
      stats: [
        "Projets Livrés",
        "Satisfaction Client",
        "Économie d'Énergie Moyenne",
        "Années d'Expérience",
      ],
    },
    services: {
      badge: "CE QUE NOUS FAISONS",
      title: "Automatisation de Bout en Bout",
      subtitle:
        "De la robotique à l'analytique — nous livrons des solutions complètes d'automatisation industrielle basées sur la technologie Siemens éprouvée.",
      items: [
        {
          title: "Automatisation des Processus Robotiques",
          description:
            "Déployez des robots intelligents et des systèmes automatisés qui gèrent les tâches répétitives avec précision et vitesse.",
        },
        {
          title: "Automatisation d'Assemblage",
          description:
            "Rationalisez votre production avec des solutions d'automatisation d'assemblage flexibles et efficaces.",
        },
        {
          title: "Manutention des Matériaux",
          description:
            "Solutions intelligentes de manutention qui améliorent le flux, la sécurité et l'efficacité opérationnelle.",
        },
        {
          title: "Contrôle Qualité",
          description:
            "Systèmes avancés d'inspection et de contrôle qualité pour garantir cohérence et excellence.",
        },
        {
          title: "Solutions d'Usine Intelligente",
          description:
            "Transformez la fabrication traditionnelle en environnements de production entièrement connectés et auto-optimisés.",
        },
        {
          title: "Analytique Prédictive",
          description:
            "Anticipez les pannes avant qu'elles ne surviennent grâce à des insights pilotés par l'IA.",
        },
        {
          title: "Intégration IoT",
          description:
            "Connectez l'ensemble de votre atelier avec des capteurs intelligents et des pipelines de données en temps réel.",
        },
      ],
    },
    statsBar: [
      "Projets Livrés",
      "Satisfaction Client",
      "Années d'Expérience",
      "Support à Distance",
    ],
    featuresBar: {
      badge: "CAPACITÉS",
      items: [
        { title: "Support à Distance", subtitle: "24/7" },
        { title: "Contactez-nous", subtitle: "contact@preaumate.com" },
        { title: "Piloté par l'IA", subtitle: "Décisions" },
        { title: "Analytique", subtitle: "Prédictive" },
        { title: "Usine", subtitle: "Intelligente" },
        { title: "Cybersécurité", subtitle: "Prête" },
        { title: "Intégration", subtitle: "IoT" },
        { title: "Construit pour", subtitle: "l'Avenir" },
      ],
    },
    contactSection: {
      badge: "PRENDRE CONTACT",
      title: "Commencez Votre Parcours d'Automatisation",
      subtitle:
        "Prêt à transformer vos opérations ? Parlons de vos besoins en automatisation.",
    },
    form: {
      title: "Prendre Contact",
      subtitle:
        "Prêt à transformer vos opérations industrielles ? Discutons de vos besoins.",
      companyName: "Nom de l'Entreprise",
      companyPlaceholder: "Entrez le nom de votre entreprise",
      email: "Adresse E-mail",
      emailPlaceholder: "votre.email@entreprise.com",
      phone: "Numéro de Téléphone",
      phonePlaceholder: "+33 (0) 000 000 000",
      serviceInterest: "Service Souhaité",
      servicePlaceholder: "Sélectionnez un service...",
      message: "Message",
      messagePlaceholder: "Parlez-nous de vos besoins en automatisation...",
      send: "Envoyer le Message",
      sending: "Envoi en cours...",
      services: [
        "Automatisation des Processus Robotiques",
        "Intégration IoT",
        "Solutions d'Usine Intelligente",
        "Analytique Prédictive",
        "Consultation Générale",
      ],
      errors: {
        companyRequired: "Le nom de l'entreprise est requis",
        emailRequired: "L'adresse e-mail est requise",
        emailInvalid: "Format d'e-mail invalide",
        phoneRequired: "Le numéro de téléphone est requis",
        serviceRequired: "Veuillez sélectionner un service",
        messageRequired: "Le message est requis",
        validationTitle: "Erreur de Validation du Formulaire",
        validationDesc:
          "Veuillez remplir tous les champs obligatoires correctement.",
        errorTitle: "Quelque chose s'est mal passé",
        errorDesc:
          "Votre message n'a pas pu être envoyé. Réessayez ou contactez-nous directement.",
        successTitle: "Message Envoyé avec Succès ! 🎉",
        successDesc:
          "Merci ! Nous vous contacterons bientôt pour discuter de vos besoins en automatisation.",
      },
    },
    footer: {
      tagline: "AUTOMATISATION INDUSTRIELLE",
      description:
        "Réinventer l'automatisation industrielle pour la prochaine génération de fabrication. Certifié Siemens. Prêt pour l'Industrie 4.0.",
      navHeading: "NAVIGATION",
      resourcesHeading: "RESSOURCES",
      contactHeading: "CONTACT",
      navLinks: ["Accueil", "À propos", "Services", "Contact"],
      resourceLinks: [
        "Blog",
        "Q&R",
        "Politique de Confidentialité",
        "Conditions Générales",
      ],
      rights: "Tous droits réservés.",
      privacyPolicy: "Politique de Confidentialité",
      terms: "Conditions Générales",
    },
    consent: {
      title: "🍪 Nous utilisons des cookies",
      text: "Nous utilisons des cookies essentiels pour faire fonctionner notre site. Avec votre consentement, nous utilisons également des cookies analytiques. Vos données sont traitées conformément à notre",
      privacyPolicy: "Politique de Confidentialité",
      and: "et notre",
      cookiePolicy: "Politique de Cookies",
      reject: "Refuser les Non-Essentiels",
      accept: "Tout Accepter",
    },
    aboutPage: {
      heroBadge: "À PROPOS DE PREAUMATE",
      heroTitle1: "Construit par des Ingénieurs.",
      heroTitle2: "Porté par la Passion.",
      heroSubtitle:
        "Preaumate est un cabinet de conseil en automatisation industrielle avec plus de 20 ans d'expérience combinée, opérant à l'échelle mondiale depuis les Pays-Bas et le Mexique.",
      locations: ["Pays-Bas", "Mexique", "Opérations Mondiales"],
      whoWeAreBadge: "QUI NOUS SOMMES",
      whoWeAreTitle: "Notre Histoire",
      whoWeArePara1:
        "Preaumate est un cabinet de conseil créé par des ingénieurs avec un enthousiasme et une passion authentiques pour l'industrie. Nous sommes une jeune entreprise — mais pas une nouvelle équipe. Ensemble, nous apportons plus de 20 ans d'expérience pratique.",
      whoWeArePara2:
        "Notre équipe est basée aux Pays-Bas et au Mexique. Nous travaillons à l'échelle mondiale, répondons rapidement et soutenons les clients onshore, offshore et à distance dans tous les fuseaux horaires.",
      whoWeArePara3:
        "Nous avons fondé Preaumate parce que nous croyons que le meilleur travail d'automatisation se produit quand les personnes sont proches du problème, personnellement investies et non ralenties par des couches corporatives.",
      whoWeArePara4:
        "Nous connaissons bien le monde classique de l'automatisation industrielle — parce que nous en venons. Et nous comprenons la transformation en cours.",
      whatWeDoBadge: "CE QUE NOUS FAISONS",
      whatWeDoTitle: "Nos Services",
      whatWeDoIntro:
        "Nous sommes des spécialistes de l'automatisation aussi à l'aise dans une salle serveur que sur le plancher d'usine. Nous nous impliquons là où cela compte — en direct et en résolution de problèmes.",
      servicesList: [
        {
          title: "Programmation API/PLC",
          description:
            "Nous programmons sur les principales plateformes — Siemens (TIA Portal, S7-1200/1500), Rockwell Automation (Studio 5000) et les contrôleurs basés sur CoDeSys. Nous travaillons avec des configurations API matérielles traditionnelles et des environnements API logiciels modernes. Nous programmons également des API de sécurité.",
        },
        {
          title: "Développement IHM",
          description:
            "Nous concevons et construisons des interfaces opérateur intuitives, claires et conçues pour les personnes qui les utilisent réellement.",
        },
        {
          title: "Acquisition de Données, IoT, Cloud et Edge",
          description:
            "Nous connectons machines, capteurs et systèmes — OPC-UA, MQTT, connectivité de bases de données, intégration MES et SCADA. Nous mettons en œuvre des architectures de traitement de données cloud et edge.",
        },
        {
          title: "Cybersécurité",
          description:
            "La cybersécurité industrielle n'est plus optionnelle. Nous concevons des architectures d'automatisation avec la sécurité intégrée dès le départ.",
        },
        {
          title: "Intégration de l'IA",
          description:
            "Nous intégrons des capacités pilotées par l'IA dans les projets d'automatisation — maintenance prédictive, détection d'anomalies, optimisation des processus.",
        },
        {
          title: "Services à Distance",
          description:
            "Nous sommes construits pour le travail à distance. Nous supportons et dépannons des systèmes depuis n'importe où dans le monde.",
        },
        {
          title: "Préparation et Gestion de Projets",
          description:
            "Nous soutenons les clients depuis les premières étapes — spécifications fonctionnelles, architecture logicielle, définition du périmètre — jusqu'à la mise en service.",
        },
      ],
      industriesBadge: "EXPÉRIENCE",
      industriesTitle: "Secteurs dans Lesquels Nous Avons Travaillé",
      industriesIntro:
        "L'expérience de notre équipe couvre un large éventail d'environnements industriels — à terre, offshore et sur tous les continents.",
      industries: [
        { label: "Fabrication Robotique", icon: "🦾" },
        { label: "Production Alimentaire et Boissons", icon: "🏭" },
        { label: "Traitement de l'Eau et Utilities", icon: "💧" },
        { label: "CVC et Automatisation du Bâtiment", icon: "🌡️" },
        { label: "Entreposage et Logistique", icon: "📦" },
        { label: "Installations Offshore", icon: "⚓" },
      ],
      philosophyBadge: "NOTRE PHILOSOPHIE",
      philosophyTitle:
        "L'Automatisation Classique et la Nouvelle Réalité Industrielle",
      philosophyPara1:
        "Nous avons un profond respect pour les traditions d'ingénierie qui ont bâti l'industrie. Les normes, les méthodologies, les plateformes matérielles — elles existent parce qu'elles fonctionnent.",
      philosophyPara2:
        "Mais l'industrie évolue. Les API logiciels, la virtualisation, la conteneurisation, le edge computing, l'analytique IA et la cybersécurité industrielle sont prêts pour la production.",
      philosophyPara3:
        "Nous comprenons les deux mondes. Nous livrons des projets classiques et fiables. Et nous aidons les clients prêts à se moderniser.",
      classicalTitle: "Automatisation Classique",
      classicalDesc:
        "Plateformes matérielles éprouvées, normes établies, architectures fiables. Si c'est ce dont votre projet a besoin — nous le livrons avec pleine confiance.",
      modernTitle: "Automatisation Moderne",
      modernDesc:
        "API logiciels, connectivité cloud, insights IA, edge computing, cybersécurité industrielle. Si vous êtes prêt à vous moderniser — nous vous aidons à choisir la bonne voie.",
      finalNote:
        "Nous ne croyons pas que chaque projet ait besoin de la technologie la plus récente. Nous croyons que chaque projet mérite la bonne technologie.",
      ctaTitle: "Prêt à Travailler Ensemble ?",
      ctaSubtitle:
        "Si vous cherchez un partenaire qui traitera votre projet comme le sien, répondra sans délai et livrera un travail solide — nous aimerions discuter.",
      ctaButton: "Prendre Contact",
    },
    crossover: {
      badge: "LA CONVERGENCE",
      title: "Là où le Plancher d'Usine Rencontre la Couche de Données",
      subtitle:
        "La plupart des ingénieurs en automatisation comprennent les systèmes de contrôle. La plupart des ingénieurs en données comprennent la connectivité. Très peu comprennent les deux en profondeur — et encore moins savent comment intégrer l'IA de manière pratique.",
      statement:
        "Nous sommes à cette intersection. Et nous pensons que c'est l'endroit le plus important dans l'automatisation industrielle en ce moment.",
      pillar1: {
        label: "Contrôle Classique",
        heading: "La machine fonctionne de manière fiable.",
        description:
          "Siemens, Rockwell, CoDeSys — code API structuré écrit pour durer, systèmes de sécurité programmés selon les normes, IHM et SCADA conçus pour l'opérateur qui les utilise réellement.",
        tags: [
          "Programmation API",
          "Systèmes de Sécurité",
          "IHM / SCADA",
          "Intégration de Systèmes",
        ],
      },
      pillar2: {
        label: "Données Connectées",
        heading: "La machine parle.",
        description:
          "Pipelines OPC-UA et MQTT qui déplacent les données du plancher d'usine vers là où elles doivent aller. Edge computing qui traite localement quand le cloud n'est pas une option. Tableaux de bord qui montrent aux opérateurs ce qui se passe.",
        tags: [
          "OPC-UA / MQTT",
          "Edge Computing",
          "Connectivité Cloud",
          "Pipelines de Données",
        ],
      },
      pillar3: {
        label: "IA & Intelligence",
        heading: "La machine pense.",
        description:
          "Modèles de maintenance prédictive qui signalent les pannes avant qu'elles surviennent. Détection d'anomalies qui repère la dérive des processus en temps réel. Vision par ordinateur pour l'inspection qualité. APIs d'IA intégrées dans les logiciels industriels comme outil opérationnel réel.",
        tags: [
          "Maintenance Prédictive",
          "Détection d'Anomalies",
          "Vision par Ordinateur",
          "Intégration API IA",
        ],
      },
      closing:
        "Ce ne sont pas trois services séparés. C'est une approche intégrée — construite pour la génération d'automatisation industrielle où la couche de contrôle et la couche d'intelligence sont le même système.",
    },
  howWeWork: {
  badge: 'COMMENT NOUS TRAVAILLONS',
  title: 'Ce que C\'est de Travailler Avec Nous',
  subtitle: 'Nous gardons les choses simples, directes et transparentes — pas de chefs de compte, pas de transferts. Vous traitez directement avec les ingénieurs qui font le travail.',
  steps: [
    { number: '01', title: 'Nous Parlons', description: 'Vous nous parlez de votre défi. Nous posons les questions qui comptent. Pas de discours de vente — juste une conversation honnête sur notre adéquation à votre projet.' },
    { number: '02', title: 'Nous Planifions', description: 'Nous définissons ensemble le périmètre, l\'approche et le calendrier. Vous obtenez une image claire de ce que nous livrerons, combien de temps cela prendra et ce que cela coûtera.' },
    { number: '03', title: 'Nous Construisons', description: 'Nous faisons le travail. Vous avez un accès direct aux ingénieurs qui construisent votre système tout au long du projet. Les problèmes sont résolus rapidement.' },
    { number: '04', title: 'Nous Supportons', description: 'Nous ne disparaissons pas après la livraison. Nous documentons soigneusement, formons correctement votre équipe et restons disponibles pour les questions et le support.' },
  ],
},

whyPreaumate: {
  badge: 'POURQUOI NOUS',
  title: 'L\'Argument Honnête pour Travailler avec une Petite Équipe',
  intro: 'Nous sommes une nouvelle entreprise. Nous savons que c\'est la première objection. Voici notre réponse honnête.',
  cards: [
    { title: 'Vous obtenez les ingénieurs seniors — sur chaque mission', description: 'Avec un grand intégrateur, votre projet peut être conçu par un ingénieur senior et livré par un junior. Chez nous, les personnes avec qui vous parlez sont les personnes qui font le travail. Toujours.' },
    { title: 'Vingt ans d\'expérience n\'est pas un petit nombre', description: 'Preaumate est nouvelle. L\'expertise derrière elle ne l\'est pas. Notre équipe a livré des projets d\'automatisation dans plusieurs industries, sur plusieurs plateformes et dans plusieurs pays.' },
    { title: 'Nous bougeons plus vite parce que nous sommes plus petits', description: 'Pas de chaînes d\'approbation internes. Pas de conflits de planification entre départements. Quand quelque chose doit être résolu, nous le résolvons.' },
    { title: 'Notre entreprise dépend du succès de votre projet', description: 'Une grande entreprise peut absorber un projet qui ne s\'est pas bien passé. Nous ne le pouvons pas. Cette asymétrie joue en votre faveur.' },
  ],
},

pricing: {
  signal: 'Nous travaillons sur la base de projets et de tarifs journaliers. Contactez-nous pour un devis — nous répondons dans un jour ouvrable.',
},
  
endorsements: {
  badge: 'CE QUE DISENT LES COLLÈGUES',
  title: 'Approuvé par des Ingénieurs qui Connaissent le Travail',
  subtitle: 'Preaumate est une nouvelle entreprise. Les personnes derrière elle ne le sont pas. Voici ce qu\'ont à dire ceux qui ont travaillé à nos côtés.',
  cta: 'Vous souhaitez discuter de votre projet ?',
  ctaButton: 'Prendre Contact',
  quotes: [
    {
      text: 'L\'un des ingénieurs en automatisation les plus capables techniquement avec qui j\'ai travaillé. Code structuré, pensée claire et le type de capacité de résolution de problèmes qui se manifeste quand les choses se compliquent sur site.',
      author: 'Ingénieur Projet Senior',
      company: 'Ancien employeur — nom retenu à la demande',
      initials: 'SP',
    },
    {
      text: 'Ce qui distingue cette équipe, c\'est qu\'elle comprend vraiment à la fois la couche de contrôle et la couche de données. Cette combinaison est rare dans l\'industrie et fait une vraie différence sur les projets d\'intégration complexes.',
      author: 'Responsable Automatisation',
      company: 'Fabricant industriel — Pays-Bas',
      initials: 'AM',
    },
    {
      text: 'Fiable, réactif et vraiment investi pour obtenir le bon résultat. La documentation et la remise étaient les meilleures que j\'aie vues sur un projet de ce type.',
      author: 'Responsable des Opérations d\'Usine',
      company: 'Installation de production agroalimentaire',
      initials: 'PO',
    },
  ],
},

serviceArea: {
  badge: 'OÙ NOUS OPÉRONS',
  title: 'Portée Mondiale. Engagement Personnel.',
  subtitle: 'Le travail d\'automatisation industrielle nécessite souvent une présence physique. Voici comment nous travaillons au-delà des frontières.',
  intro: 'Nous sommes basés aux Pays-Bas et au Mexique — deux emplacements qui couvrent ensemble les fuseaux horaires européens et américains sans délai. Nous travaillons onshore, offshore et à distance, et nous voyageons mondialement pour la mise en service sur site, l\'assistance FAT et le support sur site.',
  cards: [
    {
      region: 'Europe',
      flag: '🇪🇺',
      description: 'Notre base aux Pays-Bas couvre l\'Europe occidentale. Nous travaillons sur site dans toute l\'UE et au Royaume-Uni.',
      highlights: ['Pays-Bas — base principale', 'Sur site dans toute l\'UE et UK', 'Offshore — Mer du Nord et au-delà'],
    },
    {
      region: 'Amériques',
      flag: '🌎',
      description: 'Notre base au Mexique couvre l\'Amérique du Nord et l\'Amérique latine. Des plateformes offshore du Golfe du Mexique aux installations de production sur le continent.',
      highlights: ['Mexique — base principale', 'Amérique du Nord et Latine', 'Offshore Golfe du Mexique'],
    },
    {
      region: 'À Distance & Mondial',
      flag: '🌐',
      description: 'De nombreuses tâches d\'automatisation peuvent être livrées entièrement à distance. Nous disposons d\'une infrastructure d\'accès à distance sécurisée et communiquons de manière fiable sur tous les fuseaux horaires.',
      highlights: ['Accès à distance sécurisé', 'Livraison entièrement à distance pour le travail logiciel', 'Voyages mondiaux pour les phases sur site'],
    },
  ],
  travelNote: 'Les frais de déplacement et la logistique sont discutés de manière transparente dans le cadre de chaque périmètre de projet. Nous ne les cachons pas dans le tarif.',
},
  },

  // ─── PORTUGUESE ──────────────────────────────────────────────────
  pt: {
    nav: {
      home: "Início",
      about: "Sobre nós",
      services: "Serviços",
      blog: "Blog",
      qa: "P&R",
      contact: "Contato",
    },
    hero: {
      title: "Automação Industrial Reimaginada",
      subtitle:
        "Transforme sua manufatura com automação baseada em IA, análise preditiva e soluções de fábrica inteligente.",
      cta: "Inicie Sua Jornada de Automação",
    },
    about: {
      badge: "SOBRE A PREAUMATE",
      title1: "Construído por Engenheiros.",
      title2: "Movido pela Paixão.",
      para1:
        "Preaumate é uma consultoria de automação industrial criada por engenheiros, com genuína paixão pelo setor. Nossa equipe traz mais de 20 anos de experiência combinada nas plataformas Siemens, Rockwell e CoDeSys — e nos sentimos tão confortáveis no chão de fábrica quanto em uma sala de servidores.",
      para2:
        "Trabalhamos em manufatura robótica, alimentos e bebidas, tratamento de água, HVAC, logística e instalações offshore. Com sede nos Países Baixos e no México, operamos globalmente — onshore, offshore e remotamente — com tempos de resposta rápidos em todos os fusos horários.",
      para3:
        "Conhecemos bem o mundo clássico da automação industrial. Também entendemos a transformação que está em curso. Nosso papel é ajudar os clientes a navegar por ambos.",
      readMore: "Leia nossa história completa",
      features: [
        {
          title: "Automação com IA",
          description:
            "Aproveite a inteligência artificial de ponta para automatizar processos industriais complexos com precisão sem precedentes.",
        },
        {
          title: "Monitoramento em Tempo Real",
          description:
            "Monitore cada aspecto de sua linha de produção em tempo real com redes avançadas de sensores IoT e painéis de controle.",
        },
        {
          title: "Dados, IoT e Nuvem",
          description:
            "Aquisição de dados em tempo real, conectividade IoT, processamento em nuvem e borda — fazendo os dados de suas máquinas trabalharem para você.",
        },
        {
          title: "Otimização Energética",
          description:
            "Reduza o consumo de energia em até 40% por meio de balanceamento inteligente de carga e gestão preditiva de energia.",
        },
        {
          title: "Manutenção Preditiva",
          description:
            "Evite paradas custosas prevendo falhas de equipamentos antes que ocorram usando modelos de aprendizado de máquina.",
        },
      ],
      stats: [
        "Projetos Entregues",
        "Satisfação do Cliente",
        "Economia de Energia Média",
        "Anos de Experiência",
      ],
    },
    services: {
      badge: "O QUE FAZEMOS",
      title: "Automação de Ponta a Ponta",
      subtitle:
        "Da robótica à análise — entregamos soluções completas de automação industrial construídas sobre tecnologia Siemens comprovada.",
      items: [
        {
          title: "Automação de Processos Robóticos",
          description:
            "Implante robôs inteligentes e sistemas automatizados que lidam com tarefas repetitivas com precisão e velocidade.",
        },
        {
          title: "Automação de Montagem",
          description:
            "Otimize sua produção com soluções de automação de montagem flexíveis e eficientes.",
        },
        {
          title: "Manuseio de Materiais",
          description:
            "Soluções inteligentes de manuseio de materiais que melhoram o fluxo, a segurança e a eficiência operacional.",
        },
        {
          title: "Controle de Qualidade",
          description:
            "Sistemas avançados de inspeção e controle de qualidade para garantir consistência e excelência.",
        },
        {
          title: "Soluções de Fábrica Inteligente",
          description:
            "Transforme a manufatura tradicional em ambientes de produção totalmente conectados e auto-otimizados.",
        },
        {
          title: "Análise Preditiva",
          description:
            "Antecipe falhas antes que ocorram usando insights baseados em IA dos dados de suas máquinas.",
        },
        {
          title: "Integração IoT",
          description:
            "Conecte todo o seu chão de fábrica com sensores inteligentes e pipelines de dados em tempo real.",
        },
      ],
    },
    statsBar: [
      "Projetos Entregues",
      "Satisfação do Cliente",
      "Anos de Experiência",
      "Suporte Remoto",
    ],
    featuresBar: {
      badge: "CAPACIDADES",
      items: [
        { title: "Suporte Remoto", subtitle: "24/7" },
        { title: "Fale Conosco", subtitle: "contact@preaumate.com" },
        { title: "Baseado em IA", subtitle: "Decisões" },
        { title: "Análise", subtitle: "Preditiva" },
        { title: "Fábrica", subtitle: "Inteligente" },
        { title: "Cibersegurança", subtitle: "Pronta" },
        { title: "Integração", subtitle: "IoT" },
        { title: "Construído para", subtitle: "o Futuro" },
      ],
    },
    contactSection: {
      badge: "ENTRE EM CONTATO",
      title: "Inicie Sua Jornada de Automação",
      subtitle:
        "Pronto para transformar suas operações? Vamos conversar sobre suas necessidades de automação.",
    },
    form: {
      title: "Entre em Contato",
      subtitle:
        "Pronto para transformar suas operações industriais? Vamos discutir suas necessidades.",
      companyName: "Nome da Empresa",
      companyPlaceholder: "Digite o nome de sua empresa",
      email: "Endereço de E-mail",
      emailPlaceholder: "seu.email@empresa.com",
      phone: "Número de Telefone",
      phonePlaceholder: "+55 (00) 00000-0000",
      serviceInterest: "Serviço de Interesse",
      servicePlaceholder: "Selecione um serviço...",
      message: "Mensagem",
      messagePlaceholder: "Conte-nos sobre suas necessidades de automação...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      services: [
        "Automação de Processos Robóticos",
        "Integração IoT",
        "Soluções de Fábrica Inteligente",
        "Análise Preditiva",
        "Consultoria Geral",
      ],
      errors: {
        companyRequired: "O nome da empresa é obrigatório",
        emailRequired: "O endereço de e-mail é obrigatório",
        emailInvalid: "Formato de e-mail inválido",
        phoneRequired: "O número de telefone é obrigatório",
        serviceRequired: "Por favor selecione um serviço",
        messageRequired: "A mensagem é obrigatória",
        validationTitle: "Erro de Validação do Formulário",
        validationDesc:
          "Por favor, preencha todos os campos obrigatórios corretamente.",
        errorTitle: "Algo deu errado",
        errorDesc:
          "Sua mensagem não pôde ser enviada. Tente novamente ou entre em contato diretamente.",
        successTitle: "Mensagem Enviada com Sucesso! 🎉",
        successDesc:
          "Obrigado! Entraremos em contato em breve para discutir suas necessidades de automação.",
      },
    },
    footer: {
      tagline: "AUTOMAÇÃO INDUSTRIAL",
      description:
        "Reimaginando a automação industrial para a próxima geração de manufatura. Certificado Siemens. Pronto para a Indústria 4.0.",
      navHeading: "NAVEGAÇÃO",
      resourcesHeading: "RECURSOS",
      contactHeading: "CONTATO",
      navLinks: ["Início", "Sobre nós", "Serviços", "Contato"],
      resourceLinks: [
        "Blog",
        "P&R",
        "Política de Privacidade",
        "Termos e Condições",
      ],
      rights: "Todos os direitos reservados.",
      privacyPolicy: "Política de Privacidade",
      terms: "Termos e Condições",
    },
    consent: {
      title: "🍪 Usamos cookies",
      text: "Usamos cookies essenciais para que nosso site funcione. Com seu consentimento, também usamos cookies analíticos para entender como você usa nosso site. Seus dados são processados de acordo com nossa",
      privacyPolicy: "Política de Privacidade",
      and: "e nossa",
      cookiePolicy: "Política de Cookies",
      reject: "Rejeitar Não Essenciais",
      accept: "Aceitar Tudo",
    },
    aboutPage: {
      heroBadge: "SOBRE A PREAUMATE",
      heroTitle1: "Construído por Engenheiros.",
      heroTitle2: "Movido pela Paixão.",
      heroSubtitle:
        "Preaumate é uma consultoria de automação industrial com mais de 20 anos de experiência combinada, operando globalmente a partir dos Países Baixos e do México.",
      locations: ["Países Baixos", "México", "Operações Globais"],
      whoWeAreBadge: "QUEM SOMOS",
      whoWeAreTitle: "Nossa História",
      whoWeArePara1:
        "Preaumate é uma consultoria de automação industrial criada por engenheiros, com entusiasmo genuíno e paixão pela indústria. Somos uma empresa jovem — mas não uma equipe nova. Juntos, trazemos mais de 20 anos de experiência prática em automação.",
      whoWeArePara2:
        "Nossa equipe está sediada nos Países Baixos e no México. Trabalhamos globalmente, respondemos rapidamente e apoiamos clientes onshore, offshore e remotamente em todos os fusos horários.",
      whoWeArePara3:
        "Fundamos a Preaumate porque acreditamos que o melhor trabalho de automação acontece quando as pessoas estão próximas do problema, pessoalmente investidas no resultado.",
      whoWeArePara4:
        "Conhecemos bem o mundo clássico da automação industrial — porque viemos dele. E entendemos a transformação que está em curso.",
      whatWeDoBadge: "O QUE FAZEMOS",
      whatWeDoTitle: "Nossos Serviços",
      whatWeDoIntro:
        "Somos especialistas em automação tão confortáveis em uma sala de servidores quanto no chão de fábrica. Nos envolvemos onde importa — mão na massa, resolvendo problemas.",
      servicesList: [
        {
          title: "Programação CLP",
          description:
            "Programamos nas principais plataformas — Siemens (TIA Portal, S7-1200/1500), Rockwell Automation (Studio 5000) e controladores baseados em CoDeSys. Trabalhamos com CLPs hardware tradicionais e ambientes de CLP software modernos, virtualização e conteinerização. Também programamos CLPs de Segurança.",
        },
        {
          title: "Desenvolvimento IHM",
          description:
            "Projetamos e construímos interfaces de operador intuitivas, claras e construídas para as pessoas que realmente as usam.",
        },
        {
          title: "Aquisição de Dados, IoT, Nuvem e Edge",
          description:
            "Conectamos máquinas, sensores e sistemas — OPC-UA, MQTT, conectividade de banco de dados, integração MES e SCADA. Implementamos arquiteturas em nuvem e edge.",
        },
        {
          title: "Cibersegurança",
          description:
            "A cibersegurança industrial não é mais opcional. Projetamos arquiteturas com segurança integrada desde o início: segmentação de rede, acesso remoto seguro, configurações reforçadas.",
        },
        {
          title: "Integração de IA",
          description:
            "Integramos capacidades baseadas em IA — manutenção preditiva, detecção de anomalias, otimização de processos.",
        },
        {
          title: "Serviços Remotos",
          description:
            "Somos construídos para trabalho remoto. Suportamos e solucionamos problemas de qualquer lugar do mundo — com segurança e mínima interrupção.",
        },
        {
          title: "Preparação e Gestão de Projetos",
          description:
            "Apoiamos clientes desde as fases mais iniciais — especificações funcionais, arquitetura de software, escopo — até o comissionamento e entrega.",
        },
      ],
      industriesBadge: "EXPERIÊNCIA",
      industriesTitle: "Setores em que Trabalhamos",
      industriesIntro:
        "A experiência de nossa equipe abrange uma ampla gama de ambientes industriais — em terra, offshore e em todos os continentes.",
      industries: [
        { label: "Manufatura Robótica", icon: "🦾" },
        { label: "Produção de Alimentos e Bebidas", icon: "🏭" },
        { label: "Tratamento de Água e Utilities", icon: "💧" },
        { label: "HVAC e Automação Predial", icon: "🌡️" },
        { label: "Armazenagem e Logística", icon: "📦" },
        { label: "Instalações Offshore", icon: "⚓" },
      ],
      philosophyBadge: "NOSSA FILOSOFIA",
      philosophyTitle: "Automação Clássica e a Nova Realidade Industrial",
      philosophyPara1:
        "Temos profundo respeito pelas tradições de engenharia que construíram a indústria de automação industrial. Os padrões, as metodologias, as plataformas de hardware — existem porque funcionam.",
      philosophyPara2:
        "Mas a indústria está mudando. CLPs de software, virtualização, conteinerização, edge computing, análise baseada em IA e cibersegurança industrial estão prontos para produção.",
      philosophyPara3:
        "Entendemos ambos os mundos. Podemos entregar projetos clássicos e confiáveis. E podemos ajudar clientes prontos para modernização.",
      classicalTitle: "Automação Clássica",
      classicalDesc:
        "Plataformas de hardware comprovadas, padrões estabelecidos, arquiteturas confiáveis que têm movido a indústria por décadas.",
      modernTitle: "Automação Moderna",
      modernDesc:
        "CLPs de software, conectividade em nuvem, insights baseados em IA, edge computing, cibersegurança industrial.",
      finalNote:
        "Não acreditamos que todo projeto precise da tecnologia mais recente. Acreditamos que todo projeto merece a tecnologia certa.",
      ctaTitle: "Pronto para Trabalharmos Juntos?",
      ctaSubtitle:
        "Se você está procurando um parceiro que trate seu projeto como seu, responda sem demora e entregue trabalho sólido — gostaríamos de conversar.",
      ctaButton: "Entre em Contato",
    },
    crossover: {
      badge: "A CONVERGÊNCIA",
      title: "Onde o Chão de Fábrica Encontra a Camada de Dados",
      subtitle:
        "A maioria dos engenheiros de automação entende sistemas de controle. A maioria dos engenheiros de dados entende conectividade. Muito poucos entendem ambos profundamente — e menos ainda sabem como integrar IA de forma prática.",
      statement:
        "Estamos nessa interseção. E acreditamos que é o lugar mais importante na automação industrial agora.",
      pillar1: {
        label: "Controle Clássico",
        heading: "A máquina funciona de forma confiável.",
        description:
          "Siemens, Rockwell, CoDeSys — código CLP estruturado escrito para durar, sistemas de segurança programados conforme norma, IHM e SCADA construídos para o operador que realmente os usa.",
        tags: [
          "Programação CLP",
          "Sistemas de Segurança",
          "IHM / SCADA",
          "Integração de Sistemas",
        ],
      },
      pillar2: {
        label: "Dados Conectados",
        heading: "A máquina fala.",
        description:
          "Pipelines OPC-UA e MQTT que movem dados do chão de fábrica para onde precisam ir. Edge computing que processa localmente quando a nuvem não é uma opção. Dashboards que mostram aos operadores o que está acontecendo.",
        tags: [
          "OPC-UA / MQTT",
          "Edge Computing",
          "Conectividade Cloud",
          "Pipelines de Dados",
        ],
      },
      pillar3: {
        label: "IA & Inteligência",
        heading: "A máquina pensa.",
        description:
          "Modelos de manutenção preditiva que sinalizam falhas antes de ocorrerem. Detecção de anomalias que capta desvios de processo em tempo real. Visão computacional para inspeção de qualidade. APIs de IA integradas em software industrial como ferramenta operacional real.",
        tags: [
          "Manutenção Preditiva",
          "Detecção de Anomalias",
          "Visão Computacional",
          "Integração API IA",
        ],
      },
      closing:
        "Não são três serviços separados. É uma abordagem integrada — construída para a geração de automação industrial onde a camada de controle e a camada de inteligência são o mesmo sistema.",
    },
    howWeWork: {
  badge: 'COMO TRABALHAMOS',
  title: 'Como É Trabalhar Conosco',
  subtitle: 'Mantemos tudo simples, direto e transparente — sem gerentes de conta, sem transferências. Você lida diretamente com os engenheiros que fazem o trabalho.',
  steps: [
    { number: '01', title: 'Conversamos', description: 'Você nos conta sobre seu desafio. Fazemos as perguntas que importam. Sem discurso de vendas — apenas uma conversa honesta sobre se somos a escolha certa para seu projeto.' },
    { number: '02', title: 'Planejamos', description: 'Definimos juntos o escopo, a abordagem e o cronograma. Você obtém uma imagem clara do que entregaremos, quanto tempo levará e quanto custará.' },
    { number: '03', title: 'Construímos', description: 'Fazemos o trabalho. Você tem acesso direto aos engenheiros que constroem seu sistema durante todo o projeto. Problemas são resolvidos rapidamente.' },
    { number: '04', title: 'Apoiamos', description: 'Não desaparecemos após a entrega. Documentamos detalhadamente, treinamos sua equipe adequadamente e permanecemos disponíveis para perguntas e suporte.' },
  ],
},

whyPreaumate: {
  badge: 'POR QUE NÓS',
  title: 'O Argumento Honesto para Trabalhar com uma Equipe Pequena',
  intro: 'Somos uma empresa nova. Sabemos que essa é a primeira objeção. Aqui está nossa resposta honesta.',
  cards: [
    { title: 'Você obtém os engenheiros seniores — em cada trabalho', description: 'Com um integrador grande, seu projeto pode ser concebido por um engenheiro sênior e entregue por um júnior. Conosco, as pessoas com quem você fala são as pessoas que fazem o trabalho. Sempre.' },
    { title: 'Vinte anos de experiência não é um número pequeno', description: 'Preaumate é nova. A expertise por trás dela não é. Nossa equipe entregou projetos de automação em múltiplas indústrias, plataformas e países.' },
    { title: 'Nos movemos mais rápido porque somos menores', description: 'Sem cadeias de aprovação internas. Sem conflitos de agendamento entre departamentos. Quando algo precisa ser resolvido, resolvemos.' },
    { title: 'Nosso negócio depende do sucesso do seu projeto', description: 'Uma empresa grande pode absorver um projeto que não correu bem. Nós não podemos. Essa assimetria trabalha a seu favor.' },
  ],
},

pricing: {
  signal: 'Trabalhamos com base em projetos e diária. Entre em contato para um orçamento — respondemos em um dia útil.',
},

endorsements: {
  badge: 'O QUE DIZEM OS COLEGAS',
  title: 'Aprovado por Engenheiros que Conhecem o Trabalho',
  subtitle: 'Preaumate é uma empresa nova. As pessoas por trás dela não são. Aqui está o que têm a dizer aqueles que trabalharam ao nosso lado.',
  cta: 'Quer discutir seu projeto?',
  ctaButton: 'Entre em Contato',
  quotes: [
    {
      text: 'Um dos engenheiros de automação tecnicamente mais capazes com quem trabalhei. Código estruturado, pensamento claro e o tipo de capacidade de resolução de problemas que aparece quando as coisas ficam complicadas no local.',
      author: 'Engenheiro de Projetos Sênior',
      company: 'Empregador anterior — nome retido a pedido',
      initials: 'SP',
    },
    {
      text: 'O que distingue esta equipe é que eles realmente entendem tanto a camada de controle quanto a camada de dados. Essa combinação é rara na indústria e faz uma diferença real em projetos de integração complexos.',
      author: 'Gerente de Automação',
      company: 'Fabricante industrial — Países Baixos',
      initials: 'AM',
    },
    {
      text: 'Confiável, rápido em responder e genuinamente comprometido em obter o resultado certo. A documentação e a entrega foram as melhores que vi em um projeto desse tipo.',
      author: 'Gerente de Operações de Planta',
      company: 'Instalação de produção de alimentos e bebidas',
      initials: 'PO',
    },
  ],
},

serviceArea: {
  badge: 'ONDE OPERAMOS',
  title: 'Alcance Global. Comprometimento Pessoal.',
  subtitle: 'O trabalho de automação industrial frequentemente requer presença física. Veja como trabalhamos além das fronteiras.',
  intro: 'Estamos sediados nos Países Baixos e no México — duas localizações que juntas cobrem os fusos horários europeus e americanos sem demora. Trabalhamos onshore, offshore e remotamente, e viajamos globalmente para comissionamento no local, supervisão de FAT e suporte no local.',
  cards: [
    {
      region: 'Europa',
      flag: '🇪🇺',
      description: 'Nossa base nos Países Baixos cobre a Europa Ocidental. Trabalhamos no local em toda a UE e no Reino Unido.',
      highlights: ['Países Baixos — base principal', 'No local em toda a UE e UK', 'Offshore — Mar do Norte e além'],
    },
    {
      region: 'Américas',
      flag: '🌎',
      description: 'Nossa base no México cobre a América do Norte e a América Latina. De plataformas offshore no Golfo do México a instalações de produção em todo o continente.',
      highlights: ['México — base principal', 'América do Norte e Latina', 'Offshore Golfo do México'],
    },
    {
      region: 'Remoto e Global',
      flag: '🌐',
      description: 'Muitas tarefas de automação podem ser entregues totalmente de forma remota. Temos infraestrutura de acesso remoto seguro e nos comunicamos de forma confiável em todos os fusos horários.',
      highlights: ['Acesso remoto seguro', 'Entrega remota completa para trabalho de software', 'Viagens mundiais para fases no local'],
    },
  ],
  travelNote: 'Custos de viagem e logística são discutidos de forma transparente como parte de cada escopo de projeto. Não os escondemos na taxa.',
},
  },
};
