import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <>
      <HeroShell active={undefined}>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-black/60">
          About Us
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          About Us
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/70">
          (Content TBD)
        </p>
      </div>

      <ContentShell>
        <Card>
          <div className="text-base font-semibold">About Abide Fellowship</div>
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
