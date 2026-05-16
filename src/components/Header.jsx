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
  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
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
      navigate(`/#${sectionId}`);
    }
  };

  const handleLangSelect = (code) => {
    changeLanguage(code);
    setLangOpen(false);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-slate-900/60 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <AnimatedLogo isCompact={true} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-sm"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-sm"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-sm"
            >
              {t.nav.services}
            </button>

            {/* ── BLOG & Q&A NAV LINKS ─────────────────────────────────────
                Disabled until there is content in these sections.
                To re-enable: uncomment the two buttons below.
            ─────────────────────────────────────────────────────────────── */}
            {/* DISABLED — no content yet:
            <button
              onClick={() => navigate('/blog')}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-sm"
            >
              {t.nav.blog}
            </button>
            <button
              onClick={() => navigate('/qa')}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-sm"
            >
              {t.nav.qa}
            </button>
            */}

            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-sm px-2 py-1 rounded-lg border border-slate-700 hover:border-emerald-500/40"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 rounded-xl shadow-2xl overflow-hidden z-50"
                    style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150 text-left"
                        style={{
                          background: language === lang.code ? 'rgba(16,185,129,0.12)' : 'transparent',
                          color: language === lang.code ? '#10b981' : '#94a3b8',
                        }}
                        onMouseEnter={e => { if (language !== lang.code) e.currentTarget.style.background = 'rgba(16,185,129,0.06)'; }}
                        onMouseLeave={e => { if (language !== lang.code) e.currentTarget.style.background = 'transparent'; }}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span className="font-medium">{lang.label}</span>
                        {language === lang.code && <span className="ml-auto text-xs">✓</span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Mobile — Language + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-gray-300 text-sm px-2 py-1 rounded-lg border border-slate-700"
              >
                <span>{currentLang.flag}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 rounded-xl shadow-2xl overflow-hidden z-50"
                    style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left"
                        style={{
                          background: language === lang.code ? 'rgba(16,185,129,0.12)' : 'transparent',
                          color: language === lang.code ? '#10b981' : '#94a3b8',
                        }}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                        {language === lang.code && <span className="ml-auto text-xs">✓</span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col pt-4 pb-2 border-t border-slate-700 mt-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-300 font-medium text-left py-4 px-2 border-b border-slate-800 active:text-emerald-400 active:bg-slate-800 transition-colors duration-150 w-full"
                >
                  {t.nav.home}
                </button>
                <button
                  onClick={() => { navigate('/about'); setMenuOpen(false); }}
                  className="text-gray-300 font-medium text-left py-4 px-2 border-b border-slate-800 active:text-emerald-400 active:bg-slate-800 transition-colors duration-150 w-full"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 font-medium text-left py-4 px-2 border-b border-slate-800 active:text-emerald-400 active:bg-slate-800 transition-colors duration-150 w-full"
                >
                  {t.nav.services}
                </button>

                {/* ── BLOG & Q&A MOBILE LINKS ──────────────────────────────────
                    Disabled until there is content. Uncomment to re-enable.
                ─────────────────────────────────────────────────────────────── */}
                {/* DISABLED — no content yet:
                <button
                  onClick={() => { navigate('/blog'); setMenuOpen(false); }}
                  className="text-gray-300 font-medium text-left py-4 px-2 border-b border-slate-800 active:text-emerald-400 active:bg-slate-800 transition-colors duration-150 w-full"
                >
                  {t.nav.blog}
                </button>
                <button
                  onClick={() => { navigate('/qa'); setMenuOpen(false); }}
                  className="text-gray-300 font-medium text-left py-4 px-2 border-b border-slate-800 active:text-emerald-400 active:bg-slate-800 transition-colors duration-150 w-full"
                >
                  {t.nav.qa}
                </button>
                */}

                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 active:from-emerald-600 active:to-teal-600 text-white px-6 py-4 rounded-lg font-medium text-left w-full"
                >
                  {t.nav.contact}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;