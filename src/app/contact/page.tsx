import { Card, ContentShell, HeroShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <HeroShell active="contact">
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
          Reach us
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80">
          Questions? We’d love to help.
        </p>
      </div>

      <ContentShell>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <div className="text-base font-semibold text-red-950">Email</div>
              <p className="mt-2 text-sm text-zinc-700">
                Add your church email here (e.g., info@abidechurch.org).
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="mailto:info@abidechurch.org"
                  className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
                >
                  Email us
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-red-900/20 bg-white px-5 py-3 text-sm font-semibold text-red-950 hover:bg-zinc-50"
                >
                  YouTube
                </a>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card>
              <div className="text-base font-semibold text-red-950">Address</div>
              <p className="mt-2 text-sm text-zinc-700">
                1490 Saratoga Ave, San Jose, CA
              </p>
              <div className="mt-6 text-xs text-zinc-500">
                © {new Date().getFullYear()} Abide Church. All rights reserved.
              </div>
            </Card>
          </div>
        </div>
      </ContentShell>
    </HeroShell>
  );
}
