import { ParallaxBlobs } from "@/components/parallax-blobs";
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
        {/* subtle accent glows (parallax) */}
        <ParallaxBlobs />

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
    <footer className="mt-16 bg-abide-teal text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-center">
        <div className="text-sm">
          1490 Saratoga Avenue, San Jose, CA 95129 | (408) 364-2242
        </div>
        <div className="mt-2 text-sm">
          Copyright © {new Date().getFullYear()} CCIC San Jose. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
