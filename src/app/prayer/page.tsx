import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function PrayerPage() {
  return (
    <>
      <HeroShell active="prayer">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Prayer
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Prayer Ministry
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Bringing thanksgiving and needs before God’s throne of grace.
          </p>
        </div>

        <ContentShell>
          <Card>
            <div className="text-base font-semibold">Prayer Ministry</div>
            <p className="mt-3 text-sm leading-6 text-black/80">
              The Prayer Ministry brings our thanksgiving, needs, and desire to be
              better followers of Christ before God’s throne of grace. We also pray
              that God would work through His church for the advancement of His
              kingdom.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="text-sm font-semibold">Sunday Prayer</div>
                <div className="mt-2 text-sm text-black/80">
                  Church Library — Sundays at 9:05 a.m.
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="text-sm font-semibold">Thursday Zoom Prayer</div>
                <div className="mt-2 text-sm text-black/80">
                  Meeting ID: 586 805 6275
                  <br />
                  Passcode: 1490
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-black/80">
              Have a prayer request or a praise to share? You can choose to make it
              public or private.
            </p>
            <a
              className="mt-3 inline-flex rounded-2xl bg-abide-deep px-5 py-3 text-sm font-semibold text-white hover:bg-abide-deep-2"
              href="https://ccic-sj.us3.list-manage.com/track/click?e=e249a8d339&id=4c71de2f92&u=a2d1d9d571b78f9211241e68e"
              target="_blank"
              rel="noreferrer"
            >
              Submit a Prayer Request
            </a>

            <div className="mt-4 text-sm text-black/70">
              Sunday prayer warriors, we need you! If you are interested, please
              contact Pastor Johnson.
            </div>
            <a
              className="mt-2 inline-flex text-sm font-semibold text-abide-teal hover:underline"
              href="mailto:jchiu.ccic@gmail.com"
            >
              Contact Pastor Johnson
            </a>
          </Card>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
