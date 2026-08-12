import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: "Farm an Island Wiki, Codes and Player Guides", template: "%s | Farm an Island Wiki" },
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" }], apple: "/apple-touch-icon.png" },
  openGraph: { title: "Farm an Island Wiki", description: site.description, images: [{ url: "/og-default.jpg", width: 1200, height: 630 }], type: "website" },
  twitter: { card: "summary_large_image", images: ["/og-default.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: site.name, url: site.siteUrl, description: site.description },
      { "@type": "VideoGame", name: site.gameName, url: site.gameUrl, gamePlatform: "Roblox", genre: site.genre, author: { "@type": "Organization", name: site.developer } },
    ],
  };
  return <html lang="en"><body><JsonLd data={schema} /><Header /><main>{children}</main><Footer /></body></html>;
}
