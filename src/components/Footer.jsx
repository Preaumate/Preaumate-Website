import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  const sectionIds = ['hero', 'about', 'services', 'contact'];
  const socialLinks = [
    { Icon: Globe, href: '#' },
    { Icon: Share2, href: '#' },
    { Icon: Code, href: '#' },
  ];

  return (
    <footer style={{ background: '#020818', borderTop: '1px solid rgba(16,185,129,0.15)', color: '#8899bb' }}>
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                </defs>
                <path d="M60 10 L95 30 L95 70 L60 90 L25 70 L25 30 Z" fill="none" stroke="url(#footerGrad)" strokeWidth="3" />
                <circle cx="60" cy="50" r="15" fill="url(#footerGrad)" opacity="0.6" />
              </svg>
              <div>
                <div className="font-black text-lg" style={{ color: '#f0f4ff' }}>Preaumate</div>
                <div className="text-xs tracking-widest opacity-50">{f.tagline}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">{f.description}</p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' }}
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
            <h4 className="font-bold text-sm tracking-widest mb-5" style={{ color: '#f0f4ff' }}>{f.navHeading}</h4>
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
            <h4 className="font-bold text-sm tracking-widest mb-5" style={{ color: '#f0f4ff' }}>{f.resourcesHeading}</h4>
            <ul className="space-y-3 text-sm">
              {['/blog', '/qa', '/privacy-policy', '/terms'].map((to, i) => (
                <li key={i}>
                  <Link to={to} style={{ color: '#8899bb' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                  >
                    {f.resourceLinks[i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm tracking-widest mb-5" style={{ color: '#f0f4ff' }}>{f.contactHeading}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                <a href="mailto:contact@preaumate.com" style={{ color: '#8899bb' }}
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
                <span>Netherlands</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: '1px solid rgba(16,185,129,0.1)' }}
        >
          <p>© {currentYear} Preaumate. {f.rights}</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" style={{ color: '#8899bb' }}
              onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
              onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
            >
              {f.privacyPolicy}
            </Link>
            <span style={{ color: 'rgba(16,185,129,0.3)' }}>·</span>
            <Link to="/terms" style={{ color: '#8899bb' }}
              onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
              onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
            >
              {f.terms}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;