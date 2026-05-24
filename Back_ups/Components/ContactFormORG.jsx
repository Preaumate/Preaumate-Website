import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const EMAILJS_SERVICE_ID  = 'service_f7sb4ff';
const EMAILJS_TEMPLATE_ID = 'template_380uvq9';
const EMAILJS_PUBLIC_KEY  = 'wIXxCpnLMdvOcoQPx';

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const f = t.form;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '', email: '', phone: '', serviceInterest: '', message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = f.errors.companyRequired;
    if (!formData.email.trim()) newErrors.email = f.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = f.errors.emailInvalid;
    // if (!formData.phone.trim()) newErrors.phone = f.errors.phoneRequired;
    if (!formData.serviceInterest) newErrors.serviceInterest = f.errors.serviceRequired;
    if (!formData.message.trim()) newErrors.message = f.errors.messageRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({ title: f.errors.validationTitle, description: f.errors.validationDesc, variant: "destructive", duration: 4000 });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        {
          company_name: formData.companyName, email: formData.email,
          phone: formData.phone, service_interest: formData.serviceInterest,
          message: formData.message, timestamp: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );
      toast({ title: f.errors.successTitle, description: f.errors.successDesc, duration: 5000 });
      setFormData({ companyName: '', email: '', phone: '', serviceInterest: '', message: '' });
      setErrors({});
    } catch (error) {
      toast({ title: f.errors.errorTitle, description: f.errors.errorDesc, variant: "destructive", duration: 5000 });
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
    background: '#0f172a',
    border: `1px solid ${errors[fieldName] ? '#ef4444' : 'rgba(16,185,129,0.2)'}`,
    color: '#f0f4ff', borderRadius: '8px', width: '100%',
    padding: '12px 16px', fontSize: '14px', outline: 'none',
  });

  const labelStyle = {
    display: 'block', fontSize: '13px', fontWeight: '500',
    marginBottom: '6px', color: '#94a3b8'
  };

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
          <label style={labelStyle}>{f.companyName} <span style={{ color: '#ef4444' }}>*</span></label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder={f.companyPlaceholder} style={inputStyle('companyName')} />
          {errors.companyName && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.companyName}</p>}
        </div>
        <div>
          <label style={labelStyle}>{f.email} <span style={{ color: '#ef4444' }}>*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={f.emailPlaceholder} style={inputStyle('email')} />
          {errors.email && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>}
        </div>
        <div>
          {/* <label style={labelStyle}>{f.phone} <span style={{ color: '#ef4444' }}>*</span></label> */}
          <label style={labelStyle}>{f.phone} </label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={f.phonePlaceholder} style={inputStyle('phone')} />
          {errors.phone && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</p>}
        </div>
        <div>
          <label style={labelStyle}>{f.serviceInterest} <span style={{ color: '#ef4444' }}>*</span></label>
          <select name="serviceInterest" value={formData.serviceInterest} onChange={handleChange} style={{ ...inputStyle('serviceInterest'), cursor: 'pointer' }}>
            <option value="">{f.servicePlaceholder}</option>
            {f.services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.serviceInterest && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.serviceInterest}</p>}
        </div>
        <div>
          <label style={labelStyle}>{f.message} <span style={{ color: '#ef4444' }}>*</span></label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder={f.messagePlaceholder} style={{ ...inputStyle('message'), resize: 'none' }} />
          {errors.message && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.message}</p>}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white border-0 transition-all duration-300"
          style={{
            background: isSubmitting ? 'rgba(16,185,129,0.5)' : 'linear-gradient(135deg, #10b981, #059669)',
            boxShadow: '0 0 20px rgba(16,185,129,0.3)',
            minHeight: '3.25rem',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
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