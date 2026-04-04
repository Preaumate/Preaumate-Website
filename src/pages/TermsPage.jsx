import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsPage = () => {
  const lastUpdated = 'April 2026';

  return (
    <>
      <Helmet>
        <title>Terms & Conditions — Preaumate</title>
        <meta name="description" content="Terms and Conditions for using the Preaumate website." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="container mx-auto px-6 py-32 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-500 mb-10">Last updated: {lastUpdated}</p>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website (www.preaumate.com), you accept 
                and agree to be bound by these Terms & Conditions. If you do not agree, 
                please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. About Us</h2>
              <p>
                Preaumate is an industrial automation company providing AI-powered 
                automation solutions, IoT integration, smart factory solutions, and 
                predictive analytics services. Contact us at{' '}
                <a href="mailto:contact@preaumate.com" className="text-emerald-600 hover:underline">
                  contact@preaumate.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Use of This Website</h2>
              <p className="mb-3">You agree to use this website only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the site in any way that violates applicable local, national, or international laws or regulations</li>
                <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
                <li>Attempt to gain unauthorised access to any part of the website or its servers</li>
                <li>Introduce viruses, trojans, or other harmful material</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and software — 
                is the property of Preaumate and is protected by applicable intellectual property 
                laws. You may not reproduce, distribute, or create derivative works without our 
                express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Contact Form & Enquiries</h2>
              <p>
                Submitting our contact form does not constitute a binding contract or 
                guarantee of services. We will endeavour to respond to all enquiries 
                within 2 business days. Submitting an enquiry does not obligate either 
                party to enter into a commercial agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Disclaimer of Warranties</h2>
              <p>
                This website is provided "as is" without any representations or warranties. 
                We make no warranties regarding the accuracy, completeness, or suitability 
                of the information on this website. The content is subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Preaumate shall not be liable for 
                any indirect, incidental, or consequential damages arising from your use of 
                this website or reliance on any information provided herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">8. External Links</h2>
              <p>
                This website may contain links to third-party websites. These links are 
                provided for your convenience only. We have no control over the content 
                of those sites and accept no responsibility for them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of 
                the European Union and the member state in which Preaumate is registered. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts 
                of that member state.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Changes to These Terms</h2>
              <p>
                We reserve the right to update these terms at any time. Changes will be 
                posted on this page with an updated date. Continued use of the website 
                after changes constitutes acceptance of the new terms.
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

export default TermsPage;