export default function sitemap() {
  const base = "https://olaniyi.me";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/builder`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/blog/resume-no-experience`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/beat-ats-systems`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/action-verbs-tech-resumes`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/perfect-cover-letter`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/remote-interview-tips`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/salary-negotiation`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];
}
