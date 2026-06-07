import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Write Resume Experience Section (2026 Guide) | ResumeAI',
  description: 'Master the work experience section of your resume. Learn how to describe your achievements, quantify results, and impress recruiters.',
  keywords: ['resume experience section', 'work experience resume', 'resume achievements', 'how to describe work experience'],
  openGraph: {
    title: 'How to Write Resume Experience Section (2026 Complete Guide)',
    description: 'Transform your work experience into compelling resume content. Templates, examples, and action verbs that get interviews.',
    type: 'article',
  },
};

export default function ResumeExperienceGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <h1>How to Write Resume Experience Section (2026 Complete Guide)</h1>

          <p className="lead">
            Your work experience section is the most important part of your resume—recruiters spend 70% of their time here. This guide shows you how to turn your job history into powerful achievements that get interviews.
          </p>

          <h2>Why the Experience Section Matters</h2>
          <ul>
            <li><strong>Recruiter focus:</strong> 70% of resume review time is spent on experience</li>
            <li><strong>Proves value:</strong> Shows you can deliver results, not just do tasks</li>
            <li><strong>Differentiates you:</strong> Strong achievements set you apart from other candidates</li>
            <li><strong>Demonstrates growth:</strong> Shows progression and career development</li>
            <li><strong>Predicts future performance:</strong> Past performance predicts future success</li>
          </ul>

          <h2>Experience Section Structure</h2>

          <h3>Standard Format</h3>
          <pre><code>COMPANY NAME | Location | Dates

Job Title

• Achievement 1
• Achievement 2
• Achievement 3</code></pre>

          <h3>Essential Elements</h3>
          <ul>
            <li><strong>Company name:</strong> Full company name</li>
            <li><strong>Location:</strong> City, State (optional for remote jobs)</li>
            <li><strong>Dates:</strong> Month Year - Month Year (or "Present")</li>
            <li><strong>Job title:</strong> Your official position</li>
            <li><strong>Achievements:</strong> 4-6 bullet points per position</li>
          </ul>

          <h2>How to Write Strong Resume Achievements</h2>

          <h3>The STAR Method</h3>
          <p>Use this framework for every achievement:</p>
          <ul>
            <li><strong>S - Situation:</strong> What was the context?</li>
            <li><strong>T - Task:</strong> What needed to be done?</li>
            <li><strong>A - Action:</strong> What did you do?</li>
            <li><strong>R - Result:</strong> What was the outcome?</li>
          </ul>

          <h3>Weak vs. Strong Achievements</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mt-6 mb-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 bg-red-100">Weak</th>
                  <th className="border border-gray-300 p-2 bg-green-100">Strong</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Responsible for managing team</td>
                  <td className="border border-gray-300 p-2">Led team of 8, achieving 95% project delivery rate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Improved sales</td>
                  <td className="border border-gray-300 p-2">Increased sales by 45% through new sales strategy</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Managed social media</td>
                  <td className="border border-gray-300 p-2">Grew social media following from 2K to 50K (2,400% increase)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Developed software</td>
                  <td className="border border-gray-300 p-2">Built web application serving 100K+ daily users</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Quantify Your Achievements</h2>

          <h3>What to Quantify</h3>
          <ul>
            <li>Revenue growth (percentage and dollars)</li>
            <li>Cost savings</li>
            <li>Time savings</li>
            <li>Team sizes managed</li>
            <li>Projects delivered</li>
            <li>Budget amounts managed</li>
            <li>User/customer counts</li>
            <li>Performance improvements (percentages)</li>
            <li>Awards and recognitions</li>
          </ul>

          <h3>Quantification Templates</h3>
          <ul>
            <li>"Increased [metric] by [X]%"</li>
            <li>"Reduced [metric] by [X]"</li>
            <li>"Managed [X] person team"</li>
            <li>"Delivered [X] projects on time"</li>
            <li>"Served [X] customers/users"</li>
            <li>"Saved [X] hours/week"</li>
            <li>"Generated [X] in revenue"</li>
          </ul>

          <h2>Use Strong Action Verbs</h2>

          <h3>Leadership & Management</h3>
          <ul>
            <li>Led, Directed, Managed, Supervised, Coordinated</li>
            <li>Mentored, Trained, Guided, Developed</li>
            <li>Launched, Initiated, Founded, Established</li>
          </ul>

          <h3>Achievement & Results</h3>
          <ul>
            <li>Achieved, Exceeded, Attained, Reached</li>
            <li>Improved, Enhanced, Optimized, Strengthened</li>
            <li>Increased, Grew, Expanded, Maximized</li>
          </ul>

          <h3>Creation & Development</h3>
          <ul>
            <li>Created, Developed, Built, Designed</li>
            <li>Implemented, Executed, Deployed, Delivered</li>
            <li>Invented, Pioneered, Introduced, Established</li>
          </ul>

          <h3>Analysis & Problem-Solving</h3>
          <ul>
            <li>Analyzed, Investigated, Researched, Evaluated</li>
            <li>Resolved, Solved, Fixed, Addressed</li>
            <li>Identified, Discovered, Uncovered, Revealed</li>
          </ul>

          <h2>Experience Section Examples</h2>

          <h3>Software Engineer</h3>
          <pre><code>TechCorp Inc. | San Francisco, CA
June 2022 - Present

Senior Software Engineer

• Led development of 3 major products, serving 500K+ users
• Improved application performance by 40% through code optimization
• Implemented CI/CD pipeline, reducing deployment time by 60%
• Mentored 5 junior developers, 3 promoted within 18 months

Software Developer | StartupXYZ | San Francisco, CA
Jan 2019 - May 2022

• Built full-stack web applications using React and Node.js
• Developed API endpoints handling 100K+ daily requests
• Reduced bug rate by 25% through code review process
• Collaborated with product team on feature development</code></pre>

          <h3>Marketing Manager</h3>
          <pre><code>ABC Marketing | New York, NY
March 2020 - Present

Marketing Manager

• Increased website traffic by 200% through SEO and content marketing
• Managed $500K annual marketing budget, achieving 3.5x ROI
• Built marketing team from 2 to 8 members
• Launched 15 successful campaigns, generating $2M+ in revenue

Marketing Specialist | XYZ Agency | New York, NY
June 2017 - February 2020

• Managed social media accounts for 20+ clients
• Created content strategy that grew engagement by 150%
• Coordinated events attended by 5K+ people
• Designed marketing materials increasing conversion by 30%</code></pre>

          <h3>Project Manager</h3>
          <pre><code>InnovateTech | Austin, TX
August 2021 - Present

Senior Project Manager

• Managed portfolio of 10 projects, $5M total budget
• Achieved 92% on-time delivery rate (industry average: 65%)
• Led cross-functional teams of 15-25 people
• Implemented Agile methodology, improving velocity by 45%

Project Manager | TechStart | Austin, TX
January 2019 - July 2021

• Delivered 20+ projects on time and under budget
• Managed teams of up to 12 across 3 time zones
• Reduced project overhead by 30% through process optimization
• Created project templates used company-wide</code></pre>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li><strong>Listing duties instead of achievements:</strong> Focus on what you accomplished, not what you were responsible for</li>
            <li><strong>Using weak language:</strong> Avoid "responsible for," "assisted with," "participated in"</li>
            <li><strong>Not quantifying results:</strong> Always include numbers, percentages, and metrics</li>
            <li><strong>Being too vague:</strong> Be specific about what you did and the results</li>
            <li><strong>Using clichés:</strong> Avoid "team player," "hard worker," "detail-oriented"</li>
            <li><strong>Overcrowding with bullet points:</strong> Stick to 4-6 per position</li>
            <li><strong>Old information:</strong> Remove experience older than 10-15 years unless highly relevant</li>
          </ul>

          <h2>Tips for Different Career Stages</h2>

          <h3>Entry-Level (0-2 years)</h3>
          <ul>
            <li>Include internships, part-time jobs, and relevant projects</li>
            <li>Focus on transferrable skills and learning</li>
            <li>Quantify even small achievements</li>
            <li>Emphasize soft skills: teamwork, communication, adaptability</li>
          </ul>

          <h3>Mid-Level (3-7 years)</h3>
          <ul>
            <li>Focus on measurable achievements and results</li>
            <li>Show progression in responsibility</li>
            <li>Highlight leadership of projects or small teams</li>
            <li>Demonstrate specialization and expertise</li>
          </ul>

          <h3>Senior-Level (8+ years)</h3>
          <ul>
            <li>Emphasize strategic impact and leadership</li>
            <li>Focus on revenue, growth, and organizational impact</li>
            <li>Show management of teams and budgets</li>
            <li>Include high-profile clients and major achievements</li>
          </ul>

          <h2>Experience Section Checklist</h2>
          <p>Before submitting, ensure your experience section:</p>
          <ul>
            <li>✓ Uses strong action verbs</li>
            <li>✓ Quantifies achievements with numbers</li>
            <li>✓ Shows results, not just duties</li>
            <li>✓ Has 4-6 bullet points per position</li>
            <li>✓ Uses consistent date format throughout</li>
            <li>✓ Includes relevant recent positions</li>
            <li>✓ Shows career progression</li>
            <li>✓ Is tailored to the job you're applying for</li>
          </ul>

          <h2>Need Help Writing Your Experience Section?</h2>
          <p>
            Writing compelling achievements is hard. Our AI analyzes your job history and the job description, then rewrites your experience section to highlight the most relevant achievements using strong action verbs and quantifiable results.
          </p>

          <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <p className="text-lg font-semibold text-green-900 mb-2">Transform Your Experience into Achievements</p>
            <p className="text-green-800 mb-4">
              Let AI rewrite your work experience section with strong achievements, action verbs, and quantified results that get interviews.
            </p>
            <a
              href="/tailor"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Rewrite My Experience Now →
            </a>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h3>
            <ul className="space-y-2">
              <li><a href="/blog/resume-power-words" className="text-blue-600 hover:underline">Resume Power Words That Get Interviews (Complete List)</a></li>
              <li><a href="/blog/common-resume-mistakes" className="text-blue-600 hover:underline">Common Resume Mistakes to Avoid (2026 Guide)</a></li>
              <li><a href="/blog/how-to-write-resume-summary" className="text-blue-600 hover:underline">How to Write a Resume Summary (Complete Guide with Examples)</a></li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}