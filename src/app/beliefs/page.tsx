import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function BeliefsPage() {
  return (
    <>
      <HeroShell active="beliefs">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Our Beliefs
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Beliefs
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
          A summary of what we believe.
        </p>
        </div>

        <ContentShell>
          <Card>
            <div className="text-base font-semibold">Our Beliefs</div>
            <div className="mt-3 space-y-4 text-sm leading-6 text-black/80">
              <p>
                We believe that there is only one true God, who is holy, just,
                merciful, all-powerful, all-knowing and everywhere, creator of all
                things, eternally existing in three persons: Father, Son, and Holy
                Spirit, who are co-eternal and of equal dignity and power.
              </p>
              <p>
                We believe in the deity of Jesus Christ. He is the Son of God, the
                only mediator between God and man. We believe that He was
                miraculously born of the Virgin Mary through the conception by the
                Holy Spirit to become man. We believe in His substitutionary death
                on the cross and His bodily resurrection on the third day to
                fulfill God’s salvation. We believe that He has ascended into
                Heaven and sits at the right hand of the Father and He will come
                again for the believers.
              </p>
              <p>
                We believe in the present ministry of the Holy Spirit indwelling
                all believers, helping believers to understand the truth and
                enabling and empowering the life and ministry of each believer.
              </p>
              <p>
                We believe that all Scripture is God-breathed and inspired by God
                and without mistakes as originally written. It is the complete
                revelation of His will for salvation and the only authoritative
                source for our faith and practice for the Christian life.
              </p>
              <p>
                We believe that all people have sinned and fall short of the glory
                of God and are by nature sinners. By disobeying God, every person
                incurred spiritual death – eternal separation from God.
              </p>
              <p>
                We believe that our Lord Jesus Christ died for our sins on the
                cross so that all who believe in Him are declared righteous, are
                reconciled to God, and have eternal life; but all who do not
                believe in Him are to be separated from God eternally.
              </p>
              <p>
                We believe that Jesus Christ is the head of His body, the
                universal church comprising of all born-again believers. Jesus
                Christ is also the head of any local church. Under His leadership,
                and as a living testimony of His resurrection, believers are to
                serve together to deliver the good news to all peoples.
              </p>
            </div>
          </Card>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
