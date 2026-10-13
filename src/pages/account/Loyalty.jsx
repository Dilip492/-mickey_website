import { useState } from "react";
import LoyaltyCard from "../../components/account/LoyaltyCard.jsx";
import ActivityTimeline from "../../components/account/ActivityTimeline.jsx";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import { mockLoyalty, mockActivity } from "../../data/mockdata.js";

const FILTERS = ["All", "Earned", "Redeemed", "Expired"];

export default function Loyalty() {
  const [filter, setFilter] = useState("All");
  const filtered = mockActivity.filter(
    (a) => filter === "All" || a.type === filter.toLowerCase()
  );

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Loyalty</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">Your Points</h1>
      </header>

      <LoyaltyCard loyalty={mockLoyalty} />

      <section>
        <SectionHeading eyebrow="Activity" title="Loyalty Activity" />
        <div className="mb-4 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition min-h-[40px] ${
                filter === f ? "bg-plum text-cream" : "bg-cream-100 text-plum hover:bg-cream-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <ActivityTimeline items={filtered} />
      </section>
    </div>
  );
}