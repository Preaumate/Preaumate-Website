import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, MapPin, Award, Globe } from 'lucide-react';
import { useLanguage }      from '@/context/LanguageContext';
import { curriculumData }   from '@/data/curriculum';
import { images, getImage } from '@/data/images';
import { Link } from 'react-router-dom';

// ─────────────────────────────────────────────────────────────────────────────
// Colour tokens
// ─────────────────────────────────────────────────────────────────────────────
const GREEN  = '#10b981';
const BLUE   = '#0ea5e9';
const TEXT   = '#f0f4ff';
const MUTED  = '#94a3b8';
const FAINT  = '#64748b';
const CARD   = '#0f172a';

// Theo's real specialisations drawn directly from curriculum.js tech categories.
// First 3 PLC platforms + his two key industry sectors from the CV.
const THEO_SPECIALISATIONS = [
  'Siemens Step 7 & TIA Portal',
  'Rockwell Studio 5000',
  'CoDeSys / Beckhoff TwinCAT',
  'WinCC · Citect · Cimplicity',
  'Maritime & Offshore HVAC',
  'Industrial Food Processing',
];

// Language codes and flags — static because they do not change between
// translations of the page itself.
const THEO_LANGUAGES = [
  { code: 'NL', flag: '🇳🇱', label: 'Native'    },
  { code: 'EN', flag: '🇬🇧', label: 'Proficient' },
  { code: 'ES', flag: '🇪🇸', label: 'Proficient' },
  { code: 'DE', flag: '🇩🇪', label: 'Advanced'  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Theo's card — pulls real data from curriculum.js and t.curriculum
// ─────────────────────────────────────────────────────────────────────────────
const TheoCard = ({ cv, fo }) => {
  const photo = getImage(images.founders.theo, '');
  const d     = curriculumData;

  // Role title — from curriculum i18n if available, fallback to CV string
  const roleTitle = cv?.roles?.preaumate?.roleTitle
    || 'Founder & Industrial Automation Engineer';

  // Bio — built from the curriculum summary. Uses first sentence only to
  // keep the card concise. Falls back to a hardcoded sentence from the CV.
  const rawSummary = cv?.summaryText
    || 'Founder of Preaumate with over 30 years of hands-on experience in PLC programming, SCADA development, system integration and international commissioning across Europe and Latin America.';
  // Take first sentence (ends at first full stop followed by a space or end)
  const bio = rawSummary.split(/\.\s+/)[0] + '.';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden"
      style={{ background: CARD, border: '1px solid rgba(16,185,129,0.25)' }}
    >
      {/* Green accent bar at top */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, #10b981, #0ea5e9)' }}
      />

      <div className="p-7 flex flex-col gap-5">

        {/* ── Avatar + name ──────────────────────────────────────────────── */}
        <div className="flex items-start gap-4">
          {photo ? (
            <img
              src={photo}
              alt={d.name}
              className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              style={{ border: '2px solid rgba(16,185,129,0.3)' }}
            />
          ) : (
            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-black flex-shrink-0"
              style={{
                background: 'rgba(16,185,129,0.1)',
                border:     '2px solid rgba(16,185,129,0.3)',
                color:      GREEN,
              }}
            >
              TR
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-black leading-tight" style={{ color: TEXT }}>
              {d.name}
            </h3>
            <p className="text-sm font-semibold mt-0.5" style={{ color: GREEN }}>
              {roleTitle}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5" style={{ color: FAINT }}>
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs">{d.location}</span>
            </div>
          </div>
        </div>

        {/* ── Experience highlight ────────────────────────────────────────── */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}
        >
          <Award className="w-5 h-5 flex-shrink-0" style={{ color: GREEN }} />
          <p className="text-sm font-semibold" style={{ color: MUTED }}>
            30+ years of industrial automation — maritime, offshore &amp; food processing
          </p>
        </div>

        {/* ── Bio ─────────────────────────────────────────────────────────── */}
        <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
          {bio}
        </p>

        {/* ── Specialisations ─────────────────────────────────────────────── */}
        <div>
          <p
            className="text-xs font-black tracking-widest mb-2.5 uppercase"
            style={{ color: GREEN }}
          >
            {fo?.specializationsLabel || 'Specialized in'}
          </p>
          <div className="flex flex-wrap gap-2">
            {THEO_SPECIALISATIONS.map((s, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border:     '1px solid rgba(16,185,129,0.2)',
                  color:      GREEN,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── Languages ───────────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Globe className="w-3.5 h-3.5" style={{ color: BLUE }} />
            <p className="text-xs font-black tracking-widest uppercase" style={{ color: BLUE }}>
              Languages
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {THEO_LANGUAGES.map(({ code, flag, label }) => (
              <span
                key={code}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  background: 'rgba(14,165,233,0.08)',
                  border:     '1px solid rgba(14,165,233,0.2)',
                  color:      MUTED,
                }}
              >
                <span>{flag}</span>
                <span className="font-bold" style={{ color: BLUE }}>{code}</span>
                <span>· {label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── LinkedIn ────────────────────────────────────────────────────── 
        <a
          href={d.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold w-fit transition-opacity duration-200 hover:opacity-70"
          style={{ color: GREEN }}
        >
          <Linkedin className="w-4 h-4" />
          {fo?.linkedinLabel || 'View LinkedIn'}
        </a> */}

         {/* ── Link to full profile / curriculum ──────────────────────────── */}

          <Link to="profile/tjrietveld#summary" style={{ color: '#8899bb' }}>
          <a className="inline-flex items-center gap-2 text-sm font-semibold w-fit transition-opacity duration-200 hover:opacity-70"
          style={{ color: GREEN }}
          >
          Full profile
          </a>
          </Link>

        


      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Second founder card — placeholder until filled in
// ─────────────────────────────────────────────────────────────────────────────
const PartnerCard = ({ fo }) => {
  const founders = fo?.founders;
  const f2       = founders?.[1];
  const photo    = getImage(images.founders?.coFounder, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="rounded-2xl overflow-hidden"
      style={{ background: CARD, border: '1px solid rgba(14,165,233,0.2)' }}
    >
      {/* Blue accent bar at top */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)' }}
      />

      <div className="p-7 flex flex-col gap-5">

        {/* ── Avatar + name ──────────────────────────────────────────────── */}
        <div className="flex items-start gap-4">
          {photo ? (
            <img
              src={photo}
              alt={f2?.name || 'Co-founder'}
              className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              style={{ border: '2px solid rgba(14,165,233,0.3)' }}
            />
          ) : (
            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-black flex-shrink-0"
              style={{
                background: 'rgba(14,165,233,0.1)',
                border:     '2px solid rgba(14,165,233,0.3)',
                color:      BLUE,
              }}
            >
              {f2?.photoPlaceholder || '?'}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h3
              className="text-xl font-black leading-tight"
              style={{
                color:     f2?.name?.startsWith('[') ? FAINT : TEXT,
                fontStyle: f2?.name?.startsWith('[') ? 'italic' : 'normal',
              }}
            >
              {f2?.name || '[Partner name — add to translations.json]'}
            </h3>
            <p className="text-sm font-semibold mt-0.5" style={{ color: BLUE }}>
              {f2?.role || 'Automation & Integration Engineer'}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5" style={{ color: FAINT }}>
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-xs">{f2?.location || 'Monterrey, Mexico'}</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}
        >
          <Award className="w-5 h-5 flex-shrink-0" style={{ color: BLUE }} />
          <p className="text-sm font-semibold" style={{ color: MUTED }}>
            {f2?.years || '[Add years of experience — update translations.json]'}
          </p>
        </div>

        {/* Bio */}
        {f2?.bio && (
          <p
            className="text-sm leading-relaxed"
            style={{
              color:     f2.bio.startsWith('[') ? FAINT : MUTED,
              fontStyle: f2.bio.startsWith('[') ? 'italic' : 'normal',
            }}
          >
            {f2.bio}
          </p>
        )}

        {/* Specialisations */}
        {f2?.specializations?.length > 0 && (
          <div>
            <p className="text-xs font-black tracking-widest mb-2.5 uppercase" style={{ color: BLUE }}>
              {fo?.specializationsLabel || 'Specialized in'}
            </p>
            <div className="flex flex-wrap gap-2">
              {f2.specializations.map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: 'rgba(14,165,233,0.08)',
                    border:     '1px solid rgba(14,165,233,0.2)',
                    color:      s.startsWith('[') ? FAINT : BLUE,
                    fontStyle:  s.startsWith('[') ? 'italic' : 'normal',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* LinkedIn */}
        {f2?.linkedin && f2.linkedin !== '#' && (
          <a
            href={f2.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold w-fit transition-opacity duration-200 hover:opacity-70"
            style={{ color: BLUE }}
          >
            <Linkedin className="w-4 h-4" />
            {fo?.linkedinLabel || 'View LinkedIn'}
          </a>
        )}
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION
// ─────────────────────────────────────────────────────────────────────────────
const FounderSection = () => {
  const { t } = useLanguage();
  const fo    = t.founders;
  const cv    = t.curriculum;

  return (
    <section
      id="founders"
      className="py-24"
      style={{ background: '#1e293b' }}
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
              background: 'rgba(16,185,129,0.1)',
              border:     '1px solid rgba(16,185,129,0.25)',
              color:      GREEN,
            }}
          >
            {fo?.badge || 'MEET THE TEAM'}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: TEXT }}>
            {fo?.title || 'The Engineers Behind Preaumate'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: MUTED }}>
            {fo?.subtitle || 'Founded by engineers with hands-on experience in industrial automation, system integration and factory operations across Europe and Latin America.'}
          </p>
        </motion.div>

        {/* Two founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TheoCard cv={cv} fo={fo} />
          <PartnerCard fo={fo} />
        </div>

      </div>
    </section>
  );
};

export default FounderSection;