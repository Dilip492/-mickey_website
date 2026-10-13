import { useState } from "react";
import { Gift } from "lucide-react";
import RewardCard from "../../components/account/RewardCard.jsx";
import EmptyState from "../../components/ui/EmptyState.jsx";
import ConfirmationModal from "../../components/ui/ConfirmationModal.jsx";
// import { mockLoyalty, mockRewards } from "../../data/mockData.js";
import { mockLoyalty, mockRewards } from "../../data/mockdata.js";

const TABS = ["Available", "Redeemed", "Expired"];

export default function Rewards() {
  const [tab, setTab] = useState("Available");
  const [confirm, setConfirm] = useState(null);

  const onRedeem = (reward) => setConfirm(reward);
  const handleConfirm = () => {
    // await api.post(`/my-mickeys/rewards/${confirm.id}/redeem`);
    setConfirm(null);
  };

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Rewards</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">Your Rewards</h1>
        <p className="mt-2 text-plum/60">
          You have <span className="font-semibold text-copper">{mockLoyalty.points.toLocaleString()} points</span> to spend.
        </p>
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

      {tab === "Available" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockRewards.map((r) => (
            <RewardCard key={r.id} reward={r} userPoints={mockLoyalty.points} onRedeem={onRedeem} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Gift}
          title={`No ${tab.toLowerCase()} rewards`}
          description={
            tab === "Redeemed"
              ? "Rewards you've redeemed will appear here."
              : "Expired rewards will appear here once they pass their use-by date."
          }
        />
      )}

      <ConfirmationModal
        open={!!confirm}
        onClose={() => setConfirm(null)}
        onConfirm={handleConfirm}
        title={confirm ? `Redeem ${confirm.name}?` : ""}
        description={confirm ? `${confirm.points} points will be deducted from your balance.` : ""}
        confirmLabel="Redeem Reward"
      />
    </div>
  );
}