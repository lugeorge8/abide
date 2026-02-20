# Implementation Steps (chunked)

## Step 1 — Extract palette + core styling from example site
- Source: https://abidefellowship.japnaazsoftware.com/
- Pull key CSS variables + elementor theme colors
- Deliverable: `STYLE_GUIDE.md` with:
  - brand colors (primary, secondary, background, text)
  - button styles
  - card styles
  - typography scale

## Step 2 — Apply palette + shared components
- Update `src/components/site-shell.tsx` (hero gradient, header, cards, buttons)
- Update `src/app/globals.css` (base background + font)
- Keep pages separate: `/`, `/announcements`, `/visit`, `/contact`

## Step 3 — Copy exact home page copy + section order from example
- Home hero phrases
- Service schedule block
- Join Us This Sunday block
- Featured Events list
- FAQ header
- Word from lead pastor block

## Step 4 — Build announcements/events data model
- Add `content/events.json`
- Render events list from JSON on Home and/or /announcements

## Step 5 — QA
- mobile layout
- lint/build
- deploy
