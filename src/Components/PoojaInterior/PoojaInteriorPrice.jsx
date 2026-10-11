"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const PoojaInteriorPrice = () => {
  const [activePricingTab, setActivePricingTab] =
    useState("Compact Pooja Unit");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabsContainerRef = useRef(null);

  const phoneNumber = "7077797720";

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const pricingData = {
    "Compact Pooja Unit": {
      budget: "₹15,000–₹30,000+",
      premium: "₹30,000+",
      size: "Wall-Mounted Pooja Unit",
      image: "/pooja/Compactwall-mounted-pooja-unit.webp",
    },
    "Custom Pooja Unit": {
      budget: "₹30,000–₹60,000+",
      premium: "₹60,000+",
      size: "Custom Pooja Unit for 2/3 BHK",
      image: "/pooja/Custom-pooja-unit-for-2-3-BHK.webp",
    },
    "Dedicated Pooja Room": {
      budget: "₹60,000–₹1,20,000+",
      premium: "₹1,20,000+",
      size: "Dedicated Pooja Room Interiors",
      image: "/pooja/Dedicated-Pooja-Room.webp",
    },
    "Premium Pooja Room": {
      budget: "₹1,20,000+",
      premium: "Custom Quote",
      size: "Premium / Customised Pooja Room",
      image: "/pooja/Premium-customised-pooja-room.webp",
    },
  };

  // Check scroll position for arrows
  const checkScroll = () => {
    const container = tabsContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10,
      );
    }
  };

  useEffect(() => {
    checkScroll();
    const container = tabsContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollTabs = (direction) => {
    const container = tabsContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-10 lg:py-15 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
              Pooja Room Interior Design{" "}
              <span className="text-green-700">Cost in Bhubaneswar</span>
            </h2>
            <p className="text-stone-700 mt-3 lg:mt-4 leading-relaxed text-sm sm:text-base">
              The pooja room interior design cost in Bhubaneswar depends on the
              size of the space and how customised the final unit needs to be. A
              simple wall-mounted unit will have a different scope from a
              dedicated room with a detailed mandir, storage, partition,
              decorative backdrop and layered lighting.
            </p>
            <p className="text-stone-700 mt-3 lg:mt-4 leading-relaxed text-sm sm:text-base">
              The main factors that can affect the quotation include the size
              and structure of the mandir, materials and finishes, storage
              requirements, lighting, jaali or partition work, custom detailing
              and the amount of on-site execution involved.
            </p>
            <p className="text-stone-700 mt-3 lg:mt-4 leading-relaxed text-sm sm:text-base">
              At Infinity Space, we prefer to understand the actual space and
              requirements before giving a figure. Once the scope is clear, we
              can prepare a quotation around the proposed design instead of
              giving a generic price that may not match the final requirement.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-6xl mx-auto mb-12">
            {/* Pricing Tabs - Horizontal Scroll Container */}
            <div className="relative mb-8 lg:mb-10">
              {/* Left Arrow */}
              {showLeftArrow && (
                <button
                  onClick={() => scrollTabs("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white shadow-lg rounded-full border border-stone-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300 hidden md:flex"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4 text-stone-600" />
                </button>
              )}

              {/* Tabs Container */}
              <div
                ref={tabsContainerRef}
                className="flex gap-2 sm:gap-3 overflow-x-auto scroll-smooth pb-2 md:px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                style={{
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {Object.keys(pricingData).map((key) => (
                  <motion.button
                    key={key}
                    onClick={() => setActivePricingTab(key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      activePricingTab === key
                        ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/25"
                        : "bg-white text-stone-600 hover:bg-green-50 border border-stone-200 hover:border-green-300"
                    }`}
                  >
                    {key}
                  </motion.button>
                ))}
              </div>

              {/* Right Arrow */}
              {showRightArrow && (
                <button
                  onClick={() => scrollTabs("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white shadow-lg rounded-full border border-stone-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300 hidden md:flex"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4 text-stone-600" />
                </button>
              )}
            </div>

            {/* Active Pricing Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePricingTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[2rem] border border-stone-200 shadow-2xl shadow-stone-900/5 overflow-hidden"
              >
                <div className="grid lg:grid-cols-5">
                  {/* Image Side - Takes 2 columns */}
                  <div className="relative h-48 sm:h-64 lg:h-full lg:col-span-2">
                    <Image
                      src={pricingData[activePricingTab].image}
                      alt={activePricingTab}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent lg:bg-gradient-to-r lg:from-stone-900/80 lg:via-stone-900/40 lg:to-transparent"></div>
                    <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-white">
                      <span className="text-xs lg:text-sm text-green-300 font-medium">
                        {pricingData[activePricingTab].size}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1">
                        {activePricingTab}
                      </h3>
                    </div>
                  </div>

                  {/* Pricing Side - Takes 3 columns */}
                  <div className="p-6 sm:p-8 lg:p-10 lg:col-span-3">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Indicative Starting Range Card */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-stone-300 group-hover:bg-green-400 transition-colors duration-300"></div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">💼</span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                            Indicative Starting Range
                          </span>
                        </div>
                        <div className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 mb-2">
                          {pricingData[activePricingTab].budget}
                        </div>
                        <p className="text-xs text-stone-500 mb-4">
                          Basic mandir unit, standard storage, laminate finish,
                          essential lighting
                        </p>
                        <ul className="space-y-1.5 mb-4">
                          <li className="flex items-center gap-2 text-xs text-stone-600">
                            <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                            Clean finish
                          </li>
                          <li className="flex items-center gap-2 text-xs text-stone-600">
                            <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                            Fully functional
                          </li>
                          <li className="flex items-center gap-2 text-xs text-stone-600">
                            <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                            Built to last
                          </li>
                        </ul>
                        <button
                          onClick={handleCallNow}
                          className="w-full px-4 py-2.5 bg-white border border-stone-300 text-stone-700 text-sm font-semibold rounded-xl hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
                        >
                          Call Now
                        </button>
                      </motion.div>

                      {/* Fully Customised Card */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 sm:p-6 border-2 border-green-500 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 bg-green-700 text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
                          Recommended
                        </div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">👑</span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-green-700">
                            Fully Customised
                          </span>
                        </div>
                        <div className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 mb-2">
                          {pricingData[activePricingTab].premium}
                        </div>
                        <p className="text-xs text-stone-600 mb-4">
                          Detailed mandir, jaali/partition work, custom storage,
                          layered lighting, premium finishes
                        </p>
                        <ul className="space-y-1.5 mb-4">
                          <li className="flex items-center gap-2 text-xs text-stone-700">
                            <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                            Made to your space
                          </li>
                          <li className="flex items-center gap-2 text-xs text-stone-700">
                            <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                            Custom detailing
                          </li>
                          <li className="flex items-center gap-2 text-xs text-stone-700">
                            <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                            Premium finishes
                          </li>
                        </ul>
                        <button
                          onClick={handleCallNow}
                          className="w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                        >
                          Call Now
                        </button>
                      </motion.div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
                        <span className="text-lg">📐</span>
                        <p className="text-xs text-stone-500">
                          The main factors that can affect the quotation include
                          the size and structure of the mandir, materials and
                          finishes, storage requirements, lighting, jaali or
                          partition work, custom detailing and the amount of
                          on-site execution involved.
                        </p>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                        <span className="text-lg">📞</span>
                        <p className="text-xs text-stone-600">
                          At Infinity Space, we prefer to understand the actual
                          space and requirements before giving a figure. Once
                          the scope is clear, we can prepare a quotation around
                          the proposed design instead of giving a generic price
                          that may not match the final requirement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Disclaimer */}
            <p className="mt-6 text-center text-[11px] sm:text-xs text-stone-500 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-stone-600">Disclaimer:</span>{" "}
              The final pooja room interior design cost in Bhubaneswar depends
              on dimensions, materials, finishes, storage, lighting, detailing
              and site requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoojaInteriorPrice;
