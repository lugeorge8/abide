import Link from "next/link";

export function SiteHeader({
  active,
}: {
  active?: string;
}) {
  const base =
    "rounded-2xl px-5 py-3 text-base font-semibold text-black/80 hover:bg-black/5";
  const activeCls =
    "rounded-2xl bg-abide-gold px-5 py-3 text-base font-semibold text-abide-deep";

  const menuButton =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold text-black/80 hover:bg-black/5";
  const dropdown =
    "invisible absolute left-0 top-full z-30 mt-2 w-72 translate-y-1 rounded-3xl border border-black/10 bg-white/95 p-2 opacity-0 shadow-lg backdrop-blur transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100";
  const dropdownItem =
    "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-black/80 hover:bg-black/5";

  return (
    <header className="sticky top-0 z-20 -mx-2 flex items-center justify-between gap-6 rounded-3xl border border-black/10 bg-white/80 px-4 py-4 backdrop-blur">
      <Link href="/" className="flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-3xl bg-abide-gold font-black text-abide-deep text-2xl">
          A
        </div>
        <div>
          <div className="text-lg font-semibold tracking-tight text-black">Abide Church</div>
          <div className="text-sm text-abide-muted">San Jose, CA</div>
        </div>
      </Link>

      <nav className="hidden items-center gap-2 sm:flex">
        <Link href="/" className={active === "home" ? activeCls : base}>
          Home
        </Link>

        {/* About Us */}
        <div className="group relative">
          <button className={menuButton} type="button">
            About Us
            <span className="text-black/40">▾</span>
          </button>
          <div className={dropdown}>
            <Link href="/im-new" className={dropdownItem}>
              I&apos;m New <span className="text-black/30">→</span>
            </Link>
            <Link href="/about" className={dropdownItem}>
              About CCIC <span className="text-black/30">→</span>
            </Link>
            <Link href="/beliefs" className={dropdownItem}>
              Our Beliefs <span className="text-black/30">→</span>
            </Link>
            <Link href="/elders-staff" className={dropdownItem}>
              Our Elders &amp; Staff <span className="text-black/30">→</span>
            </Link>
          </div>
        </div>

        {/* Connect */}
        <div className="group relative">
          <button className={menuButton} type="button">
            Connect
            <span className="text-black/40">▾</span>
          </button>
          <div className={dropdown}>
            <Link href="/community" className={dropdownItem}>
              Finding Community <span className="text-black/30">→</span>
            </Link>
            <Link href="/children" className={dropdownItem}>
              Children <span className="text-black/30">→</span>
            </Link>
            <Link href="/youth" className={dropdownItem}>
              Youth <span className="text-black/30">→</span>
            </Link>
            <Link href="/homegroup" className={dropdownItem}>
              Homegroup <span className="text-black/30">→</span>
            </Link>
            <Link href="/abound" className={dropdownItem}>
              Abound <span className="text-black/30">→</span>
            </Link>
            <Link href="/men" className={dropdownItem}>
              Men <span className="text-black/30">→</span>
            </Link>
            <Link href="/women" className={dropdownItem}>
              Women <span className="text-black/30">→</span>
            </Link>
            <Link href="/prayer" className={dropdownItem}>
              Prayer <span className="text-black/30">→</span>
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div className="group relative">
          <button className={menuButton} type="button">
            Resources
            <span className="text-black/40">▾</span>
          </button>
          <div className={dropdown}>
            <Link href="/serving" className={dropdownItem}>
              Serving <span className="text-black/30">→</span>
            </Link>
            <Link href="/sunday-school" className={dropdownItem}>
              Sunday School <span className="text-black/30">→</span>
            </Link>
            <Link href="/calendar" className={dropdownItem}>
              Calendar <span className="text-black/30">→</span>
            </Link>
            <Link href="/photos" className={dropdownItem}>
              Photos <span className="text-black/30">→</span>
            </Link>
            <Link href="/events" className={dropdownItem}>
              Events <span className="text-black/30">→</span>
            </Link>
            <Link href="/sermons" className={dropdownItem}>
              Sermons <span className="text-black/30">→</span>
            </Link>
          </div>
        </div>

        {/* Other Ministries (external) */}
        <div className="group relative">
          <button className={menuButton} type="button">
            Other Ministries
            <span className="text-black/40">▾</span>
          </button>
          <div className={dropdown}>
            <a
              href="https://ccic-sj.org/mandarin/about"
              className={dropdownItem}
              target="_blank"
              rel="noreferrer"
            >
              Mandarin <span className="text-black/30">↗</span>
            </a>
            <a
              href="https://ccic-sj.org/can/about"
              className={dropdownItem}
              target="_blank"
              rel="noreferrer"
            >
              Cantonese <span className="text-black/30">↗</span>
            </a>
            <a
              href="https://ccic-sj.org/children"
              className={dropdownItem}
              target="_blank"
              rel="noreferrer"
            >
              Children <span className="text-black/30">↗</span>
            </a>
            <a
              href="https://ccic-sj.org/mission"
              className={dropdownItem}
              target="_blank"
              rel="noreferrer"
            >
              Mission <span className="text-black/30">↗</span>
            </a>
          </div>
        </div>

        {/* CCIC Main (external) */}
        <a
          href="https://ccic-sj.org/"
          className={menuButton}
          target="_blank"
          rel="noreferrer"
        >
          CCIC Main <span className="text-black/30">↗</span>
        </a>
      </nav>
    </header>
  );
}

export function HeroShell({
  active,
  children,
}: {
  active?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="relative overflow-hidden">
        {/* subtle accent glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-abide-gold/25 blur-3xl" />
          <div className="absolute top-28 left-0 h-[360px] w-[520px] rounded-full bg-abide-accent/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[360px] w-[520px] rounded-full bg-abide-teal/12 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
          <SiteHeader active={active} />
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function ContentShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">{children}</main>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-abide-teal/25 bg-white/80 p-6 text-zinc-900 shadow-sm">
      {children}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-abide-deep text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="inline-flex rounded-2xl bg-white px-4 py-3">
              <div className="text-sm font-semibold text-abide-deep">
                Abide Fellowship
              </div>
              <div className="mx-2 text-abide-muted">•</div>
              <div className="text-sm font-semibold text-abide-deep">
                A Ministry of CCIC
              </div>
            </div>
            <div className="mt-4 text-sm text-white/80">
              San Jose, CA
              <span className="mx-2 text-white/40">•</span>
              Sundays
              <span className="mx-2 text-white/40">•</span>
              11:00 AM
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Menu
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <Link href="/" className="hover:text-white/90">
                    Home
                  </Link>
                  <Link href="/about" className="hover:text-white/90">
                    About Us
                  </Link>
                  <Link href="/events" className="hover:text-white/90">
                    Events
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Ministries
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <Link href="/ministries" className="hover:text-white/90">
                    Ministries
                  </Link>
                  <Link href="/resources" className="hover:text-white/90">
                    Resources
                  </Link>
                  <Link href="/prayer" className="hover:text-white/90">
                    Prayer
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  More
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <Link href="/visit" className="hover:text-white/90">
                    Visit
                  </Link>
                  <Link href="/contact" className="hover:text-white/90">
                    Contact
                  </Link>
                  <Link href="/jesus" className="hover:text-white/90">
                    Curious about Jesus?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/60">
          © {new Date().getFullYear()} Abide Fellowship. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
