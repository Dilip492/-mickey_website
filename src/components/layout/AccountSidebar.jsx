import { NavLink, Link } from "react-router-dom";
import {
  Home, ShoppingBag, Heart, Star, Gift, CreditCard,
  Calendar, Tag, User, Settings as Cog, LogOut,
} from "lucide-react";

export const NAV_ITEMS = [
  { to: "/my-mickeys",            label: "Dashboard",  icon: Home,        end: true },
  { to: "/my-mickeys/orders",     label: "Orders",     icon: ShoppingBag },
  { to: "/my-mickeys/favorites",  label: "Favorites",  icon: Heart },
  { to: "/my-mickeys/loyalty",    label: "Loyalty",    icon: Star },
  { to: "/my-mickeys/rewards",    label: "Rewards",    icon: Gift },
  { to: "/my-mickeys/gift-cards", label: "Gift Cards", icon: CreditCard },
  { to: "/my-mickeys/events",     label: "Events",     icon: Calendar },
  { to: "/my-mickeys/offers",     label: "Offers",     icon: Tag },
  { to: "/my-mickeys/profile",    label: "Profile",    icon: User },
  { to: "/my-mickeys/settings",   label: "Settings",   icon: Cog },
];

export default function AccountSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-24 overflow-hidden rounded-3xl bg-roast text-cream-100 shadow-[0_20px_50px_-20px_rgba(42,20,13,0.5)]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-terracotta/40 blur-[60px]" />

        {/* Terracotta top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-terracotta via-mellow to-copper" />

        <div className="relative p-5">
          <div className="mb-5 flex items-center gap-2 px-3 pt-2">
            <span className="font-curved text-xl text-mellow">M</span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream-100/60">
              My Mickey's
            </p>
          </div>

          <nav className="space-y-0.5">
            {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to} to={to} end={end}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-terracotta text-cream-50 shadow-[0_8px_20px_-8px_rgba(179,71,34,0.7)]"
                      : "text-cream-100/75 hover:bg-cream-100/10 hover:text-cream-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`h-4 w-4 transition-transform ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                      strokeWidth={2}
                    />
                    <span className="flex-1">{label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-mellow shadow-[0_0_8px_rgba(244,176,78,0.8)]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="divider-warm my-4 opacity-40" />

          <Link
            to="/login"
            className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-cream-100/75 transition hover:bg-cream-100/10 hover:text-cream-50"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </Link>
        </div>
      </div>
    </aside>
  );
}