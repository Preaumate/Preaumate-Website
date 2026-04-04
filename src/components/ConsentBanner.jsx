import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const COOKIE_KEY = 'preaumate_cookie_consent';

export const getCookieConsent = () => {
  return localStorage.getItem(COOKIE_KEY);
};

const CookieBanner = ({ onConsentChange }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
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
            
            {/* Text */}
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">
                🍪 We use cookies
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use essential cookies to make our site work. With your consent, 
                we also use analytics cookies to understand how you use our site and 
                improve your experience. Your data is processed in accordance with our{' '}
                <Link 
                  to="/privacy-policy" 
                  className="text-emerald-400 hover:text-emerald-300 underline"
                >
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link 
                  to="/cookie-policy" 
                  className="text-emerald-400 hover:text-emerald-300 underline"
                >
                  Cookie Policy
                </Link>.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-5 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-200 text-sm font-medium"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold transition-all duration-200 text-sm shadow-lg"
              >
                Accept All
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;