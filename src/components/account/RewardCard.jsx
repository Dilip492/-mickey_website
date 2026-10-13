import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function RewardCard({ reward, userPoints, onRedeem }) {
  const available = reward.status === "available" && userPoints >= reward.points;
  const remaining = Math.max(0, reward.points - userPoints);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card-warm relative flex flex-col gap-4 overflow-hidden p-5 hover:border-terracotta/30"
    >
      {/* Ticket top accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-terracotta via-mellow to-copper" />

      {/* Perforated divider dots along the top edge */}
      <div className="pointer-events-none absolute left-0 top-0 flex w-full justify-between px-3">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cream-100" />
        ))}
      </div>

      <div className="flex items-start justify-between pt-1">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-mellow/30 to-mellow/10 text-3xl ring-1 ring-mellow/30">
          {reward.emoji}
        </span>
        <span className="chip-mellow">{reward.points.toLocaleString()} pts</span>
      </div>

      <div>
        <h3 className="font-serif text-lg font-semibold leading-snug text-roast">
          {reward.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-roast/60">{reward.description}</p>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-dashed border-cream-200 pt-4">
        {reward.useBy ? (
          <span className="text-[11px] font-medium uppercase tracking-wider text-roast/45">
            Use by {reward.useBy}
          </span>
        ) : (
          <span className="text-[11px] font-medium uppercase tracking-wider text-roast/45">
            {remaining > 0 ? `${remaining} pts to unlock` : "Almost there"}
          </span>
        )}

        {available ? (
          <button
            onClick={() => onRedeem?.(reward)}
            className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-terracotta px-4 text-xs font-semibold text-cream-50 transition hover:bg-terracotta-dark"
          >
            <Gift className="h-3.5 w-3.5" />
            Redeem
          </button>
        ) : (
          <span className="inline-flex min-h-[36px] items-center rounded-full bg-roast/5 px-4 text-xs font-semibold text-roast/50">
            Locked
          </span>
        )}
      </div>
    </motion.div>
  );
}