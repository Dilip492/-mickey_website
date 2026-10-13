import { forwardRef } from "react";
import { cn } from "../../lib/utils.js";

const variants = {
  primary: "bg-plum text-cream hover:bg-plum-dark shadow-soft",
  copper:  "bg-copper text-cream hover:bg-copper-dark shadow-soft",
  mellow:  "bg-mellow text-plum hover:bg-mellow-dark shadow-soft",
  outline: "border border-plum/20 text-plum hover:bg-plum/5",
  ghost:   "text-plum hover:bg-plum/5",
  danger:  "bg-red-600 text-white hover:bg-red-700",
};
const sizes = {
  sm: "h-9 px-3.5 text-xs rounded-full",
  md: "h-11 px-5 text-sm rounded-full",
  lg: "h-12 px-6 text-base rounded-full",
};

const Button = forwardRef(function Button(
  { as: Comp = "button", variant = "primary", size = "md", className, ...props },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.98]",
        "disabled:opacity-50 disabled:pointer-events-none min-h-[44px]",
        variants[variant], sizes[size], className
      )}
      {...props}
    />
  );
});

export default Button;