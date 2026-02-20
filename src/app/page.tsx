"use client";

import { useMemo, useState } from "react";

type Tab = "announcements" | "visit" | "contact";

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

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-red-950"
          : "rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10"
      }
    >
      {children}
    </button>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div>
      {kicker ? (
        <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("announcements");

  const tabLabel = useMemo(() => {
    switch (tab) {
      case "announcements":
        return "Announcements";
      case "visit":
        return "Plan a Visit";
      case "contact":
        return "Contact";
    }
  }, [tab]);

  return (
    <div className="min-h-screen text-white">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-red-950 to-red-950" />
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-28 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-yellow-400/25 blur-3xl" />
          <div className="absolute left-0 top-24 h-[420px] w-[520px] rounded-full bg-red-500/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-yellow-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400/90 font-black text-red-950">
                A
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight">Abide Church</div>
                <div className="text-xs text-white/70">San Jose, CA</div>
              </div>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <TabButton active={tab === "announcements"} onClick={() => setTab("announcements")}>
                Announcements
              </TabButton>
              <TabButton active={tab === "visit"} onClick={() => setTab("visit")}>
                Visit
              </TabButton>
              <TabButton active={tab === "contact"} onClick={() => setTab("contact")}>
                Contact
              </TabButton>
            </div>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                Sundays at 11:00 AM • 1490 Saratoga Ave
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                A Christ-centered community to worship, grow, and serve.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                We’re glad you’re here. Join us Sundays in-person for worship.
                Recordings are available online for those who can’t attend.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={() => setTab("visit")}
                  className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-red-950 hover:bg-yellow-300"
                >
                  Plan a visit
                </button>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Watch on YouTube
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 sm:hidden">
                <div className="mr-2 text-xs font-semibold uppercase tracking-widest text-white/60">
                  {tabLabel}
                </div>
                <TabButton active={tab === "announcements"} onClick={() => setTab("announcements")}>
                  Announcements
                </TabButton>
                <TabButton active={tab === "visit"} onClick={() => setTab("visit")}>
                  Visit
                </TabButton>
                <TabButton active={tab === "contact"} onClick={() => setTab("contact")}>
                  Contact
                </TabButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  This Sunday
                </div>
                <div className="mt-2 text-lg font-semibold">Worship Service</div>
                <div className="mt-1 text-sm text-white/75">11:00 AM</div>
                <div className="mt-4 rounded-2xl bg-black/20 p-4">
                  <div className="text-xs font-semibold text-white/70">Location</div>
                  <div className="mt-1 text-sm">1490 Saratoga Ave, San Jose, CA</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setTab("contact")}
                    className="w-full rounded-2xl bg-red-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-red-500"
                  >
                    Get in touch
                  </button>
                  <button
                    onClick={() => setTab("announcements")}
                    className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Announcements
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABBED CONTENT */}
      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        {tab === "announcements" ? (
          <section>
            <SectionTitle kicker="Updates" title="Announcements" />
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {announcements.map((a) => (
                <div
                  key={a.title}
                  className="rounded-3xl border border-red-900/25 bg-white/80 p-6 text-zinc-900 shadow-sm"
                >
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
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {tab === "visit" ? (
          <section>
            <SectionTitle kicker="New here?" title="Plan a Visit" />
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
              <div className="rounded-3xl border border-red-900/25 bg-white/80 p-6 text-zinc-900 shadow-sm lg:col-span-7">
                <div className="text-base font-semibold text-red-950">Service Time</div>
                <div className="mt-2 text-sm text-zinc-700">Sundays • 11:00 AM</div>
                <div className="mt-5 text-base font-semibold text-red-950">Address</div>
                <div className="mt-2 text-sm text-zinc-700">
                  1490 Saratoga Ave, San Jose, CA
                </div>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1490%20Saratoga%20Ave%20San%20Jose%20CA"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-red-950 hover:bg-yellow-300"
                  >
                    Open in Maps
                  </a>
                  <button
                    onClick={() => setTab("contact")}
                    className="rounded-2xl border border-red-900/20 bg-white px-5 py-3 text-sm font-semibold text-red-950 hover:bg-zinc-50"
                  >
                    Ask a question
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-red-900/25 bg-white/80 p-6 text-zinc-900 shadow-sm lg:col-span-5">
                <div className="text-base font-semibold text-red-950">What to Expect</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li>• Friendly welcome & community</li>
                  <li>• Worship and a Bible-centered message</li>
                  <li>• Opportunities to connect through homegroups</li>
                </ul>
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-red-950/70">
                    Domain
                  </div>
                  <div className="mt-1 text-sm font-semibold text-red-950">
                    abidechurch.org
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {tab === "contact" ? (
          <section>
            <SectionTitle kicker="Reach us" title="Contact" />
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
              <div className="rounded-3xl border border-red-900/25 bg-white/80 p-6 text-zinc-900 shadow-sm lg:col-span-7">
                <div className="text-base font-semibold text-red-950">Email</div>
                <p className="mt-2 text-sm text-zinc-700">
                  Add your church email here (e.g., info@abidechurch.org).
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="mailto:info@abidechurch.org"
                    className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
                  >
                    Email us
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-red-900/20 bg-white px-5 py-3 text-sm font-semibold text-red-950 hover:bg-zinc-50"
                  >
                    YouTube
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-red-900/25 bg-white/80 p-6 text-zinc-900 shadow-sm lg:col-span-5">
                <div className="text-base font-semibold text-red-950">Address</div>
                <p className="mt-2 text-sm text-zinc-700">
                  1490 Saratoga Ave, San Jose, CA
                </p>
                <div className="mt-6 text-xs text-zinc-500">
                  © {new Date().getFullYear()} Abide Church. All rights reserved.
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <footer className="border-t border-white/10 bg-red-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-semibold text-white">Abide Church</div>
            <div className="text-xs text-white/70">San Jose, CA • 11:00 AM</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10"
              onClick={() => setTab("announcements")}
            >
              Announcements
            </button>
            <button
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10"
              onClick={() => setTab("visit")}
            >
              Visit
            </button>
            <button
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold hover:bg-white/10"
              onClick={() => setTab("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
