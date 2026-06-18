import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import AdPlacement from "@/components/AdPlacement";

export const metadata = {
  title: "The Perfect Cover Letter Formula | Olaniyi Careers",
  description: "A step-by-step breakdown of the cover letter structure that hiring managers actually want to read. Includes templates and common mistakes to avoid.",
};

export default function ArticlePage() {
  return (
    <div className="content-page" style={{ maxWidth: '750px' }}>
      <Link href="/blog" className="card-link" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
        <ArrowLeft size={16} /> Back to Career Hub
      </Link>

      <Image src="/images/blog/cover-letter.png" alt="Perfect cover letter" width={750} height={420} style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '2rem' }} />

      <span className="card-category">Cover Letters</span>
      <h1 style={{ marginTop: '0.5rem' }}>The Perfect Cover Letter Formula</h1>
      <div className="card-meta" style={{ marginBottom: '2rem' }}><Clock size={14} /> 6 min read · June 18, 2026</div>

      <p>Do cover letters still matter? The short answer is yes. While your resume tells the story of your past, your cover letter tells the story of your future—specifically, your future at the company you are applying to.</p>

      <h2>The Anatomy of a Perfect Cover Letter</h2>
      <p>A successful cover letter doesn't just repeat your resume. It connects the dots between your experience and the company's needs. Follow this four-part formula to craft a compelling narrative.</p>

      <h3>1. The Hook (The Opening)</h3>
      <p>Don't start with "I am writing to apply for..." They know why you're writing. Instead, start with a strong opening statement that shows your enthusiasm for the specific role or company.</p>
      <p><em>Example: "When I saw the Senior Product Designer opening at Acme Corp, I was immediately drawn to your mission of democratizing financial education. Having spent the last four years designing fintech apps that simplify complex data, I know exactly what it takes to build trust with first-time investors."</em></p>

      <AdPlacement slot="article-mid-1" format="horizontal" />

      <h3>2. The Pitch (The Body Paragraphs)</h3>
      <p>Choose two (maximum three) specific achievements from your career that directly address the core requirements of the job description. Tell a brief story for each.</p>
      <ul>
        <li><strong>Focus on impact:</strong> What problem did you solve, how did you solve it, and what were the results?</li>
        <li><strong>Use numbers:</strong> Quantify your achievements to add credibility.</li>
        <li><strong>Connect it back:</strong> Explicitly state how this experience will help you succeed in the new role.</li>
      </ul>

      <h3>3. The Cultural Fit (The "Why You" Paragraph)</h3>
      <p>Companies want to hire people who actually want to work for them, not just people who need a job. Show that you've done your research. Mention a recent product launch, a company value that resonates with you, or a challenge you know they are facing.</p>

      <AdPlacement slot="article-mid-2" format="rectangle" />

      <h3>4. The Call to Action (The Closing)</h3>
      <p>End with a confident, forward-looking closing statement. Reiterate your enthusiasm and express your desire to discuss the role further.</p>
      <p><em>Example: "I am confident that my background in scaling distributed systems makes me an ideal fit for your engineering team. I would welcome the opportunity to discuss how I can contribute to Acme Corp's upcoming Q3 launch."</em></p>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li><strong>Too long:</strong> Keep it under one page. Around 250-350 words is the sweet spot.</li>
        <li><strong>Generic templates:</strong> Hiring managers can spot a copy-pasted cover letter from a mile away. Customize every single one.</li>
        <li><strong>Focusing on what the company can do for you:</strong> A cover letter is about what you can do for the company. Focus on the value you bring, not the skills you hope to learn.</li>
        <li><strong>Addressing it to "To Whom It May Concern":</strong> Always try to find the hiring manager's name. If you can't, use "Dear Hiring Team" or "Dear [Department] Manager."</li>
      </ul>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <Link href="/builder" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>Build Your Resume First →</Link>
      </div>

      <AdPlacement slot="article-bottom" format="horizontal" />
    </div>
  );
}
