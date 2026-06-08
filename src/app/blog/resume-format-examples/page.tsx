import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume Format Examples (2026 Complete Guide) | ResumeAI',
  description: 'Explore professional resume format examples for every industry. Learn which format works best for your experience level and job type.',
  keywords: 'resume format, resume format examples, resume templates, resume layout, resume design, resume examples',
};

export default function ResumeFormatExamples() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Resume Format Examples</span>: Complete 2026 Guide
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The right resume format can make or break your job application. Discover professional resume format examples for every experience level, industry, and career stage. Choose the format that highlights your strengths and gets you hired.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              15 min read
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Updated for 2026
            </span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <h2>The Three Main Resume Formats</h2>

          <p>Before diving into examples, understand the three core resume formats and when to use each:</p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">1. Chronological</h3>
              <p className="text-sm mb-4">Best for: Strong work history, career progression</p>
              <ul className="space-y-2 text-xs">
                <li>✅ Highlights steady career growth</li>
                <li>✅ Most familiar to recruiters</li>
                <li>✅ Shows continuity and loyalty</li>
                <li>❌ Gaps become obvious</li>
                <li>❌ Not ideal for career changers</li>
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent mb-4">2. Functional</h3>
              <p className="text-sm mb-4">Best for: Career changers, gaps in employment</p>
              <ul className="space-y-2 text-xs">
                <li>✅ Highlights skills over work history</li>
                <li>✅ Minimizes employment gaps</li>
                <li>✅ Great for career transitions</li>
                <li>❌ Some recruiters dislike it</li>
                <li>❌ Less familiar format</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">3. Hybrid</h3>
              <p className="text-sm mb-4">Best for: Most professionals, balanced approach</p>
              <ul className="space-y-2 text-xs">
                <li>✅ Combines both formats</li>
                <li>✅ Highlights skills + experience</li>
                <li>✅ Flexibility for various situations</li>
                <li>✅ ATS-friendly</li>
                <li>❌ Can be longer than one page</li>
              </ul>
            </div>
          </div>

          <h2>Resume Format Examples by Experience Level</h2>

          <h3>🎓 Entry-Level Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <p className="text-sm text-muted-foreground mb-4">Best for: Recent graduates, students, first jobs</p>
            
            <div className="bg-muted rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-sm mb-3">Structure:</h4>
              <ol className="text-sm space-y-1">
                <li><strong>1. Header</strong> - Name, contact, LinkedIn</li>
                <li><strong>2. Professional Summary</strong> - 2-3 sentences highlighting education and goals</li>
                <li><strong>3. Education</strong> - Degree, university, GPA, relevant coursework</li>
                <li><strong>4. Skills</strong> - Technical and soft skills</li>
                <li><strong>5. Experience</strong> - Internships, part-time jobs, volunteer work</li>
                <li><strong>6. Projects/Activities</strong> - School projects, clubs, sports</li>
              </ol>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-3">💡 Pro Tips for Entry-Level:</h4>
              <ul className="text-sm space-y-1">
                <li>• Emphasize education if little experience</li>
                <li>• Include academic projects and achievements</li>
                <li>• List relevant coursework and certifications</li>
                <li>• Highlight transferable skills from any work</li>
                <li>• Keep to one page</li>
              </ul>
            </div>
          </div>

          <h3>📊 Mid-Level Professional Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <p className="text-sm text-muted-foreground mb-4">Best for: 3-7 years experience, career advancement</p>

            <div className="bg-muted rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-sm mb-3">Structure:</h4>
              <ol className="text-sm space-y-1">
                <li><strong>1. Header</strong> - Name, contact, LinkedIn, portfolio</li>
                <li><strong>2. Professional Summary</strong> - 3-4 lines highlighting expertise and value</li>
                <li><strong>3. Core Competencies</strong> - 6-8 key skills with examples</li>
                <li><strong>4. Professional Experience</strong> - Reverse chronological, achievements-focused</li>
                <li><strong>5. Education</strong> - Degree, university (can be shorter than entry-level)</li>
                <li><strong>6. Certifications</strong> - Relevant professional certifications</li>
                <li><strong>7. Projects</strong> - Key projects and results (optional)</li>
              </ol>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-3">💡 Pro Tips for Mid-Level:</h4>
              <ul className="text-sm space-y-1">
                <li>• Focus on achievements, not just responsibilities</li>
                <li>• Quantify results with numbers and percentages</li>
                <li>• Include leadership and mentorship experience</li>
                <li>• Show career progression and growth</li>
                <li>• Can be 1-2 pages depending on experience</li>
              </ul>
            </div>
          </div>

          <h3>🏆 Senior-Level Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <p className="text-sm text-muted-foreground mb-4">Best for: 8+ years experience, leadership roles, executive positions</p>

            <div className="bg-muted rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-sm mb-3">Structure:</h4>
              <ol className="text-sm space-y-1">
                <li><strong>1. Header</strong> - Name, contact, LinkedIn, industry recognition</li>
                <li><strong>2. Executive Summary</strong> - 4-6 lines highlighting strategic impact and leadership</li>
                <li><strong>3. Core Competencies</strong> - Leadership, strategic, industry expertise</li>
                <li><strong>4. Leadership Experience</strong> - Executive roles, major achievements, impact</li>
                <li><strong>5. Professional Experience</strong> - Senior roles, team management, P&L responsibility</li>
                <li><strong>6. Education & Certifications</strong> - Can be condensed</li>
                <li><strong>7. Board Memberships / Speaking Engagements</strong> - Industry influence</li>
                <li><strong>8. Awards & Recognition</strong> - Industry honors, patents, publications</li>
              </ol>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-3">💡 Pro Tips for Senior-Level:</h4>
              <ul className="text-sm space-y-1">
                <li>• Focus on strategic impact and business results</li>
                <li>• Highlight leadership, team building, P&L</li>
                <li>• Include industry influence and recognition</li>
                <li>• Show ability to drive organizational change</li>
                <li>• 2-3 pages acceptable for extensive experience</li>
              </ul>
            </div>
          </div>

          <h2>Resume Format Examples by Industry</h2>

          <h3>💻 Technology Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <p className="text-sm text-muted-foreground mb-4">Focus: Technical skills, projects, achievements</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-3">Key Sections:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Technical Skills (languages, frameworks, tools)</li>
                  <li>• Projects with links to GitHub/portfolio</li>
                  <li>• Work Experience with technical achievements</li>
                  <li>• Education & Certifications</li>
                  <li>• Open Source Contributions</li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-3">Best Practices:</h4>
                <ul className="text-sm space-y-1">
                  <li>• List programming languages and proficiency</li>
                  <li>• Include project URLs and code samples</li>
                  <li>• Quantify technical achievements</li>
                  <li>• Mention system design and architecture</li>
                  <li>• Include hackathons and competitions</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>💰 Finance Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <p className="text-sm text-muted-foreground mb-4">Focus: Quantifiable results, financial expertise, certifications</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-3">Key Sections:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Professional Summary with financial expertise</li>
                  <li>• Core Competencies (analysis, modeling, reporting)</li>
                  <li>• Experience with P&L, budgets, deals</li>
                  <li>• Certifications (CPA, CFA, FRM)</li>
                  <li>• Education with GPA and honors</li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-3">Best Practices:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Quantify financial impact ($, %, ROI)</li>
                  <li>• Include deal sizes and portfolio performance</li>
                  <li>• Highlight certifications prominently</li>
                  <li>• Mention software skills (Excel, Bloomberg, systems)</li>
                  <li>• Show progression in responsibility</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>🎨 Creative Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <p className="text-sm text-muted-foreground mb-4">Focus: Portfolio, creativity, visual presentation</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-3">Key Sections:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Portfolio link (Dribbble, Behance, personal site)</li>
                  <li>• Creative Skills (design tools, techniques)</li>
                  <li>• Experience with award-winning work</li>
                  <li>• Notable Clients & Brands</li>
                  <li>• Awards & Recognition</li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-3">Best Practices:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Use visual design strategically</li>
                  <li>• Include portfolio link prominently</li>
                  <li>• Show creative process and thinking</li>
                  <li>• Mention industry recognition</li>
                  <li>• Balance creativity with readability</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>🏥 Healthcare Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <p className="text-sm text-muted-foreground mb-4">Focus: Licenses, certifications, clinical experience</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-3">Key Sections:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Licenses & Certifications (state, specialty)</li>
                  <li>• Clinical Skills & Specializations</li>
                  <li>• Professional Experience with patient care</li>
                  <li>• Education with clinical rotations</li>
                  <li>• Professional Memberships</li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-3">Best Practices:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Include license numbers and expiration dates</li>
                  <li>• Highlight clinical specializations</li>
                  <li>• Quantify patient care outcomes</li>
                  <li>• Mention continuing education</li>
                  <li>• Include professional certifications</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Resume Format Examples by Job Type</h2>

          <h3>📈 Sales Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Best For: Account executives, business development, sales managers</h4>
                <p className="text-sm text-muted-foreground mb-3">Focus: Quota achievement, deal sizes, client relationships</p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm"><strong>Key Elements:</strong> Revenue numbers, deal sizes, quotas exceeded, client retention, territory growth, sales awards</p>
                </div>
              </div>
            </div>
          </div>

          <h3>👨‍💼 Project Management Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Best For: Project managers, program managers, Scrum masters</h4>
                <p className="text-sm text-muted-foreground mb-3">Focus: Project delivery, team leadership, budget management</p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm"><strong>Key Elements:</strong> Project budgets, team sizes, on-time delivery, certifications (PMP, Agile), methodologies, tools</p>
                </div>
              </div>
            </div>
          </div>

          <h3>📝 Marketing Resume Format</h3>

          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Best For: Digital marketers, content marketers, marketing managers</h4>
                <p className="text-sm text-muted-foreground mb-3">Focus: Campaign results, ROI, metrics, creative achievements</p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm"><strong>Key Elements:</strong> Campaign metrics, ROI numbers, audience growth, content performance, budget managed, tools/platforms</p>
                </div>
              </div>
            </div>
          </div>

          <h2>ATS-Optimized Resume Format</h2>

          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8 my-8">
            <h3 className="text-xl font-semibold mb-4">🤖 Make Your Resume ATS-Friendly</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-3">✅ DO:</h4>
                <ul className="space-y-1">
                  <li>• Use standard section headings</li>
                  <li>• Include job description keywords</li>
                  <li>• Use standard fonts (Arial, Calibri)</li>
                  <li>• Save as .docx or PDF (unless specified)</li>
                  <li>• Avoid complex formatting</li>
                  <li>• Include relevant skills</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">❌ DON'T:</h4>
                <ul className="space-y-1">
                  <li>• Use tables or columns</li>
                  <li>• Include images or graphics</li>
                  <li>• Use creative section names</li>
                  <li>• Use fancy fonts or colors</li>
                  <li>• Embed information in headers/footers</li>
                  <li>• Overuse bullet points</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Resume Format Mistakes to Avoid</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">❌ Wrong Format for Experience Level</h4>
              <p className="text-sm text-muted-foreground">Entry-level shouldn't use executive summary. Senior leaders shouldn't focus on coursework. Match format to experience.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">❌ Inconsistent Formatting</h4>
              <p className="text-sm text-muted-foreground">Mixed fonts, inconsistent bullet styles, and random spacing look unprofessional. Maintain consistency throughout.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">❌ Too Much Information</h4>
              <p className="text-sm text-muted-foreground">Including irrelevant experience from 20 years ago distracts from current qualifications. Focus on recent, relevant experience.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">❌ Ignoring Industry Norms</h4>
              <p className="text-sm text-muted-foreground">Creative resume for finance job looks out of place. Research what's standard in your industry and follow it.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">❌ Forgetting to Customize</h4>
              <p className="text-sm text-muted-foreground">Using the same resume format for every application misses opportunities to highlight different strengths.</p>
            </div>
          </div>

          <h2>Quick Reference: Choose the Right Format</h2>

          <div className="bg-muted border border-border rounded-lg p-6 my-8">
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-semibold">Recent Graduate / Student</p>
                  <p className="text-muted-foreground">Use Chronological with Education first, or Hybrid if you have projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-semibold">Career Changer</p>
                  <p className="text-muted-foreground">Use Functional or Hybrid to highlight transferable skills</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold">Mid-Level Professional</p>
                  <p className="text-muted-foreground">Use Chronological or Hybrid to show growth and achievements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold">Senior Executive</p>
                  <p className="text-muted-foreground">Use Chronological with executive summary, leadership focus</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕰️</span>
                <div>
                  <p className="font-semibold">Employment Gaps</p>
                  <p className="text-muted-foreground">Use Functional or Hybrid to minimize gaps, explain briefly in cover letter</p>
                </div>
              </div>
            </div>
          </div>

          <h2>Ready to Format Your Resume Perfectly?</h2>
          <p>Now you know which resume format works best for your experience level, industry, and career goals. But the format is just the beginning—tailoring it to each job application is what gets you hired.</p>

          <p>Use our <a href="/tailor" className="text-primary font-semibold hover:underline">AI Resume Tailor</a> to automatically format and optimize your resume with the perfect structure, keywords, and achievements for any job description.</p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8 text-center">
            <p className="text-lg font-semibold text-primary mb-4">
              Get a perfectly formatted, ATS-optimized resume in under 10 seconds
            </p>
            <a href="/tailor" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-all">
              Format My Resume Now
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/blog/how-to-format-resume" className="block p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
              <h4 className="font-semibold mb-2">How to Format a Resume</h4>
              <p className="text-sm text-muted-foreground">Master resume formatting with our complete guide.</p>
            </a>
            <a href="/blog/how-to-write-resume-experience" className="block p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
              <h4 className="font-semibold mb-2">How to Write Resume Experience</h4>
              <p className="text-sm text-muted-foreground">Learn to write impactful experience sections.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}