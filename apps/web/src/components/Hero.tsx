"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden pt-24"
      style={{ background: "var(--ls-parchment-0)" }}
    >
      {/* Text content */}
      <div className="relative z-10 px-6 md:px-16 pt-8 max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
          style={{ fontFamily: "var(--font-fredoka, var(--ls-font-display))" }}
        >
          <span style={{ color: "var(--ls-ink)" }}>Where Little</span>
          <br />
          <span style={{ color: "var(--ls-crayon-red)" }}>I</span>
          <span style={{ color: "var(--ls-crayon-orange)" }}>m</span>
          <span style={{ color: "var(--ls-crayon-yellow)" }}>a</span>
          <span style={{ color: "var(--ls-crayon-green)" }}>g</span>
          <span style={{ color: "var(--ls-crayon-blue)" }}>i</span>
          <span style={{ color: "var(--ls-crayon-purple)" }}>n</span>
          <span style={{ color: "var(--ls-crayon-red)" }}>a</span>
          <span style={{ color: "var(--ls-crayon-orange)" }}>t</span>
          <span style={{ color: "var(--ls-crayon-yellow)" }}>i</span>
          <span style={{ color: "var(--ls-crayon-green)" }}>o</span>
          <span style={{ color: "var(--ls-crayon-blue)" }}>n</span>
          <span style={{ color: "var(--ls-crayon-purple)" }}>s</span>
          <br />
          <span style={{ color: "var(--ls-ink)" }}>Grow Big</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg mb-8 max-w-sm"
          style={{ color: "var(--ls-ink-soft)", fontFamily: "var(--ls-font-body)" }}
        >
          A warm, nurturing place where children learn, play, and grow with joy every single day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#programs"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "var(--ls-candy-pink)",
              boxShadow: "var(--ls-shadow-3)",
              fontFamily: "var(--ls-font-display)",
            }}
          >
            Our Programs 🌸
          </a>
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
            Book a Tour ⭐
          </a>
        </motion.div>
      </div>

      {/* Illustration scene */}
      <div className="relative flex-1 mt-8 min-h-[420px]">
        {/* Sun */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 right-8 md:right-24 w-32 h-32 md:w-44 md:h-44 rounded-full flex items-center justify-center text-6xl md:text-8xl select-none"
          style={{
            background: "var(--ls-crayon-yellow)",
            boxShadow: "0 0 0 8px oklch(0.86 0.16 92 / 0.3), 0 0 0 16px oklch(0.86 0.16 92 / 0.15)",
          }}
        >
          ☀️
        </motion.div>

        {/* Layered felt hills SVG */}
        <svg
          viewBox="0 0 900 320"
          preserveAspectRatio="xMidYMax slice"
          className="absolute bottom-0 inset-x-0 w-full"
          aria-hidden="true"
        >
          {/* Back hill */}
          <ellipse cx="700" cy="320" rx="380" ry="200" fill="oklch(0.72 0.15 145 / 0.5)" />
          {/* Mid hill left */}
          <ellipse cx="180" cy="320" rx="280" ry="180" fill="oklch(0.72 0.15 145 / 0.7)" />
          {/* Front hill */}
          <ellipse cx="450" cy="340" rx="500" ry="160" fill="oklch(0.72 0.15 145)" />
          {/* Ground strip */}
          <rect x="0" y="290" width="900" height="40" fill="oklch(0.91 0.028 78)" />
        </svg>

        {/* House */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-16 right-8 md:right-32 text-[120px] md:text-[160px] select-none leading-none"
          style={{ filter: "drop-shadow(0 8px 16px oklch(0.32 0.05 50 / 0.2))" }}
        >
          🏠
        </motion.div>

        {/* Kids */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 text-[80px] md:text-[100px] select-none"
        >
          <span>👧</span>
          <span>🧒</span>
          <span>👧🏾</span>
        </motion.div>

        {/* Doodle accents */}
        <span className="absolute top-12 left-1/3 text-2xl select-none opacity-70 rotate-12">💛</span>
        <span className="absolute top-20 right-1/3 text-xl select-none opacity-60 -rotate-6">⭐</span>
        <span className="absolute top-6 left-1/2 text-lg select-none opacity-50 rotate-3">🐦</span>
      </div>
    </section>
  );
}
