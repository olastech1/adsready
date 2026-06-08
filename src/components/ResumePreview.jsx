"use client";

export default function ResumePreview({ data }) {
  return (
    <div className="a4-page" id="resume-preview-content">
      {/* Header */}
      <header style={{ borderBottom: '2px solid #333', paddingBottom: '20px', marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 5px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>{data.personal.name || 'Your Name'}</h1>
        <p style={{ fontSize: '18px', margin: '0 0 10px 0', color: '#555', fontWeight: '500' }}>{data.personal.title}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '14px', color: '#666', flexWrap: 'wrap' }}>
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>• {data.personal.phone}</span>}
          {data.personal.location && <span>• {data.personal.location}</span>}
          {data.personal.website && <span>• {data.personal.website}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '16px', textTransform: 'uppercase', color: '#333', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px' }}>Professional Summary</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '16px', textTransform: 'uppercase', color: '#333', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '15px' }}>Experience</h2>
        {data.experience.map(exp => (
          <div key={exp.id} style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
              <h3 style={{ fontSize: '15px', margin: 0, fontWeight: 'bold' }}>{exp.role}</h3>
              <span style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>{exp.date}</span>
            </div>
            <div style={{ fontSize: '14px', color: '#555', marginBottom: '5px', fontWeight: '500' }}>{exp.company}</div>
            <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#444', margin: 0 }}>{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ fontSize: '16px', textTransform: 'uppercase', color: '#333', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '15px' }}>Education</h2>
        {data.education.map(edu => (
          <div key={edu.id} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
              <h3 style={{ fontSize: '15px', margin: 0, fontWeight: 'bold' }}>{edu.school}</h3>
              <span style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>{edu.date}</span>
            </div>
            <div style={{ fontSize: '14px', color: '#555', margin: 0 }}>{edu.degree}</div>
          </div>
        ))}
      </section>

      {/* Skills */}
      {data.skills && (
        <section>
          <h2 style={{ fontSize: '16px', textTransform: 'uppercase', color: '#333', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px' }}>Skills</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444' }}>{data.skills}</p>
        </section>
      )}
    </div>
  );
}
