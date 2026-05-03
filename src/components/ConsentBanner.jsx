import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const COOKIE_KEY = 'preaumate_cookie_consent';

export const getCookieConsent = () => localStorage.getItem(COOKIE_KEY);

const ConsentBanner = ({ onConsentChange }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();
  const c = t.consent;

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
    onConsentChange?.('accepted');
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
    onConsentChange?.('rejected');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 shadow-2xl"
        >
          <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">{c.title}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {c.text}{' '}
                <Link to="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 underline">
                  {c.privacyPolicy}
                </Link>
                {' '}{c.and}{' '}
                <Link to="/cookie-policy" className="text-emerald-400 hover:text-emerald-300 underline">
                  {c.cookiePolicy}
                </Link>.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button onClick={handleReject} className="px-5 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-200 text-sm font-medium">
                {c.reject}
              </button>
              <button onClick={handleAccept} className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold transition-all duration-200 text-sm shadow-lg">
                {c.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsentBanner;