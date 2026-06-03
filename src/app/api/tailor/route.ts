import { NextRequest, NextResponse } from "next/server";
import { tailorResume } from "@/lib/ai";
import {
  getUsage,
  incrementUsage,
  createSetCookieHeader,
  FREE_MONTHLY_LIMIT,
} from "@/lib/usage";

export async function POST(request: NextRequest) {
  try {
    // Check usage limits
    const usageResult = await incrementUsage();
    const setCookie = createSetCookieHeader(usageResult.usage);

    if (!usageResult.success) {
      return NextResponse.json(
        {
          error: "Free limit reached",
          message: `You've used all ${FREE_MONTHLY_LIMIT} free resume tailors this month. Upgrade to Pro for unlimited access.`,
          remaining: 0,
          limit: FREE_MONTHLY_LIMIT,
          upgradeUrl: "/#pricing",
        },
        {
          status: 429,
          headers: { "Set-Cookie": setCookie },
        }
      );
    }

    const body = await request.json();
    const { resume, jobDescription, apiKey } = body;

    if (!resume || !jobDescription) {
      return NextResponse.json(
        { error: "Both resume and job description are required" },
        {
          status: 400,
          headers: { "Set-Cookie": setCookie },
        }
      );
    }

    if (resume.length < 50) {
      return NextResponse.json(
        { error: "Resume seems too short. Please paste your full resume." },
        {
          status: 400,
          headers: { "Set-Cookie": setCookie },
        }
      );
    }

    if (jobDescription.length < 30) {
      return NextResponse.json(
        {
          error:
            "Job description seems too short. Please paste the full job posting.",
        },
        {
          status: 400,
          headers: { "Set-Cookie": setCookie },
        }
      );
    }

    // Use server-side API key if available, otherwise use client-provided key (or demo mode)
    const serverApiKey = process.env.OPENAI_API_KEY;
    const effectiveApiKey = serverApiKey || apiKey || undefined;

    const result = await tailorResume(resume, jobDescription, effectiveApiKey);

    // Add usage info to response
    const response = {
      ...result,
      _meta: {
        remaining: usageResult.remaining,
        limit: FREE_MONTHLY_LIMIT,
        tier: usageResult.usage.tier,
      },
    };

    return NextResponse.json(response, {
      headers: { "Set-Cookie": setCookie },
    });
  } catch (error) {
    console.error("Tailor resume error:", error);
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// GET endpoint to check current usage
export async function GET() {
  const usage = await getUsage();
  const setCookie = createSetCookieHeader(usage);

  return NextResponse.json(
    {
      count: usage.count,
      limit: FREE_MONTHLY_LIMIT,
      remaining: Math.max(0, FREE_MONTHLY_LIMIT - usage.count),
      tier: usage.tier,
      month: usage.month,
    },
    {
      headers: { "Set-Cookie": setCookie },
    }
  );
}
