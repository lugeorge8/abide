"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type MenuKey = "about" | "connect" | "resources" | "other" | null;

export function SiteHeaderClient({ active }: { active?: string }) {
  const [open, setOpen] = useState<MenuKey>(null);
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
      if (e.target instanceof Node && !root.contains(e.target)) setOpen(null);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
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
        onClick={() => setOpen(null)}
      >
        <div className="relative h-14 w-48 sm:h-16 sm:w-56">
          <Image
            src="/assets/header-logo.png"
            alt="Abide Fellowship, A Ministry of CCIC"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="hidden sm:block">
          <div className="text-sm text-abide-muted">San Jose, CA</div>
        </div>
      </Link>

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
      </nav>
    </header>
  );
}
