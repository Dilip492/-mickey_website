import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatDate } from "../../lib/utils.js";

export default function OfferCard({ offer, cta = "View Offer" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card-warm group overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-cream-100">
        <img
          src={offer.image}
          alt={offer.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roast/70 via-roast/20 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-cream-50/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-terracotta backdrop-blur-md">
          {offer.category}
        </span>

        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-serif text-xl font-semibold leading-tight text-cream-50 drop-shadow-md">
            {offer.title}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-relaxed text-roast/65">{offer.description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-cream-200/70 pt-4">
          <span className="text-[11px] font-medium uppercase tracking-wider text-roast/45">
            Until {formatDate(offer.validUntil)}
          </span>
          <button className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta transition-all hover:gap-2.5">
            {cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}