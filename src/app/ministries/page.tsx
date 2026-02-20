import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function MinistriesPage() {
  return (
    <>
      <HeroShell active={undefined}>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
          Ministries
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Ministries
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/70">(Content TBD)</p>
      </div>

      <ContentShell>
        <Card>
          <div className="text-base font-semibold">Ministries</div>
          <p className="mt-2 text-sm text-black/80">
            (Content TBD — migrate from existing CCIC website per notes.)
          </p>
        </Card>
      </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
