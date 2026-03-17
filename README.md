# Alex Philip – Cloud & Security Portfolio

A dark-themed cybersecurity portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a hacker-terminal aesthetic with typing animations, glowing UI elements, and a full-stack contact form.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — just click **Deploy**
4. (Optional) Add environment variables for the contact form email:

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server (e.g., `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (e.g., `587`) |
| `SMTP_USER` | Your email address |
| `SMTP_PASS` | App password (not your regular password) |
| `CONTACT_EMAIL` | Where to receive messages |

## Deploy to Other Platforms

### Netlify
```bash
npm run build
# Deploy the `.next` folder, or use Netlify's Next.js plugin
```

### Docker
```bash
npm run build
# The `standalone` output is enabled in next.config.js
# Copy .next/standalone, .next/static, and public to your container
```

### Self-Hosted (PM2)
```bash
npm run build
npm run start
# Or use PM2: pm2 start npm --name "portfolio" -- start
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Backend API for contact form
│   │   ├── globals.css             # Theme & animations
│   │   ├── layout.tsx              # Root layout + metadata
│   │   └── page.tsx                # Main page
│   └── components/
│       ├── Navbar.tsx              # Sticky nav with scroll tracking
│       ├── Hero.tsx                # Terminal-style hero with typing effect
│       ├── TypingEffect.tsx        # Reusable typing animation
│       ├── SectionHeader.tsx       # Section header with terminal command
│       ├── About.tsx               # About me section
│       ├── Skills.tsx              # Skills with progress bars
│       ├── Experience.tsx          # Work timeline
│       ├── Certifications.tsx      # Cert badges
│       ├── Education.tsx           # Education details
│       ├── Contact.tsx             # Contact form
│       └── Footer.tsx              # Footer
├── tailwind.config.ts
├── package.json
└── .env.example
```

## Features

- **Terminal-inspired dark theme** with matrix grid, scan line, and CRT effects
- **Typing animation** cycling through role titles
- **Skill progress bars** organized by domain
- **Timeline-based experience** section
- **Full-stack contact form** with Nodemailer backend
- **Responsive design** — mobile-first
- **SEO-optimized** with Open Graph metadata
- **Standalone build** for Docker/self-hosted deployments

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Nodemailer (contact form backend)

## License

MIT
