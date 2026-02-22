import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import { featuredEvents } from "@/lib/content";

const schedule = [
  { label: "Sunday School", value: "9:30 am - 10:30 am" },
  { label: "Coffee and Fellowship", value: "10:30 am - 10:55 am" },
  { label: "Worship", value: "11:00 am - 12:15 pm" },
  { label: "Lunch", value: "12:15 pm" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header (nav excluded from mimic request) */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-6">
        <SiteHeader active="home" />
      </div>

      {/* Hero (full-bleed image + centered overlay text) */}
      <section className="mt-6">
        <div className="relative h-[340px] w-full overflow-hidden sm:h-[420px] lg:h-[520px]">
          <Image
            src="/assets/ccic-hero.svg"
            alt="Sanctuary"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
            <div>
              <div className="font-serif text-xl italic tracking-wide opacity-95 sm:text-2xl">
                Welcome to
              </div>
              <div className="mt-2 font-serif text-4xl font-semibold tracking-[0.12em] sm:text-6xl">
                ABIDE FELLOWSHIP
              </div>
              <div className="mt-2 font-serif text-2xl italic tracking-wide opacity-95 sm:text-3xl">
                English Ministry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto w-full max-w-4xl px-4 py-14">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-[0.18em] text-zinc-800">
            WELCOME
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-zinc-700 sm:text-base">
            We invite you to join our spiritual family at Abide Fellowship, where
            we seek to grow closer to God through biblical teaching, prayer, and
            fellowship, all rooted in Christian love and grace. We want to know
            Christ and make Him known.
          </p>

          <div className="mx-auto mt-10 max-w-2xl space-y-2 text-sm text-zinc-700 sm:text-base">
            {schedule.map((s) => (
              <div key={s.label} className="flex flex-wrap gap-x-2">
                <span className="font-semibold">{s.label}:</span>
                <span>{s.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/im-new"
              className="inline-flex items-center justify-center rounded-none bg-zinc-900 px-10 py-3 text-xs font-semibold tracking-[0.22em] text-white hover:bg-zinc-800"
            >
              I&apos;M NEW
            </Link>
          </div>
        </Reveal>
      </section>

      <div className="border-t border-zinc-200" />

      {/* Announcements */}
      <section className="mx-auto w-full max-w-4xl px-4 py-14">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold tracking-[0.18em] text-zinc-800">
            ANNOUNCEMENTS
          </h2>

          <div className="mt-10 space-y-6 text-sm leading-7 text-zinc-700 sm:text-base">
            {featuredEvents.map((e) => (
              <div key={`${e.date}-${e.body.slice(0, 16)}`}>
                <div className="font-semibold text-zinc-900">{e.date}</div>
                <div className="mt-1 whitespace-pre-line">{e.body}</div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm leading-7 text-zinc-700 sm:text-base">
            To encourage the participation, full functioning, and growth of the
            Body of Christ, we are inviting all congregants to our in-person
            worship services on Sundays. For those who have unique and/or medical
            challenges, a video recording of the service will be uploaded later on
            Sunday.
          </p>

          <div className="mt-10 grid gap-6">
            <Link
              href="/announcements"
              className="mx-auto inline-flex w-full max-w-sm items-center justify-center rounded-none bg-zinc-900 px-10 py-4 text-xs font-semibold tracking-[0.2em] text-white hover:bg-zinc-800"
            >
              WEEKLY ENGLISH SERVICE BULLETIN
            </Link>
            <Link
              href="/sermons"
              className="mx-auto inline-flex w-full max-w-sm items-center justify-center rounded-none bg-zinc-900 px-10 py-4 text-xs font-semibold tracking-[0.2em] text-white hover:bg-zinc-800"
            >
              LATEST SERMONS
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
