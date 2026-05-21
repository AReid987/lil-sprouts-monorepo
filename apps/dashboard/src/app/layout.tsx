import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-fredoka" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Little Sprouts — Internal Dashboard",
  description: "Brand book, design system, and research report for Little Sprouts Daycare.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${fredoka.variable} ${nunito.variable} flex min-h-screen`}>
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8 md:p-12" style={{ background: "var(--ls-bg)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
