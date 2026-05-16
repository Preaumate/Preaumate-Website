import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Cpu,
  Monitor,
  RefreshCw,
  Shield,
  Briefcase,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { solutionsData, solutionCTA } from "@/data/solutions";
import { seo } from "@/data/seo";

const iconMap = {
  cpu: Cpu,
  monitor: Monitor,
  refresh: RefreshCw,
  shield: Shield,
  briefcase: Briefcase,
  sparkles: Sparkles,
};

const SolutionPage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const solution = solutionsData[slug];
  if (!solution) {
    navigate("/");
    return null;
  }

  const content = solution[language] || solution.en;
  const cta = solutionCTA[language] || solutionCTA.en;
  const Icon = iconMap[solution.icon] || Cpu;

  const pageSeo = seo.solutions[slug] || {
    title: `${content.title} — Preaumate`,
    description: content.tagline,
  };

  return (
    <>
      <Helmet>
        <title>{pageSeo.title}</title>
        <meta name="description" content={pageSeo.description} />
        <meta property="og:title" content={pageSeo.title} />
        <meta property="og:description" content={pageSeo.description} />
      </Helmet>

      <div className="min-h-screen" style={{ background: "#0f172a" }}>
        <Header />

        {/* ── HERO ─────────────────────────────────────────── */}
        <div
          className="pt-32 pb-20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #020818 0%, #0f172a 50%, #0f2040 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          {solution.images[0] && (
            <div
              className="absolute inset-0 opacity-8"
              style={{
                backgroundImage: `url(${solution.images[0].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}

          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-200"
                style={{ color: "#64748b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#10b981")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: solution.bg,
                    border: `1px solid ${solution.color}40`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: solution.color }} />
                </div>
                <span
                  className="text-xs font-bold tracking-widest px-4 py-1.5 rounded-full"
                  style={{
                    background: solution.bg,
                    border: `1px solid ${solution.color}40`,
                    color: solution.color,
                  }}
                >
                  PREAUMATE SOLUTIONS
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl font-black mb-6 leading-tight"
                style={{ color: "#f0f4ff" }}
              >
                {content.title}
              </h1>
              <p
                className="text-xl leading-relaxed max-w-2xl font-medium"
                style={{ color: solution.color }}
              >
                {content.tagline}
              </p>

              {/* Platform tags */}
              {content.platforms && (
                <div className="flex flex-wrap gap-2 mt-8">
                  {content.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: "rgba(16,185,129,0.06)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        color: "#64748b",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* ── HERO IMAGE ───────────────────────────────────── */}
        {solution.images[0] && (
          <div
            className="w-full overflow-hidden"
            style={{ maxHeight: "480px" }}
          >
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={solution.images[0].url}
              alt={solution.images[0].alt}
              className="w-full object-cover"
              style={{ maxHeight: "480px" }}
            />
            {solution.images[0].caption && (
              <p
                className="text-center text-sm py-3 px-6"
                style={{
                  background: "#1e293b",
                  color: "#64748b",
                  borderBottom: "1px solid rgba(16,185,129,0.1)",
                }}
              >
                {solution.images[0].caption}
              </p>
            )}
          </div>
        )}

        {/* ── INTRO TEXT ───────────────────────────────────── */}
        <section className="py-20" style={{ background: "#0f172a" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-6">
              {content.intro.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-lg leading-relaxed"
                  style={{ color: "#94a3b8" }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECOND IMAGE ─────────────────────────────────── */}
        {solution.images[1] && (
          <section className="pb-4" style={{ background: "#1e293b" }}>
            <div className="container mx-auto px-6 max-w-4xl pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${solution.color}25` }}
              >
                <img
                  src={solution.images[1].url}
                  alt={solution.images[1].alt}
                  className="w-full object-cover"
                  style={{ maxHeight: "360px" }}
                />
                {solution.images[1].caption && (
                  <p
                    className="text-sm py-3 px-5"
                    style={{ background: "#0f172a", color: "#64748b" }}
                  >
                    {solution.images[1].caption}
                  </p>
                )}
              </motion.div>
            </div>
          </section>
        )}

        {/* ── DELIVERABLES ─────────────────────────────────── */}
        <section className="py-20" style={{ background: "#1e293b" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span
                className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
                style={{
                  background: solution.bg,
                  border: `1px solid ${solution.color}40`,
                  color: solution.color,
                }}
              >
                {content.deliverablesTitle.toUpperCase()}
              </span>
              <h2
                className="text-3xl md:text-4xl font-black"
                style={{ color: "#f0f4ff" }}
              >
                {content.deliverablesTitle}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {content.deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-6 rounded-xl transition-all duration-300"
                  style={{
                    background: "#0f172a",
                    border: "1px solid rgba(16,185,129,0.12)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = solution.color;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(16,185,129,0.12)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: solution.color }}
                    />
                    <div>
                      <h3
                        className="font-bold text-base mb-2"
                        style={{ color: "#f0f4ff" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#94a3b8" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-20" style={{ background: "#020818" }}>
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl font-black mb-4"
                style={{ color: "#f0f4ff" }}
              >
                {cta.title}
              </h2>
              <p className="text-lg mb-8" style={{ color: "#94a3b8" }}>
                {cta.subtitle}
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  boxShadow: "0 0 30px rgba(16,185,129,0.3)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(16,185,129,0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(16,185,129,0.3)")
                }
              >
                {cta.button}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SolutionPage;
