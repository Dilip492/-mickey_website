import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles } from "lucide-react";

export default function LoyaltyCard({ loyalty, variant = "full" }) {
  const stars = Array.from({ length: loyalty.maxTierStars || 5 });
  const away = loyalty.nextRewardAt - loyalty.points;
  const pct = Math.min(100, (loyalty.points / loyalty.nextRewardAt) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-[28px] text-cream-50 shadow-[0_24px_64px_-24px_rgba(42,20,13,0.5)]"
    >
      {/* Deep roast base with layered glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-roast-light via-roast to-roast-dark" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-terracotta/50 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-mellow/20 blur-[90px]" />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(241,222,202,0.9) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      {/* Terracotta top accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-terracotta via-mellow to-terracotta" />

      <div className="relative p-7 sm:p-9">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-100/60">
              <span className="inline-block h-px w-6 bg-mellow/60" />
              My Mickey's
            </p>
            <p className="mt-2.5 flex items-center gap-2 font-serif text-2xl font-semibold text-mellow sm:text-3xl">
              <Sparkles className="h-5 w-5" />
              {loyalty.tier} Member
            </p>
          </div>

          <div className="flex gap-0.5" aria-label={`${loyalty.tierStars} of ${loyalty.maxTierStars} stars`}>
            {stars.map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < loyalty.tierStars
                    ? "fill-mellow text-mellow drop-shadow-[0_0_6px_rgba(244,176,78,0.6)]"
                    : "text-cream-100/20"
                }`}
                strokeWidth={1.5}
              />
            ))}
          </div>
        </div>

        {/* Points */}
        <div className="mt-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-cream-100/50">
            Points Balance
          </p>
          <div className="mt-1 flex items-end gap-3">
            <span className="font-serif text-6xl font-semibold leading-none tracking-tight sm:text-7xl">
              {loyalty.points.toLocaleString()}
            </span>
            <span className="mb-2 text-sm uppercase tracking-widest text-cream-100/50">
              pts
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-7">
          <div className="mb-2.5 flex items-center justify-between text-xs font-medium">
            <span className="text-cream-100/70">
              Next reward: <span className="text-mellow">{loyalty.nextRewardName}</span>
            </span>
            <span className="text-cream-100/60">{away} pts to go</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-cream-100/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-mellow via-mellow to-terracotta shadow-[0_0_16px_rgba(244,176,78,0.55)]"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
            />
          </div>
        </div>

        {/* CTA */}
        {variant === "full" && (
          <Link
            to="/my-mickeys/rewards"
            className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-mellow px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(244,176,78,0.6)] transition hover:bg-mellow-dark hover:gap-3"
          >
            View Rewards
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}