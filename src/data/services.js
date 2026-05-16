// ============================================================
// SERVICES DATA FILE
// ============================================================
// This is the single source of truth for all service pages.
// To update any service:
//   - Change text under the language key (en, nl, es, de, fr, pt)
//   - Change images in the 'images' array (use any URL or /public path)
//   - Add/remove offerings in the 'offerings' array
//   - The page layout updates automatically
// ============================================================
import { images } from '@/data/images';

export const servicesData = {

  // ──────────────────────────────────────────────────────────
  // SERVICE 1: ROBOTIC PROCESS AUTOMATION
  // ──────────────────────────────────────────────────────────
  'robotic-process-automation': {
    slug: 'robotic-process-automation',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',

    // ── IMAGES ──────────────────────────────────────────────
    // Replace any URL with your own image path e.g. '/images/robot1.jpg'
    // Add or remove images freely — the layout adapts automatically
    images: [
      {
        url: images.services.robotics.main,
        alt: 'Industrial robot arm on factory floor',
        caption: 'Precision robotic systems on the production line',
      },
      {
        url: images.services.robotics.secondary,
        alt: 'Robot programming and control systems',
        caption: 'Advanced robot programming across all major brands',
      },
    ],

    // ── CONTENT PER LANGUAGE ────────────────────────────────
    en: {
      title: 'Robotic Process Automation',
      tagline: 'Intelligent robots. Precise execution. Measurable results.',
      intro: [
        'Industrial robots have transformed manufacturing — and the potential is still largely untapped. At Preaumate, we design, programme and commission robotic automation systems that take over the repetitive, physically demanding and precision-critical tasks that slow down your production and strain your workforce.',
        'We work with all major robot brands and control systems. Whether you need a single robot cell integrated into an existing line, or a fully orchestrated multi-robot production environment, we bring the programming expertise and hands-on experience to make it work — reliably, efficiently and safely.',
        'Every robotic system we deliver is built around your specific process requirements. We document thoroughly, write clean and maintainable code, and make sure your team understands how to operate the system before we leave the site.',
      ],
      offeringsTitle: 'What We Deliver',
      offerings: [
        {
          title: 'Robot Programming',
          description: 'Programming for all major robot brands — ABB, FANUC, KUKA, Yaskawa, Universal Robots and more. Structured, documented code that your team can maintain.',
        },
        {
          title: 'Pick & Place Automation',
          description: 'High-speed, high-accuracy pick and place solutions for assembly, packaging and material transfer applications.',
        },
        {
          title: 'Welding Automation',
          description: 'Robotic welding cells for MIG, TIG and spot welding — consistent weld quality at production speed.',
        },
        {
          title: 'Vision-Guided Robotics',
          description: 'Camera and vision system integration that gives your robots the ability to locate, identify and adapt to part variation in real time.',
        },
        {
          title: 'Collaborative Robots (Cobots)',
          description: 'Safe human-robot collaboration for applications where flexibility matters more than maximum speed. Risk assessment and safety validation included.',
        },
        {
          title: 'Robot Cell Integration',
          description: 'Full integration with your existing PLC, conveyor, and production systems. We make the robot talk to your factory.',
        },
        {
          title: 'Remote Monitoring & Support',
          description: 'Secure remote access to your robot systems so we can diagnose and resolve issues without site visits — minimising downtime.',
        },
      ],
    },

    nl: {
      title: 'Robotprocesautomatisering',
      tagline: 'Intelligente robots. Precieze uitvoering. Meetbare resultaten.',
      intro: [
        'Industriële robots hebben de productie getransformeerd — en het potentieel is nog grotendeels onbenut. Bij Preaumate ontwerpen, programmeren en commissionen wij robotautomatiseringssystemen die de repetitieve, fysiek belastende en precisiegevoelige taken overnemen die uw productie vertragen en uw personeel belasten.',
        'Wij werken met alle grote robotmerken en besturingssystemen. Of u nu één robotcel nodig heeft die in een bestaande lijn wordt geïntegreerd, of een volledig georkestreerde multi-robot productieomgeving, wij brengen de programmeerexpertise en praktische ervaring om het te laten werken — betrouwbaar, efficiënt en veilig.',
        'Elk robotsysteem dat wij leveren is gebouwd rond uw specifieke procesvereisten. Wij documenteren grondig, schrijven schone en onderhoudbare code, en zorgen ervoor dat uw team begrijpt hoe het systeem te bedienen voordat wij de locatie verlaten.',
      ],
      offeringsTitle: 'Wat Wij Leveren',
      offerings: [
        { title: 'Robotprogrammering', description: 'Programmering voor alle grote robotmerken — ABB, FANUC, KUKA, Yaskawa, Universal Robots en meer.' },
        { title: 'Pick & Place Automatisering', description: 'Snelle en nauwkeurige pick and place oplossingen voor assemblage, verpakking en materiaaltransport.' },
        { title: 'Lasautomatisering', description: 'Robotlaascellen voor MIG, TIG en puntlassen — consistente lasnaadkwaliteit op productiesnelheid.' },
        { title: 'Vision-gestuurde Robotica', description: 'Camera- en visiesysteemintegratie die uw robots in staat stelt onderdelen te lokaliseren en te identificeren.' },
        { title: 'Collaboratieve Robots (Cobots)', description: 'Veilige mens-robot samenwerking voor toepassingen waarbij flexibiliteit belangrijker is dan maximale snelheid.' },
        { title: 'Robotcel Integratie', description: 'Volledige integratie met uw bestaande PLC, transportband en productiesystemen.' },
        { title: 'Remote Monitoring & Support', description: 'Veilige toegang op afstand tot uw robotsystemen voor diagnose en probleemoplossing zonder locatiebezoeken.' },
      ],
    },

    es: {
      title: 'Automatización de Procesos Robóticos',
      tagline: 'Robots inteligentes. Ejecución precisa. Resultados medibles.',
      intro: [
        'Los robots industriales han transformado la manufactura — y el potencial aún está en gran parte sin explotar. En Preaumate, diseñamos, programamos y ponemos en marcha sistemas de automatización robótica que se hacen cargo de las tareas repetitivas, físicamente exigentes y de precisión crítica que ralentizan su producción.',
        'Trabajamos con todas las marcas principales de robots y sistemas de control. Ya sea que necesite una sola celda robótica integrada en una línea existente, o un entorno de producción multi-robot completamente orquestado, aportamos la experiencia en programación para hacerlo funcionar.',
        'Cada sistema robótico que entregamos está construido en torno a sus requisitos de proceso específicos. Documentamos exhaustivamente, escribimos código limpio y mantenible, y nos aseguramos de que su equipo entienda cómo operar el sistema.',
      ],
      offeringsTitle: 'Lo Que Entregamos',
      offerings: [
        { title: 'Programación de Robots', description: 'Programación para todas las marcas principales — ABB, FANUC, KUKA, Yaskawa, Universal Robots y más.' },
        { title: 'Automatización Pick & Place', description: 'Soluciones de alta velocidad y precisión para ensamblaje, empaque y transferencia de materiales.' },
        { title: 'Automatización de Soldadura', description: 'Celdas de soldadura robótica para MIG, TIG y soldadura por puntos.' },
        { title: 'Robótica Guiada por Visión', description: 'Integración de cámaras y sistemas de visión para localizar, identificar y adaptarse a variaciones de piezas.' },
        { title: 'Robots Colaborativos (Cobots)', description: 'Colaboración segura humano-robot para aplicaciones donde la flexibilidad importa más que la velocidad máxima.' },
        { title: 'Integración de Celdas Robóticas', description: 'Integración completa con su PLC, transportador y sistemas de producción existentes.' },
        { title: 'Monitoreo Remoto y Soporte', description: 'Acceso remoto seguro a sus sistemas robóticos para diagnosticar y resolver problemas sin visitas al sitio.' },
      ],
    },

    de: {
      title: 'Roboterprozessautomatisierung',
      tagline: 'Intelligente Roboter. Präzise Ausführung. Messbare Ergebnisse.',
      intro: [
        'Industrieroboter haben die Fertigung verändert — und das Potenzial ist noch weitgehend ungenutzt. Bei Preaumate entwerfen, programmieren und inbetriebnehmen wir Roboterautomatisierungssysteme, die repetitive, körperlich anspruchsvolle und präzisionskritische Aufgaben übernehmen.',
        'Wir arbeiten mit allen wichtigen Robotermarken und Steuerungssystemen. Ob Sie eine einzelne Roboterzelle benötigen oder eine vollständig orchestrierte Multi-Roboter-Produktionsumgebung — wir bringen die Programmierkompetenz und praktische Erfahrung.',
        'Jedes Robotersystem, das wir liefern, ist auf Ihre spezifischen Prozessanforderungen zugeschnitten. Wir dokumentieren gründlich, schreiben sauberen und wartbaren Code.',
      ],
      offeringsTitle: 'Was Wir Liefern',
      offerings: [
        { title: 'Roboterprogrammierung', description: 'Programmierung für alle wichtigen Robotermarken — ABB, FANUC, KUKA, Yaskawa, Universal Robots und mehr.' },
        { title: 'Pick & Place Automatisierung', description: 'Hochgeschwindigkeit und hochgenaue Pick-and-Place-Lösungen für Montage, Verpackung und Materialtransfer.' },
        { title: 'Schweißautomatisierung', description: 'Roboterschweißzellen für MIG-, TIG- und Punktschweißen — konstante Schweißnahtqualität.' },
        { title: 'Bildgeführte Robotik', description: 'Kamera- und Bildverarbeitungsintegration für Erkennung und Anpassung an Teilvariationen.' },
        { title: 'Kollaborative Roboter (Cobots)', description: 'Sichere Mensch-Roboter-Kollaboration für Anwendungen, bei denen Flexibilität wichtiger ist als maximale Geschwindigkeit.' },
        { title: 'Roboterzellen-Integration', description: 'Vollständige Integration mit Ihrer vorhandenen SPS, Fördertechnik und Produktionssystemen.' },
        { title: 'Fernüberwachung & Support', description: 'Sicherer Fernzugriff auf Ihre Robotersysteme zur Diagnose und Problemlösung ohne Vor-Ort-Besuche.' },
      ],
    },

    fr: {
      title: 'Automatisation des Processus Robotiques',
      tagline: 'Robots intelligents. Exécution précise. Résultats mesurables.',
      intro: [
        "Les robots industriels ont transformé la fabrication — et le potentiel est encore largement inexploité. Chez Preaumate, nous concevons, programmons et mettons en service des systèmes d'automatisation robotique qui prennent en charge les tâches répétitives, physiquement exigeantes et à précision critique.",
        "Nous travaillons avec toutes les grandes marques de robots et systèmes de contrôle. Qu'il s'agisse d'une seule cellule robotique intégrée dans une ligne existante ou d'un environnement de production multi-robots entièrement orchestré.",
        "Chaque système robotique que nous livrons est construit autour de vos exigences de processus spécifiques. Nous documentons minutieusement et écrivons un code propre et maintenable.",
      ],
      offeringsTitle: 'Ce Que Nous Livrons',
      offerings: [
        { title: 'Programmation de Robots', description: 'Programmation pour toutes les grandes marques — ABB, FANUC, KUKA, Yaskawa, Universal Robots et plus.' },
        { title: 'Automatisation Pick & Place', description: 'Solutions haute vitesse et haute précision pour assemblage, emballage et transfert de matériaux.' },
        { title: 'Automatisation de Soudage', description: 'Cellules de soudage robotique pour MIG, TIG et soudage par points.' },
        { title: 'Robotique Guidée par Vision', description: 'Intégration de caméras et systèmes de vision pour localiser et identifier les pièces en temps réel.' },
        { title: 'Robots Collaboratifs (Cobots)', description: 'Collaboration humain-robot sécurisée pour les applications où la flexibilité prime sur la vitesse maximale.' },
        { title: "Intégration de Cellules Robotiques", description: 'Intégration complète avec votre API, convoyeur et systèmes de production existants.' },
        { title: 'Surveillance à Distance & Support', description: 'Accès distant sécurisé à vos systèmes robotiques pour diagnostiquer et résoudre les problèmes sans visites sur site.' },
      ],
    },

    pt: {
      title: 'Automação de Processos Robóticos',
      tagline: 'Robôs inteligentes. Execução precisa. Resultados mensuráveis.',
      intro: [
        'Os robôs industriais transformaram a manufatura — e o potencial ainda está amplamente inexplorado. Na Preaumate, projetamos, programamos e comissionamos sistemas de automação robótica que assumem as tarefas repetitivas, fisicamente exigentes e de precisão crítica.',
        'Trabalhamos com todas as principais marcas de robôs e sistemas de controle. Seja uma única célula robótica integrada a uma linha existente ou um ambiente de produção multi-robô totalmente orquestrado.',
        'Cada sistema robótico que entregamos é construído em torno dos seus requisitos de processo específicos. Documentamos detalhadamente e escrevemos código limpo e de fácil manutenção.',
      ],
      offeringsTitle: 'O Que Entregamos',
      offerings: [
        { title: 'Programação de Robôs', description: 'Programação para todas as principais marcas — ABB, FANUC, KUKA, Yaskawa, Universal Robots e mais.' },
        { title: 'Automação Pick & Place', description: 'Soluções de alta velocidade e alta precisão para montagem, embalagem e transferência de materiais.' },
        { title: 'Automação de Soldagem', description: 'Células de soldagem robótica para MIG, TIG e soldagem a ponto.' },
        { title: 'Robótica Guiada por Visão', description: 'Integração de câmeras e sistemas de visão para localizar e identificar peças em tempo real.' },
        { title: 'Robôs Colaborativos (Cobots)', description: 'Colaboração segura humano-robô para aplicações onde a flexibilidade importa mais que a velocidade máxima.' },
        { title: 'Integração de Células Robóticas', description: 'Integração completa com seu CLP, transportador e sistemas de produção existentes.' },
        { title: 'Monitoramento Remoto e Suporte', description: 'Acesso remoto seguro aos seus sistemas robóticos para diagnosticar e resolver problemas sem visitas ao local.' },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────
  // SERVICE 2: ASSEMBLY AUTOMATION
  // ──────────────────────────────────────────────────────────
  'assembly-automation': {
    slug: 'assembly-automation',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',

    images: [
      {
        url: images.services.assembly.main,
        alt: 'Automated assembly line',
        caption: 'Flexible assembly automation for high-mix production',
      },
      {
        url: images.services.assembly.secondary,
        alt: 'Assembly control systems',
        caption: 'Integrated control and monitoring for assembly processes',
      },
    ],

    en: {
      title: 'Assembly Automation',
      tagline: 'Faster builds. Fewer errors. Consistent output every time.',
      intro: [
        'Assembly is where complexity meets quality pressure. Parts that do not fit correctly, sequences that depend on human memory, and manual steps that are difficult to inspect — these are the friction points that slow production and introduce defects. Assembly automation resolves all of them.',
        'At Preaumate, we design and implement automated assembly solutions that bring speed, repeatability and traceability to your production process. We work with both dedicated hard automation and flexible programmable systems — matching the approach to the economics of your production volumes and product variants.',
        'Our focus is always on the complete picture: not just the machine or the robot, but the flow of parts, the handoff between stations, the monitoring of quality at each step, and the data that tells you what is happening in your assembly process in real time.',
      ],
      offeringsTitle: 'What We Deliver',
      offerings: [
        { title: 'Automated Assembly Systems', description: 'Design and implementation of automated assembly stations, from single-station cells to multi-station transfer lines.' },
        { title: 'Flexible Assembly for High-Mix Production', description: 'Programmable systems that can handle multiple product variants without retooling — ideal for low-to-medium volume production.' },
        { title: 'Screwdriving & Fastening Automation', description: 'Automated torque-controlled screwdriving with full traceability — every fastener logged, every torque value recorded.' },
        { title: 'Dispensing & Adhesive Application', description: 'Precise automated dispensing of adhesives, sealants and lubricants — consistent volume, consistent placement, every cycle.' },
        { title: 'Press Fit & Force-Controlled Assembly', description: 'Force-monitored pressing operations with real-time pass/fail monitoring and data logging.' },
        { title: 'Assembly Sequence Control', description: 'PLC-based sequence control that guides operators through correct build sequences and prevents incorrect assembly.' },
        { title: 'End-of-Line Testing Integration', description: 'Integration of functional test stations into the assembly line — so that every product is verified before it leaves the line.' },
      ],
    },

    nl: {
      title: 'Assemblageautomatisering',
      tagline: 'Snellere opbouw. Minder fouten. Consistente output elke keer.',
      intro: [
        'Assemblage is waar complexiteit en kwaliteitsdruk samenkomen. Onderdelen die niet correct passen, volgorden die afhankelijk zijn van menselijk geheugen, en handmatige stappen die moeilijk te inspecteren zijn — dit zijn de knelpunten die de productie vertragen en defecten introduceren.',
        'Bij Preaumate ontwerpen en implementeren wij geautomatiseerde assemblageoplossingen die snelheid, herhaalbaarheid en traceerbaarheid brengen in uw productieproces.',
        'Onze focus ligt altijd op het complete beeld: niet alleen de machine of de robot, maar de stroom van onderdelen, de overdracht tussen stations, de bewaking van kwaliteit bij elke stap.',
      ],
      offeringsTitle: 'Wat Wij Leveren',
      offerings: [
        { title: 'Geautomatiseerde Assemblagessystemen', description: 'Ontwerp en implementatie van geautomatiseerde assemblagestations, van enkelvoudige cellen tot meerstations transferlijnen.' },
        { title: 'Flexibele Assemblage voor High-Mix Productie', description: 'Programmeerbare systemen die meerdere productvarianten kunnen verwerken zonder omstellen.' },
        { title: 'Schroefautomatisering', description: 'Geautomatiseerd momentgecontroleerd schroeven met volledige traceerbaarheid.' },
        { title: 'Doseringen & Lijmaanbreng', description: 'Nauwkeurige geautomatiseerde dosering van lijmen, afdichtingsmiddelen en smeermiddelen.' },
        { title: 'Perspassingen & Krachtgecontroleerde Assemblage', description: 'Krachtbewaakte persbewerkingen met realtime goed/fout bewaking en datalogging.' },
        { title: 'Assemblagesequentiebesturing', description: 'PLC-gebaseerde sequentiebesturing die operators door correcte bouwvolgorden leidt.' },
        { title: 'Integratie Eindlijn Testen', description: 'Integratie van functionele teststations in de assemblagelijn.' },
      ],
    },

    es: {
      title: 'Automatización de Ensamblaje',
      tagline: 'Ensamblajes más rápidos. Menos errores. Producción consistente.',
      intro: [
        'El ensamblaje es donde la complejidad se encuentra con la presión de calidad. Piezas que no encajan correctamente, secuencias que dependen de la memoria humana y pasos manuales difíciles de inspeccionar — estos son los puntos de fricción que ralentizan la producción e introducen defectos.',
        'En Preaumate, diseñamos e implementamos soluciones de ensamblaje automatizado que aportan velocidad, repetibilidad y trazabilidad a su proceso de producción.',
        'Nuestro enfoque siempre está en el panorama completo: no solo la máquina o el robot, sino el flujo de piezas, la transferencia entre estaciones y el monitoreo de calidad en cada paso.',
      ],
      offeringsTitle: 'Lo Que Entregamos',
      offerings: [
        { title: 'Sistemas de Ensamblaje Automatizado', description: 'Diseño e implementación de estaciones de ensamblaje automatizadas, desde celdas de una sola estación hasta líneas de transferencia multi-estación.' },
        { title: 'Ensamblaje Flexible para Producción de Alta Mezcla', description: 'Sistemas programables que pueden manejar múltiples variantes de productos sin necesidad de recambio de herramientas.' },
        { title: 'Automatización de Atornillado', description: 'Atornillado automático controlado por torque con trazabilidad completa.' },
        { title: 'Dispensado y Aplicación de Adhesivos', description: 'Dispensado automatizado preciso de adhesivos, selladores y lubricantes.' },
        { title: 'Ajuste a Presión y Ensamblaje Controlado por Fuerza', description: 'Operaciones de prensado monitoreadas por fuerza con monitoreo pass/fail en tiempo real.' },
        { title: 'Control de Secuencia de Ensamblaje', description: 'Control de secuencia basado en PLC que guía a los operadores a través de las secuencias de ensamblaje correctas.' },
        { title: 'Integración de Pruebas de Fin de Línea', description: 'Integración de estaciones de prueba funcional en la línea de ensamblaje.' },
      ],
    },

    de: {
      title: 'Montageautomatisierung',
      tagline: 'Schnellere Montage. Weniger Fehler. Gleichbleibende Qualität.',
      intro: [
        'Montage ist dort, wo Komplexität auf Qualitätsdruck trifft. Teile, die nicht korrekt passen, Sequenzen, die vom menschlichen Gedächtnis abhängen, und manuelle Schritte, die schwer zu prüfen sind — das sind die Reibungspunkte, die die Produktion verlangsamen.',
        'Bei Preaumate entwerfen und implementieren wir automatisierte Montagelösungen, die Geschwindigkeit, Wiederholbarkeit und Rückverfolgbarkeit in Ihren Produktionsprozess bringen.',
        'Unser Fokus liegt immer auf dem Gesamtbild: nicht nur die Maschine oder der Roboter, sondern der Teilefluss, die Übergabe zwischen Stationen und die Qualitätsüberwachung bei jedem Schritt.',
      ],
      offeringsTitle: 'Was Wir Liefern',
      offerings: [
        { title: 'Automatisierte Montagesysteme', description: 'Entwurf und Implementierung von automatisierten Montagestationen, von Einzelstationszellen bis zu Mehrstationen-Transferlinien.' },
        { title: 'Flexible Montage für High-Mix-Produktion', description: 'Programmierbare Systeme für mehrere Produktvarianten ohne Umrüstung.' },
        { title: 'Schraubautomatisierung', description: 'Automatisiertes drehmomentgesteuertes Schrauben mit vollständiger Rückverfolgbarkeit.' },
        { title: 'Dosieren & Klebstoffauftrag', description: 'Präzises automatisiertes Dosieren von Klebstoffen, Dichtmitteln und Schmierstoffen.' },
        { title: 'Einpress- & Kraftgeregelte Montage', description: 'Kraftüberwachte Pressoperationen mit Echtzeit-Gut/Schlecht-Überwachung.' },
        { title: 'Montagesequenzsteuerung', description: 'SPS-basierte Sequenzsteuerung, die Bediener durch korrekte Montagesequenzen führt.' },
        { title: 'Integration von Bandende-Tests', description: 'Integration von Funktionsprüfstationen in die Montagelinie.' },
      ],
    },

    fr: {
      title: "Automatisation d'Assemblage",
      tagline: 'Assemblages plus rapides. Moins d\'erreurs. Production constante.',
      intro: [
        "L'assemblage est là où la complexité rencontre la pression qualité. Des pièces qui ne s'emboîtent pas correctement, des séquences qui dépendent de la mémoire humaine et des étapes manuelles difficiles à inspecter — ce sont les points de friction qui ralentissent la production.",
        "Chez Preaumate, nous concevons et mettons en œuvre des solutions d'assemblage automatisées qui apportent vitesse, répétabilité et traçabilité à votre processus de production.",
        "Notre focus est toujours sur la vue d'ensemble : pas seulement la machine ou le robot, mais le flux des pièces, le passage entre stations et le contrôle qualité à chaque étape.",
      ],
      offeringsTitle: 'Ce Que Nous Livrons',
      offerings: [
        { title: "Systèmes d'Assemblage Automatisés", description: "Conception et mise en œuvre de stations d'assemblage automatisées, des cellules monopiste aux lignes de transfert multi-stations." },
        { title: 'Assemblage Flexible pour Production High-Mix', description: 'Systèmes programmables pouvant gérer plusieurs variantes de produits sans changement d\'outillage.' },
        { title: 'Automatisation du Vissage', description: 'Vissage automatique contrôlé en couple avec traçabilité complète.' },
        { title: 'Dosage & Application d\'Adhésif', description: 'Dosage automatisé précis d\'adhésifs, de produits d\'étanchéité et de lubrifiants.' },
        { title: 'Emmanchement & Assemblage Contrôlé en Force', description: 'Opérations de pressage surveillées en force avec contrôle bon/mauvais en temps réel.' },
        { title: 'Contrôle de Séquence d\'Assemblage', description: "Contrôle de séquence par API guidant les opérateurs à travers les séquences d'assemblage correctes." },
        { title: 'Intégration des Tests de Fin de Ligne', description: "Intégration de stations de test fonctionnel dans la ligne d'assemblage." },
      ],
    },

    pt: {
      title: 'Automação de Montagem',
      tagline: 'Montagens mais rápidas. Menos erros. Produção consistente.',
      intro: [
        'A montagem é onde a complexidade encontra a pressão de qualidade. Peças que não se encaixam corretamente, sequências que dependem da memória humana e etapas manuais difíceis de inspecionar — esses são os pontos de atrito que retardam a produção.',
        'Na Preaumate, projetamos e implementamos soluções de montagem automatizada que trazem velocidade, repetibilidade e rastreabilidade ao seu processo de produção.',
        'Nosso foco está sempre no panorama completo: não apenas a máquina ou o robô, mas o fluxo de peças, a transferência entre estações e o monitoramento de qualidade em cada etapa.',
      ],
      offeringsTitle: 'O Que Entregamos',
      offerings: [
        { title: 'Sistemas de Montagem Automatizados', description: 'Projeto e implementação de estações de montagem automatizadas, de células de estação única a linhas de transferência multi-estação.' },
        { title: 'Montagem Flexível para Produção de Alto Mix', description: 'Sistemas programáveis que podem lidar com múltiplas variantes de produtos sem necessidade de troca de ferramentas.' },
        { title: 'Automação de Parafusamento', description: 'Parafusamento automático controlado por torque com rastreabilidade completa.' },
        { title: 'Dosagem e Aplicação de Adesivos', description: 'Dosagem automatizada precisa de adesivos, selantes e lubrificantes.' },
        { title: 'Prensagem e Montagem Controlada por Força', description: 'Operações de prensagem monitoradas por força com monitoramento pass/fail em tempo real.' },
        { title: 'Controle de Sequência de Montagem', description: 'Controle de sequência baseado em CLP que guia os operadores pelas sequências de montagem corretas.' },
        { title: 'Integração de Testes de Fim de Linha', description: 'Integração de estações de teste funcional na linha de montagem.' },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────
  // SERVICE 3: MATERIAL HANDLING
  // ──────────────────────────────────────────────────────────
  'material-handling': {
    slug: 'material-handling',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',

    images: [
      {
        url: images.services.materialHandling.main,
        alt: 'Automated warehouse and logistics',
        caption: 'Intelligent material flow systems for modern warehousing',
      },
      {
        url: images.services.materialHandling.secondary,
        alt: 'Conveyor and material handling systems',
        caption: 'Automated conveyor and sorting systems',
      },
    ],

    en: {
      title: 'Material Handling',
      tagline: 'The right material. At the right place. At the right time.',
      intro: [
        'Material handling is the backbone of any production or logistics operation — and when it fails, everything downstream fails with it. Bottlenecks at transfer points, manual handling injuries, misrouted parts and untracked inventory are not just operational inconveniences. They are measurable costs that compound daily.',
        'At Preaumate, we design and implement automated material handling solutions that improve flow, increase throughput and give you real-time visibility over where your materials and products are at every moment. From simple conveyor systems to complex automated storage and retrieval, we match the solution to the scale and complexity of your operation.',
        'We bring industrial automation expertise to the integration layer — making sure your material handling systems communicate with your production control, your ERP, and your operators in a way that is intuitive and reliable.',
      ],
      offeringsTitle: 'What We Deliver',
      offerings: [
        { title: 'Conveyor System Design & Control', description: 'PLC-controlled conveyor networks with routing logic, speed control, accumulation and diverter control.' },
        { title: 'Automated Storage & Retrieval (AS/RS)', description: 'Automated warehouse systems with location management, inventory tracking and optimised retrieval sequences.' },
        { title: 'AGV & AMR Integration', description: 'Integration of Automated Guided Vehicles and Autonomous Mobile Robots into your production and logistics flow.' },
        { title: 'Palletising & Depalletising', description: 'Automated robotic palletising solutions for end-of-line product stacking — pattern programming, layer management, stretch wrap integration.' },
        { title: 'Sortation Systems', description: 'Automated sorting by product type, destination or order — for logistics, distribution and production environments.' },
        { title: 'Warehouse Management System (WMS) Integration', description: 'Connecting your material handling automation to your WMS or ERP — real-time inventory visibility and automated replenishment triggers.' },
        { title: 'Safety System Integration', description: 'Area scanners, light curtains, safety gates and emergency stop integration — material handling safety built to EN ISO standards.' },
      ],
    },

    nl: {
      title: 'Materiaalbehandeling',
      tagline: 'Het juiste materiaal. Op de juiste plaats. Op het juiste moment.',
      intro: [
        'Materiaalbehandeling is de ruggengraat van elke productie- of logistieke operatie — en wanneer het faalt, faalt alles stroomafwaarts mee. Knelpunten bij overgangspunten, handmatige behandelingsletsel, verkeerd gerouteerde onderdelen en niet-bijgehouden voorraad zijn meetbare kosten die dagelijks oplopen.',
        'Bij Preaumate ontwerpen en implementeren wij geautomatiseerde materiaalbehandelingsoplossingen die de doorstroming verbeteren, de doorvoer verhogen en u realtime zichtbaarheid geven over waar uw materialen en producten zich op elk moment bevinden.',
        'Wij brengen industriële automatiseringsexpertise naar de integratielaag — ervoor zorgend dat uw materiaalbehandelingssystemen communiceren met uw productiebesturing, uw ERP en uw operators.',
      ],
      offeringsTitle: 'Wat Wij Leveren',
      offerings: [
        { title: 'Transportbandontwerp & Besturing', description: 'PLC-gecontroleerde transportbandnetwerken met routeringslogica, snelheidsregeling, accumulatie en afleiderbesturing.' },
        { title: 'Automatische Opslag & Terugwinning (AS/RS)', description: 'Geautomatiseerde magazijnsystemen met locatiebeheer, voorraadbeheer en geoptimaliseerde terugwinningssequenties.' },
        { title: 'AGV & AMR Integratie', description: 'Integratie van Automatisch Geleide Voertuigen en Autonome Mobiele Robots in uw productie- en logistiekstroom.' },
        { title: 'Palletisering & Depalletisering', description: 'Geautomatiseerde robotpalletiseringsoplossingen voor eindlijn productstapeling.' },
        { title: 'Sorteersystemen', description: 'Geautomatiseerde sortering op producttype, bestemming of order.' },
        { title: 'WMS Integratie', description: 'Verbinding van uw materiaalbehandelingsautomatisering met uw WMS of ERP.' },
        { title: 'Veiligheidssysteemintegratie', description: 'Gebiedscanners, lichtgordijnen, veiligheidspoorten en noodstopintegratie.' },
      ],
    },

    es: {
      title: 'Manejo de Materiales',
      tagline: 'El material correcto. En el lugar correcto. En el momento correcto.',
      intro: [
        'El manejo de materiales es la columna vertebral de cualquier operación de producción o logística — y cuando falla, todo lo que viene después falla también. Cuellos de botella en puntos de transferencia, lesiones por manejo manual, piezas mal encaminadas e inventario sin rastrear son costos medibles que se acumulan diariamente.',
        'En Preaumate, diseñamos e implementamos soluciones automatizadas de manejo de materiales que mejoran el flujo, aumentan el rendimiento y le dan visibilidad en tiempo real sobre dónde están sus materiales y productos en todo momento.',
        'Aportamos experiencia en automatización industrial a la capa de integración — asegurándonos de que sus sistemas de manejo de materiales se comuniquen con su control de producción, su ERP y sus operadores.',
      ],
      offeringsTitle: 'Lo Que Entregamos',
      offerings: [
        { title: 'Diseño y Control de Sistemas de Transportadores', description: 'Redes de transportadores controladas por PLC con lógica de enrutamiento, control de velocidad y control de desviadores.' },
        { title: 'Almacenamiento y Recuperación Automatizados (AS/RS)', description: 'Sistemas de almacén automatizados con gestión de ubicaciones y seguimiento de inventario.' },
        { title: 'Integración de AGV y AMR', description: 'Integración de Vehículos de Guiado Automático y Robots Móviles Autónomos en su flujo de producción y logística.' },
        { title: 'Paletización y Despaletización', description: 'Soluciones de paletización robótica automatizada para apilamiento de productos al final de línea.' },
        { title: 'Sistemas de Clasificación', description: 'Clasificación automatizada por tipo de producto, destino o pedido.' },
        { title: 'Integración de Sistema de Gestión de Almacén (WMS)', description: 'Conexión de su automatización de manejo de materiales a su WMS o ERP.' },
        { title: 'Integración de Sistemas de Seguridad', description: 'Escáneres de área, cortinas de luz, puertas de seguridad e integración de parada de emergencia.' },
      ],
    },

    de: {
      title: 'Materialhandhabung',
      tagline: 'Das richtige Material. Am richtigen Ort. Zur richtigen Zeit.',
      intro: [
        'Materialhandhabung ist das Rückgrat jeder Produktions- oder Logistikoperation — und wenn sie versagt, versagt alles Nachgelagerte mit ihr. Engpässe an Übergabepunkten, Handhabungsverletzungen und nicht verfolgtes Inventar sind messbare Kosten, die sich täglich ansammeln.',
        'Bei Preaumate entwerfen und implementieren wir automatisierte Materialhandhabungslösungen, die den Fluss verbessern, den Durchsatz erhöhen und Ihnen Echtzeittransparenz darüber geben, wo sich Ihre Materialien und Produkte befinden.',
        'Wir bringen Industrieautomatisierungsexpertise in die Integrationsschicht — um sicherzustellen, dass Ihre Materialhandhabungssysteme mit Ihrer Produktionssteuerung, Ihrem ERP und Ihren Bedienern kommunizieren.',
      ],
      offeringsTitle: 'Was Wir Liefern',
      offerings: [
        { title: 'Fördertechnikdesign & Steuerung', description: 'SPS-gesteuerte Fördernetzwerke mit Routing-Logik, Geschwindigkeitsregelung, Stauförderung und Weichensteuerung.' },
        { title: 'Automatisches Lagersystem (AS/RS)', description: 'Automatisierte Lagersysteme mit Standortverwaltung, Bestandsverfolgung und optimierten Entnahmesequenzen.' },
        { title: 'AGV & AMR Integration', description: 'Integration von Fahrerlosen Transportsystemen und Autonomen Mobilen Robotern in Ihren Produktions- und Logistikfluss.' },
        { title: 'Palettieren & Depalettieren', description: 'Automatisierte Roboterpalettierlösungen für die Produktstapelung am Bandende.' },
        { title: 'Sortiersysteme', description: 'Automatisierte Sortierung nach Produkttyp, Ziel oder Auftrag.' },
        { title: 'Lagerverwaltungssystem (WMS) Integration', description: 'Verbindung Ihrer Materialhandhabungsautomatisierung mit Ihrem WMS oder ERP.' },
        { title: 'Sicherheitssystemintegration', description: 'Flächenscanner, Lichtvorhänge, Sicherheitstüren und Not-Aus-Integration.' },
      ],
    },

    fr: {
      title: 'Manutention des Matériaux',
      tagline: 'Le bon matériau. Au bon endroit. Au bon moment.',
      intro: [
        "La manutention des matériaux est l'épine dorsale de toute opération de production ou de logistique — et quand elle échoue, tout ce qui suit échoue avec elle. Les goulots d'étranglement aux points de transfert, les blessures dues à la manutention manuelle et les inventaires non suivis sont des coûts mesurables qui s'accumulent chaque jour.",
        "Chez Preaumate, nous concevons et mettons en œuvre des solutions de manutention automatisées qui améliorent le flux, augmentent le débit et vous donnent une visibilité en temps réel sur l'emplacement de vos matériaux et produits.",
        "Nous apportons une expertise en automatisation industrielle à la couche d'intégration — en veillant à ce que vos systèmes de manutention communiquent avec votre contrôle de production, votre ERP et vos opérateurs.",
      ],
      offeringsTitle: 'Ce Que Nous Livrons',
      offerings: [
        { title: 'Conception et Contrôle des Systèmes de Convoyeurs', description: 'Réseaux de convoyeurs contrôlés par API avec logique de routage, contrôle de vitesse et contrôle de déviateurs.' },
        { title: 'Stockage et Récupération Automatisés (AS/RS)', description: 'Systèmes de stockage automatisés avec gestion des emplacements et suivi des stocks.' },
        { title: 'Intégration AGV & AMR', description: 'Intégration de Véhicules à Guidage Automatique et Robots Mobiles Autonomes dans votre flux de production et logistique.' },
        { title: 'Palettisation & Dépalettisation', description: 'Solutions de palettisation robotique automatisée pour l\'empilement de produits en fin de ligne.' },
        { title: 'Systèmes de Tri', description: 'Tri automatisé par type de produit, destination ou commande.' },
        { title: 'Intégration du Système de Gestion d\'Entrepôt (WMS)', description: 'Connexion de votre automatisation de manutention à votre WMS ou ERP.' },
        { title: 'Intégration des Systèmes de Sécurité', description: 'Scanners de zone, rideaux lumineux, portes de sécurité et intégration des arrêts d\'urgence.' },
      ],
    },

    pt: {
      title: 'Manuseio de Materiais',
      tagline: 'O material certo. No lugar certo. Na hora certa.',
      intro: [
        'O manuseio de materiais é a espinha dorsal de qualquer operação de produção ou logística — e quando falha, tudo que vem depois falha junto. Gargalos em pontos de transferência, lesões por manuseio manual e inventário não rastreado são custos mensuráveis que se acumulam diariamente.',
        'Na Preaumate, projetamos e implementamos soluções automatizadas de manuseio de materiais que melhoram o fluxo, aumentam a produtividade e oferecem visibilidade em tempo real sobre onde seus materiais e produtos estão a cada momento.',
        'Trazemos expertise em automação industrial para a camada de integração — garantindo que seus sistemas de manuseio de materiais se comuniquem com seu controle de produção, seu ERP e seus operadores.',
      ],
      offeringsTitle: 'O Que Entregamos',
      offerings: [
        { title: 'Projeto e Controle de Sistemas de Transportadores', description: 'Redes de transportadores controladas por CLP com lógica de roteamento, controle de velocidade e controle de desviadores.' },
        { title: 'Armazenamento e Recuperação Automatizados (AS/RS)', description: 'Sistemas de armazém automatizados com gerenciamento de localização e rastreamento de inventário.' },
        { title: 'Integração de AGV e AMR', description: 'Integração de Veículos Guiados Automaticamente e Robôs Móveis Autônomos em seu fluxo de produção e logística.' },
        { title: 'Paletização e Despaletização', description: 'Soluções de paletização robótica automatizada para empilhamento de produtos no final da linha.' },
        { title: 'Sistemas de Classificação', description: 'Classificação automatizada por tipo de produto, destino ou pedido.' },
        { title: 'Integração de Sistema de Gerenciamento de Armazém (WMS)', description: 'Conexão de sua automação de manuseio de materiais ao seu WMS ou ERP.' },
        { title: 'Integração de Sistemas de Segurança', description: 'Scanners de área, cortinas de luz, portões de segurança e integração de parada de emergência.' },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────
  // SERVICE 4: QUALITY CONTROL
  // ──────────────────────────────────────────────────────────
  'quality-control': {
    slug: 'quality-control',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',

    images: [
      {
        url: images.services.qualityControl.main,
        alt: 'Quality inspection and measurement',
        caption: 'Precision inspection systems for zero-defect manufacturing',
      },
      {
        url: images.services.qualityControl.secondary,
        alt: 'Machine vision quality control',
        caption: 'Machine vision systems for automated defect detection',
      },
    ],

    en: {
      title: 'Quality Control',
      tagline: 'Zero defects. Full traceability. Quality built in — not inspected in.',
      intro: [
        'Quality problems discovered at the end of a production line — or worse, by the customer — are among the most expensive failures in manufacturing. Scrap, rework, warranty claims, and reputation damage all follow from inspection processes that are too slow, too inconsistent, or too late in the production sequence.',
        'At Preaumate, we design and implement automated quality control systems that catch defects early, document results comprehensively, and give you the data to understand not just what failed — but why, and where in your process the problem originates.',
        'Our approach to quality automation is integration-first. Inspection results feed back into production control, trigger alarms and rejections in real time, and build the traceability records that modern quality management systems and customer audits demand.',
      ],
      offeringsTitle: 'What We Deliver',
      offerings: [
        { title: 'Machine Vision Inspection', description: 'Camera-based inspection systems for surface defect detection, dimensional verification, label and code reading, and assembly completeness checks.' },
        { title: 'Dimensional Measurement Systems', description: 'Automated gauging and measurement stations integrated into the production line — 100% inspection without slowing throughput.' },
        { title: 'Statistical Process Control (SPC)', description: 'Real-time SPC monitoring with control charts, capability indices and automatic alerts when processes drift outside acceptable limits.' },
        { title: 'Traceability Systems', description: 'Complete production traceability — every part, every process parameter, every test result linked to a unique identifier and stored for full lifecycle tracking.' },
        { title: 'Leak and Pressure Testing', description: 'Automated leak detection and pressure testing systems with pass/fail logging and integration into production records.' },
        { title: 'End-of-Line Functional Testing', description: 'Automated functional test stations that verify product performance before release — electrical, mechanical, fluidic or pneumatic testing depending on your product.' },
        { title: 'Quality Data Reporting & Dashboards', description: 'Real-time quality dashboards and automated reporting — so your quality team always has the data they need, without manual data collection.' },
      ],
    },

    nl: {
      title: 'Kwaliteitscontrole',
      tagline: 'Nul defecten. Volledige traceerbaarheid. Kwaliteit ingebouwd — niet er achteraf ingecheckt.',
      intro: [
        'Kwaliteitsproblemen ontdekt aan het einde van een productielijn — of erger, door de klant — behoren tot de duurste mislukkingen in de productie. Uitval, nabewerking, garantieclaims en reputatieschade volgen allemaal uit inspectieprocessen die te langzaam, te inconsistent of te laat in de productievolgorde zijn.',
        'Bij Preaumate ontwerpen en implementeren wij geautomatiseerde kwaliteitscontrolesystemen die defecten vroeg opsporen, resultaten uitgebreid documenteren en u de gegevens geven om te begrijpen wat er mislukt en waarom.',
        'Onze benadering van kwaliteitsautomatisering is integratie-eerst. Inspectieresultaten voeden terug naar productiebesturing, activeren alarmen en afwijzingen in real-time.',
      ],
      offeringsTitle: 'Wat Wij Leveren',
      offerings: [
        { title: 'Machine Vision Inspectie', description: 'Cameragestuurde inspectiesystemen voor oppervlaktedefectdetectie, dimensionale verificatie en assemblagevolledigheidscontroles.' },
        { title: 'Dimensionale Meetsystemen', description: 'Geautomatiseerde maatstations geïntegreerd in de productielijn — 100% inspectie zonder doorvoerverlies.' },
        { title: 'Statistische Procesbeheersing (SPC)', description: 'Real-time SPC bewaking met regelkaarten en automatische waarschuwingen wanneer processen buiten acceptabele grenzen drijven.' },
        { title: 'Traceerbaarheidssystemen', description: 'Volledige productietraceerbaarheid — elk onderdeel, elke procesparameter en elk testresultaat gekoppeld aan een unieke identificator.' },
        { title: 'Lek- en Drukbeproeving', description: 'Geautomatiseerde lekdetectie- en drukbeproevingssystemen met goed/fout logging.' },
        { title: 'Eindlijn Functionele Tests', description: 'Geautomatiseerde functionele teststations die productprestaties verifiëren vóór vrijgave.' },
        { title: 'Kwaliteitsdata Rapportage & Dashboards', description: 'Real-time kwaliteitsdashboards en geautomatiseerde rapportage voor uw kwaliteitsteam.' },
      ],
    },

    es: {
      title: 'Control de Calidad',
      tagline: 'Cero defectos. Trazabilidad completa. Calidad incorporada, no inspeccionada.',
      intro: [
        'Los problemas de calidad descubiertos al final de una línea de producción — o peor, por el cliente — están entre los fracasos más costosos en la manufactura. Desperdicios, retrabajos, reclamaciones de garantía y daños a la reputación siguen todos de procesos de inspección que son demasiado lentos, demasiado inconsistentes o demasiado tardíos.',
        'En Preaumate, diseñamos e implementamos sistemas automatizados de control de calidad que detectan defectos temprano, documentan resultados de manera exhaustiva y le dan los datos para entender no solo qué falló, sino por qué.',
        'Nuestro enfoque para la automatización de calidad es integración primero. Los resultados de inspección retroalimentan el control de producción, activan alarmas y rechazos en tiempo real.',
      ],
      offeringsTitle: 'Lo Que Entregamos',
      offerings: [
        { title: 'Inspección por Visión Artificial', description: 'Sistemas de inspección basados en cámara para detección de defectos superficiales, verificación dimensional y controles de completitud de ensamblaje.' },
        { title: 'Sistemas de Medición Dimensional', description: 'Estaciones de medición automatizadas integradas en la línea de producción — inspección al 100% sin reducir el rendimiento.' },
        { title: 'Control Estadístico de Procesos (CEP)', description: 'Monitoreo CEP en tiempo real con gráficos de control y alertas automáticas cuando los procesos se desvían fuera de límites aceptables.' },
        { title: 'Sistemas de Trazabilidad', description: 'Trazabilidad de producción completa — cada pieza, cada parámetro de proceso y cada resultado de prueba vinculado a un identificador único.' },
        { title: 'Pruebas de Fugas y Presión', description: 'Sistemas automatizados de detección de fugas y pruebas de presión con registro pass/fail.' },
        { title: 'Pruebas Funcionales de Fin de Línea', description: 'Estaciones de prueba funcional automatizadas que verifican el rendimiento del producto antes de su liberación.' },
        { title: 'Reportes de Datos de Calidad y Dashboards', description: 'Dashboards de calidad en tiempo real e informes automatizados para su equipo de calidad.' },
      ],
    },

    de: {
      title: 'Qualitätskontrolle',
      tagline: 'Null Fehler. Vollständige Rückverfolgbarkeit. Eingebaute Qualität.',
      intro: [
        'Qualitätsprobleme, die am Ende einer Produktionslinie entdeckt werden — oder schlimmer, vom Kunden — gehören zu den teuersten Ausfällen in der Fertigung. Ausschuss, Nacharbeit, Garantieansprüche und Reputationsschäden folgen alle aus Inspektionsprozessen, die zu langsam, zu inkonsistent oder zu spät in der Produktionssequenz sind.',
        'Bei Preaumate entwerfen und implementieren wir automatisierte Qualitätskontrollsysteme, die Fehler früh erkennen, Ergebnisse umfassend dokumentieren und Ihnen die Daten liefern, um zu verstehen, was fehlgeschlagen ist und warum.',
        'Unser Ansatz zur Qualitätsautomatisierung ist Integration-First. Inspektionsergebnisse fließen zurück in die Produktionssteuerung und lösen Alarme und Ablehnungen in Echtzeit aus.',
      ],
      offeringsTitle: 'Was Wir Liefern',
      offerings: [
        { title: 'Bildverarbeitungs-Inspektion', description: 'Kamerabasierte Inspektionssysteme für Oberflächenfehlerkennung, dimensionale Verifikation und Montagevollständigkeitsprüfungen.' },
        { title: 'Dimensionale Messsysteme', description: 'Automatisierte Mess- und Prüfstationen integriert in die Produktionslinie — 100% Inspektion ohne Durchsatzverlust.' },
        { title: 'Statistische Prozesskontrolle (SPC)', description: 'Echtzeit-SPC-Überwachung mit Regelkarten und automatischen Warnungen, wenn Prozesse außerhalb akzeptabler Grenzen driften.' },
        { title: 'Rückverfolgbarkeitssysteme', description: 'Vollständige Produktionsrückverfolgbarkeit — jedes Teil, jeder Prozessparameter und jedes Testergebnis mit einer eindeutigen Kennung verknüpft.' },
        { title: 'Leck- und Druckprüfung', description: 'Automatisierte Leckerkennungs- und Druckprüfsysteme mit Gut/Schlecht-Protokollierung.' },
        { title: 'Bandende-Funktionsprüfung', description: 'Automatisierte Funktionsprüfstationen, die die Produktleistung vor der Freigabe überprüfen.' },
        { title: 'Qualitätsdaten-Berichte & Dashboards', description: 'Echtzeit-Qualitätsdashboards und automatisierte Berichte für Ihr Qualitätsteam.' },
      ],
    },

    fr: {
      title: 'Contrôle Qualité',
      tagline: 'Zéro défaut. Traçabilité complète. Qualité intégrée, pas inspectée.',
      intro: [
        "Les problèmes de qualité découverts en fin de ligne de production — ou pire, par le client — font partie des échecs les plus coûteux dans la fabrication. Rebuts, retouches, réclamations de garantie et dommages à la réputation découlent tous de processus d'inspection trop lents, trop inconsistants ou trop tardifs.",
        "Chez Preaumate, nous concevons et mettons en œuvre des systèmes de contrôle qualité automatisés qui détectent les défauts tôt, documentent les résultats de manière exhaustive et vous fournissent les données pour comprendre non seulement ce qui a échoué, mais pourquoi.",
        "Notre approche de l'automatisation qualité est l'intégration en premier. Les résultats d'inspection alimentent le contrôle de production et déclenchent des alarmes et des rejets en temps réel.",
      ],
      offeringsTitle: 'Ce Que Nous Livrons',
      offerings: [
        { title: 'Inspection par Vision Artificielle', description: "Systèmes d'inspection par caméra pour la détection de défauts de surface, la vérification dimensionnelle et les contrôles de complétude d'assemblage." },
        { title: 'Systèmes de Mesure Dimensionnelle', description: "Stations de mesure automatisées intégrées dans la ligne de production — inspection à 100% sans réduction du débit." },
        { title: 'Contrôle Statistique des Procédés (CSP)', description: 'Surveillance CSP en temps réel avec cartes de contrôle et alertes automatiques lorsque les processus dérivent hors des limites acceptables.' },
        { title: 'Systèmes de Traçabilité', description: 'Traçabilité de production complète — chaque pièce, chaque paramètre de processus et chaque résultat de test liés à un identifiant unique.' },
        { title: 'Tests d\'Étanchéité et de Pression', description: 'Systèmes automatisés de détection de fuites et de tests de pression avec journalisation bon/mauvais.' },
        { title: 'Tests Fonctionnels de Fin de Ligne', description: 'Stations de test fonctionnel automatisées vérifiant les performances du produit avant sa libération.' },
        { title: 'Rapports de Données Qualité & Tableaux de Bord', description: 'Tableaux de bord qualité en temps réel et rapports automatisés pour votre équipe qualité.' },
      ],
    },

    pt: {
      title: 'Controle de Qualidade',
      tagline: 'Zero defeitos. Rastreabilidade completa. Qualidade incorporada.',
      intro: [
        'Problemas de qualidade descobertos no final de uma linha de produção — ou pior, pelo cliente — estão entre as falhas mais caras na manufatura. Sucata, retrabalho, reclamações de garantia e danos à reputação seguem todos de processos de inspeção que são muito lentos, muito inconsistentes ou muito tardios.',
        'Na Preaumate, projetamos e implementamos sistemas automatizados de controle de qualidade que detectam defeitos cedo, documentam resultados de forma abrangente e fornecem os dados para entender não apenas o que falhou, mas por quê.',
        'Nossa abordagem para automação de qualidade é integração primeiro. Os resultados de inspeção retroalimentam o controle de produção e acionam alarmes e rejeições em tempo real.',
      ],
      offeringsTitle: 'O Que Entregamos',
      offerings: [
        { title: 'Inspeção por Visão de Máquina', description: 'Sistemas de inspeção baseados em câmera para detecção de defeitos de superfície, verificação dimensional e verificações de completude de montagem.' },
        { title: 'Sistemas de Medição Dimensional', description: 'Estações de medição automatizadas integradas à linha de produção — inspeção 100% sem reduzir a produtividade.' },
        { title: 'Controle Estatístico de Processo (CEP)', description: 'Monitoramento CEP em tempo real com gráficos de controle e alertas automáticos quando os processos derivam para fora dos limites aceitáveis.' },
        { title: 'Sistemas de Rastreabilidade', description: 'Rastreabilidade de produção completa — cada peça, cada parâmetro de processo e cada resultado de teste vinculados a um identificador único.' },
        { title: 'Testes de Vazamento e Pressão', description: 'Sistemas automatizados de detecção de vazamento e teste de pressão com registro pass/fail.' },
        { title: 'Testes Funcionais de Fim de Linha', description: 'Estações de teste funcional automatizadas que verificam o desempenho do produto antes da liberação.' },
        { title: 'Relatórios de Dados de Qualidade e Dashboards', description: 'Dashboards de qualidade em tempo real e relatórios automatizados para sua equipe de qualidade.' },
      ],
    },
  },
};

// ──────────────────────────────────────────────────────────────
// CTA TEXT PER LANGUAGE
// Text for the contact button at the bottom of each service page
// ──────────────────────────────────────────────────────────────
export const serviceCTA = {
  en: { title: 'Ready to discuss your project?', subtitle: 'Tell us about your specific needs and we will get back to you quickly.', button: 'Get in Touch' },
  nl: { title: 'Klaar om uw project te bespreken?', subtitle: 'Vertel ons over uw specifieke behoeften en wij nemen snel contact met u op.', button: 'Neem Contact Op' },
  es: { title: '¿Listo para discutir su proyecto?', subtitle: 'Cuéntenos sobre sus necesidades específicas y le responderemos rápidamente.', button: 'Ponerse en Contacto' },
  de: { title: 'Bereit, Ihr Projekt zu besprechen?', subtitle: 'Schildern Sie uns Ihre spezifischen Anforderungen und wir melden uns schnell.', button: 'Kontakt aufnehmen' },
  fr: { title: 'Prêt à discuter de votre projet ?', subtitle: 'Parlez-nous de vos besoins spécifiques et nous vous répondrons rapidement.', button: 'Prendre Contact' },
  pt: { title: 'Pronto para discutir seu projeto?', subtitle: 'Conte-nos sobre suas necessidades específicas e entraremos em contato rapidamente.', button: 'Entre em Contato' },
};