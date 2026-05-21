import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── SOCIAL LINKS ──────────────────────────────────────────────────────────────
// Fill in your real URLs below.
// For LinkedIn: go to your company LinkedIn page and copy the URL.
// For personal profiles: link to the founders' individual LinkedIn pages.
// ─────────────────────────────────────────────────────────────────────────────
const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/company/preaumate';  // ← replace with real URL
const LINKEDIN_FOUNDER_1_URL = 'https://www.linkedin.com/in/yourname';      // ← replace with real URL
const LINKEDIN_FOUNDER_2_URL = 'https://www.linkedin.com/in/partnername';   // ← replace with real URL

// ── BUSINESS DETAILS ─────────────────────────────────────────────────────────
// Fill in your real registration details.
// KvK = Dutch Chamber of Commerce number.
// Remove whichever fields don't apply to your situation.
// ─────────────────────────────────────────────────────────────────────────────
const BUSINESS_DETAILS = {
  name: 'Preaumate Automation',   // ← your registered legal name
  kvk: 'KvK: 00000000',           // ← your Chamber of Commerce number
  vat: 'BTW: NL000000000B01',     // ← your VAT number
  city: 'Netherlands / Mexico',    // ← your location
};

const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth',
      });
    }
  };

  const sectionIds = ['hero', 'about', 'services', 'contact'];

  // ── SOCIAL LINKS ────────────────────────────────────────────────────────────
  // OLD social icons (Globe, Share2, Code) — commented out, replaced with LinkedIn:
  // import { Globe, Share2, Code } from 'lucide-react';
  // const socialLinks = [
  //   { Icon: Globe,  href: '#' },
  //   { Icon: Share2, href: '#' },
  //   { Icon: Code,   href: '#' },
  // ];

  // NEW — LinkedIn only until other social accounts are set up:
  const socialLinks = [
    { Icon: Linkedin, href: LINKEDIN_COMPANY_URL, label: 'LinkedIn' },
  ];
  // ── When you add Twitter/X or other accounts, add them here:
  // { Icon: Twitter, href: 'https://twitter.com/preaumate', label: 'Twitter' },
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <footer
      style={{
        background: '#020818',
        borderTop: '1px solid rgba(16,185,129,0.15)',
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
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                </defs>
                <path
                  d="M60 10 L95 30 L95 70 L60 90 L25 70 L25 30 Z"
                  fill="none"
                  stroke="url(#footerGrad)"
                  strokeWidth="3"
                />
                <circle cx="60" cy="50" r="15" fill="url(#footerGrad)" opacity="0.6" />
              </svg>
              <div>
                <div className="font-black text-lg" style={{ color: '#f0f4ff' }}>
                  Preaumate
                </div>
                <div className="text-xs tracking-widest opacity-50">
                  {f.tagline}
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-4">
              {f.description}
            </p>

            {/* Business registration details */}
            <div className="text-xs leading-relaxed mb-5" style={{ color: '#475569' }}>
              <p>{BUSINESS_DETAILS.name}</p>
              <p>{BUSINESS_DETAILS.kvk}</p>
              <p>{BUSINESS_DETAILS.vat}</p>
              <p>{BUSINESS_DETAILS.city}</p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }, i) => (
                
                <a key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.2)',
                    color: '#10b981',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(16,185,129,0.1)'}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-bold text-sm tracking-widest mb-5"
              style={{ color: '#f0f4ff' }}
            >
              {f.navHeading}
            </h4>
            <ul className="space-y-3 text-sm">
              {f.navLinks.map((label, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(sectionIds[i])}
                    className="transition-colors duration-200 text-left w-full"
                    style={{ color: '#8899bb' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="font-bold text-sm tracking-widest mb-5"
              style={{ color: '#f0f4ff' }}
            >
              {f.resourcesHeading}
            </h4>
            <ul className="space-y-3 text-sm">

              {/* ── BLOG & Q&A LINKS ──────────────────────────────────────────
                  These are commented out until you have content in those sections.
                  To re-enable: uncomment the two items below.
              ─────────────────────────────────────────────────────────────── */}
              {/* DISABLED until blog/qa have content:
              <li>
                <Link
                  to="/blog"
                  style={{ color: '#8899bb' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                >
                  {f.resourceLinks[0]}
                </Link>
              </li>
              <li>
                <Link
                  to="/qa"
                  style={{ color: '#8899bb' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                >
                  {f.resourceLinks[1]}
                </Link>
              </li>
              */}

              {['/privacy-policy', '/terms'].map((to, i) => (
                <li key={i}>
                  <Link
                    to={to}
                    style={{ color: '#8899bb' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                  >
                    {f.resourceLinks[i + 2]}
                  </Link>
                </li>
              ))}

              {/* LinkedIn — always visible */}
              <li>
                
                <a href={LINKEDIN_COMPANY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#8899bb' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-sm tracking-widest mb-5"
              style={{ color: '#f0f4ff' }}
            >
              {f.contactHeading}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                
                <a href="mailto:contact@preaumate.com"
                  style={{ color: '#8899bb' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                >
                  contact@preaumate.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                <span>+31 (0) 000 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                <span>Netherlands & Mexico</span>
              </li>

              {/* LinkedIn profile links */}
              <li className="flex items-start gap-3 pt-1">
                <Linkedin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                <div className="flex flex-col gap-1">
                  
                  <a href={LINKEDIN_FOUNDER_1_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs transition-colors duration-200"
                    style={{ color: '#8899bb' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                  >
                    Founder 1 — LinkedIn {/* ← replace with real name */}
                  </a>
                  
                  <a href={LINKEDIN_FOUNDER_2_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs transition-colors duration-200"
                    style={{ color: '#8899bb' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                  >
                    Founder 2 — LinkedIn {/* ← replace with real name */}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: '1px solid rgba(16,185,129,0.1)' }}
        >
          <p>© {currentYear} {BUSINESS_DETAILS.name} {f.rights}</p>
          <div className="flex items-center gap-6">
          {/* Privacy Policy and Terms links — always visible, even if blog/qa are not yet live 
            <Link
              to="/privacy-policy"
              style={{ color: '#8899bb' }}
              onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
              onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
            >
              {f.privacyPolicy}
            </Link> */}

            <span style={{ color: 'rgba(16,185,129,0.3)' }}>·</span>
            {/* Privacy Policy and Terms links — always visible, even if blog/qa are not yet live
            <Link
              to="/terms"
              style={{ color: '#8899bb' }}
              onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
              onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
            >
              {f.terms}
            </Link> */}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;