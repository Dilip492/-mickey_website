import { motion } from "framer-motion";
import { cn } from "../../lib/utils.js";

export default function EmptyState({ icon: Icon, title, description, action, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "flex flex-col items-center justify-center rounded-4xl border border-dashed border-terracotta/25",
        "bg-gradient-to-b from-cream-50 to-cream-100/50 px-6 py-16 text-center",
        className
      )}
    >
      {Icon && (
        <div className="relative mb-5">
          <div className="absolute inset-0 -m-3 rounded-full bg-terracotta/5 blur-xl" />
          <div className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-terracotta/15 to-terracotta/5 text-terracotta ring-1 ring-terracotta/15">
            <Icon className="h-7 w-7" strokeWidth={1.75} />
          </div>
        </div>
      )}
      <h3 className="font-serif text-xl font-semibold text-roast">{title}</h3>
      {description && (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-roast/60">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </motion.div>
  );
}