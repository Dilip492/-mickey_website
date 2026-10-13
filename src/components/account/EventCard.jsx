import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card-warm group overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-cream-100">
        <img
          src={event.image}
          alt={event.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roast/85 via-roast/30 to-transparent" />

        {event.reservationStatus && (
          <span className="absolute right-3 top-3 rounded-full bg-mellow px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-roast shadow-soft">
            {event.reservationStatus}
          </span>
        )}

        <div className="absolute bottom-4 left-4 right-4">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-mellow">
            <Calendar className="h-3.5 w-3.5" />
            {event.date} • {event.time}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-cream-50">
            {event.name}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="flex items-center gap-1.5 text-xs text-roast/55">
          <MapPin className="h-3.5 w-3.5" />
          {event.location}
        </p>

        <button className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta transition-all hover:gap-2.5">
          View Event
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
}