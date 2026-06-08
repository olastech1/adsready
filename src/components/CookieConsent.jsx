"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        We use cookies to enhance your experience, serve personalized ads, and analyze traffic. 
        By clicking &quot;Accept,&quot; you consent to our use of cookies. 
        Read our <Link href="/privacy-policy">Privacy Policy</Link> for more information.
      </p>
      <div className="cookie-actions">
        <button className="btn btn-secondary btn-sm" onClick={handleDecline}>
          Decline
        </button>
        <button className="btn btn-primary btn-sm" onClick={handleAccept}>
          Accept All
        </button>
      </div>
    </div>
  );
}
