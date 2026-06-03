import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Tailor Your Resume to a Job Description: Step-by-Step Guide (2025)",
  description: "Learn exactly how to tailor your resume to match any job description. Step-by-step guide with examples, keyword strategies, and ATS tips to land more interviews.",
  keywords: "tailor resume, customize resume, job description match, resume keywords, ATS optimization",
};

export default function HowToTailorResume() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>Resume Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              How to Tailor Your Resume to a <span className="gradient-text">Job Description</span> in 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-4">
              A complete step-by-step guide to customizing your resume for every job application. Learn keyword strategies, ATS tricks, and exactly what hiring managers look for.
            </p>
            <p className="text-sm text-muted-foreground">Updated June 2025 · 12 min read</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12 not-prose">
              <p className="text-sm font-medium text-primary mb-2">💡 Key Takeaway</p>
              <p className="text-sm text-muted-foreground">Tailoring your resume for each job increases your interview rate by up to 89%. This guide shows you exactly how to do it — manually or with AI.</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Why Tailoring Your Resume Matters</h2>
            <p className="text-muted-foreground mb-6">According to a study by Jobscan, <strong>98% of Fortune 500 companies</strong> use Applicant Tracking Systems (ATS) to filter resumes. These systems scan your resume for specific keywords and qualifications from the job description. If your resume doesn&apos;t match, it gets automatically rejected — often before a human ever sees it.</p>
            <p className="text-muted-foreground mb-6">A generic resume tells employers you&apos;re sending the same document to dozens of companies. A tailored resume shows you&apos;re genuinely interested in <em>this specific role</em>.</p>

            <h2 className="text-2xl font-bold mb-4">Step 1: Analyze the Job Description Thoroughly</h2>
            <p className="text-muted-foreground mb-4">Before touching your resume, spend 10-15 minutes dissecting the job posting. Look for:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-bold mt-1">→</span><span><strong>Required skills</strong> — These are non-negotiable. If the job requires Python and you know Python, make sure it&apos;s prominent.</span></li>
              <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-bold mt-1">→</span><span><strong>Preferred skills</strong> — Nice-to-haves that can set you apart.</span></li>
              <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-bold mt-1">→</span><span><strong>Action verbs</strong> — Words like &quot;led,&quot; &quot;developed,&quot; &quot;managed.&quot; Mirror these in your bullet points.</span></li>
              <li className="flex items-start gap-3 text-muted-foreground"><span className="text-primary font-bold mt-1">→</span><span><strong>Industry terminology</strong> — Use the exact terms the company uses.</span></li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Step 2: Match Your Skills Section</h2>
            <p className="text-muted-foreground mb-6">Your skills section is the easiest place to tailor. List every skill from the job posting that you have, and reorder them so the most relevant ones appear first. Use the employer&apos;s exact wording.</p>

            <h2 className="text-2xl font-bold mb-4">Step 3: Rewrite Your Bullet Points</h2>
            <p className="text-muted-foreground mb-6">For each role, rewrite bullet points to emphasize achievements relevant to the target job.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 not-prose">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-red-700 mb-2">❌ Generic</p>
                <p className="text-sm text-red-600">&quot;Managed a team and completed projects on time.&quot;</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-green-700 mb-2">✅ Tailored (Product Manager)</p>
                <p className="text-sm text-green-600">&quot;Led cross-functional team of 8 engineers, delivering 3 features ahead of schedule, increasing user engagement 25%.&quot;</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Step 4: Optimize Your Summary</h2>
            <p className="text-muted-foreground mb-6">Your resume summary should directly reflect the role you&apos;re targeting. Include the job title, key skills, and a quantifiable achievement.</p>

            <h2 className="text-2xl font-bold mb-4">Step 5: Check Your ATS Score</h2>
            <p className="text-muted-foreground mb-6">Before submitting, verify your keyword match rate (aim for 80%+), skills alignment, and formatting compatibility.</p>

            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Want to Skip the Manual Work?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">ResumeAI analyzes the job description, matches your skills, rewrites your bullet points, and optimizes for ATS — all in under 10 seconds.</p>
              <a href="/tailor" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/90 transition-all shadow-xl">
                Tailor My Resume Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

            <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="font-semibold text-sm mb-2">🚫 Lying about skills</p>
                <p className="text-sm text-muted-foreground">Never fabricate skills. Highlight transferable skills instead.</p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="font-semibold text-sm mb-2">🚫 Using the same resume everywhere</p>
                <p className="text-sm text-muted-foreground">Even similar roles may emphasize different skills. Always tailor.</p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="font-semibold text-sm mb-2">🚫 Keyword stuffing</p>
                <p className="text-sm text-muted-foreground">ATS systems are smarter now. Context matters more than keyword count.</p>
              </div>
            </div>

            <div className="border-t border-border pt-12 mt-12 not-prose">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="/blog/ats-friendly-resume" className="block bg-card border border-card-border rounded-xl p-5 hover:shadow-lg transition-all">
                  <p className="text-sm font-semibold mb-2">How to Write an ATS-Friendly Resume</p>
                  <p className="text-xs text-muted-foreground">Master the art of ATS optimization</p>
                </a>
                <a href="/blog/tailor-resume-every-job" className="block bg-card border border-card-border rounded-xl p-5 hover:shadow-lg transition-all">
                  <p className="text-sm font-semibold mb-2">Why Tailor for Every Job</p>
                  <p className="text-xs text-muted-foreground">The science behind resume customization</p>
                </a>
                <a href="/blog/resume-summary-vs-objective" className="block bg-card border border-card-border rounded-xl p-5 hover:shadow-lg transition-all">
                  <p className="text-sm font-semibold mb-2">Resume Summary vs Objective</p>
                  <p className="text-xs text-muted-foreground">Which one should you use?</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
