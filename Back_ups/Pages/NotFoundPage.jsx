import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found — Preaumate</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Preaumate home." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />

        <main className="flex-grow container mx-auto px-6 py-32 max-w-4xl flex flex-col items-center justify-center text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-black text-gray-200 leading-none">404</h1>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-md">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
            >
              ← Return to Home
            </Link>
            <a
              href="mailto:contact@preaumate.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 transition-colors"
            >
              Contact Support
            </a>
          </div>

          {/* Suggestions */}
          <div className="mt-16 pt-12 border-t border-gray-200 max-w-md">
            <p className="text-sm text-gray-500 mb-6">Perhaps you meant to visit:</p>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-emerald-600 hover:underline font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-emerald-600 hover:underline font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-600 hover:underline font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-emerald-600 hover:underline font-medium">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;
