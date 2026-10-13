import { motion } from "framer-motion";

export default function PointsProgress({ value, max, label, variant = "mellow", showLabel = true }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const barColor = variant === "mellow" ? "bg-mellow" : "bg-copper";
  const track = variant === "mellow" ? "bg-plum/20" : "bg-cream-200";

  return (
    <div>
      {showLabel && label && (
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-cream/70">
          <span>{label}</span>
          <span>{value.toLocaleString()} / {max.toLocaleString()}</span>
        </div>
      )}
      <div className={`h-2.5 w-full overflow-hidden rounded-full ${track}`}>
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}