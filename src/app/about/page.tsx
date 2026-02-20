import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <>
      <HeroShell active={undefined}>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-black/60">
          About Us
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          About Us
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80">
          Our history, mission, vision, and values.
        </p>
      </div>

      <ContentShell>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <div className="text-base font-semibold">Our History</div>
            <p className="mt-3 text-sm leading-6 text-black/80">
              CCIC is an elder-governed non-denominational church. It traces its
              root back to 1969 when some graduate students from San Jose State
              University formed a Bible study. By 1971, this group grew into a
              church, formally known as Chinese Church in Christ (CCIC). Over the
              years, our church grew to include Cantonese and English
              congregations, along with children and youth ministries.
            </p>
            <p className="mt-3 text-sm leading-6 text-black/80">
              As our church grew, we planted several other CCICs in the Bay Area:
              Mountain View, South San Jose (South Valley), Milpitas (North
              Valley), Cupertino, and Central San Jose. North Valley planted its
              own church in Pleasanton (Tri-Valley). Since each church is
              designated by its location, our church became CCIC-SJ.
            </p>
          </Card>

          <Card>
            <div className="text-base font-semibold">Our Mission</div>
            <p className="mt-3 text-sm leading-6 text-black/80">
              Our mission is to lead the unchurched people in Silicon Valley and
              beyond to Christ and be His disciples.
            </p>

            <div className="mt-6 text-base font-semibold">Our Vision</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/80">
              <li>Reaching out to the unchurched in the Silicon Valley</li>
              <li>Bringing them to Jesus and fellowship in His family</li>
              <li>Building up the saints to Christ-like maturity</li>
              <li>Equipping them for ministry in the church</li>
              <li>Striving to fulfill the Great Commission of Jesus Christ</li>
              <li>All for the glory of God</li>
            </ul>
          </Card>

          <Card>
            <div className="text-base font-semibold">Our Values</div>
            <div className="mt-3 space-y-4 text-sm text-black/80">
              <div>
                <div className="font-semibold">The Word of God</div>
                <div className="mt-1">
                  The Word of God is the ultimate authority at CCIC as we seek to
                  build up the church with a Biblically-based culture and approach
                  to ministry.
                </div>
              </div>
              <div>
                <div className="font-semibold">Prayer</div>
                <div className="mt-1">Prayer is the foundation for all ministries at CCIC.</div>
              </div>
              <div>
                <div className="font-semibold">Integrity</div>
                <div className="mt-1">
                  Have soundness of character. Be upright, honest, genuine, open,
                  and frank, speaking the truth in love.
                </div>
              </div>
              <div>
                <div className="font-semibold">Servanthood</div>
                <div className="mt-1">
                  Have an attitude of serving others, building up the body of Christ
                  and preserving unity.
                </div>
              </div>
              <div>
                <div className="font-semibold">Christian Service and Teamwork</div>
                <div className="mt-1">
                  All believers are to be equipped and encouraged to exercise their
                  spiritual gifts to serve together in the church.
                </div>
              </div>
              <div>
                <div className="font-semibold">Outreach and Missions</div>
                <div className="mt-1">
                  Have a heart for missions that springs out of our commitment to
                  fulfill The Great Commission of Jesus Christ.
                </div>
              </div>
              <div>
                <div className="font-semibold">Adaptability to Change</div>
                <div className="mt-1">
                  The Gospel of Jesus Christ is unchangeable. We will preach and
                  teach this Gospel to effectively reach people in contemporary
                  times.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
