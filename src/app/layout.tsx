import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResumeAI - Tailor Your Resume to Any Job in Seconds",
  description:
    "AI-powered resume tailoring. Paste your resume and a job description, get a perfectly tailored resume that beats ATS systems. Free to start.",
  keywords: [
    "resume tailor",
    "AI resume",
    "resume builder",
    "ATS-friendly resume",
    "job application",
    "resume optimizer",
  ],
  openGraph: {
    title: "ResumeAI - Tailor Your Resume to Any Job in Seconds",
    description:
      "AI-powered resume tailoring. Get a perfectly tailored resume that beats ATS systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ResumeAI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI-powered resume tailoring tool. Paste your resume and job description, get a perfectly tailored resume that beats ATS systems.",
    "url": "https://ai-resume-tailor-taupe.vercel.app",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "49",
      "priceCurrency": "USD",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "156",
      "bestRating": "5"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
