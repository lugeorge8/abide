"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type MenuKey = "about" | "connect" | "resources" | "other" | null;

export function SiteHeaderClient({ active }: { active?: string }) {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  const base =
    "rounded-2xl px-5 py-3 text-base font-semibold text-black/80 hover:bg-black/5";
  const activeCls =
    "rounded-2xl bg-abide-gold px-5 py-3 text-base font-semibold text-abide-deep";

  const menuButton =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold text-black/80 hover:bg-black/5";

  const dropdownBase =
    "absolute left-0 top-full z-30 mt-2 w-72 rounded-3xl border border-black/10 bg-white/95 p-2 shadow-lg backdrop-blur";
  const dropdownHidden = "invisible opacity-0 pointer-events-none";
  const dropdownShown = "visible opacity-100";

  const dropdownItem =
    "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-black/80 hover:bg-black/5";

  const toggle = (key: Exclude<MenuKey, null>) =>
    setOpen((cur) => (cur === key ? null : key));

  const isOpen = useMemo(
    () => ({
      about: open === "about",
      connect: open === "connect",
      resources: open === "resources",
      other: open === "other",
    }),
    [open]
  );

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      const root = rootRef.current;
      if (!root) return;
      if (e.target instanceof Node && !root.contains(e.target)) {
        setOpen(null);
        setMobileOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      ref={(el) => {
        rootRef.current = el;
      }}
      className="sticky top-0 z-20 -mx-2 flex items-center justify-between gap-6 rounded-3xl border border-black/10 bg-white/80 px-4 py-4 backdrop-blur"
    >
      <Link
        href="/"
        className="flex items-center gap-4"
        onClick={() => {
          setOpen(null);
          setMobileOpen(false);
        }}
      >
        <div className="grid h-16 w-16 place-items-center rounded-3xl bg-black/5">
          {/* Official Abide logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/abide-logo.png"
            alt="Abide"
            className="h-12 w-12 object-contain"
          />
        </div>
        <div>
          <div className="text-lg font-semibold tracking-tight text-black">
            Abide Church
          </div>
          <div className="text-sm text-abide-muted">San Jose, CA</div>
        </div>
      </Link>

      {/* Mobile menu button */}
      <button
        type="button"
        className="sm:hidden inline-flex items-center justify-center rounded-2xl p-3 text-black/80 hover:bg-black/5"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        onClick={() => {
          setMobileOpen((v) => !v);
          setOpen(null);
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <nav className="hidden items-center gap-2 sm:flex">
        <Link
          href="/"
          className={active === "home" ? activeCls : base}
          onClick={() => setOpen(null)}
        >
          Home
        </Link>

        {/* About Us */}
        <div className="relative">
          <button
            className={menuButton}
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen.about}
            onClick={() => toggle("about")}
          >
            About Us
            <span className="text-black/40">▾</span>
          </button>
          <div
            className={`${dropdownBase} transition ${
              isOpen.about ? dropdownShown : dropdownHidden
            }`}
            role="menu"
          >
            <Link
              href="/im-new"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              I&apos;m New <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/about"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              About CCIC <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/beliefs"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Our Beliefs <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/elders-staff"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Our Elders &amp; Staff <span className="text-black/30">→</span>
            </Link>
          </div>
        </div>

        {/* Connect */}
        <div className="relative">
          <button
            className={menuButton}
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen.connect}
            onClick={() => toggle("connect")}
          >
            Connect
            <span className="text-black/40">▾</span>
          </button>
          <div
            className={`${dropdownBase} transition ${
              isOpen.connect ? dropdownShown : dropdownHidden
            }`}
            role="menu"
          >
            <Link
              href="/community"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Finding Community <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/children"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Children <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/youth"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Youth <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/homegroup"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Homegroup <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/abound"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Abound <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/men"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Men <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/women"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Women <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/prayer"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Prayer <span className="text-black/30">→</span>
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div className="relative">
          <button
            className={menuButton}
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen.resources}
            onClick={() => toggle("resources")}
          >
            Resources
            <span className="text-black/40">▾</span>
          </button>
          <div
            className={`${dropdownBase} transition ${
              isOpen.resources ? dropdownShown : dropdownHidden
            }`}
            role="menu"
          >
            <Link
              href="/serving"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Serving <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/sunday-school"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Sunday School <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/calendar"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Calendar <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/photos"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Photos <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/events"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Events <span className="text-black/30">→</span>
            </Link>
            <Link
              href="/sermons"
              className={dropdownItem}
              onClick={() => setOpen(null)}
            >
              Sermons <span className="text-black/30">→</span>
            </Link>
          </div>
        </div>

        {/* Other Ministries (external) */}
        <div className="relative">
          <button
            className={menuButton}
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen.other}
            onClick={() => toggle("other")}
          >
            Other Ministries
            <span className="text-black/40">▾</span>
          </button>
          <div
            className={`${dropdownBase} transition ${
              isOpen.other ? dropdownShown : dropdownHidden
            }`}
            role="menu"
          >
            <a
              href="https://ccic-sj.org/mandarin/about"
              className={dropdownItem}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(null)}
            >
              Mandarin <span className="text-black/30">↗</span>
            </a>
            <a
              href="https://ccic-sj.org/can/about"
              className={dropdownItem}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(null)}
            >
              Cantonese <span className="text-black/30">↗</span>
            </a>
            <a
              href="https://ccic-sj.org/children"
              className={dropdownItem}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(null)}
            >
              Children <span className="text-black/30">↗</span>
            </a>
            <a
              href="https://ccic-sj.org/mission"
              className={dropdownItem}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(null)}
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

        {/* Curious about Jesus? */}
        <Link
          href="/curious-about-jesus"
          className="rounded-full border border-abide-teal/30 bg-abide-teal/10 px-5 py-3 text-base font-semibold text-abide-teal hover:bg-abide-teal/15"
          onClick={() => setOpen(null)}
        >
          Curious about Jesus?
        </Link>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`sm:hidden absolute left-0 right-0 top-full mt-3 rounded-3xl border border-black/10 bg-white/95 p-3 shadow-lg backdrop-blur transition ${
          mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
        role="menu"
        aria-label="Mobile navigation"
      >
        <Link
          href="/"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          Home <span className="text-black/30">→</span>
        </Link>

        <div className="my-2 h-px bg-black/10" />

        <div className="px-2 py-2 text-xs font-semibold uppercase tracking-widest text-black/50">
          About
        </div>
        <Link
          href="/im-new"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          I&apos;m New <span className="text-black/30">→</span>
        </Link>
        <Link
          href="/about"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          About CCIC <span className="text-black/30">→</span>
        </Link>
        <Link
          href="/beliefs"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          Our Beliefs <span className="text-black/30">→</span>
        </Link>
        <Link
          href="/elders-staff"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          Our Elders &amp; Staff <span className="text-black/30">→</span>
        </Link>

        <div className="my-2 h-px bg-black/10" />

        <div className="px-2 py-2 text-xs font-semibold uppercase tracking-widest text-black/50">
          Connect
        </div>
        <Link
          href="/community"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          Finding Community <span className="text-black/30">→</span>
        </Link>
        <Link
          href="/homegroup"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          Homegroup <span className="text-black/30">→</span>
        </Link>
        <Link
          href="/abound"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          Abound <span className="text-black/30">→</span>
        </Link>

        <div className="my-2 h-px bg-black/10" />

        <div className="px-2 py-2 text-xs font-semibold uppercase tracking-widest text-black/50">
          Resources
        </div>
        <Link
          href="/announcements"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          Announcements <span className="text-black/30">→</span>
        </Link>
        <Link
          href="/sermons"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          Sermons <span className="text-black/30">→</span>
        </Link>
        <Link
          href="/calendar"
          className={dropdownItem}
          onClick={() => setMobileOpen(false)}
        >
          Calendar <span className="text-black/30">→</span>
        </Link>

        <div className="my-2 h-px bg-black/10" />

        <Link
          href="/curious-about-jesus"
          className="mt-1 flex w-full items-center justify-between rounded-2xl border border-abide-teal/30 bg-abide-teal/10 px-4 py-3 text-sm font-semibold text-abide-teal hover:bg-abide-teal/15"
          onClick={() => setMobileOpen(false)}
        >
          Curious about Jesus? <span className="text-abide-teal/70">→</span>
        </Link>
      </div>
    </header>
  );
}
