import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why You Should Tailor Your Resume for Every Job Application | ResumeAI",
  description: "Learn why tailoring your resume to each job description increases your interview rate by up to 89%. Plus a free AI tool to do it in seconds.",
  openGraph: {
    title: "Why You Should Tailor Your Resume for Every Job",
    description: "Tailoring your resume can increase interview rates by 89%. Here's how to do it efficiently.",
    type: "article",
  },
};

export default function TailorResumeBlogPost() {
  return (
    <>
      <Header />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Tailor Your Resume</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Why Tailoring Your Resume for Every Job Increases Interview Rates by 89%
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <span>June 2026</span>
          <span>•</span>
          <span>6 min read</span>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
          <p className="text-sm text-muted-foreground mb-2">
            Stop sending the same resume everywhere.
          </p>
          <Link
            href="/tailor"
            className="inline-flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-primary-dark transition-all"
          >
            Tailor Your Resume in 10 Seconds — Free →
          </Link>
        </div>

        <div className="prose prose-gray max-w-none space-y-6 text-base leading-relaxed">
          <p className="text-lg">
            <strong>Sending the same generic resume to 100 jobs is the #1 mistake job seekers make.</strong> Here&apos;s the data on why tailoring works, and how to do it without spending hours on each application.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Data: Tailored Resumes Get More Interviews</h2>
          <p>Research shows that tailored resumes significantly outperform generic ones:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>89% higher interview rate</strong> for tailored resumes vs. generic ones</li>
            <li><strong>75% of recruiters</strong> say they&apos;re more likely to notice a resume that&apos;s customized for the role</li>
            <li><strong>3x more likely</strong> to pass ATS screening when keywords match the job description</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">What &quot;Tailoring&quot; Actually Means</h2>
          <p>Tailoring your resume doesn&apos;t mean lying or making things up. It means:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Matching the job title:</strong> If the job is &quot;Senior Full-Stack Engineer&quot; and your resume says &quot;Software Developer,&quot; adjust it to &quot;Full-Stack Engineer&quot;</li>
            <li><strong>Incorporating keywords:</strong> Use the exact terminology from the job description (e.g., &quot;CI/CD&quot; instead of &quot;deployment automation&quot;)</li>
            <li><strong>Reordering experience:</strong> Put the most relevant roles and achievements first</li>
            <li><strong>Adjusting your summary:</strong> Reference the specific role and company goals</li>
            <li><strong>Highlighting relevant skills:</strong> Move skills that match the job to the top of your skills section</li>
          </ol>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Problem: It Takes Too Long Manually</h2>
          <p>
            Properly tailoring a resume takes 20-45 minutes per application. If you&apos;re applying to 10-20 jobs per week, that&apos;s 3-15 hours just on resume customization.
          </p>
          <p>
            That&apos;s exactly why we built ResumeAI.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">How ResumeAI Works</h2>
          <div className="bg-muted rounded-xl p-6 space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">1</div>
              <div>
                <h4 className="font-semibold">Paste your resume</h4>
                <p className="text-sm text-muted-foreground">Copy-paste your current resume text</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">2</div>
              <div>
                <h4 className="font-semibold">Paste the job description</h4>
                <p className="text-sm text-muted-foreground">Copy the full job posting</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">3</div>
              <div>
                <h4 className="font-semibold">Get your tailored resume</h4>
                <p className="text-sm text-muted-foreground">AI generates a perfectly optimized resume with matching keywords, ATS score, and PDF export</p>
              </div>
            </div>
          </div>

          <p className="mt-6">
            The whole process takes about 10 seconds. Compare that to 30-45 minutes of manual work.
          </p>

          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 mt-10 text-center">
            <h3 className="text-xl font-bold mb-2">Stop Sending Generic Resumes</h3>
            <p className="text-white/80 mb-4">Tailor your resume to any job in seconds. Free to start.</p>
            <Link
              href="/tailor"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all"
            >
              Tailor My Resume Now →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
