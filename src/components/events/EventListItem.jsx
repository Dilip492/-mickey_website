import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { formatDate } from "../../lib/utils.js";

export default function EventListItem({ event, index }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      id={event.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="group relative overflow-hidden rounded-[28px] shadow-[0_24px_60px_-24px_rgba(42,20,13,0.4)]">
        <div className="aspect-[4/3] overflow-hidden bg-cream-100">
          <img
            src={event.image}
            alt={event.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        </div>
        {/* Category tag */}
        <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-terracotta backdrop-blur-md">
          {event.category}
        </span>
        {/* Date badge */}
        <div className="absolute right-4 top-4 flex flex-col items-center rounded-2xl bg-roast/90 px-4 py-3 text-cream-50 shadow-warm backdrop-blur-md">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-mellow">
            {event.dayLabel}
          </span>
          <span className="mt-0.5 font-serif text-2xl font-semibold leading-none">
            {new Date(event.date).getDate()}
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-wider text-cream-100/70">
            {new Date(event.date).toLocaleString("en-CA", { month: "short" })}
          </span>
        </div>
      </div>

      {/* Details */}
      <div>
        <p className="eyebrow flex items-center gap-2">
          <span className="inline-block h-px w-6 bg-terracotta/50" />
          {formatDate(event.date)}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-roast sm:text-4xl">
          {event.name}
        </h2>
        <p className="mt-3 text-base italic leading-relaxed text-terracotta">
          {event.tagline}
        </p>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-roast/65">
          {event.description}
        </p>

        {/* Meta grid */}
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Meta icon={Calendar} label={formatDate(event.date)} />
          <Meta icon={Clock}    label={event.time} />
          <Meta icon={MapPin}   label={event.location} />
          <Meta icon={Users}    label={event.seats} />
        </div>

        {/* CTA row */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="group/cta inline-flex min-h-[48px] items-center gap-2 rounded-full bg-terracotta px-6 text-sm font-semibold text-cream-50 shadow-[0_12px_28px_-12px_rgba(179,71,34,0.7)] transition-all hover:bg-terracotta-dark hover:gap-3">
            Reserve a Spot
            <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
          </button>
          <span className="text-sm font-medium text-roast/60">{event.price}</span>
        </div>
      </div>
    </motion.article>
  );
}

function Meta({ icon: Icon, label }) {
  return (
    <div className="flex items-start gap-2.5 text-sm text-roast/70">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
      <span className="leading-snug">{label}</span>
    </div>
  );
}