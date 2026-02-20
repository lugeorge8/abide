import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function ChildrenPage() {
  return (
    <>
      <HeroShell active="children">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Connect
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Children
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Information for families, programs, and registration.
          </p>
        </div>

        <ContentShell>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Card>
                <div className="text-base font-semibold">Your First Visit</div>
                <p className="mt-3 text-sm leading-6 text-black/80">
                  We are glad you’re here! Register your family at the 2nd floor
                  family check-in system. We will show you how to check-in, get
                  name tags, and find your rooms. Families start service together
                  in the sanctuary. After worship time, kids are dismissed to their
                  classes for age-appropriate Bible learning, fun, and fellowship!
                </p>

                <div className="mt-6 text-sm font-semibold">Schedule</div>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-black/80">
                  <li>
                    Children’s worship @ 9:15am — 1st–5th graders join a worship
                    service tailored for kids.
                  </li>
                  <li>
                    Sunday School @ 10:45am — kids study God’s Word and grow with
                    peers.
                  </li>
                  <li>
                    Awana @ 7:30pm (Fri) — Bible-based evangelism and discipleship
                    for ages 2–18. (See ccic-sj.org/awana)
                  </li>
                </ul>
              </Card>
            </div>

            <div className="lg:col-span-5">
              <Card>
                <div className="text-base font-semibold">Safety</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black/80">
                  <li>
                    Secure check-in/check-out system with matching security codes.
                  </li>
                  <li>
                    Volunteers are interviewed and background-checked prior to
                    serving.
                  </li>
                  <li>Volunteers do not serve alone.</li>
                  <li>
                    Volunteers receive training in child abuse and neglect prior to
                    serving.
                  </li>
                </ul>

                <div className="mt-6 text-base font-semibold">Serving Opportunities</div>
                <p className="mt-2 text-sm text-black/80">
                  The Children’s Ministry Team is made up of volunteers who serve
                  joyfully and faithfully. We’re excited for more volunteers to
                  join the team.
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
