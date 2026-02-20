import { Card, ContentShell, HeroShell } from "@/components/site-shell";

const announcements = [
  {
    title: "Homegroups — Saturate (8-session study)",
    body: "We’re launching an eight-session study for homegroups: ‘Saturate the Field Guide’ (Vanderstelt & Connelly). Books available through the church.",
  },
  {
    title: "Grow in Your Spiritual Life (2026)",
    body: "Two steps: (1) Know the Word — follow a Bible reading plan. (2) Fasting — start together with guidance and options.",
    links: [
      {
        label: "M’Cheyne Bible Reading Plan",
        href: "https://bibleplan.org/plans/mcheyne/#esv",
      },
      {
        label: "Faith Comes By Hearing",
        href: "https://www.faithcomesbyhearing.com",
      },
    ],
  },
  {
    title: "Upcoming Events",
    body: "Check back for the latest schedule and sign-ups.",
  },
] as const;

export default function AnnouncementsPage() {
  return (
    <HeroShell active="ann">
      <div className="grid grid-cols-1 gap-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Updates
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Announcements
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            What’s happening at Abide Church.
          </p>
        </div>

        <ContentShell>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {announcements.map((a) => (
              <Card key={a.title}>
                <div className="text-base font-semibold text-red-950">{a.title}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-700">{a.body}</p>
                {"links" in a && a.links ? (
                  <div className="mt-4 flex flex-col gap-2">
                    {a.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between rounded-2xl border border-yellow-400/40 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 px-4 py-3 text-sm font-semibold text-red-950 hover:from-yellow-100 hover:to-yellow-50"
                      >
                        <span>{l.label}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </ContentShell>
      </div>
    </HeroShell>
  );
}
