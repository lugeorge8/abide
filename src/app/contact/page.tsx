import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <>
      <HeroShell active="contact">
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
          Reach us
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80">
          Have questions? We have the answers!
        </p>
      </div>

      <ContentShell>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <div className="text-base font-semibold text-black">Contact</div>
              <p className="mt-2 text-sm text-black/80">
                Have questions? We have the answers!
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="mailto:info@abidechurch.org"
                  className="rounded-2xl bg-abide-deep px-5 py-3 text-sm font-semibold text-white hover:bg-abide-deep-2"
                >
                  Email us
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5"
                >
                  YouTube
                </a>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card>
              <div className="text-base font-semibold text-black">A WORD FROM OUR LEAD PASTOR</div>
              <p className="mt-2 text-sm text-black/80">“YOU ARE WELCOME HERE!”</p>
              <p className="mt-4 text-sm leading-7 text-black/80">
                We invite you to join our spiritual family at CCIC, where we seek to grow closer to God through biblical teaching, prayer, and fellowship, all rooted in Christian love and grace. We want to know Christ and make Him known. Our English congregation’s Sunday service is as follows:
              </p>
              <div className="mt-6 text-xs text-abide-muted">Lead Pastor</div>
            </Card>
          </div>
        </div>
      </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
