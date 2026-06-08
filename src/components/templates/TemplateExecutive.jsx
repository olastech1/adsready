"use client";

// Template: Executive — Elegant, serif-inspired with gold accents
export default function TemplateExecutive({ data }) {
  return (
    <div className="a4-page" id="resume-preview-content" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <header style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '30px', margin: '0 0 6px 0', fontWeight: '400', letterSpacing: '4px', textTransform: 'uppercase', color: '#1a1a2e' }}>{data.personal.name || 'Your Name'}</h1>
        <p style={{ fontSize: '14px', color: '#8b7355', fontWeight: '400', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 14px 0' }}>{data.personal.title}</p>
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #8b7355, transparent)', margin: '0 auto 14px', width: '60%' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '11px', color: '#666', flexWrap: 'wrap' }}>
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>|</span>}
          {data.personal.phone && <span>{data.personal.phone}</span>}
          {data.personal.location && <span>|</span>}
          {data.personal.location && <span>{data.personal.location}</span>}
          {data.personal.website && <span>|</span>}
          {data.personal.website && <span>{data.personal.website}</span>}
        </div>
      </header>

      {data.summary && (
        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', color: '#8b7355', marginBottom: '10px', textAlign: 'center', fontWeight: '400' }}>Executive Summary</h2>
          <p style={{ fontSize: '12px', lineHeight: '1.8', color: '#333', textAlign: 'center', fontStyle: 'italic', maxWidth: '90%', margin: '0 auto' }}>{data.summary}</p>
        </section>
      )}

      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #d4c5a9, transparent)', margin: '20px 0' }} />

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', color: '#8b7355', marginBottom: '16px', textAlign: 'center', fontWeight: '400' }}>Professional Experience</h2>
        {data.experience.map(exp => (
          <div key={exp.id} style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <h3 style={{ fontSize: '14px', margin: 0, fontWeight: '700', color: '#1a1a2e' }}>{exp.role}</h3>
              <span style={{ fontSize: '11px', color: '#8b7355', fontWeight: '400', fontStyle: 'italic' }}>{exp.date}</span>
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '6px', fontStyle: 'italic' }}>{exp.company}</div>
            <p style={{ fontSize: '12px', lineHeight: '1.7', color: '#444', margin: 0 }}>{exp.description}</p>
          </div>
        ))}
      </section>

      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #d4c5a9, transparent)', margin: '20px 0' }} />

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', color: '#8b7355', marginBottom: '16px', textAlign: 'center', fontWeight: '400' }}>Education</h2>
        {data.education.map(edu => (
          <div key={edu.id} style={{ marginBottom: '10px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '13px', margin: 0, fontWeight: '700', color: '#1a1a2e' }}>{edu.degree}</h3>
            <div style={{ fontSize: '12px', color: '#666', fontStyle: 'italic' }}>{edu.school} — {edu.date}</div>
          </div>
        ))}
      </section>

      {data.skills && (
        <>
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #d4c5a9, transparent)', margin: '20px 0' }} />
          <section>
            <h2 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', color: '#8b7355', marginBottom: '10px', textAlign: 'center', fontWeight: '400' }}>Core Competencies</h2>
            <p style={{ fontSize: '12px', textAlign: 'center', color: '#444', lineHeight: '1.8' }}>{data.skills}</p>
          </section>
        </>
      )}
    </div>
  );
}
