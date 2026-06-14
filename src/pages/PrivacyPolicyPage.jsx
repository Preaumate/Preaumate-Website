import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seo } from "@/data/seo";

// ── COMPANY DETAILS ─────────────────────────────────────────────────────────
// Fill in your real details here before going live.
// These appear throughout the privacy policy.
// ─────────────────────────────────────────────────────────────────────────────
const COMPANY = {
  legalName: "Preaumate Automation", // ← your registered legal name
  kvk: "99706679", // ← your KvK (Chamber of Commerce) number
  vat: "NL005406796B26", // ← your VAT number
  //address: "Your Street 1, City, Netherlands", // ← your registered address
  email: "contact@preaumate.com", // ← your contact email
  website: "www.preaumate.com", // ← your domain
  dpa: "Autoriteit Persoonsgegevens", // ← Dutch DPA — correct for NL
  dpaWebsite: "https://www.autoriteitpersoonsgegevens.nl",
  lastUpdated: "May 2026", // ← update when you change this policy
};

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4" style={{ color: "#f0f4ff" }}>
      {title}
    </h2>
    <div
      className="space-y-4 text-sm leading-relaxed"
      style={{ color: "#94a3b8" }}
    >
      {children}
    </div>
  </section>
);

const PrivacyPolicyPage = () => {
  return (
    <>
      {/*  <Helmet>
        <title>Privacy Policy — Preaumate</title>
        <meta
          name="description"
          content="Privacy Policy for Preaumate — how we collect, use and protect your personal data."
        />
      </Helmet>
*/}
      <Helmet>
        <title>{seo.privacy.title}</title>
        <meta name="description" content={seo.privacy.description} />
        {/* No og tags needed for legal pages */}
      </Helmet>

      <div className="min-h-screen" style={{ background: "#0f172a" }}>
        <Header />

        {/* Hero */}
        <div
          className="pt-32 pb-12"
          style={{
            background: "linear-gradient(135deg, #020818 0%, #0f172a 100%)",
          }}
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <span
              className="inline-block text-xs font-bold tracking-widest mb-6 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#10b981",
              }}
            >
              LEGAL
            </span>
            <h1
              className="text-4xl md:text-5xl font-black mb-4"
              style={{ color: "#f0f4ff" }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "#64748b" }}>
              Last updated: {COMPANY.lastUpdated} · {COMPANY.legalName}
            </p>
          </div>
        </div>

        {/* Content */}
        <main className="container mx-auto px-6 py-16 max-w-4xl">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "#1e293b",
              border: "1px solid rgba(16,185,129,0.12)",
            }}
          >
            <Section title="1. Who We Are">
              <p>
                <strong style={{ color: "#f0f4ff" }}>
                  {COMPANY.legalName}
                </strong>{" "}
                is an industrial automation consultancy registered in the
                Netherlands.
              </p>
              <p>
                <strong style={{ color: "#f0f4ff" }}>
                  Registered address:
                </strong>{" "}
                {COMPANY.address}
              </p>
              <p>
                <strong style={{ color: "#f0f4ff" }}>
                  Chamber of Commerce (KvK):
                </strong>{" "}
                {COMPANY.kvk}
              </p>
              <p>
                <strong style={{ color: "#f0f4ff" }}>VAT number:</strong>{" "}
                {COMPANY.vat}
              </p>
              <p>
                <strong style={{ color: "#f0f4ff" }}>Website:</strong>{" "}
                {COMPANY.website}
              </p>
              <p>
                We are the{" "}
                <strong style={{ color: "#f0f4ff" }}>data controller</strong>{" "}
                for personal data collected through this website. For any
                privacy-related questions, contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="underline transition-colors"
                  style={{ color: "#10b981" }}
                >
                  {COMPANY.email}
                </a>
                .
              </p>
            </Section>

            <Section title="2. What Personal Data We Collect">
              <p>We collect the following categories of personal data:</p>

              <div
                className="rounded-xl p-5 mt-3"
                style={{
                  background: "#0f172a",
                  border: "1px solid rgba(16,185,129,0.1)",
                }}
              >
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ color: "#10b981" }}>
                      <th className="text-left pb-3 pr-4 font-bold">
                        Category
                      </th>
                      <th className="text-left pb-3 pr-4 font-bold">Data</th>
                      <th className="text-left pb-3 font-bold">
                        How collected
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "#94a3b8" }} className="space-y-2">
                    <tr>
                      <td
                        className="py-2 pr-4 align-top font-medium"
                        style={{ color: "#f0f4ff" }}
                      >
                        Contact data
                      </td>
                      <td className="py-2 pr-4 align-top">
                        Company name, email address, phone number, service
                        interest, message content
                      </td>
                      <td className="py-2 align-top">
                        Contact form submission
                      </td>
                    </tr>
                    <tr
                      style={{ borderTop: "1px solid rgba(16,185,129,0.08)" }}
                    >
                      <td
                        className="py-2 pr-4 align-top font-medium"
                        style={{ color: "#f0f4ff" }}
                      >
                        Analytics data
                      </td>
                      <td className="py-2 pr-4 align-top">
                        Pages visited, time on site, browser type, device type,
                        approximate location (country/city level)
                      </td>
                      <td className="py-2 align-top">
                        Google Analytics — only with consent
                      </td>
                    </tr>
                    <tr
                      style={{ borderTop: "1px solid rgba(16,185,129,0.08)" }}
                    >
                      <td
                        className="py-2 pr-4 align-top font-medium"
                        style={{ color: "#f0f4ff" }}
                      >
                        Technical data
                      </td>
                      <td className="py-2 pr-4 align-top">
                        IP address, browser type, operating system
                      </td>
                      <td className="py-2 align-top">
                        Automatically — for security and functionality
                      </td>
                    </tr>
                    <tr
                      style={{ borderTop: "1px solid rgba(16,185,129,0.08)" }}
                    >
                      <td
                        className="py-2 pr-4 align-top font-medium"
                        style={{ color: "#f0f4ff" }}
                      >
                        Chat data
                      </td>
                      <td className="py-2 pr-4 align-top">
                        Chat messages, name if provided
                      </td>
                      <td className="py-2 align-top">
                        Tawk.to live chat — only with consent
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                We do <strong style={{ color: "#f0f4ff" }}>not</strong> collect
                sensitive personal data (health data, financial data, political
                views, etc.).
              </p>
            </Section>

            <Section title="3. Why We Process Your Data (Legal Basis)">
              <p>
                Under the GDPR, we must have a lawful basis for processing
                personal data. We rely on the following:
              </p>
              <ul className="list-none space-y-3 mt-3">
                {[
                  {
                    basis: "Legitimate interest (Article 6(1)(f))",
                    use: "Responding to contact form enquiries and managing business communications.",
                  },
                  {
                    basis: "Consent (Article 6(1)(a))",
                    use: "Analytics cookies (Google Analytics) and live chat (Tawk.to). You may withdraw consent at any time via the cookie banner.",
                  },
                  {
                    basis: "Legal obligation (Article 6(1)(c))",
                    use: "Where we are required to retain or share data under applicable law.",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{
                      background: "#0f172a",
                      border: "1px solid rgba(16,185,129,0.08)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: "#10b981" }}
                    />
                    <div>
                      <p
                        className="font-semibold text-xs mb-1"
                        style={{ color: "#10b981" }}
                      >
                        {item.basis}
                      </p>
                      <p>{item.use}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="4. How We Use Your Data">
              <ul className="space-y-2">
                {[
                  "Contact form data is used solely to respond to your enquiry. We do not add you to any marketing list without your explicit consent.",
                  "Analytics data is used to understand how visitors use our site, so we can improve it. This is only processed with your consent.",
                  "Technical data is used to ensure the security and correct functioning of our website.",
                  "Chat data is used to answer your questions in real time and to follow up if needed.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: "#10b981" }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="5. Third Parties We Share Data With">
              <p>
                We do <strong style={{ color: "#f0f4ff" }}>not sell</strong>{" "}
                your personal data. We share data only with the following
                processors, under data processing agreements:
              </p>
              <div className="space-y-3 mt-4">
                {[
                  {
                    name: "EmailJS",
                    purpose: "Delivers contact form submissions to our inbox.",
                    link: "https://www.emailjs.com/legal/privacy-policy/",
                    location: "USA (SCCs in place)",
                  },
                  {
                    name: "Google Analytics",
                    purpose:
                      "Website usage analytics. IP anonymisation enabled. Only active with your consent.",
                    link: "https://policies.google.com/privacy",
                    location: "USA (SCCs in place)",
                  },
                  {
                    name: "Tawk.to",
                    purpose:
                      "Live chat functionality. Only active with your consent.",
                    link: "https://www.tawk.to/privacy-policy/",
                    location: "USA (SCCs in place)",
                  },
                  {
                    name: "Netlify",
                    purpose: "Website hosting and delivery.",
                    link: "https://www.netlify.com/privacy/",
                    location: "USA (SCCs in place)",
                  },
                  { name: "Hostinger", purpose: "Website & Email hosting.", link: "https://www.hostinger.com/privacy-policy", location: "USA (SCCs in place)" },
                ].map((processor, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg"
                    style={{
                      background: "#0f172a",
                      border: "1px solid rgba(16,185,129,0.08)",
                    }}
                  >
                    <p
                      className="font-bold text-xs mb-1"
                      style={{ color: "#f0f4ff" }}
                    >
                      {processor.name}{" "}
                      <span style={{ color: "#475569", fontWeight: "normal" }}>
                        — {processor.location}
                      </span>
                    </p>
                    <p className="mb-1">{processor.purpose}</p>

                    <a
                      href={processor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline transition-colors"
                      style={{ color: "#10b981" }}
                    >
                      Privacy policy →
                    </a>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="6. International Data Transfers">
              <p>
                Some of our processors are based in the United States. Where
                data is transferred outside the European Economic Area (EEA), we
                ensure appropriate safeguards are in place — specifically
                Standard Contractual Clauses (SCCs) approved by the European
                Commission under Article 46 GDPR.
              </p>
            </Section>

            <Section title="7. How Long We Keep Your Data">
              <div
                className="rounded-xl p-5"
                style={{
                  background: "#0f172a",
                  border: "1px solid rgba(16,185,129,0.1)",
                }}
              >
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ color: "#10b981" }}>
                      <th className="text-left pb-3 pr-4 font-bold">
                        Data type
                      </th>
                      <th className="text-left pb-3 font-bold">
                        Retention period
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "#94a3b8" }}>
                    {[
                      [
                        "Contact form enquiries",
                        "Retained in our email system for up to 2 years, then deleted.",
                      ],
                      [
                        "Analytics data",
                        "14 months in Google Analytics, then automatically deleted.",
                      ],
                      [
                        "Chat transcripts",
                        "Retained in Tawk.to for up to 1 year, then deleted.",
                      ],
                      [
                        "Technical/server logs",
                        "Up to 90 days, then automatically overwritten.",
                      ],
                    ].map(([type, period], i) => (
                      <tr
                        key={i}
                        style={{
                          borderTop:
                            i > 0 ? "1px solid rgba(16,185,129,0.06)" : "none",
                        }}
                      >
                        <td
                          className="py-2 pr-4 align-top font-medium"
                          style={{ color: "#f0f4ff" }}
                        >
                          {type}
                        </td>
                        <td className="py-2 align-top">{period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="8. Your Rights Under GDPR">
              <p>
                As a data subject in the EU/EEA, you have the following rights:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  {
                    right: "Right of access",
                    desc: "Request a copy of the personal data we hold about you.",
                  },
                  {
                    right: "Right to rectification",
                    desc: "Request correction of inaccurate or incomplete data.",
                  },
                  {
                    right: "Right to erasure",
                    desc: 'Request deletion of your personal data ("right to be forgotten").',
                  },
                  {
                    right: "Right to restriction",
                    desc: "Request that we limit how we use your data.",
                  },
                  {
                    right: "Right to portability",
                    desc: "Request your data in a machine-readable format.",
                  },
                  {
                    right: "Right to object",
                    desc: "Object to processing based on legitimate interests.",
                  },
                  {
                    right: "Right to withdraw consent",
                    desc: "Withdraw consent at any time for consent-based processing.",
                  },
                  {
                    right: "Right to complain",
                    desc: "Lodge a complaint with the supervisory authority.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg"
                    style={{
                      background: "#0f172a",
                      border: "1px solid rgba(16,185,129,0.08)",
                    }}
                  >
                    <p
                      className="font-bold text-xs mb-1"
                      style={{ color: "#10b981" }}
                    >
                      {item.right}
                    </p>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5">
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="underline transition-colors"
                  style={{ color: "#10b981" }}
                >
                  {COMPANY.email}
                </a>
                . We will respond within 30 days.
              </p>
            </Section>

            <Section title="9. Cookies">
              <p>We use the following categories of cookies:</p>
              <div className="space-y-3 mt-3">
                {[
                  {
                    type: "Essential cookies",
                    required: true,
                    desc: "Required for the website to function. Cannot be disabled. These include session cookies and security cookies.",
                  },
                  {
                    type: "Analytics cookies",
                    required: false,
                    desc: "Google Analytics — used to understand how visitors use our site. Only set with your consent. IP anonymisation is enabled.",
                  },
                  {
                    type: "Chat cookies",
                    required: false,
                    desc: "Tawk.to live chat — used to maintain your chat session. Only set with your consent.",
                  },
                ].map((cookie, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg flex items-start gap-3"
                    style={{
                      background: "#0f172a",
                      border: "1px solid rgba(16,185,129,0.08)",
                    }}
                  >
                    <div
                      className="text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background: cookie.required
                          ? "rgba(16,185,129,0.15)"
                          : "rgba(245,158,11,0.15)",
                        color: cookie.required ? "#10b981" : "#f59e0b",
                      }}
                    >
                      {cookie.required ? "Required" : "Optional"}
                    </div>
                    <div>
                      <p
                        className="font-bold text-xs mb-1"
                        style={{ color: "#f0f4ff" }}
                      >
                        {cookie.type}
                      </p>
                      <p>{cookie.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                You can manage your cookie preferences at any time using the
                banner at the bottom of this website, or by clearing your
                browser cookies.
              </p>
            </Section>

            <Section title="10. Data Security">
              <p>
                We implement appropriate technical and organisational measures
                to protect your personal data against unauthorised access, loss,
                destruction or alteration. These include HTTPS encryption,
                access controls, and security headers on our web server.
              </p>
              <p>
                No method of transmission over the internet or electronic
                storage is completely secure. We cannot guarantee absolute
                security but we take reasonable steps to protect your data.
              </p>
            </Section>

            <Section title="11. Supervisory Authority">
              <p>
                If you are unhappy with how we have handled your personal data,
                you have the right to lodge a complaint with the Dutch data
                protection authority:
              </p>
              <div
                className="mt-3 p-4 rounded-lg"
                style={{
                  background: "#0f172a",
                  border: "1px solid rgba(16,185,129,0.1)",
                }}
              >
                <p
                  className="font-bold text-xs mb-1"
                  style={{ color: "#f0f4ff" }}
                >
                  {COMPANY.dpa}
                </p>

                <a
                  href={COMPANY.dpaWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline transition-colors"
                  style={{ color: "#10b981" }}
                >
                  {COMPANY.dpaWebsite} →
                </a>
              </div>
            </Section>

            <Section title="12. Changes to This Policy">
              <p>
                We may update this policy from time to time to reflect changes
                in our practices or in applicable law. We will update the date
                at the top of this page when we do so. For significant changes,
                we will display a notice on our website.
              </p>
              <p>We recommend reviewing this policy periodically.</p>
            </Section>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-medium transition-colors duration-200"
              style={{ color: "#10b981" }}
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

export default PrivacyPolicyPage;
