import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ResumeGenius Pro — Build Professional Resumes in Minutes",
  description: "Create stunning, ATS-friendly resumes with our free online resume builder. Instant live preview, one-click PDF export, and expert career guides.",
  metadataBase: new URL("https://adsready.vercel.app"),
  openGraph: {
    title: "ResumeGenius Pro — Build Professional Resumes in Minutes",
    description: "Create stunning, ATS-friendly resumes with our free online resume builder.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const adsensePubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;

  return (
    <html lang="en">
      <head>
        {adsensePubId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${adsensePubId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 56px)', display: 'flex', flexDirection: 'column' }}>
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
