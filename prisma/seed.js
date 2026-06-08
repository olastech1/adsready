const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const jobs = [
    {
      jobTitle: "Software Engineer",
      slug: "software-engineer-resume-templates",
      salary: "$120,000 - $160,000",
      skills: "JavaScript, React, Node.js, Python, System Design, Data Structures, Algorithms",
      description: "A Software Engineer resume must highlight not only the programming languages you know, but the impact of the systems you've built. Recruiters look for metrics like 'improved performance by 20%' or 'scaled to 10k users'.",
      industryTips: "Keep your resume to one page if you have less than 10 years of experience. Always include a link to your GitHub or portfolio.",
      templateRecommended: "The Modern Tech Template"
    },
    {
      jobTitle: "Nurse",
      slug: "resume-builder-for-nurses",
      salary: "$75,000 - $105,000",
      skills: "Patient Care, EMR/EHR, BLS/ACLS Certification, Triage, IV Therapy, Compassion",
      description: "Nursing resumes need to immediately show your licenses and certifications at the top. Healthcare recruiters scan for specific technical skills and the types of units (e.g., ICU, ER) you have worked in.",
      industryTips: "Make sure your state licenses are clearly visible in your professional summary. Emphasize your patient-to-nurse ratio to show capacity.",
      templateRecommended: "The Clinical Classic Template"
    },
    {
      jobTitle: "Marketing Manager",
      slug: "marketing-manager-resume-templates",
      salary: "$85,000 - $130,000",
      skills: "SEO, Content Strategy, Google Analytics, Campaign Management, Social Media, B2B/B2C",
      description: "A Marketing Manager resume is a piece of marketing itself. It needs to be visually appealing and packed with data-driven results. Show how much revenue your campaigns generated.",
      industryTips: "Use strong action verbs like 'Spearheaded', 'Optimized', and 'Drove'. Highlight ROI (Return on Investment) for every major campaign.",
      templateRecommended: "The Creative Executive Template"
    }
  ];

  for (const job of jobs) {
    await prisma.jobProfile.upsert({
      where: { slug: job.slug },
      update: {},
      create: job,
    });
  }
  console.log("Database seeded with job profiles for Programmatic SEO!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
