import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Cpu, Monitor, Wifi, Bot, BrainCircuit, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DARK  = "#020818";
const LIGHT = "#1e293b";
const MEDIUM = "#0f172a";

const cardConfig = [
  { Icon: Cpu,          color: "#10b981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.2)",  href: "/services/plc-programming"    },
  { Icon: Monitor,      color: "#0ea5e9", bg: "rgba(14,165,233,0.1)",  border: "rgba(14,165,233,0.2)",  href: "/services/scada-hmi"          },
  { Icon: Wifi,         color: "#8b5cf6", bg: "rgba(139,92,246,0.1)",  border: "rgba(139,92,246,0.2)",  href: "/services/industrial-iot"     },
  { Icon: Bot,          color: "#f59e0b", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.2)",  href: "/services/robotics-integration"},
  { Icon: BrainCircuit, color: "#10b981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.2)",  href: "/services/industrial-ai"      },
];

const ServiceCard = ({ service, cfg, index }) => {
  const navigate = useNavigate();
  const { Icon, color, bg, border, href } = cfg;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => navigate(href)}
      className="p-6 rounded-xl flex flex-col gap-4 transition-all duration-300 group cursor-pointer"
      style={{ background: "#0f172a", border: `1px solid ${border}` }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: "#f0f4ff" }}>{service.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{service.description}</p>
      </div>
      {service.bullets && (
        <ul className="space-y-1">
          {service.bullets.map((b, bi) => (
            <li key={bi} className="text-xs flex items-center gap-2" style={{ color: "#64748b" }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
              {b}
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color }}>
        <span>{service.learnMore || "Learn more"}</span>
        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();
  const items = t.services.items?.slice(0, 5) || [];
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3);

  return (
    <section id="services" className="py-24" style={{ background: DARK }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#10b981" }}>
            {t.services.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#f0f4ff" }}>{t.services.title}</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>{t.services.subtitle}</p>
        </motion.div>

        {/* First row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstRow.map((service, i) => (
            <ServiceCard key={i} service={service} cfg={cardConfig[i]} index={i} />
          ))}
        </div>

        {/* Second row — 2 cards centred under the 3 above */}
        {secondRow.length > 0 && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
            {secondRow.map((service, i) => (
              <ServiceCard key={i} service={service} cfg={cardConfig[3 + i]} index={3 + i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;