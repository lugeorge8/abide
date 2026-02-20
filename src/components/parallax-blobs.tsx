"use client";

import { useEffect, useState } from "react";

export function ParallaxBlobs() {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY || 0));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // small drift factors
  const a = Math.min(60, y * 0.06);
  const b = Math.min(50, y * 0.04);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-abide-gold/25 blur-3xl"
        style={{ transform: `translate(-50%, ${a}px)` }}
      />
      <div
        className="absolute top-28 left-0 h-[360px] w-[520px] rounded-full bg-abide-accent/15 blur-3xl"
        style={{ transform: `translate(0, ${b}px)` }}
      />
      <div
        className="absolute bottom-0 right-0 h-[360px] w-[520px] rounded-full bg-abide-teal/12 blur-3xl"
        style={{ transform: `translate(0, ${a * -0.35}px)` }}
      />
    </div>
  );
}
