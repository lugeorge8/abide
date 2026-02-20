import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function WomenPage() {
  return (
    <>
      <HeroShell active="women">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Connect
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Women
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Empowering women to seek and know God.
          </p>
        </div>

        <ContentShell>
          <Card>
            <div className="text-base font-semibold">Women’s Ministry</div>
            <p className="mt-3 text-sm leading-6 text-black/80">
              The Women’s Ministry empowers women to seek and know God and to
              experience the joy of becoming all He intends them to be.
            </p>
            <div className="mt-4 text-sm text-black/80">
              We do this by using the talents God blessed us with to:
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>make cards for Women’s Shelter</li>
                <li>decorate</li>
                <li>feed one another</li>
                <li>
                  bless others (such as packing purses with care package items for
                  Women’s Shelter)
                </li>
                <li>share, listen, and apply His Word</li>
              </ul>
            </div>
            <p className="mt-4 text-sm text-black/80">All for His glory!</p>
          </Card>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
