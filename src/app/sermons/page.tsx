import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

export default function SermonsPage() {
  return (
    <>
      <HeroShell active="sermons">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Resources
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sermons
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Watch recent messages and services.
          </p>
        </div>

        <ContentShell>
          <Card>
            <div className="text-base font-semibold">CCIC Media</div>
            <p className="mt-2 text-sm text-black/80">
              Videos are hosted on YouTube. If the embed doesn&apos;t load, open the
              channel directly.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-black/10">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed?listType=user_uploads&list=CCICMediavideos`}
                title="CCIC Media Videos"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <a
              className="mt-4 inline-flex rounded-2xl bg-abide-deep px-5 py-3 text-sm font-semibold text-white hover:bg-abide-deep-2"
              href="https://www.youtube.com/c/CCICMediavideos"
              target="_blank"
              rel="noreferrer"
            >
              Open YouTube Channel
            </a>
          </Card>
        </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
