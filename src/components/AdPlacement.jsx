"use client";

import { useEffect, useRef } from "react";

const PUB_ID = "5778472067739228";

export default function AdPlacement({ slot, format = "horizontal", className = "" }) {
  const adRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && adRef.current) {
      initialized.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const styles = {
    horizontal: { display: "block", width: "100%", minHeight: "90px" },
    rectangle: { display: "inline-block", width: "336px", height: "280px", maxWidth: "100%" },
    vertical: { display: "inline-block", width: "160px", height: "600px", maxWidth: "100%" },
  };

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={styles[format] || styles.horizontal}
        data-ad-client={`ca-pub-${PUB_ID}`}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      />
    </div>
  );
}
