"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import type { TailoredResume } from "@/lib/ai";

export default function TailorPage() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TailoredResume | null>(null);
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"input" | "result">("input");
  const [remaining, setRemaining] = useState<number | null>(null);
  const [limitReached, setLimitReached] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // Fetch usage on mount
  useState(() => {
    fetch("/api/tailor")
      .then((r) => r.json())
      .then((data) => {
        setRemaining(data.remaining);
        if (data.remaining <= 0) setLimitReached(true);
      })
      .catch(() => {});
  });

  const handleTailor = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setError("Please fill in both your resume and the job description.");
      return;
    }

    if (limitReached) {
      setError("You've reached the free limit. Upgrade to Pro for unlimited access.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resume: resumeText,
          jobDescription: jobDescription,
        }),
      });

      const data = await response.json();

      if (response.status === 429) {
        setLimitReached(true);
        setRemaining(0);
        setError(data.message || "Free limit reached. Upgrade to Pro!");
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Update remaining count from response meta
      if (data._meta) {
        setRemaining(data._meta.remaining);
        if (data._meta.remaining <= 0) setLimitReached(true);
      }

      setResult(data);
      setMode("result");
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const escapeHtml = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const handleDownloadPDF = () => {
    if (!result) return;

    // Generate a clean text version for printing as PDF
    const lines: string[] = [];
    lines.push(result.name);
    if (result.title) lines.push(result.title);
    const contactParts = [
      result.email,
      result.phone,
      result.location,
      result.linkedin,
    ].filter(Boolean);
    if (contactParts.length > 0) lines.push(contactParts.join(" | "));
    lines.push("");
    lines.push("═".repeat(60));
    lines.push("PROFESSIONAL SUMMARY");
    lines.push("═".repeat(60));
    lines.push(result.summary);
    lines.push("");

    if (result.experience?.length > 0) {
      lines.push("═".repeat(60));
      lines.push("PROFESSIONAL EXPERIENCE");
      lines.push("═".repeat(60));
      for (const exp of result.experience) {
        lines.push("");
        lines.push(`${exp.title}${exp.company ? ` — ${exp.company}` : ""}`);
        if (exp.dates) lines.push(exp.dates);
        lines.push("─".repeat(40));
        for (const bullet of exp.bullets) {
          lines.push(`  • ${bullet}`);
        }
      }
      lines.push("");
    }

    if (result.education?.length > 0) {
      lines.push("═".repeat(60));
      lines.push("EDUCATION");
      lines.push("═".repeat(60));
      for (const edu of result.education) {
        lines.push("");
        lines.push(edu.degree);
        lines.push(edu.school);
        if (edu.dates) lines.push(edu.dates);
        if (edu.details) lines.push(edu.details);
      }
      lines.push("");
    }

    if (result.skills?.length > 0) {
      lines.push("═".repeat(60));
      lines.push("SKILLS");
      lines.push("═".repeat(60));
      lines.push(result.skills.join(" • "));
    }

    const content = lines.join("\n");

    // Create a printable window
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${escapeHtml(result.name)} - Tailored Resume</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Inter', -apple-system, sans-serif;
              padding: 48px;
              max-width: 800px;
              margin: 0 auto;
              color: #1a1a1a;
              line-height: 1.5;
              font-size: 11pt;
            }
            h1 { font-size: 22pt; font-weight: 700; margin-bottom: 2pt; color: #111; }
            .title { font-size: 12pt; color: #555; margin-bottom: 8pt; }
            .contact { font-size: 10pt; color: #666; margin-bottom: 16pt; border-bottom: 1px solid #e5e5e5; padding-bottom: 12pt; }
            h2 { font-size: 13pt; font-weight: 600; text-transform: uppercase; letter-spacing: 1pt; color: #2563eb; margin: 20pt 0 10pt; border-bottom: 2px solid #2563eb; padding-bottom: 4pt; }
            .summary { font-size: 10.5pt; color: #333; margin-bottom: 8pt; }
            .exp-title { font-weight: 600; font-size: 11pt; }
            .exp-company { color: #555; }
            .exp-dates { font-size: 9.5pt; color: #888; margin-bottom: 4pt; }
            .bullet { margin-left: 16pt; margin-bottom: 4pt; font-size: 10.5pt; }
            .bullet::before { content: "• "; color: #2563eb; font-weight: bold; }
            .skills { display: flex; flex-wrap: wrap; gap: 6pt; }
            .skill { background: #f0f4ff; color: #2563eb; padding: 3pt 10pt; border-radius: 12pt; font-size: 9.5pt; }
            .edu-degree { font-weight: 600; }
            .edu-school { color: #555; }
            .edu-dates { font-size: 9.5pt; color: #888; }
            @media print {
              body { padding: 36px; }
            }
          </style>
        </head>
        <body>
          <h1>${escapeHtml(result.name)}</h1>
          ${result.title ? `<div class="title">${escapeHtml(result.title)}</div>` : ""}
          <div class="contact">
            ${[result.email, result.phone, result.location, result.linkedin].filter(Boolean).map(escapeHtml).join(" • ")}
          </div>

          <h2>Professional Summary</h2>
          <p class="summary">${escapeHtml(result.summary)}</p>

          ${result.experience?.length > 0 ? `
          <h2>Professional Experience</h2>
          ${result.experience.map((exp) => `
            <div style="margin-bottom: 14pt;">
              <div class="exp-title">${escapeHtml(exp.title)} <span class="exp-company">${exp.company ? `— ${escapeHtml(exp.company)}` : ""}</span></div>
              ${exp.dates ? `<div class="exp-dates">${escapeHtml(exp.dates)}</div>` : ""}
              ${exp.bullets.map((b) => `<div class="bullet">${escapeHtml(b)}</div>`).join("")}
            </div>
          `).join("")}
          ` : ""}

          ${result.education?.length > 0 ? `
          <h2>Education</h2>
          ${result.education.map((edu) => `
            <div style="margin-bottom: 10pt;">
              <div class="edu-degree">${escapeHtml(edu.degree)}</div>
              <div class="edu-school">${escapeHtml(edu.school)}</div>
              ${edu.dates ? `<div class="edu-dates">${escapeHtml(edu.dates)}</div>` : ""}
              ${edu.details ? `<div style="font-size: 9.5pt; color: #666;">${escapeHtml(edu.details)}</div>` : ""}
            </div>
          `).join("")}
          ` : ""}

          ${result.skills?.length > 0 ? `
          <h2>Skills</h2>
          <div class="skills">
            ${result.skills.map((s) => `<span class="skill">${escapeHtml(s)}</span>`).join("")}
          </div>
          ` : ""}
        </body>
        </html>
      `);
      printWindow.document.close();
      setTimeout(() => printWindow.print(), 500);
    }
  };

  const handleCopyText = () => {
    if (!result) return;

    const lines: string[] = [];
    lines.push(result.name);
    if (result.title) lines.push(result.title);
    const contactParts = [result.email, result.phone, result.location, result.linkedin].filter(Boolean);
    if (contactParts.length) lines.push(contactParts.join(" | "));
    lines.push("");
    lines.push("PROFESSIONAL SUMMARY");
    lines.push(result.summary);
    lines.push("");

    if (result.experience?.length) {
      lines.push("EXPERIENCE");
      for (const exp of result.experience) {
        lines.push(`${exp.title}${exp.company ? ` - ${exp.company}` : ""}`);
        if (exp.dates) lines.push(exp.dates);
        for (const b of exp.bullets) lines.push(`• ${b}`);
        lines.push("");
      }
    }

    if (result.education?.length) {
      lines.push("EDUCATION");
      for (const edu of result.education) {
        lines.push(`${edu.degree} - ${edu.school}`);
        if (edu.dates) lines.push(edu.dates);
      }
      lines.push("");
    }

    if (result.skills?.length) {
      lines.push("SKILLS");
      lines.push(result.skills.join(", "));
    }

    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      alert("Resume copied to clipboard!");
    }).catch(() => {
      // Fallback: select text from a temp textarea
      const textarea = document.createElement("textarea");
      textarea.value = lines.join("\n");
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("Resume copied to clipboard!");
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span className="text-base font-bold">
              Resume<span className="gradient-text">AI</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {mode === "result" && (
              <button
                onClick={() => setMode("input")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Editor
              </button>
            )}
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {mode === "input" ? (
          <div className="animate-fade-in">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Tailor Your Resume
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Paste your resume and the job description below. AI will create
                a perfectly tailored version.
              </p>
            </div>

            {/* Input area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Resume Input */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  <span className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    Your Current Resume
                  </span>
                </label>
                <textarea
                  className="w-full h-80 p-4 bg-card border border-border rounded-xl text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-muted-foreground/50"
                  placeholder={`Paste your resume here...\n\nExample:\nJohn Smith\njohn@email.com | (555) 123-4567\n\nSUMMARY\nExperienced software engineer with 5+ years...\n\nEXPERIENCE\nSenior Developer - ABC Corp (2020 - Present)\n• Led team of 5 engineers...\n• Built microservices architecture...\n\nEDUCATION\nBS Computer Science - State University (2018)\n\nSKILLS\nPython, JavaScript, AWS, Docker, SQL`}
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">
                    {resumeText.length > 0
                      ? `${resumeText.split(/\s+/).filter(Boolean).length} words`
                      : "Paste your full resume text"}
                  </span>
                </div>
              </div>

              {/* Job Description Input */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  <span className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    Job Description
                  </span>
                </label>
                <textarea
                  className="w-full h-80 p-4 bg-card border border-border rounded-xl text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-muted-foreground/50"
                  placeholder={`Paste the job description here...\n\nExample:\nSenior Software Engineer\n\nWe are looking for a Senior Software Engineer...\n\nRequirements:\n- 5+ years experience in Python\n- Experience with AWS and cloud infrastructure\n- Strong understanding of microservices\n- Experience with CI/CD pipelines`}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">
                    {jobDescription.length > 0
                      ? `${jobDescription.split(/\s+/).filter(Boolean).length} words`
                      : "Paste the full job posting"}
                  </span>
                </div>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm flex items-start gap-2 animate-fade-in">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <div className="flex-1">
                  <span>{error}</span>
                  {limitReached && (
                    <Link
                      href="/#pricing"
                      className="inline-flex items-center gap-1 mt-2 ml-2 bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Upgrade to Pro →
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Generate button */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleTailor}
                disabled={loading || !resumeText.trim() || !jobDescription.trim()}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-10 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Tailoring Your Resume...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    Tailor My Resume
                  </>
                )}
              </button>
              <span className="text-xs text-muted-foreground">
                {remaining !== null && !limitReached
                  ? `${remaining} free use${remaining !== 1 ? "s" : ""} remaining this month • No signup required`
                  : limitReached
                  ? "Free limit reached — Upgrade to Pro for unlimited"
                  : "Free to use • No signup required"}
              </span>
            </div>
          </div>
        ) : (
          /* Result View */
          result && (
            <div ref={resultRef} className="animate-fade-in">
              {/* Match Score Bar */}
              <div className="mb-6 p-4 bg-card border border-border rounded-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-1">ATS Match Score</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-48 h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${result.matchScore}%`,
                            background:
                              result.matchScore >= 80
                                ? "#10b981"
                                : result.matchScore >= 60
                                ? "#f59e0b"
                                : "#ef4444",
                          }}
                        />
                      </div>
                      <span
                        className={`text-lg font-bold ${
                          result.matchScore >= 80
                            ? "text-success"
                            : result.matchScore >= 60
                            ? "text-warning"
                            : "text-error"
                        }`}
                      >
                        {result.matchScore}%
                      </span>
                    </div>
                  </div>

                  {result.keywordsAdded?.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium mb-1">
                        Keywords Added
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {result.keywordsAdded.slice(0, 8).map((kw) => (
                          <span
                            key={kw}
                            className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full"
                          >
                            +{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </button>
                <button
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Text
                </button>
                <button
                  onClick={() => {
                    setMode("input");
                    setResult(null);
                  }}
                  className="inline-flex items-center gap-2 border border-border hover:bg-muted text-muted-foreground font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                  Try Again
                </button>
              </div>

              {/* Resume Preview */}
              <div className="bg-white border border-border rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 sm:p-12 max-w-3xl mx-auto">
                  {/* Name and Contact */}
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {result.name}
                    </h1>
                    {result.title && (
                      <p className="text-sm text-gray-500 mt-1">
                        {result.title}
                      </p>
                    )}
                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2 text-xs text-gray-500">
                      {result.email && <span>{result.email}</span>}
                      {result.phone && <span>{result.phone}</span>}
                      {result.location && <span>{result.location}</span>}
                      {result.linkedin && <span>{result.linkedin}</span>}
                    </div>
                  </div>

                  <hr className="border-gray-200 mb-6" />

                  {/* Summary */}
                  <section className="mb-6">
                    <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                      Professional Summary
                    </h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {result.summary}
                    </p>
                  </section>

                  {/* Experience */}
                  {result.experience?.length > 0 && (
                    <section className="mb-6">
                      <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                        Professional Experience
                      </h2>
                      {result.experience.map((exp, i) => (
                        <div key={i} className="mb-4 last:mb-0">
                          <div className="flex justify-between items-baseline">
                            <h3 className="text-sm font-semibold text-gray-900">
                              {exp.title}
                              {exp.company && (
                                <span className="font-normal text-gray-600">
                                  {" "}
                                  — {exp.company}
                                </span>
                              )}
                            </h3>
                            {exp.dates && (
                              <span className="text-xs text-gray-500 shrink-0 ml-4">
                                {exp.dates}
                              </span>
                            )}
                          </div>
                          <ul className="mt-1.5 space-y-1">
                            {exp.bullets.map((bullet, j) => (
                              <li
                                key={j}
                                className="text-sm text-gray-700 flex gap-2"
                              >
                                <span className="text-primary mt-1">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </section>
                  )}

                  {/* Education */}
                  {result.education?.length > 0 && (
                    <section className="mb-6">
                      <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                        Education
                      </h2>
                      {result.education.map((edu, i) => (
                        <div key={i} className="mb-2">
                          <div className="flex justify-between items-baseline">
                            <h3 className="text-sm font-semibold text-gray-900">
                              {edu.degree}
                            </h3>
                            {edu.dates && (
                              <span className="text-xs text-gray-500">
                                {edu.dates}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{edu.school}</p>
                          {edu.details && (
                            <p className="text-xs text-gray-500 mt-0.5">
                              {edu.details}
                            </p>
                          )}
                        </div>
                      ))}
                    </section>
                  )}

                  {/* Skills */}
                  {result.skills?.length > 0 && (
                    <section>
                      <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                        Skills
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {result.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs bg-primary/5 text-primary border border-primary/10 px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              </div>

              {/* Upgrade CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-xl text-center">
                <h3 className="text-base font-semibold mb-2">
                  Want even better results?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upgrade to Pro for AI-powered deep tailoring with advanced ATS
                  optimization, cover letters, and more templates.
                </p>
                <Link
                  href="/#pricing"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-all"
                >
                  View Pro Plan →
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
