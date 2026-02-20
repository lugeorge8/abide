import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function YouthPage() {
  return (
    <>
      <HeroShell active="youth">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Connect
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Youth
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Christians In Action (CIA).
          </p>
        </div>

        <ContentShell>
          <Card>
            <div className="text-base font-semibold">About Us</div>
            <p className="mt-3 text-sm leading-6 text-black/80">
              CIA stands for Christians In Action.
            </p>

            <div className="mt-6">
              <div className="text-sm font-semibold">Mission</div>
              <p className="mt-2 text-sm leading-6 text-black/80">
                To provide a place where youth are embraced with the love of God so
                that they are freed and equipped to live for Him in their daily
                lives.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="text-sm font-semibold">Friday Night Youth Group</div>
                <div className="mt-2 text-sm text-black/80">
                  7:45 – 9:30 PM (Sanctuary B)
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="text-sm font-semibold">Sunday Morning</div>
                <div className="mt-2 text-sm text-black/80">
                  9:15 – 10:30 AM English Worship (Sanctuary A, 2nd floor)
                  <br />
                  11:00 AM – 12:00 PM Sunday School
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold">Sunday School Rooms</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/80">
                <li>6th grade: Room 324</li>
                <li>7th + 8th grade: Room 315</li>
                <li>9th + 10th grade: Room 311</li>
                <li>11th + 12th + college: Room 323</li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold">Resources</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/80">
                <li>Baptism Application</li>
                <li>General Release Form</li>
                <li>Worship Binder</li>
                <li>Recommended Reading List</li>
              </ul>
              <div className="mt-3 text-sm text-black/60">
                (Links TBD)
              </div>
            </div>
          </Card>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
