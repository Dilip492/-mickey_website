import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";

export default function ActivityTimeline({ items }) {
  if (!items.length) {
    return (
      <div className="card-warm p-8 text-center text-sm text-roast/50">
        No activity to show.
      </div>
    );
  }

  return (
    <div className="card-warm overflow-hidden">
      {items.map((item, i) => {
        const positive = item.delta > 0;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group relative flex items-center justify-between border-b border-cream-200/60 p-4 last:border-b-0 transition hover:bg-cream-100/40"
          >
            <div className="flex items-center gap-4">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ring-4 ${
                  positive
                    ? "bg-emerald-50 text-emerald-700 ring-emerald-100/50"
                    : "bg-terracotta/10 text-terracotta ring-terracotta/10"
                }`}
              >
                {positive ? (
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                ) : (
                  <ArrowDownRight className="h-4 w-4" strokeWidth={2.4} />
                )}
              </span>
              <div>
                <p className="text-sm font-semibold text-roast">{item.label}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-roast/50">
                  <Clock className="h-3 w-3" />
                  {item.when}
                </p>
              </div>
            </div>
            <span
              className={`font-serif text-lg font-semibold tabular-nums ${
                positive ? "text-emerald-700" : "text-terracotta"
              }`}
            >
              {positive ? "+" : ""}
              {item.delta}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}