import Image from "next/image";

import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function MenPage() {
  return (
    <>
      <HeroShell active="men">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Connect
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Men’s Ministry
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Monthly gatherings, accountability, and quarterly activities.
          </p>
        </div>

        <ContentShell>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Card>
                <div className="text-base font-semibold">Men’s Ministry</div>
                <p className="mt-3 text-sm leading-6 text-black/80">
                  Monthly small group meetings; accountability partners.
                </p>
                <p className="mt-2 text-sm leading-6 text-black/80">
                  Quarterly group activities (breakfast, BBQ, hike, service
                  projects, etc.).
                </p>

                <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4">
                  <div className="text-sm font-semibold">Contact</div>
                  <div className="mt-2 flex flex-col gap-2 text-sm">
                    <a
                      className="font-semibold text-abide-teal hover:underline"
                      href="mailto:slim.ccic@gmail.com"
                    >
                      slim.ccic@gmail.com
                    </a>
                    <a
                      className="font-semibold text-abide-teal hover:underline"
                      href="mailto:jlee.ccic@gmail.com"
                    >
                      jlee.ccic@gmail.com
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-5">
              <Card>
                <div className="text-base font-semibold">Photos</div>
                <div className="mt-4 overflow-hidden rounded-2xl border border-black/10">
                  <Image
                    src="/assets/men-ministry.png"
                    alt="Men’s Ministry"
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
