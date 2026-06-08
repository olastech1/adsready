"use client";

// Template: Minimal — Ultra-clean with generous whitespace
export default function TemplateMinimal({ data }) {
  return (
    <div className="a4-page" id="resume-preview-content" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", padding: '24mm 22mm' }}>
      <header style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '36px', margin: '0', fontWeight: '300', color: '#111', letterSpacing: '-0.5px' }}>{data.personal.name || 'Your Name'}</h1>
        <p style={{ fontSize: '15px', color: '#888', fontWeight: '400', margin: '4px 0 16px 0' }}>{data.personal.title}</p>
        <div style={{ display: 'flex', gap: '20px', fontSize: '11px', color: '#999', flexWrap: 'wrap' }}>
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>{data.personal.phone}</span>}
          {data.personal.location && <span>{data.personal.location}</span>}
          {data.personal.website && <span>{data.personal.website}</span>}
        </div>
      </header>

      {data.summary && (
        <section style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', lineHeight: '1.9', color: '#555', borderLeft: '2px solid #ddd', paddingLeft: '16px', margin: 0 }}>{data.summary}</p>
        </section>
      )}

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '3px', color: '#aaa', marginBottom: '18px', fontWeight: '600' }}>Experience</h2>
        {data.experience.map(exp => (
          <div key={exp.id} style={{ marginBottom: '22px' }}>
            <div style={{ marginBottom: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#222' }}>{exp.role}</span>
              <span style={{ fontSize: '12px', color: '#aaa', marginLeft: '8px' }}>{exp.date}</span>
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '6px' }}>{exp.company}</div>
            <p style={{ fontSize: '11.5px', lineHeight: '1.7', color: '#555', margin: 0 }}>{exp.description}</p>
          </div>
        ))}
      </section>

      <div style={{ display: 'flex', gap: '48px' }}>
        <section style={{ flex: 1 }}>
          <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '3px', color: '#aaa', marginBottom: '14px', fontWeight: '600' }}>Education</h2>
          {data.education.map(edu => (
            <div key={edu.id} style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#222' }}>{edu.degree}</div>
              <div style={{ fontSize: '11px', color: '#888' }}>{edu.school} · {edu.date}</div>
            </div>
          ))}
        </section>

        {data.skills && (
          <section style={{ flex: 1 }}>
            <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '3px', color: '#aaa', marginBottom: '14px', fontWeight: '600' }}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {data.skills.split(',').map((skill, i) => (
                <span key={i} style={{ fontSize: '11px', color: '#555' }}>
                  {skill.trim()}{i < data.skills.split(',').length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
