import { featuredEvents } from "@/lib/content";
import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function EventsPage() {
  return (
    <>
      <HeroShell active={undefined}>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Featured Events
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Featured Events
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Discover what’s happening at Parish Church.
          </p>
        </div>

        <ContentShell>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {featuredEvents.map((e) => (
              <Card key={`${e.date}-${e.body.slice(0, 12)}`}>
                <div className="text-sm font-semibold text-abide-teal">
                  {e.date}
                </div>
                <p className="mt-2 text-sm leading-6 text-black/80">{e.body}</p>
              </Card>
            ))}
          </div>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
