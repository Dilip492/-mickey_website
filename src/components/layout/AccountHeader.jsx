import { Link } from "react-router-dom";
import { Bell, Search } from "lucide-react";
// import Logo from "../brand/Logo.jsx";
import ProfileAvatar from "../ui/ProfileAvatar.jsx";
// import { mockCustomer } from "../../data/mockData.js";

export default function AccountHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-cream-200/60 bg-cream-50/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link to="/my-mickeys" aria-label="My Mickey's home">
          {/* <Logo /> */}
        </Link>

        <div className="flex items-center gap-2">
          <button
            className="hidden h-10 w-10 place-items-center rounded-full text-roast transition hover:bg-terracotta/10 sm:grid"
            aria-label="Search"
          >
            <Search className="h-4.5 w-4.5" />
          </button>

          <button
            className="relative grid h-10 w-10 place-items-center rounded-full text-roast transition hover:bg-terracotta/10"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-terracotta ring-2 ring-cream-50" />
          </button>

          <Link
            to="/my-mickeys/profile"
            aria-label="Your profile"
            className="rounded-full ring-2 ring-transparent transition hover:ring-terracotta/25"
          >
            <ProfileAvatar
              firstName={mockCustomer.firstName}
              lastName={mockCustomer.lastName}
              size="sm"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}