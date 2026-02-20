import { SiteHeader, SiteFooter } from "@/components/site-shell";

const featuredEvents = [
  {
    date: "Nov 16",
    body: "Join our upcoming cooking class featuring the butter chicken recipe on the 1st floor kitchen from 4:30 – 5:30 pm. This is followed by family dinner (potluck).",
  },
  {
    date: "Nov 23rd",
    body: "Join us on Nov. 23 for a special Thanksgiving lunch after service, at 12:15 pm. The menu will be ham, mashed potatoes, mac & cheese, salad, veggies and pumpkin pie. Please contact Lisa Wong if you can help with bringing food, serving, and/or clean up.",
  },
  {
    date: "Nov 28 – 30th",
    body: "This year, we have a combined Winter Retreat at Crowne Plaza Hotel, Foster City. Our keynote speaker is Pastor James Hudson Taylor IV.",
  },
  {
    date: "Dec 5th",
    body: "We are partnering with HelpOneChild Giving Tree Christmas to share love with foster children! It’s as simple as 1-2-3. #1 Take a card from our giving tree that is available today (Nov 9) from the 2nd floor. #2 Scan the QR code to register your gift. #3 Buy the gift and leave it by our giving tree before Friday, Dec 5, with the tag attached.",
  },
  {
    date: "Dec 6th",
    body: "Continuing the Giving Tree Christmas program, we need volunteers to assist foster parents in picking up gifts for their foster children, including welcoming, hosting, and serving food, as well as providing gift wrapping service. This event starts from 12 – 3 pm. Contact Howey Chin for more information and to volunteer.",
  },
  {
    date: "Dec 6th",
    body: "Join us for a delightful year-end women’s potluck on December 6. It’s from 11:00 am to 1:00 pm on the 3rd floor Fellowship Hall. Bring your favorite dish to share. Don’t miss out on the fun and fellowship!",
  },
] as const;

const faqs = [
  {
    q: "Where can I park?",
    a: "",
  },
  {
    q: "What should I wear?",
    a: "",
  },
  {
    q: "What about my kids?",
    a: "",
  },
  {
    q: "How do I join a home group?",
    a: "",
  },
] as const;

// (removed duplicate import)

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-6">
        <SiteHeader active="home" />
      </div>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            {/* resonate-like circle background */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-[360px] w-[360px] rounded-full bg-abide-accent/15 blur-2xl" />
            <div className="pointer-events-none absolute left-14 top-10 h-[260px] w-[260px] rounded-full border-2 border-abide-teal/25" />

            <div className="relative">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Abide in Christ
                <span className="block">Across Generations</span>
              </h1>
              <div className="mt-4 text-lg font-semibold text-abide-teal">
                Active Faith
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#schedule"
                  className="rounded-2xl bg-abide-deep px-5 py-3 text-sm font-semibold text-white hover:bg-abide-deep-2"
                >
                  Service Schedule
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              id="schedule"
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold">Service Schedule</div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="font-semibold">Sunday School</div>
                  <div className="text-abide-muted">9:30 - 10:30 AM</div>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <div className="font-semibold">Coffee & Conversation</div>
                  <div className="text-abide-muted">10:30 - 11:00 AM</div>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <div className="font-semibold">Worship</div>
                  <div className="text-abide-muted">11:00 - 12:15 PM</div>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <div className="font-semibold">Lunch</div>
                  <div className="text-abide-muted">12:15 PM</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-2xl font-semibold">Join Us This Sunday</div>
                <a
                  href="#"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-abide-gold px-5 py-3 text-sm font-semibold text-abide-deep hover:opacity-90"
                >
                  join us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Featured Events</h2>
            <p className="mt-2 text-sm text-abide-muted">
              Discover what’s happening at Parish Church.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {featuredEvents.map((e) => (
            <div
              key={`${e.date}-${e.body.slice(0, 12)}`}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-abide-teal">{e.date}</div>
              <p className="mt-2 text-sm leading-6 text-black/80">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <p className="mt-2 text-sm text-abide-muted">
          Have questions? We have the answers!
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-base font-semibold">{f.q}</div>
              {f.a ? (
                <p className="mt-2 text-sm text-abide-muted">{f.a}</p>
              ) : (
                <p className="mt-2 text-sm text-abide-muted">
                  (Answer TBD)
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lead Pastor */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold tracking-tight">A WORD FROM OUR LEAD PASTOR</h2>

        <div className="mt-6 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <div className="text-2xl font-semibold">“YOU ARE WELCOME HERE!”</div>
          <p className="mt-4 text-sm leading-7 text-black/80">
            We invite you to join our spiritual family at CCIC, where we seek to
            grow closer to God through biblical teaching, prayer, and fellowship,
            all rooted in Christian love and grace. We want to know Christ and
            make Him known. Our English congregation’s Sunday service is as
            follows:
          </p>
          <div className="mt-6 text-sm font-semibold text-abide-muted">Lead Pastor</div>
        </div>
      </section>

      {/* Weekly Newsletter */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold tracking-tight">Weekly Newsletter</h2>
        <p className="mt-2 text-sm text-abide-muted">
          Weekly Newsletter
        </p>
        <div className="mt-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="text-base font-semibold">Weekly Newsletter</div>
          <p className="mt-2 text-sm text-black/80">
            (Link/Signup TBD)
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
