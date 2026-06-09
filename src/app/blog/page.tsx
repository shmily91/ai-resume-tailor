import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Resume Tips, ATS Guide & Career Advice | ResumeAI",
  description: "Expert resume writing tips, ATS optimization guides, and career advice to help you land more interviews.",
};

const posts = [
  {
    slug: "/blog/how-to-tailor-resume-job-description",
    title: "How to Tailor Your Resume to a Job Description: Step-by-Step Guide",
    excerpt: "The complete guide to customizing your resume for every application. Keyword strategies, ATS tricks, and what hiring managers look for.",
    date: "June 2025",
    readTime: "12 min",
  },
  {
    slug: "/blog/cover-letter-no-experience",
    title: "How to Write a Cover Letter With No Experience (Template + Examples)",
    excerpt: "Templates, examples, and strategies to write a compelling cover letter — even if you've never held a job before.",
    date: "June 2025",
    readTime: "10 min",
  },
  {
    slug: "/blog/resume-summary-vs-objective",
    title: "Resume Summary vs Objective: Which One Should You Use in 2025?",
    excerpt: "The definitive guide to choosing between a summary and objective — with examples for every career stage.",
    date: "June 2025",
    readTime: "8 min",
  },
  {
    slug: "/blog/ats-friendly-resume",
    title: "How to Write an ATS-Friendly Resume in 2025",
    excerpt: "98% of Fortune 500 companies use ATS. Learn how to format, keyword-optimize, and structure your resume to pass automated screening.",
    date: "June 2025",
    readTime: "8 min",
  },
  {
    slug: "/blog/tailor-resume-every-job",
    title: "Why Tailoring Your Resume Increases Interview Rates by 89%",
    excerpt: "Generic resumes are the #1 mistake. Learn why and how to tailor your resume for each job — in seconds, not hours.",
    date: "June 2025",
    readTime: "6 min",
  },
  {
    slug: "/blog/how-to-write-skills-section-on-resume",
    title: "How to Write Skills Section on Resume (2026 Guide)",
    excerpt: "Master the skills section of your resume. Learn what employers want, how to list skills effectively, and optimize for ATS systems.",
    date: "June 2025",
    readTime: "10 min",
  },
  {
    slug: "/blog/how-long-should-a-resume-be",
    title: "How Long Should a Resume Be? (2026 Best Practice Guide)",
    excerpt: "Discover the ideal resume length for your experience level. Learn when to use one page vs two pages and how to optimize space.",
    date: "June 2025",
    readTime: "12 min",
  },
  {
    slug: "/blog/how-to-write-resume-with-no-experience",
    title: "How to Write a Resume with No Experience (2026 Guide)",
    excerpt: "Creating a resume without work experience is challenging but possible. Learn strategies to highlight education, skills, and potential.",
    date: "June 2025",
    readTime: "14 min",
  },
  {
    slug: "/blog/resume-power-words",
    title: "Resume Power Words That Get Interviews (2026 Complete List)",
    excerpt: "Transform your resume with powerful action verbs. Complete list organized by skill type with examples of how to use them effectively.",
    date: "June 2025",
    readTime: "12 min",
  },
  {
    slug: "/blog/common-resume-mistakes",
    title: "Common Resume Mistakes to Avoid (2026 Guide)",
    excerpt: "Stop making these resume mistakes that kill your chances. Learn what recruiters hate and how to create an error-free resume.",
    date: "June 2025",
    readTime: "10 min",
  },
  {
    slug: "/blog/how-to-list-education-on-resume",
    title: "How to List Education on Resume (2026 Complete Guide)",
    excerpt: "Master the education section of your resume. Learn proper formatting, what to include, and how to highlight academic achievements effectively.",
    date: "June 2025",
    readTime: "11 min",
  },
  {
    slug: "/blog/how-to-write-resume-summary",
    title: "How to Write a Resume Summary (2026 Complete Guide with Examples)",
    excerpt: "Craft the perfect resume summary with our complete guide. Templates and examples for entry-level to senior professionals.",
    date: "June 2025",
    readTime: "13 min",
  },
  {
    slug: "/blog/how-to-format-resume",
    title: "How to Format a Resume (2026 Complete Formatting Guide)",
    excerpt: "Master resume formatting with our complete 2026 guide. Learn proper fonts, margins, spacing, and ATS-optimized layouts.",
    date: "June 2025",
    readTime: "12 min",
  },
  {
    slug: "/blog/how-to-write-resume-experience",
    title: "How to Write Resume Experience Section (2026 Complete Guide)",
    excerpt: "Master the work experience section of your resume. Learn how to describe your achievements, quantify results, and impress recruiters.",
    date: "June 2025",
    readTime: "14 min",
  },
  {
    slug: "/blog/how-to-list-skills-on-resume",
    title: "How to List Skills on Resume (2026 Complete Guide)",
    excerpt: "Learn how to list skills on your resume effectively. Categories to include, formatting tips, and ATS optimization.",
    date: "June 2025",
    readTime: "13 min",
  },
  {
    slug: "/blog/cover-letter-vs-resume",
    title: "Cover Letter vs Resume: Key Differences (2026 Guide)",
    excerpt: "Understand the key differences between cover letters and resumes. When to use each, what to include, and how they complement each other.",
    date: "June 2025",
    readTime: "16 min",
  },
  {
    slug: "/blog/resume-objectives-examples",
    title: "Resume Objectives Examples (2026 Complete Guide)",
    excerpt: "Learn when to use resume objectives and how to write effective ones. Examples for different experience levels and industries.",
    date: "June 2025",
    readTime: "15 min",
  },
  {
    slug: "/blog/resume-keywords-list",
    title: "Resume Keywords List (2026 Complete Guide)",
    excerpt: "Master resume keywords to pass ATS and get more interviews. Complete list organized by industry and skill type with real examples.",
    date: "June 2025",
    readTime: "16 min",
  },
  {
    slug: "/blog/resume-references-examples",
    title: "Resume References Examples (2026 Complete Guide)",
    excerpt: "Master resume references with real examples, templates, and best practices. Learn when to include references and how to format them professionally.",
    date: "June 2025",
    readTime: "14 min",
  },
  {
    slug: "/blog/resume-volunteer-work",
    title: "Resume Volunteer Work (2026 Complete Guide)",
    excerpt: "How to effectively list volunteer work on your resume. Examples, formats, and strategies to showcase your community involvement and transferable skills.",
    date: "June 2025",
    readTime: "15 min",
  },
  {
    slug: "/blog/resume-action-verbs-list",
    title: "100+ Resume Action Verbs List (2026 Powerful Guide)",
    excerpt: "Discover 100+ resume action verbs organized by skill category. Make your resume stand out with powerful action words that catch recruiters' attention.",
    date: "June 2025",
    readTime: "10 min",
  },
  {
    slug: "/blog/resume-bullet-point-examples",
    title: "Resume Bullet Points Examples: 50+ That Get You Hired",
    excerpt: "Master resume bullet points with 50+ real examples. Learn to write achievement-focused bullet points that impress recruiters and beat ATS systems.",
    date: "June 2025",
    readTime: "12 min",
  },
  {
    slug: "/blog/resume-format-examples",
    title: "Resume Format Examples (2026 Complete Guide)",
    excerpt: "Explore professional resume format examples for every industry. Learn which format works best for your experience level and job type.",
    date: "June 2025",
    readTime: "15 min",
  },
  {
    slug: "/blog/resume-achievements-examples",
    title: "Resume Achievements Examples (2026 Complete Guide)",
    excerpt: "Master resume achievements with 50+ real examples across industries. Learn to write accomplishment statements that get you hired.",
    date: "June 2026",
    readTime: "14 min",
  },
  {
    slug: "/blog/technical-skills-resume",
    title: "Technical Skills Resume (2026 Complete Guide)",
    excerpt: "Master technical skills section on your resume. Learn which skills to include, how to format, and optimize for ATS. Real examples for every industry.",
    date: "June 2026",
    readTime: "15 min",
  },
  {
    slug: "/blog/resume-certification-section",
    title: "Resume Certification Section (2026 Complete Guide)",
    excerpt: "Master resume certification section formatting. Learn which certifications to include, how to format, and maximize their impact on your resume.",
    date: "June 2026",
    readTime: "14 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Resume Tips & <span className="gradient-text">Career Advice</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Expert guides on resume writing, ATS optimization, and landing more interviews.
        </p>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="block bg-card border border-card-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} read</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Ready to put these tips into practice?</h2>
          <p className="text-muted-foreground mb-4">Tailor your resume to any job in 10 seconds.</p>
          <Link
            href="/tailor"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-all"
          >
            Try ResumeAI Free →
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
