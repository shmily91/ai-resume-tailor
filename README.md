# AI Resume Tailor

AI-powered resume tailoring app. Paste your resume + job description → Get a perfectly tailored resume.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features

- 🤖 AI-powered resume tailoring (demo mode works without API key)
- 📊 ATS match score
- 📝 Professional PDF export
- 🔒 Privacy-first (no data stored)
- 🎯 Keyword optimization
- 💰 Freemium model ($0 / $9/mo / $49 lifetime)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- OpenAI API (optional)

## Deployment

Deploy to Vercel (free tier):

```bash
npm install -g vercel
vercel
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for AI-powered tailoring | No (demo mode available) |
| `NEXT_PUBLIC_APP_URL` | App URL for metadata | No |

## Revenue Model

- **Free**: 2 resume tailors/month (demo mode)
- **Pro**: $9/month - unlimited AI tailoring + cover letters
- **Lifetime**: $49 one-time - everything in Pro forever
