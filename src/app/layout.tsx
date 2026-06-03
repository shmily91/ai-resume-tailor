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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
