import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
// import Logo from "../brand/Logo.jsx";

export default function EventHero({ featured }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={featured.image}
          alt={featured.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roast via-roast/75 to-roast/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-roast/70 via-transparent to-transparent" />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-terracotta/40 blur-[100px]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-24 sm:pb-32 lg:pt-12">
        <div className="flex items-center justify-between">
          {/* <Link to="/my-mickeys"><Logo variant="light" /></Link> */}
          <Link
            to="/my-mickeys"
            className="hidden rounded-full border border-cream-100/25 bg-cream-100/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream-50 backdrop-blur-md transition hover:bg-cream-100/20 sm:inline-flex"
          >
            My Mickey's
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 max-w-3xl text-cream-50 lg:mt-32"
        >
          <p className="eyebrow !text-mellow flex items-center gap-2">
            <span className="inline-block h-px w-8 bg-mellow/70" />
            What's Happening
          </p>

          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-cream-50 sm:text-6xl lg:text-7xl">
            Evenings worth
            <br />
            <span className="italic text-mellow">showing up for.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/80">
            Live music, tastings, chef's tables, and slow mornings at Mickey's —
            Kitchener's warmest corner for coffee, food, and good company.
          </p>

          {/* Featured event chip */}
          <div className="mt-10 inline-flex flex-wrap items-center gap-4 rounded-full border border-cream-100/15 bg-cream-100/10 px-5 py-3 backdrop-blur-md">
            <span className="rounded-full bg-terracotta px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream-50">
              Next up
            </span>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2 font-medium text-cream-50">
                <Calendar className="h-4 w-4 text-mellow" />
                {featured.dayLabel} • {featured.time}
              </span>
              <span className="hidden items-center gap-2 text-cream-100/70 sm:flex">
                <MapPin className="h-4 w-4" />
                Downtown Kitchener
              </span>
            </div>
            <a
              href={`#${featured.id}`}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-mellow transition-all hover:gap-2.5"
            >
              View event
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}