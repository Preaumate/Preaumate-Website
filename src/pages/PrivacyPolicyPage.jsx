import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
  const lastUpdated = 'April 2026';

  return (
    <>
      <Helmet>
        <title>Privacy Policy — Preaumate</title>
        <meta name="description" content="Privacy Policy for Preaumate — how we collect, use and protect your data." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="container mx-auto px-6 py-32 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last updated: {lastUpdated}</p>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
              <p>
                Preaumate ("we", "us", "our") is an industrial automation company. 
                Our website is <strong>www.preaumate.com</strong>. We are the data 
                controller for personal data collected through this website. For any 
                privacy-related questions, contact us at{' '}
                <a href="mailto:contact@preaumate.com" className="text-emerald-600 hover:underline">
                  contact@preaumate.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. What Data We Collect</h2>
              <p className="mb-3">We collect the following personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact form data:</strong> company name, email address, phone number, service interest, and message content — when you voluntarily submit our contact form.</li>
                <li><strong>Analytics data:</strong> pages visited, time on site, browser type, device type, and approximate location (country/city level) — only if you have accepted analytics cookies.</li>
                <li><strong>Technical data:</strong> IP address, browser type, and operating system — collected automatically for security and functionality purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact form submissions</strong> are used solely to respond to your enquiry. We do not add you to any marketing list without your explicit consent.</li>
                <li><strong>Analytics data</strong> is used to understand how visitors use our site so we can improve it. This is only processed with your consent.</li>
                <li><strong>Technical data</strong> is used to ensure the security and correct functioning of our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Legitimate interest</strong> — responding to contact form enquiries.</li>
                <li><strong>Consent</strong> — analytics cookies and associated data processing. You can withdraw consent at any time.</li>
                <li><strong>Legal obligation</strong> — where we are required to retain data by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Third Parties We Share Data With</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>EmailJS</strong> — processes contact form submissions to deliver them to our inbox. See their privacy policy at emailjs.com.</li>
                <li><strong>Google Analytics</strong> — if you accept analytics cookies, anonymised usage data is sent to Google. See Google's privacy policy at policies.google.com. We have IP anonymisation enabled.</li>
              </ul>
              <p className="mt-3">We do not sell your data to any third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. How Long We Keep Your Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact form data</strong> — retained in our email inbox for up to 2 years, then deleted.</li>
                <li><strong>Analytics data</strong> — retained for 14 months in Google Analytics, then automatically deleted.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Your Rights Under GDPR</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access</strong> the personal data we hold about you</li>
                <li><strong>Rectify</strong> inaccurate data</li>
                <li><strong>Erase</strong> your data ("right to be forgotten")</li>
                <li><strong>Restrict</strong> how we process your data</li>
                <li><strong>Object</strong> to processing based on legitimate interest</li>
                <li><strong>Withdraw consent</strong> at any time for consent-based processing</li>
                <li><strong>Lodge a complaint</strong> with your national data protection authority</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:contact@preaumate.com" className="text-emerald-600 hover:underline">
                  contact@preaumate.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Cookies</h2>
              <p>
                For full details on the cookies we use, please see our{' '}
                <Link to="/cookie-policy" className="text-emerald-600 hover:underline">
                  Cookie Policy
                </Link>. You can manage your cookie preferences at any time using the 
                banner at the bottom of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. We will notify you of 
                significant changes by updating the date at the top of this page.
              </p>
            </section>

          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;