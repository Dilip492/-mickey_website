import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import OrderCard from "../../components/account/OrderCard.jsx";
import EmptyState from "../../components/ui/EmptyState.jsx";
import { mockOrders } from "../../data/mockdata.js";;

const FILTERS = ["All", "Completed", "Cancelled", "Recent"];

export default function Orders() {
  const [filter, setFilter] = useState("All");
  const filtered = mockOrders.filter((o) => filter === "All" || o.status === filter);

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Your Orders</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">Order History</h1>
        <p className="mt-2 text-plum/60">Every visit, every memory.</p>
      </header>

      <div className="flex flex-wrap gap-2">
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

      <div className="space-y-4">
        {filtered.length === 0 ? (
          <EmptyState
            icon={ShoppingBag}
            title="No orders yet"
            description="Your first Mickey's order is just a tap away."
          />
        ) : (
          filtered.map((o) => <OrderCard key={o.id} order={o} />)
        )}
      </div>
    </div>
  );
}