"use client";
import { motion } from "framer-motion";
import { IconCloud, IconBrain, IconCode, IconUsers, IconExternalLink } from "@tabler/icons-react";

const CERTS = [
  {
    title: "Google Cloud Arcade Facilitator Program",
    subtitle: "First Milestone — 1800+ Badges · Cohort 1",
    issuer: "Google Cloud",
    year: "Jun 2025",
    color: "#4DFFB4",
    icon: IconCloud,
    href: null,
  },
  {
    title: "Artificial Intelligence A-Z 2025",
    subtitle: "Agentic AI, Gen AI, and RL · 15.5 hrs",
    issuer: "Udemy",
    year: "Aug 2025",
    color: "#FF6B35",
    icon: IconBrain,
    href: "https://ude.my/UC-4356ff5d-9a65-49df-a33c-48d5d04f2aa8",
  },
  {
    title: "The Complete Full-Stack Web Dev Bootcamp",
    subtitle: "61.5 hrs · Dr. Angela Yu",
    issuer: "Udemy",
    year: "Aug 2025",
    color: "#4DFFB4",
    icon: IconCode,
    href: "https://ude.my/UC-770fb0c2-5b09-4e50-9cc1-18ae79d6247b",
  },
  {
    title: "AWS Academy Graduate",
    subtitle: "Data Engineering Training Badge",
    issuer: "Amazon Web Services",
    year: "Oct 2023",
    color: "#FF6B35",
    icon: IconCloud,
    href: "https://www.credly.com/badges/45e07d86-4ee5-4452-8585-2b35f3abeccc/linked_in_profile",
  },
  {
    title: "Analyze Images with Cloud Vision API",
    subtitle: "Skill Badge · Machine Learning & AI",
    issuer: "Google Cloud",
    year: "Nov 2024",
    color: "#4DFFB4",
    icon: IconCloud,
    href: "https://www.credly.com/badges/a3d13895-92c8-44e3-a283-b65dc4d96df8/linked_in_profile",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    subtitle: "API testing, scripting & authorization",
    issuer: "Postman",
    year: "Mar 2023",
    color: "#FF6B35",
    icon: IconCode,
    href: "https://badges.parchment.com/public/assertions/FNrh7rNeQxG6NWf_o2hKFQ?identity__email=ali_ahmed152004@yahoo.com",
  },
  {
    title: "GenAI 101 with Pieces",
    subtitle: "Prompt engineering · Local LLMs · GenAI project",
    issuer: "Pieces for Developers",
    year: "Feb 2025",
    color: "#4DFFB4",
    icon: IconBrain,
    href: "https://badges.parchment.com/public/assertions/hD54A6vLQHWtJfip-vJdtA?identity__email=alishaikhh15@gmail.com",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32">
      <div className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="section-label">05 — certifications</span>
            <span className="accent-line" />
          </motion.div>
        </div>
      </div>

      <div
        className="flex gap-4 overflow-x-auto px-6 md:px-12 lg:px-24 pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {CERTS.map((cert, i) => {
          const Icon = cert.icon;
          const Card = (
            <motion.div
              key={cert.title + i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className={`glass flex-shrink-0 w-64 p-6 group ${cert.href ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}40` }}
                >
                  <Icon size={20} color={cert.color} />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="mono text-xs text-[var(--text-dim)]">{cert.year}</span>
                  {cert.href && <IconExternalLink size={11} className="text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors" />}
                </div>
              </div>
              <h4 className="font-semibold text-sm text-[var(--text)] mb-1 group-hover:text-[var(--accent)] transition-colors leading-snug">
                {cert.title}
              </h4>
              <p className="mono text-xs text-[var(--text-muted)] mb-1">{cert.subtitle}</p>
              <p className="mono text-xs" style={{ color: cert.color, opacity: 0.7 }}>{cert.issuer}</p>
            </motion.div>
          );

          return cert.href ? (
            <a key={i} href={cert.href} target="_blank" rel="noopener noreferrer" className="contents">
              {Card}
            </a>
          ) : (
            <div key={i} className="contents">{Card}</div>
          );
        })}
      </div>
    </section>
  );
}
