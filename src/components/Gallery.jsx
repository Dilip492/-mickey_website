import { motion } from 'framer-motion';
import { ArrowUpRight, Camera, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../data/gallery';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Gallery() {
  // Grab first 7 images for an asymmetric editorial layout
  const images = galleryImages.slice(0,4);
  const [hero, ...rest] = images;

  return (
    <section className="relative py-24 lg:py-32 bg-cream-50 overflow-hidden">
      {/* Decorative background text */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-6 left-1/2 -translate-x-1/2 font-display font-bold text-[22vw] leading-none tracking-tight text-roast/[0.03] whitespace-nowrap"
      >
        GALLERY
      </div>

      {/* Soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(200,86,45,0.35) 0%, rgba(200,86,45,0) 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(42,20,13,0.35) 0%, rgba(42,20,13,0) 70%)',
        }}
      />

      <div className="relative container mx-auto px-6 sm:px-10 lg:px-16">
        {/* ============ HEADER ============ */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-px bg-terracotta-light" />
              <span className="font-display font-bold text-xs tracking-[0.3em] uppercase text-terracotta-light">
                Moments
              </span>
              <Sparkles className="w-3.5 h-3.5 text-terracotta-light" strokeWidth={2} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-roast"
            >
              A visual
              <br />
              <em className="italic text-terracotta-light">love letter</em>
              <br />
              to coffee.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-roast/70 leading-relaxed max-w-md"
            >
              Quiet mornings, bold extractions, and the small rituals in between — captured one frame at a time.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="shrink-0"
          >
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border-2 border-roast text-roast font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-roast hover:text-cream-50 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Camera className="w-4 h-4" strokeWidth={2} />
              View Full Gallery
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </Link>
          </motion.div>
        </div>

        {/* ============ EDITORIAL GRID ============ */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {/* Hero image — spans 2 cols × 2 rows on md+ */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-2xl col-span-2 md:row-span-2 aspect-square md:aspect-auto md:min-h-[500px]"
          >
            <img
              src={hero.src}
              alt={hero.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-roast/80 via-roast/20 to-transparent" />

            {/* Category pill */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-display font-bold uppercase tracking-widest text-cream-50 bg-terracotta-light/90 backdrop-blur px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-cream-50 animate-pulse" />
                Featured
              </span>
            </div>

            {/* Text overlay */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-xs tracking-[0.25em] uppercase text-cream-200/80 mb-1">
                  {hero.category}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-cream-50 leading-tight">
                  {hero.alt}
                </h3>
              </div>
              <div className="shrink-0 w-10 h-10 rounded-full border border-cream-50/40 flex items-center justify-center text-cream-50 backdrop-blur-sm transition-all duration-500 group-hover:bg-cream-50 group-hover:text-roast group-hover:border-cream-50">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </div>
            </div>
          </motion.div>

          {/* Remaining 6 images in an asymmetric mosaic */}
          {rest.map((img, i) => {
            // Alternate tall / normal positions for rhythm
            const tall = i === 1 || i === 4;
            return (
              <motion.div
                key={i}
                variants={item}
                className={`group relative overflow-hidden rounded-2xl ${
                  tall ? 'md:row-span-2' : ''
                } aspect-square md:aspect-auto md:min-h-[240px]`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-roast/85 via-roast/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner index */}
                <span className="absolute top-3 right-3 text-[10px] font-display font-bold tracking-widest text-cream-50/0 group-hover:text-cream-50/80 transition-colors duration-500">
                  0{i + 2}
                </span>

                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[10px] font-display font-bold uppercase tracking-widest text-cream-200/80 mb-0.5">
                    {img.category}
                  </p>
                  <p className="font-serif text-sm sm:text-base font-bold text-cream-50 leading-tight line-clamp-1">
                    {img.alt}
                  </p>
                </div>

                {/* Dashed border accent on hover */}
                <span className="pointer-events-none absolute inset-2 rounded-xl border border-dashed border-cream-50/0 group-hover:border-cream-50/30 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ============ FOOTER STRIP ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-roast/10 pt-8"
        >
          <div className="flex items-center gap-3 text-roast/60">
            <Camera className="w-4 h-4" strokeWidth={1.8} />
            <span className="text-xs font-display font-bold uppercase tracking-[0.25em]">
              {galleryImages.length} moments · updated weekly
            </span>
          </div>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-roast hover:text-terracotta-light transition-colors"
          >
            Explore the archive
            <ArrowUpRight
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}