import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { formatCurrency } from "../../lib/utils.js";

export default function FavoriteItemCard({ item, isFavorite = true, onToggle }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card-warm group overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-roast/50 via-transparent to-transparent opacity-70" />

        {/* Favorite button */}
        <button
          onClick={() => onToggle?.(item.id)}
          aria-label="Toggle favorite"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-cream-50/95 text-terracotta shadow-soft backdrop-blur-md transition hover:scale-110"
        >
          <Heart className={`h-4 w-4 transition ${isFavorite ? "fill-terracotta" : ""}`} />
        </button>

        {/* Price chip on image */}
        <span className="absolute bottom-3 left-3 rounded-full bg-cream-50/95 px-3 py-1 font-serif text-sm font-semibold text-roast shadow-soft backdrop-blur-md">
          {formatCurrency(item.price)}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-serif text-base font-semibold leading-snug text-roast">
          {item.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-roast/60">
          {item.description}
        </p>

        <button className="mt-4 inline-flex min-h-[38px] w-full items-center justify-center gap-1.5 rounded-full bg-roast text-xs font-semibold uppercase tracking-wider text-cream-50 transition hover:bg-roast-dark">
          <Plus className="h-3.5 w-3.5" />
          Add to Order
        </button>
      </div>
    </motion.div>
  );
}