import Link from "next/link";
import { ArrowRight, FileText, Layout, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="container" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <main className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        <h1 className="hero-title">
          The Last Resume Builder<br />You'll Ever Need.
        </h1>
        <p className="hero-subtitle">
          Create professional, beautifully designed resumes in minutes. Instant live preview, effortless exporting, and templates proven to beat ATS systems.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Link href="/builder" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Build My Resume Free
            <ArrowRight size={20} />
          </Link>
          <Link href="/blog" className="btn" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
            Read Career Guides
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '6rem', textAlign: 'left' }}>
          <div className="glass-panel">
            <Layout size={32} color="#60a5fa" className="mb-4" />
            <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>Stunning Templates</h3>
            <p style={{ color: 'var(--text-muted)' }}>Choose from dozens of premium, expertly crafted templates designed to catch a recruiter's eye.</p>
          </div>
          <div className="glass-panel">
            <TrendingUp size={32} color="#34d399" className="mb-4" />
            <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>Programmatic SEO</h3>
            <p style={{ color: 'var(--text-muted)' }}>Browse thousands of job-specific templates tailored with the exact skills needed for your industry.</p>
          </div>
          <div className="glass-panel">
            <FileText size={32} color="#f472b6" className="mb-4" />
            <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>Instant Export</h3>
            <p style={{ color: 'var(--text-muted)' }}>See your changes in real-time with our split-view editor and download a pixel-perfect PDF instantly.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
