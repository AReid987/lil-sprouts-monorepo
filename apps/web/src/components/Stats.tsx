import { brand } from "@lil-sprouts/content/brand";

export function Stats() {
  return (
    <div
      className="py-10 px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      style={{ background: "var(--ls-oat)" }}
    >
      {brand.stats.map((s) => (
        <div key={s.label}>
          <p
            className="text-4xl font-bold mb-1"
            style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-crayon-green)" }}
          >
            {s.value}
          </p>
          <p className="text-sm font-semibold" style={{ color: "var(--ls-ink-soft)" }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
