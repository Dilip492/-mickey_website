import { useState } from "react";
import { Calendar } from "lucide-react";
import EventCard from "../../components/account/EventCard.jsx";
import EmptyState from "../../components/ui/EmptyState.jsx";
import { mockEvents } from "../../data/mockdata.js";

const TABS = ["Upcoming", "My Reservations", "Past Events"];

export default function Events() {
  const [tab, setTab] = useState("Upcoming");
  const reserved = mockEvents.filter((e) => e.reservationStatus);

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Events</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">
          What's Happening at Mickey's
        </h1>
        <p className="mt-2 text-plum/60">Live music, tastings, and evenings worth remembering.</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition min-h-[40px] ${
              tab === t ? "bg-plum text-cream" : "bg-cream-100 text-plum hover:bg-cream-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Past Events" ? (
        <EmptyState
          icon={Calendar}
          title="No past events yet"
          description="Events you've attended will appear here."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {(tab === "Upcoming" ? mockEvents : reserved).map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      )}
    </div>
  );
}