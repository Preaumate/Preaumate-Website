import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import LeadQualifier from '@/components/LeadQualifier';
import ContactForm    from '@/components/ContactForm';
import { useLanguage } from '@/context/LanguageContext';
import { formatQualifierSummary } from '@/data/qualifierQuestions';

const GREEN = '#10b981';
const MUTED = '#94a3b8';

// ─────────────────────────────────────────────────────────────────────────────
// ContactSection
//
// Manages the flow:
//   1. LeadQualifier (multi-step questionnaire)  — shown by default
//   2. ContactForm                                — shown after complete/skip
//
// The qualifier answers are converted into a readable text summary and
// passed to ContactForm, which includes it in the submission to the Worker.
//
// USAGE — replaces the inline <ContactForm /> in HomePage.jsx:
//   <ContactSection />
// ─────────────────────────────────────────────────────────────────────────────
const ContactSection = () => {
  const { t } = useLanguage();
  const q     = t.qualifier;

  // view: 'qualifier' | 'form'
  const [view, setView]               = useState('qualifier');
  const [qualifierSummary, setSummary] = useState('');
  const [cameFromQualifier, setCameFromQualifier] = useState(false);

  const handleComplete = (answers) => {
    const summary = formatQualifierSummary(answers, t);
    setSummary(summary);
    setCameFromQualifier(true);
    setView('form');
  };

  const handleSkip = () => {
    setSummary('');
    setCameFromQualifier(false);
    setView('form');
  };

  const handleBack = () => {
    setView('qualifier');
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {view === 'qualifier' ? (
          <motion.div
            key="qualifier"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LeadQualifier onComplete={handleComplete} onSkip={handleSkip} />
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Back link — only shown if they came from the qualifier,
                so they can review/change their answers. */}
            {cameFromQualifier && (
              <div className="max-w-2xl mx-auto mb-3">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-xs font-semibold transition-opacity duration-200 hover:opacity-70"
                  style={{ color: MUTED }}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {q?.editAnswersButton || 'Edit my answers'}
                </button>
              </div>
            )}

            {/* Confirmation banner — tells the visitor their context was captured */}
            {cameFromQualifier && (
              <div
                className="max-w-2xl mx-auto mb-4 px-4 py-3 rounded-xl text-sm flex items-start gap-2.5"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: GREEN }}
              >
                <span className="text-base flex-shrink-0">✓</span>
                <span>{q?.contextCapturedNote || "Thanks — we've noted your answers. They'll be included with your message."}</span>
              </div>
            )}

            <ContactForm qualifierSummary={qualifierSummary} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactSection;