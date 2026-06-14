import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, ShieldCheck } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';
const WORKER_URL         = import.meta.env.VITE_WORKER_URL         || 'http://localhost:8787';

// ─────────────────────────────────────────────────────────────────────────────
// ContactForm
//
// NEW PROP: qualifierSummary (string, optional)
//   A human-readable text block produced by the LeadQualifier wizard,
//   summarising the visitor's answers (business size, platforms used,
//   challenges, etc). If present, it is sent to the Worker as
//   "projectContext" and included in the email.
//
//   If the visitor skipped the questionnaire, this is an empty string
//   and the field is simply omitted from the submission — everything
//   else works exactly as before.
// ─────────────────────────────────────────────────────────────────────────────
const ContactForm = ({ qualifierSummary = '' }) => {
  const { toast }      = useToast();
  const { t }          = useLanguage();
  const f              = t.form;
  const turnstileRef   = useRef(null);

  const [isSubmitting, setIsSubmitting]     = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [formData, setFormData]             = useState({
    companyName: '', email: '', phone: '', serviceInterest: '', message: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const e = {};
    if (!formData.companyName.trim())  e.companyName     = f.errors.companyRequired;
    if (!formData.email.trim())        e.email           = f.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                       e.email           = f.errors.emailInvalid;
    if (!formData.serviceInterest)     e.serviceInterest = f.errors.serviceRequired;
    if (!formData.message.trim())      e.message         = f.errors.messageRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title:       f.errors.validationTitle,
        description: f.errors.validationDesc,
        variant:     'destructive',
        duration:    4000,
      });
      return;
    }

    if (!turnstileToken) {
      toast({
        title:       'Verification required',
        description: 'Please wait for the security check to complete.',
        variant:     'destructive',
        duration:    4000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WORKER_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          turnstileToken,
          companyName:     formData.companyName,
          email:           formData.email,
          phone:           formData.phone,
          serviceInterest: formData.serviceInterest,
          message:         formData.message,
          // ── NEW: pre-contact questionnaire summary ──────────────────────
          // Empty string if the visitor skipped — the Worker treats an
          // empty/missing projectContext as "not provided".
          projectContext:  qualifierSummary,
          timestamp:       new Date().toLocaleString(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title:       f.errors.successTitle,
          description: f.errors.successDesc,
          duration:    5000,
        });
        setFormData({ companyName: '', email: '', phone: '', serviceInterest: '', message: '' });
        setErrors({});
        setTurnstileToken(null);
        turnstileRef.current?.reset();
      } else {
        throw new Error(data.error || 'Submission failed');
      }

    } catch (err) {
      console.error('Form submission error:', err);
      toast({
        title:       f.errors.errorTitle,
        description: f.errors.errorDesc,
        variant:     'destructive',
        duration:    5000,
      });
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const inputStyle = (fieldName) => ({
    background:   '#0f172a',
    border:       `1px solid ${errors[fieldName] ? '#ef4444' : 'rgba(16,185,129,0.2)'}`,
    color:        '#f0f4ff',
    borderRadius: '8px',
    width:        '100%',
    padding:      '12px 16px',
    fontSize:     '14px',
    outline:      'none',
  });

  const labelStyle = {
    display:      'block',
    fontSize:     '13px',
    fontWeight:   '500',
    marginBottom: '6px',
    color:        '#94a3b8',
  };

  const submitDisabled = isSubmitting || !turnstileToken;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto rounded-2xl p-8"
      style={{ background: '#1e293b', border: '1px solid rgba(16,185,129,0.2)' }}
    >
      <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: '#f0f4ff' }}>
        {f.title}
      </h2>
      <p className="text-center mb-8" style={{ color: '#64748b' }}>
        {f.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label style={labelStyle}>
            {f.companyName} <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="text" name="companyName"
            value={formData.companyName} onChange={handleChange}
            placeholder={f.companyPlaceholder} style={inputStyle('companyName')}
          />
          {errors.companyName && (
            <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.companyName}</p>
          )}
        </div>

        <div>
          <label style={labelStyle}>
            {f.email} <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="email" name="email"
            value={formData.email} onChange={handleChange}
            placeholder={f.emailPlaceholder} style={inputStyle('email')}
          />
          {errors.email && (
            <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>
          )}
        </div>

        <div>
          <label style={labelStyle}>{f.phone}</label>
          <input
            type="tel" name="phone"
            value={formData.phone} onChange={handleChange}
            placeholder={f.phonePlaceholder} style={inputStyle('phone')}
          />
        </div>

        <div>
          <label style={labelStyle}>
            {f.serviceInterest} <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <select
            name="serviceInterest"
            value={formData.serviceInterest} onChange={handleChange}
            style={{ ...inputStyle('serviceInterest'), cursor: 'pointer' }}
          >
            <option value="">{f.servicePlaceholder}</option>
            {f.services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.serviceInterest && (
            <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.serviceInterest}</p>
          )}
        </div>

        <div>
          <label style={labelStyle}>
            {f.message} <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <textarea
            name="message" rows={5}
            value={formData.message} onChange={handleChange}
            placeholder={f.messagePlaceholder}
            style={{ ...inputStyle('message'), resize: 'none' }}
          />
          {errors.message && (
            <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.message}</p>
          )}
        </div>

        {/* ── NEW: show a small preview of the captured context ──────────── */}
        {qualifierSummary && (
          <details
            className="rounded-lg px-4 py-3 text-xs"
            style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.15)', color: '#64748b' }}
          >
            <summary className="cursor-pointer font-semibold" style={{ color: '#10b981' }}>
              {f.qualifierPreviewLabel || 'Your questionnaire answers (included with this message)'}
            </summary>
            <pre className="whitespace-pre-wrap mt-2 leading-relaxed">{qualifierSummary}</pre>
          </details>
        )}

        {/* Cloudflare Turnstile */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            options={{ theme: 'dark', size: 'normal' }}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={()   => setTurnstileToken(null)}
            onExpire={()  => setTurnstileToken(null)}
          />
          {turnstileToken && (
            <div className="flex items-center gap-1.5" style={{ color: '#10b981' }}>
              <ShieldCheck className="w-4 h-4" />
              <span style={{ fontSize: '12px', fontWeight: '500' }}>Verified</span>
            </div>
          )}
        </div>

        <Button
          type="submit"
          disabled={submitDisabled}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white border-0 transition-all duration-300"
          style={{
            background:  submitDisabled
              ? 'rgba(16,185,129,0.3)'
              : 'linear-gradient(135deg, #10b981, #059669)',
            boxShadow:   submitDisabled ? 'none' : '0 0 20px rgba(16,185,129,0.3)',
            minHeight:   '3.25rem',
            cursor:      submitDisabled ? 'not-allowed' : 'pointer',
          }}
        >
          {isSubmitting ? f.sending : f.send}
          <Send className="w-5 h-5" />
        </Button>

      </form>
    </motion.div>
  );
};

export default ContactForm;