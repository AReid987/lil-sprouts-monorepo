import type { Metadata } from "next";
import { Fredoka, Nunito, Caveat } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Little Sprouts Daycare | Where Little Imaginations Grow Big",
  description:
    "A warm, nurturing daycare in the Central Texas I-35 corridor. Specialized care for infants through school-age children, including ADHD and speech-delay support.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${fredoka.variable} ${nunito.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}
