import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write an ATS-Friendly Resume in 2026 (Complete Guide) | ResumeAI",
  description: "Learn how to write a resume that passes Applicant Tracking Systems. Step-by-step guide with examples, ATS optimization tips, and free tools.",
  openGraph: {
    title: "How to Write an ATS-Friendly Resume in 2026",
    description: "Complete guide to beating ATS systems and landing more interviews.",
    type: "article",
  },
};

export default function ATSBlogPost() {
  return (
    <>
      <Header />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">ATS-Friendly Resume Guide</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          How to Write an ATS-Friendly Resume in 2026: The Complete Guide
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <span>June 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        {/* CTA Banner */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
          <p className="text-sm text-muted-foreground mb-2">
            Want to skip the manual work?
          </p>
          <Link
            href="/tailor"
            className="inline-flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-primary-dark transition-all"
          >
            Try ResumeAI — Tailor Your Resume in 10 Seconds →
          </Link>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-6 text-base leading-relaxed">
          <p className="text-lg">
            <strong>98% of Fortune 500 companies use Applicant Tracking Systems (ATS)</strong> to filter resumes before a human ever sees them. If your resume isn&apos;t ATS-optimized, it might get rejected automatically — no matter how qualified you are.
          </p>

          <p>
            This guide will teach you everything you need to know about ATS-friendly resumes, including formatting rules, keyword strategies, and a free tool that does the optimization for you.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">What is an ATS (Applicant Tracking System)?</h2>
          <p>
            An ATS is software that companies use to manage job applications. It scans, parses, and ranks resumes based on how well they match the job description. Popular ATS platforms include Workday, Greenhouse, Lever, iCIMS, and Taleo.
          </p>
          <p>
            When you submit a resume online, the ATS:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Extracts text from your resume (PDF, DOCX, etc.)</li>
            <li>Parses your name, contact info, work history, education, and skills</li>
            <li>Matches keywords from your resume against the job description</li>
            <li>Scores and ranks your application</li>
            <li>Filters out resumes that don&apos;t meet minimum criteria</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">7 Rules for an ATS-Friendly Resume</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">1. Use a Simple, Clean Format</h3>
          <p>
            Avoid tables, text boxes, headers/footers, columns, and complex layouts. ATS parsers work best with simple, left-to-right, top-to-bottom text. Use standard section headers like &quot;Experience,&quot; &quot;Education,&quot; and &quot;Skills.&quot;
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. Include Exact Keywords from the Job Description</h3>
          <p>
            If the job asks for &quot;project management,&quot; don&apos;t write &quot;managed projects.&quot; Use the exact phrases and terminology from the job posting. This is the single most important factor for ATS ranking.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Use Standard Section Headers</h3>
          <p>
            Don&apos;t get creative with section names. Use:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>&quot;Professional Experience&quot; or &quot;Work Experience&quot;</li>
            <li>&quot;Education&quot;</li>
            <li>&quot;Skills&quot; or &quot;Technical Skills&quot;</li>
            <li>&quot;Summary&quot; or &quot;Professional Summary&quot;</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. Save as PDF (Unless Specified Otherwise)</h3>
          <p>
            Most modern ATS systems parse PDFs correctly. However, if the job posting specifically asks for a Word document (.docx), follow their instructions.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">5. Use Standard Fonts</h3>
          <p>
            Stick to Arial, Calibri, Times New Roman, or Georgia. Avoid custom fonts that may not parse correctly.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">6. Don&apos;t Use Graphics or Images</h3>
          <p>
            ATS cannot read text embedded in images, icons, or infographics. Keep it text-only.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">7. Tailor Your Resume for Each Job</h3>
          <p>
            This is the most impactful thing you can do. A generic resume will rank lower than one that&apos;s specifically tailored to the job description. This means:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rewrite your summary to reference the specific role</li>
            <li>Reorder and emphasize relevant experience</li>
            <li>Include keywords from the job requirements</li>
            <li>Adjust your skills section to match the posting</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">How AI Can Help You Tailor Your Resume</h2>
          <p>
            Manually tailoring your resume for every job application is time-consuming. AI-powered tools like ResumeAI can do it in seconds:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Paste your existing resume</li>
            <li>Paste the job description</li>
            <li>AI analyzes keywords, restructures your experience, and generates a tailored resume</li>
            <li>Download as a professional PDF</li>
          </ol>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
            <Link
              href="/tailor"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-all"
            >
              Tailor My Resume Now — It&apos;s Free →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Common ATS Mistakes to Avoid</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Using a creative template:</strong> Fancy templates with columns and graphics confuse ATS parsers</li>
            <li><strong>Missing contact info:</strong> Always include email, phone, and location at the top</li>
            <li><strong>Not using keywords:</strong> A beautiful resume with wrong keywords still gets filtered out</li>
            <li><strong>Typos in key terms:</strong> &quot;Javscript&quot; won&apos;t match &quot;JavaScript&quot; — double-check everything</li>
            <li><strong>Submitting the same resume everywhere:</strong> Each job is different; your resume should be too</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
          <p>
            Writing an ATS-friendly resume doesn&apos;t have to be hard. Follow the rules above, tailor your resume for each application, and use AI tools to save time. Your interview rate will thank you.
          </p>

          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 mt-10 text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Land More Interviews?</h3>
            <p className="text-white/80 mb-4">Tailor your resume to any job in 10 seconds.</p>
            <Link
              href="/tailor"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all"
            >
              Start For Free →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
