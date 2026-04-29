import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "NepalPathshala — Nepal's #1 Education & Results Hub", template: "%s | NepalPathshala" },
  description: "Check SEE, NEB, TU results, scholarships, Loksewa guides, GPA calculator and more. Nepal's most trusted education resource.",
  keywords: ["SEE result Nepal", "NEB result", "Nepal scholarship", "Loksewa preparation", "GPA calculator Nepal"],
  authors: [{ name: "NepalPathshala Team" }],
  metadataBase: new URL("https://nepalpathshala.com"),
  openGraph: { type: "website", locale: "en_NP", siteName: "NepalPathshala" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3572826593545764"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main style={{ minHeight: "60vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
