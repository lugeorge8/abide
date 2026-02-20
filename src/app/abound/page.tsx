import Image from "next/image";

import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function AboundPage() {
  return (
    <>
      <HeroShell active="abound">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Connect
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Abound
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Young adults (college + young professionals) living and loving like Jesus.
          </p>
        </div>

        <ContentShell>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Card>
                <div className="text-base font-semibold">Abound</div>
                <p className="mt-3 text-sm leading-6 text-black/80">
                  Abound is a CCIC-SJ English ministry for young adults (college and
                  young professionals) who want to live and love like Jesus through the
                  power of the gospel.
                </p>
                <p className="mt-3 text-sm leading-6 text-black/80">
                  Our name comes from Philippians 1:9-11.
                </p>

                <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4">
                  <div className="text-sm font-semibold">Weekly Gathering</div>
                  <div className="mt-2 text-sm text-black/80">
                    Wednesdays — 6:00pm dinner, 7:00pm worship / bible study / sharing /
                    prayer.
                  </div>
                </div>

                <p className="mt-4 text-sm text-black/80">
                  For more information, contact Pastor Chris Lee.
                </p>
                <a
                  className="mt-3 inline-flex rounded-2xl bg-abide-deep px-5 py-3 text-sm font-semibold text-white hover:bg-abide-deep-2"
                  href="mailto:chris.f.lee@gmail.com"
                >
                  Email Pastor Chris Lee
                </a>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <Card>
                <div className="text-base font-semibold">Photos</div>
                <div className="mt-4 overflow-hidden rounded-2xl border border-black/10">
                  <Image
                    src="/assets/abound-header.png"
                    alt="Abound"
                    width={1600}
                    height={900}
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
