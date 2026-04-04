import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
//import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// ↓ Paste your three IDs here
const EMAILJS_SERVICE_ID  = 'service_f7sb4ff';
const EMAILJS_TEMPLATE_ID = 'template_380uvq9';
const EMAILJS_PUBLIC_KEY  = 'wIXxCpnLMdvOcoQPx';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim())
      newErrors.companyName = 'Company name is required';
    if (!formData.email.trim())
      newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.phone.trim())
      newErrors.phone = 'Phone number is required';
    if (!formData.serviceInterest)
      newErrors.serviceInterest = 'Please select a service';
    if (!formData.message.trim())
      newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          company_name:     formData.companyName,
          email:            formData.email,
          phone:            formData.phone,
          service_interest: formData.serviceInterest,
          message:          formData.message,
          timestamp:        new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you! We'll contact you soon to discuss your automation needs.",
        duration: 5000,
      });

      setFormData({
        companyName: '',
        email: '',
        phone: '',
        serviceInterest: '',
        message: ''
      });
      setErrors({});

    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Get in Touch</h2>
      <p className="text-gray-600 text-center mb-8">
        Ready to transform your industrial operations? Let's discuss your automation needs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white text-gray-900 border ${
              errors.companyName ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
            placeholder="Enter your company name"
          />
          {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white text-gray-900 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
            placeholder="your.email@company.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white text-gray-900 border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interest <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white text-gray-900 border ${
              errors.serviceInterest ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
          >
            <option value="">Select a service...</option>
            <option value="Robotic Process Automation">Robotic Process Automation</option>
            <option value="IoT Integration">IoT Integration</option>
            <option value="Smart Factory Solutions">Smart Factory Solutions</option>
            <option value="Predictive Analytics">Predictive Analytics</option>
            <option value="General Consultation">General Consultation</option>
          </select>
          {errors.serviceInterest && <p className="text-red-500 text-sm mt-1">{errors.serviceInterest}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 bg-white text-gray-900 border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none`}
            placeholder="Tell us about your automation needs..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send className="w-5 h-5" />
        </Button>

      </form>
    </motion.div>
  );
};

export default ContactForm;