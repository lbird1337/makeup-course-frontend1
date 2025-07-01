import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import Logo from "./Logo"; // Uncomment if you have a Logo component

const NAV_LINKS = [
  { href: "#about", label: "О Светлане" },
  { href: "#program", label: "Программа" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#pricing", label: "Стоимость" },
  { href: "#details", label: "Важные детали" },
  { href: "#contact", label: "Контакты" },
];

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  // Hide on scroll up, show on scroll down
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const curr = window.scrollY;
          setShow(curr < 40 || curr < lastScroll);
          setLastScroll(curr);
          setScrolled(curr >= 24);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // ESC closes mobile drawer
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // Simulate active link for anchor navigation
  const getActive = (href) => {
    return window.location.hash === href;
  };

  return (
    <header
      role="navigation"
      aria-label="Главное меню"
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "header-blur" : "header-transparent"}`}
      style={{ height: "64px" }}
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-center px-4 md:px-8 h-16 py-6 lg:py-7">
        {/* Brand */}
        <div className="flex-none leading-none">
          <a
            href="/"
            className="text-3xl lg:text-4xl font-heading font-semibold text-accent select-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none pr-8 lg:pr-12"
          >
            Светлана Цыренова
          </a>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center flex-nowrap gap-8 xl:gap-10 2xl:gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="flex items-center h-full text-lg lg:text-xl font-heading tracking-wide shrink-0">
              <a
                href={link.href}
                className="nav-link font-heading font-medium text-base md:text-lg tracking-tight underline-offset-[6px]"
                tabIndex={0}
                data-active={getActive(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded mr-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none"
          onClick={() => setMobileOpen(true)}
          aria-label="Открыть меню"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>
      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-0 z-50 bg-brand-50 flex flex-col justify-start items-end"
            style={{ minHeight: '100vh' }}
            aria-modal="true"
            role="dialog"
          >
            <button
              className="p-3 m-2 rounded focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none"
              onClick={() => setMobileOpen(false)}
              aria-label="Закрыть меню"
              style={{ alignSelf: 'flex-end' }}
            >
              <X className="w-7 h-7" />
            </button>
            <nav className="flex flex-col space-y-6 w-full px-8 mt-8" aria-label="Мобильное меню">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-heading text-xl font-semibold text-brand-900 py-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none"
                  onClick={() => setMobileOpen(false)}
                  tabIndex={0}
                  data-active={getActive(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 