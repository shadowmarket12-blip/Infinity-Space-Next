"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX, FiArrowRight, FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  /* ================= NAVLINKS ================= */
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Services",
      path: "/services/overview",
      dropdown: [
        { name: "Overview", path: "/services/overview" },
        {
          name: "Residential Interior Design",
          path: "/services/residential-interior-design",
        },
        { name: "Living Room Interior Design", path: "/services" },
        { name: "Bedroom Interior Design", path: "/services" },
        { name: "Modular Kitchen Design", path: "/services" },
        { name: "Pooja Room Interior Design", path: "/services" },
        { name: "Kids Room Interior Design", path: "/services" },
        { name: "Commercial & Office Interior Design", path: "/services" },
        { name: "Customized Furniture Solutions", path: "/services" },
        {
          name: "False Ceiling & Decorative Interior Design",
          path: "/services",
        },
        { name: "Turnkey Interior Solutions", path: "/services" },
      ],
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  /* ================= SOCIAL ICONS ================= */
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= BODY LOCK ================= */
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownOpen && !e.target.closest(".dropdown-wrapper")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownOpen]);

  const headerClass = `fixed top-0 left-0 z-50 w-full border-b transition-all duration-500 ${scrolled ? "border-black/10 bg-white shadow-sm backdrop-blur-xl" : "border-black/5 bg-white/95 backdrop-blur-xl"}`;

  const containerClass =
    "flex h-[70px] items-center justify-between sm:h-[75px] lg:h-[100px]";

  const navClass = "hidden items-center gap-1 lg:flex";

  const socialContainerClass = "hidden items-center gap-2 lg:flex";

  const socialButtonClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-white text-[#01653F] shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#01653F] hover:bg-[#01653F] hover:text-white hover:shadow-[0_15px_35px_rgba(1,101,63,0.25)]";

  const mobileButtonClass =
    "flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[#f8f8f8] text-black shadow-sm transition-all duration-300 active:scale-95 lg:hidden";

  const mobileMenuClass =
    "fixed right-0 top-[70px] z-50 h-[calc(100vh-70px)] w-[85%] max-w-[340px] overflow-y-auto border-l border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:top-[75px] sm:h-[calc(100vh-75px)] lg:hidden";

  const backdropClass =
    "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden";

  return (
    <>
      {/* NAVBAR */}
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
              {navLinks.map((link, index) => {
                const isActive = pathname === link.path;

                if (link.dropdown) {
                  return (
                    <div key={index} className="relative dropdown-wrapper">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        onMouseEnter={() => setDropdownOpen(true)}
                        className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${isActive || dropdownOpen ? "bg-green-50 text-green-700" : "text-gray-700 hover:font-bold"}`}
                      >
                        {link.name}
                        <motion.span
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block ml-0.5"
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
                        </motion.span>
                      </button>

                      {/* DROPDOWN */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            onMouseLeave={() => setDropdownOpen(false)}
                            className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] max-w-[90vw] rounded-2xl border border-black/5 bg-white shadow-2xl shadow-black/10 p-4 z-50"
                          >
                            <div className="grid grid-cols-3 gap-2">
                              {link.dropdown.map((item, idx) => (
                                <Link
                                  key={idx}
                                  href={item.path}
                                  onClick={() => {
                                    setDropdownOpen(false);
                                    setMobileMenu(false);
                                  }}
                                  className="group relative flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-gray-700 font-medium transition-all duration-300 hover:font-bold hover:text-green-700"
                                >
                                  <span className="flex-1">{item.name}</span>
                                  <FiArrowRight
                                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-600"
                                    size={14}
                                  />
                                </Link>
                              ))}
                            </div>
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-black/5 rotate-45" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-white" />
                            <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    href={link.path}
                    className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${isActive ? "bg-green-50 text-green-700" : "text-gray-700 hover:font-bold"}`}
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
              onClick={() => setMobileMenu(!mobileMenu)}
              className={mobileButtonClass}
            >
              {mobileMenu ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* BACKDROP */}
            <motion.div
              onClick={() => setMobileMenu(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={backdropClass}
            />

            {/* RIGHT DRAWER */}
            <motion.div
              initial={{ x: 350 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.07 }}
              className={mobileMenuClass}
            >
              <div className="p-5">
                <div className="space-y-3">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.path;

                    if (link.dropdown) {
                      return (
                        <div key={link.name}>
                          <button
                            onClick={() => setServiceOpen(!serviceOpen)}
                            className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 font-medium transition-all duration-300 ${serviceOpen ? "bg-green-50 text-green-700 border border-green-100" : "bg-[#f8f8f8] text-gray-700 border border-transparent"}`}
                          >
                            <span>{link.name}</span>
                            <motion.div
                              animate={{ rotate: serviceOpen ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FiArrowRight />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {serviceOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-2 space-y-2">
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.path}
                                      href={item.path}
                                      onClick={() => {
                                        setMobileMenu(false);
                                        setServiceOpen(false);
                                        router.push(item.path);
                                      }}
                                      className="flex items-center justify-between rounded-xl border border-green-100 bg-white px-3 py-2 text-sm text-gray-700 transition-all duration-300 hover:bg-green-50 hover:text-green-700"
                                    >
                                      {item.name}
                                      <FiArrowRight />
                                    </Link>
                                  ))}
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
                        onClick={() => {
                          setMobileMenu(false);
                          setServiceOpen(false);
                        }}
                        className={`flex items-center justify-between rounded-2xl px-3 py-3 transition-all duration-300 ${isActive ? "bg-green-50 text-green-700 border border-green-100" : "bg-[#f8f8f8] text-gray-700 border border-transparent"}`}
                      >
                        {link.name}
                        <FiArrowRight />
                      </Link>
                    );
                  })}
                </div>

                {/* SOCIAL ICONS */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-green-100 bg-white text-[#01653F] shadow-sm transition-all duration-300 hover:bg-[#01653F] hover:text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
