import { cn } from "../../lib/utils.js";

export default function Card({ className, children, ...rest }) {
  return (
    <div className={cn("rounded-3xl border border-cream-200 bg-cream-50 shadow-card", className)} {...rest}>
      {children}
    </div>
  );
}