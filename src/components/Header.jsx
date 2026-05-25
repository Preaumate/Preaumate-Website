import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "@/components/AnimatedLogo";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { languages } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const navigate = useNavigate();
  const { language, changeLanguage, t } = useLanguage();
  const langRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── SCROLL TO SECTION ───────────────────────────────────────────────────────
  // Consistent behavior:
  // - On homepage (/) → smoothly scrolls to the section
  // - On any other page → navigates to homepage with the section hash
  // This means ALL nav links behave identically regardless of current page.
  // ─────────────────────────────────────────────────────────────────────────────
  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    setLangOpen(false);

    if (window.location.pathname === '/' || window.location.pathname === '') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
      }, 300);
    } else {
      // Navigate to homepage + scroll to section
      navigate(`/#${sectionId}`);
      // Give the page time to load then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
      }, 600);
    }
  };

  const handleLangSelect = (code) => {
    changeLanguage(code);
    setLangOpen(false);
    setMenuOpen(false);
  };

  // Desktop nav items — single source of truth used by both desktop and mobile
  // ── TO RE-ENABLE BLOG / Q&A: uncomment those entries below ─────────────────
  const navItems = [
    { label: t.nav.home,     action: () => scrollToSection('hero') },
    { label: t.nav.about,    action: () => { navigate('/about'); setMenuOpen(false); } },     // ← now scrolls, consistent with Services
    { label: t.nav.services, action: () => scrollToSection('services') },
    // { label: t.nav.blog,  action: () => { navigate('/blog'); setMenuOpen(false); } },   // DISABLED — enable when content exists
    // { label: t.nav.qa,    action: () => { navigate('/qa');   setMenuOpen(false); } },   // DISABLED — enable when content exists
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-slate-900/70 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo — always goes home */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center focus:outline-none"
            aria-label="Go to homepage"
          >
            <AnimatedLogo isCompact={true} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-sm px-3 py-2 rounded-lg hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}

            {/* Language Dropdown */}
            <div className="relative ml-2" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-sm px-3 py-2 rounded-lg border border-slate-700 hover:border-emerald-500/40"
                aria-label="Select language"
              >
                <span>{currentLang.flag}</span>
                <span className="hidden lg:inline">{currentLang.code.toUpperCase()}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-48 rounded-xl shadow-2xl overflow-hidden z-50"
                    style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150 text-left"
                        style={{
                          background: language === lang.code ? 'rgba(16,185,129,0.12)' : 'transparent',
                          color: language === lang.code ? '#10b981' : '#94a3b8',
                        }}
                        onMouseEnter={e => { if (language !== lang.code) e.currentTarget.style.background = 'rgba(16,185,129,0.06)'; }}
                        onMouseLeave={e => { if (language !== lang.code) e.currentTarget.style.background = 'transparent'; }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.label}</span>
                        {language === lang.code && (
                          <span className="ml-auto text-xs font-bold" style={{ color: '#10b981' }}>✓</span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 text-sm"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Mobile — Language picker + Hamburger */}
          <div className="md:hidden flex items-center gap-2">

            {/* Mobile language picker — compact flag only */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-gray-300 text-sm px-2.5 py-1.5 rounded-lg border border-slate-700 hover:border-emerald-500/40 transition-colors"
                aria-label="Select language"
              >
                <span className="text-base">{currentLang.flag}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-48 rounded-xl shadow-2xl overflow-hidden z-50"
                    style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left"
                        style={{
                          background: language === lang.code ? 'rgba(16,185,129,0.12)' : 'transparent',
                          color: language === lang.code ? '#10b981' : '#94a3b8',
                        }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.label}</span>
                        {language === lang.code && (
                          <span className="ml-auto text-xs">✓</span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburger button */}
            <button
              className="text-gray-300 hover:text-emerald-400 transition-colors p-1"
              onClick={() => { setMenuOpen(!menuOpen); setLangOpen(false); }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <motion.div
                animate={menuOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 7 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="block w-6 h-0.5 bg-current origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1, scaleX: 1 },
                    open: { opacity: 0, scaleX: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="block w-6 h-0.5 bg-current"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -7 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="block w-6 h-0.5 bg-current origin-center"
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div
                className="mt-4 pb-2 rounded-xl overflow-hidden"
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(16,185,129,0.15)',
                }}
              >
                {/* Nav items */}
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="w-full text-left px-5 py-4 font-medium transition-all duration-150 active:bg-emerald-500/10 flex items-center justify-between"
                    style={{
                      color: '#e2e8f0',
                      borderBottom: '1px solid rgba(16,185,129,0.08)',
                    }}
                    onTouchStart={e => e.currentTarget.style.background = 'rgba(16,185,129,0.06)'}
                    onTouchEnd={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span>{item.label}</span>
                    <span style={{ color: 'rgba(16,185,129,0.4)' }}>→</span>
                  </button>
                ))}

                {/* Contact CTA — full width, prominent */}
                <div className="p-3">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full py-3.5 rounded-lg font-semibold text-white transition-all duration-300 text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      boxShadow: '0 0 16px rgba(16,185,129,0.25)',
                    }}
                  >
                    {t.nav.contact}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;