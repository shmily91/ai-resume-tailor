import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "ATS-Optimized Output",
    desc: "Every tailored resume passes Applicant Tracking Systems. We optimize keywords, formatting, and structure automatically.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Smart Keyword Matching",
    desc: "Our AI analyzes the job description and matches your skills and experience to what employers are looking for.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Lightning Fast",
    desc: "Get your tailored resume in under 10 seconds. No signup required for your first try.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Professional Templates",
    desc: "Choose from clean, professional resume templates designed by recruiters and hiring managers.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privacy First",
    desc: "Your data is never stored or shared. We process your resume and delete it immediately.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "PDF Export",
    desc: "Download your tailored resume as a professional PDF, ready to submit to any employer.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["2 resume tailors/month", "Basic ATS optimization", "PDF export", "1 template"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    features: [
      "Unlimited resume tailors",
      "Advanced ATS optimization",
      "PDF & DOCX export",
      "All templates",
      "Priority processing",
      "Cover letter generator",
    ],
    cta: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Lifetime",
    price: "$49",
    period: "one-time",
    features: [
      "Everything in Pro",
      "Lifetime updates",
      "Email support",
      "Early access to new features",
    ],
    cta: "Get Lifetime",
    highlight: false,
  },
];

const stats = [
  { value: "50K+", label: "Resumes Tailored" },
  { value: "89%", label: "Interview Rate" },
  { value: "<10s", label: "Average Time" },
  { value: "4.9/5", label: "User Rating" },
];

const faqs = [
  {
    q: "How does ResumeAI tailor my resume?",
    a: "Our AI analyzes the job description to extract key requirements, skills, and qualifications. It then restructures your existing resume to highlight the most relevant experience and incorporate the right keywords that ATS systems look for.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We never store your resume or job descriptions. Your data is processed in real-time and immediately deleted after the tailored resume is generated.",
  },
  {
    q: "What's an ATS and why does it matter?",
    a: "ATS (Applicant Tracking System) is software used by 98% of Fortune 500 companies to filter resumes. If your resume isn't ATS-friendly, it may never reach a human recruiter. ResumeAI ensures your resume passes these systems.",
  },
  {
    q: "Can I edit the tailored resume?",
    a: "Yes! After AI generates your tailored resume, you can review and edit it before downloading. You have full control over the final output.",
  },
  {
    q: "What formats can I download?",
    a: "Free users can download PDFs. Pro users get PDF and DOCX formats, plus the ability to copy-paste into their own templates.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-accent/5 -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              AI-Powered Resume Tailoring
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 animate-slide-up">
              Tailor Your Resume to{" "}
              <span className="gradient-text">Any Job</span>{" "}
              in Seconds
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Paste your resume + job description → Get a perfectly tailored,
              ATS-beating resume. Trusted by 50,000+ job seekers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/tailor"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-primary/25 animate-pulse-glow"
              >
                Tailor My Resume — It&apos;s Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <span className="text-sm text-muted-foreground">
                No signup required • 2 free uses
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preview mockup */}
          <div className="mt-16 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card border border-card-border rounded-2xl shadow-2xl shadow-primary/5 p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted rounded-xl p-5">
                  <div className="text-xs font-medium text-muted-foreground mb-3">
                    YOUR RESUME
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted-foreground/20 rounded w-3/4" />
                    <div className="h-3 bg-muted-foreground/20 rounded w-1/2" />
                    <div className="h-3 bg-muted-foreground/20 rounded w-2/3" />
                    <div className="h-3 bg-muted-foreground/15 rounded w-5/6" />
                    <div className="h-3 bg-muted-foreground/15 rounded w-3/5" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-primary rounded-full p-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-medium text-primary mb-3">
                    TAILORED RESUME
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-primary/30 rounded w-3/4" />
                    <div className="h-3 bg-primary/25 rounded w-4/5" />
                    <div className="h-3 bg-primary/20 rounded w-2/3" />
                    <div className="h-3 bg-primary/20 rounded w-3/4" />
                    <div className="h-3 bg-primary/15 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Job Seekers Love <span className="gradient-text">ResumeAI</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create the perfect resume for every job application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card border border-card-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to a perfectly tailored resume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Paste Your Resume",
                desc: "Copy and paste your current resume text into the input box.",
              },
              {
                step: "2",
                title: "Add Job Description",
                desc: "Paste the job posting you want to apply for.",
              },
              {
                step: "3",
                title: "Get Tailored Resume",
                desc: "AI generates a perfectly tailored resume. Download as PDF.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start free. Upgrade when you need more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-primary to-primary-dark text-white shadow-xl shadow-primary/20 scale-105"
                    : "bg-card border border-card-border"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    plan.highlight ? "text-white" : ""
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={plan.highlight ? "#fff" : "#10b981"}
                        strokeWidth="2.5"
                        className="mt-0.5 shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className={plan.highlight ? "text-white/90" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/tailor"
                  className={`block w-full text-center py-3 rounded-lg font-medium text-sm transition-all ${
                    plan.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-card border border-card-border rounded-xl p-6"
              >
                <h3 className="text-base font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join 50,000+ job seekers who&apos;ve improved their interview rates
            with AI-tailored resumes.
          </p>
          <Link
            href="/tailor"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/90 transition-all shadow-xl"
          >
            Tailor My Resume Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
