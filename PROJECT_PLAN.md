# Abide website rebuild — Project Plan

Goal: Modify the **abide** Next.js site to match (“clone”) the reference website and implement requirements from the Google Doc.

## Constraints / operating mode
- Work in small, verifiable steps to avoid token overload and rate-limit spikes.
- Each step ends with:
  - `npm run lint`
  - `npm run build`
  - a git commit + push
- No large "big bang" changes.

## Inputs needed (blockers)
1) **Reference website URL** to clone (the user said “clone this website” but did not include the URL).
2) Google Doc requirements text (Google Docs often requires auth; we may need the content pasted or exported).

## Phase 0 — Requirements capture (Step-by-step)
0.1 Confirm reference site
- Deliverable: reference URL recorded.

0.2 Capture doc requirements into repo
- Deliverable: `REQUIREMENTS.md` containing:
  - information architecture (pages/sections)
  - copy blocks
  - CTA destinations
  - design rules (colors, typography, spacing)
  - assets list (logos, hero images)
  - embed/widget requirements (announcements/events/this-week)

0.3 Define success criteria
- Deliverable: checklist of “done” acceptance items.

## Phase 1 — Baseline site architecture
1.1 Layout + navigation skeleton
- Create shared components (Header/Nav/Footer) matching reference.
- Ensure routes exist for required pages.

1.2 Design tokens
- Tailwind theme: colors, fonts, background, button styles.
- Deliverable: global style alignment.

## Phase 2 — Page-by-page buildout
Build pages in priority order (home first). For each page:
- Scaffold layout
- Add copy and CTAs
- Add responsive behavior
- Add assets

Suggested order:
2.1 Home
2.2 Visit / Service times
2.3 About
2.4 Ministries / Groups
2.5 Contact
2.6 Give

## Phase 3 — Dynamic content (optional but recommended)
3.1 Content data files
- `content/announcements.json`
- `content/events.json`
- `content/this-week.json`

3.2 Admin-friendly editing
- Document a safe schema and examples.
- Optional: add a lightweight `/embed` route for Squarespace iframe use.

## Phase 4 — QA / polish
- Mobile + desktop checks
- Accessibility pass (labels, contrast)
- Performance pass (images)
- 404s, metadata, OpenGraph

## Phase 5 — Deployment
- Vercel import + production URL
- Custom domain instructions

## Execution cadence
- One step per message.
- Each step: implement → lint/build → commit/push → report result.
