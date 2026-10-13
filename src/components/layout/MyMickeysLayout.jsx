import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AccountHeader from "./AccountHeader.jsx";
import AccountSidebar from "./AccountSidebar.jsx";
import MobileAccountNav from "./MobileAccountNav.jsx";
import Header from "../Header.jsx"

export default function MyMickeysLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-cream-50">
      {/* <AccountHeader /> */}

      <Header/>

      <div className="mx-auto flex max-w-10xl gap-8 px-4 py-8 sm:px-6">
        <AccountSidebar />

        <main className="min-w-0 flex-1 pb-28 lg:pb-8">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>

      <MobileAccountNav />
    </div>
  );
}