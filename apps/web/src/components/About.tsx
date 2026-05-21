"use client";
import { motion } from "framer-motion";
import { brand } from "@lil-sprouts/content/brand";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-16 overflow-hidden"
      style={{ background: "var(--ls-navy)" }}
    >
      <svg viewBox="0 0 1440 80" className="absolute top-0 inset-x-0 w-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z" fill="var(--ls-parchment-0)" />
      </svg>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto pt-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[120px] md:text-[160px] select-none flex-shrink-0"
        >
          🧒
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink-on-dark)" }}
          >
            {brand.aboutSection.heading}
          </h2>
          <p className="text-lg mb-8 max-w-md" style={{ color: "var(--ls-ink-soft-dark)" }}>
            {brand.aboutSection.body}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "var(--ls-crayon-yellow)",
              color: "var(--ls-ink)",
              boxShadow: "var(--ls-shadow-3)",
              fontFamily: "var(--ls-font-display)",
            }}
          >
            About Our School 🤍
          </a>
        </motion.div>

        <span className="hidden md:block absolute right-8 bottom-8 text-6xl select-none opacity-80">🌸</span>
      </div>
    </section>
  );
}
