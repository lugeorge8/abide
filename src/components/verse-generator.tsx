"use client";

import { useMemo, useState } from "react";

type Verse = {
  ref: string;
  text: string;
};

const VERSES: Verse[] = [
  {
    ref: "John 3:16",
    text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
  },
  {
    ref: "Matthew 11:28",
    text: "Come to me, all who labor and are heavy laden, and I will give you rest.",
  },
  {
    ref: "Romans 5:8",
    text: "But God shows his love for us in that while we were still sinners, Christ died for us.",
  },
  {
    ref: "Psalm 23:1",
    text: "The LORD is my shepherd; I shall not want.",
  },
  {
    ref: "Proverbs 3:5-6",
    text: "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
  },
  {
    ref: "Romans 8:1",
    text: "There is therefore now no condemnation for those who are in Christ Jesus.",
  },
  {
    ref: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
  },
  {
    ref: "2 Corinthians 5:17",
    text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
  },
] as const;

function pickNext(currentIdx: number | null) {
  if (VERSES.length === 0) return null;
  if (VERSES.length === 1) return 0;

  let idx = Math.floor(Math.random() * VERSES.length);
  if (currentIdx !== null && idx === currentIdx) {
    idx = (idx + 1) % VERSES.length;
  }
  return idx;
}

export function VerseGenerator() {
  const [idx, setIdx] = useState<number | null>(() => pickNext(null));

  const verse = useMemo(() => (idx === null ? null : VERSES[idx]), [idx]);

  return (
    <div>
      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-widest text-black/60">
          Verse
        </div>
        {verse ? (
          <>
            <div className="mt-2 text-base font-semibold text-black">{verse.ref}</div>
            <div className="mt-3 text-sm leading-7 text-black/80">“{verse.text}”</div>
          </>
        ) : (
          <div className="mt-3 text-sm text-black/70">(No verses configured)</div>
        )}

        <button
          type="button"
          className="mt-6 inline-flex rounded-2xl bg-abide-deep px-5 py-3 text-sm font-semibold text-white hover:bg-abide-deep-2"
          onClick={() => setIdx((cur) => pickNext(cur))}
        >
          give me a new verse!
        </button>
      </div>

      <div className="mt-3 text-xs text-black/50">
        (Verses are sampled locally — no API call.)
      </div>
    </div>
  );
}
