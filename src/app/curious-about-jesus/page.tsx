import Image from "next/image";

import { VerseGenerator } from "@/components/verse-generator";
import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function CuriousAboutJesusPage() {
  return (
    <>
      <HeroShell active="curious-about-jesus">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Curious about Jesus?
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Curious about Jesus?
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Explore who Jesus is and what the Bible says.
          </p>
        </div>

        <ContentShell>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Card>
                <div className="text-base font-semibold">Start Here</div>
                <p className="mt-2 text-sm leading-6 text-black/80">
                  If you’re exploring faith, you’re welcome here. Tap the button
                  to see a new Bible verse.
                </p>

                <div className="mt-6 flex justify-center">
                  <div className="relative h-56 w-56 overflow-hidden rounded-3xl bg-white">
                    <Image
                      src="/assets/curious-jesus.png"
                      alt="Jesus"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <VerseGenerator />
            </div>
          </div>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
