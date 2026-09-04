"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, LogIn, LogOut, X } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

const NAV_LINKS = [
  { href: "/builder", label: "Builder" },
  { href: "/blog", label: "Career Hub" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" onClick={close}>
        <FileText size={22} />
        Olaniyi Careers
      </Link>

      {/* Desktop */}
      <div className="nav-links">
        {NAV_LINKS.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        <div className="nav-auth">
          {status === "loading" ? (
            <div style={{ width: 72 }} />
          ) : session ? (
            <>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{session.user?.name?.split(" ")[0]}</span>
              <button onClick={() => signOut()} className="btn btn-danger btn-sm"><LogOut size={13} /> Sign Out</button>
            </>
          ) : (
            <button onClick={() => signIn("github")} className="btn btn-primary btn-sm"><LogIn size={13} /> Sign In</button>
          )}
        </div>
      </div>

      {/* Hamburger */}
      <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        <span /><span /><span />
      </button>

      {/* Mobile Overlay */}
      <div className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        <button onClick={close} aria-label="Close menu" style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: "0.5rem" }}>
          <X size={26} />
        </button>
        <Link href="/" onClick={close}>Home</Link>
        {NAV_LINKS.map(l => <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>)}
        <Link href="/contact" onClick={close}>Contact</Link>
        <div style={{ marginTop: "1.5rem", width: "100%", display: "flex", justifyContent: "center" }}>
          {status !== "loading" && (
            session
              ? <button onClick={() => { signOut(); close(); }} className="btn btn-danger" style={{ padding: "0.85rem 2.5rem" }}><LogOut size={16} /> Sign Out</button>
              : <button onClick={() => { signIn("github"); close(); }} className="btn btn-primary" style={{ padding: "0.85rem 2.5rem" }}><LogIn size={16} /> Sign In with GitHub</button>
          )}
        </div>
      </div>
    </nav>
  );
}
