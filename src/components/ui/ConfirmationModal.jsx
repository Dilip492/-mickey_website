import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "./Button.jsx";

export default function ConfirmationModal({
  open, onClose, onConfirm, title, description,
  confirmLabel = "Confirm", cancelLabel = "Cancel",
  confirmVariant = "copper", loading = false,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-plum/50 backdrop-blur-sm" onClick={onClose} aria-hidden />
          <motion.div
            role="dialog" aria-modal="true"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative z-10 w-full max-w-md rounded-3xl border border-cream-200 bg-cream-50 p-6 shadow-warm"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-plum/60 transition hover:bg-plum/5"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="heading-serif pr-8 text-xl">{title}</h3>
            {description && (
              <p className="mt-2 text-sm leading-relaxed text-plum/70">{description}</p>
            )}
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button variant="outline" onClick={onClose}>{cancelLabel}</Button>
              <Button variant={confirmVariant} onClick={onConfirm} disabled={loading}>
                {loading ? "Please wait…" : confirmLabel}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}