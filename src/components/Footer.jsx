import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LINKEDIN_COMPANY_URL  = 'https://www.linkedin.com/company/preaumate';
const LINKEDIN_FOUNDER_1_URL = 'https://linkedin.com/in/ronaldtjrietveld';
const LINKEDIN_FOUNDER_2_URL = 'https://www.linkedin.com/in/partnername';  // ← update

const BUSINESS_DETAILS = {
  name: 'Preaumate Automation',
  kvk:  'KvK: 99706679',         // ← fill in
  vat:  'BTW: NL005406796B26',   // ← fill in
  city: 'Netherlands / Mexico',
};

// Two distinct colours — neither matches DARK (#020818) or LIGHT (#1e293b)
const FOOTER_BG     = '#040c16';  // deeper navy — clearly separate from the contact section above
const FOOTER_BOTTOM = '#020810';  // deepest strip for the copyright bar

const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  const hover = {
    onMouseEnter: (e) => (e.currentTarget.style.color = '#10b981'),
    onMouseLeave: (e) => (e.currentTarget.style.color = '#8899bb'),
  };

  return (
    <>
      <footer
        style={{
          background: FOOTER_BG,
          // 1px emerald border — the precise visual landing point between
          // the contact section (DARK #020818) and the footer (#040c16).
          // The colour difference separates the regions; the border gives
          // the eye an exact cut line.
          borderTop: '1px solid rgba(16,185,129,0.28)',
          color: '#8899bb',
        }}
      >
        <div className="container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <svg width="36" height="36" viewBox="0 0 120 120">
                  <defs>
                    <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"   stopColor="#10b981" />
                      <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                  </defs>
                  <path d="M60 10 L95 30 L95 70 L60 90 L25 70 L25 30 Z"
                    fill="none" stroke="url(#footerGrad)" strokeWidth="3" />
                  <circle cx="60" cy="50" r="15" fill="url(#footerGrad)" opacity="0.6" />
                </svg>
                <div>
                  <div className="font-black text-lg" style={{ color: '#f0f4ff' }}>Preaumate</div>
                  <div className="text-xs tracking-widest opacity-50">{f.tagline}</div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4">{f.description}</p>

              <div className="text-xs leading-relaxed mb-5" style={{ color: '#475569' }}>
                <p>{BUSINESS_DETAILS.name}</p>
                <p>{BUSINESS_DETAILS.kvk}</p>
                <p>{BUSINESS_DETAILS.vat}</p>
                <p>{BUSINESS_DETAILS.city}</p>
              </div>

              <div className="flex gap-3">
                <a href={LINKEDIN_COMPANY_URL} target="_blank" rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(16,185,129,0.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(16,185,129,0.1)')}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-sm tracking-widest mb-5" style={{ color: '#f0f4ff' }}>
                {f.navHeading}
              </h4>
              <ul className="space-y-3 text-sm">
                {['hero', 'about', 'services', 'contact'].map((id, i) => (
                  <li key={id}>
                    <button onClick={() => scrollToSection(id)}
                      className="transition-colors duration-200 text-left w-full"
                      style={{ color: '#8899bb', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      {...hover}>
                      {f.navLinks?.[i]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-sm tracking-widest mb-5" style={{ color: '#f0f4ff' }}>
                {f.resourcesHeading}
              </h4>
              <ul className="space-y-3 text-sm">
                {['/privacy-policy', '/terms'].map((to, i) => (
                  <li key={to}>
                    <Link to={to} style={{ color: '#8899bb' }} {...hover}>
                      {f.resourceLinks?.[i + 2]}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href={LINKEDIN_COMPANY_URL} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#8899bb' }} {...hover}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <Link to="profile/tjrietveld#summary" style={{ color: '#8899bb' }} {...hover}>
                    CV / Curriculum
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm tracking-widest mb-5" style={{ color: '#f0f4ff' }}>
                {f.contactHeading}
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                  <a href="mailto:contact@preaumate.nl" style={{ color: '#8899bb' }} {...hover}>
                    contact@preaumate.com
                  </a>
                </li>
              {/*
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                  <a href="tel:+31652729769" style={{ color: '#8899bb' }} {...hover}>
                    +31 6 5272 9769
                  </a>
                </li> */}
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                  <span>Netherlands &amp; Mexico</span>
                </li>
                {/*
                <li className="flex items-start gap-3 pt-1">
                  <Linkedin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                  <div className="flex flex-col gap-1">
                    <a href={LINKEDIN_FOUNDER_1_URL} target="_blank" rel="noopener noreferrer"
                      className="text-xs" style={{ color: '#8899bb' }} {...hover}>
                      Theo Rietveld — LinkedIn
                    </a>
                    <a href={LINKEDIN_FOUNDER_2_URL} target="_blank" rel="noopener noreferrer"
                      className="text-xs" style={{ color: '#8899bb' }} {...hover}>
                      Partner — LinkedIn
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>

          </div>

          {/* Internal divider + legal row */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
            style={{ borderTop: '1px solid rgba(16,185,129,0.1)' }}>
            <p>© {currentYear} {BUSINESS_DETAILS.name} {f.rights}</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" style={{ color: '#8899bb' }} {...hover}>{f.privacyPolicy}</Link>
              <span style={{ color: 'rgba(16,185,129,0.3)' }}>·</span>
              <Link to="/terms" style={{ color: '#8899bb' }} {...hover}>{f.terms}</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* Copyright bar — the visual "end of page" signal.
          Slightly deeper than the footer body so the eye has
          a clear, unambiguous termination point.               */}
      <div
        className="py-3 text-center text-xs"
        style={{
          background: FOOTER_BOTTOM,
          color: '#475569',
          borderTop: '1px solid rgba(255,255,255,0.03)',
        }}
      >
        Preaumate · Industrial Automation Engineering · Netherlands &amp; Mexico
      </div>
    </>
  );
};

export default Footer;