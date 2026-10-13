import { Link } from "react-router-dom";
import { Coffee, Gift, Heart, CreditCard, ArrowRight } from "lucide-react";
import LoyaltyCard from "../../components/account/LoyaltyCard.jsx";
import QuickAction from "../../components/account/QuickAction.jsx";
import OrderCard from "../../components/account/OrderCard.jsx";
import FavoriteItemCard from "../../components/account/FavoriteItemCard.jsx";
import RewardCard from "../../components/account/RewardCard.jsx";
import OfferCard from "../../components/account/OfferCard.jsx";
import EventCard from "../../components/account/EventCard.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import {
  mockCustomer, mockLoyalty, mockOrders, mockFavorites,
  mockRewards, mockEvents, mockOffers,
} from "../../data/mockdata.js";
import { greetingForHour } from "../../lib/utils.js";

function ViewAll({ to }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta transition-all hover:gap-2.5"
    >
      View all
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}

export default function Dashboard() {
  const greet = greetingForHour();

  return (
    <div className="space-y-12">
      {/* Hero header */}
      <header className="relative">
        <p className="eyebrow flex items-center gap-2">
          <span className="inline-block h-px w-6 bg-terracotta/50" />
          {greet}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-roast sm:text-5xl lg:text-[56px]">
          Welcome back,{" "}
          <span className="italic text-terracotta">{mockCustomer.firstName}</span>
        </h1>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-roast/60">
          Your next coffee is a little closer.
        </p>
      </header>

      {/* Loyalty hero */}
      <LoyaltyCard loyalty={mockLoyalty} />

      {/* Quick actions */}
      <section>
        <SectionHeading eyebrow="Quick Actions" title="What would you like today?" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <QuickAction icon={Coffee}     title="Order Again" text="Your favourites, ready in a tap."  cta="Order Now"      to="/my-mickeys/orders" />
          <QuickAction icon={Gift}       title="Rewards"     text="You have 2 rewards available."    cta="View Rewards"   to="/my-mickeys/rewards" />
          <QuickAction icon={Heart}      title="Favorites"   text="Your favourite Mickey's picks."   cta="View Favorites" to="/my-mickeys/favorites" />
          <QuickAction icon={CreditCard} title="Gift Cards"  text="Check your gift card balances."   cta="View Cards"     to="/my-mickeys/gift-cards" />
        </div>
      </section>

      {/* Recent order */}
      <section>
        <SectionHeading
          eyebrow="Recent Order"
          title="Last time at Mickey's"
          action={<ViewAll to="/my-mickeys/orders" />}
        />
        <OrderCard order={mockOrders[0]} />
      </section>

      {/* Favorites */}
      <section>
        <SectionHeading
          eyebrow="Your Favourites"
          title="Picks you'll love again"
          action={<ViewAll to="/my-mickeys/favorites" />}
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {mockFavorites.slice(0, 4).map((f) => <FavoriteItemCard key={f.id} item={f} />)}
        </div>
      </section>

      {/* Rewards */}
      <section>
        <SectionHeading
          eyebrow="Your Rewards"
          title="Ready when you are"
          action={<ViewAll to="/my-mickeys/rewards" />}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockRewards.slice(0, 3).map((r) => (
            <RewardCard key={r.id} reward={r} userPoints={mockLoyalty.points} />
          ))}
        </div>
      </section>

      {/* Events */}
      <section>
        <SectionHeading
          eyebrow="What's Happening"
          title="At Mickey's this week"
          action={<ViewAll to="/my-mickeys/events" />}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {mockEvents.slice(0, 2).map((e) => <EventCard key={e.id} event={e} />)}
        </div>
      </section>

      {/* Offers */}
      <section>
        <SectionHeading
          eyebrow="Just For You"
          title="Personalized offers"
          action={<ViewAll to="/my-mickeys/offers" />}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {mockOffers.slice(0, 2).map((o) => <OfferCard key={o.id} offer={o} />)}
        </div>
      </section>
    </div>
  );
}