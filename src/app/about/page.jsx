import Link from "next/link";
import { Target, Users, Shield, Zap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | ResumeGenius Pro",
  description: "Learn about ResumeGenius Pro — our mission to help job seekers create professional resumes and land their dream jobs with powerful, free tools.",
};

export default function AboutPage() {
  return (
    <div className="content-page">
      <h1>About ResumeGenius Pro</h1>
      <p className="page-date">Our Mission & Story</p>

      <p>
        ResumeGenius Pro was founded with a simple belief: everyone deserves access to professional-quality 
        resume tools, regardless of their budget. In a job market where first impressions are made in 
        six seconds, your resume needs to be flawless — and that should not come with a price tag.
      </p>

      <p>
        We built ResumeGenius Pro as a free, no-strings-attached resume builder that combines the power 
        of modern web technology with expert career knowledge. Our split-view editor gives you instant 
        visual feedback as you type, and our one-click PDF export produces print-ready documents that 
        are optimized to pass Applicant Tracking Systems (ATS).
      </p>

      <h2>What Makes Us Different</h2>

      <div className="about-features">
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
          <Target size={36} color="#60a5fa" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', marginTop: 0 }}>ATS-Optimized</h3>
          <p style={{ fontSize: '0.9rem', margin: 0 }}>
            Every template is built to pass automated screening systems used by Fortune 500 companies.
          </p>
        </div>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
          <Zap size={36} color="#fbbf24" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', marginTop: 0 }}>Instant Preview</h3>
          <p style={{ fontSize: '0.9rem', margin: 0 }}>
            See changes in real-time as you type. No waiting, no page reloads — just instant results.
          </p>
        </div>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
          <Shield size={36} color="#34d399" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', marginTop: 0 }}>Privacy First</h3>
          <p style={{ fontSize: '0.9rem', margin: 0 }}>
            Your data stays yours. We never sell personal information or share it with third parties.
          </p>
        </div>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
          <Users size={36} color="#f472b6" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', marginTop: 0 }}>Expert Content</h3>
          <p style={{ fontSize: '0.9rem', margin: 0 }}>
            Our Career Hub is curated by hiring managers and recruiters with decades of experience.
          </p>
        </div>
      </div>

      <h2>Our Commitment</h2>
      <p>
        We are committed to keeping the core resume builder free forever. We sustain our platform 
        through non-intrusive advertising, which allows us to continue improving our tools and 
        producing high-quality career content for millions of job seekers worldwide.
      </p>
      <p>
        Whether you are a recent graduate writing your first resume, a seasoned professional updating 
        your career profile, or someone making a bold career change — ResumeGenius Pro is here to 
        help you put your best foot forward.
      </p>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link href="/builder" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
          Start Building Your Resume
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
