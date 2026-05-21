"use client";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-16" style={{ background: "var(--ls-parchment-0)" }}>
      <div className="max-w-lg mx-auto text-center mb-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}
        >
          Book a Personal Tour 🌟
        </h2>
        <p style={{ color: "var(--ls-ink-soft)" }}>
          Come see why families drive past three other daycares to be here.
        </p>
      </div>

      {sent ? (
        <div
          className="max-w-lg mx-auto rounded-3xl p-10 text-center"
          style={{ background: "var(--ls-mint)", boxShadow: "var(--ls-shadow-2)" }}
        >
          <p className="text-5xl mb-4">🎉</p>
          <p className="text-xl font-bold" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink)" }}>
            We&apos;ll be in touch soon!
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto rounded-3xl p-8 flex flex-col gap-4"
          style={{ background: "var(--ls-bg-elev)", boxShadow: "var(--ls-shadow-3)" }}
        >
          {[
            { name: "name", label: "Parent Name", type: "text" },
            { name: "childAge", label: "Child's Age", type: "text" },
            { name: "phone", label: "Phone Number", type: "tel" },
            { name: "startDate", label: "Desired Start Date", type: "date" },
          ].map((f) => (
            <div key={f.name} className="flex flex-col gap-1.5">
              <label
                htmlFor={f.name}
                className="text-sm font-semibold"
                style={{ color: "var(--ls-ink-soft)" }}
              >
                {f.label}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required
                className="rounded-xl px-4 py-3 text-base outline-none focus:ring-2 focus:ring-[oklch(0.72_0.15_145)]"
                style={{
                  background: "var(--ls-parchment-50)",
                  color: "var(--ls-ink)",
                  border: "1.5px solid var(--ls-hairline)",
                }}
              />
            </div>
          ))}
          <button
            type="submit"
            className="mt-2 py-4 rounded-full font-bold text-lg text-white transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "var(--ls-crayon-green)",
              boxShadow: "var(--ls-shadow-3)",
              fontFamily: "var(--ls-font-display)",
            }}
          >
            Request a Tour ⭐
          </button>
        </form>
      )}
    </section>
  );
}
