import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import AdPlacement from "@/components/AdPlacement";

export const metadata = {
  title: "How to Negotiate Your Salary Like a Pro | Olaniyi Careers",
  description: "Data-driven strategies for salary negotiation that actually work. Learn when to negotiate, what to say, and the exact scripts that get results.",
};

export default function ArticlePage() {
  return (
    <div className="content-page" style={{ maxWidth: '750px' }}>
      <Link href="/blog" className="card-link" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
        <ArrowLeft size={16} /> Back to Career Hub
      </Link>

      <Image src="/images/blog/salary-negotiation.png" alt="Salary negotiation" width={750} height={420} style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '2rem' }} />

      <span className="card-category">Career Growth</span>
      <h1 style={{ marginTop: '0.5rem' }}>How to Negotiate Your Salary Like a Pro</h1>
      <div className="card-meta" style={{ marginBottom: '2rem' }}><Clock size={14} /> 9 min read · June 18, 2026</div>

      <p>Failing to negotiate your starting salary can cost you hundreds of thousands of dollars over the course of your career. Yet, over 50% of candidates accept the first offer they receive out of fear that negotiating will make them look greedy or result in the offer being pulled.</p>
      <p>Let's debunk that myth immediately: companies expect you to negotiate. In fact, many hiring managers respect candidates who advocate for themselves effectively. Here is how to approach salary negotiation as a collaborative process rather than an adversarial conflict.</p>

      <h2>1. The Pre-Work: Know Your Market Value</h2>
      <p>Negotiation begins long before you receive an offer. You must know the objective market value for your specific role, location, and experience level.</p>
      <ul>
        <li><strong>Use multiple data sources:</strong> Check Glassdoor, Payscale, Levels.fyi (for tech roles), and industry-specific salary reports.</li>
        <li><strong>Talk to recruiters:</strong> Reach out to external recruiters in your industry. They know exactly what companies are currently paying.</li>
        <li><strong>Ask your network:</strong> Reach out to peers in similar roles. You don't have to ask what they make; instead, ask, "What is a competitive salary range for a Senior Marketing Manager in Chicago right now?"</li>
      </ul>

      <AdPlacement slot="article-mid-1" format="horizontal" />

      <h2>2. Handling the "Salary Expectations" Question</h2>
      <p>Recruiters almost always ask for your salary expectations during the initial phone screen. The rule of thumb is: <strong>the first person to name a number loses leverage.</strong></p>
      <p>If asked, try to deflect with a collaborative tone:</p>
      <ul>
        <li><em>"I'm very interested in the role and the team. Before discussing specific numbers, I'd love to learn more about the responsibilities and see if we are a mutual fit. Could you share the approved budget or range for this position?"</em></li>
      </ul>
      <p>If they insist on a number, provide a wide range based on your research, and always add a caveat: <em>"Based on my market research, I'm looking at roles in the $110K to $130K range, depending on the full compensation package, including equity, bonuses, and benefits."</em></p>

      <h2>3. Evaluating the Offer</h2>
      <p>When the offer finally comes, express enthusiasm and gratitude, but <strong>do not accept it on the spot.</strong></p>
      <p>Say: <em>"Thank you so much! I'm incredibly excited about this opportunity. I'd like to take a day or two to review the full details of the offer. When do you need a final answer?"</em></p>
      <p>Evaluate the entire package, not just the base salary. Consider the sign-on bonus, annual bonus, equity/stock options, 401(k) match, PTO, healthcare premiums, and remote work flexibility.</p>

      <AdPlacement slot="article-mid-2" format="rectangle" />

      <h2>4. The Counter-Offer Script</h2>
      <p>When you are ready to negotiate, do it over the phone or video call if possible, as tone is easily misinterpreted in email. Always ground your request in data and the value you bring to the company, not your personal financial needs.</p>
      <p><strong>The Script:</strong></p>
      <p><em>"I am so excited about the opportunity to join the team, and I really appreciate the offer. I've reviewed the package, and while the benefits look great, the base salary is a bit lower than I was anticipating based on my research and the specific skills I bring—particularly my experience leading enterprise migrations, which we discussed during the interview."</em></p>
      <p><em>"If we can bring the base salary up to [Target Number], I would be thrilled to sign the offer today."</em></p>

      <h2>5. Negotiating Beyond Base Salary</h2>
      <p>Sometimes, a company truly cannot increase the base salary due to rigid internal bands. If they say no, pivot to negotiating other forms of compensation that are often more flexible:</p>
      <ul>
        <li><strong>Sign-on bonus:</strong> This is a one-time cost for the company and is often much easier to get approved than a permanent base salary increase.</li>
        <li><strong>Extra PTO:</strong> Ask for an additional week of vacation.</li>
        <li><strong>Early performance review:</strong> Ask for a guaranteed performance and salary review at the 6-month mark instead of waiting a full year.</li>
        <li><strong>Equity/Stock:</strong> Ask for more shares or options.</li>
      </ul>

      <h2>The Mindset Shift</h2>
      <p>Remember, the negotiation phase is the exact moment when the company wants you the most. They have spent weeks interviewing candidates and have chosen you. They want you to say yes. Approach the conversation respectfully, confidently, and collaboratively, and you will almost certainly walk away with a better package.</p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <Link href="/builder" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>Update Your Resume for Your Next Raise →</Link>
      </div>

      <AdPlacement slot="article-bottom" format="horizontal" />
    </div>
  );
}
