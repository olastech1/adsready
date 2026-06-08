"use client";

export default function ResumeForm({ data, onChange }) {
  const updatePersonal = (field, value) => {
    onChange({
      ...data,
      personal: { ...data.personal, [field]: value }
    });
  };

  const updateExperience = (id, field, value) => {
    onChange({
      ...data,
      experience: data.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  return (
    <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <section>
        <h3 className="mb-4" style={{ color: 'var(--text-light)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Personal Details</h3>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input className="form-input" type="text" value={data.personal.name} onChange={e => updatePersonal('name', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Professional Title</label>
          <input className="form-input" type="text" value={data.personal.title} onChange={e => updatePersonal('title', e.target.value)} />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Email</label>
            <input className="form-input" type="email" value={data.personal.email} onChange={e => updatePersonal('email', e.target.value)} />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Phone</label>
            <input className="form-input" type="text" value={data.personal.phone} onChange={e => updatePersonal('phone', e.target.value)} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Location</label>
            <input className="form-input" type="text" value={data.personal.location} onChange={e => updatePersonal('location', e.target.value)} />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Website / Link</label>
            <input className="form-input" type="text" value={data.personal.website} onChange={e => updatePersonal('website', e.target.value)} />
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-4" style={{ color: 'var(--text-light)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Professional Summary</h3>
        <div className="form-group">
          <textarea className="form-input" rows={4} value={data.summary} onChange={e => onChange({ ...data, summary: e.target.value })} />
        </div>
      </section>

      <section>
        <h3 className="mb-4" style={{ color: 'var(--text-light)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Work Experience</h3>
        {data.experience.map((exp, index) => (
          <div key={exp.id} style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
            <div className="form-group">
              <label className="form-label">Job Title</label>
              <input className="form-input" type="text" value={exp.role} onChange={e => updateExperience(exp.id, 'role', e.target.value)} />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Company</label>
                <input className="form-input" type="text" value={exp.company} onChange={e => updateExperience(exp.id, 'company', e.target.value)} />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Dates</label>
                <input className="form-input" type="text" value={exp.date} onChange={e => updateExperience(exp.id, 'date', e.target.value)} />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Description</label>
              <textarea className="form-input" rows={3} value={exp.description} onChange={e => updateExperience(exp.id, 'description', e.target.value)} />
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3 className="mb-4" style={{ color: 'var(--text-light)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Skills</h3>
        <div className="form-group">
          <label className="form-label">Comma separated list</label>
          <input className="form-input" type="text" value={data.skills} onChange={e => onChange({ ...data, skills: e.target.value })} />
        </div>
      </section>
    </div>
  );
}
