// ============================================================
// SOLUTIONS DATA FILE
// ============================================================
// To update any solution:
//   - Edit text under the language key
//   - Replace image URLs or use /public/images/filename.jpg
//   - Add/remove items in the 'deliverables' array
//   - The page layout updates automatically
// ============================================================
import { images } from '@/data/images';

export const solutionsData = {

  // ──────────────────────────────────────────────────────────
  // SOLUTION 1: PLC PROGRAMMING & SYSTEM INTEGRATION
  // ──────────────────────────────────────────────────────────
  'plc-programming': {
    slug: 'plc-programming',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    icon: 'cpu',

    images: [
      {
        url: images.solutions.plcProgramming.main,
        alt: 'PLC programming and industrial control systems',
        caption: 'Structured PLC programming across Siemens, Rockwell and CoDeSys platforms',
      },
      {
        url: images.solutions.plcProgramming.secondary,
        alt: 'Control panel and automation hardware',
        caption: 'Integration of control systems with existing production infrastructure',
      },
    ],

    en: {
      title: 'PLC Programming & System Integration',
      tagline: 'Structured code. Proven platforms. Systems that talk to each other.',
      intro: [
        'A PLC programme is not just a set of instructions — it is the operating logic of your machine or process. When it is well-written, your machine runs reliably, your operators understand what it is doing, and your maintenance team can work on it without needing the original programmer in the room. When it is not, the cost shows up in every breakdown, every unexplained stoppage, and every time a simple change takes longer than it should.',
        'At Preaumate, we write PLC code the way it should be written: structured, documented, testable, and built to last. We work across Siemens TIA Portal, Rockwell Studio 5000, and CoDeSys — covering the three most widely used platforms in industrial automation today. We also work with software PLCs, virtualisation environments and containerised control architectures for projects that go beyond conventional hardware.',
        'System integration is where we go further than programming alone. We make your new or upgraded controller communicate cleanly with your existing infrastructure — other PLCs, drives, safety systems, HMI, SCADA and enterprise systems. We handle the protocols, the data mapping, the timing, and the edge cases that trip up projects at the last moment.',
      ],
      deliverablesTitle: 'What We Deliver',
      deliverables: [
        {
          title: 'Siemens TIA Portal Programming',
          description: 'S7-1200, S7-1500 and ET 200 series — structured programming in LAD, FBD, SCL and STL. IEC 61131-3 compliant, fully documented.',
        },
        {
          title: 'Rockwell Studio 5000 Programming',
          description: 'Allen-Bradley CompactLogix and ControlLogix platforms. Structured text, ladder diagram and function block programming with Add-On Instructions.',
        },
        {
          title: 'CoDeSys Platform Programming',
          description: 'Vendor-independent CoDeSys runtime programming for Beckhoff, Wago, Schneider and other CoDeSys-based controllers.',
        },
        {
          title: 'Software PLC & Virtualisation',
          description: 'PC-based and virtualised control solutions — Siemens SIMATIC WinAC, Beckhoff TwinCAT and containerised PLC architectures for modern automation infrastructure.',
        },
        {
          title: 'Safety PLC Programming',
          description: 'Functional safety programming for Siemens F-CPU, Allen-Bradley GuardLogix and other safety-rated controllers. Compliance with IEC 62061 and ISO 13849.',
        },
        {
          title: 'Multi-System Integration',
          description: 'Communication between controllers, drives, instruments and enterprise systems — OPC-UA, Profinet, EtherNet/IP, Modbus TCP and proprietary protocols handled.',
        },
        {
          title: 'Code Review & Optimisation',
          description: 'Independent review of existing PLC code — identifying structural problems, undocumented logic, performance bottlenecks and safety risks before they become operational problems.',
        },
      ],
      platforms: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'CoDeSys', 'Beckhoff TwinCAT', 'Schneider EcoStruxure', 'Omron Sysmac'],
    },

    nl: {
      title: 'PLC Programmering & Systeemintegratie',
      tagline: 'Gestructureerde code. Bewezen platforms. Systemen die met elkaar communiceren.',
      intro: [
        'Een PLC programma is niet zomaar een set instructies — het is de bedrijfslogica van uw machine of proces. Wanneer het goed geschreven is, werkt uw machine betrouwbaar, begrijpen uw operators wat het doet, en kan uw onderhoudsteam eraan werken zonder de originele programmeur erbij te hoeven roepen.',
        'Bij Preaumate schrijven wij PLC code zoals het hoort: gestructureerd, gedocumenteerd, testbaar en gebouwd om te blijven. Wij werken met Siemens TIA Portal, Rockwell Studio 5000 en CoDeSys — de drie meest gebruikte platforms in industriële automatisering vandaag de dag.',
        'Systeemintegratie is waar we verder gaan dan alleen programmeren. We zorgen ervoor dat uw nieuwe of geüpgradede controller schoon communiceert met uw bestaande infrastructuur — andere PLC\'s, drives, veiligheidssystemen, HMI, SCADA en bedrijfssystemen.',
      ],
      deliverablesTitle: 'Wat Wij Leveren',
      deliverables: [
        { title: 'Siemens TIA Portal Programmering', description: 'S7-1200, S7-1500 en ET 200 serie — gestructureerde programmering in LAD, FBD, SCL en STL. IEC 61131-3 conform, volledig gedocumenteerd.' },
        { title: 'Rockwell Studio 5000 Programmering', description: 'Allen-Bradley CompactLogix en ControlLogix platforms. Gestructureerde tekst, ladderschema en functieblokprogrammering.' },
        { title: 'CoDeSys Platform Programmering', description: 'Leveranciersonafhankelijke CoDeSys runtime programmering voor Beckhoff, Wago, Schneider en andere CoDeSys-gebaseerde controllers.' },
        { title: 'Software PLC & Virtualisatie', description: 'PC-gebaseerde en gevirtualiseerde besturingsoplossingen — Siemens SIMATIC WinAC, Beckhoff TwinCAT en gecontaineriseerde PLC-architecturen.' },
        { title: 'Safety PLC Programmering', description: 'Functionele veiligheidsprogrammering voor Siemens F-CPU, Allen-Bradley GuardLogix en andere veiligheidsbeoordeelde controllers.' },
        { title: 'Multi-systeem Integratie', description: 'Communicatie tussen controllers, drives, instrumenten en bedrijfssystemen — OPC-UA, Profinet, EtherNet/IP, Modbus TCP en meer.' },
        { title: 'Code Review & Optimalisatie', description: 'Onafhankelijke beoordeling van bestaande PLC code — identificatie van structurele problemen, ongedocumenteerde logica en veiligheidsrisico\'s.' },
      ],
      platforms: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'CoDeSys', 'Beckhoff TwinCAT', 'Schneider EcoStruxure', 'Omron Sysmac'],
    },

    es: {
      title: 'Programación PLC e Integración de Sistemas',
      tagline: 'Código estructurado. Plataformas probadas. Sistemas que se comunican entre sí.',
      intro: [
        'Un programa PLC no es solo un conjunto de instrucciones — es la lógica operativa de su máquina o proceso. Cuando está bien escrito, su máquina funciona de manera confiable, sus operadores entienden lo que hace y su equipo de mantenimiento puede trabajar en él sin necesitar al programador original.',
        'En Preaumate, escribimos código PLC como debe escribirse: estructurado, documentado, verificable y construido para durar. Trabajamos con Siemens TIA Portal, Rockwell Studio 5000 y CoDeSys.',
        'La integración de sistemas es donde vamos más allá de la programación sola. Hacemos que su controlador nuevo o actualizado se comunique limpiamente con su infraestructura existente.',
      ],
      deliverablesTitle: 'Lo Que Entregamos',
      deliverables: [
        { title: 'Programación Siemens TIA Portal', description: 'S7-1200, S7-1500 y serie ET 200 — programación estructurada en LAD, FBD, SCL y STL. Conforme a IEC 61131-3, completamente documentado.' },
        { title: 'Programación Rockwell Studio 5000', description: 'Plataformas Allen-Bradley CompactLogix y ControlLogix. Texto estructurado, diagrama de escalera y programación de bloques de función.' },
        { title: 'Programación Plataforma CoDeSys', description: 'Programación de runtime CoDeSys independiente del proveedor para Beckhoff, Wago, Schneider y otros controladores basados en CoDeSys.' },
        { title: 'PLC de Software y Virtualización', description: 'Soluciones de control basadas en PC y virtualizadas — Siemens SIMATIC WinAC, Beckhoff TwinCAT y arquitecturas PLC en contenedores.' },
        { title: 'Programación Safety PLC', description: 'Programación de seguridad funcional para Siemens F-CPU, Allen-Bradley GuardLogix y otros controladores con clasificación de seguridad.' },
        { title: 'Integración Multi-Sistema', description: 'Comunicación entre controladores, variadores, instrumentos y sistemas empresariales — OPC-UA, Profinet, EtherNet/IP, Modbus TCP.' },
        { title: 'Revisión y Optimización de Código', description: 'Revisión independiente de código PLC existente — identificando problemas estructurales, lógica no documentada y riesgos de seguridad.' },
      ],
      platforms: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'CoDeSys', 'Beckhoff TwinCAT', 'Schneider EcoStruxure', 'Omron Sysmac'],
    },

    de: {
      title: 'SPS-Programmierung & Systemintegration',
      tagline: 'Strukturierter Code. Bewährte Plattformen. Systeme, die miteinander kommunizieren.',
      intro: [
        'Ein SPS-Programm ist nicht nur ein Satz von Anweisungen — es ist die Betriebslogik Ihrer Maschine oder Ihres Prozesses. Wenn es gut geschrieben ist, läuft Ihre Maschine zuverlässig, Ihre Bediener verstehen, was es tut, und Ihr Wartungsteam kann daran arbeiten.',
        'Bei Preaumate schreiben wir SPS-Code so, wie er geschrieben werden sollte: strukturiert, dokumentiert, testbar und für die Langlebigkeit ausgelegt. Wir arbeiten mit Siemens TIA Portal, Rockwell Studio 5000 und CoDeSys.',
        'Systemintegration ist dort, wo wir über die reine Programmierung hinausgehen. Wir sorgen dafür, dass Ihre neue oder aktualisierte Steuerung sauber mit Ihrer bestehenden Infrastruktur kommuniziert.',
      ],
      deliverablesTitle: 'Was Wir Liefern',
      deliverables: [
        { title: 'Siemens TIA Portal Programmierung', description: 'S7-1200, S7-1500 und ET 200 Serie — strukturierte Programmierung in KOP, FUP, SCL und AWL. IEC 61131-3 konform, vollständig dokumentiert.' },
        { title: 'Rockwell Studio 5000 Programmierung', description: 'Allen-Bradley CompactLogix und ControlLogix Plattformen. Strukturierter Text, Kontaktplan und Funktionsbausteinprogrammierung.' },
        { title: 'CoDeSys Plattform Programmierung', description: 'Herstellerunabhängige CoDeSys Runtime-Programmierung für Beckhoff, Wago, Schneider und andere CoDeSys-basierte Controller.' },
        { title: 'Software-SPS & Virtualisierung', description: 'PC-basierte und virtualisierte Steuerungslösungen — Siemens SIMATIC WinAC, Beckhoff TwinCAT und containerisierte SPS-Architekturen.' },
        { title: 'Safety-SPS Programmierung', description: 'Funktionale Sicherheitsprogrammierung für Siemens F-CPU, Allen-Bradley GuardLogix und andere sicherheitsbewertete Controller.' },
        { title: 'Multi-System Integration', description: 'Kommunikation zwischen Steuerungen, Antrieben, Instrumenten und Unternehmenssystemen — OPC-UA, Profinet, EtherNet/IP, Modbus TCP.' },
        { title: 'Code-Review & Optimierung', description: 'Unabhängige Überprüfung bestehenden SPS-Codes — Identifizierung struktureller Probleme, undokumentierter Logik und Sicherheitsrisiken.' },
      ],
      platforms: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'CoDeSys', 'Beckhoff TwinCAT', 'Schneider EcoStruxure', 'Omron Sysmac'],
    },

    fr: {
      title: 'Programmation API & Intégration de Systèmes',
      tagline: 'Code structuré. Plateformes éprouvées. Des systèmes qui communiquent entre eux.',
      intro: [
        "Un programme API n'est pas simplement un ensemble d'instructions — c'est la logique opérationnelle de votre machine ou processus. Bien écrit, votre machine fonctionne de manière fiable, vos opérateurs comprennent ce qu'il fait et votre équipe de maintenance peut travailler dessus.",
        "Chez Preaumate, nous écrivons le code API comme il se doit : structuré, documenté, testable et conçu pour durer. Nous travaillons avec Siemens TIA Portal, Rockwell Studio 5000 et CoDeSys.",
        "L'intégration de systèmes est là où nous allons au-delà de la simple programmation. Nous faisons en sorte que votre contrôleur nouveau ou mis à niveau communique proprement avec votre infrastructure existante.",
      ],
      deliverablesTitle: 'Ce Que Nous Livrons',
      deliverables: [
        { title: 'Programmation Siemens TIA Portal', description: 'S7-1200, S7-1500 et série ET 200 — programmation structurée en LAD, FBD, SCL et STL. Conforme IEC 61131-3, entièrement documenté.' },
        { title: 'Programmation Rockwell Studio 5000', description: 'Plateformes Allen-Bradley CompactLogix et ControlLogix. Texte structuré, schéma à contacts et programmation en blocs fonctionnels.' },
        { title: 'Programmation Plateforme CoDeSys', description: 'Programmation runtime CoDeSys indépendante du fournisseur pour Beckhoff, Wago, Schneider et autres contrôleurs basés sur CoDeSys.' },
        { title: 'API Logiciel & Virtualisation', description: 'Solutions de contrôle PC et virtualisées — Siemens SIMATIC WinAC, Beckhoff TwinCAT et architectures API conteneurisées.' },
        { title: 'Programmation Safety API', description: 'Programmation de sécurité fonctionnelle pour Siemens F-CPU, Allen-Bradley GuardLogix et autres contrôleurs à sécurité intrinsèque.' },
        { title: 'Intégration Multi-Systèmes', description: 'Communication entre contrôleurs, variateurs, instruments et systèmes d\'entreprise — OPC-UA, Profinet, EtherNet/IP, Modbus TCP.' },
        { title: 'Revue & Optimisation de Code', description: 'Revue indépendante du code API existant — identification des problèmes structurels, logique non documentée et risques de sécurité.' },
      ],
      platforms: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'CoDeSys', 'Beckhoff TwinCAT', 'Schneider EcoStruxure', 'Omron Sysmac'],
    },

    pt: {
      title: 'Programação CLP e Integração de Sistemas',
      tagline: 'Código estruturado. Plataformas comprovadas. Sistemas que se comunicam.',
      intro: [
        'Um programa CLP não é apenas um conjunto de instruções — é a lógica operacional da sua máquina ou processo. Quando bem escrito, sua máquina funciona de forma confiável, seus operadores entendem o que está fazendo e sua equipe de manutenção pode trabalhar nele.',
        'Na Preaumate, escrevemos código CLP da forma correta: estruturado, documentado, testável e construído para durar. Trabalhamos com Siemens TIA Portal, Rockwell Studio 5000 e CoDeSys.',
        'A integração de sistemas é onde vamos além da simples programação. Fazemos com que seu controlador novo ou atualizado se comunique de forma limpa com sua infraestrutura existente.',
      ],
      deliverablesTitle: 'O Que Entregamos',
      deliverables: [
        { title: 'Programação Siemens TIA Portal', description: 'S7-1200, S7-1500 e série ET 200 — programação estruturada em LAD, FBD, SCL e STL. Conforme IEC 61131-3, totalmente documentado.' },
        { title: 'Programação Rockwell Studio 5000', description: 'Plataformas Allen-Bradley CompactLogix e ControlLogix. Texto estruturado, diagrama ladder e programação em blocos de função.' },
        { title: 'Programação Plataforma CoDeSys', description: 'Programação de runtime CoDeSys independente de fornecedor para Beckhoff, Wago, Schneider e outros controladores baseados em CoDeSys.' },
        { title: 'CLP de Software e Virtualização', description: 'Soluções de controle baseadas em PC e virtualizadas — Siemens SIMATIC WinAC, Beckhoff TwinCAT e arquiteturas CLP em contêineres.' },
        { title: 'Programação Safety CLP', description: 'Programação de segurança funcional para Siemens F-CPU, Allen-Bradley GuardLogix e outros controladores com classificação de segurança.' },
        { title: 'Integração Multi-Sistema', description: 'Comunicação entre controladores, inversores, instrumentos e sistemas empresariais — OPC-UA, Profinet, EtherNet/IP, Modbus TCP.' },
        { title: 'Revisão e Otimização de Código', description: 'Revisão independente de código CLP existente — identificando problemas estruturais, lógica não documentada e riscos de segurança.' },
      ],
      platforms: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'CoDeSys', 'Beckhoff TwinCAT', 'Schneider EcoStruxure', 'Omron Sysmac'],
    },
  },

  // ──────────────────────────────────────────────────────────
  // SOLUTION 2: HMI & SCADA DEVELOPMENT
  // ──────────────────────────────────────────────────────────
  'hmi-scada': {
    slug: 'hmi-scada',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
    icon: 'monitor',

    images: [
      {
        url: images.solutions.hmiScada.main,
        alt: 'Modern HMI screen on industrial machine',
        caption: 'Intuitive operator interfaces designed for real production environments',
      },
      {
        url: images.solutions.hmiScada.secondary,
        alt: 'SCADA dashboard showing plant overview',
        caption: 'SCADA systems with real-time plant visibility and historical data',
      },
    ],

    en: {
      title: 'HMI & SCADA Development',
      tagline: 'Clear interfaces. Real-time visibility. Operators in control.',
      intro: [
        'The operator interface is where your automation meets your people. A well-designed HMI or SCADA system gives operators the information they need, at the moment they need it, presented in a way that supports fast, confident decisions. A poorly designed one creates confusion, slows response to abnormal situations, and contributes to operational errors that could have been avoided.',
        'At Preaumate, we design and build operator interfaces that follow industrial HMI best practice — clear hierarchy, consistent navigation, meaningful alarms, and data that tells operators what is happening now and what is trending. We work with all major HMI and SCADA platforms, and we build from scratch or migrate from legacy systems.',
        'SCADA development at Preaumate goes beyond screens. We design the full data architecture — historian integration, alarm management, reporting, and connectivity to your enterprise layer — so that your SCADA is not just a visualisation tool but a genuine operational intelligence platform.',
      ],
      deliverablesTitle: 'What We Deliver',
      deliverables: [
        { title: 'Siemens WinCC & WinCC Unified', description: 'HMI and SCADA development for Siemens WinCC (TIA Portal), WinCC Advanced, WinCC Unified and WinCC OA — from single machine panels to plant-wide supervisory systems.' },
        { title: 'Rockwell FactoryTalk View', description: 'FactoryTalk View ME and SE development — site and machine edition HMI for Allen-Bradley control systems.' },
        { title: 'Ignition SCADA', description: 'Inductive Automation Ignition platform development — web-based SCADA with unlimited clients, SQL historian and mobile access.' },
        { title: 'Wonderware / AVEVA', description: 'AVEVA System Platform, InTouch and Historian — for large-scale process and manufacturing SCADA applications.' },
        { title: 'HMI Modernisation & Migration', description: 'Migration of legacy HMI systems to modern platforms — preserving your existing logic and screen concepts while bringing the technology current. Panels that are end-of-life replaced without production disruption.' },
        { title: 'Alarm Management & Rationalisation', description: 'Structured alarm systems designed to ISA-18.2 — reducing nuisance alarms, improving response time and building the documentation that safety audits require.' },
        { title: 'Historian & Reporting', description: 'Process data historian setup, tag configuration, reporting templates and dashboard development — so your production and quality data is stored, accessible and actionable.' },
      ],
      platforms: ['Siemens WinCC', 'WinCC Unified', 'FactoryTalk View', 'Ignition', 'AVEVA InTouch', 'Wonderware'],
    },

    nl: {
      title: 'HMI & SCADA Ontwikkeling',
      tagline: 'Duidelijke interfaces. Real-time zichtbaarheid. Operators in controle.',
      intro: [
        'De bedieningsinterface is waar uw automatisering uw mensen ontmoet. Een goed ontworpen HMI of SCADA-systeem geeft operators de informatie die ze nodig hebben, op het moment dat ze het nodig hebben, gepresenteerd op een manier die snelle, zelfverzekerde beslissingen ondersteunt.',
        'Bij Preaumate ontwerpen en bouwen wij bedieningsinterfaces die de industriële HMI-beste praktijken volgen — duidelijke hiërarchie, consistente navigatie, zinvolle alarmen en gegevens die operators vertellen wat er nu gebeurt en wat er aan het trending is.',
        'SCADA-ontwikkeling bij Preaumate gaat verder dan schermen. Wij ontwerpen de volledige gegevensarchitectuur — historianintegratie, alarmbeheer, rapportage en connectiviteit naar uw bedrijfslaag.',
      ],
      deliverablesTitle: 'Wat Wij Leveren',
      deliverables: [
        { title: 'Siemens WinCC & WinCC Unified', description: 'HMI en SCADA ontwikkeling voor Siemens WinCC (TIA Portal), WinCC Advanced, WinCC Unified en WinCC OA.' },
        { title: 'Rockwell FactoryTalk View', description: 'FactoryTalk View ME en SE ontwikkeling — site en machine editie HMI voor Allen-Bradley besturingssystemen.' },
        { title: 'Ignition SCADA', description: 'Inductive Automation Ignition platform ontwikkeling — webgebaseerde SCADA met onbeperkte clients, SQL historian en mobiele toegang.' },
        { title: 'Wonderware / AVEVA', description: 'AVEVA System Platform, InTouch en Historian — voor grootschalige proces- en productie SCADA toepassingen.' },
        { title: 'HMI Modernisering & Migratie', description: 'Migratie van legacy HMI-systemen naar moderne platforms — behoud van uw bestaande logica en schermconcepten terwijl de technologie wordt bijgewerkt.' },
        { title: 'Alarmbeheer & Rationalisatie', description: 'Gestructureerde alarmsystemen ontworpen volgens ISA-18.2 — vermindering van storingsalarmen en verbetering van responstijd.' },
        { title: 'Historian & Rapportage', description: 'Procesdata historian setup, tagconfiguratie, rapportagesjablonen en dashboardontwikkeling.' },
      ],
      platforms: ['Siemens WinCC', 'WinCC Unified', 'FactoryTalk View', 'Ignition', 'AVEVA InTouch', 'Wonderware'],
    },

    es: {
      title: 'Desarrollo HMI & SCADA',
      tagline: 'Interfaces claras. Visibilidad en tiempo real. Operadores en control.',
      intro: [
        'La interfaz del operador es donde su automatización se encuentra con su personal. Un sistema HMI o SCADA bien diseñado proporciona a los operadores la información que necesitan, en el momento que la necesitan, presentada de una manera que apoya decisiones rápidas y seguras.',
        'En Preaumate, diseñamos y construimos interfaces de operador que siguen las mejores prácticas industriales de HMI — jerarquía clara, navegación consistente, alarmas significativas y datos que dicen a los operadores lo que está sucediendo ahora.',
        'El desarrollo SCADA en Preaumate va más allá de las pantallas. Diseñamos la arquitectura de datos completa — integración de historian, gestión de alarmas, informes y conectividad con su capa empresarial.',
      ],
      deliverablesTitle: 'Lo Que Entregamos',
      deliverables: [
        { title: 'Siemens WinCC & WinCC Unified', description: 'Desarrollo HMI y SCADA para Siemens WinCC (TIA Portal), WinCC Advanced, WinCC Unified y WinCC OA.' },
        { title: 'Rockwell FactoryTalk View', description: 'Desarrollo FactoryTalk View ME y SE — HMI edición sitio y máquina para sistemas de control Allen-Bradley.' },
        { title: 'Ignition SCADA', description: 'Desarrollo de plataforma Inductive Automation Ignition — SCADA basado en web con clientes ilimitados, SQL historian y acceso móvil.' },
        { title: 'Wonderware / AVEVA', description: 'AVEVA System Platform, InTouch e Historian — para aplicaciones SCADA de proceso y manufactura a gran escala.' },
        { title: 'Modernización y Migración de HMI', description: 'Migración de sistemas HMI heredados a plataformas modernas — preservando su lógica existente y conceptos de pantalla mientras actualiza la tecnología.' },
        { title: 'Gestión y Racionalización de Alarmas', description: 'Sistemas de alarma estructurados diseñados según ISA-18.2 — reducción de alarmas molestas y mejora del tiempo de respuesta.' },
        { title: 'Historian e Informes', description: 'Configuración de historian de datos de proceso, configuración de tags, plantillas de informes y desarrollo de dashboards.' },
      ],
      platforms: ['Siemens WinCC', 'WinCC Unified', 'FactoryTalk View', 'Ignition', 'AVEVA InTouch', 'Wonderware'],
    },

    de: {
      title: 'HMI & SCADA Entwicklung',
      tagline: 'Klare Oberflächen. Echtzeittransparenz. Bediener in der Kontrolle.',
      intro: [
        'Die Bedienoberfläche ist der Punkt, an dem Ihre Automatisierung auf Ihre Mitarbeiter trifft. Ein gut gestaltetes HMI oder SCADA-System gibt Bedienern die Informationen, die sie benötigen, zum Zeitpunkt, zu dem sie sie benötigen.',
        'Bei Preaumate entwerfen und bauen wir Bedienoberflächen, die den industriellen HMI-Best-Practices folgen — klare Hierarchie, konsistente Navigation, aussagekräftige Alarme und Daten, die Bedienern sagen, was gerade passiert.',
        'SCADA-Entwicklung bei Preaumate geht über Bildschirme hinaus. Wir entwerfen die vollständige Datenarchitektur — Historian-Integration, Alarmmanagement, Reporting und Konnektivität zu Ihrer Unternehmensschicht.',
      ],
      deliverablesTitle: 'Was Wir Liefern',
      deliverables: [
        { title: 'Siemens WinCC & WinCC Unified', description: 'HMI und SCADA Entwicklung für Siemens WinCC (TIA Portal), WinCC Advanced, WinCC Unified und WinCC OA.' },
        { title: 'Rockwell FactoryTalk View', description: 'FactoryTalk View ME und SE Entwicklung — Site- und Maschinen-Edition HMI für Allen-Bradley Steuerungssysteme.' },
        { title: 'Ignition SCADA', description: 'Inductive Automation Ignition Plattformentwicklung — webbasiertes SCADA mit unbegrenzten Clients, SQL-Historian und mobilem Zugriff.' },
        { title: 'Wonderware / AVEVA', description: 'AVEVA System Platform, InTouch und Historian — für groß angelegte Prozess- und Fertigungs-SCADA-Anwendungen.' },
        { title: 'HMI Modernisierung & Migration', description: 'Migration von Legacy-HMI-Systemen auf moderne Plattformen — Beibehaltung Ihrer bestehenden Logik und Bildschirmkonzepte.' },
        { title: 'Alarmmanagement & Rationalisierung', description: 'Strukturierte Alarmsysteme nach ISA-18.2 — Reduzierung von Störungsalarmen und Verbesserung der Reaktionszeit.' },
        { title: 'Historian & Reporting', description: 'Prozessdaten-Historian-Einrichtung, Tag-Konfiguration, Berichtsvorlagen und Dashboard-Entwicklung.' },
      ],
      platforms: ['Siemens WinCC', 'WinCC Unified', 'FactoryTalk View', 'Ignition', 'AVEVA InTouch', 'Wonderware'],
    },

    fr: {
      title: 'Développement IHM & SCADA',
      tagline: 'Interfaces claires. Visibilité en temps réel. Opérateurs en contrôle.',
      intro: [
        "L'interface opérateur est là où votre automatisation rencontre vos équipes. Un système IHM ou SCADA bien conçu donne aux opérateurs les informations dont ils ont besoin, au moment où ils en ont besoin, présentées de manière à soutenir des décisions rapides et confiantes.",
        "Chez Preaumate, nous concevons et construisons des interfaces opérateur qui suivent les meilleures pratiques industrielles IHM — hiérarchie claire, navigation cohérente, alarmes significatives et données qui indiquent aux opérateurs ce qui se passe.",
        "Le développement SCADA chez Preaumate va au-delà des écrans. Nous concevons l'architecture de données complète — intégration historian, gestion des alarmes, rapports et connectivité vers votre couche entreprise.",
      ],
      deliverablesTitle: 'Ce Que Nous Livrons',
      deliverables: [
        { title: 'Siemens WinCC & WinCC Unified', description: 'Développement IHM et SCADA pour Siemens WinCC (TIA Portal), WinCC Advanced, WinCC Unified et WinCC OA.' },
        { title: 'Rockwell FactoryTalk View', description: 'Développement FactoryTalk View ME et SE — IHM édition site et machine pour les systèmes de contrôle Allen-Bradley.' },
        { title: 'Ignition SCADA', description: "Développement de la plateforme Inductive Automation Ignition — SCADA basé sur le web avec clients illimités, SQL historian et accès mobile." },
        { title: 'Wonderware / AVEVA', description: 'AVEVA System Platform, InTouch et Historian — pour les applications SCADA de procédé et de fabrication à grande échelle.' },
        { title: 'Modernisation & Migration IHM', description: 'Migration des systèmes IHM hérités vers des plateformes modernes — en préservant votre logique existante et vos concepts d\'écran.' },
        { title: 'Gestion & Rationalisation des Alarmes', description: 'Systèmes d\'alarmes structurés selon ISA-18.2 — réduction des alarmes parasites et amélioration du temps de réponse.' },
        { title: 'Historian & Reporting', description: 'Configuration du historian de données de processus, configuration des tags, modèles de rapports et développement de tableaux de bord.' },
      ],
      platforms: ['Siemens WinCC', 'WinCC Unified', 'FactoryTalk View', 'Ignition', 'AVEVA InTouch', 'Wonderware'],
    },

    pt: {
      title: 'Desenvolvimento IHM & SCADA',
      tagline: 'Interfaces claras. Visibilidade em tempo real. Operadores no controle.',
      intro: [
        'A interface do operador é onde sua automação encontra suas pessoas. Um sistema IHM ou SCADA bem projetado fornece aos operadores as informações que precisam, no momento que precisam, apresentadas de uma forma que apoia decisões rápidas e confiantes.',
        'Na Preaumate, projetamos e construímos interfaces de operador que seguem as melhores práticas industriais de IHM — hierarquia clara, navegação consistente, alarmes significativos e dados que dizem aos operadores o que está acontecendo.',
        'O desenvolvimento SCADA na Preaumate vai além das telas. Projetamos a arquitetura completa de dados — integração de historian, gerenciamento de alarmes, relatórios e conectividade com sua camada empresarial.',
      ],
      deliverablesTitle: 'O Que Entregamos',
      deliverables: [
        { title: 'Siemens WinCC & WinCC Unified', description: 'Desenvolvimento IHM e SCADA para Siemens WinCC (TIA Portal), WinCC Advanced, WinCC Unified e WinCC OA.' },
        { title: 'Rockwell FactoryTalk View', description: 'Desenvolvimento FactoryTalk View ME e SE — IHM edição site e máquina para sistemas de controle Allen-Bradley.' },
        { title: 'Ignition SCADA', description: 'Desenvolvimento da plataforma Inductive Automation Ignition — SCADA baseado na web com clientes ilimitados, SQL historian e acesso móvel.' },
        { title: 'Wonderware / AVEVA', description: 'AVEVA System Platform, InTouch e Historian — para aplicações SCADA de processo e manufatura em grande escala.' },
        { title: 'Modernização e Migração de IHM', description: 'Migração de sistemas IHM legados para plataformas modernas — preservando sua lógica existente e conceitos de tela.' },
        { title: 'Gerenciamento e Racionalização de Alarmes', description: 'Sistemas de alarme estruturados projetados segundo ISA-18.2 — redução de alarmes desnecessários e melhoria do tempo de resposta.' },
        { title: 'Historian e Relatórios', description: 'Configuração de historian de dados de processo, configuração de tags, modelos de relatórios e desenvolvimento de dashboards.' },
      ],
      platforms: ['Siemens WinCC', 'WinCC Unified', 'FactoryTalk View', 'Ignition', 'AVEVA InTouch', 'Wonderware'],
    },
  },

  // ──────────────────────────────────────────────────────────
  // SOLUTION 3: SYSTEM MODERNISATION & MIGRATION
  // ──────────────────────────────────────────────────────────
  'system-modernisation': {
    slug: 'system-modernisation',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    icon: 'refresh',

    images: [
      {
        url: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80',
        alt: 'Modern control system replacing legacy hardware',
        caption: 'Legacy system replacement — minimal production disruption, maximum capability gain',
      },
      {
        url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
        alt: 'Old versus new automation hardware',
        caption: 'From end-of-life hardware to future-proof modern platforms',
      },
    ],

    en: {
      title: 'System Modernisation & Migration',
      tagline: 'Keep what works. Replace what does not. Stay running throughout.',
      intro: [
        'Legacy automation systems are one of the most common and most underestimated risks in industrial operations. Hardware that is end-of-life, software that cannot be updated, and programmes that nobody fully understands anymore — these are not just technical inconveniences. They are operational risks with real financial consequences when something goes wrong and parts or support are no longer available.',
        'At Preaumate, we specialise in modernising automation systems that have outgrown their original platform — without stopping production. We analyse what exists, reverse engineer where documentation is missing, and plan migrations that minimise risk and downtime. We have migrated systems from S5 to S7, from legacy HMI platforms to modern touchscreens, and from proprietary control architectures to open, maintainable solutions.',
        'Modernisation is not just about replacing old hardware. It is about bringing your control system into an architecture that can grow with your operation — one that your team can maintain, that your suppliers can support, and that your data systems can connect to.',
      ],
      deliverablesTitle: 'What We Deliver',
      deliverables: [
        { title: 'Legacy PLC Migration', description: 'Migration from end-of-life PLC platforms — Siemens S5, S7-300/400 to S7-1500, Allen-Bradley PLC5/SLC to Logix — with full re-engineering of existing logic.' },
        { title: 'HMI Platform Migration', description: 'Migration from obsolete operator panels and SCADA systems to modern platforms — screen layout conversion, tag migration and functional equivalence validation.' },
        { title: 'Reverse Engineering & Documentation', description: 'For systems with missing or incomplete documentation — we reverse engineer the existing programme, map the I/O, and produce the documentation that should have been there from the start.' },
        { title: 'Phased Migration Planning', description: 'Production-safe migration strategies — migrating one section at a time, maintaining parallel operation during transition, and validating each phase before the next begins.' },
        { title: 'Network & Infrastructure Modernisation', description: 'Replacing obsolete fieldbus networks (Profibus, DeviceNet) with modern Ethernet-based architectures — Profinet, EtherNet/IP — for better diagnostics and expandability.' },
        { title: 'Software PLC Conversion', description: 'Converting hardware PLC systems to software PLC or virtualised control environments where that makes technical and economic sense.' },
        { title: 'Post-Migration Support', description: 'Structured handover, operator and maintenance training, and a defined support period after cutover — so your team is confident with the new system before we step back.' },
      ],
      platforms: ['Siemens S5 → S7', 'S7-300/400 → S7-1500', 'PLC5/SLC → Logix', 'Legacy HMI → WinCC/Ignition', 'Profibus → Profinet'],
    },

    nl: {
      title: 'Systeemmodernisering & Migratie',
      tagline: 'Bewaar wat werkt. Vervang wat niet werkt. Blijf draaien gedurende het hele proces.',
      intro: [
        'Legacy automatiseringssystemen zijn een van de meest voorkomende en meest onderschatte risico\'s in industriële operaties. Hardware die end-of-life is, software die niet kan worden bijgewerkt, en programma\'s die niemand meer volledig begrijpt — dit zijn geen technische ongemakken maar operationele risico\'s.',
        'Bij Preaumate zijn wij gespecialiseerd in het moderniseren van automatiseringssystemen die hun oorspronkelijke platform zijn ontgroeid — zonder de productie te stoppen.',
        'Modernisering gaat niet alleen over het vervangen van oude hardware. Het gaat erom uw besturingssysteem in een architectuur te brengen die kan meegroeien met uw operatie.',
      ],
      deliverablesTitle: 'Wat Wij Leveren',
      deliverables: [
        { title: 'Legacy PLC Migratie', description: 'Migratie van end-of-life PLC platforms — Siemens S5, S7-300/400 naar S7-1500, Allen-Bradley PLC5/SLC naar Logix.' },
        { title: 'HMI Platform Migratie', description: 'Migratie van verouderde operatorpanelen en SCADA-systemen naar moderne platforms.' },
        { title: 'Reverse Engineering & Documentatie', description: 'Voor systemen met ontbrekende of onvolledige documentatie — wij reverse engineeren het bestaande programma en produceren de documentatie.' },
        { title: 'Gefaseerde Migratieplanning', description: 'Productieveilige migratiestrategieën — stuk voor stuk migreren met behoud van parallelle werking tijdens de overgang.' },
        { title: 'Netwerk & Infrastructuurmodernisering', description: 'Vervanging van verouderde veldbusnetwerken (Profibus, DeviceNet) door moderne Ethernet-gebaseerde architecturen.' },
        { title: 'Software PLC Conversie', description: 'Conversie van hardware PLC-systemen naar software PLC of gevirtualiseerde besturingsomgevingen.' },
        { title: 'Post-migratie Ondersteuning', description: 'Gestructureerde overdracht, operator- en onderhoudstraining en een gedefinieerde ondersteuningsperiode na cutover.' },
      ],
      platforms: ['Siemens S5 → S7', 'S7-300/400 → S7-1500', 'PLC5/SLC → Logix', 'Legacy HMI → WinCC/Ignition', 'Profibus → Profinet'],
    },

    es: {
      title: 'Modernización y Migración de Sistemas',
      tagline: 'Conserve lo que funciona. Reemplace lo que no. Manténgase operativo.',
      intro: [
        'Los sistemas de automatización heredados son uno de los riesgos más comunes y más subestimados en las operaciones industriales. Hardware al final de su vida útil, software que no puede actualizarse y programas que nadie entiende completamente — estos son riesgos operacionales reales.',
        'En Preaumate, nos especializamos en modernizar sistemas de automatización que han superado su plataforma original — sin detener la producción.',
        'La modernización no se trata solo de reemplazar hardware antiguo. Se trata de llevar su sistema de control a una arquitectura que pueda crecer con su operación.',
      ],
      deliverablesTitle: 'Lo Que Entregamos',
      deliverables: [
        { title: 'Migración de PLC Heredado', description: 'Migración desde plataformas PLC al final de su vida útil — Siemens S5, S7-300/400 a S7-1500, Allen-Bradley PLC5/SLC a Logix.' },
        { title: 'Migración de Plataforma HMI', description: 'Migración desde paneles de operador y sistemas SCADA obsoletos a plataformas modernas.' },
        { title: 'Ingeniería Inversa y Documentación', description: 'Para sistemas con documentación faltante o incompleta — realizamos ingeniería inversa del programa existente y producimos la documentación.' },
        { title: 'Planificación de Migración por Fases', description: 'Estrategias de migración seguras para la producción — migrando una sección a la vez, manteniendo operación paralela durante la transición.' },
        { title: 'Modernización de Red e Infraestructura', description: 'Reemplazo de redes de bus de campo obsoletas (Profibus, DeviceNet) por arquitecturas modernas basadas en Ethernet.' },
        { title: 'Conversión a PLC de Software', description: 'Conversión de sistemas PLC de hardware a entornos de control PLC de software o virtualizados.' },
        { title: 'Soporte Post-Migración', description: 'Entrega estructurada, capacitación de operadores y mantenimiento, y un período de soporte definido después de la transición.' },
      ],
      platforms: ['Siemens S5 → S7', 'S7-300/400 → S7-1500', 'PLC5/SLC → Logix', 'Legacy HMI → WinCC/Ignition', 'Profibus → Profinet'],
    },

    de: {
      title: 'Systemmodernisierung & Migration',
      tagline: 'Behalten Sie, was funktioniert. Ersetzen Sie, was nicht funktioniert. Bleiben Sie durchgehend in Betrieb.',
      intro: [
        'Legacy-Automatisierungssysteme sind eines der häufigsten und am meisten unterschätzten Risiken im Industriebetrieb. End-of-Life-Hardware, nicht aktualisierbare Software und Programme, die niemand mehr vollständig versteht — das sind operative Risiken mit realen finanziellen Konsequenzen.',
        'Bei Preaumate sind wir auf die Modernisierung von Automatisierungssystemen spezialisiert, die ihre ursprüngliche Plattform überwachsen haben — ohne die Produktion zu stoppen.',
        'Modernisierung geht nicht nur darum, alte Hardware zu ersetzen. Es geht darum, Ihr Steuerungssystem in eine Architektur zu überführen, die mit Ihrem Betrieb wachsen kann.',
      ],
      deliverablesTitle: 'Was Wir Liefern',
      deliverables: [
        { title: 'Legacy-SPS-Migration', description: 'Migration von End-of-Life-SPS-Plattformen — Siemens S5, S7-300/400 auf S7-1500, Allen-Bradley PLC5/SLC auf Logix.' },
        { title: 'HMI-Plattform-Migration', description: 'Migration von veralteten Bedienpanels und SCADA-Systemen auf moderne Plattformen.' },
        { title: 'Reverse Engineering & Dokumentation', description: 'Für Systeme mit fehlender oder unvollständiger Dokumentation — wir reverse engineeren das bestehende Programm und erstellen die Dokumentation.' },
        { title: 'Phasenweise Migrationsplanung', description: 'Produktionssichere Migrationsstrategien — schrittweise Migration mit Aufrechterhaltung des Parallelbetriebs während des Übergangs.' },
        { title: 'Netzwerk- & Infrastrukturmodernisierung', description: 'Ersatz veralteter Feldbussysteme (Profibus, DeviceNet) durch moderne Ethernet-basierte Architekturen.' },
        { title: 'Software-SPS-Konvertierung', description: 'Konvertierung von Hardware-SPS-Systemen in Software-SPS oder virtualisierte Steuerungsumgebungen.' },
        { title: 'Post-Migrations-Support', description: 'Strukturierte Übergabe, Bediener- und Wartungsschulung und eine definierte Supportperiode nach dem Cutover.' },
      ],
      platforms: ['Siemens S5 → S7', 'S7-300/400 → S7-1500', 'PLC5/SLC → Logix', 'Legacy HMI → WinCC/Ignition', 'Profibus → Profinet'],
    },

    fr: {
      title: 'Modernisation & Migration de Systèmes',
      tagline: 'Gardez ce qui fonctionne. Remplacez ce qui ne fonctionne pas. Restez en production.',
      intro: [
        "Les systèmes d'automatisation hérités sont l'un des risques les plus courants et les plus sous-estimés dans les opérations industrielles. Matériel en fin de vie, logiciels qui ne peuvent pas être mis à jour et programmes que personne ne comprend vraiment — ce sont des risques opérationnels réels.",
        "Chez Preaumate, nous sommes spécialisés dans la modernisation des systèmes d'automatisation qui ont dépassé leur plateforme d'origine — sans arrêter la production.",
        "La modernisation ne consiste pas seulement à remplacer le vieux matériel. Il s'agit de faire évoluer votre système de contrôle vers une architecture qui peut grandir avec votre opération.",
      ],
      deliverablesTitle: 'Ce Que Nous Livrons',
      deliverables: [
        { title: 'Migration d\'API Hérité', description: 'Migration depuis des plateformes API en fin de vie — Siemens S5, S7-300/400 vers S7-1500, Allen-Bradley PLC5/SLC vers Logix.' },
        { title: 'Migration de Plateforme IHM', description: 'Migration depuis des panneaux opérateur et systèmes SCADA obsolètes vers des plateformes modernes.' },
        { title: 'Rétro-ingénierie & Documentation', description: 'Pour les systèmes avec documentation manquante ou incomplète — nous effectuons la rétro-ingénierie du programme existant et produisons la documentation.' },
        { title: 'Planification de Migration par Phases', description: 'Stratégies de migration sûres pour la production — migration section par section, maintien de l\'exploitation parallèle pendant la transition.' },
        { title: 'Modernisation Réseau & Infrastructure', description: 'Remplacement des réseaux bus de terrain obsolètes (Profibus, DeviceNet) par des architectures Ethernet modernes.' },
        { title: 'Conversion en API Logiciel', description: 'Conversion de systèmes API matériels en environnements de contrôle API logiciel ou virtualisés.' },
        { title: 'Support Post-Migration', description: 'Transfert structuré, formation des opérateurs et de la maintenance, et une période de support définie après la bascule.' },
      ],
      platforms: ['Siemens S5 → S7', 'S7-300/400 → S7-1500', 'PLC5/SLC → Logix', 'Legacy HMI → WinCC/Ignition', 'Profibus → Profinet'],
    },

    pt: {
      title: 'Modernização e Migração de Sistemas',
      tagline: 'Mantenha o que funciona. Substitua o que não funciona. Permaneça em operação.',
      intro: [
        'Sistemas de automação legados são um dos riscos mais comuns e mais subestimados nas operações industriais. Hardware no fim da vida útil, software que não pode ser atualizado e programas que ninguém entende completamente — esses são riscos operacionais reais.',
        'Na Preaumate, somos especializados em modernizar sistemas de automação que superaram sua plataforma original — sem parar a produção.',
        'A modernização não é apenas sobre substituir hardware antigo. É sobre trazer seu sistema de controle para uma arquitetura que pode crescer com sua operação.',
      ],
      deliverablesTitle: 'O Que Entregamos',
      deliverables: [
        { title: 'Migração de CLP Legado', description: 'Migração de plataformas CLP no fim da vida útil — Siemens S5, S7-300/400 para S7-1500, Allen-Bradley PLC5/SLC para Logix.' },
        { title: 'Migração de Plataforma IHM', description: 'Migração de painéis de operador e sistemas SCADA obsoletos para plataformas modernas.' },
        { title: 'Engenharia Reversa e Documentação', description: 'Para sistemas com documentação ausente ou incompleta — realizamos engenharia reversa do programa existente e produzimos a documentação.' },
        { title: 'Planejamento de Migração em Fases', description: 'Estratégias de migração seguras para a produção — migrando uma seção por vez, mantendo operação paralela durante a transição.' },
        { title: 'Modernização de Rede e Infraestrutura', description: 'Substituição de redes de fieldbus obsoletas (Profibus, DeviceNet) por arquiteturas modernas baseadas em Ethernet.' },
        { title: 'Conversão para CLP de Software', description: 'Conversão de sistemas CLP de hardware para ambientes de controle CLP de software ou virtualizados.' },
        { title: 'Suporte Pós-Migração', description: 'Entrega estruturada, treinamento de operadores e manutenção, e um período de suporte definido após a transição.' },
      ],
      platforms: ['Siemens S5 → S7', 'S7-300/400 → S7-1500', 'PLC5/SLC → Logix', 'Legacy HMI → WinCC/Ignition', 'Profibus → Profinet'],
    },
  },

  // ──────────────────────────────────────────────────────────
  // SOLUTION 4: INDUSTRIAL CYBERSECURITY
  // ──────────────────────────────────────────────────────────
  'industrial-cybersecurity': {
    slug: 'industrial-cybersecurity',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)',
    icon: 'shield',

    images: [
      {
        url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
        alt: 'Industrial network security and monitoring',
        caption: 'Secure industrial network architecture — protection built in from the design stage',
      },
      {
        url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
        alt: 'Cybersecurity monitoring dashboard',
        caption: 'Network monitoring and threat detection for OT environments',
      },
    ],

    en: {
      title: 'Industrial Cybersecurity',
      tagline: 'Connected systems. Secured boundaries. Operations you can trust.',
      intro: [
        'Industrial control systems were not designed with cybersecurity in mind. For decades, security in OT (Operational Technology) environments relied on physical isolation — air gaps that separated the factory from the outside world. Those air gaps are gone. Modern automation systems are connected to enterprise networks, to the internet, to cloud platforms and to remote support tools. The attack surface is real, and the consequences of a breach in an industrial environment can be severe — production downtime, safety incidents, regulatory penalties and reputational damage.',
        'At Preaumate, we address industrial cybersecurity from an automation engineering perspective — not from a generic IT security position. We understand industrial protocols, PLC architectures, HMI systems and the operational constraints that make OT security different from enterprise IT. Our approach is pragmatic: identifying real risks, implementing practical protections, and doing it in a way that does not disrupt your production.',
        'We design security into automation projects from the start, and we assess and improve security in existing systems. Whether you are building a new system or hardening an existing one, we bring the technical depth and the industrial context to make it effective.',
      ],
      deliverablesTitle: 'What We Deliver',
      deliverables: [
        { title: 'OT Security Assessment', description: 'Structured assessment of your existing industrial control system security — identifying vulnerabilities, misconfigurations, and gaps against IEC 62443 and NIST frameworks.' },
        { title: 'Network Segmentation & Zone Design', description: 'Design of industrial network architecture with proper zone separation between OT, IT and DMZ layers — preventing lateral movement in the event of a breach.' },
        { title: 'Secure Remote Access', description: 'Implementation of secure, auditable remote access solutions for maintenance and support — replacing ad-hoc VPN and TeamViewer setups with properly controlled access.' },
        { title: 'Hardening of PLCs & HMI Systems', description: 'Configuration hardening of industrial devices — disabling unused services, managing user accounts, applying patches where possible and documenting the security baseline.' },
        { title: 'Firewall & Industrial Demilitarised Zone (DMZ)', description: 'Design and configuration of industrial firewalls and DMZ architectures — controlling what data crosses the OT/IT boundary and how.' },
        { title: 'Security by Design', description: 'Integration of cybersecurity requirements into new automation projects from the specification phase — so security is built in, not added later.' },
        { title: 'Incident Response Planning', description: 'Development of OT-specific incident response procedures — what to do when something goes wrong, who decides what, and how to recover production safely.' },
      ],
      platforms: ['IEC 62443', 'NIST CSF', 'Siemens SINEMA', 'Fortinet OT', 'Claroty', 'Nozomi Networks'],
    },

    nl: {
      title: 'Industriële Cyberbeveiliging',
      tagline: 'Verbonden systemen. Beveiligde grenzen. Operaties waar u op kunt vertrouwen.',
      intro: [
        'Industriële besturingssystemen zijn niet ontworpen met cyberbeveiliging in gedachten. Moderne automatiseringssystemen zijn verbonden met bedrijfsnetwerken, het internet, cloudplatforms en tools voor ondersteuning op afstand. Het aanvalsoppervlak is reëel.',
        'Bij Preaumate pakken wij industriële cyberbeveiliging aan vanuit een automatiseringstechnisch perspectief — niet vanuit een generieke IT-beveiligingspositie. Wij begrijpen industriële protocollen, PLC-architecturen en HMI-systemen.',
        'Wij ontwerpen beveiliging in automatiseringsprojecten vanaf het begin, en beoordelen en verbeteren wij de beveiliging in bestaande systemen.',
      ],
      deliverablesTitle: 'Wat Wij Leveren',
      deliverables: [
        { title: 'OT Beveiligingsbeoordeling', description: 'Gestructureerde beoordeling van uw bestaande industriële besturingssysteembeveiliging — identificatie van kwetsbaarheden en hiaten ten opzichte van IEC 62443.' },
        { title: 'Netwerksegmentatie & Zoneontwerp', description: 'Ontwerp van industriële netwerkarchitectuur met juiste zoneseparatie tussen OT, IT en DMZ lagen.' },
        { title: 'Beveiligde Toegang op Afstand', description: 'Implementatie van veilige, controleerbare toegangsoplossingen op afstand voor onderhoud en ondersteuning.' },
        { title: 'Hardening van PLC\'s & HMI-systemen', description: 'Configuratiehardening van industriële apparaten — uitschakelen van ongebruikte services, beheer van gebruikersaccounts.' },
        { title: 'Firewall & Industriële DMZ', description: 'Ontwerp en configuratie van industriële firewalls en DMZ-architecturen.' },
        { title: 'Security by Design', description: 'Integratie van cyberbeveiligingsvereisten in nieuwe automatiseringsprojecten vanaf de specificatiefase.' },
        { title: 'Planning voor Incidentrespons', description: 'Ontwikkeling van OT-specifieke procedures voor incidentrespons.' },
      ],
      platforms: ['IEC 62443', 'NIST CSF', 'Siemens SINEMA', 'Fortinet OT', 'Claroty', 'Nozomi Networks'],
    },

    es: {
      title: 'Ciberseguridad Industrial',
      tagline: 'Sistemas conectados. Límites asegurados. Operaciones en las que puede confiar.',
      intro: [
        'Los sistemas de control industrial no fueron diseñados pensando en la ciberseguridad. Los sistemas de automatización modernos están conectados a redes empresariales, a internet, a plataformas en la nube y a herramientas de soporte remoto. La superficie de ataque es real.',
        'En Preaumate, abordamos la ciberseguridad industrial desde una perspectiva de ingeniería de automatización — no desde una posición de seguridad TI genérica. Entendemos los protocolos industriales, las arquitecturas PLC y los sistemas HMI.',
        'Diseñamos la seguridad en los proyectos de automatización desde el principio, y evaluamos y mejoramos la seguridad en los sistemas existentes.',
      ],
      deliverablesTitle: 'Lo Que Entregamos',
      deliverables: [
        { title: 'Evaluación de Seguridad OT', description: 'Evaluación estructurada de la seguridad de su sistema de control industrial existente — identificando vulnerabilidades y brechas frente a IEC 62443.' },
        { title: 'Segmentación de Red y Diseño de Zonas', description: 'Diseño de arquitectura de red industrial con separación adecuada de zonas entre capas OT, IT y DMZ.' },
        { title: 'Acceso Remoto Seguro', description: 'Implementación de soluciones de acceso remoto seguras y auditables para mantenimiento y soporte.' },
        { title: 'Hardening de PLCs y Sistemas HMI', description: 'Hardening de configuración de dispositivos industriales — deshabilitando servicios no utilizados y gestionando cuentas de usuario.' },
        { title: 'Firewall y Zona Desmilitarizada (DMZ) Industrial', description: 'Diseño y configuración de firewalls industriales y arquitecturas DMZ.' },
        { title: 'Seguridad por Diseño', description: 'Integración de requisitos de ciberseguridad en nuevos proyectos de automatización desde la fase de especificación.' },
        { title: 'Planificación de Respuesta a Incidentes', description: 'Desarrollo de procedimientos de respuesta a incidentes específicos para OT.' },
      ],
      platforms: ['IEC 62443', 'NIST CSF', 'Siemens SINEMA', 'Fortinet OT', 'Claroty', 'Nozomi Networks'],
    },

    de: {
      title: 'Industrielle Cybersicherheit',
      tagline: 'Vernetzte Systeme. Gesicherte Grenzen. Betrieb dem Sie vertrauen können.',
      intro: [
        'Industrielle Steuerungssysteme wurden nicht mit Cybersicherheit im Sinn entwickelt. Moderne Automatisierungssysteme sind mit Unternehmensnetzwerken, dem Internet, Cloud-Plattformen und Remote-Support-Tools verbunden. Die Angriffsfläche ist real.',
        'Bei Preaumate gehen wir industrielle Cybersicherheit aus einer Automatisierungstechnik-Perspektive an — nicht von einem generischen IT-Sicherheitsstandpunkt. Wir verstehen industrielle Protokolle, SPS-Architekturen und HMI-Systeme.',
        'Wir integrieren Sicherheit von Anfang an in Automatisierungsprojekte und bewerten und verbessern die Sicherheit in bestehenden Systemen.',
      ],
      deliverablesTitle: 'Was Wir Liefern',
      deliverables: [
        { title: 'OT-Sicherheitsbewertung', description: 'Strukturierte Bewertung der Sicherheit Ihres bestehenden industriellen Steuerungssystems — Identifizierung von Schwachstellen gegenüber IEC 62443.' },
        { title: 'Netzsegmentierung & Zonendesign', description: 'Design industrieller Netzwerkarchitektur mit ordnungsgemäßer Zonentrennung zwischen OT-, IT- und DMZ-Schichten.' },
        { title: 'Sicherer Fernzugriff', description: 'Implementierung sicherer, prüfbarer Fernzugriffslösungen für Wartung und Support.' },
        { title: 'Härtung von SPSen & HMI-Systemen', description: 'Konfigurationshärtung industrieller Geräte — Deaktivierung ungenutzter Dienste und Verwaltung von Benutzerkonten.' },
        { title: 'Firewall & Industrielle DMZ', description: 'Design und Konfiguration industrieller Firewalls und DMZ-Architekturen.' },
        { title: 'Security by Design', description: 'Integration von Cybersicherheitsanforderungen in neue Automatisierungsprojekte ab der Spezifikationsphase.' },
        { title: 'Notfallplanung', description: 'Entwicklung OT-spezifischer Notfallreaktionsverfahren.' },
      ],
      platforms: ['IEC 62443', 'NIST CSF', 'Siemens SINEMA', 'Fortinet OT', 'Claroty', 'Nozomi Networks'],
    },

    fr: {
      title: 'Cybersécurité Industrielle',
      tagline: 'Systèmes connectés. Périmètres sécurisés. Opérations fiables.',
      intro: [
        "Les systèmes de contrôle industriel n'ont pas été conçus avec la cybersécurité à l'esprit. Les systèmes d'automatisation modernes sont connectés aux réseaux d'entreprise, à internet, aux plateformes cloud et aux outils de support à distance. La surface d'attaque est réelle.",
        "Chez Preaumate, nous abordons la cybersécurité industrielle d'un point de vue ingénierie d'automatisation — pas depuis une position de sécurité IT générique. Nous comprenons les protocoles industriels, les architectures API et les systèmes IHM.",
        "Nous intégrons la sécurité dans les projets d'automatisation dès le départ, et nous évaluons et améliorons la sécurité dans les systèmes existants.",
      ],
      deliverablesTitle: 'Ce Que Nous Livrons',
      deliverables: [
        { title: 'Évaluation de Sécurité OT', description: "Évaluation structurée de la sécurité de votre système de contrôle industriel existant — identification des vulnérabilités et lacunes par rapport à IEC 62443." },
        { title: 'Segmentation Réseau & Conception de Zones', description: "Conception d'architecture réseau industrielle avec séparation appropriée des zones entre les couches OT, IT et DMZ." },
        { title: 'Accès à Distance Sécurisé', description: "Mise en œuvre de solutions d'accès à distance sécurisées et auditables pour la maintenance et le support." },
        { title: 'Durcissement des API & Systèmes IHM', description: "Durcissement de la configuration des dispositifs industriels — désactivation des services inutilisés et gestion des comptes utilisateurs." },
        { title: 'Pare-feu & Zone Démilitarisée (DMZ) Industrielle', description: "Conception et configuration de pare-feu industriels et d'architectures DMZ." },
        { title: 'Sécurité dès la Conception', description: "Intégration des exigences de cybersécurité dans les nouveaux projets d'automatisation dès la phase de spécification." },
        { title: "Planification de Réponse aux Incidents", description: "Développement de procédures de réponse aux incidents spécifiques à l'OT." },
      ],
      platforms: ['IEC 62443', 'NIST CSF', 'Siemens SINEMA', 'Fortinet OT', 'Claroty', 'Nozomi Networks'],
    },

    pt: {
      title: 'Cibersegurança Industrial',
      tagline: 'Sistemas conectados. Fronteiras seguras. Operações em que você pode confiar.',
      intro: [
        'Os sistemas de controle industrial não foram projetados com a cibersegurança em mente. Os sistemas de automação modernos estão conectados a redes empresariais, à internet, a plataformas em nuvem e a ferramentas de suporte remoto. A superfície de ataque é real.',
        'Na Preaumate, abordamos a cibersegurança industrial de uma perspectiva de engenharia de automação — não de uma posição genérica de segurança de TI. Entendemos protocolos industriais, arquiteturas de CLP e sistemas IHM.',
        'Projetamos segurança em projetos de automação desde o início, e avaliamos e melhoramos a segurança em sistemas existentes.',
      ],
      deliverablesTitle: 'O Que Entregamos',
      deliverables: [
        { title: 'Avaliação de Segurança OT', description: 'Avaliação estruturada da segurança do seu sistema de controle industrial existente — identificando vulnerabilidades e lacunas em relação ao IEC 62443.' },
        { title: 'Segmentação de Rede e Design de Zonas', description: 'Design de arquitetura de rede industrial com separação adequada de zonas entre camadas OT, IT e DMZ.' },
        { title: 'Acesso Remoto Seguro', description: 'Implementação de soluções de acesso remoto seguras e auditáveis para manutenção e suporte.' },
        { title: 'Hardening de CLPs e Sistemas IHM', description: 'Hardening de configuração de dispositivos industriais — desabilitando serviços não utilizados e gerenciando contas de usuário.' },
        { title: 'Firewall e Zona Desmilitarizada (DMZ) Industrial', description: 'Design e configuração de firewalls industriais e arquiteturas DMZ.' },
        { title: 'Segurança por Design', description: 'Integração de requisitos de cibersegurança em novos projetos de automação desde a fase de especificação.' },
        { title: 'Planejamento de Resposta a Incidentes', description: 'Desenvolvimento de procedimentos de resposta a incidentes específicos para OT.' },
      ],
      platforms: ['IEC 62443', 'NIST CSF', 'Siemens SINEMA', 'Fortinet OT', 'Claroty', 'Nozomi Networks'],
    },
  },

  // ──────────────────────────────────────────────────────────
  // SOLUTION 5: ENGINEERING CONSULTING
  // ──────────────────────────────────────────────────────────
  'engineering-consulting': {
    slug: 'engineering-consulting',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    icon: 'briefcase',

    images: [
      {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
        alt: 'Engineering consultation and project planning',
        caption: 'Expert consulting from specification to commissioning',
      },
      {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        alt: 'Technical review and project management',
        caption: 'Independent technical review and project engineering support',
      },
    ],

    en: {
      title: 'Engineering Consulting & Project Support',
      tagline: 'The right advice, at the right stage. From idea to working system.',
      intro: [
        'Many automation projects run into difficulty not because of the technology, but because of what happened before the technology was chosen. Specifications that do not reflect the real process requirement, vendor selections made without full technical evaluation, and project scopes that grow without a controlled change process — these are the root causes of most project overruns and disappointments.',
        'At Preaumate, we offer independent engineering consulting that covers the full project lifecycle — from initial feasibility through specification, vendor selection, design review, FAT support and commissioning. We are not tied to any particular hardware vendor or system integrator, which means our advice is based on your requirements, not on what we happen to sell.',
        'We also provide technical project management support — bringing automation engineering expertise to the coordination of complex projects where multiple suppliers and disciplines need to work together towards a common goal.',
      ],
      deliverablesTitle: 'What We Deliver',
      deliverables: [
        { title: 'Feasibility Studies & Technology Selection', description: 'Independent assessment of automation options for your application — what is technically feasible, what the implementation risks are, and what the realistic costs and timelines look like.' },
        { title: 'Functional Specification Writing', description: 'Development of detailed functional specifications for automation systems — clear, unambiguous requirements that protect you in supplier relationships and give integrators what they need to price correctly.' },
        { title: 'Vendor & Integrator Evaluation', description: 'Technical evaluation of automation suppliers and system integrators — assessing capability, reviewing proposals, and helping you make the selection that is right for your project.' },
        { title: 'Design Review & Technical Assurance', description: 'Independent review of automation designs at key project stages — identifying technical risks, gaps and inconsistencies before they become site problems.' },
        { title: 'FAT (Factory Acceptance Test) Support', description: 'Structured Factory Acceptance Testing support — developing test procedures, witnessing and documenting FAT activities, and providing independent verification that the system meets its specification.' },
        { title: 'Commissioning & Site Support', description: 'On-site commissioning engineering support — working alongside your team and suppliers to bring systems into service safely and efficiently.' },
        { title: 'Project Management & Coordination', description: 'Technical project management for automation projects — schedule management, supplier coordination, issue tracking and reporting to stakeholders.' },
      ],
      platforms: ['Independent', 'All platforms', 'All vendors', 'IEC 62061', 'ISO 13849', 'ISA-88'],
    },

    nl: {
      title: 'Engineering Consultancy & Projectondersteuning',
      tagline: 'Het juiste advies, op het juiste moment. Van idee tot werkend systeem.',
      intro: [
        'Veel automatiseringsprojecten lopen in de problemen niet vanwege de technologie, maar vanwege wat er vóór de technologiekeuze is gebeurd. Specificaties die de werkelijke proceseis niet weerspiegelen, leveranciersselecties zonder volledige technische evaluatie.',
        'Bij Preaumate bieden wij onafhankelijke engineering consultancy die de volledige projectlevenscyclus bestrijkt — van eerste haalbaarheid tot specificatie, leveranciersselectie, ontwerpbeoordeling, FAT-ondersteuning en inbedrijfstelling.',
        'Wij zijn niet gebonden aan een bepaalde hardwareleverancier of systeemintegrator, wat betekent dat ons advies gebaseerd is op uw vereisten.',
      ],
      deliverablesTitle: 'Wat Wij Leveren',
      deliverables: [
        { title: 'Haalbaarheidsstudies & Technologieselectie', description: 'Onafhankelijke beoordeling van automatiseringsopties voor uw toepassing — wat technisch haalbaar is en wat de realistische kosten en tijdlijnen zijn.' },
        { title: 'Functionele Specificatieontwikkeling', description: 'Ontwikkeling van gedetailleerde functionele specificaties voor automatiseringssystemen — duidelijke, ondubbelzinnige vereisten.' },
        { title: 'Leveranciers- & Integratorevaluatie', description: 'Technische evaluatie van automatiseringsleveranciers en systeemintegrators.' },
        { title: 'Ontwerpbeoordeling & Technische Borging', description: 'Onafhankelijke beoordeling van automatiseringsontwerpen op sleutelmomenten in het project.' },
        { title: 'FAT (Fabrieksacceptatietest) Ondersteuning', description: 'Gestructureerde fabrieksacceptatietest ondersteuning — ontwikkeling van testprocedures en onafhankelijke verificatie.' },
        { title: 'Inbedrijfstelling & Locatieondersteuning', description: 'Technische ondersteuning bij inbedrijfstelling op locatie.' },
        { title: 'Projectmanagement & Coördinatie', description: 'Technisch projectmanagement voor automatiseringsprojecten.' },
      ],
      platforms: ['Onafhankelijk', 'Alle platforms', 'Alle leveranciers', 'IEC 62061', 'ISO 13849', 'ISA-88'],
    },

    es: {
      title: 'Consultoría de Ingeniería y Soporte de Proyectos',
      tagline: 'El consejo correcto, en la etapa correcta. De la idea al sistema funcionando.',
      intro: [
        'Muchos proyectos de automatización encuentran dificultades no debido a la tecnología, sino a lo que ocurrió antes de que se eligiera la tecnología. Especificaciones que no reflejan el requisito real del proceso, selecciones de proveedores realizadas sin evaluación técnica completa.',
        'En Preaumate, ofrecemos consultoría de ingeniería independiente que cubre el ciclo de vida completo del proyecto — desde la viabilidad inicial hasta la especificación, selección de proveedores, revisión de diseño, soporte FAT y puesta en marcha.',
        'No estamos vinculados a ningún proveedor de hardware o integrador de sistemas en particular, lo que significa que nuestro consejo se basa en sus requisitos.',
      ],
      deliverablesTitle: 'Lo Que Entregamos',
      deliverables: [
        { title: 'Estudios de Viabilidad y Selección de Tecnología', description: 'Evaluación independiente de opciones de automatización para su aplicación — qué es técnicamente factible y cuáles son los costos y plazos realistas.' },
        { title: 'Redacción de Especificaciones Funcionales', description: 'Desarrollo de especificaciones funcionales detalladas para sistemas de automatización — requisitos claros e inequívocos.' },
        { title: 'Evaluación de Proveedores e Integradores', description: 'Evaluación técnica de proveedores de automatización e integradores de sistemas.' },
        { title: 'Revisión de Diseño y Aseguramiento Técnico', description: 'Revisión independiente de diseños de automatización en etapas clave del proyecto.' },
        { title: 'Soporte FAT (Prueba de Aceptación en Fábrica)', description: 'Soporte estructurado de prueba de aceptación en fábrica — desarrollo de procedimientos de prueba y verificación independiente.' },
        { title: 'Puesta en Marcha y Soporte en Sitio', description: 'Soporte de ingeniería de puesta en marcha en sitio.' },
        { title: 'Gestión y Coordinación de Proyectos', description: 'Gestión técnica de proyectos para proyectos de automatización.' },
      ],
      platforms: ['Independiente', 'Todas las plataformas', 'Todos los proveedores', 'IEC 62061', 'ISO 13849', 'ISA-88'],
    },

    de: {
      title: 'Engineering-Beratung & Projektunterstützung',
      tagline: 'Die richtige Beratung, zur richtigen Zeit. Von der Idee zum funktionierenden System.',
      intro: [
        'Viele Automatisierungsprojekte geraten in Schwierigkeiten nicht wegen der Technologie, sondern wegen dem, was vor der Technologieauswahl passiert ist. Spezifikationen, die die tatsächlichen Prozessanforderungen nicht widerspiegeln.',
        'Bei Preaumate bieten wir unabhängige Engineering-Beratung, die den gesamten Projektlebenszyklus abdeckt — von der ersten Machbarkeit über Spezifikation, Lieferantenauswahl, Designprüfung, FAT-Support bis zur Inbetriebnahme.',
        'Wir sind an keinen bestimmten Hardwarelieferanten oder Systemintegrator gebunden, was bedeutet, dass unsere Beratung auf Ihren Anforderungen basiert.',
      ],
      deliverablesTitle: 'Was Wir Liefern',
      deliverables: [
        { title: 'Machbarkeitsstudien & Technologieauswahl', description: 'Unabhängige Bewertung von Automatisierungsoptionen für Ihre Anwendung — was technisch machbar ist und wie realistische Kosten und Zeitpläne aussehen.' },
        { title: 'Funktionale Spezifikationserstellung', description: 'Entwicklung detaillierter funktionaler Spezifikationen für Automatisierungssysteme — klare, eindeutige Anforderungen.' },
        { title: 'Lieferanten- & Integratorbewertung', description: 'Technische Bewertung von Automatisierungslieferanten und Systemintegratoren.' },
        { title: 'Designüberprüfung & Technische Sicherung', description: 'Unabhängige Überprüfung von Automatisierungsdesigns zu wichtigen Projektstadien.' },
        { title: 'FAT (Fabrikabnahmetest) Unterstützung', description: 'Strukturierte Fabrikabnahmetest-Unterstützung — Entwicklung von Testverfahren und unabhängige Verifikation.' },
        { title: 'Inbetriebnahme & Vor-Ort-Support', description: 'Technische Inbetriebnahme-Engineering-Unterstützung vor Ort.' },
        { title: 'Projektmanagement & Koordination', description: 'Technisches Projektmanagement für Automatisierungsprojekte.' },
      ],
      platforms: ['Unabhängig', 'Alle Plattformen', 'Alle Lieferanten', 'IEC 62061', 'ISO 13849', 'ISA-88'],
    },

    fr: {
      title: "Conseil en Ingénierie & Support de Projet",
      tagline: 'Le bon conseil, au bon stade. De l\'idée au système fonctionnel.',
      intro: [
        "De nombreux projets d'automatisation rencontrent des difficultés non pas à cause de la technologie, mais à cause de ce qui s'est passé avant que la technologie soit choisie. Des spécifications qui ne reflètent pas l'exigence réelle du processus.",
        "Chez Preaumate, nous offrons un conseil en ingénierie indépendant couvrant l'ensemble du cycle de vie du projet — de la faisabilité initiale à la spécification, sélection des fournisseurs, revue de conception, support FAT et mise en service.",
        "Nous ne sommes liés à aucun fournisseur de matériel ou intégrateur de systèmes particulier, ce qui signifie que nos conseils sont basés sur vos exigences.",
      ],
      deliverablesTitle: 'Ce Que Nous Livrons',
      deliverables: [
        { title: 'Études de Faisabilité & Sélection de Technologie', description: "Évaluation indépendante des options d'automatisation pour votre application — ce qui est techniquement réalisable et quels sont les coûts et délais réalistes." },
        { title: 'Rédaction de Spécifications Fonctionnelles', description: "Développement de spécifications fonctionnelles détaillées pour les systèmes d'automatisation — exigences claires et non ambiguës." },
        { title: 'Évaluation des Fournisseurs & Intégrateurs', description: "Évaluation technique des fournisseurs d'automatisation et des intégrateurs de systèmes." },
        { title: 'Revue de Conception & Assurance Technique', description: "Revue indépendante des conceptions d'automatisation aux étapes clés du projet." },
        { title: 'Support FAT (Test de Réception en Usine)', description: "Support structuré de test de réception en usine — développement de procédures de test et vérification indépendante." },
        { title: 'Mise en Service & Support sur Site', description: "Support d'ingénierie de mise en service sur site." },
        { title: 'Gestion & Coordination de Projet', description: "Gestion technique de projet pour les projets d'automatisation." },
      ],
      platforms: ['Indépendant', 'Toutes plateformes', 'Tous fournisseurs', 'IEC 62061', 'ISO 13849', 'ISA-88'],
    },

    pt: {
      title: 'Consultoria de Engenharia e Suporte de Projetos',
      tagline: 'O conselho certo, na etapa certa. Da ideia ao sistema funcionando.',
      intro: [
        'Muitos projetos de automação encontram dificuldades não por causa da tecnologia, mas por causa do que aconteceu antes de a tecnologia ser escolhida. Especificações que não refletem o requisito real do processo.',
        'Na Preaumate, oferecemos consultoria de engenharia independente que cobre todo o ciclo de vida do projeto — desde a viabilidade inicial até a especificação, seleção de fornecedores, revisão de projeto, suporte FAT e comissionamento.',
        'Não estamos vinculados a nenhum fornecedor de hardware ou integrador de sistemas específico, o que significa que nosso conselho é baseado em seus requisitos.',
      ],
      deliverablesTitle: 'O Que Entregamos',
      deliverables: [
        { title: 'Estudos de Viabilidade e Seleção de Tecnologia', description: 'Avaliação independente de opções de automação para sua aplicação — o que é tecnicamente viável e quais são os custos e prazos realistas.' },
        { title: 'Redação de Especificações Funcionais', description: 'Desenvolvimento de especificações funcionais detalhadas para sistemas de automação — requisitos claros e inequívocos.' },
        { title: 'Avaliação de Fornecedores e Integradores', description: 'Avaliação técnica de fornecedores de automação e integradores de sistemas.' },
        { title: 'Revisão de Projeto e Garantia Técnica', description: 'Revisão independente de projetos de automação em etapas-chave do projeto.' },
        { title: 'Suporte FAT (Teste de Aceitação em Fábrica)', description: 'Suporte estruturado de teste de aceitação em fábrica — desenvolvimento de procedimentos de teste e verificação independente.' },
        { title: 'Comissionamento e Suporte no Local', description: 'Suporte de engenharia de comissionamento no local.' },
        { title: 'Gerenciamento e Coordenação de Projetos', description: 'Gerenciamento técnico de projetos para projetos de automação.' },
      ],
      platforms: ['Independente', 'Todas as plataformas', 'Todos os fornecedores', 'IEC 62061', 'ISO 13849', 'ISA-88'],
    },
  },

  // ──────────────────────────────────────────────────────────
  // SOLUTION 6: CUSTOM AUTOMATION SOLUTIONS
  // ──────────────────────────────────────────────────────────
  'custom-solutions': {
    slug: 'custom-solutions',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    icon: 'sparkles',

    images: [
      {
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
        alt: 'AI and advanced automation development',
        caption: 'Custom automation — built around your specific challenge',
      },
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        alt: 'Bespoke automation system development',
        caption: 'Edge computing and AI integration for intelligent industrial systems',
      },
    ],

    en: {
      title: 'Custom Automation Solutions',
      tagline: 'Your problem is unique. Your solution should be too.',
      intro: [
        'Not every automation challenge fits a standard product or a conventional approach. Some processes are too specific, too unusual, or too demanding to be solved with off-the-shelf components and generic engineering. These are the projects we find most interesting — and where we believe we can add the most value.',
        'At Preaumate, we design and build custom automation solutions for challenges that fall outside the standard catalogue. This includes AI-driven automation, edge computing applications, machine learning integration for process optimisation, bespoke data platforms, and automation architectures that combine classical control with modern software engineering practices.',
        'We approach custom projects with the discipline of industrial engineering and the flexibility of software development — structured requirements, iterative development, and a clear path from proof-of-concept to production-ready system.',
      ],
      deliverablesTitle: 'What We Deliver',
      deliverables: [
        { title: 'AI & Machine Learning Integration', description: 'Integration of AI and ML capabilities into automation systems — predictive maintenance models, anomaly detection, process optimisation algorithms and computer vision applications.' },
        { title: 'Edge Computing Solutions', description: 'Industrial edge computing architectures that process data close to the source — reducing latency, enabling local intelligence and supporting offline operation when cloud connectivity is unavailable.' },
        { title: 'Custom Data Platforms', description: 'Bespoke industrial data platforms — combining OPC-UA data collection, time-series databases, analytics engines and custom dashboards into a unified operational intelligence system.' },
        { title: 'Containerised Automation', description: 'Docker and Kubernetes-based industrial automation architectures — bringing DevOps practices to control system development for faster, more reliable deployments.' },
        { title: 'Proof of Concept Development', description: 'Fast, structured proof-of-concept development to validate novel automation approaches before committing to full implementation — reducing technical risk and investment uncertainty.' },
        { title: 'IoT Platform Development', description: 'Custom IoT solutions connecting industrial equipment to data platforms — sensor integration, protocol translation, data normalisation and cloud connectivity.' },
        { title: 'Integration of Emerging Technologies', description: 'Digital twin development, augmented reality for maintenance support, voice-interface for operator guidance, and other emerging technology applications with real industrial use cases.' },
      ],
      platforms: ['Docker / Kubernetes', 'Python / Node.js', 'InfluxDB / TimescaleDB', 'MQTT / OPC-UA', 'Azure IoT / AWS IoT', 'TensorFlow / PyTorch'],
    },

    nl: {
      title: 'Maatwerk Automatiseringsoplossingen',
      tagline: 'Uw probleem is uniek. Uw oplossing ook.',
      intro: [
        'Niet elke automatiseringsuitdaging past in een standaardproduct of een conventionele aanpak. Sommige processen zijn te specifiek, te ongewoon of te veeleisend om op te lossen met kant-en-klare componenten.',
        'Bij Preaumate ontwerpen en bouwen wij maatwerk automatiseringsoplossingen voor uitdagingen die buiten de standaard catalogus vallen. Dit omvat AI-gestuurde automatisering, edge computing toepassingen en machine learning integratie.',
        'We benaderen maatwerk projecten met de discipline van industriële engineering en de flexibiliteit van softwareontwikkeling.',
      ],
      deliverablesTitle: 'Wat Wij Leveren',
      deliverables: [
        { title: 'AI & Machine Learning Integratie', description: 'Integratie van AI- en ML-mogelijkheden in automatiseringssystemen — voorspellende onderhoudsmodellen, anomaliedetectie en computervisie toepassingen.' },
        { title: 'Edge Computing Oplossingen', description: 'Industriële edge computing architecturen die data dicht bij de bron verwerken.' },
        { title: 'Maatwerk Dataplatforms', description: 'Op maat gemaakte industriële dataplatforms die OPC-UA datacollectie, tijdreeksdatabases en analyseengines combineren.' },
        { title: 'Gecontaineriseerde Automatisering', description: 'Docker en Kubernetes-gebaseerde industriële automatiseringsarchitecturen.' },
        { title: 'Proof of Concept Ontwikkeling', description: 'Snelle, gestructureerde proof-of-concept ontwikkeling om nieuwe automatiseringsbenaderingen te valideren.' },
        { title: 'IoT Platform Ontwikkeling', description: 'Maatwerk IoT-oplossingen die industriële apparatuur verbinden met dataplatforms.' },
        { title: 'Integratie van Opkomende Technologieën', description: 'Digital twin ontwikkeling, augmented reality voor ondersteuning bij onderhoud en andere opkomende technologietoepassingen.' },
      ],
      platforms: ['Docker / Kubernetes', 'Python / Node.js', 'InfluxDB / TimescaleDB', 'MQTT / OPC-UA', 'Azure IoT / AWS IoT', 'TensorFlow / PyTorch'],
    },

    es: {
      title: 'Soluciones de Automatización a Medida',
      tagline: 'Su problema es único. Su solución también debería serlo.',
      intro: [
        'No todos los desafíos de automatización se ajustan a un producto estándar o un enfoque convencional. Algunos procesos son demasiado específicos, demasiado inusuales o demasiado exigentes para resolverse con componentes listos para usar.',
        'En Preaumate, diseñamos y construimos soluciones de automatización personalizadas para desafíos que caen fuera del catálogo estándar. Esto incluye automatización impulsada por IA, aplicaciones de edge computing e integración de aprendizaje automático.',
        'Abordamos proyectos personalizados con la disciplina de la ingeniería industrial y la flexibilidad del desarrollo de software.',
      ],
      deliverablesTitle: 'Lo Que Entregamos',
      deliverables: [
        { title: 'Integración de IA y Machine Learning', description: 'Integración de capacidades de IA y ML en sistemas de automatización — modelos de mantenimiento predictivo, detección de anomalías y aplicaciones de visión por computadora.' },
        { title: 'Soluciones de Edge Computing', description: 'Arquitecturas de edge computing industrial que procesan datos cerca de la fuente.' },
        { title: 'Plataformas de Datos Personalizadas', description: 'Plataformas de datos industriales a medida que combinan recopilación de datos OPC-UA, bases de datos de series temporales y motores de análisis.' },
        { title: 'Automatización en Contenedores', description: 'Arquitecturas de automatización industrial basadas en Docker y Kubernetes.' },
        { title: 'Desarrollo de Prueba de Concepto', description: 'Desarrollo rápido y estructurado de prueba de concepto para validar nuevos enfoques de automatización.' },
        { title: 'Desarrollo de Plataforma IoT', description: 'Soluciones IoT personalizadas que conectan equipos industriales a plataformas de datos.' },
        { title: 'Integración de Tecnologías Emergentes', description: 'Desarrollo de gemelo digital, realidad aumentada para soporte de mantenimiento y otras aplicaciones de tecnología emergente.' },
      ],
      platforms: ['Docker / Kubernetes', 'Python / Node.js', 'InfluxDB / TimescaleDB', 'MQTT / OPC-UA', 'Azure IoT / AWS IoT', 'TensorFlow / PyTorch'],
    },

    de: {
      title: 'Maßgeschneiderte Automatisierungslösungen',
      tagline: 'Ihr Problem ist einzigartig. Ihre Lösung sollte es auch sein.',
      intro: [
        'Nicht jede Automatisierungsherausforderung passt zu einem Standardprodukt oder einem konventionellen Ansatz. Manche Prozesse sind zu spezifisch, zu ungewöhnlich oder zu anspruchsvoll, um mit Standardkomponenten gelöst zu werden.',
        'Bei Preaumate entwerfen und bauen wir maßgeschneiderte Automatisierungslösungen für Herausforderungen, die außerhalb des Standardkatalogs liegen. Dazu gehören KI-gesteuerte Automatisierung, Edge-Computing-Anwendungen und Machine-Learning-Integration.',
        'Wir gehen an maßgeschneiderte Projekte mit der Disziplin des Maschinenbaus und der Flexibilität der Softwareentwicklung heran.',
      ],
      deliverablesTitle: 'Was Wir Liefern',
      deliverables: [
        { title: 'KI & Machine Learning Integration', description: 'Integration von KI- und ML-Fähigkeiten in Automatisierungssysteme — prädiktive Wartungsmodelle, Anomalieerkennung und Computer-Vision-Anwendungen.' },
        { title: 'Edge-Computing-Lösungen', description: 'Industrielle Edge-Computing-Architekturen, die Daten nahe der Quelle verarbeiten.' },
        { title: 'Individuelle Datenplattformen', description: 'Maßgeschneiderte industrielle Datenplattformen, die OPC-UA-Datenerfassung, Zeitreihendatenbanken und Analyse-Engines kombinieren.' },
        { title: 'Containerisierte Automatisierung', description: 'Docker- und Kubernetes-basierte industrielle Automatisierungsarchitekturen.' },
        { title: 'Proof-of-Concept-Entwicklung', description: 'Schnelle, strukturierte Proof-of-Concept-Entwicklung zur Validierung neuer Automatisierungsansätze.' },
        { title: 'IoT-Plattformentwicklung', description: 'Individuelle IoT-Lösungen zur Verbindung industrieller Geräte mit Datenplattformen.' },
        { title: 'Integration aufkommender Technologien', description: 'Digital-Twin-Entwicklung, Augmented Reality für Wartungsunterstützung und andere Anwendungen aufkommender Technologien.' },
      ],
      platforms: ['Docker / Kubernetes', 'Python / Node.js', 'InfluxDB / TimescaleDB', 'MQTT / OPC-UA', 'Azure IoT / AWS IoT', 'TensorFlow / PyTorch'],
    },

    fr: {
      title: 'Solutions d\'Automatisation Sur Mesure',
      tagline: 'Votre problème est unique. Votre solution devrait l\'être aussi.',
      intro: [
        "Tous les défis d'automatisation ne correspondent pas à un produit standard ou une approche conventionnelle. Certains processus sont trop spécifiques, trop inhabituels ou trop exigeants pour être résolus avec des composants standard.",
        "Chez Preaumate, nous concevons et construisons des solutions d'automatisation sur mesure pour des défis qui sortent du catalogue standard. Cela inclut l'automatisation pilotée par l'IA, les applications edge computing et l'intégration du machine learning.",
        "Nous abordons les projets sur mesure avec la discipline de l'ingénierie industrielle et la flexibilité du développement logiciel.",
      ],
      deliverablesTitle: 'Ce Que Nous Livrons',
      deliverables: [
        { title: "Intégration IA & Machine Learning", description: "Intégration des capacités IA et ML dans les systèmes d'automatisation — modèles de maintenance prédictive, détection d'anomalies et applications de vision par ordinateur." },
        { title: "Solutions Edge Computing", description: "Architectures edge computing industrielles qui traitent les données près de la source." },
        { title: "Plateformes de Données Personnalisées", description: "Plateformes de données industrielles sur mesure combinant collecte de données OPC-UA, bases de données de séries temporelles et moteurs d'analyse." },
        { title: "Automatisation Conteneurisée", description: "Architectures d'automatisation industrielle basées sur Docker et Kubernetes." },
        { title: "Développement de Preuve de Concept", description: "Développement rapide et structuré de preuve de concept pour valider de nouvelles approches d'automatisation." },
        { title: "Développement de Plateforme IoT", description: "Solutions IoT personnalisées connectant les équipements industriels aux plateformes de données." },
        { title: "Intégration des Technologies Émergentes", description: "Développement de jumeau numérique, réalité augmentée pour le support de maintenance et autres applications de technologies émergentes." },
      ],
      platforms: ['Docker / Kubernetes', 'Python / Node.js', 'InfluxDB / TimescaleDB', 'MQTT / OPC-UA', 'Azure IoT / AWS IoT', 'TensorFlow / PyTorch'],
    },

    pt: {
      title: 'Soluções de Automação Customizadas',
      tagline: 'Seu problema é único. Sua solução também deveria ser.',
      intro: [
        'Nem todo desafio de automação se encaixa em um produto padrão ou uma abordagem convencional. Alguns processos são específicos demais, incomuns demais ou exigentes demais para serem resolvidos com componentes prontos.',
        'Na Preaumate, projetamos e construímos soluções de automação customizadas para desafios que ficam fora do catálogo padrão. Isso inclui automação baseada em IA, aplicações de edge computing e integração de aprendizado de máquina.',
        'Abordamos projetos customizados com a disciplina da engenharia industrial e a flexibilidade do desenvolvimento de software.',
      ],
      deliverablesTitle: 'O Que Entregamos',
      deliverables: [
        { title: 'Integração de IA e Machine Learning', description: 'Integração de capacidades de IA e ML em sistemas de automação — modelos de manutenção preditiva, detecção de anomalias e aplicações de visão computacional.' },
        { title: 'Soluções de Edge Computing', description: 'Arquiteturas de edge computing industrial que processam dados perto da fonte.' },
        { title: 'Plataformas de Dados Customizadas', description: 'Plataformas de dados industriais sob medida combinando coleta de dados OPC-UA, bancos de dados de séries temporais e mecanismos de análise.' },
        { title: 'Automação Conteinerizada', description: 'Arquiteturas de automação industrial baseadas em Docker e Kubernetes.' },
        { title: 'Desenvolvimento de Prova de Conceito', description: 'Desenvolvimento rápido e estruturado de prova de conceito para validar novas abordagens de automação.' },
        { title: 'Desenvolvimento de Plataforma IoT', description: 'Soluções IoT customizadas conectando equipamentos industriais a plataformas de dados.' },
        { title: 'Integração de Tecnologias Emergentes', description: 'Desenvolvimento de gêmeo digital, realidade aumentada para suporte de manutenção e outras aplicações de tecnologias emergentes.' },
      ],
      platforms: ['Docker / Kubernetes', 'Python / Node.js', 'InfluxDB / TimescaleDB', 'MQTT / OPC-UA', 'Azure IoT / AWS IoT', 'TensorFlow / PyTorch'],
    },
  },
};

// ──────────────────────────────────────────────────────────
// CTA TEXT PER LANGUAGE
// ──────────────────────────────────────────────────────────
export const solutionCTA = {
  en: { title: 'Ready to discuss your challenge?', subtitle: 'Tell us about your specific situation and we will get back to you quickly.', button: 'Get in Touch' },
  nl: { title: 'Klaar om uw uitdaging te bespreken?', subtitle: 'Vertel ons over uw specifieke situatie en wij nemen snel contact met u op.', button: 'Neem Contact Op' },
  es: { title: '¿Listo para discutir su desafío?', subtitle: 'Cuéntenos sobre su situación específica y le responderemos rápidamente.', button: 'Ponerse en Contacto' },
  de: { title: 'Bereit, Ihre Herausforderung zu besprechen?', subtitle: 'Schildern Sie uns Ihre spezifische Situation und wir melden uns schnell.', button: 'Kontakt aufnehmen' },
  fr: { title: 'Prêt à discuter de votre défi ?', subtitle: 'Parlez-nous de votre situation spécifique et nous vous répondrons rapidement.', button: 'Prendre Contact' },
  pt: { title: 'Pronto para discutir seu desafio?', subtitle: 'Conte-nos sobre sua situação específica e entraremos em contato rapidamente.', button: 'Entre em Contato' },
};

// ──────────────────────────────────────────────────────────
// SOLUTIONS SECTION LABELS PER LANGUAGE
// Used in the About page solutions section header
// ──────────────────────────────────────────────────────────
export const solutionsSectionLabels = {
  en: { badge: 'OUR SOLUTIONS', title: 'What We Can Do For You', subtitle: 'Six focused solution areas — each backed by real engineering experience across industries and platforms.' },
  nl: { badge: 'ONZE OPLOSSINGEN', title: 'Wat Wij Voor U Kunnen Doen', subtitle: 'Zes gerichte oplossingsgebieden — elk ondersteund door echte engineeringervaring in sectoren en platforms.' },
  es: { badge: 'NUESTRAS SOLUCIONES', title: 'Lo Que Podemos Hacer Por Usted', subtitle: 'Seis áreas de solución enfocadas — cada una respaldada por experiencia de ingeniería real en industrias y plataformas.' },
  de: { badge: 'UNSERE LÖSUNGEN', title: 'Was Wir Für Sie Tun Können', subtitle: 'Sechs fokussierte Lösungsbereiche — jeder gestützt durch echte Engineering-Erfahrung in Branchen und Plattformen.' },
  fr: { badge: 'NOS SOLUTIONS', title: 'Ce Que Nous Pouvons Faire Pour Vous', subtitle: 'Six domaines de solutions ciblés — chacun soutenu par une expérience réelle en ingénierie dans les industries et les plateformes.' },
  pt: { badge: 'NOSSAS SOLUÇÕES', title: 'O Que Podemos Fazer Por Você', subtitle: 'Seis áreas de solução focadas — cada uma apoiada por experiência real de engenharia em indústrias e plataformas.' },
};