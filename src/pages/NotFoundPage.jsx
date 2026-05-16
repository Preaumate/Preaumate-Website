import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Auto-redirect to home after 10 seconds
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

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/#contact' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col" style={{ background: '#0f172a' }}>
        <Header />

        <main className="flex-1 flex items-center justify-center px-6 py-32">
          <div className="text-center max-w-2xl mx-auto">

            {/* Animated 404 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              {/* Large 404 with glow */}
              <div className="relative inline-block">
                <div
                  className="text-8xl md:text-9xl font-black select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(16,185,129,0.3)',
                    letterSpacing: '-0.05em',
                  }}
                >
                  404
                </div>
                <div
                  className="absolute inset-0 text-8xl md:text-9xl font-black select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(16,185,129,0.1)',
                    filter: 'blur(8px)',
                    letterSpacing: '-0.05em',
                  }}
                >
                  404
                </div>
              </div>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.25)',
                }}
              >
                <Search className="w-8 h-8" style={{ color: '#10b981' }} />
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1
                className="text-3xl md:text-4xl font-black mb-4"
                style={{ color: '#f0f4ff' }}
              >
                Page Not Found
              </h1>
              <p
                className="text-lg mb-2"
                style={{ color: '#94a3b8' }}
              >
                The page you are looking for does not exist or has been moved.
              </p>
              <p
                className="text-sm mb-10"
                style={{ color: '#475569' }}
              >
                Redirecting to home in {countdown} second{countdown !== 1 ? 's' : ''}...
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  boxShadow: '0 0 20px rgba(16,185,129,0.25)',
                }}
              >
                <Home className="w-4 h-4" />
                Go to Home
              </Link>
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  color: '#10b981',
                }}
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p
                className="text-xs font-bold tracking-widest mb-4 uppercase"
                style={{ color: '#475569' }}
              >
                Or visit one of these pages
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {quickLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm px-4 py-2 rounded-lg transition-all duration-200"
                    style={{
                      background: '#1e293b',
                      border: '1px solid rgba(16,185,129,0.12)',
                      color: '#94a3b8',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)';
                      e.currentTarget.style.color = '#10b981';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(16,185,129,0.12)';
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;