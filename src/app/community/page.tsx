import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function CommunityPage() {
  return (
    <>
      <HeroShell active="community">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Connect
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Finding Community
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Find community and grow in your walk with Jesus.
          </p>
        </div>

        <ContentShell>
          <Card>
            <div className="text-base font-semibold">Finding Community</div>
            <p className="mt-3 text-sm leading-6 text-black/80">
              We are glad you are able to join us, and would like to get to know you
              better. A great way to grow in your walk with Jesus is to find
              community here at CCIC San Jose for you and your family. Please check
              out the many opportunities on this page.
            </p>
            <p className="mt-3 text-sm leading-6 text-black/80">
              If this is your first time, please fill out our welcome card.
            </p>
          </Card>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
