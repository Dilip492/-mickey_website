import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { formatCurrency } from "../../lib/utils.js";

export default function OrderCard({ order, compact = false }) {
  const statusStyle =
    order.status === "Completed"
      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60"
      : order.status === "Cancelled"
      ? "bg-red-50 text-red-700 ring-1 ring-red-200/60"
      : "bg-mellow/25 text-[#8A3F1D] ring-1 ring-mellow/40";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="card-warm group relative flex flex-col gap-5 overflow-hidden p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-terracotta via-terracotta/40 to-transparent" />

      <div className="min-w-0 flex-1 pl-2">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-roast text-cream-50">
            <ShoppingBag className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-semibold text-roast">
            Order #{order.id}
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${statusStyle}`}>
            {order.status}
          </span>
          <span className="chip-terracotta !py-1">{order.type}</span>
        </div>

        <p className="mt-3 text-xs font-medium uppercase tracking-wider text-roast/45">
          {order.date}
        </p>

        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-roast/75">
          {order.items.map((i) => (i.qty > 1 ? `${i.name} ×${i.qty}` : i.name)).join(" • ")}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-wider text-roast/45">Total</p>
          <p className="font-serif text-xl font-semibold text-roast">
            {formatCurrency(order.total)}
          </p>
        </div>
        {!compact && (
          <div className="flex gap-2">
            <Link
              to={`/my-mickeys/orders/${order.id}`}
              className="inline-flex min-h-[36px] items-center rounded-full border border-roast/15 px-4 text-xs font-medium text-roast transition hover:border-terracotta/40 hover:bg-terracotta/5"
            >
              View
            </Link>
            <button className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-terracotta px-4 text-xs font-medium text-cream-50 transition hover:bg-terracotta-dark">
              Order Again
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}