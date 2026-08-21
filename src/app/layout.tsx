import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import "./globals.css";

const adsterraBannerHtml = `<script type="text/javascript">atOptions = {'key' : 'd42032325269604cce1258fe72123e94','format' : 'iframe','height' : 250,'width' : 300,'params' : {}};</script><script type="text/javascript" src="https://www.highperformanceformat.com/d42032325269604cce1258fe72123e94/invoke.js"></script>`;

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
  return <html lang="en"><head>
    <Script src="https://pl30949378.effectivecpmnetwork.com/78/27/f3/7827f35f77978da064be19c5413ecbc2.js" strategy="beforeInteractive" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-X8J99Y0S9J" />
    <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config','G-X8J99Y0S9J');` }} />
  </head><body><JsonLd data={schema} /><Header /><main>{children}</main><div id="adsterra-banner-300x250" aria-label="Advertisement" style={{ width: 300, height: 250, margin: "24px auto" }} dangerouslySetInnerHTML={{ __html: adsterraBannerHtml }} /><Footer /></body></html>;
}
