import { motion } from 'framer-motion';
import { ArrowRight, Quote, Coffee, Leaf, Flame, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ---------- Motion variants ---------- */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const statContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const statItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ---------- Timeline data ---------- */
const milestones = [
    { year: '2018', title: 'The first roast', text: 'A tiny garage roaster, one drum, and a stubborn idea.' },
    { year: '2020', title: 'First café', text: 'A 40-seat corner shop with a hand-built espresso bar.' },
    { year: '2022', title: 'Direct trade', text: 'Twelve farms across three continents. Named, paid, and proud.' },
    { year: '2025', title: 'Still small', text: 'Bigger roaster, same obsession. Never more than 3 batches a day.' },
];

/* ---------- Stats data ---------- */
const stats = [
    { value: '12+', label: 'Origins', icon: Leaf },
    { value: '8', label: 'Roast Profiles', icon: Flame },
    { value: '100%', label: 'Ethically Sourced', icon: Award },
    { value: '7yrs', label: 'Of Craft', icon: Coffee },
];

export default function OurStory() {
    return (
        <section
            id="our-story"
            className="relative bg-cream-50 py-24 lg:py-32 overflow-hidden"
        >
            {/* --- Decorative background --- */}
            <div
                aria-hidden
                className="pointer-events-none select-none absolute top-10 left-1/2 -translate-x-1/2 font-display font-bold text-[22vw] leading-none tracking-tight text-roast/[0.03] whitespace-nowrap"
            >
                OUR STORY
            </div>

            <div
                aria-hidden
                className="pointer-events-none absolute top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
                style={{
                    background:
                        'radial-gradient(circle, rgba(200,86,45,0.35) 0%, rgba(200,86,45,0) 70%)',
                }}
            />

            <div className="relative container mx-auto px-6 sm:px-10 lg:px-16">
                {/* ================= TOP: Split header + image ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 lg:mb-32">
                    {/* LEFT: Text block */}
                    <div className="lg:col-span-6 lg:sticky lg:top-24">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            custom={0}
                            className="inline-flex items-center gap-2 mb-5"
                        >
                            <span className="w-8 h-px bg-terracotta-light" />
                            <span className="font-display font-bold text-xs tracking-[0.3em] uppercase text-terracotta-light">
                                Since 2018
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            custom={1}
                            className="font-serif font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-roast"
                        >
                            A little more
                            <br />
                            than just{' '}
                            <em className="italic text-terracotta-light relative inline-block">
                                coffee.
                                <svg
                                    aria-hidden
                                    viewBox="0 0 200 12"
                                    className="absolute left-0 -bottom-2 w-full h-3 text-terracotta-light/60"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M2 8 Q 50 2, 100 6 T 198 4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </em>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            custom={2}
                            className="mt-8 text-base sm:text-lg text-roast/75 leading-[1.8] max-w-xl"
                        >
                            Great coffee begins long before the first sip. From carefully
                            sourced beans to thoughtful brewing, every detail is part of the
                            experience. Our journey started with a simple obsession — to craft
                            the perfect cup that brings people together.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            custom={3}
                            className="mt-5 text-base sm:text-lg text-roast/75 leading-[1.8] max-w-xl"
                        >
                            Every bean is hand-selected, roasted in small batches, and brewed
                            with intention. It's not just coffee — it's a ritual, a moment of
                            calm, and a celebration of craft.
                        </motion.p>

                        {/* Signature quote */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            custom={4}
                            className="relative mt-10 pl-6 border-l-2 border-terracotta-light/50"
                        >
                            <Quote
                                className="absolute -left-3 -top-2 w-5 h-5 text-terracotta-light bg-cream-50 p-0.5 rounded-full"
                                strokeWidth={2}
                                fill="currentColor"
                            />
                            <p className="font-serif italic text-lg sm:text-xl text-roast/85 leading-snug">
                                "We don't chase trends. We chase the perfect cup — every
                                single morning."
                            </p>
                            <p className="mt-2 font-display font-bold text-xs uppercase tracking-[0.25em] text-roast/50">
                                — Elena & Marcus, Founders
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-80px' }}
                            custom={5}
                            className="mt-10"
                        >
                            <Link
                                to="/story"
                                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border-2 border-roast text-roast font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-roast hover:text-cream-50 hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Discover our story
                                <ArrowRight
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    strokeWidth={2.5}
                                />
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT: Layered image stack */}
                    <div className="lg:col-span-6 relative">
                        {/* Main portrait image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, rotate: -3 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(42,20,13,0.45)] aspect-[4/5] max-w-[520px] ml-auto"
                        >
                            <img
                                // src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop"
                                src="https://cdna.artstation.com/p/assets/images/images/054/944/206/large/chill-jazz-coffee-4k-cozy-coffee-shop.jpg?1665735454"
                                alt="Barista preparing coffee in artisan café"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
                            />
                            {/* Inner border accent */}
                            <span className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-cream-50/25" />
                        </motion.div>

                        {/* Secondary overlapping image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40, y: 40, rotate: 6 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="absolute -bottom-12 -left-4 sm:left-0 w-[55%] max-w-[260px] rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_-20px_rgba(42,20,13,0.45)] aspect-square hidden sm:block"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop"
                                alt="Roasted coffee beans close-up"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            <span className="pointer-events-none absolute inset-2 rounded-[1.2rem] border border-cream-50/25" />
                        </motion.div>

                        {/* Floating "Since" badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                            className="absolute -top-6 right-4 sm:right-8 lg:right-12 bg-terracotta-light text-cream-50 rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center shadow-xl shadow-terracotta-light/40"
                        >
                            <span className="font-display font-bold text-[10px] tracking-[0.25em] uppercase opacity-90">
                                Est.
                            </span>
                            <span className="font-serif font-extrabold text-2xl sm:text-3xl leading-none mt-0.5">
                                2018
                            </span>
                            <span className="font-display font-bold text-[10px] tracking-[0.25em] uppercase opacity-90 mt-0.5">
                                Portland
                            </span>
                        </motion.div>

                        {/* Small dashed orbit accent */}
                        <span
                            aria-hidden
                            className="absolute -bottom-8 right-6 w-24 h-24 rounded-full border border-dashed border-roast/20 hidden lg:block"
                        />
                    </div>
                </div>

                {/* ================= STATS RIBBON ================= */}
                <motion.div
                    variants={statContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-24 lg:mb-32"
                >
                    {stats.map(({ value, label, icon: Icon }, i) => (
                        <motion.div
                            key={label}
                            variants={statItem}
                            className="group relative bg-white/60 backdrop-blur-sm border border-roast/10 rounded-2xl p-6 lg:p-7 transition-all duration-500 hover:bg-white hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(42,20,13,0.3)]"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <Icon
                                    className="w-5 h-5 text-terracotta-light transition-transform duration-500 group-hover:rotate-12"
                                    strokeWidth={2}
                                />
                                <span className="font-display font-bold text-[10px] tracking-[0.25em] uppercase text-roast/30">
                                    0{i + 1}
                                </span>
                            </div>
                            <div className="font-serif font-extrabold text-3xl lg:text-4xl text-terracotta-light leading-none mb-2">
                                {value}
                            </div>
                            <div className="font-display font-bold text-xs tracking-[0.2em] uppercase text-roast/60">
                                {label}
                            </div>
                            <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-terracotta-light/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* ================= TIMELINE ================= */}
                <div className="relative">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-px bg-terracotta-light" />
                            <span className="font-display font-bold text-xs tracking-[0.3em] uppercase text-terracotta-light">
                                The Journey
                            </span>
                            <span className="w-8 h-px bg-terracotta-light" />
                        </div>
                        <h3 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-[-0.03em] text-roast">
                            Milestones, <em className="italic text-terracotta-light">not memories.</em>
                        </h3>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical line */}
                        <span
                            aria-hidden
                            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-terracotta-light/60 via-roast/20 to-transparent"
                        />

                        <div className="space-y-10 md:space-y-16">
                            {milestones.map((m, i) => {
                                const isLeft = i % 2 === 0;
                                return (
                                    <motion.div
                                        key={m.year}
                                        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center ${isLeft ? '' : 'md:[direction:rtl]'
                                            }`}
                                    >
                                        {/* Dot */}
                                        <span className="absolute left-4 md:left-1/2 top-2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-terracotta-light ring-4 ring-cream-50 shadow-md z-10" />

                                        {/* Content card */}
                                        <div
                                            className={`md:[direction:ltr] ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                                                }`}
                                        >
                                            <div className="inline-flex flex-col">
                                                <span className="font-display font-bold text-sm tracking-[0.3em] uppercase text-terracotta-light mb-2">
                                                    {m.year}
                                                </span>
                                                <h4 className="font-serif font-bold text-2xl sm:text-3xl text-roast mb-2 leading-tight">
                                                    {m.title}
                                                </h4>
                                                <p className="text-roast/70 leading-relaxed max-w-sm md:max-w-none">
                                                    {m.text}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Opposite empty column for grid balance */}
                                        <div aria-hidden className="hidden md:block" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}