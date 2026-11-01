"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const OfficeRoomPricing = () => {
  const [activePricingTab, setActivePricingTab] = useState(
    "Essential Office Interiors",
  );
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabsContainerRef = useRef(null);

  const phoneNumber = "7077797720";

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const pricingData = {
    "Essential Office Interiors": {
      range: "₹900 – ₹1,400/sq. ft.",
      suitable:
        "Simple, functional offices with essential workstations, storage, basic partitions and finishes",
      highlights: ["Clean finish", "Fully functional", "Built to last"],
      inclusions: [
        "Essential workstations",
        "Basic storage",
        "Standard finishes",
      ],
      image: "/office-interior-design/Essential-Office-Interiors.webp",
      popular: false,
    },
    "Professional Office Interiors": {
      range: "₹1,400 – ₹2,200/sq. ft.",
      suitable:
        "Offices needing a reception area, workstations, cabins or meeting spaces, and coordinated finishes",
      highlights: [
        "Coordinated design",
        "Reception ready",
        "Quality materials",
      ],
      inclusions: [
        "Reception area",
        "Cabins & meeting spaces",
        "Coordinated finishes",
      ],
      image: "/office-interior-design/Professional-Office-Interiors.webp",
      popular: false,
    },
    "Premium Corporate Interiors": {
      range: "₹2,200 – ₹3,000+/sq. ft.",
      suitable:
        "More customised offices with feature reception areas, glass cabins, premium materials and tailored furniture",
      highlights: ["Fully customised", "Premium materials", "Feature finishes"],
      inclusions: [
        "Feature reception areas",
        "Glass cabins",
        "Tailored furniture",
      ],
      image: "/office-interior-design/Premium-Corporate-Interiors.webp",
      popular: true,
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

  // Common cost factors
  const costFactors = [
    "The total area and existing condition of the office.",
    "The number of workstations, cabins, meeting rooms and visitor areas.",
    "Furniture type, dimensions, storage requirements and hardware specifications.",
    "Partitions, acoustic requirements and privacy needs.",
    "Electrical points, data cabling, lighting, ceiling and air-conditioning coordination.",
    "Flooring, wall finishes, branding, signage and decorative details.",
    "The amount of civil work, installation and site coordination required.",
    "The project schedule and any constraints on working hours or business downtime.",
  ];

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
              What Is the Cost of{" "}
              <span className="text-green-700">
                Office Interiors in Bhubaneswar?
              </span>
            </h2>
            <p className="text-stone-700 mt-3 lg:mt-4 leading-relaxed text-sm sm:text-base">
              The cost of office interiors in Bhubaneswar depends on the size of
              the office, the number and type of work areas, the level of
              customisation, the materials selected and the work included in the
              project. A small office requiring essential furniture and finishes
              will have different requirements from a corporate workspace with
              multiple cabins, meeting rooms, custom reception details and
              extensive electrical or ceiling work.
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
                style={{ WebkitOverflowScrolling: "touch" }}
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
                        {pricingData[activePricingTab].range}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1">
                        {activePricingTab}
                      </h3>
                    </div>
                  </div>

                  {/* Pricing Side - Takes 3 columns */}
                  <div className="p-6 sm:p-8 lg:p-10 lg:col-span-3">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Indicative Range Card */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-stone-300 group-hover:bg-green-400 transition-colors duration-300"></div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">📐</span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                            Indicative Range
                          </span>
                        </div>
                        <div className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 mb-2">
                          {pricingData[activePricingTab].range}
                        </div>
                        <p className="text-xs text-stone-500 mb-4">
                          Per square foot estimate based on area, materials and
                          scope
                        </p>
                        <ul className="space-y-1.5 mb-4">
                          {pricingData[activePricingTab].highlights.map(
                            (item, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs text-stone-600"
                              >
                                <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                                {item}
                              </li>
                            ),
                          )}
                        </ul>
                        <button
                          onClick={handleCallNow}
                          className="w-full px-4 py-2.5 bg-white border border-stone-300 text-stone-700 text-sm font-semibold rounded-xl hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
                        >
                          Call Now
                        </button>
                      </motion.div>

                      {/* Best Suited For Card */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 sm:p-6 border-2 border-green-500 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 relative overflow-hidden"
                      >
                        {pricingData[activePricingTab].popular && (
                          <div className="absolute top-0 right-0 bg-green-700 text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
                            Recommended
                          </div>
                        )}
                        <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">👑</span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-green-700">
                            Best Suited For
                          </span>
                        </div>
                        <div className="text-sm sm:text-base font-bold text-stone-900 mb-2 leading-snug">
                          {pricingData[activePricingTab].suitable}
                        </div>
                        <ul className="space-y-1.5 mb-4 mt-3">
                          {pricingData[activePricingTab].inclusions.map(
                            (item, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs text-stone-700"
                              >
                                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                                {item}
                              </li>
                            ),
                          )}
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
                    <div className="mt-6 flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                      <span className="text-lg">📞</span>
                      <p className="text-xs text-stone-500">
                        For a fair comparison, ask for an itemised estimate
                        stating scope, specifications, quantities and
                        exclusions.
                        <span className="text-green-700 font-semibold">
                          {" "}
                          A lower headline price may not cover the same work or
                          materials.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Common Cost Factors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-lg sm:text-2xl font-black text-stone-900">
                Common factors that influence the estimate include:
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {costFactors.map((factor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-green-300 hover:bg-green-50/50 transition-all duration-300"
                >
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {factor}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-5 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-500">
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                For a fair comparison, ask for an itemised estimate that states
                the scope, specifications, quantities, exclusions and any
                provisional costs. A lower headline price may not cover the same
                work or materials as another proposal. At Infinity Space, we
                recommend discussing your requirements and budget range early.
                Once the project scope and site conditions are understood, the
                estimate can be prepared around the work being considered.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeRoomPricing;
