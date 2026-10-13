import { motion } from "framer-motion";
import {
    ArrowRight,
    Coffee,
    Heart,
    Users,
    Music,
    Sparkles,
    MapPin,
    Star,
    Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const values = [
    {
        icon: Coffee,
        title: "Locally Roasted",
        desc: "We partner with Ontario roasters to source beans with character and conscience.",
    },
    {
        icon: Heart,
        title: "Made With Care",
        desc: "Every plate, every cup, every cocktail is made to order. No shortcuts.",
    },
    {
        icon: Users,
        title: "Community First",
        desc: "We host local musicians, showcase regional artists, and support our neighbourhood.",
    },
    {
        icon: Music,
        title: "Always Something",
        desc: "Live music, workshops, and seasonal events keep the room alive all year.",
    },
];

const timeline = [
    {
        year: "2019",
        title: "The first pour",
        desc: "Mickey's opens its doors on King Street East with a second-hand espresso machine and a hand-written menu.",
    },
    {
        year: "2020",
        title: "Through the quiet",
        desc: "We pivoted to takeaway, built a patio out of pallets, and learned that community shows up when it matters.",
    },
    {
        year: "2021",
        title: "The lounge opens",
        desc: "A back room becomes an intimate lounge — velvet booths, low light, and a cocktail list worth staying for.",
    },
    {
        year: "2022",
        title: "Live music nights",
        desc: "Local musicians take the corner stage every Friday. The room has never been the same since.",
    },
    {
        year: "2024",
        title: "Brunch & beyond",
        desc: "Our Sunday brunch becomes a neighbourhood ritual — lineups, laughter, and the smell of fresh sourdough.",
    },
    {
        year: "Today",
        title: "Still pouring",
        desc: "A café, a lounge, a gathering place. Still small, still handcrafted, still grateful you're here.",
    },
];

/* ─────────────────────────────────────────────
   MAIN
───────────────────────────────────────────── */
export default function OurStory() {
    return (
        <>
            <Header />

            <main className="bg-cream-50 text-roast">
                {/* ═══════════════════════════════════════
            HERO — split editorial
        ═══════════════════════════════════════ */}
                <section className="relative overflow-hidden bg-roast px-6 pt-24 pb-28 md:px-12 md:pt-32 md:pb-36">
                    {/* Curved SVG motif */}
                    <svg
                        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
                        viewBox="0 0 1440 600"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M-40 180 C220 180 340 380 430 450 C520 530 680 560 880 490 C1060 420 1200 480 1460 380"
                            fill="none"
                            stroke="#c8562d"
                            strokeWidth="3"
                        />
                        <path
                            d="M-20 240 C240 240 370 470 470 550 C560 620 740 650 920 520 C1100 430 1250 490 1480 400"
                            fill="none"
                            stroke="#b34722"
                            strokeWidth="2"
                        />
                    </svg>

                    {/* Dotted texture */}
                    <div
                        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.15]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, #F8F1E9 1px, transparent 1px)",
                            backgroundSize: "22px 22px",
                        }}
                    />

                    <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
                        {/* Left: headline */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-terracotta-light" />
                                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-terracotta-light">
                                        Our Story · Est. 2019
                                    </p>
                                </div>

                                <h1 className="font-serif text-5xl leading-[0.95] text-cream-50 md:text-7xl lg:text-8xl">
                                    A little café
                                    <br />
                                    <span className="italic text-terracotta-light">
                                        with a big dream.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-xl font-sans text-base leading-7 text-cream-200/80 md:text-lg">
                                    From a corner coffee shop to Kitchener's favourite lounge —
                                    this is the story of how a second-hand espresso machine
                                    turned into a second home.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-4">
                                    <a
                                        href="#journey"
                                        className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-sans text-sm font-semibold text-white transition hover:bg-terracotta-light"
                                    >
                                        Read the journey
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </a>
                                    <Link
                                        to="/menu"
                                        className="inline-flex items-center gap-2 rounded-full border border-cream-200/30 px-7 py-3.5 font-sans text-sm font-semibold text-cream-50 transition hover:bg-cream-50 hover:text-roast"
                                    >
                                        View the Menu
                                    </Link>
                                </div>

                                {/* Stats */}
                                <div className="mt-12 flex flex-wrap items-center gap-8">
                                    {[
                                        { k: "5+", v: "Years brewing" },
                                        { k: "40k+", v: "Cups poured" },
                                        { k: "100%", v: "Made fresh" },
                                    ].map((s) => (
                                        <div key={s.v} className="flex items-baseline gap-2">
                                            <span className="font-display text-3xl text-terracotta-light">
                                                {s.k}
                                            </span>
                                            <span className="font-sans text-xs uppercase tracking-widest text-cream-200/60">
                                                {s.v}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: image collage */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] border border-cream-200/10 shadow-2xl">
                                    <img
                                        src="https://images.pexels.com/photos/39047893/pexels-photo-39047893.jpeg?auto=compress&cs=tinysrgb&h=800&w=800"
                                        alt="Mickey's Café interior"
                                        loading="eager"
                                        className="h-[420px] w-full object-cover md:h-[520px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-roast/60 via-transparent to-transparent" />
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -bottom-5 -left-5 hidden rotate-[-6deg] rounded-2xl bg-terracotta px-5 py-3 shadow-xl md:block">
                                    <span className="font-curved text-lg text-cream-50">
                                        Since 2019
                                    </span>
                                </div>

                                {/* Floating coffee icon */}
                                <div className="absolute -right-4 -top-4 hidden h-16 w-16 items-center justify-center rounded-full bg-cream-50 shadow-xl md:flex">
                                    <Coffee className="h-7 w-7 text-terracotta" strokeWidth={1.5} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
            OPENING NARRATIVE — split with quote
        ═══════════════════════════════════════ */}
                <section className="bg-cream-100 px-6 py-20 md:px-12 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="relative"
                            >
                                <img
                                    src="https://images.pexels.com/photos/33454120/pexels-photo-33454120.jpeg?auto=compress&cs=tinysrgb&h=900&w=800"
                                    alt="Mickey's Café rustic interior"
                                    loading="lazy"
                                    className="h-[500px] w-full rounded-3xl object-cover"
                                />
                                {/* Decorative frame */}
                                <div className="absolute -bottom-4 -right-4 hidden h-40 w-40 rounded-3xl border-2 border-terracotta/30 lg:block" />
                                {/* Small accent image */}
                                <div className="absolute -left-6 top-8 hidden h-32 w-32 overflow-hidden rounded-2xl border-4 border-cream-100 shadow-xl lg:block">
                                    <img
                                        src="https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                                        alt="Coffee being poured"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Text */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <span className="font-curved text-2xl text-terracotta">
                                    How it began
                                </span>

                                <h2 className="mt-3 font-serif text-4xl leading-[1.05] md:text-5xl">
                                    It started with a coffee machine
                                    <br />
                                    <span className="italic">and a dream.</span>
                                </h2>

                                <div className="mt-6 space-y-4 font-sans leading-7 text-roast/70">
                                    <p>
                                        In 2019, Mickey's opened its doors on King Street East with
                                        a simple idea: serve great coffee, make people feel at home,
                                        and let the rest take care of itself. The first few months
                                        were quiet — just a handful of regulars, a playlist, and a
                                        lot of hope.
                                    </p>
                                    <p>
                                        Word spread. The pastries sold out. The cocktails became
                                        the talk of the neighbourhood. By year two, we'd added a
                                        lounge, a live music night, and a brunch menu that draws
                                        lineups on Sunday mornings.
                                    </p>
                                    <p>
                                        Today, Mickey's is more than a café — it's a gathering
                                        place. A spot where first dates become anniversaries, where
                                        freelancers find their corner, and where the community
                                        comes together over something warm.
                                    </p>
                                </div>

                                {/* Inline quote */}
                                <div className="mt-8 border-l-2 border-terracotta pl-5">
                                    <Quote
                                        className="mb-2 h-5 w-5 text-terracotta/60"
                                        strokeWidth={1.5}
                                    />
                                    <p className="font-serif text-lg italic text-roast/80">
                                        "We never set out to build a brand — we set out to build a
                                        room people didn't want to leave."
                                    </p>
                                    <p className="mt-2 font-sans text-xs uppercase tracking-widest text-roast/50">
                                        — Mickey, Founder
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

        
                <section className="bg-cream-50 px-6 py-20 md:px-12 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 text-center">
                            <span className="font-curved text-2xl text-terracotta">
                                What we believe
                            </span>
                            <h2 className="mt-3 font-serif text-4xl leading-[1.05] md:text-5xl">
                                The things that
                                <br />
                                <span className="italic">matter to us.</span>
                            </h2>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {values.map((v, i) => (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="group rounded-2xl border border-roast/10 bg-cream-100 p-7 text-center transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg"
                                >
                                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10 transition group-hover:bg-terracotta">
                                        <v.icon
                                            className="h-6 w-6 text-terracotta transition group-hover:text-cream-50"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <h3 className="mb-2 font-serif text-xl text-roast">
                                        {v.title}
                                    </h3>
                                    <p className="font-sans text-sm leading-6 text-roast/60">
                                        {v.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
            GALLERY STRIP
        ═══════════════════════════════════════ */}
                <section className="bg-cream-100 px-6 py-20 md:px-12 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                            <div>
                                <span className="font-curved text-2xl text-terracotta">
                                    A look inside
                                </span>
                                <h2 className="mt-2 font-serif text-4xl md:text-5xl">
                                    Moments from the room.
                                </h2>
                            </div>
                            <Link
                                to="/gallery"
                                className="group inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider text-terracotta"
                            >
                                See full gallery
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {[
                                "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&h=500&w=500",
                                "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&h=500&w=500",
                                "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=500&w=500",
                                "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&h=500&w=500",
                            ].map((src, i) => (
                                <motion.div
                                    key={src}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className={`group relative overflow-hidden rounded-2xl ${i === 0 || i === 3 ? "aspect-square" : "aspect-square md:aspect-[4/5]"
                                        }`}
                                >
                                    <img
                                        src={src}
                                        alt={`Café moment ${i + 1}`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-roast/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════
            CTA
        ═══════════════════════════════════════ */}
                <section className="relative overflow-hidden bg-roast px-6 py-24 text-center md:px-12 md:py-32">
                    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl" />
                    <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl" />

                    <div className="relative mx-auto max-w-4xl">
                        <span className="font-curved text-2xl text-terracotta-light">
                            Come be part of the story
                        </span>
                        <h2 className="mx-auto mt-4 font-serif text-4xl leading-[1.05] text-cream-50 md:text-6xl">
                            Pull up a chair.
                            <br />
                            <span className="italic text-terracotta-light">
                                We saved you a spot.
                            </span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl font-sans leading-7 text-cream-200/70">
                            Whether it's your first visit or your five hundredth, there's
                            always a warm seat and a fresh cup with your name on it.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/reservations"
                                className="rounded-full bg-terracotta px-8 py-4 font-sans text-sm font-bold text-white transition hover:bg-terracotta-light"
                            >
                                Make a Reservation
                            </Link>
                            <Link
                                to="/menu"
                                className="rounded-full border border-cream-200/30 px-8 py-4 font-sans text-sm font-bold text-cream-50 transition hover:bg-cream-50 hover:text-roast"
                            >
                                View Menu
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}