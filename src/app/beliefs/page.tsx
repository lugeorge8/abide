import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function BeliefsPage() {
  return (
    <>
      <HeroShell active="beliefs">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Our Beliefs
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Beliefs
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">(Content TBD)</p>
        </div>

        <ContentShell>
          <Card>
            <div className="text-base font-semibold">Our Beliefs</div>
            <p className="mt-2 text-sm text-black/80">
              (Content TBD — migrate from existing CCIC website.)
            </p>
          </Card>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
