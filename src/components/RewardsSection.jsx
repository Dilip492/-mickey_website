import { Sparkles, ArrowRight } from "lucide-react";

export default function RewardsSection() {
  return (
    <section className="bg-cream-100 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
        {/* LEFT — copy */}
        <div>
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
            My Mickey's Rewards
          </p>

          <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Good things
            <br />
            <span className="italic text-terracotta">come back around.</span>
          </h2>

          <p className="mt-6 max-w-lg font-sans text-base leading-7 text-roast/60 md:text-lg">
            A more personal way to enjoy your favourites. Discover rewards
            and keep track of your eligible loyalty activity.
          </p>

          <div className="mt-8">
            <button className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-sans text-sm font-bold text-white transition hover:bg-terracotta-light focus:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/25">
              Explore My Mickey's
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        {/* RIGHT — reward card mock */}
        <div className="relative">
          {/* soft decorative blob */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-terracotta/5 blur-2xl"
          />

          <div className="relative rounded-3xl border border-roast/10 bg-cream-50 p-7 shadow-[0_20px_50px_-25px_rgba(44,30,20,0.25)] md:p-9">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-roast/50">
                  Your rewards
                </p>
                <p className="mt-1 font-serif text-2xl leading-tight">
                  Welcome back
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                <Sparkles size={18} />
              </div>
            </div>

            {/* Placeholder points block */}
            <div className="mt-7 rounded-2xl border border-dashed border-roast/15 bg-cream-100 p-6 text-center">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-roast/45">
                Loyalty activity
              </p>
              <p className="mt-2 font-sans text-sm leading-6 text-roast/55">
                Your points, rewards and activity will appear here once
                synced with Square.
              </p>
            </div>

            {/* Progress-ish row (purely decorative placeholder) */}
            <div className="mt-6">
              <div className="flex items-center justify-between font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-roast/45">
                <span>Next reward</span>
                <span>—</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-cream-200">
                <div className="h-full w-0 rounded-full bg-terracotta" />
              </div>
              <p className="mt-2 font-sans text-xs text-roast/45">
                Progress will show once activity is available.
              </p>
            </div>

            <p className="mt-7 border-t border-roast/10 pt-5 font-sans text-[11px] leading-5 text-roast/45">
              Points, rewards and customer activity are managed through
              Square. Sign in to view your live balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}