import { forwardRef } from "react";
import { cn } from "../../lib/utils.js";

const Input = forwardRef(function Input(
  { label, error, hint, className, id, ...props },
  ref
) {
  const inputId = id || props.name;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId}
          className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-copper">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          "w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-plum",
          "placeholder:text-plum/40 shadow-inner transition-all",
          "focus:border-copper/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-copper/10",
          error && "border-red-400/60 focus:ring-red-400/20",
          className
        )}
        {...props}
      />
      {hint && !error && <p className="mt-1.5 text-xs text-plum/50">{hint}</p>}
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
});

export default Input;