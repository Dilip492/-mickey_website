import { useState } from "react";
import { Tag } from "lucide-react";
import OfferCard from "../../components/account/OfferCard.jsx";
import EmptyState from "../../components/ui/EmptyState.jsx";
import { mockOffers } from "../../data/mockdata.js";

const CATS = ["For You", "Birthday", "Double Points", "Seasonal", "Member Exclusive"];

export default function Offers() {
  const [cat, setCat] = useState("For You");
  const filtered = cat === "For You" ? mockOffers : mockOffers.filter((o) => o.category === cat);

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Offers</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">Just For You</h1>
        <p className="mt-2 text-plum/60">A few things we thought you'd enjoy.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition min-h-[40px] ${
              cat === c ? "bg-plum text-cream" : "bg-cream-100 text-plum hover:bg-cream-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={Tag}
          title="Nothing here yet"
          description="Check back soon for new offers just for you."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((o) => <OfferCard key={o.id} offer={o} />)}
        </div>
      )}
    </div>
  );
}