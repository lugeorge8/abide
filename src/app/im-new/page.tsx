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
            Helpful info for your first visit.
          </p>
        </div>

        <ContentShell>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Card>
                <div className="text-base font-semibold">What To Expect</div>

                <div className="mt-5">
                  <div className="text-sm font-semibold text-abide-teal">Ushers</div>
                  <p className="mt-2 text-sm leading-6 text-black/80">
                    Upon your arrival, you’ll meet our ushers at the entrance.
                    First-time guests are welcomed to provide your information at
                    the reception area and we’ll introduce you and your family to
                    our fellow brothers and sisters during our worship services.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-abide-teal">
                    Children &amp; Youth Ministries
                  </div>
                  <p className="mt-2 text-sm leading-6 text-black/80">
                    While you join us for worship and Bible fellowship, your
                    child(ren) and youth will also be learning about the love of
                    God and the gospel of Christ in our Children and Youth
                    ministries.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-abide-teal">
                    Children Registration
                  </div>
                  <p className="mt-2 text-sm leading-6 text-black/80">
                    If you bring your child(ren) for the first time:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/80">
                    <li>Friday – Please proceed to first floor</li>
                    <li>Saturday &amp; Sunday – Please proceed to second floor</li>
                  </ul>
                  <p className="mt-2 text-sm leading-6 text-black/80">
                    To register and get a newcomer label for your child(ren), stop
                    by Children Registration or the AWANA counter.
                  </p>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-5">
              <Card>
                <div className="text-base font-semibold">Parking</div>
                <p className="mt-3 text-sm leading-6 text-black/80">
                  There are convenient, reserved parking spaces located near the
                  entrance for you, especially those with young children, with
                  disabilities, and the elderly.
                </p>
                <p className="mt-3 text-sm leading-6 text-black/80">
                  If the church parking lot is full, you can park at the Union Bank
                  lot (next to the church).
                </p>
                <p className="mt-3 text-sm leading-6 text-black/80">
                  Please do not park in restricted areas (in front of Union Bank,
                  on Atherton Avenue, the neighborhood behind the church, or in the
                  Westgate Shopping Center).
                </p>
              </Card>
            </div>
          </div>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
