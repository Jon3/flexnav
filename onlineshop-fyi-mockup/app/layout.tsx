import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MockupBanner } from "@/components/MockupBanner";
import { AiGreeter } from "@/components/AiGreeter";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.shortDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <MockupBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AiGreeter />
      </body>
    </html>
  );
}
