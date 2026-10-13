import { motion } from "framer-motion";
import { Wifi } from "lucide-react";
import { formatCurrency } from "../../lib/utils.js";

export default function GiftCard({ card }) {
  return (
    <motion.div
      whileHover={{ y: -4, rotate: -0.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-terracotta via-copper to-roast p-6 text-cream-50 shadow-[0_20px_50px_-20px_rgba(42,20,13,0.6)]"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-mellow/30 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-terracotta/60 blur-[60px]" />

      {/* Pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(248,241,233,0.9) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <p className="font-curved text-2xl leading-none text-mellow">M</p>
          <Wifi className="h-5 w-5 rotate-90 text-cream-100/60" />
        </div>

        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream-100/70">
          {card.name}
        </p>

        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-cream-100/55">
          Balance
        </p>
        <p className="mt-1 font-serif text-4xl font-semibold tracking-tight">
          {formatCurrency(card.balance)}
        </p>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-base tracking-wider text-cream-100/80">
              •••• •••• •••• {card.last4}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-cream-100/50">
              Member Gift Card
            </p>
          </div>
          <button className="rounded-full bg-cream-100/15 px-4 py-2 text-xs font-semibold text-cream-50 backdrop-blur-md transition hover:bg-cream-100/25">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}