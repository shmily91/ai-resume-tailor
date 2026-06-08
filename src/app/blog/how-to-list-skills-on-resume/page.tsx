import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to List Skills on Resume (2026 Guide) | ResumeAI',
  description: 'Learn how to list skills on your resume effectively. Categories to include, formatting tips, and ATS optimization.',
  keywords: ['skills on resume', 'resume skills section', 'what skills to put on resume', 'soft skills resume'],
  openGraph: {
    title: 'How to List Skills on Resume (2026 Complete Guide)',
    description: 'Organize and present your skills effectively on your resume. Hard skills, soft skills, and ATS optimization tips.',
    type: 'article',
  },
};

export default function ResumeSkillsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <h1>How to List Skills on Resume (2026 Complete Guide)</h1>

          <p className="lead">
            The skills section is your chance to show employers what you can do. A well-organized skills section gets you past ATS systems and impresses recruiters. This guide shows you exactly how to list skills effectively.
          </p>

          <h2>Why the Skills Section Matters</h2>
          <ul>
            <li><strong>ATS optimization:</strong> 75% of resumes are screened by ATS—skills keywords are the #1 factor</li>
            <li><strong>Quick assessment:</strong> Recruiters scan for 6 seconds—skills jump out immediately</li>
            <li><strong>Match requirements:</strong> Shows you have the specific skills the job needs</li>
            <li><strong>Differentiation:</strong> Sets you apart from candidates with similar experience</li>
            <li><strong>Future potential:</strong> Demonstrates capability to learn and grow</li>
          </ul>

          <h2>Types of Skills to Include</h2>

          <h3>Hard Skills (Technical)</h3>
          <ul>
            <li><strong>Programming:</strong> Python, JavaScript, Java, C++, SQL</li>
            <li><strong>Software:</strong> Excel, Photoshop, Salesforce, Jira</li>
            <li><strong>Languages:</strong> Spanish, French, Mandarin, German</li>
            <li><strong>Equipment:</strong> 3D printers, CNC machines, medical devices</li>
            <li><strong>Certifications:</strong> PMP, CPA, AWS, Google Analytics</li>
          </ul>

          <h3>Soft Skills (Interpersonal)</h3>
          <ul>
            <li><strong>Communication:</strong> Verbal, written, presentation</li>
            <li><strong>Teamwork:</strong> Collaboration, leadership, mentorship</li>
            <li><strong>Problem-solving:</strong> Critical thinking, analysis, creativity</li>
            <li><strong>Time management:</strong> Prioritization, organization, efficiency</li>
            <li><strong>Adaptability:</strong> Flexibility, learning, change management</li>
          </ul>

          <h2>Skills Section Format</h2>

          <h3>Option 1: Categorized List (Recommended)</h3>
          <pre><code>SKILLS

Technical:
Python, JavaScript, React, Node.js, SQL, AWS, Git, Docker

Languages:
English (Native), Spanish (Fluent)

Soft Skills:
Team leadership, Project management, Communication, Problem-solving</code></pre>

          <h3>Option 2: Simple List (Entry-Level)</h3>
          <pre><code>SKILLS

Python, JavaScript, HTML/CSS, SQL, Excel, Photoshop,
Microsoft Office, Teamwork, Communication, Problem-solving</code></pre>

          <h3>Option 3: Proficiency Levels (Senior Positions)</h3>
          <pre><code>SKILLS

Technical Skills:
• Python (Expert)
• JavaScript (Advanced)
• SQL (Advanced)
• AWS (Intermediate)

Languages:
• English (Native)
• Spanish (Professional Working)</code></pre>

          <h2>How Many Skills to Include</h2>

          <h3>By Experience Level</h3>
          <ul>
            <li><strong>Entry-level:</strong> 10-15 skills (mix of hard and soft)</li>
            <li><strong>Mid-level:</strong> 12-20 skills (more specialized)</li>
            <li><strong>Senior-level:</strong> 15-25 skills (highly specialized)</li>
          </ul>

          <h3>By Industry</h3>
          <ul>
            <li><strong>Tech:</strong> 15-25 skills (many technical)</li>
            <li><strong>Marketing:</strong> 12-18 skills (mix of tools and soft skills)</li>
            <li><strong>Finance:</strong> 10-15 skills (industry-specific)</li>
            <li><strong>Healthcare:</strong> 10-12 skills (certifications and soft skills)</li>
          </ul>

          <h2>Skills to Include by Industry</h2>

          <h3>Software Development</h3>
          <ul>
            <li>Programming languages (Python, Java, JavaScript)</li>
            <li>Frameworks (React, Angular, Django)</li>
            <li>Databases (MySQL, MongoDB, PostgreSQL)</li>
            <li>Cloud platforms (AWS, Azure, GCP)</li>
            <li>Version control (Git, SVN)</li>
            <li>Development tools (Docker, Jenkins, Kubernetes)</li>
          </ul>

          <h3>Marketing</h3>
          <ul>
            <li>Digital marketing (SEO, PPC, email, social media)</li>
            <li>Analytics (Google Analytics, Mixpanel, Tableau)</li>
            <li>Content creation (Copywriting, video, design)</li>
            <li>Marketing automation (HubSpot, Mailchimp, Marketo)</li>
            <li>Project management (Asana, Trello, Basecamp)</li>
          </ul>

          <h3>Finance</h3>
          <ul>
            <li>Financial analysis (Excel, financial modeling, forecasting)</li>
            <li>Accounting software (QuickBooks, SAP, Oracle)</li>
            <li>Risk management (compliance, auditing, reporting)</li>
            <li>Investment analysis (stocks, bonds, derivatives)</li>
            <li>Data analysis (SQL, Python, R)</li>
          </ul>

          <h3>Healthcare</h3>
          <ul>
            <li>Clinical skills (patient care, diagnostics, treatment)</li>
            <li>Medical software (EHR systems, medical coding)</li>
            <li>Certifications (BLS, ACLS, CPR, RN license)</li>
            <li>Soft skills (empathy, communication, teamwork)</li>
            <li>Specialized knowledge (pharmacology, anatomy, procedures)</li>
          </ul>

          <h2>ATS Optimization for Skills</h2>

          <h3>Keyword Matching</h3>
          <ul>
            <li>Read job description carefully</li>
            <li>Include exact skills mentioned</li>
            <li>Use standard industry terminology</li>
            <li>Avoid abbreviations unless common</li>
            <li>Include both full names and common abbreviations</li>
          </ul>

          <h3>ATS-Friendly Formatting</h3>
          <ul>
            <li>Use standard fonts (Arial, Calibri)</li>
            <li>Single-column layout</li>
            <li>Left-aligned text</li>
            <li>No graphics or icons</li>
            <li>No tables or text boxes</li>
            <li>Simple bullet points</li>
          </ul>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li><strong>Listing too many skills:</strong> Stick to 10-25 maximum</li>
            <li><strong>Being generic:</strong> "Computer skills" means nothing</li>
            <li><strong>Including outdated skills:</strong> Remove skills from 10+ years ago</li>
            <li><strong>Lying about proficiency:</strong> Honesty is always discovered</li>
            <li><strong>Mismatching with job:</strong> Tailor skills to each application</li>
            <li><strong>Forgetting soft skills:</strong> They're equally important</li>
            <li><strong>Not quantifying:</strong> Add years of experience where relevant</li>
          </ul>

          <h2>Skills Section Examples</h2>

          <h3>Software Developer</h3>
          <pre><code>SKILLS

Programming Languages:
Python (5 years), JavaScript (4 years), Java (3 years), SQL (3 years)

Frameworks & Libraries:
React, Angular, Node.js, Django, Express.js

Cloud & DevOps:
AWS (EC2, S3, Lambda), Docker, Kubernetes, Git, Jenkins

Tools & Technologies:
PostgreSQL, MongoDB, Redis, Linux, REST APIs, GraphQL

Languages:
English (Native), Spanish (Intermediate)

Soft Skills:
Team leadership, Code review, Problem-solving, Communication</code></pre>

          <h3>Marketing Manager</h3>
          <pre><code>SKILLS

Digital Marketing:
SEO (Yoast, SEMrush), PPC (Google Ads, Facebook Ads),
Email Marketing (Mailchimp, HubSpot), Social Media Marketing

Analytics & Data:
Google Analytics, Google Data Studio, Mixpanel, Excel (Advanced)

Content Marketing:
Copywriting, Content Strategy, Video Editing (Adobe Premiere),
Graphic Design (Canva, Photoshop)

Marketing Tools:
HubSpot, Marketo, Salesforce, Asana, Trello

Soft Skills:
Project Management, Team Leadership, Cross-functional Collaboration,
Data-driven Decision Making</code></pre>

          <h3>Entry-Level Position</h3>
          <pre><code>SKILLS

Technical Skills:
Microsoft Office (Word, Excel, PowerPoint, Outlook),
Google Workspace (Docs, Sheets, Slides),
Social Media Platforms (LinkedIn, Twitter, Instagram),
Basic HTML/CSS

Languages:
English (Native), Spanish (Conversational)

Soft Skills:
Communication, Teamwork, Problem-solving,
Time Management, Adaptability, Customer Service</code></pre>

          <h2>How to Tailor Skills for Each Job</h2>

          <h3>Step 1: Analyze Job Description</h3>
          <ul>
            <li>Extract all skills mentioned</li>
            <li>Identify required vs. preferred skills</li>
            <li>Note industry-specific terminology</li>
          </ul>

          <h3>Step 2: Match Your Skills</h3>
          <ul>
            <li>Include all required skills you have</li>
            <li>Add relevant preferred skills</li>
            <li>Use exact wording from job description</li>
          </ul>

          <h3>Step 3: Reorder by Relevance</h3>
          <ul>
            <li>Put most important skills first</li>
            <li>Group related skills together</li>
            <li>Highlight unique skills that set you apart</li>
          </ul>

          <h2>Skills Section Checklist</h2>
          <p>Before submitting, ensure your skills section:</p>
          <ul>
            <li>✓ Includes 10-25 relevant skills</li>
            <li>✓ Has both hard and soft skills</li>
            <li>✓ Is organized by category</li>
            <li>✓ Matches job requirements</li>
            <li>✓ Uses standard industry terminology</li>
            <li>✓ Is ATS-friendly format</li>
            <li>✓ Is honest about proficiency levels</li>
            <li>✓ Is tailored to each application</li>
          </ul>

          <h2>Need Help Listing Your Skills?</h2>
          <p>
            Our AI analyzes your resume and the job description, then automatically extracts and organizes your skills into an ATS-optimized skills section that matches job requirements perfectly.
          </p>

          <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <p className="text-lg font-semibold text-green-900 mb-2">Auto-Extract and Organize Your Skills</p>
            <p className="text-green-800 mb-4">
              Let AI identify, categorize, and list your skills perfectly for each job application.
            </p>
            <a
              href="/tailor"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Tailor My Skills Now →
            </a>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h3>
            <ul className="space-y-2">
              <li><a href="/blog/how-to-write-skills-section-on-resume" className="text-blue-600 hover:underline">How to Write Skills Section on Resume (2026 Guide)</a></li>
              <li><a href="/blog/resume-power-words" className="text-blue-600 hover:underline">Resume Power Words That Get Interviews (Complete List)</a></li>
              <li><a href="/blog/ats-friendly-resume" className="text-blue-600 hover:underline">Creating ATS-Friendly Resumes: A Complete Guide</a></li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}