import Link from "next/link";

export function SiteHeader({
  active,
}: {
  active?:
    | "home"
    | "ann"
    | "visit"
    | "contact"
    | "about"
    | "events"
    | "ministries"
    | "resources"
    | "prayer"
    | "jesus";
}) {
  const base =
    "rounded-2xl px-5 py-3 text-base font-semibold text-black/80 hover:bg-black/5";
  const activeCls =
    "rounded-2xl bg-abide-gold px-5 py-3 text-base font-semibold text-abide-deep";

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
        <Link href="/about" className={active === "about" ? activeCls : base}>
          About Us
        </Link>
        <Link href="/events" className={active === "events" ? activeCls : base}>
          Events
        </Link>
        <Link
          href="/ministries"
          className={active === "ministries" ? activeCls : base}
        >
          Ministries
        </Link>
        <Link
          href="/resources"
          className={active === "resources" ? activeCls : base}
        >
          Resources
        </Link>
        <Link href="/prayer" className={active === "prayer" ? activeCls : base}>
          Prayer
        </Link>
        <Link href="/jesus" className={active === "jesus" ? activeCls : base}>
          Curious about Jesus?
        </Link>
      </nav>
    </header>
  );
}

export function HeroShell({
  active,
  children,
}: {
  active?: "home" | "ann" | "visit" | "contact";
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
