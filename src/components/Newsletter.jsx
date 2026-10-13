
import { ArrowRight, Mail } from "lucide-react";

function Newsletter() {
    return (
        <section className="relative overflow-hidden bg-cream-100 px-6 py-20 md:px-12 md:py-28">
            <div className="mx-auto max-w-7xl">

                <div className="relative overflow-hidden rounded-[2rem] bg-roast px-6 py-14 md:px-14 md:py-20">

                    {/* Decorative circles */}
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-terracotta/30" />
                    <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-terracotta/20" />

                    {/* Decorative small circle */}
                    <div className="absolute right-24 top-20 h-4 w-4 rounded-full bg-terracotta-light" />

                    <div className="relative z-10 mx-auto max-w-4xl text-center">

                        {/* Eyebrow */}
                        <div className="mb-5 flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-terracotta-light" />

                            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-terracotta-light">
                                Stay in the loop
                            </span>

                            <span className="h-px w-8 bg-terracotta-light" />
                        </div>


                        {/* Heading */}
                        <h2 className="font-serif text-4xl leading-tight text-cream-50 md:text-6xl">
                            A little taste of
                            <br />

                            <span className="italic text-terracotta-light">
                                Mickey's, in your inbox.
                            </span>
                        </h2>


                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-7 text-cream-200 md:text-base">
                            Be the first to know about new menu creations, seasonal
                            favourites, special events, live nights and everything
                            happening at Mickey's Café & Lounge.
                        </p>


                        {/* Newsletter Form */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
                        >

                            <div className="relative flex-1">

                                <Mail
                                    size={18}
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-roast/40"
                                />

                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    required
                                    className="
                    h-14
                    w-full
                    rounded-full
                    border
                    border-cream-50/10
                    bg-cream-50
                    pl-12
                    pr-5
                    font-sans
                    text-sm
                    text-roast
                    outline-none
                    placeholder:text-roast/40
                    focus:border-terracotta
                  "
                                />

                            </div>


                            <button
                                type="submit"
                                className="
                  group
                  flex
                  h-14
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-terracotta
                  px-7
                  font-sans
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-terracotta-light
                "
                            >
                                Subscribe

                                <ArrowRight
                                    size={17}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </button>

                        </form>


                        {/* Privacy */}
                        <p className="mt-5 font-sans text-[11px] text-cream-200/50">
                            No spam. Just good food, good coffee and good moments.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Newsletter;

