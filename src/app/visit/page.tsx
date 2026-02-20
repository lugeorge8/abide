import { Card, ContentShell, HeroShell } from "@/components/site-shell";

export default function VisitPage() {
  return (
    <HeroShell active="visit">
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
          New here?
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Plan a Visit
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80">
          Sundays at 11:00 AM • 1490 Saratoga Ave, San Jose, CA
        </p>
      </div>

      <ContentShell>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
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
                <a
                  href="/contact"
                  className="rounded-2xl border border-red-900/20 bg-white px-5 py-3 text-sm font-semibold text-red-950 hover:bg-zinc-50"
                >
                  Ask a question
                </a>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card>
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
            </Card>
          </div>
        </div>
      </ContentShell>
    </HeroShell>
  );
}
