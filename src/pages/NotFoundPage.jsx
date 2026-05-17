import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

// ── Simple 404 without Header/Footer to avoid context dependency issues ────────
// The Header requires LanguageContext and Router — both available since
// NotFoundPage is inside App.jsx's Router, but keeping this simple
// avoids any edge case where someone hits a 404 before context loads.
// ─────────────────────────────────────────────────────────────────────────────

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: '#0f172a' }}
    >
      {/* Logo at top */}
      <Link to="/" className="mb-12">
        <svg width="48" height="48" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="g404" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>
          <path
            d="M60 8 L98 30 L98 74 L60 96 L22 74 L22 30 Z"
            fill="none" stroke="url(#g404)" strokeWidth="4"
          />
          <circle cx="60" cy="52" r="16" fill="url(#g404)" opacity="0.7" />
          <circle cx="60" cy="52" r="7" fill="url(#g404)" />
        </svg>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* 404 number */}
        <div
          className="text-8xl md:text-9xl font-black mb-6 select-none"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px rgba(16,185,129,0.3)',
          }}
        >
          404
        </div>

        <h1
          className="text-3xl font-black mb-3"
          style={{ color: '#f0f4ff' }}
        >
          Page Not Found
        </h1>

        <p
          className="text-base mb-2"
          style={{ color: '#94a3b8' }}
        >
          The page you are looking for does not exist or has been moved.
        </p>

        <p
          className="text-sm mb-10"
          style={{ color: '#475569' }}
        >
          Redirecting to home in {countdown}s...
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white text-sm w-full sm:w-auto justify-center"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
          >
            <Home className="w-4 h-4" />
            Go to Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm w-full sm:w-auto justify-center transition-colors"
            style={{
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#10b981',
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { label: 'About', to: '/about' },
            { label: 'Privacy Policy', to: '/privacy-policy' },
            { label: 'Terms', to: '/terms' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm px-4 py-2 rounded-lg transition-colors"
              style={{
                background: '#1e293b',
                border: '1px solid rgba(16,185,129,0.12)',
                color: '#64748b',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;