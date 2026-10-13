import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryGrid({ items }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            onClick={() => setActive(item)}
            className={`group relative overflow-hidden rounded-2xl bg-cream-100 text-left shadow-[0_8px_24px_-12px_rgba(42,20,13,0.25)] transition-shadow duration-300 hover:shadow-[0_16px_40px_-16px_rgba(42,20,13,0.4)] ${
              item.tall ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
            }`}
          >
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-roast/80 via-roast/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Caption on hover */}
            <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-mellow">
                {item.category}
              </p>
              <p className="mt-0.5 font-serif text-sm font-medium leading-snug text-cream-50">
                {item.caption}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-roast/95 backdrop-blur-xl" />

            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-cream-100/10 text-cream-50 backdrop-blur-md transition hover:bg-cream-100/20"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.figure
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28 }}
              className="relative z-10 max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-3xl shadow-[0_32px_80px_-24px_rgba(0,0,0,0.7)]">
                <img
                  src={active.src}
                  alt={active.caption}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>
              <figcaption className="mt-5 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-mellow">
                  {active.category}
                </p>
                <p className="mt-2 font-serif text-lg text-cream-50">
                  {active.caption}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}