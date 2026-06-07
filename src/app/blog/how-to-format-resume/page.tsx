import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Format Resume (2026 Complete Formatting Guide) | ResumeAI',
  description: 'Master resume formatting with our complete 2026 guide. Learn proper fonts, margins, spacing, and ATS-optimized layouts that recruiters love.',
  keywords: ['resume format', 'resume formatting', 'ATS resume format', 'resume layout', 'resume design tips'],
  openGraph: {
    title: 'How to Format a Resume (2026 Complete Formatting Guide)',
    description: 'Create a perfectly formatted resume that passes ATS and impresses recruiters. Complete guide with templates and examples.',
    type: 'article',
  },
};

export default function ResumeFormatGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          <h1>How to Format a Resume (2026 Complete Formatting Guide)</h1>

          <p className="lead">
            Your resume's format determines whether recruiters read it or reject it. A well-formatted resume passes ATS systems, looks professional, and makes your qualifications stand out. This guide covers everything you need to know.
          </p>

          <h2>Why Resume Formatting Matters</h2>
          <ul>
            <li><strong>ATS compatibility:</strong> 98% of Fortune 500 companies use ATS—formatting determines whether you're filtered out</li>
            <li><strong>First impressions:</strong> Recruiters spend 6-7 seconds scanning—formatting determines what they see</li>
            <li><strong>Readability:</strong> Good formatting makes your resume easy to scan and understand</li>
            <li><strong>Professionalism:</strong> Clean, consistent formatting signals attention to detail</li>
            <li><strong>Focus:</strong> Proper formatting guides recruiters' eyes to your key qualifications</li>
          </ul>

          <h2>Essential Resume Formatting Guidelines</h2>

          <h3>Page Layout</h3>
          <ul>
            <li><strong>Page size:</strong> US Letter (8.5" × 11") standard</li>
            <li><strong>Margins:</strong> 0.5" to 1" on all sides</li>
            <li><strong>Alignment:</strong> Left-align text, left-align dates (right-align dates can confuse ATS)</li>
            <li><strong>Columns:</strong> Single column only—avoid two-column layouts (ATS can't read them)</li>
            <li><strong>Length:</strong> 1-2 pages maximum</li>
          </ul>

          <h3>Font Selection</h3>
          <ul>
            <li><strong>Type:</strong> Use standard fonts only</li>
            <li><strong>Recommended:</strong> Arial, Calibri, Georgia, Helvetica, Times New Roman, Trebuchet MS, Verdana</li>
            <li><strong>Font size:</strong> 10-12 pt for body text, 14-16 pt for headings</li>
            <li><strong>Consistency:</strong> Use one font throughout</li>
            <li><strong>Avoid:</strong> Decorative fonts, multiple fonts, unusual fonts (e.g., Comic Sans, Impact)</li>
          </ul>

          <h3>Spacing and Layout</h3>
          <ul>
            <li><strong>Line spacing:</strong> Single or 1.15 line spacing</li>
            <li><strong>Paragraph spacing:</strong> Add space between sections</li>
            <li><strong>Bullet point spacing:</strong> Consistent spacing between bullets</li>
            <li><strong>White space:</strong> Use white space strategically—don't crowd content</li>
            <li><strong>Consistency:</strong> Maintain consistent spacing throughout</li>
          </ul>

          <h3>Section Headings</h3>
          <ul>
            <li><strong>Style:</strong> Use ALL CAPS or bold (not both)</li>
            <li><strong>Size:</strong> 14-16 pt font</li>
            <li><strong>Position:</strong> Left-aligned</li>
            <li><strong>Spacing:</strong> Add extra space above each heading</li>
            <li><strong>Standard sections:</strong> Contact Information, Summary, Experience, Education, Skills</li>
          </ul>

          <h2>ATS-Friendly Formatting</h2>

          <h3>What ATS Can Read</h3>
          <ul>
            <li>Standard fonts (Arial, Calibri, Times New Roman)</li>
            <li>Simple bullet points (disc, circle)</li>
            <li>Left-aligned text</li>
            <li>Standard dates (Month Year)</li>
            <li>Clear section headings</li>
            <li>Single-column layout</li>
          </ul>

          <h3>What ATS Can't Read</h3>
          <ul>
            <li>Two-column layouts</li>
            <li>Graphics, images, charts</li>
            <li>Tables</li>
            <li>Text boxes</li>
            <li>Headers/footers</li>
            <li>Symbols and special characters</li>
            <li>Non-standard fonts</li>
            <li>Columns within columns</li>
          </ul>

          <h2>Resume Section Formatting by Order</h2>

          <h3>1. Contact Information (Top)</h3>
          <pre><code>JOHN SMITH
555-123-4567 | john.smith@email.com
linkedin.com/in/johnsmith
San Francisco, CA</code></pre>
          <p><strong>Formatting tips:</strong></p>
          <ul>
            <li>Center-align or left-align name (14-16 pt)</li>
            <li>Left-align contact info (10-11 pt)</li>
            <li>Use pipes (|) or bullets to separate items</li>
            <li>Include location (city, state)</li>
            <li>One phone number, one email, one LinkedIn profile</li>
          </ul>

          <h3>2. Summary or Objective</h3>
          <pre><code>RESULTS-DRIVEN SOFTWARE ENGINEER with 7 years of experience developing
scalable web applications. Delivered products serving 500K+ users and improved
system performance by 40%. Expert in React, Node.js, and AWS.</code></pre>
          <p><strong>Formatting tips:</strong></p>
          <ul>
            <li>2-3 sentences maximum</li>
            <li>Left-align text</li>
            <li>10-12 pt font</li>
            <li>Use professional summary format</li>
          </ul>

          <h3>3. Work Experience</h3>
          <pre><code>WORK EXPERIENCE

Senior Software Engineer | TechCorp Inc. | San Francisco, CA
June 2022 - Present

• Led development team of 8 to deliver 3 major products on schedule
• Improved application performance by 40% through code optimization
• Implemented CI/CD pipeline reducing deployment time by 60%
• Mentored 5 junior developers, 3 of whom were promoted

Software Developer | StartupXYZ | San Francisco, CA
Jan 2019 - May 2022

• Built full-stack web applications using React and Node.js
• Developed API endpoints serving 100K+ requests daily
• Collaborated with product team on feature development
• Reduced bug rate by 25% through code review process</code></pre>
          <p><strong>Formatting tips:</strong></p>
          <ul>
            <li>Company name, title, location, date on separate lines</li>
            <li>Date format: Month Year - Month Year</li>
            <li>Bullet points for achievements (4-6 per position)</li>
            <li>Left-align bullet points</li>
            <li>Consistent verb tense (present for current, past for previous)</li>
            <li>Quantify achievements with numbers</li>
          </ul>

          <h3>4. Education</h3>
          <pre><code>EDUCATION

Bachelor of Science in Computer Science
University of California, Berkeley | Berkeley, CA | May 2019
GPA: 3.7/4.0

Relevant Coursework: Data Structures, Web Development, Database Systems</code></pre>
          <p><strong>Formatting tips:</strong></p>
          <ul>
            <li>Degree, institution, location, graduation date on separate lines</li>
            <li>Include GPA if 3.5+</li>
            <li>List relevant coursework for recent graduates</li>
            <li>Place education before experience if you're a recent graduate</li>
          </ul>

          <h3>5. Skills</h3>
          <pre><code>SKILLS

Technical: Python, JavaScript, React, Node.js, SQL, AWS, Git
Languages: English (Native), Spanish (Conversational)
Soft Skills: Team leadership, Project management, Problem-solving</code></pre>
          <p><strong>Formatting tips:</strong></p>
          <ul>
            <li>Group skills by category</li>
            <li>Use commas or bullets to separate items</li>
            <li>List most relevant skills first</li>
            <li>Include both technical and soft skills</li>
          </ul>

          <h2>Common Formatting Mistakes to Avoid</h2>
          <ul>
            <li><strong>Using two-column layouts:</strong> ATS can't read them</li>
            <li><strong>Multiple fonts:</strong> Use one font throughout</li>
            <li><strong>Inconsistent spacing:</strong> Maintain uniform spacing</li>
            <li><strong>Tiny fonts:</strong> Never use fonts smaller than 10 pt</li>
            <li><strong>Excessive formatting:</strong> Avoid bold, italics, and underline overuse</li>
            <li><strong>Tables and text boxes:</strong> ATS can't parse them</li>
            <li><strong>Symbols and special characters:</strong> Keep it simple</li>
            <li><strong>Graphics and images:</strong> Don't include photos, logos, or charts</li>
          </ul>

          <h2>Before & After Formatting Examples</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mt-6 mb-6">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-100">Bad Formatting</th>
                  <th className="border border-gray-300 p-2 bg-gray-100">Good Formatting</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Two columns, decorative font, no clear sections</td>
                  <td className="border border-gray-300 p-2">Single column, standard font, clear section headings</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Font size: 8 pt</td>
                  <td className="border border-gray-300 p-2">Font size: 11 pt body, 14 pt headings</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Margins: 0.25"</td>
                  <td className="border border-gray-300 p-2">Margins: 0.75"</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Dates: right-aligned</td>
                  <td className="border border-gray-300 p-2">Dates: left-aligned with company</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Resume Formatting Checklist</h2>
          <p>Before submitting, ensure your resume:</p>
          <ul>
            <li>✓ Uses one standard font throughout</li>
            <li>✓ Has consistent font sizes (10-12 pt body, 14-16 pt headings)</li>
            <li>✓ Maintains consistent margins (0.5-1")</li>
            <li>✓ Uses single-column layout</li>
            <li>✓ Has clear, left-aligned section headings</li>
            <li>✓ Includes adequate white space</li>
            <li>✓ Avoids tables, text boxes, and graphics</li>
            <li>✓ Uses consistent date format throughout</li>
            <li>✓ Is 1-2 pages maximum</li>
            <li>✓ Is saved as PDF (ATS-friendly)</li>
          </ul>

          <h2>Need Help Formatting Your Resume?</h2>
          <p>
            Formatting mistakes can cost you interviews. Our AI-powered tool automatically formats your resume to be ATS-optimized and recruiter-friendly—ensuring you look professional and get noticed.
          </p>

          <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <p className="text-lg font-semibold text-green-900 mb-2">Get Perfectly Formatted Resumes</p>
            <p className="text-green-800 mb-4">
              Let AI format, optimize, and tailor your resume for each job—ATS-compatible and recruiter-approved.
            </p>
            <a
              href="/tailor"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Format My Resume Now →
            </a>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Related Articles</h3>
            <ul className="space-y-2">
              <li><a href="/blog/ats-friendly-resume" className="text-blue-600 hover:underline">Creating ATS-Friendly Resumes: A Complete Guide</a></li>
              <li><a href="/blog/common-resume-mistakes" className="text-blue-600 hover:underline">Common Resume Mistakes to Avoid (2026 Guide)</a></li>
              <li><a href="/blog/how-to-write-resume-summary" className="text-blue-600 hover:underline">How to Write a Resume Summary (Complete Guide with Examples)</a></li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}