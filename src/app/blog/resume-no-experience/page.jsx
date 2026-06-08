import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import AdPlacement from "@/components/AdPlacement";

export const metadata = {
  title: "How to Write a Resume with No Experience | ResumeGenius Pro",
  description: "Learn how to write a compelling resume when you have no work experience. Covers transferable skills, volunteer work, projects, and formatting strategies.",
};

export default function ArticlePage() {
  return (
    <div className="content-page" style={{ maxWidth: '750px' }}>
      <Link href="/blog" className="card-link" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
        <ArrowLeft size={16} /> Back to Career Hub
      </Link>

      <Image src="/images/blog/no-experience.png" alt="Resume with no experience" width={750} height={420} style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '2rem' }} />

      <span className="card-category">Resume Tips</span>
      <h1 style={{ marginTop: '0.5rem' }}>How to Write a Resume with No Experience</h1>
      <div className="card-meta" style={{ marginBottom: '2rem' }}><Clock size={14} /> 5 min read · June 8, 2026</div>

      <p>Writing a resume when you have little to no professional experience can feel like an impossible catch-22: you need experience to get a job, but you need a job to get experience. The good news is that every professional was once in your shoes, and there are proven strategies to create a resume that showcases your potential rather than your past.</p>

      <h2>1. Lead with a Strong Objective Statement</h2>
      <p>Instead of a professional summary (which highlights past achievements), use an objective statement that focuses on what you bring to the table and what you hope to accomplish. Keep it to two or three sentences maximum.</p>
      <p><strong>Example:</strong> &quot;Motivated computer science graduate with strong problem-solving skills and hands-on experience in Python and JavaScript through academic projects. Seeking a junior developer role where I can contribute to building innovative software solutions while growing my technical expertise.&quot;</p>

      <h2>2. Highlight Your Education Prominently</h2>
      <p>When experience is limited, your education section becomes the star of your resume. Move it above the experience section and include:</p>
      <ul>
        <li><strong>Relevant coursework:</strong> List 4-6 courses directly related to the job you are applying for.</li>
        <li><strong>Academic achievements:</strong> Dean&apos;s list, honors, scholarships, or a strong GPA (3.5+).</li>
        <li><strong>Capstone projects:</strong> Describe significant projects with the same detail you would use for a job — what was the goal, what did you do, and what was the outcome.</li>
        <li><strong>Certifications:</strong> Online courses from platforms like Coursera, Google, or HubSpot show initiative and self-directed learning.</li>
      </ul>

      <AdPlacement slot="article-mid-1" format="horizontal" />

      <h2>3. Leverage Transferable Skills</h2>
      <p>You have more relevant skills than you think. Every job, volunteer role, club, or even personal project has given you transferable skills. Here are the most valued ones across industries:</p>
      <ul>
        <li><strong>Communication:</strong> Have you written reports, given presentations, or led group discussions?</li>
        <li><strong>Leadership:</strong> Were you a team captain, club president, or peer mentor?</li>
        <li><strong>Problem-solving:</strong> Did you troubleshoot issues, resolve customer complaints, or debug code?</li>
        <li><strong>Time management:</strong> Balancing coursework, part-time work, and extracurriculars demonstrates this skill beautifully.</li>
        <li><strong>Technical skills:</strong> Any software, tools, or programming languages you have learned — even self-taught — count.</li>
      </ul>

      <h2>4. Include Volunteer Work and Internships</h2>
      <p>Volunteer work is real work. If you organized a charity event, managed social media for a nonprofit, or tutored students, those experiences demonstrate real-world skills. Format them exactly like paid positions with a title, organization name, dates, and bullet points describing your contributions.</p>
      <p>Even unpaid internships, campus jobs, and freelance work deserve a place on your resume. The key is to describe what you accomplished using action verbs and quantifiable results whenever possible.</p>

      <h2>5. Build a Projects Section</h2>
      <p>This is the secret weapon for entry-level candidates, especially in tech, design, and marketing. Create a dedicated &quot;Projects&quot; section that showcases:</p>
      <ul>
        <li>Personal websites or portfolios you have built</li>
        <li>Open-source contributions on GitHub</li>
        <li>Freelance work, even if it was for friends or family</li>
        <li>Hackathon projects or competition entries</li>
        <li>Blog posts, YouTube tutorials, or social media content you have created</li>
      </ul>

      <AdPlacement slot="article-mid-2" format="rectangle" />

      <h2>6. Format for Maximum Impact</h2>
      <p>When content is limited, formatting becomes even more important. Here are key formatting tips:</p>
      <ul>
        <li><strong>Use a clean, single-column layout:</strong> Avoid complex multi-column designs that may confuse ATS systems.</li>
        <li><strong>Keep it to one page:</strong> With limited experience, a one-page resume is not just acceptable — it is expected.</li>
        <li><strong>Use generous white space:</strong> Do not try to fill space with fluff. A clean, airy layout looks far more professional than a wall of text.</li>
        <li><strong>Choose a professional font:</strong> Inter, Calibri, or Helvetica in 10-12pt size.</li>
        <li><strong>Use bullet points:</strong> Each bullet should start with a strong action verb and include a result when possible.</li>
      </ul>

      <h2>7. Tailor Every Application</h2>
      <p>This is the most important advice regardless of experience level: customize your resume for each job application. Read the job description carefully, identify the key skills and qualifications they are looking for, and mirror that language in your resume. If they mention &quot;collaboration,&quot; use that exact word rather than &quot;teamwork.&quot;</p>
      <p>This is not about lying — it is about presenting your genuine skills and experiences in the language that the hiring manager and their ATS system are looking for.</p>

      <h2>Ready to Build Your Resume?</h2>
      <p>Now that you know what to include, it is time to put it all together. Our free resume builder makes it easy to create a professional, ATS-friendly resume in minutes — no experience required.</p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <Link href="/builder" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>Start Building Your Resume →</Link>
      </div>

      <AdPlacement slot="article-bottom" format="horizontal" />
    </div>
  );
}
