import { cn } from "../../lib/utils.js";

export default function SectionHeading({ eyebrow, title, action, className }) {
  return (
    <div className={cn("mb-4 flex items-end justify-between gap-4", className)}>
      <div>
        {eyebrow && <p className="eyebrow mb-1">{eyebrow}</p>}
        <h2 className="heading-serif text-2xl text-plum sm:text-[26px]">{title}</h2>
      </div>
      {action}
    </div>
  );
}