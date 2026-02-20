import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function ImNewPage() {
  return (
    <>
      <HeroShell active="im-new">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            I&apos;m New
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            What To Expect
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            (Content TBD)
          </p>
        </div>

        <ContentShell>
          <Card>
            <div className="text-base font-semibold">What To Expect</div>
            <p className="mt-2 text-sm text-black/80">
              (Migrate from existing CCIC “I&apos;m New” page.)
            </p>
          </Card>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
