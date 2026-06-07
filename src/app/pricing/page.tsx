import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try it out, no strings attached",
    features: [
      { text: "3 resume tailors per month", included: true },
      { text: "Smart keyword matching", included: true },
      { text: "ATS match score", included: true },
      { text: "PDF export", included: true },
      { text: "AI-powered deep tailoring", included: false },
      { text: "Cover letter generator", included: false },
      { text: "All resume templates", included: false },
      { text: "Priority processing", included: false },
    ],
    cta: "Start Free",
    ctaLink: "/tailor",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For serious job seekers",
    badge: "MOST POPULAR",
    features: [
      { text: "Unlimited resume tailors", included: true },
      { text: "Advanced AI-powered tailoring", included: true },
      { text: "ATS match score + analysis", included: true },
      { text: "PDF & DOCX export", included: true },
      { text: "AI cover letter generator", included: true },
      { text: "All professional templates", included: true },
      { text: "Priority processing", included: true },
      { text: "Email support", included: true },
    ],
    cta: "Email to Upgrade",
    ctaLink: "mailto:resumeai.proton@gmail.com?subject=Pro%20Monthly%20Upgrade%20Request&body=Hi%2C%20I%20want%20to%20upgrade%20to%20Pro%20Monthly%20(%249%2Fmonth).%20Please%20send%20me%20payment%20details.",
    highlight: true,
  },
  {
    name: "Lifetime",
    price: "$49",
    period: "one-time",
    description: "Pay once, use forever",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Lifetime updates", included: true },
      { text: "Lifetime access", included: true },
      { text: "Priority email support", included: true },
      { text: "Early access to new features", included: true },
      { text: "Career coaching AI assistant", included: true },
      { text: "", included: false },
      { text: "", included: false },
    ],
    cta: "Email to Upgrade",
    ctaLink: "mailto:resumeai.proton@gmail.com?subject=Lifetime%20Access%20Request&body=Hi%2C%20I%20want%20to%20purchase%20Lifetime%20Access%20(%2449%20one-time).%20Please%20send%20me%20payment%20details.",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Invest in Your{" "}
              <span className="gradient-text">Career</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A tailored resume can increase your interview chances by 89%.
              That&apos;s worth way more than $9/month.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 relative ${
                  plan.highlight
                    ? "bg-gradient-to-b from-primary to-primary-dark text-white shadow-xl shadow-primary/20 md:scale-105"
                    : "bg-card border border-card-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}

                <h3
                  className={`text-lg font-semibold mb-1 ${
                    plan.highlight ? "text-white" : ""
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.highlight ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

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
                  {plan.features
                    .filter((f) => f.text)
                    .map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-start gap-2 text-sm"
                      >
                        {feature.included ? (
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
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={plan.highlight ? "rgba(255,255,255,0.3)" : "#d1d5db"}
                            strokeWidth="2"
                            className="mt-0.5 shrink-0"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        )}
                        <span
                          className={
                            !feature.included
                              ? plan.highlight
                                ? "text-white/40"
                                : "text-muted-foreground/50"
                              : plan.highlight
                              ? "text-white/90"
                              : ""
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                </ul>

                {plan.ctaLink.startsWith("http") ? (
                  <a
                    href={plan.ctaLink}
                    className={`block w-full text-center py-3 rounded-lg font-medium text-sm transition-all ${
                      plan.highlight
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    href={plan.ctaLink}
                    className={`block w-full text-center py-3 rounded-lg font-medium text-sm transition-all ${
                      plan.highlight
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Payment FAQ
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I cancel anytime?",
                  a: "Yes! Cancel your Pro subscription anytime from your account. No questions asked.",
                },
                {
                  q: "Is my payment secure?",
                  a: "Yes, all payments are processed through LemonSqueezy with SSL encryption. We never see your credit card details.",
                },
                {
                  q: "What if I'm not satisfied?",
                  a: "We offer a 14-day money-back guarantee. If you're not happy, email us and we'll refund you.",
                },
                {
                  q: "Do you support Alipay / WeChat Pay?",
                  a: "Yes! LemonSqueezy supports Alipay, WeChat Pay, and all major credit cards.",
                },
              ].map((faq) => (
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

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/tailor"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
            >
              Try It Free First →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
