import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Career Hub & Resume Tips | ResumeGenius Pro",
  description: "Read our latest articles on how to craft the perfect resume, beat ATS systems, and land your dream job.",
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "How to Write a Resume with No Experience",
      excerpt: "Recent graduate or changing careers? Here is exactly how to structure your resume to highlight your potential rather than your past.",
      readTime: "5 min read",
      category: "Resume Tips"
    },
    {
      id: 2,
      title: "Formatting a Resume to Beat ATS Systems",
      excerpt: "Over 70% of resumes are rejected by Applicant Tracking Systems before a human even sees them. Here is how to make sure yours gets through.",
      readTime: "8 min read",
      category: "Job Search"
    },
    {
      id: 3,
      title: "Action Verbs for Tech Resumes in 2026",
      excerpt: "Stop using 'Responsible for'. Instead, use these 50 action verbs that show impact, scale, and leadership in the tech industry.",
      readTime: "4 min read",
      category: "Content"
    }
  ];

  return (
    <div className="container">
      <main className="section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>Career Hub</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>
            Expert advice, resume tips, and industry secrets to help you land the job you deserve.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {posts.map(post => (
            <div key={post.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: '600', marginBottom: '0.5rem' }}>
                {post.category}
              </span>
              <h2 className="mb-2" style={{ fontSize: '1.5rem', color: 'var(--text-light)', lineHeight: '1.3' }}>
                {post.title}
              </h2>
              <p className="mb-6" style={{ color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>
                {post.excerpt}
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <Clock size={16} />
                  {post.readTime}
                </span>
                <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: '500' }}>
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
