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
          <div className="features-grid" style={{ textAlign: 'left', width: '100%' }}>
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
        </main>
      </div>

      {/* Ad placement between sections */}
      <AdPlacement slot="home-bottom" format="horizontal" />
    </div>
  );
}
