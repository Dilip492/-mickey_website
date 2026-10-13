import { NavLink } from "react-router-dom";
import { Home, ShoppingBag, Gift, Heart, User } from "lucide-react";

const MOBILE_NAV = [
  { to: "/my-mickeys",           label: "Home",      icon: Home,        end: true },
  { to: "/my-mickeys/orders",    label: "Orders",    icon: ShoppingBag },
  { to: "/my-mickeys/rewards",   label: "Rewards",   icon: Gift },
  { to: "/my-mickeys/favorites", label: "Favorites", icon: Heart },
  { to: "/my-mickeys/profile",   label: "Account",   icon: User },
];

export default function MobileAccountNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-cream-200/60 bg-cream-50/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around px-2">
        {MOBILE_NAV.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to} to={to} end={end}
            className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition"
          >
            {({ isActive }) => (
              <>
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-terracotta text-cream-50 shadow-[0_8px_20px_-8px_rgba(179,71,34,0.7)]"
                      : "text-roast/50"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={isActive ? 2.2 : 1.9} />
                </span>
                <span className={isActive ? "font-semibold text-terracotta" : "text-roast/50"}>
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}