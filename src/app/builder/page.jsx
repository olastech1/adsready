"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { Download, CloudUpload, Loader2 } from "lucide-react";

export default function BuilderPage() {
  const { data: session } = useSession();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [resumeData, setResumeData] = useState({
    personal: { name: "", title: "", email: "", phone: "", location: "", website: "" },
    summary: "",
    experience: [],
    education: [],
    skills: ""
  });

  // Default fallback data
  const defaultData = {
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
    skills: "JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, MongoDB"
  };

  useEffect(() => {
    async function loadResume() {
      if (session?.user) {
        try {
          const res = await fetch("/api/resume");
          if (res.ok) {
            const result = await res.json();
            if (result.resume) {
              setResumeData(result.resume.data);
            } else {
              setResumeData(defaultData); // new user
            }
          }
        } catch (error) {
          console.error("Failed to load resume", error);
        }
      } else {
        setResumeData(defaultData); // guest user
      }
      setIsLoading(false);
    }
    
    loadResume();
  }, [session]);

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

  const handleSave = async () => {
    if (!session) return alert("Please sign in to save your resume to the cloud.");
    setIsSaving(true);
    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: resumeData }),
      });
      if (res.ok) {
        alert("Resume saved successfully!");
      } else {
        alert("Failed to save resume.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Loader2 size={48} className="animate-spin" color="var(--accent)" />
    </div>;
  }

  return (
    <div className="builder-layout">
      {/* Sidebar: Inputs */}
      <div className="builder-sidebar">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Resume Details</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-primary" onClick={handleExport}>
              <Download size={18} />
              Export
            </button>
            <button className="btn" style={{ background: 'var(--glass-bg)', color: 'var(--text-light)', border: '1px solid var(--glass-border)' }} onClick={handleSave} disabled={isSaving}>
              {isSaving ? <Loader2 size={18} className="animate-spin" /> : <CloudUpload size={18} />}
              Save
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
