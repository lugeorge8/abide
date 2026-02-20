"use client";

import { useEffect, useMemo, useState } from "react";

type RopeItem = {
  id: string;
  label: string;
};

const ITEMS: RopeItem[] = [
  { id: "hero", label: "Hero" },
  { id: "featured-events", label: "Events" },
  { id: "community", label: "Community" },
  { id: "faq", label: "FAQ" },
  { id: "pastor", label: "Pastor" },
  { id: "newsletter", label: "Newsletter" },
];

export function ScrollRopeNav() {
  const [active, setActive] = useState(0);
  const [tops, setTops] = useState<number[]>([]);

  useEffect(() => {
    const compute = () => {
      const next = ITEMS.map((it) => {
        const el = document.getElementById(it.id);
        if (!el) return Number.POSITIVE_INFINITY;
        const r = el.getBoundingClientRect();
        return r.top + window.scrollY;
      });
      setTops(next);
    };

    compute();
    window.addEventListener("resize", compute);
    // Recompute shortly after load to catch images/layout.
    const id = window.setTimeout(compute, 300);

    return () => {
      window.removeEventListener("resize", compute);
      window.clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.45;
      let idx = 0;
      for (let i = 0; i < tops.length; i++) {
        if (mid >= tops[i]) idx = i;
      }
      setActive(idx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [tops.length, tops]);

  const points = useMemo(() => {
    const startY = 18;
    const gap = 44;
    return ITEMS.map((_, i) => startY + i * gap);
  }, []);

  const height = points[points.length - 1] + 18;

  return (
    <div className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="pointer-events-auto rounded-3xl border border-black/10 bg-white/70 p-4 backdrop-blur">
        <div className="flex items-start gap-3">
          <svg
            width={24}
            height={height}
            viewBox={`0 0 24 ${height}`}
            fill="none"
            className="shrink-0"
            aria-hidden="true"
          >
            {/* rope */}
            <path
              d={`M12 ${points[0]} C 12 ${points[0] + 10}, 12 ${points[points.length - 1] - 10}, 12 ${points[points.length - 1]}`}
              stroke="rgba(20,109,63,0.45)"
              strokeWidth={4}
              strokeLinecap="round"
            />
            {/* knots */}
            {points.map((y, i) => {
              const isActive = i === active;
              return (
                <g key={y}>
                  <circle
                    cx={12}
                    cy={y}
                    r={7}
                    fill={isActive ? "rgba(97,206,112,0.95)" : "rgba(255,255,255,0.95)"}
                    stroke={
                      isActive
                        ? "rgba(20,109,63,0.95)"
                        : "rgba(20,109,63,0.35)"
                    }
                    strokeWidth={2}
                  />
                  <circle
                    cx={12}
                    cy={y}
                    r={2}
                    fill={isActive ? "rgba(20,109,63,0.95)" : "rgba(20,109,63,0.35)"}
                  />
                </g>
              );
            })}
          </svg>

          <div className="flex flex-col gap-3">
            {ITEMS.map((it, i) => {
              const isActive = i === active;
              return (
                <button
                  key={it.id}
                  type="button"
                  className={
                    "text-left text-sm font-semibold transition " +
                    (isActive
                      ? "text-abide-deep"
                      : "text-black/60 hover:text-black/80")
                  }
                  onClick={() =>
                    document.getElementById(it.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  {it.label}
                </button>
              );
            })}
            <div className="pt-1 text-[11px] text-black/40">(Scroll)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
