import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import QAPage from '@/pages/QAPage';


function App() {
  return (
    <LanguageProvider>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/qa" element={<QAPage />} />
      </Routes>
    </Router>
    </LanguageProvider>
  );
}

export default App;