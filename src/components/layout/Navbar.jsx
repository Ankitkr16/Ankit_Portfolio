import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Menu, X } from "lucide-react";
import { navItems } from "../../data/portfolioData";
import ThemeToggle from "../ui/ThemeToggle";

function Navbar({ active, theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 md:px-8">
      <a href="#home" className="mb-2 ml-2 inline-block font-display text-xs tracking-[0.32em] text-white md:text-sm">
        ANKIT.
      </a>
      <nav className="rounded-2xl border border-white/15 bg-ink/70 px-4 py-3 shadow-glass backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-wider transition ${
                  active === item ? "bg-white/20 text-white" : "text-mist hover:bg-white/10 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.25em] text-mist md:hidden">Menu</span>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-full border border-white/20 p-2 text-mist transition hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 grid grid-cols-3 gap-2 pb-2">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-2 py-2 text-center text-[10px] uppercase tracking-wider transition ${
                      active === item ? "bg-white/20 text-white" : "bg-white/5 text-mist"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <a
        href="#home"
        className="fixed bottom-6 right-6 rounded-full border border-white/15 bg-ink/80 p-3 text-mist shadow-glass backdrop-blur-lg transition hover:text-white"
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </a>
    </header>
  );
}

export default Navbar;
