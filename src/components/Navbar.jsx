"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, LogIn, LogOut, Menu, X } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        <FileText size={26} />
        ResumeGenius Pro
      </Link>

      {/* Desktop Nav */}
      <div className="nav-links">
        <Link href="/builder">Builder</Link>
        <Link href="/blog">Career Hub</Link>
        <Link href="/about">About</Link>

        <div className="nav-auth">
          {status === "loading" ? (
            <div style={{ width: '80px' }} />
          ) : session ? (
            <>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                {session.user?.name || "Account"}
              </span>
              <button onClick={() => signOut()} className="btn btn-danger btn-sm">
                <LogOut size={14} />
                Sign Out
              </button>
            </>
          ) : (
            <button onClick={() => signIn("github")} className="btn btn-primary btn-sm">
              <LogIn size={14} />
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Hamburger Toggle */}
      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Overlay */}
      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/builder" onClick={closeMenu}>Resume Builder</Link>
        <Link href="/blog" onClick={closeMenu}>Career Hub</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>

        <div style={{ marginTop: '1rem' }}>
          {status === "loading" ? null : session ? (
            <button onClick={() => { signOut(); closeMenu(); }} className="btn btn-danger" style={{ fontSize: '1.1rem' }}>
              <LogOut size={18} />
              Sign Out
            </button>
          ) : (
            <button onClick={() => { signIn("github"); closeMenu(); }} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.85rem 2.5rem' }}>
              <LogIn size={18} />
              Sign In with GitHub
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
