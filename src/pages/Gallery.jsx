import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";
// import Logo from "../components/brand/Logo.jsx";
import EventFilter from "../components/events/EventFilter.jsx";
import GalleryGrid from "../components/events/GalleryGrid.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import { galleryData, GALLERY_CATEGORIES } from "../data/eventsGallery.js";
import Header from "../components/Header.jsx";

export default function Gallery() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? galleryData
        : galleryData.filter((g) => g.category === category),
    [category]
  );

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Mini header */}
          {/* <Link to="/my-mickeys"><Logo /></Link> */}
      {/* <header className="sticky top-0 z-30 border-b border-cream-200/60 bg-cream-50/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
          <Link to="/events" className="text-sm font-medium text-roast/70 transition hover:text-terracotta">
            ← Events
          </Link>
          <Link
            to="/my-mickeys"
            className="hidden rounded-full border border-roast/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-roast transition hover:border-terracotta/40 hover:bg-terracotta/5 sm:inline-flex"
          >
            My Mickey's
          </Link>
        </div>
      </header> */}
      <Header/>

      {/* Editorial hero */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow flex items-center gap-2">
            <Camera className="h-3.5 w-3.5" />
            The Gallery
          </p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-roast sm:text-6xl lg:text-7xl">
            Small moments,
            <br />
            <span className="italic text-terracotta">warmly kept.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-roast/65">
            A room, a cup, a record spinning. The little details that make
            an afternoon at Mickey's feel like it belongs to you.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-roast/50">
            {filtered.length} {filtered.length === 1 ? "image" : "images"}
          </p>
          <EventFilter
            categories={GALLERY_CATEGORIES}
            active={category}
            onChange={setCategory}
          />
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        {filtered.length === 0 ? (
          <EmptyState
            icon={Camera}
            title="No photos in this category yet"
            description="Try another category — new moments land here often."
          />
        ) : (
          <GalleryGrid items={filtered} />
        )}
      </section>

      {/* CTA */}
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
            <p className="eyebrow !text-mellow">Come See It In Person</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The best photos are the ones you're in.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-100/80">
              Grab a table, order something warm, and stay as long as you like.
              We'll keep the light on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/events"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-mellow px-6 text-sm font-semibold text-cream-50 shadow-[0_12px_28px_-10px_rgba(244,176,78,0.7)] transition hover:bg-mellow-dark hover:gap-3"
              >
                See Upcoming Events
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/my-mickeys"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-cream-100/25 bg-cream-100/10 px-6 text-sm font-medium text-cream-50 backdrop-blur-md transition hover:bg-cream-100/20"
              >
                Visit My Mickey's
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cream-200/60 bg-cream-100/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
          {/* <Logo /> */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-roast/60">
            <Link to="/events" className="transition hover:text-terracotta">
              Events
            </Link>
            <Link to="/my-mickeys" className="transition hover:text-terracotta">
              My Mickey's
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