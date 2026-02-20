import Image from "next/image";

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
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
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
                      bless others (such as packing purses with care package items
                      for Women’s Shelter)
                    </li>
                    <li>share, listen, and apply His Word</li>
                  </ul>
                </div>
                <p className="mt-4 text-sm text-black/80">All for His glory!</p>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <Card>
                <div className="text-base font-semibold">Photos</div>
                <div className="mt-4 overflow-hidden rounded-2xl border border-black/10">
                  <Image
                    src="/assets/womens-ministry-header.png"
                    alt="Women’s Ministry"
                    width={1400}
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
