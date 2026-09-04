"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import AdPlacement from "@/components/AdPlacement";
import { Download, CloudUpload, Loader2, PenLine, Eye, Palette, CheckCircle } from "lucide-react";

const TEMPLATES = [
  { id: "classic", name: "Classic", desc: "Clean & Traditional" },
  { id: "modern", name: "Modern", desc: "Two-Column Sidebar" },
  { id: "executive", name: "Executive", desc: "Elegant & Serif" },
  { id: "minimal", name: "Minimal", desc: "Ultra-Clean" },
];

const defaultData = {
  personal: { name: "Jane Doe", title: "Senior Software Engineer", email: "jane.doe@example.com", phone: "(555) 123-4567", location: "San Francisco, CA", website: "github.com/janedoe" },
  summary: "Passionate and detail-oriented Software Engineer with 5+ years of experience building scalable web applications. Expert in React, Next.js, and Node.js. Proven ability to lead teams and deliver high-quality solutions on time.",
  experience: [
    { id: 1, company: "Tech Innovations Inc.", role: "Senior Frontend Engineer", date: "Jan 2022 – Present", description: "Led migration from Angular to Next.js, improving page load by 40%. Mentored 3 junior developers and established code quality standards." },
    { id: 2, company: "StartupCo", role: "Frontend Developer", date: "Jun 2018 – Dec 2021", description: "Built React dashboards serving 10,000+ daily users. Implemented CI/CD pipelines reducing deployment time by 60%." }
  ],
  education: [{ id: 1, school: "University of California, Berkeley", degree: "B.S. Computer Science", date: "2014 – 2018" }],
  skills: "JavaScript, TypeScript, React, Next.js, Node.js, PostgreSQL, Git, Docker, AWS"
};

export default function BuilderPage() {
  const { data: session } = useSession();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("edit");
  const [saveMessage, setSaveMessage] = useState("");
  const [template, setTemplate] = useState("classic");
  const [resumeData, setResumeData] = useState({ personal: { name: "", title: "", email: "", phone: "", location: "", website: "" }, summary: "", experience: [], education: [], skills: "" });

  useEffect(() => {
    async function loadResume() {
      if (session?.user) {
        try {
          const res = await fetch("/api/resume");
          if (res.ok) {
            const result = await res.json();
            setResumeData(result.resume ? result.resume.data : defaultData);
          } else { setResumeData(defaultData); }
        } catch { setResumeData(defaultData); }
      } else { setResumeData(defaultData); }
      setIsLoading(false);
    }
    loadResume();
  }, [session]);

  const doExport = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.getElementById("resume-preview-content");
    if (!element) return;
    html2pdf().from(element).set({
      margin: 0,
      filename: `${(resumeData.personal.name || "Resume").replace(/\s+/g, "_")}_Resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }).save();
  };

  const handleExport = async () => {
    if (activeTab !== "preview" && window.innerWidth <= 768) {
      setActiveTab("preview");
      setTimeout(doExport, 350);
    } else { await doExport(); }
  };

  const handleSave = async () => {
    if (!session) { setSaveMessage("Please sign in to save."); setTimeout(() => setSaveMessage(""), 3000); return; }
    setIsSaving(true);
    try {
      const res = await fetch("/api/resume", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data: resumeData }) });
      setSaveMessage(res.ok ? "Saved successfully!" : "Failed to save.");
    } catch { setSaveMessage("An error occurred."); }
    finally { setIsSaving(false); setTimeout(() => setSaveMessage(""), 3000); }
  };

  if (isLoading) {
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100dvh - 60px)" }}><Loader2 size={48} className="animate-spin" color="var(--accent)" /></div>;
  }

  return (
    <>
      {/* Static SEO content visible to Google — hidden visually on desktop behind builder, shown above on mobile */}
      <div className="builder-seo" style={{ display: 'none' }}>
        <h1>Free Resume Builder — Live Preview & PDF Export</h1>
        <p>Use our free online resume builder to create a professional resume in minutes. Choose from 4 ATS-optimized templates, fill in your details with our guided form, and download a pixel-perfect PDF instantly — no sign-up required.</p>
      </div>

      {/* Mobile Tab Bar */}
      <div className="builder-tabs">
        <button className={`builder-tab ${activeTab === "edit" ? "active" : ""}`} onClick={() => setActiveTab("edit")}>
          <PenLine size={15} /> Edit
        </button>
        <button className={`builder-tab ${activeTab === "preview" ? "active" : ""}`} onClick={() => setActiveTab("preview")}>
          <Eye size={15} /> Preview
        </button>
      </div>

      <div className="builder-layout">
        {/* Sidebar */}
        <div className={`builder-sidebar ${activeTab === "preview" ? "hidden-mobile" : ""}`}>
          <div className="builder-header">
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Resume Details</h2>
            <div className="builder-actions">
              <button className="btn btn-primary btn-sm" onClick={handleExport}>
                <Download size={14} /> Export PDF
              </button>
              <button className="btn btn-secondary btn-sm" onClick={handleSave} disabled={isSaving}>
                {isSaving ? <Loader2 size={14} className="animate-spin" /> : <CloudUpload size={14} />} Save
              </button>
            </div>
          </div>

          {saveMessage && (
            <div className="animate-fade-in" style={{ padding: "0.5rem 0.85rem", borderRadius: "8px", marginBottom: "1rem", fontSize: "0.825rem", fontWeight: 500, background: saveMessage.includes("success") ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)", color: saveMessage.includes("success") ? "var(--success)" : "var(--danger)", border: `1px solid ${saveMessage.includes("success") ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}` }}>
              {saveMessage}
            </div>
          )}

          {/* Template Selector */}
          <div className="glass-panel" style={{ padding: "1rem", marginBottom: "1.25rem" }}>
            <h3 className="section-heading" style={{ marginBottom: "0.75rem" }}><Palette size={15} /> Template</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
              {TEMPLATES.map(t => (
                <button key={t.id} onClick={() => setTemplate(t.id)} style={{ padding: "0.55rem 0.7rem", borderRadius: "8px", border: template === t.id ? "2px solid var(--accent)" : "1px solid var(--glass-border)", background: template === t.id ? "var(--accent-glow)" : "rgba(15,23,42,0.4)", color: template === t.id ? "var(--accent)" : "var(--text-muted)", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "var(--transition)" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: "0.68rem", opacity: 0.7 }}>{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <ResumeForm data={resumeData} onChange={setResumeData} />

          <AdPlacement slot="builder-sidebar" format="rectangle" />
        </div>

        {/* Preview Panel */}
        <div className={`builder-preview-container ${activeTab === "edit" ? "hidden-mobile" : ""}`}>
          <ResumePreview data={resumeData} template={template} />
        </div>
      </div>
    </>
  );
}
