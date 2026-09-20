# Manish Kumar — Technical Portfolio

An original, production-ready technical portfolio for Manish Kumar: Full Stack Developer & AI Application Engineer. The experience uses an editorial engineering visual system, adaptive WebGL identity badge, focused motion, structured case studies, public GitHub data, and a deterministic local portfolio assistant.

## Stack

- Next.js 16 App Router, React 19 and strict TypeScript
- Tailwind CSS plus a custom responsive design system
- React Three Fiber, Drei and Rapier for the adaptive identity badge
- GSAP ScrollTrigger, Motion and Lenis for coordinated animation
- Zod for GitHub response and contact-form validation
- Next.js metadata, JSON-LD, sitemap and robots endpoints

## Local setup

```bash
npm install
npm run dev
npm run build
npm start
```

Copy `.env.example` to `.env.local` and set only the values you want to enable:

```env
GITHUB_USERNAME=
CONTACT_EMAIL=
```

No GitHub token, AI provider key or email-service credential is used. Empty values activate designed fallback states.

## Content editing

All visible portfolio content is centralized in `src/data/portfolio.ts`. Edit personal metadata, projects, experience, skills, education, achievements, social links, assistant answers and feature flags there. Server-only environment configuration lives in `src/lib/server-config.ts`.

### Projects and screenshots

Add or update typed project objects in `src/data/portfolio.ts`. A case-study route is generated automatically for each slug. Live and source buttons render only when their corresponding URLs exist. The current project visuals are code-generated, so no fake screenshots are presented. To add verified screenshots later, place optimized images in `public/projects/<slug>/` and render them with `next/image` in the case-study template.

### Profile image

The identity badge intentionally uses a generated technical identity surface and does not ship a placeholder portrait. Add a real optimized image under `public/images/`, then update both the static and WebGL badge surfaces in `src/components/portfolio/IdentityBadge.tsx` and `IdentityBadgeCanvas.tsx`.

### Resume

Place the real resume at:

```text
public/Manish-kumar_Resume.pdf
```

The `/resume` route detects a missing file and shows setup instructions instead of generating a fake document. When present, it provides zoom, full-screen, download and new-tab controls; the browser PDF viewer supplies page navigation.

## GitHub integration

Set `GITHUB_USERNAME` on the server. `/api/github` uses unauthenticated public GitHub endpoints, validates responses with Zod, caches for one hour and returns recruiter-safe error states for missing configuration, rate limits and network failures. It never invents contribution counts.

## Ask Manish

The assistant is fully local and deterministic. It scores normalized questions against topic keywords in `portfolio.assistant`, then returns a predefined answer from the centralized data. It is deliberately limited to the portfolio and makes no general-AI claim.

## Performance modes

The identity badge chooses a mode from actual device capability signals:

- **Full:** WebGL, Rapier physics, pointer impulses and reflective lighting.
- **Reduced/static:** CSS identity badge for narrow, touch, low-memory, low-core or reduced-motion environments.
- **Failure fallback:** the same static badge remains meaningful if WebGL is unavailable.

Heavy WebGL code is loaded dynamically with server rendering disabled. Below-the-fold motion is intersection-driven by ScrollTrigger, Lenis pauses with the document, and all motion respects `prefers-reduced-motion`.

### WebGL troubleshooting

If the 3D badge does not load, confirm hardware acceleration and WebGL are enabled. The site intentionally chooses the static mode on touch devices, narrow viewports, devices reporting fewer than four CPU cores or less than 4 GB device memory, and when reduced motion is requested. All content and navigation remain available.

## Deployment to Vercel

1. Import the repository into Vercel.
2. Keep the detected Next.js framework settings.
3. Add `GITHUB_USERNAME` and `CONTACT_EMAIL` in Project Settings → Environment Variables.
4. Add the verified resume PDF if available.
5. Deploy. No persistent service or external database is required by the portfolio itself.

Update the canonical production domain in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts` if it differs from the current placeholder domain.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

Review at 360, 768, 1024 and 1440 pixels, including keyboard navigation, reduced-motion mode, the mobile menu, project filters, case-study links, GitHub fallback, missing-resume state, contact mailto flow and assistant launcher.

## Attribution and license

The portfolio is an original implementation. Its interaction-quality brief was informed by the MIT-licensed PersonalBlog reference listed in the project requirements; no reference identity, private information, imagery, projects or source code is included here. Add the repository’s chosen license before public redistribution.

## Known limitations

- Canonical URLs use `https://i-manish-kumar.tech` until the real production URL is confirmed.
- The profile image remains intentionally absent until a genuine asset is supplied.
- Contact delivery uses the visitor’s configured mail client because no third-party email credential is required.
- Public GitHub requests are subject to GitHub’s unauthenticated rate limits.
