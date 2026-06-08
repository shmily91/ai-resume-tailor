import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume Action Verbs List (2026 Powerful Guide) | ResumeAI',
  description: 'Discover 100+ resume action verbs organized by skill category. Make your resume stand out with powerful action words that catch recruiters\' attention.',
  keywords: 'resume action verbs, power words for resume, resume action words list, strong verbs for resume, resume writing tips',
};

export default function ResumeActionVerbs() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            100+ <span className="gradient-text">Resume Action Verbs</span> to Make Your Resume Stand Out
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Powerful action verbs are the difference between a boring resume and one that lands interviews. Use these 100+ organized action words to transform your resume from passive to impressive.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              10 min read
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
          <h2>Why Action Verbs Matter on Your Resume</h2>
          <p>
            Recruiters spend an average of 6-7 seconds scanning each resume. Weak, passive language like "responsible for" or "helped with" gets overlooked. <strong>Strong action verbs</strong> grab attention and clearly communicate your achievements.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-primary mb-4">The Difference is Clear</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">❌ Weak / Passive</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Responsible for managing</li>
                  <li>• Helped with sales</li>
                  <li>• Worked on marketing</li>
                  <li>• Involved in design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">✅ Strong / Active</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Managed</strong> and <strong>led</strong> teams</li>
                  <li>• <strong>Drove</strong> sales growth</li>
                  <li>• <strong>Executed</strong> marketing campaigns</li>
                  <li>• <strong>Designed</strong> innovative solutions</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>100+ Resume Action Verbs by Category</h2>
          
          <h3>🎯 Leadership & Management</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Led', 'Managed', 'Directed', 'Supervised', 'Mentored', 'Coached', 'Guided', 'Influenced', 'Motivated', 'Recruited', 'Trained', 'Oversaw', 'Coordinated', 'Delegated', 'Organized'].map(verb => (
                <span key={verb} className="font-medium text-foreground">✓ {verb}</span>
              ))}
            </div>
          </div>

          <h3>💰 Achievements & Results</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Achieved', 'Exceeded', 'Surpassed', 'Delivered', 'Produced', 'Completed', 'Accomplished', 'Attained', 'Earned', 'Won', 'Secured', 'Gained', 'Obtained', 'Reached', 'Hit'].map(verb => (
                <span key={verb} className="font-medium text-foreground">✓ {verb}</span>
              ))}
            </div>
          </div>

          <h3>🚀 Innovation & Problem-Solving</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Created', 'Developed', 'Designed', 'Invented', 'Pioneered', 'Introduced', 'Implemented', 'Established', 'Built', 'Founded', 'Launched', 'Initiated', 'Pioneered', 'Constructed', 'Formulated'].map(verb => (
                <span key={verb} className="font-medium text-foreground">✓ {verb}</span>
              ))}
            </div>
          </div>

          <h3>📊 Analysis & Research</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Analyzed', 'Researched', 'Investigated', 'Examined', 'Studied', 'Evaluated', 'Assessed', 'Reviewed', 'Audited', 'Surveyed', 'Examined', 'Discovered', 'Identified', 'Diagnosed', 'Detected'].map(verb => (
                <span key={verb} className="font-medium text-foreground">✓ {verb}</span>
              ))}
            </div>
          </div>

          <h3>💼 Communication</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Communicated', 'Presented', 'Negotiated', 'Persuaded', 'Articulated', 'Conveyed', 'Expressed', 'Corresponded', 'Interfaced', 'Liaised', 'Collaborated', 'Consulted', 'Advised', 'Counseled', 'Informed'].map(verb => (
                <span key={verb} className="font-medium text-foreground">✓ {verb}</span>
              ))}
            </div>
          </div>

          <h3>📈 Growth & Improvement</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Improved', 'Enhanced', 'Optimized', 'Streamlined', 'Increased', 'Boosted', 'Elevated', 'Expanded', 'Scaled', 'Accelerated', 'Maximized', 'Amplified', 'Grew', 'Strengthened', 'Reinforced'].map(verb => (
                <span key={verb} className="font-medium text-foreground">✓ {verb}</span>
              ))}
            </div>
          </div>

          <h3>🔧 Technical & Technical Skills</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Engineered', 'Programmed', 'Coded', 'Developed', 'Built', 'Architected', 'Integrated', 'Configured', 'Debugged', 'Tested', 'Deployed', 'Maintained', 'Refactored', 'Automated', 'Optimized'].map(verb => (
                <span key={verb} className="font-medium text-foreground">✓ {verb}</span>
              ))}
            </div>
          </div>

          <h2>How to Use Action Verbs Effectively</h2>

          <h3>1. Pair with Quantifiable Results</h3>
          <p>Always follow action verbs with specific numbers and outcomes:</p>
          <div className="bg-muted border border-border rounded-lg p-6 my-4">
            <p className="text-sm">✅ <strong>Generated</strong> $500K in annual revenue by implementing targeted marketing campaigns.</p>
            <p className="text-sm">✅ <strong>Reduced</strong> customer churn by 40% through improved onboarding processes.</p>
            <p className="text-sm">✅ <strong>Led</strong> cross-functional team of 15 to launch product 3 months ahead of schedule.</p>
          </div>

          <h3>2. Match Keywords to Job Description</h3>
          <p>Tailor your action verbs to match the language in the job posting. If the job emphasizes "drive growth," use "drove" or "drove growth" in your resume.</p>

          <h3>3. Avoid Overused Verbs</h3>
          <p>Steer clear of generic, overused words like:</p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4">
            <p className="text-sm font-semibold text-red-700 mb-2">❌ Avoid These Common Verbs</p>
            <div className="grid grid-cols-3 gap-3 text-sm text-red-600">
              {['Responsible for', 'Helped', 'Worked on', 'Participated in', 'Involved in', 'Assisted'].map(verb => (
                <span key={verb}>• {verb}</span>
              ))}
            </div>
          </div>

          <h3>4. Use Present Tense for Current Roles</h3>
          <p>For your current position, use present tense (Manage, Lead, Develop). For past roles, use past tense (Managed, Led, Developed).</p>

          <h2>Common Mistakes to Avoid</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">❌ Using "Responsible for"</h4>
              <p className="text-sm text-muted-foreground">This passive phrase tells recruiters nothing about what you actually did.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">❌ Repeating the Same Verb</h4>
              <p className="text-sm text-muted-foreground">Don't use "Managed" five times. Vary your language to keep it engaging.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">❌ Forgetting Numbers</h4>
              <p className="text-sm text-muted-foreground">Action verbs without quantifiable results lose their impact.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700">❌ Using Hyperbole</h4>
              <p className="text-sm text-muted-foreground">"Revolutionized" or "Transformed" can sound exaggerated. Stick to realistic, provable achievements.</p>
            </div>
          </div>

          <h2>Industry-Specific Action Verbs</h2>

          <h3>Technology & Software</h3>
          <p><strong>Deployed</strong> microservices architecture • <strong>Engineered</strong> scalable solutions • <strong>Automated</strong> CI/CD pipelines • <strong>Debugged</strong> production issues • <strong>Architected</strong> cloud infrastructure</p>

          <h3>Sales & Marketing</h3>
          <p><strong>Closed</strong> $1M+ in deals • <strong>Negotiated</strong> enterprise contracts • <strong>Generated</strong> qualified leads • <strong>Executed</strong> multi-channel campaigns • <strong>Expanded</strong> market share</p>

          <h3>Finance & Accounting</h3>
          <p><strong>Analyzed</strong> financial performance • <strong>Reduced</strong> operational costs • <strong>Audited</strong> compliance reports • <strong>Forecasted</strong> revenue projections • <strong>Streamlined</strong> budget processes</p>

          <h3>Healthcare</h3>
          <p><strong>Diagnosed</strong> complex conditions • <strong>Treated</strong> patients • <strong>Coordinated</strong> care teams • <strong>Educated</strong> patients • <strong>Monitored</strong> treatment outcomes</p>

          <h2>Quick Reference: Top 20 Power Verbs</h2>

          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8 my-8">
            <p className="text-sm mb-4">Memorize these top power verbs:</p>
            <div className="grid grid-cols-4 gap-3">
              {['Achieved', 'Improved', 'Led', 'Created', 'Managed', 'Developed', 'Increased', 'Delivered', 'Designed', 'Launched', 'Implemented', 'Optimized', 'Generated', 'Reduced', 'Expanded', 'Analyzed', 'Built', 'Executed', 'Transformed', 'Drove'].map(verb => (
                <span key={verb} className="font-bold text-center">{verb}</span>
              ))}
            </div>
          </div>

          <h2>Ready to Transform Your Resume?</h2>
          <p>Now that you have 100+ powerful action verbs at your fingertips, it's time to put them to work. But knowing which verbs to use is only half the battle—structuring them effectively throughout your resume is equally important.</p>

          <p>Use our <a href="/tailor" className="text-primary font-semibold hover:underline">AI Resume Tailor</a> to automatically optimize your resume with the perfect action verbs and quantifiable results for any job application.</p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8 text-center">
            <p className="text-lg font-semibold text-primary mb-4">
              Get a perfectly tailored resume with powerful action verbs in under 10 seconds
            </p>
            <a href="/tailor" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-all">
              Tailor My Resume Now
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/blog/resume-power-words" className="block p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
              <h4 className="font-semibold mb-2">Resume Power Words: 50+ Impactful Terms</h4>
              <p className="text-sm text-muted-foreground">Discover impactful power words that make your resume memorable.</p>
            </a>
            <a href="/blog/how-to-write-resume-summary" className="block p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
              <h4 className="font-semibold mb-2">How to Write a Resume Summary</h4>
              <p className="text-sm text-muted-foreground">Craft a compelling professional summary that opens doors.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}