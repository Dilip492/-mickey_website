import { ArrowRight, CalendarDays } from "lucide-react";

/* Placeholder events — replace with real data from your CMS/API */
const events = [
  {
    id: 1,
    tag: "Live & Local",
    title: "Acoustic Sundays on the Terrace",
    date: "Sun, 12 Oct",
    time: "6:00 PM – 9:00 PM",
    description:
      "Local musicians, slow evenings, and a special dessert menu.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    tag: "Community Moments",
    title: "Neighbourhood Latte Art Night",
    date: "Thu, 23 Oct",
    time: "7:00 PM – 9:00 PM",
    description:
      "Learn the basics of latte art with our head barista. All levels welcome.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    tag: "Community Moments",
    title: "Neighbourhood Latte Art Night",
    date: "Thu, 23 Oct",
    time: "7:00 PM – 9:00 PM",
    description:
      "Learn the basics of latte art with our head barista. All levels welcome.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80",
  },
];

export default function EventsSection() {
  return (
    <section className="bg-cream-50 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
              There's always something happening
            </p>
            <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              What's happening
              <br />
              <span className="italic text-terracotta">at Mickey's?</span>
            </h2>
            <p className="mt-5 max-w-xl font-sans text-base leading-7 text-roast/55">
              Give events a visible place on the homepage, with real dates
              and details managed by the team.
            </p>
          </div>

          <a
            href="/events"
            className="group inline-flex shrink-0 items-center gap-2 font-sans text-sm font-bold text-terracotta transition hover:text-terracotta-light"
          >
            View All Events
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* EVENTS GRID */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="group overflow-hidden rounded-3xl border border-roast/10 bg-cream-100 transition hover:border-terracotta/30 hover:shadow-[0_20px_50px_-25px_rgba(44,30,20,0.25)]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-4 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta shadow-sm backdrop-blur">
                  {event.tag}
                </span>
              </div>

              {/* BODY */}
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.14em] text-roast/50">
                  <CalendarDays size={14} className="text-terracotta" />
                  <span>{event.date}</span>
                  <span className="text-roast/25">•</span>
                  <span>{event.time}</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl leading-snug text-roast transition group-hover:text-terracotta md:text-3xl">
                  {event.title}
                </h3>

                <p className="mt-3 font-sans text-sm leading-6 text-roast/55">
                  {event.description}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-terracotta transition hover:text-terracotta-light">
                  Upcoming event details
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* EXPLORE MORE EVENTS CTA */}
        <div className="mt-16 flex flex-col items-center gap-5 border-t border-roast/10 pt-14 md:mt-20 md:pt-16">
          <p className="max-w-md text-center font-sans text-sm leading-6 text-roast/55">
            There's more brewing than we can fit on this page — see the full
            calendar of tastings, live music and community nights.
          </p>

          <a
            href="/events"
            className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-4 font-sans text-sm font-bold text-white transition hover:bg-terracotta-light focus:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/25"
          >
            Explore More Events
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}