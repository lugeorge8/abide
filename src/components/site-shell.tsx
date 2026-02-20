import Link from "next/link";
import { SiteHeaderClient } from "@/components/site-header";

export function SiteHeader({ active }: { active?: string }) {
  return <SiteHeaderClient active={active} />;
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
      <div className="relative overflow-hidden bg-abide-deep text-white">
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
