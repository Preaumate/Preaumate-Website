import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <svg width="40" height="40" viewBox="0 0 120 120">
                  <path
                    d="M60 10 L95 30 L95 70 L60 90 L25 70 L25 30 Z"
                    fill="none"
                    stroke="url(#footerGradient)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="15"
                    fill="url(#footerGradient2)"
                    opacity="0.6"
                  />
                  <defs>
                    <linearGradient
                      id="footerGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <radialGradient id="footerGradient2">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop
                        offset="100%"
                        stopColor="#06b6d4"
                        stopOpacity="0.2"
                      />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Preaumate
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading the future of industrial automation with AI-powered
              solutions and smart factory technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Robotic Automation
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                IoT Integration
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Smart Factory Solutions
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Predictive Analytics
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>contact@preaumate.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <span>
                  123 Innovation Drive
                  <br />
                  Tech Valley, CA 94025
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Preaumate. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-700">·</span>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
