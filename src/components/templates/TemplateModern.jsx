"use client";

// Template: Modern — Colored sidebar with two-column layout
export default function TemplateModern({ data }) {
  return (
    <div className="a4-page" id="resume-preview-content" style={{ padding: 0, display: 'flex', minHeight: '297mm' }}>
      {/* Sidebar */}
      <div style={{ width: '35%', background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)', color: 'white', padding: '28px 20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Name */}
        <div style={{ textAlign: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
            {(data.personal.name || 'U').split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <h1 style={{ fontSize: '18px', margin: '0 0 4px 0', fontWeight: '700', letterSpacing: '0.5px' }}>{data.personal.name || 'Your Name'}</h1>
          <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500', margin: 0 }}>{data.personal.title}</p>
        </div>

        {/* Contact */}
        <div>
          <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#60a5fa', marginBottom: '10px', fontWeight: '700' }}>Contact</h2>
          <div style={{ fontSize: '11px', lineHeight: '2', color: '#cbd5e1' }}>
            {data.personal.email && <div>📧 {data.personal.email}</div>}
            {data.personal.phone && <div>📱 {data.personal.phone}</div>}
            {data.personal.location && <div>📍 {data.personal.location}</div>}
            {data.personal.website && <div>🔗 {data.personal.website}</div>}
          </div>
        </div>

        {/* Skills */}
        {data.skills && (
          <div>
            <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#60a5fa', marginBottom: '10px', fontWeight: '700' }}>Skills</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {data.skills.split(',').map((skill, i) => (
                <div key={i} style={{ fontSize: '11px', padding: '4px 8px', background: 'rgba(96, 165, 250, 0.1)', borderRadius: '4px', color: '#e2e8f0', borderLeft: '2px solid #3b82f6' }}>
                  {skill.trim()}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        <div>
          <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#60a5fa', marginBottom: '10px', fontWeight: '700' }}>Education</h2>
          {data.education.map(edu => (
            <div key={edu.id} style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: '#f1f5f9' }}>{edu.degree}</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>{edu.school}</div>
              <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>{edu.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '28px 24px' }}>
        {data.summary && (
          <section style={{ marginBottom: '26px' }}>
            <h2 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#1e293b', letterSpacing: '1.5px', marginBottom: '10px', fontWeight: '700', paddingBottom: '6px', borderBottom: '2px solid #3b82f6' }}>Profile</h2>
            <p style={{ fontSize: '12px', lineHeight: '1.7', color: '#475569' }}>{data.summary}</p>
          </section>
        )}

        <section>
          <h2 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#1e293b', letterSpacing: '1.5px', marginBottom: '14px', fontWeight: '700', paddingBottom: '6px', borderBottom: '2px solid #3b82f6' }}>Experience</h2>
          {data.experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '18px', paddingLeft: '14px', borderLeft: '2px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '13px', margin: '0 0 2px 0', fontWeight: '700', color: '#1e293b' }}>{exp.role}</h3>
              <div style={{ fontSize: '12px', color: '#3b82f6', fontWeight: '600', marginBottom: '2px' }}>{exp.company}</div>
              <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '6px', fontWeight: '500' }}>{exp.date}</div>
              <p style={{ fontSize: '11px', lineHeight: '1.6', color: '#475569', margin: 0 }}>{exp.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
