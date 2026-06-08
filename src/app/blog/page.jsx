import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import AdPlacement from "@/components/AdPlacement";

export const metadata = {
  title: "Career Hub & Resume Tips | ResumeGenius Pro",
  description: "Read our latest articles on how to craft the perfect resume, beat ATS systems, negotiate your salary, and land your dream job. Expert career advice and actionable tips.",
};

const posts = [
  {
    id: 1,
    slug: "/blog/resume-no-experience",
    title: "How to Write a Resume with No Experience",
    excerpt: "Recent graduate or changing careers? Here is exactly how to structure your resume to highlight your potential. We cover transferable skills, volunteer work, academic projects, and formatting strategies.",
    readTime: "5 min read",
    category: "Resume Tips",
    image: "/images/blog/no-experience.png",
  },
  {
    id: 2,
    slug: "/blog/beat-ats-systems",
    title: "How to Format Your Resume to Beat ATS Systems in 2026",
    excerpt: "Over 98% of Fortune 500 companies use Applicant Tracking Systems. Learn the exact formatting rules, keyword strategies, and file format choices that get your resume past automated filters.",
    readTime: "8 min read",
    category: "Job Search",
    image: "/images/blog/ats-systems.png",
  },
  {
    id: 3,
    slug: "/blog/action-verbs-tech-resumes",
    title: "50 Action Verbs for Tech Resumes in 2026",
    excerpt: "Stop using 'Responsible for.' Instead, use these 50 powerful action verbs categorized by leadership, technical achievement, problem-solving, and impact — each with real-world examples.",
    readTime: "4 min read",
    category: "Content",
    image: "/images/blog/action-verbs.png",
  },
  {
    id: 4,
    slug: "#",
    title: "The Perfect Cover Letter Formula",
    excerpt: "A step-by-step breakdown of the cover letter structure that hiring managers actually want to read. Includes templates for every industry and career level, plus common mistakes to avoid.",
    readTime: "6 min read",
    category: "Cover Letters",
    image: "/images/blog/cover-letter.png",
  },
  {
    id: 5,
    slug: "#",
    title: "Remote Job Interview Tips for 2026",
    excerpt: "Master the art of virtual interviews with our comprehensive guide to camera setup, body language, answering behavioral questions, and follow-up strategies that set you apart.",
    readTime: "7 min read",
    category: "Interviews",
    image: "/images/blog/remote-interview.png",
  },
  {
    id: 6,
    slug: "#",
    title: "How to Negotiate Your Salary Like a Pro",
    excerpt: "Data-driven strategies for salary negotiation that actually work. Learn when to negotiate, what to say, how to handle counteroffers, and the exact scripts that get results.",
    readTime: "9 min read",
    category: "Career Growth",
    image: "/images/blog/salary-negotiation.png",
  },
];

export default function BlogPage() {
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
            <Link
              key={post.id}
              href={post.slug}
              className="glass-panel card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={225}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                }}
              />
              <span className="card-category">{post.category}</span>
              <h2 className="card-title">{post.title}</h2>
              <p className="card-excerpt">{post.excerpt}</p>
              <div className="card-footer">
                <span className="card-meta">
                  <Clock size={14} />
                  {post.readTime}
                </span>
                <span className="card-link">
                  Read Article
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <AdPlacement slot="blog-bottom" format="horizontal" />
      </main>
    </div>
  );
}
