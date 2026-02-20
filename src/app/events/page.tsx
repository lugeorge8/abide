import { Card, ContentShell, HeroShell, SiteFooter } from "@/components/site-shell";

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

export default function EventsPage() {
  return (
    <>
      <HeroShell active={undefined}>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
          Featured Events
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Featured Events
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-black/70">
          Discover what’s happening at Parish Church.
        </p>
      </div>

      <ContentShell>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {featuredEvents.map((e) => (
            <Card key={`${e.date}-${e.body.slice(0, 12)}`}> 
              <div className="text-sm font-semibold text-abide-teal">{e.date}</div>
              <p className="mt-2 text-sm leading-6 text-black/80">{e.body}</p>
            </Card>
          ))}
        </div>
      </ContentShell>
      </HeroShell>

      <SiteFooter />
    </>
  );
}
