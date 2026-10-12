"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiArrowRight, FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";

/* ================= STATIC DATA (outside component = not recreated on every render) ================= */
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  {
    name: "Services",
    path: "/services/overview",
    dropdown: [
      { name: "Overview", path: "/services/overview" },
      {
        name: "Residential Interior Design",
        path: "/services/residential-interior-design",
      },
      {
        name: "Living Room Interior Design",
        path: "/services/living-room-interior-design",
      },
      {
        name: "Bedroom Interior Design",
        path: "/services/bedroom-interior-design",
      },
      {
        name: "Modular Kitchen Design",
        path: "/services/modular-kitchen-design",
      },
      {
        name: "Pooja Room Interior Design",
        path: "/services/pooja-room-interior-design",
      },
      {
        name: "Kids Room Interior Design",
        path: "/services/kids-room-interior-design",
      },
      {
        name: "Commercial & Office Interior Design",
        path: "/services/commercial-office-interior-design",
      },
      {
        name: "Customized Furniture Solutions",
        path: "/services/customized-furniture-solutions",
      },
      {
        name: "False Ceiling & Decorative Interior Design",
        path: "/services/false-ceiling-decorative-interior-design",
      },
      {
        name: "Turnkey Interior Solutions",
        path: "/services/turnkey-interior-solutions",
      },
    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=61587564103214",
  },
  {
    icon: <FiInstagram />,
    link: "https://www.instagram.com/infinityspace.co/",
  },
  {
    icon: <RiTwitterXLine />,
    link: "https://x.com/InfinitySpaceCo",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@InfinitySpaceOfficial",
  },
  {
    icon: <FaPinterestP />,
    link: "https://in.pinterest.com/infinityspaceodisha/",
  },
];

/* ================= CLASSES ================= */
const containerClass =
  "flex h-[70px] items-center justify-between sm:h-[75px] lg:h-[100px]";

const navClass = "hidden items-center gap-1 lg:flex";

const socialContainerClass = "hidden items-center gap-2 lg:flex";

const socialButtonClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-white text-[#01653F] shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#01653F] hover:bg-[#01653F] hover:text-white hover:shadow-[0_15px_35px_rgba(1,101,63,0.25)]";

const mobileButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[#f8f8f8] text-black shadow-sm transition-transform duration-200 active:scale-95 lg:hidden";

// NOTE: 100dvh fixes the mobile browser address-bar jump. transform-gpu + will-change = smooth slide.
const mobileMenuClass =
  "fixed right-0 top-[70px] z-50 h-[calc(100dvh-70px)] w-[85%] max-w-[340px] transform-gpu overflow-y-auto overscroll-contain border-l border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] will-change-transform sm:top-[75px] sm:h-[calc(100dvh-75px)] lg:hidden";

// NO backdrop-blur here (it was the biggest cause of lag)
const backdropClass = "fixed inset-0 z-40 bg-black/40 lg:hidden";

/* ================= ANIMATION CONFIG ================= */
// Tween instead of spring: more predictable & lighter on low-end devices
const drawerTransition = {
  type: "tween",
  duration: 0.32,
  ease: [0.32, 0.72, 0, 1],
};

// Light stagger (opacity + x only = GPU friendly)
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: 14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: "easeOut" },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const lastPointer = useRef("mouse");

  const isLinkActive = (link) => {
    if (link.path === "/") return pathname === "/";
    if (link.dropdown) return pathname.startsWith("/services");
    return pathname === link.path || pathname.startsWith(link.path + "/");
  };

  /* ================= SCROLL (passive + rAF throttled) ================= */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 30);
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= BODY LOCK (only while menu is open) ================= */
  useEffect(() => {
    if (!mobileMenu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenu]);

  /* ================= CLOSE EVERYTHING ON ROUTE CHANGE ================= */
  useEffect(() => {
    setMobileMenu(false);
    setDropdownOpen(false);
  }, [pathname]);

  /* ================= CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP ================= */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => {
      if (e.matches) setMobileMenu(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* ================= CLOSE DROPDOWN ON OUTSIDE TAP / ESC ================= */
  useEffect(() => {
    if (!dropdownOpen) return;
    const onPointerDown = (e) => {
      if (!e.target.closest(".dropdown-wrapper")) setDropdownOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdownOpen]);

  /* ================= RESET MOBILE ACCORDION AFTER DRAWER CLOSES ================= */
  useEffect(() => {
    if (mobileMenu) return;
    const t = setTimeout(() => setServiceOpen(false), 350);
    return () => clearTimeout(t);
  }, [mobileMenu]);

  const headerClass = `fixed top-0 left-0 z-50 w-full border-b bg-white transition-[box-shadow,border-color] duration-300 ${
    scrolled ? "border-black/10 shadow-sm" : "border-black/5"
  }`;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className={headerClass}>
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
          <div className={containerClass}>
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Infinity Space Logo"
                  width={135}
                  height={40}
                  className="w-[105px] object-contain sm:w-[130px] lg:w-[135px]"
                  priority
                />
              </motion.div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className={navClass}>
              {navLinks.map((link) => {
                const isActive = isLinkActive(link);

                if (link.dropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative dropdown-wrapper"
                      // Close on leave ONLY for real mouse (not touch)
                      onPointerLeave={(e) => {
                        if (e.pointerType === "mouse") setDropdownOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                        // Open on hover ONLY for real mouse (fixes tablet tap issue)
                        onPointerEnter={(e) => {
                          if (e.pointerType === "mouse") setDropdownOpen(true);
                        }}
                        onPointerDown={(e) => {
                          lastPointer.current = e.pointerType;
                        }}
                        onKeyDown={() => {
                          lastPointer.current = "key";
                        }}
                        onClick={() => {
                          // mouse: hover already handles it, don't toggle it shut
                          if (lastPointer.current === "mouse") {
                            setDropdownOpen(true);
                            return;
                          }
                          setDropdownOpen((o) => !o);
                        }}
                        className={`flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                          isActive || dropdownOpen
                            ? "bg-green-50 text-green-700"
                            : "text-gray-700 hover:font-bold"
                        }`}
                      >
                        {link.name}
                        <span
                          className={`ml-0.5 inline-block transition-transform duration-300 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 4L6 8L10 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      {/* DROPDOWN */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            // x via style so it does NOT conflict with animate (keeps it centered)
                            style={{ x: "-50%" }}
                            // pt-3 = invisible hover bridge, so the menu doesn't close in the gap
                            className="absolute left-1/2 top-full z-50 w-[800px] max-w-[90vw] pt-3"
                          >
                            <div className="relative rounded-2xl border border-black/5 bg-white p-4 shadow-2xl shadow-black/10">
                              <div className="grid grid-cols-3 gap-2">
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setDropdownOpen(false)}
                                    className="group relative flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors duration-300 hover:font-bold hover:text-green-700"
                                  >
                                    <span className="flex-1">{item.name}</span>
                                    <FiArrowRight
                                      className="-translate-x-2 text-green-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                      size={14}
                                    />
                                  </Link>
                                ))}
                              </div>
                              <div className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-black/5 bg-white" />
                              <div className="absolute left-1/2 top-0 h-2 w-8 -translate-x-1/2 bg-white" />
                              <div className="absolute left-4 right-4 top-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-green-50 text-green-700"
                        : "text-gray-700 hover:font-bold"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* DESKTOP SOCIAL ICONS */}
            <div className={socialContainerClass}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.08, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={socialButtonClass}
                >
                  <span className="text-[16px]">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
              onClick={() => setMobileMenu((o) => !o)}
              className={mobileButtonClass}
            >
              {mobileMenu ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE / TABLET MENU ================= */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="backdrop"
              onClick={() => setMobileMenu(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={backdropClass}
            />

            {/* RIGHT DRAWER */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={drawerTransition}
              className={mobileMenuClass}
            >
              <div className="p-5 pb-10">
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-3"
                >
                  {navLinks.map((link) => {
                    const isActive = isLinkActive(link);

                    if (link.dropdown) {
                      return (
                        <motion.div key={link.name} variants={itemVariants}>
                          <button
                            type="button"
                            aria-expanded={serviceOpen}
                            onClick={() => setServiceOpen((o) => !o)}
                            className={`flex w-full items-center justify-between rounded-2xl border px-3 py-3 font-medium transition-colors duration-300 ${
                              serviceOpen
                                ? "border-green-100 bg-green-50 text-green-700"
                                : "border-transparent bg-[#f8f8f8] text-gray-700"
                            }`}
                          >
                            <span>{link.name}</span>
                            <FiArrowRight
                              className={`transition-transform duration-300 ${
                                serviceOpen ? "rotate-90" : ""
                              }`}
                            />
                          </button>

                          {/* CSS grid collapse: smooth, no JS height calculation */}
                          <div
                            aria-hidden={!serviceOpen}
                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                              serviceOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="ml-4 mt-2 space-y-2 pb-1">
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.path}
                                    href={item.path}
                                    tabIndex={serviceOpen ? 0 : -1}
                                    onClick={() => setMobileMenu(false)}
                                    className="flex items-center justify-between rounded-xl border border-green-100 bg-white px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-700 active:bg-green-50"
                                  >
                                    {item.name}
                                    <FiArrowRight />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div key={link.name} variants={itemVariants}>
                        <Link
                          href={link.path}
                          onClick={() => setMobileMenu(false)}
                          className={`flex items-center justify-between rounded-2xl border px-3 py-3 transition-colors duration-300 ${
                            isActive
                              ? "border-green-100 bg-green-50 text-green-700"
                              : "border-transparent bg-[#f8f8f8] text-gray-700"
                          }`}
                        >
                          {link.name}
                          <FiArrowRight />
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* SOCIAL ICONS */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="mt-8 flex flex-wrap justify-center gap-3"
                >
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-white text-[#01653F] shadow-sm transition-colors duration-300 hover:bg-[#01653F] hover:text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
