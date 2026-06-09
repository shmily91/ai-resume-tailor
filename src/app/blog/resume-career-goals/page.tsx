import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Career Goals: How to Write Them (Examples for Every Stage) | ResumeAI",
  description: "Learn to articulate your career goals effectively on your resume. Includes short-term vs. long-term goals, examples for freshers to executives, and how to align them with the job.",
};

export default function ResumeCareerGoalsGuide() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-4">
          <span className="text-blue-600 font-medium text-sm">SEO Guide • 10 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Resume Career Goals: How to Write Them (Examples for Every Stage)
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Defining your career goals on your resume shows ambition and direction. This guide explains when to include them, how to write them effectively, and provides ready-to-use examples for every career stage.
        </p>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-10">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#what-are" className="text-blue-600 hover:underline">What Are Career Goals on a Resume?</a></li>
            <li><a href="#when-to-include" className="text-blue-600 hover:underline">When Should You Include Career Goals?</a></li>
            <li><a href="#short-vs-long-term" className="text-blue-600 hover:underline">Short-Term vs. Long-Term Goals</a></li>
            <li><a href="#examples" className="text-blue-600 hover:underline">30+ Career Goals Examples by Role and Level</a></li>
            <li><a href="#writing-tips" className="text-blue-600 hover:underline">5 Tips for Writing Effective Career Goals</a></li>
            <li><a href="#ats-friendly" className="text-blue-600 hover:underline">How to Optimize for ATS</a></li>
            <li><a href="#common-mistakes" className="text-blue-600 hover:underline">Common Mistakes to Avoid</a></li>
          </ul>
        </div>

        <section id="what-are" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">What Are Career Goals on a Resume?</h2>
          <p className="text-gray-600 mb-4">
            Career goals on a resume are concise statements that describe your professional aspirations and what you aim to achieve in your next role and beyond. They can appear in your resume objective, summary, or a dedicated section.
          </p>
          <p className="text-gray-600 mb-4">
            Unlike a resume objective (which focuses on what you want in a job), career goals focus on your broader professional journey. They show recruiters that you're ambitious, forward-thinking, and aligned with the company's direction.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-sm text-gray-700">
              <strong>Why Include Them?</strong> Career goals help recruiters assess whether you're a good long-term fit. They also demonstrate self-awareness and strategic thinking.
            </p>
          </div>
        </section>

        <section id="when-to-include" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">When Should You Include Career Goals?</h2>
          <p className="text-gray-600 mb-6">
            You should include career goals in these scenarios:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><strong>Entry-Level Candidates:</strong> When you have little to no work experience, goals show potential and direction.</li>
            <li><strong>Career Changers:</strong> When transitioning to a new field, goals explain your motivation and vision.</li>
            <li><strong>Internal Promotions:</strong> When applying for a higher role within your company, goals demonstrate ambition.</li>
            <li><strong>Specific Industries:</strong> Some industries (like education or nonprofit) expect career goals.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <strong>When to Skip:</strong> If you're an experienced professional with a clear track record, your resume summary and experience section already communicate your value. Adding goals can feel redundant.
          </p>
        </section>

        <section id="short-vs-long-term" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Short-Term vs. Long-Term Goals</h2>
          <p className="text-gray-600 mb-4">
            Career goals are often divided into short-term and long-term categories. Both are valuable, but they serve different purposes.
          </p>
          <table className="w-full mb-6 text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Short-Term Goals (1–3 years)</th>
                <th className="border p-2 text-left">Long-Term Goals (5+ years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Focus on immediate skill development and role-specific achievements</td>
                <td className="border p-2">Focus on leadership, specialization, or industry impact</td>
              </tr>
              <tr>
                <td className="border p-2">Example: "Master data visualization tools"</td>
                <td className="border p-2">Example: "Lead a data team at a Fortune 500 company"</td>
              </tr>
              <tr>
                <td className="border p-2">Should align with the job you're applying for</td>
                <td className="border p-2">Should show ambition and alignment with company growth</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">30+ Career Goals Examples by Role and Level</h2>
          <p className="text-gray-600 mb-6">
            Below are tailored examples for different roles and career stages. Customize these to reflect your true aspirations.
          </p>

          <h3 className="text-xl font-bold mb-3 text-gray-800">Entry-Level / Freshers</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Software Developer</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Master full-stack development and contribute to open-source projects. Long-term: Become a senior software architect and lead innovative product development."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Marketing Associate</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Learn advanced SEO and content marketing strategies. Long-term: Lead a marketing team and drive brand growth for a global company."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Data Analyst</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Become proficient in SQL, Python, and data visualization. Long-term: Transition to data science and build predictive models for business insights."
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-800">Mid-Level (3–7 Years)</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Project Manager</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Earn PMP certification and manage cross-functional projects. Long-term: Lead a PMO and drive organizational efficiency."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>UX Designer</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Specialize in mobile app design and accessibility. Long-term: Become a design director and shape user experience strategies."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Sales Manager</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Expand the sales team and increase revenue by 20%. Long-term: Lead a regional sales division and enter new markets."
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-800">Senior-Level (8+ Years)</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Engineering Director</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Scale the engineering team and improve system reliability. Long-term: Drive technical strategy and become a CTO."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Marketing VP</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Expand global brand presence and launch new products. Long-term: Become CMO and shape the company's market leadership."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>HR Director</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Implement talent development programs and improve retention. Long-term: Lead HR strategy and support organizational growth."
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-800">Career Changer Examples</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Teacher to Corporate Trainer</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Transition into corporate training and develop e-learning modules. Long-term: Lead a training department and shape employee development programs."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Finance to Product Manager</strong></p>
              <p className="text-gray-700 italic">
                "Short-term: Learn product management fundamentals and work on a fintech product. Long-term: Lead product strategy for a financial services company."
              </p>
            </div>
          </div>
        </section>

        <section id="writing-tips" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">5 Tips for Writing Effective Career Goals</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-600">
            <li><strong>Be Specific:</strong> Instead of "I want to grow," say "I want to lead a team of 10 engineers and deliver 3 major products."</li>
            <li><strong>Align with the Job:</strong> Ensure your goals match the role's requirements and the company's direction.</li>
            <li><strong>Use Action Verbs:</strong> Start with verbs like "lead," "develop," "achieve," "expand," or "master."</li>
            <li><strong>Keep It Realistic:</strong> Set achievable goals that demonstrate ambition without sounding unrealistic.</li>
            <li><strong>Show Growth Mindset:</strong> Emphasize learning, development, and contribution over just "getting promoted."</li>
          </ol>
        </section>

        <section id="ats-friendly" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">How to Optimize for ATS</h2>
          <p className="text-gray-600 mb-4">
            Applicant Tracking Systems (ATS) scan for keywords. Here's how to make your career goals ATS-friendly:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><strong>Use Job-Specific Keywords:</strong> Include terms from the job description (e.g., "project management," "team leadership").</li>
            <li><strong>Avoid Vague Phrasing:</strong> Be clear and specific — ATS algorithms rank detailed goals higher.</li>
            <li><strong>Keep It Concise:</strong> Aim for 1–2 sentences per goal. Longer statements can get cut off in ATS previews.</li>
          </ul>
        </section>

        <section id="common-mistakes" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">Being Too Generic</h3>
              <p className="text-sm text-gray-700">
                Instead of "I want to succeed," use "I want to lead a sales team and increase revenue by 20%."
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">Focusing Only on Personal Gain</h3>
              <p className="text-sm text-gray-700">
                Employers want to know how your goals benefit the company. Align your aspirations with organizational success.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">Including Irrelevant Goals</h3>
              <p className="text-sm text-gray-700">
                Avoid mentioning unrelated ambitions (e.g., "I want to start a bakery") unless they directly support the role.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">Overloading with Goals</h3>
              <p className="text-sm text-gray-700">
                Stick to 2–3 key goals. Too many can make you seem unfocused.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-10">
          <h2 className="text-2xl font-bold mb-4">Create a Resume That Reflects Your Ambitions</h2>
          <p className="mb-6 text-blue-100">
            Use ResumeAI to build a professional resume that highlights your career goals. Our AI-powered tool helps you articulate your aspirations and tailor your resume to any job.
          </p>
          <Link href="/" className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
            Build Your Resume Now
          </Link>
        </div>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-700 mb-2">How many career goals should I include?</h3>
              <p className="text-gray-600 text-sm">
                Include 2–3 goals: one short-term and one long-term, with an optional third focused on skill development.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-2">Where should I place career goals on my resume?</h3>
              <p className="text-gray-600 text-sm">
                Place them in your resume objective or summary. You can also add a dedicated "Career Goals" section if space permits.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-2">Can I change my career goals for different applications?</h3>
              <p className="text-gray-600 text-sm">
                Yes, and you should! Tailor your goals to match each job's requirements and the company's direction.
              </p>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}