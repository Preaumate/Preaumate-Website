import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "@/components/AnimatedLogo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close menu if user scrolls
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

//  const scrollToSection = (sectionId) => {
//    setMenuOpen(false);
//
//    // Small delay to let the menu close animation finish
//    // before attempting to scroll to the section
//    setTimeout(() => {
//      const element = document.getElementById(sectionId);
//      if (element) {
//        const offset = 80;
//        const elementPosition =
//          element.getBoundingClientRect().top + window.pageYOffset;
//        window.scrollTo({
//          top: elementPosition - offset,
//          behavior: "smooth",
//        });
//      }
//    }, 300);
//
//    // Close menu after clicking a link
//    setMenuOpen(false);
//  };

const scrollToSection = (sectionId) => {
  setMenuOpen(false);
  
  // Check if we're already on homepage (/)
  if (window.location.pathname === '/' || window.location.pathname === '') {
    // Same-page scroll (your existing logic)
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 300);
  } else {
    // Navigate to home + section (Router handles smooth if configured)
    navigate(`/#${sectionId}`);
  }
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => navigate('/blog')} 
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => navigate('/qa')}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Q&A
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // X icon when menu is open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
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
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 font-medium text-left py-4 px-2 border-b border-slate-800 active:text-emerald-400 active:bg-slate-800 transition-colors duration-150 w-full"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 font-medium text-left py-4 px-2 border-b border-slate-800 active:text-emerald-400 active:bg-slate-800 transition-colors duration-150 w-full"
                >
                  Services
                </button>
                <button
                  onClick={() => navigate('/blog')}
                  className="text-gray-300 font-medium text-left py-4 px-2 border-b border-slate-800 active:text-emerald-400 active:bg-slate-800 transition-colors duration-150 w-full"
                >
                  Blog
                </button>
                <button
                  onClick={() => navigate('/qa')}
                  className="text-gray-300 font-medium text-left py-4 px-2 border-b border-slate-800 active:text-emerald-400 active:bg-slate-800 transition-colors duration-150 w-full"
                >
                  Q&A
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 active:from-emerald-600 active:to-teal-600 text-white px-6 py-4 rounded-lg font-medium text-left w-full"
                >
                  Contact
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
