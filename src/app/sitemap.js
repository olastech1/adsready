export default function sitemap() {
  const baseUrl = 'https://olaniyi.me';

  // Core pages
  const routes = ['', '/about', '/contact', '/privacy-policy', '/terms-of-service', '/blog', '/builder'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogPosts = [
    '/blog/resume-no-experience',
    '/blog/beat-ats-systems',
    '/blog/action-verbs-tech-resumes',
    '/blog/perfect-cover-letter',
    '/blog/remote-interview-tips',
    '/blog/salary-negotiation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}
