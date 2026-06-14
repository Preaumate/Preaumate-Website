import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, X, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { qualifierQuestions } from '@/data/qualifierQuestions';

// ─────────────────────────────────────────────────────────────────────────────
// Colour tokens — matches site brand
// ─────────────────────────────────────────────────────────────────────────────
const CARD   = '#0f172a';
const GREEN  = '#10b981';
const TEXT   = '#f0f4ff';
const MUTED  = '#94a3b8';
const FAINT  = '#64748b';
const BORDER = 'rgba(16,185,129,0.2)';

// ─────────────────────────────────────────────────────────────────────────────
// LeadQualifier
//
// A short multi-step questionnaire shown BEFORE the contact form.
// Helps narrow down what the visitor needs before they start typing.
//
// PROPS
//   onComplete(answers)  → called when the visitor finishes all questions
//   onSkip()             → called when the visitor skips the whole thing
//
// The "Skip" option is always visible — top right, every step — because
// some visitors just want to send a message and that must remain easy.
// ─────────────────────────────────────────────────────────────────────────────
const LeadQualifier = ({ onComplete, onSkip }) => {
  const { t } = useLanguage();
  const q     = t.qualifier;

  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  if (!q) {
    // Guard: i18n not yet added — skip straight to contact form
    // so the site never breaks while translations are pending.
    onSkip();
    return null;
  }

  const total      = qualifierQuestions.length;
  const current    = qualifierQuestions[step];
  const isLastStep = step === total - 1;

  const setAnswer = (value) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const goNext = () => {
    if (isLastStep) {
      onComplete(answers);
    } else {
      setDirection(1);
      setStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (step === 0) return;
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const toggleMultiselect = (value) => {
    const existing = answers[current.id] || [];
    const updated  = existing.includes(value)
      ? existing.filter((v) => v !== value)
      : [...existing, value];
    setAnswer(updated);
  };

  // ── Render one question based on its type ────────────────────────────────
  const renderQuestion = () => {
    const value = answers[current.id];

    switch (current.type) {

      case 'slider': {
        const sliderValue = value ?? 5;
        return (
          <div>
            <input
              type="range"
              min={current.min}
              max={current.max}
              step={current.step}
              value={sliderValue}
              onChange={(e) => setAnswer(Number(e.target.value))}
              className="w-full"
              style={{
                accentColor: GREEN,
                height: '6px',
              }}
            />
            <div className="flex justify-between mt-2 text-xs" style={{ color: FAINT }}>
              <span>{q[current.scaleLabelKeys[0]]}</span>
              <span>{q[current.scaleLabelKeys[3]]}</span>
            </div>
            <div className="text-center mt-4">
              <span
                className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-black"
                style={{ background: 'rgba(16,185,129,0.1)', border: `2px solid ${BORDER}`, color: GREEN }}
              >
                {sliderValue}
              </span>
              <p className="text-sm mt-3" style={{ color: MUTED }}>
                {sliderValue === 0 && q[current.scaleLabelKeys[0]]}
                {sliderValue > 0 && sliderValue <= 4 && q[current.scaleLabelKeys[1]]}
                {sliderValue > 4 && sliderValue <= 9 && q[current.scaleLabelKeys[2]]}
                {sliderValue === 10 && q[current.scaleLabelKeys[3]]}
              </p>
            </div>
          </div>
        );
      }

      case 'choice':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {current.options.map((opt) => {
              const isSelected = value === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setAnswer(opt.value)}
                  className="text-left text-sm font-medium px-4 py-3.5 rounded-xl transition-all duration-200"
                  style={{
                    background: isSelected ? 'rgba(16,185,129,0.12)' : CARD,
                    border:     `1px solid ${isSelected ? GREEN : BORDER}`,
                    color:      isSelected ? GREEN : MUTED,
                  }}
                >
                  {q[opt.labelKey]}
                </button>
              );
            })}
          </div>
        );

      case 'multiselect':
        return (
          <div className="flex flex-wrap gap-2.5">
            {current.options.map((opt) => {
              const selected = (value || []).includes(opt.value);
              const label = opt.label || q[opt.labelKey];
              return (
                <button
                  key={opt.value}
                  onClick={() => toggleMultiselect(opt.value)}
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-200"
                  style={{
                    background: selected ? 'rgba(16,185,129,0.12)' : CARD,
                    border:     `1px solid ${selected ? GREEN : BORDER}`,
                    color:      selected ? GREEN : MUTED,
                  }}
                >
                  {selected && <Check className="w-3.5 h-3.5" />}
                  {label}
                </button>
              );
            })}
          </div>
        );

      case 'text':
        return (
          <textarea
            rows={4}
            value={value || ''}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder={q[current.placeholderKey]}
            className="w-full rounded-xl px-4 py-3 text-sm resize-none"
            style={{
              background: CARD,
              border:     `1px solid ${BORDER}`,
              color:      TEXT,
              outline:    'none',
            }}
          />
        );

      default:
        return null;
    }
  };

  // Slide animation variants — question slides in from the direction of travel
  const variants = {
    enter:  (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto rounded-2xl p-8"
      style={{ background: '#1e293b', border: `1px solid ${BORDER}` }}
    >
      {/* Header row — progress + skip */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {/* Progress dots */}
          {qualifierQuestions.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width:  i === step ? '20px' : '6px',
                height: '6px',
                background: i <= step ? GREEN : 'rgba(148,163,184,0.25)',
              }}
            />
          ))}
        </div>

        {/* Skip — always visible, every step */}
        <button
          onClick={onSkip}
          className="flex items-center gap-1.5 text-xs font-semibold transition-opacity duration-200 hover:opacity-70"
          style={{ color: FAINT }}
        >
          {q.skipButton}
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Step counter */}
      <p className="text-xs font-bold tracking-widest mb-2" style={{ color: GREEN }}>
        {q.stepLabel?.replace('{current}', step + 1).replace('{total}', total)}
      </p>

      {/* Question */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25 }}
        >
          <h3 className="text-xl font-black mb-2 leading-snug" style={{ color: TEXT }}>
            {q[current.labelKey]}
          </h3>
          {current.descriptionKey && q[current.descriptionKey] && (
            <p className="text-sm mb-5" style={{ color: MUTED }}>
              {q[current.descriptionKey]}
            </p>
          )}
          {!current.descriptionKey && <div className="mb-5" />}

          {renderQuestion()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: '1px solid rgba(16,185,129,0.1)' }}>
        <button
          onClick={goBack}
          disabled={step === 0}
          className="flex items-center gap-2 text-sm font-semibold transition-opacity duration-200"
          style={{ color: MUTED, opacity: step === 0 ? 0.3 : 1, cursor: step === 0 ? 'default' : 'pointer' }}
        >
          <ArrowLeft className="w-4 h-4" />
          {q.backButton}
        </button>

        <button
          onClick={goNext}
          className="flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${GREEN}, #059669)`,
            color:      '#020818',
            boxShadow:  '0 0 20px rgba(16,185,129,0.25)',
          }}
        >
          {isLastStep ? q.finishButton : q.nextButton}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Reassurance note — placed below, low visual weight */}
      <p className="text-center text-xs mt-5" style={{ color: FAINT }}>
        {q.skipNote}
      </p>
    </motion.div>
  );
};

export default LeadQualifier;