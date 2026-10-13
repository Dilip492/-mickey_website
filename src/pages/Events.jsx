import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
// import Logo from "../components/brand/Logo.jsx";
import EventHero from "../components/events/EventHero.jsx";
import EventFilter from "../components/events/EventFilter.jsx";
import EventListItem from "../components/events/EventListItem.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import { eventsData, EVENT_CATEGORIES } from "../data/eventsGallery.js";
import Header from "../components/Header.jsx"

export default function Events() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? eventsData
        : eventsData.filter((e) => e.category === category),
    [category]
  );

  const featured = eventsData[0];

  return (
    <div className="min-h-screen bg-cream-50">
      <Header/>
      {/* Header bar (below hero, sticky) */}
      <EventHero featured={featured} />

      {/* Floating header on top of hero — repeat nav for context */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 hidden">
        {/* reserved for future nav if you want it */}
      </div>

      {/* Filter + intro */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-terracotta/50" />
              The Calendar
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-roast sm:text-4xl">
              Six ways to spend an evening at Mickey's.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-roast/60">
              Small rooms, real conversation, and events that fill up fast.
              Pick an evening and we'll save your seat.
            </p>
          </div>

          <div className="lg:shrink-0">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-roast/50">
              Browse by
            </p>
            <EventFilter
              categories={EVENT_CATEGORIES}
              active={category}
              onChange={setCategory}
            />
          </div>
        </div>
      </section>

      {/* Events list */}
      <section className="mx-auto max-w-7xl space-y-20 px-6 pb-24 sm:space-y-28">
        {filtered.length === 0 ? (
          <EmptyState
            icon={ArrowRight}
            title="Nothing in this category yet"
            description="Try another category — or check back soon for new evenings."
          />
        ) : (
          filtered.map((event, i) => (
            <EventListItem key={event.id} event={event} index={i} />
          ))
        )}
      </section>

      {/* Private events CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-roast-light via-roast to-roast-dark p-10 text-cream-50 shadow-[0_24px_60px_-24px_rgba(42,20,13,0.5)] sm:p-14"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-terracotta/50 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-mellow/20 blur-[100px]" />
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-terracotta via-mellow to-terracotta" />

          <div className="relative max-w-2xl">
            <p className="eyebrow !text-mellow">Private Events</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Reserve the lounge for your evening.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-100/80">
              Birthdays, launches, small weddings, tastings — Mickey's can be
              yours for the night. Tell us the feeling and we'll build the evening.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-mellow px-6 text-sm font-semibold text-roast shadow-[0_12px_28px_-10px_rgba(244,176,78,0.7)] transition hover:bg-mellow-dark hover:gap-3">
                Enquire About a Booking
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-cream-100/25 bg-cream-100/10 px-6 text-sm font-medium text-cream-50 backdrop-blur-md transition hover:bg-cream-100/20">
                Email Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cream-200/60 bg-cream-100/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
       
          <div className="flex flex-wrap items-center gap-6 text-sm text-roast/60">
            <Link to="/my-mickeys" className="transition hover:text-terracotta">
              My Mickey's
            </Link>
            <Link to="/gallery" className="transition hover:text-terracotta">
              Gallery
            </Link>
            <a href="mailto:hello@mickeys.ca" className="transition hover:text-terracotta">
              hello@mickeys.ca
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}