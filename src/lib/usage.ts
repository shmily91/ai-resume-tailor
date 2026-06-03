/**
 * Simple usage tracking via server-side cookies.
 * 
 * Free tier: 3 resume tailors per month
 * Pro tier: unlimited (via env or payment)
 * 
 * Uses a signed cookie to track usage count.
 * No database needed — purely cookie-based.
 */

import { cookies } from "next/headers";

const FREE_MONTHLY_LIMIT = 3;
const COOKIE_NAME = "resumeai_usage";
const COOKIE_SECRET = process.env.COOKIE_SECRET || "resumeai-secret-2024";

interface UsageData {
  userId: string;
  count: number;
  month: string; // "2026-06" format
  tier: "free" | "pro";
}

function getCurrentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function simpleSign(data: string): string {
  // Simple hash for cookie integrity (not crypto-grade, but good enough for usage tracking)
  let hash = 0;
  const combined = data + COOKIE_SECRET;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
}

function encodeUsage(data: UsageData): string {
  const payload = JSON.stringify(data);
  const signature = simpleSign(payload);
  return Buffer.from(`${payload}|${signature}`).toString("base64");
}

function decodeUsage(encoded: string): UsageData | null {
  try {
    const decoded = Buffer.from(encoded, "base64").toString();
    const lastPipe = decoded.lastIndexOf("|");
    if (lastPipe === -1) return null;
    
    const payload = decoded.substring(0, lastPipe);
    const signature = decoded.substring(lastPipe + 1);
    
    if (simpleSign(payload) !== signature) return null; // Tampered
    
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

export async function getUsage(): Promise<UsageData> {
  const cookieStore = await cookies();
  const existing = cookieStore.get(COOKIE_NAME);
  
  if (existing) {
    const data = decodeUsage(existing.value);
    if (data && data.month === getCurrentMonth()) {
      return data;
    }
    // Month changed or invalid — reset
  }
  
  // New or expired — create fresh
  const { v4: uuidv4 } = await import("uuid");
  return {
    userId: uuidv4(),
    count: 0,
    month: getCurrentMonth(),
    tier: "free",
  };
}

export async function incrementUsage(): Promise<{
  success: boolean;
  usage: UsageData;
  remaining: number;
}> {
  const current = await getUsage();
  
  // Pro users have no limit
  if (current.tier === "pro") {
    const updated = { ...current, count: current.count + 1 };
    return { success: true, usage: updated, remaining: -1 };
  }
  
  // Check free limit
  if (current.count >= FREE_MONTHLY_LIMIT) {
    return { success: false, usage: current, remaining: 0 };
  }
  
  const updated: UsageData = {
    ...current,
    count: current.count + 1,
  };
  
  return {
    success: true,
    usage: updated,
    remaining: FREE_MONTHLY_LIMIT - updated.count,
  };
}

export function createSetCookieHeader(data: UsageData): string {
  const encoded = encodeUsage(data);
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  return `${COOKIE_NAME}=${encoded}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}`;
}

export { FREE_MONTHLY_LIMIT, type UsageData };
