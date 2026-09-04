"use client";

import { useEffect, useRef } from "react";

export default function AdPlacement({ slot, format = "horizontal", className = "" }) {
  const adRef = useRef(null);
  const pubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || "5778472067739228";

  useEffect(() => {
    if (pubId && adRef.current && typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [pubId]);

  const formatClass = `ad-${format}`;

  // Development mode — show placeholder
  if (!pubId) {
    return (
      <div className={`ad-container ${className}`}>
        <div className={`ad-placeholder ${formatClass}`}>
          Ad Space
        </div>
      </div>
    );
  }

  // Production mode — render actual AdSense
  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: format === "horizontal" ? "728px" : format === "rectangle" ? "336px" : "160px",
          height: format === "horizontal" ? "90px" : format === "rectangle" ? "280px" : "600px",
          maxWidth: "100%",
        }}
        data-ad-client={`ca-pub-${pubId}`}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      />
    </div>
  );
}
