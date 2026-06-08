"use client";

// Template: Classic — Clean, traditional, single-column layout
export default function TemplateClassic({ data }) {
  return (
    <div className="a4-page" id="resume-preview-content">
      <header style={{ borderBottom: '2px solid #1e293b', paddingBottom: '18px', marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '2px', color: '#1e293b' }}>{data.personal.name || 'Your Name'}</h1>
        <p style={{ fontSize: '16px', margin: '0 0 10px 0', color: '#475569', fontWeight: '500' }}>{data.personal.title}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', fontSize: '12px', color: '#64748b', flexWrap: 'wrap' }}>
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>• {data.personal.phone}</span>}
          {data.personal.location && <span>• {data.personal.location}</span>}
          {data.personal.website && <span>• {data.personal.website}</span>}
        </div>
      </header>

      {data.summary && (
        <section style={{ marginBottom: '22px' }}>
          <h2 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#1e293b', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px', letterSpacing: '1px' }}>Professional Summary</h2>
          <p style={{ fontSize: '12px', lineHeight: '1.7', color: '#334155', textAlign: 'justify' }}>{data.summary}</p>
        </section>
      )}

      <section style={{ marginBottom: '22px' }}>
        <h2 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#1e293b', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '12px', letterSpacing: '1px' }}>Experience</h2>
        {data.experience.map(exp => (
          <div key={exp.id} style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
              <h3 style={{ fontSize: '13px', margin: 0, fontWeight: 'bold', color: '#1e293b' }}>{exp.role}</h3>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '500', flexShrink: 0 }}>{exp.date}</span>
            </div>
            <div style={{ fontSize: '12px', color: '#475569', marginBottom: '4px', fontWeight: '600' }}>{exp.company}</div>
            <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#334155', margin: 0 }}>{exp.description}</p>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: '22px' }}>
        <h2 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#1e293b', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '12px', letterSpacing: '1px' }}>Education</h2>
        {data.education.map(edu => (
          <div key={edu.id} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h3 style={{ fontSize: '13px', margin: 0, fontWeight: 'bold', color: '#1e293b' }}>{edu.school}</h3>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>{edu.date}</span>
            </div>
            <div style={{ fontSize: '12px', color: '#475569' }}>{edu.degree}</div>
          </div>
        ))}
      </section>

      {data.skills && (
        <section>
          <h2 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#1e293b', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', marginBottom: '8px', letterSpacing: '1px' }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {data.skills.split(',').map((skill, i) => (
              <span key={i} style={{ fontSize: '11px', padding: '3px 10px', background: '#f1f5f9', borderRadius: '4px', color: '#334155', fontWeight: '500' }}>{skill.trim()}</span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
