import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import AdPlacement from "@/components/AdPlacement";

export const metadata = {
  title: "Career Hub & Resume Tips | ResumeGenius Pro",
  description: "Read our latest articles on how to craft the perfect resume, beat ATS systems, and land your dream job. Expert career advice and actionable tips.",
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "How to Write a Resume with No Experience",
      excerpt: "Recent graduate or changing careers? Here is exactly how to structure your resume to highlight your potential rather than your past. We cover transferable skills, volunteer work, and academic projects.",
      readTime: "5 min read",
      category: "Resume Tips"
    },
    {
      id: 2,
      title: "Formatting a Resume to Beat ATS Systems in 2026",
      excerpt: "Over 70% of resumes are rejected by Applicant Tracking Systems before a human even sees them. Learn the formatting rules, font choices, and keyword strategies that get your resume through.",
      readTime: "8 min read",
      category: "Job Search"
    },
    {
      id: 3,
      title: "50 Action Verbs for Tech Resumes",
      excerpt: "Stop using 'Responsible for'. Instead, use these 50 powerful action verbs that demonstrate impact, scale, and leadership in the technology industry.",
      readTime: "4 min read",
      category: "Content"
    },
    {
      id: 4,
      title: "The Perfect Cover Letter Formula",
      excerpt: "A step-by-step breakdown of the cover letter structure that hiring managers actually want to read. Includes templates for every industry and career level.",
      readTime: "6 min read",
      category: "Cover Letters"
    },
    {
      id: 5,
      title: "Remote Job Interview Tips for 2026",
      excerpt: "Master the art of virtual interviews with our comprehensive guide to camera setup, body language, common questions, and follow-up strategies.",
      readTime: "7 min read",
      category: "Interviews"
    },
    {
      id: 6,
      title: "How to Negotiate Your Salary Like a Pro",
      excerpt: "Data-driven strategies for salary negotiation that actually work. Learn when to negotiate, what to say, and how to handle counteroffers with confidence.",
      readTime: "9 min read",
      category: "Career Growth"
    }
  ];

  return (
    <div className="container">
      <main className="section">
        <div className="page-header">
          <h1 className="hero-title" style={{ fontSize: '2.75rem' }}>Career Hub</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>
            Expert advice, resume tips, and industry secrets to help you land the job you deserve.
          </p>
        </div>

        <AdPlacement slot="blog-top" format="horizontal" />

        <div className="card-grid">
          {posts.map(post => (
            <div key={post.id} className="glass-panel card">
              <span className="card-category">{post.category}</span>
              <h2 className="card-title">{post.title}</h2>
              <p className="card-excerpt">{post.excerpt}</p>
              <div className="card-footer">
                <span className="card-meta">
                  <Clock size={14} />
                  {post.readTime}
                </span>
                <Link href="#" className="card-link">
                  Read Article
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <AdPlacement slot="blog-bottom" format="horizontal" />
      </main>
    </div>
  );
}
