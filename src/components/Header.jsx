
import { useState } from "react";
import logo from "../assets/Mickey's_PrimaryLogo.svg";

import { Link } from "react-router-dom";
import { Menu, X , ArrowRight, UserRound } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            {/* Top Navigation Bar */}
            <header
                className="relative z-30 header-responsive"
                data-purpose="site-navigation"
            >
                {/* Logo */}
                <Link
                    aria-label="Mickey's Cafe home"
                    className="inline-flex items-center hover:opacity-95 transition-opacity"
                    to="/"
                >
                    <img
                        className="logo-img"
                        src={logo}
                        alt="Mickey's Cafe & Lounge"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav
                    aria-label="Main Navigation"
                    className="hidden md:flex items-center gap-4 sm:gap-8"
                >
                    <div className="nav-links">
                        <Link
                            className="text-[15px] font-semibold text-roast/90 hover:text-terracotta transition-colors tracking-normal"
                            to="/menu"
                        >
                            Menu
                        </Link>

                        <Link
                            className="text-[15px] font-semibold text-roast/90 hover:text-terracotta transition-colors tracking-normal"
                            to="/eventspage"
                        >
                            Events
                        </Link>

                        <Link
                            className="text-[15px] font-semibold text-roast/90 hover:text-terracotta transition-colors tracking-normal"
                            to="/gallerypage"
                        >
                            Gallery
                        </Link>

                        <Link
                            className="text-[15px] font-semibold text-roast/90 hover:text-terracotta transition-colors tracking-normal"
                            to="/ourstory"
                        >
                            Our Story
                        </Link>
                    </div>

                    <Link className="shop-btn" to="/login">
                        Sign in
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden flex items-center justify-center w-11 h-11 text-roast"
                    aria-label="Open menu"
                >
                    <Menu size={27} strokeWidth={1.8} />
                </button>
            </header>

            {/* Mobile Overlay */}
            <div
                onClick={closeMenu}
                className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${isMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
            />

            {/* Mobile Right Sidebar */}

            {/* Mobile Sidebar Backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-roast/40 backdrop-blur-[3px] transition-opacity duration-300 md:hidden ${isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* Mobile Right Sidebar */}
            <aside
                id="mobile-sidebar"
                aria-label="Mobile navigation menu"
                aria-hidden={!isMenuOpen}
                className={`fixed top-0 right-0 z-50 flex h-dvh w-[86%] max-w-[360px] flex-col overflow-y-auto bg-cream-50 shadow-2xl transition-transform duration-300 ease-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between border-b border-roast/10 px-5 py-5">
                    <Link to="/" onClick={closeMenu} aria-label="Mickey's home">
                        <img
                            src={logo}
                            alt="Mickey's Café & Lounge"
                            className="w-[118px] object-contain"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={closeMenu}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-roast/10 text-roast transition-colors duration-200 hover:bg-cream-200"
                        aria-label="Close menu"
                        aria-controls="mobile-sidebar"
                    >
                        <X size={21} strokeWidth={1.7} />
                    </button>
                </div>

                {/* Welcome / Brand Section */}
                {/* <div className="px-6 pb-5 pt-7">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-terracotta">
                        MICKEY'S CAFÉ & LOUNGE
                    </p>

                    <h2 className="font-serif text-[27px] leading-tight text-roast">
                        Your place,
                        <br />
                        <span className="italic text-terracotta">
                            morning to moonlight.
                        </span>
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-roast/65">
                        Good food, great company, and moments worth sharing.
                    </p>
                </div> */}

                {/* Navigation */}
                <nav
                    aria-label="Mobile Navigation"
                    className="px-5"
                >
                    <div className="flex flex-col">
                        {[
                            { label: "Menu", path: "/menu" },
                            { label: "Events", path: "/eventspage" },
                            { label: "Gallery", path: "/gallerypage" },
                            { label: "Our Story", path: "/ourstory" },
                        ].map((item, index) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeMenu}
                                className="group flex items-center justify-between border-b border-roast/10 py-[17px] text-[16px] font-medium text-roast transition-colors duration-200 hover:text-terracotta"
                            >
                                <span>{item.label}</span>

                                <ArrowRight
                                    size={17}
                                    strokeWidth={1.6}
                                    className="text-roast/35 transition-all duration-200 group-hover:translate-x-1 group-hover:text-terracotta"
                                />
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Account Section */}
                <div className="mt-10 px-5 pb-7 ">
                    <div className="rounded-2xl border border-roast/10 bg-cream-100 p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-terracotta">
                                <UserRound size={19} strokeWidth={1.7} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-roast">
                                    Your Mickey's account
                                </p>
                                <p className="mt-1 text-xs leading-5 text-roast/60">
                                    Sign in to explore your account and rewards.
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-terracotta-dark"
                        >
                            Sign in
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* <p className="mt-5 text-center text-[10px] tracking-[0.12em] text-roast/45">
                        GOOD FOOD. GREAT COMPANY.
                    </p> */}
                </div>
            </aside>

        </div>
    );
};

export default Header;

