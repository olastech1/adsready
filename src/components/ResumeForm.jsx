"use client";

import { Plus, Trash2, Briefcase, GraduationCap, User, AlignLeft, Wrench } from "lucide-react";

export default function ResumeForm({ data, onChange }) {
  const updatePersonal = (field, value) => {
    onChange({ ...data, personal: { ...data.personal, [field]: value } });
  };

  const updateExperience = (id, field, value) => {
    onChange({
      ...data,
      experience: data.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const addExperience = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        { id: Date.now(), company: "", role: "", date: "", description: "" }
      ]
    });
  };

  const removeExperience = (id) => {
    onChange({
      ...data,
      experience: data.experience.filter(exp => exp.id !== id)
    });
  };

  const updateEducation = (id, field, value) => {
    onChange({
      ...data,
      education: data.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        { id: Date.now(), school: "", degree: "", date: "" }
      ]
    });
  };

  const removeEducation = (id) => {
    onChange({
      ...data,
      education: data.education.filter(edu => edu.id !== id)
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Personal Details */}
      <section className="glass-panel" style={{ padding: '1.5rem' }}>
        <h3 className="section-heading"><User size={16} /> Personal Details</h3>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input className="form-input" type="text" placeholder="Jane Doe" value={data.personal.name} onChange={e => updatePersonal('name', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Professional Title</label>
          <input className="form-input" type="text" placeholder="Senior Software Engineer" value={data.personal.title} onChange={e => updatePersonal('title', e.target.value)} />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" placeholder="jane@example.com" value={data.personal.email} onChange={e => updatePersonal('email', e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input className="form-input" type="text" placeholder="(555) 123-4567" value={data.personal.phone} onChange={e => updatePersonal('phone', e.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Location</label>
            <input className="form-input" type="text" placeholder="San Francisco, CA" value={data.personal.location} onChange={e => updatePersonal('location', e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Website / Portfolio</label>
            <input className="form-input" type="text" placeholder="github.com/janedoe" value={data.personal.website} onChange={e => updatePersonal('website', e.target.value)} />
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="glass-panel" style={{ padding: '1.5rem' }}>
        <h3 className="section-heading"><AlignLeft size={16} /> Professional Summary</h3>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <textarea
            className="form-input"
            rows={4}
            placeholder="A brief overview of your professional background, key skills, and career goals..."
            value={data.summary}
            onChange={e => onChange({ ...data, summary: e.target.value })}
          />
        </div>
      </section>

      {/* Work Experience */}
      <section className="glass-panel" style={{ padding: '1.5rem' }}>
        <h3 className="section-heading"><Briefcase size={16} /> Work Experience</h3>
        {data.experience.map((exp, index) => (
          <div key={exp.id} className="entry-card">
            <div className="entry-card-header">
              <span className="entry-card-number">Position {index + 1}</span>
              <button
                className="btn-icon"
                onClick={() => removeExperience(exp.id)}
                title="Remove this entry"
                style={{ color: 'var(--danger)' }}
              >
                <Trash2 size={14} />
              </button>
            </div>
            <div className="form-group">
              <label className="form-label">Job Title</label>
              <input className="form-input" type="text" placeholder="Senior Frontend Engineer" value={exp.role} onChange={e => updateExperience(exp.id, 'role', e.target.value)} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Company</label>
                <input className="form-input" type="text" placeholder="Tech Innovations Inc." value={exp.company} onChange={e => updateExperience(exp.id, 'company', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Dates</label>
                <input className="form-input" type="text" placeholder="Jan 2022 - Present" value={exp.date} onChange={e => updateExperience(exp.id, 'date', e.target.value)} />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Description</label>
              <textarea className="form-input" rows={3} placeholder="Key responsibilities and achievements..." value={exp.description} onChange={e => updateExperience(exp.id, 'description', e.target.value)} />
            </div>
          </div>
        ))}
        <button className="add-entry-btn" onClick={addExperience}>
          <Plus size={18} />
          Add Experience
        </button>
      </section>

      {/* Education */}
      <section className="glass-panel" style={{ padding: '1.5rem' }}>
        <h3 className="section-heading"><GraduationCap size={16} /> Education</h3>
        {data.education.map((edu, index) => (
          <div key={edu.id} className="entry-card">
            <div className="entry-card-header">
              <span className="entry-card-number">Education {index + 1}</span>
              <button
                className="btn-icon"
                onClick={() => removeEducation(edu.id)}
                title="Remove this entry"
                style={{ color: 'var(--danger)' }}
              >
                <Trash2 size={14} />
              </button>
            </div>
            <div className="form-group">
              <label className="form-label">School / University</label>
              <input className="form-input" type="text" placeholder="University of California, Berkeley" value={edu.school} onChange={e => updateEducation(edu.id, 'school', e.target.value)} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Degree</label>
                <input className="form-input" type="text" placeholder="B.S. in Computer Science" value={edu.degree} onChange={e => updateEducation(edu.id, 'degree', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Dates</label>
                <input className="form-input" type="text" placeholder="2014 - 2018" value={edu.date} onChange={e => updateEducation(edu.id, 'date', e.target.value)} />
              </div>
            </div>
          </div>
        ))}
        <button className="add-entry-btn" onClick={addEducation}>
          <Plus size={18} />
          Add Education
        </button>
      </section>

      {/* Skills */}
      <section className="glass-panel" style={{ padding: '1.5rem' }}>
        <h3 className="section-heading"><Wrench size={16} /> Skills</h3>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Comma separated list</label>
          <input className="form-input" type="text" placeholder="JavaScript, React, Node.js, PostgreSQL..." value={data.skills} onChange={e => onChange({ ...data, skills: e.target.value })} />
        </div>
      </section>
    </div>
  );
}
