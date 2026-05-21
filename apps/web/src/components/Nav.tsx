"use client";
import { useState } from "react";
import { brand } from "@lil-sprouts/content/brand";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 py-4 flex items-center justify-between">
      {/* Logo wordmark */}
      <a href="#" className="flex items-center gap-2 select-none">
        <span
          className="text-2xl font-bold leading-none"
          style={{ fontFamily: "var(--font-fredoka), var(--ls-font-display)" }}
        >
          <span style={{ color: "var(--ls-ink)" }}>Little</span>
          <br />
          <span style={{ color: "var(--ls-crayon-red)" }}>S</span>
          <span style={{ color: "var(--ls-crayon-orange)" }}>p</span>
          <span style={{ color: "var(--ls-crayon-green)" }}>r</span>
          <span style={{ color: "var(--ls-crayon-yellow)" }}>o</span>
          <span style={{ color: "var(--ls-crayon-blue)" }}>u</span>
          <span style={{ color: "var(--ls-crayon-purple)" }}>t</span>
          <span style={{ color: "var(--ls-crayon-red)" }}>s</span>
        </span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold" style={{ color: "var(--ls-ink-soft)" }}>
        {brand.nav.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:opacity-70 transition-opacity"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white transition-transform hover:scale-105 active:scale-95"
        style={{
          background: "var(--ls-lavender)",
          boxShadow: "var(--ls-shadow-2)",
          fontFamily: "var(--ls-font-display)",
        }}
      >
        Book a Tour ⭐
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="block w-5 h-0.5 mb-1" style={{ background: "var(--ls-ink)" }} />
        <span className="block w-5 h-0.5 mb-1" style={{ background: "var(--ls-ink)" }} />
        <span className="block w-5 h-0.5" style={{ background: "var(--ls-ink)" }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 p-6 flex flex-col gap-4 text-base font-semibold"
          style={{ background: "var(--ls-bg-elev)", boxShadow: "var(--ls-shadow-3)" }}
        >
          {brand.nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ color: "var(--ls-ink)" }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center py-3 rounded-full font-bold text-white"
            style={{ background: "var(--ls-lavender)" }}
          >
            Book a Tour ⭐
          </a>
        </div>
      )}
    </header>
  );
}
