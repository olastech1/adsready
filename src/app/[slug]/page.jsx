import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const prisma = new PrismaClient();

// This ensures Next.js statically generates these pages at build time
export async function generateStaticParams() {
  try {
    const jobs = await prisma.jobProfile.findMany({ select: { slug: true } });
    return jobs.map((job) => ({ slug: job.slug }));
  } catch (error) {
    console.error("Database connection failed during build, skipping static param generation.", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;
    const job = await prisma.jobProfile.findUnique({ where: { slug } });
    
    if (!job) return { title: 'Resume Templates' };
    
    return {
      title: `${job.jobTitle} Resume Templates & Builder | Olaniyi Careers`,
      description: `Build the perfect ${job.jobTitle} resume. Discover essential skills, average salary insights, and expert tips to land your next job.`,
    };
  } catch (error) {
    return { title: 'Resume Templates' };
  }
}

export default async function ProgrammaticSEOPage({ params }) {
  const { slug } = await params;
  const job = await prisma.jobProfile.findUnique({ where: { slug } });

  if (!job) {
    notFound();
  }

  const skillsList = job.skills.split(',').map(s => s.trim());

  return (
    <div className="container">
      <main className="section">
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>
            The Ultimate <span style={{ color: 'var(--accent)' }}>{job.jobTitle}</span> Resume Builder
          </h1>
          <p className="hero-subtitle" style={{ margin: '0 auto 2rem auto' }}>
            {job.description}
          </p>
          <Link href="/builder" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Build Your {job.jobTitle} Resume Now
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Content Section (for SEO & Value) */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          <div className="glass-panel">
            <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--text-light)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
              Why this {job.jobTitle} template works
            </h2>
            <p className="mb-6" style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              {job.description} {job.industryTips}
            </p>
            
            <h3 className="mb-4" style={{ fontSize: '1.25rem', color: 'var(--text-light)' }}>Top Skills to Include</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              {skillsList.map((skill, i) => (
                <span key={i} style={{ padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)', borderRadius: '20px', fontSize: '0.875rem', fontWeight: '500' }}>
                  {skill}
                </span>
              ))}
            </div>
            
            <div style={{ background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.2)', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <CheckCircle size={20} />
                Recommended Template
              </h3>
              <p style={{ color: 'var(--text-light)' }}>Based on industry standards, we highly recommend using <strong>{job.templateRecommended}</strong> for this role.</p>
            </div>
          </div>

          <div className="glass-panel" style={{ height: 'fit-content' }}>
            <h3 className="mb-4" style={{ fontSize: '1.25rem', color: 'var(--text-light)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
              Industry Insights
            </h3>
            <div className="mb-6">
              <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Average Salary</span>
              <strong style={{ fontSize: '1.5rem', color: '#f8fafc' }}>{job.salary}</strong>
            </div>
            <div className="mb-6">
              <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Competition Level</span>
              <strong style={{ fontSize: '1.25rem', color: '#f472b6' }}>High</strong>
            </div>
            <Link href="/builder" className="btn btn-primary" style={{ width: '100%' }}>
              Start Building
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
