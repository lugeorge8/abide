import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function EldersStaffPage() {
  return (
    <>
      <HeroShell active="elders-staff">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Our Elders &amp; Staff
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Elders &amp; Staff
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Elders, ministers, and administrative staff.
          </p>
        </div>

        <ContentShell>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card>
              <div className="text-base font-semibold">Elders</div>
              <ul className="mt-3 space-y-2 text-sm text-black/80">
                <li>
                  <span className="font-semibold">Enoch Jiao</span> — Mandarin
                  Ministry
                </li>
                <li>
                  <span className="font-semibold">Jeffrey Zhang</span> — Mandarin
                  Ministry
                </li>
                <li>
                  <span className="font-semibold">Jyh-shiarn Yur</span> — Mandarin
                  Ministry
                </li>
                <li>
                  <span className="font-semibold">Jason Liang</span> — English
                  Ministry
                </li>
              </ul>
            </Card>

            <Card>
              <div className="text-base font-semibold">Ministers</div>
              <ul className="mt-3 space-y-2 text-sm text-black/80">
                <li>
                  <span className="font-semibold">Chien-Chien Jin</span> —
                  Children&apos;s Ministry
                </li>
                <li>
                  <span className="font-semibold">Chris Lee</span> — English
                  Ministry
                </li>
                <li>
                  <span className="font-semibold">Hong Qian</span> — Mandarin
                  Ministry
                </li>
                <li>
                  <span className="font-semibold">Johnson Chiu</span> — English
                  Ministry
                </li>
                <li>
                  <span className="font-semibold">J. Xiong</span> — Cantonese
                  Ministry
                </li>
                <li>
                  <span className="font-semibold">Joe Kim</span> — Youth Ministry
                </li>
                <li>
                  <span className="font-semibold">Sam Ng</span> — Cantonese
                  Ministry
                </li>
                <li>
                  <span className="font-semibold">Sharon Wu</span> — Children&apos;s
                  Ministry
                </li>
              </ul>
            </Card>

            <Card>
              <div className="text-base font-semibold">Administrative Staff</div>
              <ul className="mt-3 space-y-2 text-sm text-black/80">
                <li>
                  <span className="font-semibold">Charles Zhao</span> — Facility
                  Manager
                </li>
                <li>
                  <span className="font-semibold">Cheery Wu</span> — Finance &amp;
                  Admin
                </li>
                <li>
                  <span className="font-semibold">Evelyn Lee</span> — Admin
                  Assistant
                </li>
              </ul>
            </Card>
          </div>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
