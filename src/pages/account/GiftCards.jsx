import GiftCard from "../../components/account/GiftCard.jsx";
import Button from "../../components/ui/Button.jsx";
import { mockGiftCards } from "../../data/mockdata.js";

export default function GiftCards() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Gift Cards</p>
          <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">Your Gift Cards</h1>
          <p className="mt-2 text-plum/60">Synced with your Square account.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Add Gift Card</Button>
          <Button variant="copper">Buy a Gift Card</Button>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {mockGiftCards.map((c) => <GiftCard key={c.id} card={c} />)}
      </div>
    </div>
  );
}