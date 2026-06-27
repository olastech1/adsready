import Link from "next/link";
import { ArrowRight, FileText, Layout, TrendingUp, Zap, Shield, Users } from "lucide-react";
import AdPlacement from "@/components/AdPlacement";

export const metadata = {
  title: "Olaniyi Careers — Build Professional Resumes in Minutes",
  description: "Create stunning, ATS-friendly resumes with our free online resume builder. Instant live preview, one-click PDF export, and expert career guides.",
};

export default function Home() {
  return (
    <div>
      <div className="container" style={{ minHeight: 'calc(100vh - 56px)' }}>
        <main className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', minHeight: '75vh' }}>
          <div className="animate-fade-in-up">
            <span style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '100px', background: 'var(--accent-glow)', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(59,130,246,0.2)' }}>
              ✨ Free Professional Resume Builder
            </span>
            <h1 className="hero-title">
              The Last Resume Builder<br />You&apos;ll Ever Need.
            </h1>
            <p className="hero-subtitle" style={{ margin: '0 auto 0' }}>
              Create professional, beautifully designed resumes in minutes. Instant live preview, 
              effortless exporting, and templates proven to beat ATS systems.
            </p>
          </div>

          <div className="hero-cta">
            <Link href="/builder" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Build My Resume Free
              <ArrowRight size={20} />
            </Link>
            <Link href="/blog" className="btn btn-secondary">
              Read Career Guides
            </Link>
          </div>

          {/* Stats */}
          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Resumes Created</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">ATS Pass Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">User Rating</div>
            </div>
          </div>

          {/* Features */}
          <div className="features-grid" style={{ textAlign: 'left', width: '100%', marginBottom: '4rem' }}>
            <div className="glass-panel">
              <Layout size={32} color="#60a5fa" style={{ marginBottom: '1rem' }} />
              <h3 className="mb-2" style={{ fontSize: '1.15rem' }}>Stunning Templates</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Choose from premium, expertly crafted templates designed to catch a recruiter&apos;s eye and pass ATS filters.</p>
            </div>
            <div className="glass-panel">
              <TrendingUp size={32} color="#34d399" style={{ marginBottom: '1rem' }} />
              <h3 className="mb-2" style={{ fontSize: '1.15rem' }}>Industry-Specific</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Browse job-specific templates tailored with the exact skills and keywords needed for your industry.</p>
            </div>
            <div className="glass-panel">
              <FileText size={32} color="#f472b6" style={{ marginBottom: '1rem' }} />
              <h3 className="mb-2" style={{ fontSize: '1.15rem' }}>Instant PDF Export</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>See your changes in real-time with our split-view editor and download a pixel-perfect PDF instantly.</p>
            </div>
            <div className="glass-panel">
              <Zap size={32} color="#fbbf24" style={{ marginBottom: '1rem' }} />
              <h3 className="mb-2" style={{ fontSize: '1.15rem' }}>Lightning Fast</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>No sign-up required to start building. Type your name and watch it appear on your resume preview instantly.</p>
            </div>
            <div className="glass-panel">
              <Shield size={32} color="#a78bfa" style={{ marginBottom: '1rem' }} />
              <h3 className="mb-2" style={{ fontSize: '1.15rem' }}>Cloud Save</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Sign in to securely save your resume to the cloud. Access it from any device, anytime, anywhere.</p>
            </div>
            <div className="glass-panel">
              <Users size={32} color="#fb923c" style={{ marginBottom: '1rem' }} />
              <h3 className="mb-2" style={{ fontSize: '1.15rem' }}>Career Hub</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Access expert career guides, resume tips, and action verb lists curated by hiring professionals.</p>
            </div>
          </div>

          {/* SEO Content Section for AdSense Compliance */}
          <div className="seo-content" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            <h2 style={{ color: 'var(--text-light)', fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>How to Build a Professional Resume in 2026</h2>
            
            <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
              In today&apos;s highly competitive job market, your resume is often your only chance to make a first impression. Did you know that recruiters spend an average of just 6 seconds scanning a resume before deciding whether to move forward? That means your resume format, keyword optimization, and overall readability are just as important as your actual work experience. At Olaniyi Careers, we&apos;ve engineered our free resume builder to take the guesswork out of the application process.
            </p>

            <h3 style={{ color: 'var(--text-light)', fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Beat the Applicant Tracking Systems (ATS)</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
              Before a human ever sees your application, it must pass through an Applicant Tracking System (ATS). Over 98% of Fortune 500 companies use these automated scanners to filter out unqualified candidates. If your resume uses complex tables, unconventional fonts, or chaotic layouts, the ATS will fail to parse your information correctly. Our builder uses clean, standardized HTML-to-PDF generation that guarantees your text is machine-readable and properly indexed by every major ATS platform on the market.
            </p>

            <h3 style={{ color: 'var(--text-light)', fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Choose the Right Resume Format</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
              Not all resumes are created equal. If you are a recent graduate, a functional or hybrid resume format that highlights your academic projects and transferable skills is ideal. If you are an experienced professional, a chronological format emphasizing career progression and quantifiable achievements will serve you best. Our builder offers a variety of premium templates—from traditional single-column layouts for conservative industries like finance and law, to modern two-column designs perfect for tech, design, and marketing roles.
            </p>

            <h3 style={{ color: 'var(--text-light)', fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Focus on Actionable Achievements</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
              The biggest mistake job seekers make is listing their daily responsibilities instead of their achievements. Stop writing &quot;responsible for managing a team&quot; and start writing &quot;directed a cross-functional team of 12 to deliver a $2M project under budget.&quot; Utilize our extensive Career Hub resources to find the perfect action verbs, quantify your impact, and craft a compelling professional summary that sets you apart from the competition.
            </p>

            <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
              <Link href="/builder" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                Start Building Now
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Ad placement between sections */}
      <AdPlacement slot="home-bottom" format="horizontal" />
    </div>
  );
}
