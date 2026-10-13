import { cn } from "../../lib/utils.js";

export default function ProfileAvatar({ src, firstName = "", lastName = "", size = "md", className }) {
  const initials = ((firstName?.[0] || "") + (lastName?.[0] || "")) || "M";
  const sizes = {
    sm: "h-9 w-9 text-xs",
    md: "h-11 w-11 text-sm",
    lg: "h-16 w-16 text-lg",
    xl: "h-24 w-24 text-2xl",
  };
  return (
    <div className={cn(
      "relative grid shrink-0 place-items-center overflow-hidden rounded-full border-2 border-cream-200",
      "bg-gradient-to-br from-copper to-plum font-serif font-semibold text-cream shadow-soft",
      sizes[size], className
    )}>
      {src ? (
        <img src={src} alt={`${firstName} ${lastName}`.trim()} className="h-full w-full object-cover" />
      ) : (
        <span>{initials.toUpperCase()}</span>
      )}
    </div>
  );
}