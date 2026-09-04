import Link from "next/link";
import { ArrowRight, FileText, Shield, Zap, Users, Award, Heart } from "lucide-react";
import AdPlacement from "@/components/AdPlacement";

export const metadata = {
  title: "About Us — Our Mission to Help Job Seekers",
  description: "Learn about Olaniyi Careers — a free resume builder built to help every job seeker create a professional, ATS-ready resume and land their dream job.",
};

export default function AboutPage() {
  return (
    <div className="container">
      <main className="section">
        <div className="page-header">
          <span style={{ display: 'inline-block', padding: '0.35rem 1rem', borderRadius: '100px', background: 'var(--accent-glow)', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem', border: '1px solid rgba(59,130,246,0.2)' }}>
            Our Story
          </span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Helping Every Person Put<br />Their Best Self Forward
          </h1>
          <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
            We believe that a great resume should not be a privilege. Olaniyi Careers was built to give everyone — from first-time job seekers to seasoned executives — the tools to compete at the highest level.
          </p>
        </div>

        <AdPlacement slot="about-top" format="horizontal" />

        <div className="content-page" style={{ margin: '0 auto' }}>
          <h2>Our Mission</h2>
          <p>
            The job application process is broken. Every year, millions of qualified candidates are rejected not because they lack the skills or experience, but because their resume was poorly formatted, keyword-deficient, or invisible to Applicant Tracking Systems (ATS). We built Olaniyi Careers to fix that.
          </p>
          <p>
            Our free resume builder combines professional design with ATS-first engineering. Every template is built on clean, structured HTML that major ATS platforms — Workday, Greenhouse, Lever, iCIMS, and Taleo — can parse correctly. No tables, no text boxes, no exotic fonts. Just a clean, powerful document that gets you past the machines and in front of humans.
          </p>

          <h2>Why We Built This</h2>
          <p>
            The inspiration for Olaniyi Careers came from a frustrating observation: the most expensive resume-writing services and template subscriptions were out of reach for the people who needed them most. Entry-level workers, career changers, and recent graduates were spending \$50–\$200 on services that, frankly, a well-designed free tool could replicate.
          </p>
          <p>
            We set out to build something better. A resume builder that was not just free, but genuinely excellent. One that loaded fast, updated in real-time, exported a professional PDF, and came backed by real career advice written by people who understand what hiring managers actually look for.
          </p>

          <h2>What We Offer</h2>
          <div className="about-features">
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <FileText size={28} color="#60a5fa" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-light)' }}>Live Resume Builder</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>A split-view editor that updates your preview in real-time. What you see is what you get — right down to the pixel.</p>
            </div>
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <Award size={28} color="#34d399" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-light)' }}>4 Professional Templates</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>Classic, Modern, Executive, and Minimal — designed by professionals for real-world hiring processes.</p>
            </div>
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <Shield size={28} color="#a78bfa" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-light)' }}>Privacy First</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>We do not sell your data. Your resume content stays private. Cloud saves are encrypted and tied only to your account.</p>
            </div>
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <Users size={28} color="#fb923c" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-light)' }}>Career Hub</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>In-depth guides on resumes, cover letters, ATS systems, interviews, and salary negotiation written by career professionals.</p>
            </div>
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <Zap size={28} color="#fbbf24" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-light)' }}>Instant PDF Export</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>One-click PDF generation. No watermarks, no subscriptions, no limits. Download and apply in minutes.</p>
            </div>
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <Heart size={28} color="#f472b6" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-light)' }}>Always Free</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>The core builder, all templates, and all career guides are and will always be free. No credit card, no trial period.</p>
            </div>
          </div>

          <h2>Our Commitment to You</h2>
          <p>
            We are committed to keeping the core Olaniyi Careers experience completely free, forever. We sustain the platform through non-intrusive advertising and continue to invest in improving the builder, expanding the template library, and publishing new career guides every month.
          </p>
          <p>
            If you are a first-time job seeker trying to land your first role, a professional making a bold career pivot, or an executive polishing your executive profile — Olaniyi Careers is here to help. Your success is our mission.
          </p>

          <div style={{ textAlign: 'center', margin: '3rem 0' }}>
            <Link href="/builder" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
              Start Building Your Resume
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <AdPlacement slot="about-bottom" format="horizontal" />
      </main>
    </div>
  );
}
