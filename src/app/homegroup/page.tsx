import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function HomegroupPage() {
  return (
    <>
      <HeroShell active="homegroup">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Connect
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Homegroup
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Small groups to study the Bible, pray, and care for one another.
          </p>
        </div>

        <ContentShell>
          <Card>
            <div className="text-base font-semibold">Home Groups</div>
            <p className="mt-3 text-sm leading-6 text-black/80">
              Home groups are small groups typically consisting of three to six
              families or six to twelve adults. Home group members meet and grow
              together through Bible study, prayer, and mutual care.
            </p>
            <p className="mt-4 text-sm text-black/80">
              Interested? Reach out via our contact page.
            </p>
          </Card>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
