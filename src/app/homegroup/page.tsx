import Image from "next/image";

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
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
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
            </div>

            <div className="lg:col-span-7">
              <Card>
                <div className="text-base font-semibold">Photo</div>
                <div className="mt-4 overflow-hidden rounded-2xl border border-black/10">
                  <Image
                    src="/assets/homegroups.jpg"
                    alt="Home Groups"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                  />
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
