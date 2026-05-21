import { brand } from "@lil-sprouts/content/brand";

export function Footer() {
  return (
    <footer
      className="py-10 px-6 md:px-16 text-center text-sm"
      style={{ background: "var(--ls-navy)", color: "var(--ls-ink-mute-dark, oklch(0.65 0.03 82))" }}
    >
      <p className="mb-1" style={{ fontFamily: "var(--ls-font-display)", color: "var(--ls-ink-on-dark)", fontSize: "1.1rem" }}>
        Little Sprouts Daycare
      </p>
      <p>{brand.location}</p>
      <p className="mt-1">
        <a href={`tel:${brand.phone}`} className="hover:opacity-80">{brand.phone}</a>
        {" · "}
        <a href={`mailto:${brand.email}`} className="hover:opacity-80">{brand.email}</a>
      </p>
      <p className="mt-4 opacity-50">© {new Date().getFullYear()} Little Sprouts Daycare. All rights reserved.</p>
    </footer>
  );
}
