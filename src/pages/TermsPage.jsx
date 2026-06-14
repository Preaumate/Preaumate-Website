import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { seo } from '@/data/seo';

// ── COMPANY DETAILS ─────────────────────────────────────────────────────────
// Keep these in sync with PrivacyPolicyPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
const COMPANY = {
  legalName: "Preaumate Automation", // ← your registered legal name
  kvk: "99706679", // ← your KvK (Chamber of Commerce) number
  vat: "NL005406796B26", // ← your VAT number
  //address: "Your Street 1, City, Netherlands", // ← your registered address
  email: "contact@preaumate.com", // ← your contact email
  website: "www.preaumate.com", // ← your domain
  //dpa: "Autoriteit Persoonsgegevens", // ← Dutch DPA — correct for NL
  //dpaWebsite: "https://www.autoriteitpersoonsgegevens.nl",
  lastUpdated: "May 2026", // ← update when you change this policy
};

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2
      className="text-2xl font-bold mb-4"
      style={{ color: '#f0f4ff' }}
    >
      {title}
    </h2>
    <div
      className="space-y-4 text-sm leading-relaxed"
      style={{ color: '#94a3b8' }}
    >
      {children}
    </div>
  </section>
);

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>{seo.terms.title}</title>
        <meta name="description" content={seo.terms.description} />
      </Helmet>

      <div className="min-h-screen" style={{ background: '#0f172a' }}>
        <Header />

        {/* Hero — matches Privacy Policy */}
        <div
          className="pt-32 pb-12"
          style={{ background: 'linear-gradient(135deg, #020818 0%, #0f172a 100%)' }}
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <span
              className="inline-block text-xs font-bold tracking-widest mb-6 px-4 py-1.5 rounded-full"
              style={{
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.3)',
                color: '#10b981',
              }}
            >
              LEGAL
            </span>
            <h1
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ color: '#f0f4ff' }}
            >
              Terms & Conditions
            </h1>
            <p style={{ color: '#64748b' }}>
              Last updated: {COMPANY.lastUpdated} · {COMPANY.legalName}
            </p>
          </div>
        </div>

        {/* Content */}
        <main className="container mx-auto px-6 py-16 max-w-4xl">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: '#1e293b',
              border: '1px solid rgba(16,185,129,0.12)',
            }}
          >

            <Section title="1. Acceptance of Terms">
              <p>
                By accessing and using the website{' '}
                <strong style={{ color: '#f0f4ff' }}>{COMPANY.website}</strong>, you
                accept and agree to be bound by these Terms & Conditions and our{' '}
                <Link
                  to="/privacy-policy"
                  className="underline transition-colors"
                  style={{ color: '#10b981' }}
                >
                  Privacy Policy
                </Link>.
                If you do not agree to these terms, please do not use this website.
              </p>
              <p>
                These terms apply to all visitors, users and others who access or use
                the website.
              </p>
            </Section>

            <Section title="2. About Us">
              <p>
                <strong style={{ color: '#f0f4ff' }}>{COMPANY.legalName}</strong> is an
                industrial automation consultancy registered in the Netherlands.
              </p>
              <div
                className="rounded-xl p-5 mt-3"
                style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.1)' }}
              >
                {[
                  ['Registered name', COMPANY.legalName],
                  ['Chamber of Commerce (KvK)', COMPANY.kvk],
                  ['Registered address', COMPANY.address],
                  ['Contact email', COMPANY.email],
                  ['Website', COMPANY.website],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex gap-4 py-2 text-xs"
                    style={{ borderBottom: '1px solid rgba(16,185,129,0.06)' }}
                  >
                    <span className="w-48 flex-shrink-0 font-medium" style={{ color: '#64748b' }}>
                      {label}
                    </span>
                    <span style={{ color: '#94a3b8' }}>{value}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="3. Use of This Website">
              <p>
                This website is provided for informational purposes about our services.
                You agree to use it only for lawful purposes and in a way that does not
                infringe the rights of others or restrict their use of the website.
              </p>
              <p>You must not:</p>
              <ul className="space-y-2 mt-2">
                {[
                  'Use the site in any way that violates applicable local, national or international laws or regulations',
                  'Transmit unsolicited or unauthorised advertising or promotional material',
                  'Attempt to gain unauthorised access to any part of the website, its servers or any connected systems',
                  'Introduce viruses, trojans, worms, logic bombs or other harmful material',
                  'Attempt to disrupt or compromise the integrity or security of the website',
                  'Scrape, crawl or copy content from this website without written permission',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: '#ef4444' }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="4. Our Services">
              <p>
                {COMPANY.legalName} provides industrial automation engineering consultancy
                services including but not limited to PLC programming, HMI and SCADA
                development, system modernisation, IoT integration, industrial cybersecurity
                and engineering consulting.
              </p>
              <p>
                Information on this website is provided for general informational purposes
                and does not constitute a formal offer or binding proposal. All engagements
                are subject to a separate written agreement between {COMPANY.legalName} and
                the client.
              </p>
              <p>
                Submitting our contact form or sending us an email does not constitute a
                binding agreement or guarantee of service availability. We will respond to
                all enquiries and confirm whether and how we can assist.
              </p>
            </Section>

            <Section title="5. Intellectual Property">
              <p>
                All content on this website — including text, graphics, logos, icons, images
                and software — is the property of {COMPANY.legalName} or its content suppliers
                and is protected by applicable intellectual property laws.
              </p>
              <p>You may:</p>
              <ul className="space-y-1 mt-2">
                {[
                  'View and print pages for personal, non-commercial use',
                  'Share links to pages on this website',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: '#10b981' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">You may not:</p>
              <ul className="space-y-1 mt-2">
                {[
                  'Reproduce, distribute or create derivative works without written permission',
                  'Use our branding, logos or trademarks without written permission',
                  'Remove or alter any proprietary notices or labels on content',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: '#ef4444' }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="6. Disclaimer of Warranties">
              <p>
                This website is provided on an <strong style={{ color: '#f0f4ff' }}>"as is"
                and "as available"</strong> basis without any representations or warranties,
                express or implied.
              </p>
              <p>
                We make no warranties regarding the accuracy, completeness, reliability or
                suitability of the information on this website. Content is subject to change
                without notice.
              </p>
              <p>
                We do not warrant that the website will be uninterrupted, error-free or free
                from viruses or other harmful components.
              </p>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, {COMPANY.legalName} shall
                not be liable for any indirect, incidental, special, consequential or punitive
                damages arising from:
              </p>
              <ul className="space-y-1 mt-2">
                {[
                  'Your use of or inability to use this website',
                  'Any reliance on information provided on this website',
                  'Unauthorised access to or alteration of your data',
                  'Any third-party content or links accessible through this website',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: '#64748b' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Our total liability to you for any claim shall not exceed the amount paid
                by you to us in the three months preceding the claim, or €100 (whichever
                is greater).
              </p>
              <p>
                Nothing in these terms limits our liability for fraud, gross negligence,
                personal injury or any other liability that cannot be excluded by law.
              </p>
            </Section>

            <Section title="8. External Links">
              <p>
                This website may contain links to third-party websites. These links are
                provided for your convenience only. We have no control over the content,
                privacy policies or practices of linked websites and accept no responsibility
                for them.
              </p>
              <p>
                Inclusion of any link does not imply endorsement of the linked website by
                {' '}{COMPANY.legalName}.
              </p>
            </Section>

            <Section title="9. Privacy">
              <p>
                Your use of this website is also governed by our{' '}
                <Link
                  to="/privacy-policy"
                  className="underline transition-colors"
                  style={{ color: '#10b981' }}
                >
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms & Conditions by reference.
              </p>
            </Section>

            <Section title="10. Cookies">
              <p>
                We use cookies on this website. By continuing to use the website and
                accepting our cookie banner, you consent to our use of cookies in
                accordance with our{' '}
                <Link
                  to="/privacy-policy"
                  className="underline transition-colors"
                  style={{ color: '#10b981' }}
                >
                  Privacy Policy
                </Link>.
              </p>
            </Section>

            <Section title="11. Governing Law & Jurisdiction">
              <p>
                These terms are governed by and construed in accordance with the laws
                of the <strong style={{ color: '#f0f4ff' }}>Netherlands</strong>.
              </p>
              <p>
                Any dispute arising from or relating to these terms or your use of this
                website shall be subject to the exclusive jurisdiction of the competent
                courts of the Netherlands, without prejudice to your rights as a consumer
                under mandatory provisions of the law of your country of residence.
              </p>
            </Section>

            <Section title="12. Changes to These Terms">
              <p>
                We reserve the right to modify these terms at any time. Changes will be
                published on this page with an updated effective date.
              </p>
              <p>
                Continued use of the website after changes are posted constitutes your
                acceptance of the revised terms. We recommend reviewing this page
                periodically.
              </p>
            </Section>

            <Section title="13. Contact">
              <p>
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div
                className="mt-3 p-5 rounded-xl"
                style={{ background: '#0f172a', border: '1px solid rgba(16,185,129,0.1)' }}
              >
                <p className="font-bold text-sm mb-1" style={{ color: '#f0f4ff' }}>
                  {COMPANY.legalName}
                </p>
                <p className="text-xs" style={{ color: '#64748b' }}>{COMPANY.address}</p>
                
                <a href={`mailto:${COMPANY.email}`}
                  className="text-xs underline mt-1 inline-block transition-colors"
                  style={{ color: '#10b981' }}
                >
                  {COMPANY.email}
                </a>
              </div>
            </Section>

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-medium transition-colors duration-200"
              style={{ color: '#10b981' }}
            >
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