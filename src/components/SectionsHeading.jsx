import { cn } from "../../lib/utils.js";

export default function SectionHeading({ eyebrow, title, action, className }) {
  return (
    <div className={cn("mb-5 flex items-end justify-between gap-4", className)}>
      <div>
        {eyebrow && (
          <p className="eyebrow mb-2 flex items-center gap-2">
            <span className="inline-block h-px w-6 bg-terracotta/50" />
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-roast sm:text-[28px]">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}