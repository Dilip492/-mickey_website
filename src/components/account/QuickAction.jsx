import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function QuickAction({ icon: Icon, title, text, cta, to }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="card-warm group relative flex flex-col gap-4 overflow-hidden p-5 hover:border-terracotta/30"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-terracotta/0 blur-2xl transition-all duration-500 group-hover:bg-terracotta/15" />

      <div className="relative flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-terracotta/15 to-terracotta/5 text-terracotta ring-1 ring-terracotta/10 transition-all duration-300 group-hover:from-terracotta group-hover:to-terracotta-dark group-hover:text-cream-50 group-hover:ring-terracotta">
          <Icon className="h-5 w-5" strokeWidth={1.9} />
        </span>
        <ArrowUpRight className="h-4 w-4 text-roast/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-terracotta" />
      </div>

      <div className="relative">
        <h3 className="font-serif text-base font-semibold leading-snug text-roast">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-roast/60">{text}</p>
      </div>

      <Link
        to={to}
        className="relative mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta transition-all group-hover:gap-2.5"
      >
        {cta}
      </Link>
    </motion.div>
  );
}