import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Olaniyi Careers — Build Professional Resumes in Minutes",
  description: "Create stunning, ATS-friendly resumes with our free online resume builder. Instant live preview, one-click PDF export, and expert career guides.",
  metadataBase: new URL("https://olaniyi.me"),
  openGraph: {
    title: "Olaniyi Careers — Build Professional Resumes in Minutes",
    description: "Create stunning, ATS-friendly resumes with our free online resume builder.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6045179820223370"
          crossOrigin="anonymous"
        />
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
