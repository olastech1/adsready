import Link from "next/link";
import { ArrowRight, FileText, Layout, TrendingUp, Zap, Shield, Users, CheckCircle } from "lucide-react";
import AdPlacement from "@/components/AdPlacement";

export const metadata = {
  title: "Free Professional Resume Builder — Build ATS-Ready Resumes in Minutes",
  description: "Create professional, ATS-friendly resumes with live preview, one-click PDF export, and 4 premium templates. 100% free — no sign-up required to start.",
};

const faqs = [
  { q: "Is Olaniyi Careers really free?", a: "Yes, 100% free. You can build, preview, and download your resume as a PDF without creating an account or paying anything. We offer optional sign-in (via GitHub) to save your resume to the cloud, but the core builder is always free." },
  { q: "Are the resumes ATS-compatible?", a: "Absolutely. All templates are built with clean, structured HTML that major Applicant Tracking Systems (like Workday, Greenhouse, Lever, and Taleo) can parse correctly. We avoid tables, text boxes, and multi-column layouts that confuse ATS parsers." },
  { q: "Do I need to create an account?", a: "No. You can start building your resume immediately without signing up. If you want to save your resume and access it from any device, you can optionally sign in with your GitHub account — it takes 5 seconds." },
  { q: "How do I download my resume as a PDF?", a: "Once you're happy with your resume, click the 'Export PDF' button at the top of the builder. Your resume will be generated and downloaded instantly as a pixel-perfect, print-ready PDF file." },
  { q: "Can I change templates after building my resume?", a: "Yes! You can switch between our four templates (Classic, Modern, Executive, and Minimal) at any time from the template selector in the builder sidebar. Your content is preserved when you switch templates." },
  { q: "What makes a good resume in 2026?", a: "A strong 2026 resume is ATS-compatible, one page for most professionals, uses powerful action verbs with quantifiable achievements, includes a tailored professional summary, and is customized for each specific job application. Read our Career Hub for detailed guides on each of these topics." },
  { q: "How long should my resume be?", a: "For most professionals with under 10 years of experience, one page is the gold standard. Senior professionals with 10+ years of directly relevant experience can justify two pages. Our builder is optimized for one-page A4 format." },
  { q: "What file format should I submit — PDF or Word?", a: "Always submit a PDF unless the job posting specifically requests a .docx file. PDF guarantees your formatting stays intact on any device or operating system, while Word files can render differently depending on the recipient's software version." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="container" style={{ minHeight: 'calc(100dvh - 60px)' }}>
        <main className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          {/* Hero */}
          <div className="animate-fade-in-up" style={{ maxWidth: '680px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', padding: '0.35rem 1rem', borderRadius: '100px', background: 'var(--accent-glow)', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(59,130,246,0.2)' }}>
              ✨ 100% Free — No Account Required
            </span>
            <h1 className="hero-title">
              Build a Professional Resume<br />That Gets You Hired
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto' }}>
              Create ATS-friendly resumes with live preview, one-click PDF export, and 4 premium templates — completely free.
            </p>
          </div>

          <div className="hero-cta">
            <Link href="/builder" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              Build My Resume Free
              <ArrowRight size={18} />
            </Link>
            <Link href="/blog" className="btn btn-secondary">
              Career Guides
            </Link>
          </div>

          {/* Stats */}
          <div className="stats-bar">
            <div className="stat-item"><div className="stat-number">50K+</div><div className="stat-label">Resumes Created</div></div>
            <div className="stat-item"><div className="stat-number">95%</div><div className="stat-label">ATS Pass Rate</div></div>
            <div className="stat-item"><div className="stat-number">4.9★</div><div className="stat-label">User Rating</div></div>
            <div className="stat-item"><div className="stat-number">Free</div><div className="stat-label">Always</div></div>
          </div>

          <AdPlacement slot="home-hero-bottom" format="horizontal" />

          {/* How It Works */}
          <div style={{ width: '100%', marginTop: '2rem', textAlign: 'center' }}>
            <h2 className="hero-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.5rem' }}>Ready in 3 Simple Steps</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0' }}>No design skills required. No credit card. No catch.</p>
            <div className="steps-grid">
              <div className="step-card glass-panel">
                <div className="step-number">1</div>
                <div className="step-title">Fill In Your Details</div>
                <p className="step-desc">Enter your name and watch your resume update in real-time. Add experience, education, and skills with our guided form.</p>
              </div>
              <div className="step-card glass-panel">
                <div className="step-number">2</div>
                <div className="step-title">Choose Your Template</div>
                <p className="step-desc">Pick from Classic, Modern, Executive, or Minimal — all designed to pass ATS filters and impress hiring managers.</p>
              </div>
              <div className="step-card glass-panel">
                <div className="step-number">3</div>
                <div className="step-title">Download as PDF</div>
                <p className="step-desc">Export a pixel-perfect, print-ready PDF instantly. Apply to jobs confidently with a resume that works.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="features-grid" style={{ textAlign: 'left', width: '100%', marginTop: '3rem' }}>
            <div className="glass-panel">
              <Layout size={28} color="#60a5fa" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>4 Premium Templates</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Classic, Modern, Executive, and Minimal — each crafted to catch a recruiter's eye and pass ATS filters.</p>
            </div>
            <div className="glass-panel">
              <TrendingUp size={28} color="#34d399" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>ATS-Optimized</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Clean structure with no tables or text boxes. Every template is engineered to pass the automated filters used by 98% of Fortune 500 companies.</p>
            </div>
            <div className="glass-panel">
              <Zap size={28} color="#fbbf24" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Live Preview</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Type your name and watch it appear on your resume instantly. The split-view builder updates in real-time with every keystroke.</p>
            </div>
            <div className="glass-panel">
              <FileText size={28} color="#f472b6" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>One-Click PDF Export</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Download a professional, print-ready PDF with a single click. No watermarks, no limits.</p>
            </div>
            <div className="glass-panel">
              <Shield size={28} color="#a78bfa" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Cloud Save</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sign in with GitHub to save your resume to the cloud. Access and edit it from any device, anytime.</p>
            </div>
            <div className="glass-panel">
              <Users size={28} color="#fb923c" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Career Hub</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Access 6+ in-depth career guides covering resumes, cover letters, interviews, and salary negotiation.</p>
            </div>
          </div>

          <AdPlacement slot="home-mid" format="horizontal" />

          {/* What Makes a Great Resume */}
          <div style={{ width: '100%', maxWidth: '800px', textAlign: 'left', marginTop: '2rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-light)', marginBottom: '2rem' }}>
              What Makes a Great Resume in 2026?
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
              In today's job market, your resume has two jobs: pass the machine (ATS) and impress the human. These goals aren't always compatible — which is why so many qualified candidates get rejected before a recruiter ever sees their application. Our builder is engineered to solve both problems simultaneously.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                ["ATS-Compatible Structure", "No tables, text boxes, or multi-column layouts that confuse automated parsers."],
                ["Keyword-Rich Content", "Mirror the exact language from the job description. Our Career Hub shows you how."],
                ["Quantified Achievements", "Replace vague duties with specific results. Numbers win interviews."],
                ["Clean, Scannable Format", "Recruiters spend 6 seconds on a first pass. Make every second count."],
                ["Tailored for Each Role", "A generic resume gets generic results. Customize for every application."],
              ].map(([title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} color="var(--success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '0.25rem' }}>{title}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ width: '100%', maxWidth: '800px', marginTop: '3rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-light)', marginBottom: '2rem' }}>
              Frequently Asked Questions
            </h2>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-question" style={{ cursor: 'default' }}>
                    <span>{faq.q}</span>
                  </div>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/builder" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              Start Building for Free
              <ArrowRight size={18} />
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem' }}>No sign-up required. Export PDF in minutes.</p>
          </div>

          <AdPlacement slot="home-bottom" format="horizontal" />
        </main>
      </div>
    </>
  );
}
