import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Summary vs Objective: Which One Should You Use in 2025?",
  description: "Should your resume have a summary or an objective? Learn the difference, see examples for every situation, and find out which one will get you more interviews in 2025.",
  keywords: "resume summary vs objective, resume summary examples, resume objective examples, resume introduction, career change resume",
};

export default function ResumeSummaryVsObjective() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>Resume Tips
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Resume Summary vs Objective: <span className="gradient-text">Which Should You Use?</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-4">
              The definitive guide to choosing between a resume summary and a resume objective — with examples for every career stage.
            </p>
            <p className="text-sm text-muted-foreground">Updated June 2025 · 8 min read</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12 not-prose">
              <p className="text-sm font-medium text-primary mb-2">⚡ Quick Answer</p>
              <p className="text-sm text-muted-foreground">Use a <strong>Summary</strong> if you have 2+ years of experience. Use an <strong>Objective</strong> if you&apos;re changing careers, a recent graduate, or entering the workforce for the first time. Never use both.</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">What is a Resume Summary?</h2>
            <p className="text-muted-foreground mb-6">A resume summary is a 2-4 sentence paragraph at the top of your resume that highlights your professional experience, key skills, and major achievements. It&apos;s designed for professionals who have a track record to showcase.</p>

            <div className="bg-muted/50 border border-card-border rounded-xl p-6 mb-8 not-prose">
              <p className="text-sm font-semibold mb-3">📝 Summary Example</p>
              <p className="text-sm text-muted-foreground italic">&quot;Results-driven software engineer with 6+ years of experience building scalable web applications. Led a team of 12 developers to deliver a $2M e-commerce platform, reducing load times by 60%. Expert in React, TypeScript, and cloud architecture.&quot;</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">What is a Resume Objective?</h2>
            <p className="text-muted-foreground mb-6">A resume objective is a 1-2 sentence statement that describes your career goals and what you&apos;re looking for. It&apos;s best for people who don&apos;t have much relevant experience yet — students, career changers, and re-entrants to the workforce.</p>

            <div className="bg-muted/50 border border-card-border rounded-xl p-6 mb-8 not-prose">
              <p className="text-sm font-semibold mb-3">📝 Objective Example</p>
              <p className="text-sm text-muted-foreground italic">&quot;Detail-oriented computer science graduate seeking a frontend developer position where I can apply my React and JavaScript skills to create user-friendly web experiences.&quot;</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto mb-8 not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-primary">Summary</th>
                    <th className="text-left py-3 px-4 font-semibold text-accent">Objective</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border"><td className="py-3 px-4">Best for</td><td className="py-3 px-4">Experienced professionals</td><td className="py-3 px-4">Students, career changers</td></tr>
                  <tr className="border-b border-border"><td className="py-3 px-4">Focus</td><td className="py-3 px-4">Past achievements</td><td className="py-3 px-4">Future goals</td></tr>
                  <tr className="border-b border-border"><td className="py-3 px-4">Length</td><td className="py-3 px-4">2-4 sentences</td><td className="py-3 px-4">1-2 sentences</td></tr>
                  <tr className="border-b border-border"><td className="py-3 px-4">Includes metrics</td><td className="py-3 px-4">Yes (recommended)</td><td className="py-3 px-4">Usually not</td></tr>
                  <tr className="border-b border-border"><td className="py-3 px-4">Recruiter preference</td><td className="py-3 px-4">⭐⭐⭐⭐⭐</td><td className="py-3 px-4">⭐⭐⭐</td></tr>
                  <tr><td className="py-3 px-4">ATS-friendly</td><td className="py-3 px-4">Yes</td><td className="py-3 px-4">Yes</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4">5 Resume Summary Examples by Industry</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="text-sm font-semibold text-primary mb-2">Software Engineer</p>
                <p className="text-sm text-muted-foreground italic">&quot;Full-stack developer with 5 years of experience in React, Node.js, and AWS. Built microservices handling 10M+ daily requests. Passionate about clean code and mentoring junior developers.&quot;</p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="text-sm font-semibold text-primary mb-2">Marketing Manager</p>
                <p className="text-sm text-muted-foreground italic">&quot;Data-driven marketing leader with 8+ years scaling DTC brands. Grew email subscriber list from 10K to 500K, generating $3M in annual revenue. Expert in SEO, content strategy, and marketing automation.&quot;</p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="text-sm font-semibold text-primary mb-2">Registered Nurse</p>
                <p className="text-sm text-muted-foreground italic">&quot;Compassionate RN with 10+ years in emergency medicine. Managed triage for 50+ patients daily. Certified in ACLS and PALS. Recognized for 99% patient satisfaction scores.&quot;</p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="text-sm font-semibold text-primary mb-2">Project Manager</p>
                <p className="text-sm text-muted-foreground italic">&quot;PMP-certified project manager who has delivered 30+ enterprise projects on time and under budget. Saved $2.5M through process optimization. Expert in Agile, Scrum, and cross-functional leadership.&quot;</p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="text-sm font-semibold text-primary mb-2">Teacher / Educator</p>
                <p className="text-sm text-muted-foreground italic">&quot;Dedicated educator with 7 years improving student outcomes in Title I schools. Raised standardized test scores by 22%. Curriculum developer and mentor teacher.&quot;</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">When to Use an Objective Instead</h2>
            <p className="text-muted-foreground mb-4">Use a resume objective when:</p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground"><span className="text-success">✓</span>You&apos;re a recent graduate with limited work experience</li>
              <li className="flex items-start gap-3 text-muted-foreground"><span className="text-success">✓</span>You&apos;re changing careers and need to explain the transition</li>
              <li className="flex items-start gap-3 text-muted-foreground"><span className="text-success">✓</span>You&apos;re re-entering the workforce after a gap</li>
              <li className="flex items-start gap-3 text-muted-foreground"><span className="text-success">✓</span>You&apos;re targeting a very specific role that differs from your past titles</li>
            </ul>

            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold mb-3">Not Sure Which One Fits You?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">ResumeAI automatically generates the perfect summary or objective for your resume, tailored to each job you apply for.</p>
              <a href="/tailor" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/90 transition-all shadow-xl">
                Generate My Summary — Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

            <h2 className="text-2xl font-bold mb-4">Pro Tips</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="font-semibold text-sm mb-2">💡 Tailor it every time</p>
                <p className="text-sm text-muted-foreground">Your summary/objective should match each job description. Mention the job title and key skills from the posting.</p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="font-semibold text-sm mb-2">💡 Include keywords for ATS</p>
                <p className="text-sm text-muted-foreground">ATS systems scan the top of your resume first. Make sure your summary contains relevant keywords from the job posting.</p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-5">
                <p className="font-semibold text-sm mb-2">💡 Quantify whenever possible</p>
                <p className="text-sm text-muted-foreground">&quot;Managed a team&quot; → &quot;Managed a team of 15&quot;. Numbers grab attention and build credibility.</p>
              </div>
            </div>

            <div className="border-t border-border pt-12 mt-12 not-prose">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="/blog/how-to-tailor-resume-job-description" className="block bg-card border border-card-border rounded-xl p-5 hover:shadow-lg transition-all">
                  <p className="text-sm font-semibold mb-2">How to Tailor Your Resume</p>
                  <p className="text-xs text-muted-foreground">Step-by-step for any job</p>
                </a>
                <a href="/blog/cover-letter-no-experience" className="block bg-card border border-card-border rounded-xl p-5 hover:shadow-lg transition-all">
                  <p className="text-sm font-semibold mb-2">Cover Letter With No Experience</p>
                  <p className="text-xs text-muted-foreground">Templates and examples</p>
                </a>
                <a href="/blog/ats-friendly-resume" className="block bg-card border border-card-border rounded-xl p-5 hover:shadow-lg transition-all">
                  <p className="text-sm font-semibold mb-2">ATS-Friendly Resume Guide</p>
                  <p className="text-xs text-muted-foreground">Beat the screening bots</p>
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
