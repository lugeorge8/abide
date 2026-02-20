import Image from "next/image";

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
          {(() => {
            const people = {
              elders: [
                {
                  name: "Enoch Jiao",
                  role: "Mandarin Ministry",
                  img: "/assets/elders/enoch-jiao.png",
                },
                {
                  name: "Jeffrey Zhang",
                  role: "Mandarin Ministry",
                  img: "/assets/elders/jeffrey-zhang.png",
                },
                {
                  name: "Jyh-shiarn Yur",
                  role: "Mandarin Ministry",
                  img: "/assets/elders/jyh-shiarn-yur.png",
                },
                {
                  name: "Jason Liang",
                  role: "English Ministry",
                  img: "/assets/elders/jason-liang.png",
                },
              ],
              ministers: [
                { name: "Chien-Chien Jin", role: "Children's Ministry" },
                { name: "Chris Lee", role: "English Ministry" },
                { name: "Hong Qian", role: "Mandarin Ministry" },
                { name: "Johnson Chiu", role: "English Ministry" },
                { name: "J. Xiong", role: "Cantonese Ministry" },
                { name: "Joe Kim", role: "Youth Ministry" },
                { name: "Sam Ng", role: "Cantonese Ministry" },
                { name: "Sharon Wu", role: "Children's Ministry" },
              ],
              admin: [
                { name: "Charles Zhao", role: "Facility Manager" },
                { name: "Cheery Wu", role: "Finance & Admin" },
                { name: "Evelyn Lee", role: "Admin Assistant" },
              ],
            } as const;

            const CardPerson = ({
              name,
              role,
              img,
            }: {
              name: string;
              role: string;
              img?: string;
            }) => (
              <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-black/5">
                  {img ? (
                    <Image
                      src={img}
                      alt={name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">{name}</div>
                  <div className="mt-0.5 text-xs text-black/60">{role}</div>
                </div>
              </div>
            );

            return (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <Card>
                  <div className="text-base font-semibold">Elders</div>
                  <div className="mt-4 space-y-3">
                    {people.elders.map((p) => (
                      <CardPerson key={p.name} name={p.name} role={p.role} img={p.img} />
                    ))}
                  </div>
                </Card>

                <Card>
                  <div className="text-base font-semibold">Ministers</div>
                  <div className="mt-4 space-y-3">
                    {people.ministers.map((p) => (
                      <CardPerson key={p.name} name={p.name} role={p.role} />
                    ))}
                  </div>
                </Card>

                <Card>
                  <div className="text-base font-semibold">Administrative Staff</div>
                  <div className="mt-4 space-y-3">
                    {people.admin.map((p) => (
                      <CardPerson key={p.name} name={p.name} role={p.role} />
                    ))}
                  </div>
                </Card>
              </div>
            );
          })()}
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
