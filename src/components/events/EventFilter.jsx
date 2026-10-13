import { motion } from "framer-motion";

export default function EventFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`relative min-h-[40px] rounded-full px-4 text-sm font-medium transition ${
              isActive
                ? "text-cream-50"
                : "text-roast/70 hover:bg-terracotta/8 hover:text-terracotta"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-terracotta shadow-[0_8px_20px_-8px_rgba(179,71,34,0.6)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}