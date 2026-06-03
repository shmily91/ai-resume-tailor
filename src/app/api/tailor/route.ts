import { NextRequest, NextResponse } from "next/server";
import { tailorResume } from "@/lib/ai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { resume, jobDescription, apiKey } = body;

    if (!resume || !jobDescription) {
      return NextResponse.json(
        { error: "Both resume and job description are required" },
        { status: 400 }
      );
    }

    if (resume.length < 50) {
      return NextResponse.json(
        { error: "Resume seems too short. Please paste your full resume." },
        { status: 400 }
      );
    }

    if (jobDescription.length < 30) {
      return NextResponse.json(
        { error: "Job description seems too short. Please paste the full job posting." },
        { status: 400 }
      );
    }

    // Use server-side API key if available, otherwise use client-provided key (or demo mode)
    const serverApiKey = process.env.OPENAI_API_KEY;
    const effectiveApiKey = serverApiKey || apiKey || undefined;

    const result = await tailorResume(resume, jobDescription, effectiveApiKey);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Tailor resume error:", error);
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
