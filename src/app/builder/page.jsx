"use client";

import { useState } from "react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { Download, Save } from "lucide-react";

export default function BuilderPage() {
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "Jane Doe",
      title: "Senior Software Engineer",
      email: "jane.doe@example.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      website: "github.com/janedoe"
    },
    summary: "Passionate and detail-oriented Software Engineer with over 5 years of experience building scalable web applications. Strong expertise in React, Next.js, and Node.js. Demonstrated ability to lead teams and deliver high-quality solutions on time.",
    experience: [
      {
        id: 1,
        company: "Tech Innovations Inc.",
        role: "Senior Frontend Engineer",
        date: "Jan 2022 - Present",
        description: "Led the migration of a legacy Angular application to Next.js, improving page load speeds by 40%. Mentored junior developers and established code quality standards."
      },
      {
        id: 2,
        company: "Web Solutions LLC",
        role: "Web Developer",
        date: "Jun 2018 - Dec 2021",
        description: "Developed and maintained multiple client websites using React and Redux. Collaborated closely with designers to implement pixel-perfect UI components."
      }
    ],
    education: [
      {
        id: 1,
        school: "University of California, Berkeley",
        degree: "B.S. in Computer Science",
        date: "2014 - 2018"
      }
    ],
    skills: "JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, GraphQL, Git, Docker, AWS"
  });

  const handleExport = async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById('resume-preview-content');
    const opt = {
      margin: 0,
      filename: `${resumeData.personal.name.replace(/\s+/g, '_')}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="builder-layout">
      {/* Sidebar: Inputs */}
      <div className="builder-sidebar">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Resume Details</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-primary" onClick={handleExport}>
              <Download size={18} />
              Export PDF
            </button>
          </div>
        </div>
        <ResumeForm data={resumeData} onChange={setResumeData} />
      </div>

      {/* Main Content: Preview */}
      <div className="builder-preview-container">
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
}
