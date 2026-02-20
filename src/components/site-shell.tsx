import Link from "next/link";

export function SiteHeader({ active }: { active?: "ann" | "visit" | "contact" }) {
  const base =
    "rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10";
  const activeCls =
    "rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-emerald-950";

  return (
    <header className="sticky top-0 z-20 -mx-2 flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/20 px-2 py-2 backdrop-blur">
      <Link href="/" className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400/90 font-black text-emerald-950">
          A
        </div>
        <div>
          <div className="text-sm font-semibold tracking-tight">Abide Church</div>
          <div className="text-xs text-white/70">San Jose, CA</div>
        </div>
      </Link>

      <nav className="hidden items-center gap-2 sm:flex">
        <Link
          href="/announcements"
          className={active === "ann" ? activeCls : base}
        >
          Announcements
        </Link>
        <Link href="/visit" className={active === "visit" ? activeCls : base}>
          Visit
        </Link>
        <Link
          href="/contact"
          className={active === "contact" ? activeCls : base}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export function HeroShell({
  active,
  children,
}: {
  active?: "ann" | "visit" | "contact";
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-emerald-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-28 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-yellow-400/25 blur-3xl" />
          <div className="absolute left-0 top-24 h-[420px] w-[520px] rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-yellow-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
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
    <div className="rounded-3xl border border-emerald-900/25 bg-white/80 p-6 text-zinc-900 shadow-sm">
      {children}
    </div>
  );
}
