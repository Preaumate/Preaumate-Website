import React from 'react';
import { Link } from 'react-router-dom';
//import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';
import { Mail, Phone, MapPin, Globe, Share2, Code } from 'lucide-react';

const Footer = () => {
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

  const socialLinks = [
    { Icon: Globe, href: '#' },
    { Icon: Share2, href: '#' },
    { Icon: Code, href: '#' },
  ];

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const resourceLinks = [
    { label: 'Blog', to: '/blog' },
    { label: 'Q&A', to: '/qa' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms' },
  ];

  return (
    <footer
      style={{
        background: '#020818',
        borderTop: '1px solid rgba(16,185,129,0.15)',
        color: '#8899bb'
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
                  INDUSTRIAL AUTOMATION
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Reimagining industrial automation for the next generation of
              manufacturing. Siemens certified. Industry 4.0 ready.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.2)',
                    color: '#10b981'
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
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map(item => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="transition-colors duration-200 text-left w-full"
                    style={{ color: '#8899bb' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                  >
                    {item.label}
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
              RESOURCES
            </h4>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map(item => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="transition-colors duration-200"
                    style={{ color: '#8899bb' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-sm tracking-widest mb-5"
              style={{ color: '#f0f4ff' }}
            >
              CONTACT
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: '#10b981' }}
                />
                <a
                  href="mailto:contact@preaumate.com"
                  style={{ color: '#8899bb' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
                >
                  contact@preaumate.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: '#10b981' }}
                />
                <span>+31 (0) 000 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: '#10b981' }}
                />
                <span>Netherlands</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: '1px solid rgba(16,185,129,0.1)' }}
        >
          <p>© {currentYear} Preaumate. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              style={{ color: '#8899bb' }}
              onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
              onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(16,185,129,0.3)' }}>·</span>
            <Link
              to="/terms"
              style={{ color: '#8899bb' }}
              onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
              onMouseLeave={e => e.currentTarget.style.color = '#8899bb'}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;