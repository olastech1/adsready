import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://olaniyi.me";
const siteName = "Olaniyi Careers";
const siteDesc = "Free professional resume builder with live preview, one-click PDF export, and expert career guides. Build your ATS-friendly resume in minutes.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteName} — Free Professional Resume Builder`, template: `%s | ${siteName}` },
  description: siteDesc,
  keywords: ["resume builder", "free resume builder", "ATS resume", "CV builder", "career advice", "professional resume"],
  authors: [{ name: "Olaniyi Careers", url: siteUrl }],
  creator: "Olaniyi Careers",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} — Free Professional Resume Builder`,
    description: siteDesc,
  },
  twitter: { card: "summary_large_image", title: `${siteName} — Free Professional Resume Builder`, description: siteDesc },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDesc,
      potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/blog?q={search_term_string}` }, "query-input": "required name=search_term_string" }
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: "support@olaniyi.me", url: `${siteUrl}/contact` },
      sameAs: ["https://github.com/olastech1"]
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      name: "Olaniyi Careers Resume Builder",
      url: `${siteUrl}/builder`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description: "Free online resume builder with live preview, 4 professional templates, and one-click PDF export."
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5778472067739228"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main style={{ minHeight: 'calc(100dvh - 60px)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
              {children}
            </div>
            <Footer />
          </main>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
