import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import ConfirmationModal from "../../components/ui/ConfirmationModal.jsx";
import Button from "../../components/ui/Button.jsx";

const NOTIF_ITEMS = [
    { key: "emailOffers", label: "Email offers", desc: "Seasonal promotions and member deals" },
    { key: "eventUpdates", label: "Event updates", desc: "Live music, tastings, and reservations" },
    { key: "loyaltyNotifs", label: "Loyalty notifications", desc: "Points, rewards, and tier updates" },
    { key: "orderNotifs", label: "Order notifications", desc: "Order confirmations and updates" },
    { key: "birthday", label: "Birthday offers", desc: "A little something special each year" },
];

export default function Settings() {
    const [toggles, setToggles] = useState({
        emailOffers: true, eventUpdates: true, loyaltyNotifs: true,
        orderNotifs: true, birthday: true,
    });
    const [confirmDelete, setConfirmDelete] = useState(false);

    const toggle = (k) => setToggles((s) => ({ ...s, [k]: !s[k] }));

    return (
        <div className="space-y-6">
            <header>
                <p className="eyebrow">Settings</p>
                <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">Account &amp; Preferences</h1>
            </header>

            <section className="card-warm p-6">
                <h2 className="font-serif text-lg font-semibold">Account</h2>
                <div className="mt-4 space-y-3">
                    <button className="flex w-full min-h-[52px] items-center justify-between rounded-2xl border border-cream-200 px-4 py-3 text-left text-sm font-medium text-plum transition hover:bg-cream-100">
                        <span className="flex items-center gap-3"><Mail className="h-4 w-4 text-copper" /> Change Email</span>
                        <span className="text-plum/40">→</span>
                    </button>
                    <button className="flex w-full min-h-[52px] items-center justify-between rounded-2xl border border-cream-200 px-4 py-3 text-left text-sm font-medium text-plum transition hover:bg-cream-100">
                        <span className="flex items-center gap-3"><Lock className="h-4 w-4 text-copper" /> Change Password</span>
                        <span className="text-plum/40">→</span>
                    </button>
                </div>
            </section>

            <section className="card-warm p-6">
                <h2 className="font-serif text-lg font-semibold">Notifications</h2>
                <div className="mt-4 divide-y divide-cream-200">
                    {NOTIF_ITEMS.map((it) => (
                        <div key={it.key} className="flex items-center justify-between py-3.5">
                            <div className="pr-4">
                                <p className="text-sm font-medium text-plum">{it.label}</p>
                                <p className="text-xs text-plum/50">{it.desc}</p>
                            </div>
                            <button
                                role="switch"
                                aria-checked={toggles[it.key]}
                                onClick={() => toggle(it.key)}
                                className={`relative h-7 w-12 shrink-0 rounded-full transition ${toggles[it.key] ? "bg-copper" : "bg-cream-200"
                                    }`}
                            >
                                <motion.span
                                    layout
                                    transition={{ type: "spring", stiffness: 500, damping: 32 }}
                                    className={`absolute top-1 h-5 w-5 rounded-full bg-cream-50 shadow ${toggles[it.key] ? "left-6" : "left-1"
                                        }`}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="card-warm border-red-200 p-6">
                <h2 className="font-serif text-lg font-semibold text-red-700">Danger Zone</h2>
                <p className="mt-1 text-sm text-plum/60">
                    Permanently delete your My Mickey's account and all associated data.
                </p>
                <Button
                    variant="danger"
                    className="mt-4"
                    onClick={() => setConfirmDelete(true)}
                >
                    Delete Account
                </Button>
            </section>

            <ConfirmationModal
                open={confirmDelete}
                onClose={() => setConfirmDelete(false)}
                onConfirm={() => setConfirmDelete(false)}
                title="Delete your account?"
                description="This action is permanent and cannot be undone. Your loyalty points, order history, and preferences will be removed."
                confirmLabel="Yes, delete account"
                confirmVariant="danger"
            />
        </div>
    );
}