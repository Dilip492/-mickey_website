import { motion } from 'framer-motion';
import { Camera, ArrowRight, Heart } from 'lucide-react';
import { instagramImages, galleryImages } from '../data/gallery';
import { site } from '../data/site';

// Inline Instagram logo — always available, no dependency on lucide-react
const InstagramIcon = ({ className = 'w-5 h-5', strokeWidth = 1.75 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

export default function InstagramSection() {
    const images = [...instagramImages, galleryImages[0].src];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section className="relative py-20 lg:py-28 bg-cream-50 overflow-hidden px-6">
            {/* Decorative gradient blobs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-copper-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-plum-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container-mx relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center mb-14"
                >
                    {/* Eyebrow with lines */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-copper-400/60" />
                        <p className="eyebrow text-copper-400">Follow Along</p>
                        <span className="h-px w-8 bg-copper-400/60" />
                    </div>

                    {/* Instagram handle with icon badge */}
                    <div className="relative inline-flex items-center gap-3 mb-3">

                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum-500 tracking-tight">
                            {site.instagram}
                        </h2>
                    </div>

                    <p className="max-w-xl text-plum-500/70 font-sans text-base sm:text-lg mt-2">
                        Daily pours, warm plates, and quiet moments — captured at Mickey's.
                    </p>


                </motion.div>

                {/* Image Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3"
                >
                    {images.slice(0, 6).map((src, i) => (
                        <motion.a
                            key={i}
                            variants={itemVariants}
                            href={site.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="group relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-xl hover:shadow-plum-500/20 transition-shadow duration-500"
                        >
                            <img
                                src={src}
                                alt={`Instagram post from Mickey's Café #${i + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-plum-500/80 via-plum-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Hover content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream-50/95 backdrop-blur-sm text-plum-500 shadow-lg">
                                    <InstagramIcon className="w-5 h-5" strokeWidth={1.75} />
                                </span>
                                <span className="flex items-center gap-1 text-cream-50 text-xs font-sans font-semibold uppercase tracking-wider">
                                    <Heart className="w-3 h-3 fill-cream-50" strokeWidth={0} />
                                    View Post
                                </span>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-cream-50/0 group-hover:bg-cream-50/20 backdrop-blur-sm border border-cream-50/0 group-hover:border-cream-50/40 transition-all duration-500" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-xs sm:text-sm text-plum-500/50 font-sans mt-8 tracking-wide"
                >
                    Tag us <span className="text-copper-400 font-semibold">{site.instagram}</span> to be featured
                </motion.p>
            </div>
        </section>
    );
}