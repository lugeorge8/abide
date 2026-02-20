import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-red-950 to-red-950" />
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-28 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-yellow-400/25 blur-3xl" />
          <div className="absolute left-0 top-24 h-[420px] w-[520px] rounded-full bg-red-500/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-yellow-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-16 sm:py-20">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400/90 font-black text-red-950">
                A
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight">Abide Church</div>
                <div className="text-xs text-white/70">San Jose, CA</div>
              </div>
            </div>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                Sundays at 11:00 AM • 1490 Saratoga Ave
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                A Christ-centered community to worship, grow, and serve.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                Explore announcements, plan a visit, or reach out — each section is
                its own page.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Link
                  href="/announcements"
                  className="rounded-2xl bg-yellow-400 px-5 py-3 text-center text-sm font-semibold text-red-950 hover:bg-yellow-300"
                >
                  Announcements
                </Link>
                <Link
                  href="/visit"
                  className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
                >
                  Visit
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
                >
                  Contact
                </Link>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  This Sunday
                </div>
                <div className="mt-2 text-lg font-semibold">Worship Service</div>
                <div className="mt-1 text-sm text-white/75">11:00 AM</div>
                <div className="mt-4 rounded-2xl bg-black/20 p-4">
                  <div className="text-xs font-semibold text-white/70">Location</div>
                  <div className="mt-1 text-sm">1490 Saratoga Ave, San Jose, CA</div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-12 border-t border-white/10 pt-8 text-xs text-white/60">
            © {new Date().getFullYear()} Abide Church • San Jose, CA
          </footer>
        </div>
      </div>
    </div>
  );
}
