import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import FavoriteItemCard from "../../components/account/FavoriteItemCard.jsx";
import EmptyState from "../../components/ui/EmptyState.jsx";
import { mockFavorites } from "../../data/mockdata.js";

export default function Favorites() {
  const [favIds, setFavIds] = useState(mockFavorites.map((f) => f.id));
  const toggle = (id) => setFavIds((s) => s.filter((x) => x !== id));

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Saved for You</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">Your Favourites</h1>
        <p className="mt-2 text-plum/60">The drinks, bites and treats you never want to forget.</p>
      </header>

      {favIds.length === 0 ? (
        <EmptyState
          icon={Heart}
          title="Your favourites are waiting."
          description="Save the Mickey's drinks, bites and treats you never want to forget."
          action={<Link to="/my-mickeys" className="inline-flex min-h-[44px] items-center rounded-full bg-copper px-5 text-sm font-medium text-cream">Explore Menu</Link>}
        />
      ) : (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {mockFavorites
            .filter((f) => favIds.includes(f.id))
            .map((f) => <FavoriteItemCard key={f.id} item={f} onToggle={toggle} />)}
        </div>
      )}
    </div>
  );
}