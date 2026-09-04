import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Wrench, CheckCircle, Zap } from "lucide-react";
import AdPlacement from "@/components/AdPlacement";

export const metadata = {
  title: "Free Career Tools & Resources for Job Seekers",
  description: "A curated collection of free career tools, resume resources, salary databases, job boards, and skill-building platforms to help you land your next job.",
};

const tools = [
  {
    category: "Resume & CV",
    badge: "Free",
    items: [
      { name: "Resume Builder", desc: "Build and download a professional, ATS-ready resume in minutes with live preview and PDF export.", link: "/builder", cta: "Open Builder" },
      { name: "Resume Templates", desc: "Browse 4 premium templates — Classic, Modern, Executive, and Minimal — optimized for every industry.", link: "/builder", cta: "View Templates" },
      { name: "ATS Checker Guide", desc: "Learn exactly how ATS systems parse resumes and how to format yours to pass every automated filter.", link: "/blog/beat-ats-systems", cta: "Read Guide" },
    ]
  },
  {
    category: "Career Guides",
    badge: "Articles",
    items: [
      { name: "Resume with No Experience", desc: "A complete guide to writing a strong resume when you are just starting out or changing careers.", link: "/blog/resume-no-experience", cta: "Read Guide" },
      { name: "50 Action Verbs for Tech", desc: "Stop using 'Responsible for.' Use these 50 powerful verbs to make your bullet points stand out.", link: "/blog/action-verbs-tech-resumes", cta: "Read Guide" },
      { name: "Cover Letter Formula", desc: "The exact cover letter structure that hiring managers want to read, with templates for every level.", link: "/blog/perfect-cover-letter", cta: "Read Guide" },
      { name: "Salary Negotiation Scripts", desc: "Data-driven scripts and strategies for negotiating your salary — including the counter-offer script.", link: "/blog/salary-negotiation", cta: "Read Guide" },
      { name: "Remote Interview Tips", desc: "Master camera setup, body language, and follow-up strategies to ace virtual interviews.", link: "/blog/remote-interview-tips", cta: "Read Guide" },
    ]
  },
  {
    category: "External Resources",
    badge: "3rd Party",
    items: [
      { name: "LinkedIn", desc: "The world's largest professional network. Essential for job searching, networking, and showcasing your resume.", link: "https://linkedin.com", cta: "Visit" },
      { name: "Glassdoor", desc: "Research company salaries, reviews, and interview questions before you apply.", link: "https://glassdoor.com", cta: "Visit" },
      { name: "Indeed", desc: "Search millions of job listings across every industry and location.", link: "https://indeed.com", cta: "Visit" },
      { name: "Coursera", desc: "Build in-demand skills with free and paid online courses from top universities.", link: "https://coursera.org", cta: "Visit" },
      { name: "Levels.fyi", desc: "Compare real compensation (salary + equity + bonus) at tech companies.", link: "https://levels.fyi", cta: "Visit" },
    ]
  }
];

export default function ToolsPage() {
  return (
    <div className="container">
      <main className="section">
        <div className="page-header">
          <span style={{ display: 'inline-block', padding: '0.35rem 1rem', borderRadius: '100px', background: 'var(--accent-glow)', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem', border: '1px solid rgba(59,130,246,0.2)' }}>
            Free Resources
          </span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Career Tools & Resources</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
            Everything you need to find your next job, negotiate your salary, and advance your career — curated and free.
          </p>
        </div>

        <AdPlacement slot="tools-top" format="horizontal" />

        <div className="content-page" style={{ margin: '0 auto', maxWidth: '900px' }}>
          <p>
            The modern job search requires more than just a great resume. You need the right tools, the right information, and the right strategy. Below is our curated collection of resources — from our own free resume builder to the best external platforms for job searching, salary research, and skill development.
          </p>
          <p>
            All Olaniyi Careers tools are completely free. External resources are third-party platforms we recommend based on their quality and usefulness for job seekers. We are not sponsored by any of the external platforms listed below.
          </p>
        </div>

        {tools.map((section) => (
          <div key={section.category} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--glass-border)' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-light)' }}>{section.category}</h2>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '100px', background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid rgba(59,130,246,0.2)' }}>{section.badge}</span>
            </div>
            <div className="tools-grid">
              {section.items.map((tool) => (
                <div key={tool.name} className="glass-panel tool-card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-light)' }}>{tool.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.65', flex: 1 }}>{tool.desc}</p>
                  <Link
                    href={tool.link}
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: '0.5rem', justifyContent: 'flex-start' }}
                    target={tool.link.startsWith('http') ? '_blank' : undefined}
                    rel={tool.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {tool.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
            <AdPlacement slot={`tools-${section.category.toLowerCase().replace(' & ', '-')}`} format="horizontal" />
          </div>
        ))}

        <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem', marginTop: '2rem' }}>
          <Zap size={40} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Ready to Build Your Resume?</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: '1.7' }}>
            Use everything in our Career Hub to craft the perfect application — then bring it all together in our free resume builder.
          </p>
          <Link href="/builder" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
            Open Free Resume Builder <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  );
}
