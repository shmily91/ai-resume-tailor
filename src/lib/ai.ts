/**
 * AI Resume Tailoring Engine
 * 
 * Supports two modes:
 * 1. Demo mode (no API key) - template-based smart tailoring
 * 2. AI mode (with OpenAI key) - GPT-powered deep tailoring
 */

export interface TailoredResume {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: string[];
  originalText: string;
  matchScore: number;
  keywordsAdded: string[];
  keywordsMatched: string[];
}

export interface WorkExperience {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  dates: string;
  details?: string;
}

// Extract keywords from job description
function extractKeywords(jobDescription: string): {
  required: string[];
  preferred: string[];
  skills: string[];
  softSkills: string[];
} {
  const text = jobDescription.toLowerCase();

  // Common tech/business skills to look for
  const techPatterns = [
    /\b(?:python|java|javascript|typescript|react|angular|vue|node\.?js|next\.?js)\b/gi,
    /\b(?:aws|azure|gcp|docker|kubernetes|terraform|jenkins|ci\/cd)\b/gi,
    /\b(?:sql|nosql|mongodb|postgresql|mysql|redis|elasticsearch)\b/gi,
    /\b(?:machine learning|deep learning|nlp|ai|tensorflow|pytorch|data science)\b/gi,
    /\b(?:agile|scrum|kanban|jira|confluence|project management)\b/gi,
    /\b(?:excel|powerpoint|tableau|power bi|looker|data analysis)\b/gi,
    /\b(?:marketing|seo|sem|google analytics|facebook ads|content strategy)\b/gi,
    /\b(?:sales|crm|salesforce|hubspot|pipeline|negotiation|b2b|b2c)\b/gi,
    /\b(?:figma|sketch|adobe|photoshop|illustrator|ui\/ux|user research)\b/gi,
    /\b(?:communication|leadership|teamwork|problem.solving|analytical)\b/gi,
    /\b(?:rest api|graphql|microservices|api design|system design)\b/gi,
    /\b(?:product management|roadmap|user stories|a\/b testing|growth)\b/gi,
    /\b(?:go|golang|rust|c\+\+|c#|\.net|ruby|rails|django|flask|fastapi|spring)\b/gi,
    /\b(?:git|github|gitlab|bitbucket|code review)\b/gi,
    /\b(?:linux|unix|bash|shell scripting|devops|sre)\b/gi,
    /\b(?:html|css|sass|tailwind|bootstrap|responsive design)\b/gi,
    /\b(?:testing|jest|cypress|selenium|tdd|bdd|unit testing)\b/gi,
    /\b(?:typescript|ts|eslint|prettier|webpack|vite|babel)\b/gi,
  ];

  const found = new Set<string>();
  techPatterns.forEach((pattern) => {
    const matches = text.match(pattern);
    if (matches) {
      matches.forEach((m) => found.add(m.trim().toLowerCase()));
    }
  });

  // Also extract multi-word skills from bullet lists
  const bulletLines = jobDescription.split('\n').filter(l => /^[\s]*[-•*]\s/.test(l));
  for (const line of bulletLines) {
    const clean = line.replace(/^[\s]*[-•*]\s*/, '').trim();
    // Extract quoted skills or parenthetical tools
    const quotedMatch = clean.match(/"([^"]+)"/g);
    if (quotedMatch) {
      quotedMatch.forEach(q => found.add(q.replace(/"/g, '').toLowerCase()));
    }
  }

  // Also look for "required" and "preferred" sections
  // Use a word-boundary-aware pattern to avoid false "plus" matches (e.g. "comprehensive")
  const requiredSection = text.match(
    /(?:required|requirements|must[\s-]have|qualifications|minimum qualifications)[:\s]*([\s\S]*?)(?:(?:preferred|nice[\s-]to[\s-]have|bonus|desired qualifications|a plus)|$)/i
  );
  const preferredSection = text.match(
    /(?:preferred qualifications|nice[\s-]to[\s-]have|bonus qualifications|desired|a plus)[:\s]*([\s\S]*?)$/i
  );

  const required: string[] = [];
  const preferred: string[] = [];

  if (requiredSection) {
    found.forEach((kw) => {
      if (requiredSection[1].toLowerCase().includes(kw)) {
        required.push(kw);
      }
    });
  }

  if (preferredSection) {
    found.forEach((kw) => {
      if (preferredSection[1].toLowerCase().includes(kw)) {
        preferred.push(kw);
      }
    });
  }

  // If no explicit required/preferred split, treat all as required
  const skills = Array.from(found);
  if (required.length === 0 && preferred.length === 0) {
    skills.forEach((s) => required.push(s));
  }

  const softSkills: string[] = [];
  const softPatterns = [
    "communication",
    "leadership",
    "teamwork",
    "problem-solving",
    "analytical",
    "collaboration",
    "detail-oriented",
    "time management",
    "adaptability",
    "self-starter",
    "cross-functional",
    "stakeholder management",
    "mentoring",
    "critical thinking",
  ];
  softPatterns.forEach((s) => {
    if (text.includes(s)) softSkills.push(s);
  });

  return { required, preferred, skills, softSkills };
}

// Extract a job title from a job description
function extractJobTitle(jobDescription: string): string {
  const lines = jobDescription.split("\n").map(l => l.trim()).filter(Boolean);

  // Strategy 1: Look for explicit "Title:", "Position:", "Job Title:" labels
  const labelMatch = jobDescription.match(
    /(?:job\s*title|position|role|title)\s*[:\-–]\s*([^\n,]{3,60})/i
  );
  if (labelMatch) {
    const title = labelMatch[1].trim();
    // Sanity check: shouldn't be a full sentence
    if (title.split(/\s+/).length <= 8 && !title.includes(".")) {
      return title;
    }
  }

  // Strategy 2: First short line that looks like a title (2-6 words, no periods)
  const titleIndicators = [
    /\b(?:engineer|developer|designer|analyst|manager|director|lead|senior|junior|principal|staff|architect|scientist|specialist|coordinator|consultant|associate|intern|admin|administrator)\b/i,
    /\b(?:head|vp|vice president|chief|cto|ceo|cmo|cfo|vp of|svp|evp)\b/i,
    /\b(?:account|executive|representative|officer|planner|strategist|researcher|technician)\b/i,
  ];

  for (const line of lines.slice(0, 10)) {
    const wordCount = line.split(/\s+/).length;
    const isShort = wordCount >= 2 && wordCount <= 8;
    const looksLikeTitle = isShort && !line.includes(".") && !line.includes(":");
    const hasTitleWord = titleIndicators.some(p => p.test(line));

    if (looksLikeTitle && hasTitleWord) {
      // Strip leading bullets/numbers
      return line.replace(/^[\s]*[-•*\d.)]+[\s]*/, "").trim();
    }
  }

  // Strategy 3: Look for "hiring a ..." or "looking for a ..." patterns
  const hiringMatch = jobDescription.match(
    /(?:hiring|seeking|looking for|recruiting)(?:\s+a(?:n)?)?\s+([^\n.]{5,80})/i
  );
  if (hiringMatch) {
    const title = hiringMatch[1].trim();
    if (title.split(/\s+/).length <= 8) {
      return title;
    }
  }

  // Fallback: first line if it's short enough
  const firstLine = lines[0]?.replace(/^[\s]*[-•*\d.)]+[\s]*/, "").trim() || "";
  if (firstLine.split(/\s+/).length <= 8 && !firstLine.includes(".")) {
    return firstLine;
  }

  return "Professional";
}

// Parse resume text into structured data
function parseResume(resumeText: string): Partial<TailoredResume> {
  const lines = resumeText.split("\n").filter((l) => l.trim());

  // Try to extract name (first non-empty line, usually the name)
  // Skip lines that look like section headers, contact info, or bullets
  let name = "Your Name";
  for (const line of lines.slice(0, 5)) {
    const t = line.trim();
    // Skip lines with @, phone patterns, bullets, or section headers
    if (t.includes("@")) continue;
    if (/^\d{3,}/.test(t)) continue;
    if (/^[•\-*]/.test(t)) continue;
    if (/^(?:SUMMARY|EXPERIENCE|EDUCATION|SKILLS|OBJECTIVE|PROFILE)/i.test(t)) continue;
    // A name is usually 2-4 words, no numbers, no special chars
    const words = t.split(/\s+/);
    if (words.length >= 2 && words.length <= 5 && !/\d/.test(t) && !/[|\/\\]/.test(t)) {
      name = t;
      break;
    }
  }

  // Try to extract contact info
  const emailMatch = resumeText.match(
    /[\w.-]+@[\w.-]+\.\w+/
  );
  const phoneMatch = resumeText.match(
    /[\+]?[\(]?\d{1,4}[\)]?[\s\-\.]?\(?\d{1,4}\)?[\s\-\.]?\d{1,4}[\s\-\.]?\d{1,9}/
  );
  const linkedinMatch = resumeText.match(
    /linkedin\.com\/in\/[\w-]+/i
  );

  // Try to extract location (City, State pattern)
  const locationMatch = resumeText.match(
    /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*,\s*[A-Z]{2}(?:\s+\d{5})?)/
  );

  // Extract existing skills from the SKILLS section
  const existingSkills = parseSkillsSection(resumeText);

  return {
    name,
    email: emailMatch?.[0] || "",
    phone: phoneMatch?.[0] || "",
    location: locationMatch?.[1] || "",
    linkedin: linkedinMatch?.[0] || "",
    skills: existingSkills,
    originalText: resumeText,
  };
}

// Parse skills from a dedicated SKILLS section in the resume
function parseSkillsSection(resumeText: string): string[] {
  const skillsSection = resumeText.match(
    /(?:SKILLS|TECHNICAL SKILLS|TECHNOLOGIES|CORE COMPETENCIES|AREAS OF EXPERTISE)\s*\n([\s\S]*?)(?=\n\s*(?:EXPERIENCE|EDUCATION|PROJECTS|CERTIFICATIONS|SUMMARY|PROFILE|AWARDS|PUBLICATIONS)|$)/i
  );

  if (!skillsSection) return [];

  const content = skillsSection[1];
  // Split on common delimiters: commas, bullets, pipes, newlines with content
  // But avoid splitting inside parentheses (e.g. "AWS (EC2, S3)" should stay as one skill)
  const skills = content
    .split(/\n|•|\|/)
    .flatMap(line => {
      // For each line, split on commas but NOT commas inside parentheses
      const result: string[] = [];
      let depth = 0;
      let current = "";
      for (const ch of line) {
        if (ch === "(") { depth++; current += ch; }
        else if (ch === ")") { depth = Math.max(0, depth - 1); current += ch; }
        else if (ch === "," && depth === 0) { result.push(current.trim()); current = ""; }
        else { current += ch; }
      }
      if (current.trim()) result.push(current.trim());
      return result;
    })
    .map(s => s.replace(/^[-*]\s*/, "").trim())
    .filter(s => s.length > 1 && s.length < 50) // skip empty and too-long entries
    .filter(s => !/^\d{4}/.test(s)) // skip date-like entries
    .filter(s => !/^(?:proficient|experience|familiar|knowledge|strong|expertise|skills?|tools?|technologies|languages|frameworks|libraries)/i.test(s)); // skip preamble words

  return skills;
}

// Demo mode: Smart template-based tailoring
export function tailorResumeDemo(
  resumeText: string,
  jobDescription: string
): TailoredResume {
  const keywords = extractKeywords(jobDescription);
  const parsed = parseResume(resumeText);

  // Find which keywords from the job are already in the resume
  const resumeLower = resumeText.toLowerCase();
  const keywordsMatched = keywords.skills.filter((kw) =>
    resumeLower.includes(kw.toLowerCase())
  );
  const keywordsAdded = keywords.skills.filter(
    (kw) => !resumeLower.includes(kw.toLowerCase())
  );

  // Calculate match score — also factor in soft skills
  const totalKeywords = keywords.skills.length + keywords.softSkills.length;
  const softMatched = keywords.softSkills.filter(s => resumeLower.includes(s));
  const totalMatched = keywordsMatched.length + softMatched.length;
  const matchScore =
    totalKeywords > 0
      ? Math.round((totalMatched / totalKeywords) * 100)
      : 50;

  // Extract a proper job title from the JD
  const jobTitle = extractJobTitle(jobDescription);

  const tailoredSummary = generateTailoredSummary(
    resumeText,
    jobDescription,
    keywords,
    jobTitle,
    parsed
  );

  // Build tailored experience bullets
  const { experience, education } = parseExperienceAndEducation(
    resumeText,
    keywords
  );

  // Merge skills: start with the user's existing skills, then add matched/added job keywords
  // Capitalize keywords for consistent display
  const allSkillEntries = [
    ...(parsed.skills || []),                          // User's original skills first (preserved case)
    ...keywordsMatched.map(capitalize),                // Job keywords already in resume (capitalized)
    ...keywordsAdded.slice(0, 8).map(capitalize),      // Missing job keywords to add (capped, capitalized)
  ];
  // Remove duplicates (case-insensitive), keeping first occurrence (user's original casing preferred)
  // Also remove keywords that are substrings of existing skills (e.g., "aws" is covered by "AWS (EC2, S3)")
  const finalSkills = allSkillEntries.filter(
    (s, i, arr) => {
      const sLower = s.toLowerCase();
      // Check if there's an earlier entry that already covers this skill
      const dominated = arr.slice(0, i).some(prev => {
        const pLower = prev.toLowerCase();
        // Exact match or substring containment (e.g., "aws" is in "aws (ec2, s3)")
        return pLower === sLower || pLower.includes(sLower) || sLower.includes(pLower);
      });
      return !dominated;
    }
  );

  return {
    name: parsed.name || "Your Name",
    title: jobTitle,
    email: parsed.email || "your.email@example.com",
    phone: parsed.phone || "",
    location: parsed.location || "",
    linkedin: parsed.linkedin || "",
    summary: tailoredSummary,
    experience,
    education,
    skills: finalSkills,
    originalText: resumeText,
    matchScore,
    keywordsAdded,
    keywordsMatched,
  };
}

function generateTailoredSummary(
  resumeText: string,
  jobDescription: string,
  keywords: ReturnType<typeof extractKeywords>,
  jobTitle: string,
  parsed: Partial<TailoredResume>
): string {
  // Try to determine years of experience from resume
  const yearsMatch = resumeText.match(
    /(\d+)\+?\s*years?\s*(?:of\s*)?(?:experience|expertise)/i
  );
  const years = yearsMatch?.[1] || "";

  // Try to extract the person's current/most recent role from experience section
  const currentRole = extractCurrentRole(resumeText);

  // Get top skills from the JD (prioritize required skills)
  const topRequired = keywords.required.slice(0, 3).map(capitalize);
  const topSkills = (topRequired.length > 0 ? topRequired : keywords.skills.slice(0, 3)).map(capitalize);

  // Build a role descriptor
  const roleDescriptor = currentRole || jobTitle || "professional";

  // Build a contextual summary referencing the specific target job
  const targetTitle = jobTitle !== "Professional" ? jobTitle : "the target position";

  if (years && topSkills.length > 0) {
    return `${capitalize(roleDescriptor)} with ${years}+ years of experience specializing in ${topSkills.join(", ")}. Seeking to apply proven expertise as a ${targetTitle}, leveraging a track record of delivering measurable results and cross-functional collaboration to drive business impact.`;
  }

  if (years) {
    return `Experienced ${capitalize(roleDescriptor)} with ${years}+ years of progressive experience. Demonstrated ability to lead initiatives, optimize processes, and deliver results in fast-paced environments. Seeking the ${targetTitle} role to drive continued success.`;
  }

  if (topSkills.length > 0) {
    return `Skilled ${capitalize(roleDescriptor)} with hands-on expertise in ${topSkills.join(", ")}. Adept at translating complex requirements into high-impact solutions and collaborating across teams to deliver quality outcomes. Eager to contribute to the ${targetTitle} role.`;
  }

  return `Motivated ${capitalize(roleDescriptor)} with a proven ability to deliver results and adapt to evolving priorities. Strong communicator and collaborative team player seeking the ${targetTitle} role to drive organizational success.`;
}

// Extract the most recent role from a resume's experience section
function extractCurrentRole(resumeText: string): string {
  const expMatch = resumeText.match(
    /(?:EXPERIENCE|WORK EXPERIENCE|PROFESSIONAL EXPERIENCE|EMPLOYMENT)\s*\n([\s\S]*?)(?=\n\s*(?:EDUCATION|SKILLS|PROJECTS|CERTIFICATIONS|AWARDS)|$)/i
  );
  if (!expMatch) return "";

  const firstEntry = expMatch[1].trim().split("\n").filter(l => l.trim());
  if (firstEntry.length === 0) return "";

  // Common job title prefixes
  const titlePrefixes = /^(?:senior|lead|principal|staff|junior|associate|director|manager|head|chief|vp|vice)/i;

  for (const line of firstEntry.slice(0, 4)) {
    const clean = line.trim();
    // Skip bullets and date-only lines
    if (/^[•\-*]/.test(clean)) continue;
    if (/^\d{4}\s*[-–]/.test(clean)) continue;
    // A title often has "title words" or a title-like pattern
    if (titlePrefixes.test(clean) || /\b(?:engineer|developer|designer|analyst|manager|architect|scientist|specialist|coordinator|consultant)\b/i.test(clean)) {
      // Strip trailing date ranges and company part (e.g., " - Company Name")
      let role = clean.replace(/\s*\(?\d{4}\s*[-–]\s*(?:\d{4}|present)\)?\s*$/i, "").trim();
      // If it contains " - " or " — ", take just the title part (before the dash)
      if (role.includes(" - ") || role.includes(" — ") || role.includes(" – ")) {
        role = role.split(/\s+[-–—]\s+/)[0].trim();
      }
      return role;
    }
  }
  // Fallback: first non-bullet line
  for (const line of firstEntry.slice(0, 2)) {
    const clean = line.trim();
    if (/^[•\-*]/.test(clean)) continue;
    let role = clean.replace(/\s*\(?\d{4}\s*[-–]\s*(?:\d{4}|present)\)?\s*$/i, "").trim();
    if (role.includes(" - ") || role.includes(" — ") || role.includes(" – ")) {
      role = role.split(/\s+[-–—]\s+/)[0].trim();
    }
    return role;
  }
  return "";
}

// Date extraction patterns (shared between experience and education)
const DATE_PATTERNS = [
  /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}\s*[-–]\s*(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}\b/i,
  /\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}\s*[-–]\s*Present\b/i,
  /\b\d{4}\s*[-–]\s*(?:\d{4}|Present)\b/i,
  /\b(?:Graduated\s+)?(?:Class\s+of\s+)?(\d{4})\b/,  // "2019", "Class of 2019", "Graduated 2019"
];

function extractDate(text: string): string {
  for (const p of DATE_PATTERNS) {
    const m = text.match(p);
    if (m) return m[0];
  }
  return "";
}

// Common job title words for heuristic detection
const TITLE_INDICATORS = /\b(?:engineer|developer|designer|analyst|manager|director|lead|senior|junior|principal|staff|architect|scientist|specialist|coordinator|consultant|associate|intern|admin|administrator|head|vp|chief|officer|planner|strategist|researcher|technician|representative|executive)\b/i;

function parseExperienceAndEducation(
  resumeText: string,
  keywords: ReturnType<typeof extractKeywords>
): {
  experience: WorkExperience[];
  education: Education[];
} {
  const experience: WorkExperience[] = [];
  const education: Education[] = [];

  // Section-based parsing
  const sections = resumeText.split(
    /\n(?=(?:EXPERIENCE|WORK EXPERIENCE|PROFESSIONAL EXPERIENCE|EMPLOYMENT|EDUCATION|ACADEMIC|SKILLS|PROJECTS|CERTIFICATIONS))/i
  );

  for (const section of sections) {
    const isEducation = /^EDUCATION|ACADEMIC/i.test(section.trim());
    const isExperience =
      /^EXPERIENCE|WORK EXPERIENCE|PROFESSIONAL EXPERIENCE|EMPLOYMENT/i.test(
        section.trim()
      );

    if (isEducation) {
      // Parse education entries - handles formats like:
      // "BS Computer Science - UC Berkeley (2019)"
      // "UC Berkeley\nBS Computer Science (2019)"
      // "BS Computer Science\nUC Berkeley\n2015 - 2019"
      const entries = section.split(/\n(?=\S)/);
      for (const entry of entries.slice(1)) {
        const lines = entry.split("\n").filter((l) => l.trim());
        if (lines.length === 0) continue;

        // Join all lines into one string for smart parsing
        const fullText = lines.map(l => l.trim()).join(" ");
        const date = extractDate(fullText);

        // Try "Degree - School" pattern
        const dashMatch = fullText.match(/^(.+?)\s*[-–—]\s*(.+?)(?:\s*[\((]?\s*\d{4})/);
        if (dashMatch) {
          const part1 = dashMatch[1].trim();
          const part2 = dashMatch[2].trim();
          // Heuristic: if part1 looks like a degree (contains BS/MS/PhD/Bachelor/Master/etc)
          if (/^(?:bs|ba|ms|ma|phd|bachelor|master|associate|doctor|mba|bsc|msc)/i.test(part1)) {
            education.push({
              degree: part1,
              school: part2,
              dates: date,
              details: lines.slice(1).filter(l => !l.match(/^\d{4}/) && l.trim() !== part2).join(" ").trim() || undefined,
            });
            continue;
          } else {
            education.push({
              degree: part2,
              school: part1,
              dates: date,
              details: lines.slice(1).filter(l => !l.match(/^\d{4}/) && l.trim() !== part1).join(" ").trim() || undefined,
            });
            continue;
          }
        }

        // Multi-line format: first line could be school or degree
        if (lines.length >= 2) {
          const first = lines[0].trim();
          const second = lines[1].trim();
          // If first line looks like a degree
          if (/^(?:bs|ba|ms|ma|phd|bachelor|master|associate|doctor|mba|bsc|msc)/i.test(first)) {
            education.push({
              degree: first,
              school: second.replace(date, "").replace(/[\(\)]/g, "").trim(),
              dates: date,
              details: lines.slice(2).join(" ").trim() || undefined,
            });
          } else {
            education.push({
              school: first,
              degree: second.replace(date, "").replace(/[\(\)]/g, "").trim(),
              dates: date,
              details: lines.slice(2).join(" ").trim() || undefined,
            });
          }
        } else {
          // Single line
          education.push({
            school: fullText.replace(date, "").replace(/[\(\)]/g, "").trim(),
            degree: fullText.replace(date, "").replace(/[\(\)]/g, "").trim(),
            dates: date,
          });
        }
      }
    } else if (isExperience) {
      // Parse work experience entries — split on lines that look like new entry headers
      // A new entry starts with a non-bullet, non-empty line that is NOT indented
      const entries = section.split(/\n(?=[^\s•\-*][^\n]*(?:\n|$))/);
      for (const entry of entries) {
        const lines = entry.split("\n").filter((l) => l.trim());
        if (lines.length < 2) continue;

        // Collect non-bullet header lines (first 1-3 lines before bullets start)
        const headerLines: string[] = [];
        const bulletLines: string[] = [];

        for (const line of lines) {
          const t = line.trim();
          if (/^[•\-*]\s/.test(t)) {
            bulletLines.push(t.replace(/^[•\-*]\s*/, "").trim());
          } else if (bulletLines.length === 0) {
            // Still in header area
            headerLines.push(t);
          } else {
            // Non-bullet after bullets started — treat as bullet if long enough
            if (t.length > 20) {
              bulletLines.push(t);
            }
          }
        }

        if (headerLines.length === 0 || bulletLines.length === 0) continue;

        // Smart company/title detection
        const { company, title, dates } = identifyCompanyTitleDates(headerLines);

        // Enhance bullets with keywords
        const enhancedBullets = enhanceBullets(bulletLines, keywords);

        experience.push({
          company,
          title,
          dates,
          bullets: enhancedBullets,
        });
      }
    }
  }

  // If no structured experience found, create from raw text
  if (experience.length === 0) {
    const bulletLines = resumeText
      .split("\n")
      .filter(
        (l) =>
          (l.trim().startsWith("•") ||
            l.trim().startsWith("-") ||
            l.trim().startsWith("*")) &&
          l.trim().length > 10
      )
      .map((l) => l.trim().replace(/^[•\-*]\s*/, "").trim())
      .slice(0, 6);

    if (bulletLines.length > 0) {
      experience.push({
        company: "Previous Experience",
        title: "Professional Role",
        dates: "",
        bullets: enhanceBullets(bulletLines, keywords),
      });
    }
  }

  if (education.length === 0) {
    education.push({
      school: "University",
      degree: "Degree",
      dates: "",
    });
  }

  return { experience, education };
}

// Heuristic to identify company, title, and dates from header lines
function identifyCompanyTitleDates(headerLines: string[]): {
  company: string;
  title: string;
  dates: string;
} {
  if (headerLines.length === 1) {
    // Single header line — could be "Title at Company (Dates)" or "Company - Title"
    const line = headerLines[0];
    const dates = extractDate(line);
    // Remove dates and any leftover empty parentheses
    let stripped = dates ? line.replace(dates, "").trim().replace(/[\s,]+$/, "") : line;
    stripped = stripped.replace(/\(\s*\)/g, "").trim(); // Remove empty "()"
    stripped = stripped.replace(/\s*-\s*$/, "").trim(); // Remove trailing " -"

    // Try "Title | Company" or "Title - Company" or "Title at Company"
    const separatorMatch = stripped.match(/^(.+?)\s*(?:\s[–\-|at]\s|\s+[–\-|]\s|\s+at\s+)(.+)$/i);
    if (separatorMatch) {
      const left = separatorMatch[1].trim();
      const right = separatorMatch[2].trim();
      // If the left side has title indicators, it's the title
      if (TITLE_INDICATORS.test(left)) {
        return { title: left, company: right, dates };
      }
      return { title: right, company: left, dates };
    }
    // Assume it's a company/title combined
    return { company: stripped, title: "", dates };
  }

  // Two+ header lines: determine which is title vs company
  const first = headerLines[0].trim();
  const second = headerLines[1]?.trim() || "";
  const allDates = extractDate(headerLines.join(" "));

  // Heuristic: the line with title indicators is the title; the other is company
  const firstIsTitle = TITLE_INDICATORS.test(first);
  const secondIsTitle = TITLE_INDICATORS.test(second);

  if (firstIsTitle && !secondIsTitle) {
    return {
      title: first.replace(extractDate(first), "").trim(),
      company: second.replace(extractDate(second), "").trim(),
      dates: allDates,
    };
  }
  if (secondIsTitle && !firstIsTitle) {
    return {
      title: second.replace(extractDate(second), "").trim(),
      company: first.replace(extractDate(first), "").trim(),
      dates: allDates,
    };
  }

  // Default: first line = company, second line = title (common format)
  return {
    company: first.replace(extractDate(first), "").trim(),
    title: second.replace(extractDate(second), "").trim(),
    dates: allDates,
  };
}

function enhanceBullets(
  bullets: string[],
  keywords: ReturnType<typeof extractKeywords>
): string[] {
  return bullets.map((bullet, idx) => {
    let enhanced = bullet;

    // Ensure it starts with an action verb
    enhanced = enhanceWithActionVerb(enhanced, idx);

    // If the bullet doesn't naturally mention any job keywords, try to append
    // a relevant keyword context if the bullet is about a relevant domain
    const bulletLower = enhanced.toLowerCase();
    const hasKeyword = keywords.skills.some(kw => bulletLower.includes(kw.toLowerCase()));
    if (!hasKeyword && keywords.required.length > 0) {
      // Try to find a keyword that makes sense to append
      // Only append if the bullet relates to a technical/domain area
      const contextualKeyword = findContextualKeyword(enhanced, keywords.required);
      if (contextualKeyword) {
        // Append as "using X" or "with X" at the end, before the final period
        if (enhanced.endsWith(".")) {
          enhanced = enhanced.slice(0, -1) + ` using ${capitalize(contextualKeyword)}.`;
        } else {
          enhanced += ` using ${capitalize(contextualKeyword)}`;
        }
      }
    }

    return enhanced;
  });
}

// Find a keyword that contextually fits a bullet point
function findContextualKeyword(bullet: string, requiredKeywords: string[]): string | null {
  const lower = bullet.toLowerCase();

  // Map of domain hints to related keywords
  const domainHints: Array<{ patterns: RegExp[]; keywords: string[] }> = [
    { patterns: [/\b(?:build|develop|creat|design|implement|architect)\b/i], keywords: requiredKeywords },
    { patterns: [/\b(?:deploy|infra|server|cloud|host)\b/i], keywords: requiredKeywords.filter(k => /\b(?:aws|azure|gcp|docker|kubernetes|terraform|ci.?cd|devops)\b/.test(k)) },
    { patterns: [/\b(?:analyz|data|insight|report|metric)\b/i], keywords: requiredKeywords.filter(k => /\b(?:sql|tableau|power bi|data|analytic|excel|python)\b/.test(k)) },
    { patterns: [/\b(?:test|qa|quality|bug|automat)\b/i], keywords: requiredKeywords.filter(k => /\b(?:testing|jest|cypress|selenium|tdd|ci.?cd)\b/.test(k)) },
    { patterns: [/\b(?:manage|lead|team|project|coordinat)\b/i], keywords: requiredKeywords.filter(k => /\b(?:agile|scrum|jira|project|leadership)\b/.test(k)) },
  ];

  for (const hint of domainHints) {
    if (hint.patterns.some(p => p.test(lower)) && hint.keywords.length > 0) {
      return hint.keywords[0];
    }
  }

  return null;
}

// Deterministic action verb selection based on bullet content hash
function pickActionVerb(bullet: string, idx: number): string {
  const actionVerbs = [
    "Spearheaded",
    "Orchestrated",
    "Implemented",
    "Developed",
    "Designed",
    "Led",
    "Managed",
    "Optimized",
    "Streamlined",
    "Delivered",
    "Achieved",
    "Increased",
    "Reduced",
    "Improved",
    "Built",
  ];
  // Simple deterministic hash from content + index
  let hash = 0;
  for (let i = 0; i < bullet.length; i++) {
    hash = ((hash << 5) - hash + bullet.charCodeAt(i)) | 0;
  }
  return actionVerbs[Math.abs(hash + idx) % actionVerbs.length];
}

function enhanceWithActionVerb(bullet: string, idx: number = 0): string {
  const actionVerbs = [
    "Spearheaded",
    "Orchestrated",
    "Implemented",
    "Developed",
    "Designed",
    "Led",
    "Managed",
    "Optimized",
    "Streamlined",
    "Delivered",
    "Achieved",
    "Increased",
    "Reduced",
    "Improved",
    "Built",
  ];

  const firstWord = bullet.split(" ")[0];
  if (actionVerbs.map((v) => v.toLowerCase()).includes(firstWord.toLowerCase())) {
    return bullet; // Already starts with action verb
  }

  // Check if it starts with a weak verb or "I"
  if (
    /^(?:i |was |helped |worked |responsible|tasked|assigned|assisted|contributed|participated|involved)/i.test(bullet)
  ) {
    const verb = pickActionVerb(bullet, idx);
    return bullet.replace(/^(?:I |was |helped |worked |responsible (?:for )?|tasked (?:with )?|assigned (?:to )?|assisted (?:in |with )?|contributed to |participated in |involved in )/i, `${verb} `);
  }

  return bullet;
}

function capitalize(str: string): string {
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// AI mode: Call OpenAI API for deep tailoring
export async function tailorResumeAI(
  resumeText: string,
  jobDescription: string,
  apiKey: string
): Promise<TailoredResume> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an expert resume writer and ATS optimization specialist. Your task is to tailor a resume to match a specific job description.

Rules:
1. Keep ALL truthful information from the original resume - never fabricate experience, skills, or education
2. Reorganize and rephrase content to highlight relevant experience for this specific job
3. Incorporate relevant keywords from the job description naturally
4. Use strong action verbs and quantify achievements where possible
5. Optimize for ATS (Applicant Tracking System) compatibility
6. Return the result as a JSON object with this exact structure:

{
  "name": "Full Name",
  "title": "Target Job Title",
  "email": "email from resume",
  "phone": "phone from resume",
  "location": "location from resume",
  "linkedin": "linkedin url from resume",
  "summary": "A 2-3 sentence professional summary tailored to the job",
  "experience": [
    {
      "company": "Company Name",
      "title": "Job Title",
      "dates": "Start - End",
      "bullets": ["Achievement 1", "Achievement 2", "Achievement 3"]
    }
  ],
  "education": [
    {
      "school": "School Name",
      "degree": "Degree",
      "dates": "Year - Year",
      "details": "Optional details"
    }
  ],
  "skills": ["Skill 1", "Skill 2", ...],
  "matchScore": 85,
  "keywordsAdded": ["keyword1", "keyword2"],
  "keywordsMatched": ["existing keyword1"]
}

IMPORTANT: Return ONLY valid JSON. No markdown, no code blocks.`,
        },
        {
          role: "user",
          content: `Here is my current resume:\n\n${resumeText}\n\nHere is the job description I want to apply for:\n\n${jobDescription}\n\nPlease tailor my resume for this job. Return only valid JSON.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 3000,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  const content = data.choices[0]?.message?.content;

  if (!content) {
    throw new Error("No content in API response");
  }

  // Parse JSON from response (handle potential markdown code blocks)
  let jsonStr = content;
  if (jsonStr.includes("```")) {
    jsonStr = jsonStr.replace(/```(?:json)?\n?/g, "").replace(/```/g, "");
  }

  try {
    const result = JSON.parse(jsonStr.trim());
    return {
      ...result,
      originalText: resumeText,
    };
  } catch {
    // If JSON parsing fails, fall back to demo mode
    console.warn("Failed to parse AI response as JSON, falling back to demo mode");
    return tailorResumeDemo(resumeText, jobDescription);
  }
}

// Main entry point
export async function tailorResume(
  resumeText: string,
  jobDescription: string,
  apiKey?: string
): Promise<TailoredResume> {
  if (apiKey) {
    return tailorResumeAI(resumeText, jobDescription, apiKey);
  }
  return tailorResumeDemo(resumeText, jobDescription);
}
