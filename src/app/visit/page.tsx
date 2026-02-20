import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function VisitPage() {
  return (
    <>
      <HeroShell active="visit">
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
          New here?
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Plan a Visit
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80">
          Service Schedule
        </p>
      </div>

      <ContentShell>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <div className="text-base font-semibold text-black">Sunday School</div>
              <div className="mt-2 text-sm text-abide-muted">9:30 - 10:30 AM</div>

              <div className="mt-5 text-base font-semibold text-black">Coffee & Conversation</div>
              <div className="mt-2 text-sm text-abide-muted">10:30 - 11:00 AM</div>

              <div className="mt-5 text-base font-semibold text-black">Worship</div>
              <div className="mt-2 text-sm text-abide-muted">11:00 - 12:15 PM</div>

              <div className="mt-5 text-base font-semibold text-black">Lunch</div>
              <div className="mt-2 text-sm text-abide-muted">12:15 PM</div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1490%20Saratoga%20Ave%20San%20Jose%20CA"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-abide-deep px-5 py-3 text-sm font-semibold text-white hover:bg-abide-deep-2"
                >
                  Open in Maps
                </a>
                <a
                  href="/contact"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5"
                >
                  Ask a question
                </a>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card>
              <div className="text-base font-semibold text-black">What to Expect</div>
              <ul className="mt-3 space-y-2 text-sm text-black/80">
                <li>• Friendly welcome & community</li>
                <li>• Worship and a Bible-centered message</li>
                <li>• Opportunities to connect through homegroups</li>
              </ul>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-black/70">
                  Domain
                </div>
                <div className="mt-1 text-sm font-semibold text-black">
                  abidefellowship.japnaazsoftware.com
                </div>
              </div>
            </Card>
          </div>
        </div>
      </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
