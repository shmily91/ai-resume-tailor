import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Resume Email Address Format: Professional Examples & Tips | ResumeAI",
  description: "Choose the right email address for your resume. Learn professional formats, what to avoid, and see 30+ examples that impress recruiters.",
};

export default function ResumeEmailAddressGuide() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-4">
          <span className="text-blue-600 font-medium text-sm">SEO Guide • 7 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Best Resume Email Address Format: Professional Examples & Tips
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Your email address is one of the first things recruiters see. A professional email creates a positive first impression and shows attention to detail. This guide covers best practices, formats to avoid, and ready-to-use examples.
        </p>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-10">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#why-matters" className="text-blue-600 hover:underline">Why Your Email Address Matters</a></li>
            <li><a href="#best-formats" className="text-blue-600 hover:underline">3 Best Resume Email Formats (With Examples)</a></li>
            <li><a href="#what-to-avoid" className="text-blue-600 hover:underline">What to Avoid: 10 Common Mistakes</a></li>
            <li><a href="#examples" className="text-blue-600 hover:underline">30+ Professional Email Address Examples by Industry</a></li>
            <li><a href="#creating-new" className="text-blue-600 hover:underline">How to Create a New Professional Email</a></li>
            <li><a href="#ats-friendly" className="text-blue-600 hover:underline">Email Addresses and ATS</a></li>
          </ul>
        </div>

        <section id="why-matters" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Your Email Address Matters</h2>
          <p className="text-gray-600 mb-4">
            Your email address is a key part of your professional identity. It appears on your resume, cover letter, and LinkedIn profile. An unprofessional email can:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
            <li>Create a negative first impression</li>
            <li>Make you appear careless or immature</li>
            <li>Reduce your chances of getting an interview</li>
            <li>Lead to spam filters blocking your emails</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-sm text-gray-700">
              <strong>Statistic:</strong> 76% of recruiters say an unprofessional email address makes them less likely to hire a candidate.
            </p>
          </div>
        </section>

        <section id="best-formats" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">3 Best Resume Email Formats (With Examples)</h2>
          <p className="text-gray-600 mb-6">
            Follow these formats to create a professional email address:
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Format 1: First Name + Last Name</h3>
              <p className="text-sm text-gray-600 mb-4">
                This is the most straightforward and widely accepted format.
              </p>
              <div className="bg-white rounded p-4 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Good Examples</th>
                      <th className="text-left py-2">Why It Works</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">john.doe@gmail.com</td>
                      <td className="py-2">Clear, professional, easy to remember</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">janesmith@outlook.com</td>
                      <td className="py-2">Simple, no numbers or special characters</td>
                    </tr>
                    <tr>
                      <td className="py-2">michael.brown@yahoo.com</td>
                      <td className="py-2">Uses dot separator for readability</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Format 2: First Initial + Last Name</h3>
              <p className="text-sm text-gray-600 mb-4">
                Use this if your full name is too long or already taken.
              </p>
              <div className="bg-white rounded p-4 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Good Examples</th>
                      <th className="text-left py-2">Why It Works</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">j.doe@gmail.com</td>
                      <td className="py-2">Concise, professional</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">s.smith@outlook.com</td>
                      <td className="py-2">Easy to type, no confusion</td>
                    </tr>
                    <tr>
                      <td className="py-2">r.williams@yahoo.com</td>
                      <td className="py-2">Simple format, works for any name</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Format 3: First Name + Last Initial</h3>
              <p className="text-sm text-gray-600 mb-4">
                Another alternative when your preferred name is unavailable.
              </p>
              <div className="bg-white rounded p-4 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Good Examples</th>
                      <th className="text-left py-2">Why It Works</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">john.d@gmail.com</td>
                      <td className="py-2">Professional, includes first name</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">jane.s@outlook.com</td>
                      <td className="py-2">Clear, avoids confusion</td>
                    </tr>
                    <tr>
                      <td className="py-2">michael.b@yahoo.com</td>
                      <td className="py-2">Balances brevity and professionalism</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="what-to-avoid" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">What to Avoid: 10 Common Mistakes</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">1. Using Nicknames or Handles</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">partygirl99@gmail.com</code>, <code className="bg-gray-100 px-1">coolguy007@outlook.com</code>
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">2. Including Birth Years</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">john.doe.1985@gmail.com</code> — reveals age and can lead to discrimination
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">3. Using Special Characters</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">john_doe!@gmail.com</code>, <code className="bg-gray-100 px-1">jane.smith#123@outlook.com</code>
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">4. Adding Random Numbers</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">john.doe123456@gmail.com</code> — looks unprofessional
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">5. Using Current Company Email</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">john.doe@currentcompany.com</code> — raises red flags about loyalty
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">6. Including Job Titles</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">developer.john@gmail.com</code> — limits your career flexibility
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">7. Using Obsolete Email Providers</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">john.doe@aol.com</code>, <code className="bg-gray-100 px-1">jane.smith@hotmail.com</code> — appears outdated
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">8. Making It Too Long</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">johnalexanderdoeiii@gmail.com</code> — hard to remember and type
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">9. Using Gender-Specific Terms</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">prettygirl.jane@gmail.com</code>, <code className="bg-gray-100 px-1">toughguy.mike@outlook.com</code>
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold text-red-800 mb-2">10. Including Sensitive Information</h3>
              <p className="text-sm text-gray-700">
                Avoid: <code className="bg-gray-100 px-1">john.doe.phonenumber@gmail.com</code> — privacy risk
              </p>
            </div>
          </div>
        </section>

        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">30+ Professional Email Address Examples by Industry</h2>
          <p className="text-gray-600 mb-6">
            Use these examples as inspiration for your own professional email address:
          </p>

          <h3 className="text-xl font-bold mb-3 text-gray-800">Technology & Engineering</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">alex.chen.dev@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">sarah.kim.eng@outlook.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">michael.rodriguez.tech@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">emily.johnson.software@outlook.com</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-800">Business & Finance</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">david.williams.finance@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">lisa.anderson.mba@outlook.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">robert.taylor.business@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">jennifer.miller.accounting@outlook.com</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-800">Marketing & Creative</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">amanda.white.design@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">chris.brown.marketing@outlook.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">melissa.garcia.content@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">kevin.martinez.media@outlook.com</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-800">Healthcare & Education</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">dr.rachel.thompson.md@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">prof.james.robinson@outlook.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">nurse.susan.clark@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">teacher.mark.lewis@outlook.com</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-800">General Purpose (Safe for Any Role)</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">first.last@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">f.lastname@outlook.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">first.last.pro@gmail.com</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm">name.contact@outlook.com</p>
            </div>
          </div>
        </section>

        <section id="creating-new" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">How to Create a New Professional Email</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-600">
            <li><strong>Choose a Provider:</strong> Gmail and Outlook are the most professional options. Avoid AOL, Yahoo, or Hotmail.</li>
            <li><strong>Pick Your Format:</strong> Use one of the three recommended formats from this guide.</li>
            <li><strong>Check Availability:</strong> If your first choice is taken, try adding a middle initial or using a different format.</li>
            <li><strong>Set Up Forwarding:</strong> Forward emails from your old account to your new one so you don't miss messages.</li>
            <li><strong>Update Everywhere:</strong> Change your email on your resume, LinkedIn, job applications, and professional networks.</li>
          </ol>
        </section>

        <section id="ats-friendly" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Email Addresses and ATS</h2>
          <p className="text-gray-600 mb-4">
            Applicant Tracking Systems (ATS) parse your email address from your resume. Here's how to ensure it's ATS-friendly:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><strong>Use Simple Formatting:</strong> Avoid complex separators or unusual characters.</li>
            <li><strong>Keep It Consistent:</strong> Use the same email address on your resume, cover letter, and application form.</li>
            <li><strong>Avoid Role-Specific Emails:</strong> Don't create emails like <code className="bg-gray-100 px-1">developer.john@gmail.com</code> — this limits your flexibility.</li>
          </ul>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-10">
          <h2 className="text-2xl font-bold mb-4">Build a Professional Resume with ResumeAI</h2>
          <p className="mb-6 text-blue-100">
            Create a polished resume that includes a professional email address and all the elements recruiters look for. Our AI-powered tool helps you craft a perfect application in minutes.
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
              <h3 className="font-bold text-gray-700 mb-2">Can I use my personal email for my resume?</h3>
              <p className="text-gray-600 text-sm">
                Yes, as long as it's professional. Avoid using emails with nicknames, birth years, or unprofessional handles.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-2">What if my name is already taken?</h3>
              <p className="text-gray-600 text-sm">
                Try adding a middle initial, using a different format, or adding a neutral word like "pro" or "contact."
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-2">Should I create a new email for job hunting?</h3>
              <p className="text-gray-600 text-sm">
                It's a good idea if your current email is unprofessional or outdated. A new email shows you're serious about your job search.
              </p>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}