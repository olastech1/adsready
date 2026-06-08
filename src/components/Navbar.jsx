"use client";

import Link from "next/link";
import { FileText } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FileText size={28} color="#60a5fa" />
        ResumeGenius Pro
      </Link>
      <div className="nav-links">
        <Link href="/builder">Builder</Link>
        <Link href="/blog">Career Hub</Link>
        <Link href="/software-engineer-resume-templates">Templates</Link>
      </div>
    </nav>
  );
}
