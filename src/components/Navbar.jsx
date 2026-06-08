"use client";

import Link from "next/link";
import { FileText, LogIn, LogOut, User } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FileText size={28} color="#60a5fa" />
        ResumeGenius Pro
      </Link>
      
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link href="/builder">Builder</Link>
        <Link href="/blog">Career Hub</Link>
        <Link href="/software-engineer-resume-templates">Templates</Link>
        
        {status === "loading" ? (
          <div style={{ width: '80px' }}></div>
        ) : session ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid var(--glass-border)' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {session.user?.name || "Account"}
            </span>
            <button onClick={() => signOut()} className="btn" style={{ padding: '0.5rem 1rem', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        ) : (
          <div style={{ marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid var(--glass-border)' }}>
            <button onClick={() => signIn("google")} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
              <LogIn size={16} />
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
