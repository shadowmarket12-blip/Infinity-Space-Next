"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LivingPricing = () => {
  const [activePricingTab, setActivePricingTab] = useState(
    "Custom TV Unit (full-wall)",
  );

  const phoneNumber = "7077797720";

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const pricingData = {
    "Custom TV Unit (full-wall)": {
      budget: "Rs. 30,000 – 55,000",
      premium: "Rs. 55,000 – 1.20 Lakhs",
      size: "Full-wall TV Unit",
      image: "/Residentialimages/1 BHK Flat.webp",
      popular: true,
    },
    "Feature Wall": {
      budget: "Rs. 18,000 – 35,000",
      premium: "Rs. 35,000 – 90,000",
      size: "Accent Feature Wall",
      image: "/Residentialimages/2 BHK Flat.webp",
      popular: false,
    },
    "False Ceiling + Cove Lighting": {
      budget: "Rs. 35,000 – 55,000",
      premium: "Rs. 55,000 – 1.10 Lakhs",
      size: "Ceiling with Cove Lighting",
      image: "/Residentialimages/3 BHK Flat.webp",
      popular: true,
    },
    "Crockery / Display Unit": {
      budget: "Rs. 18,000 – 32,000",
      premium: "Rs. 32,000 – 65,000",
      size: "Crockery Display Unit",
      image: "/Residentialimages/4 BHK Flat.webp",
      popular: false,
    },
    "Foyer Design": {
      budget: "Rs. 15,000 – 28,000",
      premium: "Rs. 28,000 – 60,000",
      size: "Foyer Entrance Design",
      image: "/Residentialimages/Independent Villa.webp",
      popular: false,
    },
    "Full Living Room + Dining": {
      budget: "Rs. 1.00 – 1.60 Lakhs",
      premium: "Rs. 1.60 – 3.50 Lakhs",
      size: "Complete Living & Dining",
      image: "/Residentialimages/Modular Kitchen.webp",
      popular: true,
    },
    "Per sq.ft (carpet area)": {
      budget: "Rs. 900 – 1,400/sq.ft",
      premium: "Rs. 1,400 – 2,500/sq.ft",
      size: "Per Square Foot Rate",
      image: "/Residentialimages/Bedroom Interior Design.webp",
      popular: false,
    },
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
            <h2 className="mt-6 text-[20px] font-black leading-[1.2] text-black sm:text-[42px] lg:text-[50px]">
              Living Room Interior Design{" "}
              <span className="text-green-700">
                Cost in Bhubaneswar 2026 Guide
              </span>
            </h2>
            <p className="text-stone-700 mt-3 lg:mt-4 leading-relaxed text-sm sm:text-base">
              Costs depend on room size, material choices, and scope of elements
              included. Here is our transparent pricing reference for{" "}
              <b>Bhubaneswar in 2026:</b>
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-6xl mx-auto mb-12">
            {/* Pricing Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-10">
              {Object.keys(pricingData).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => setActivePricingTab(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activePricingTab === key
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/25"
                      : "bg-white text-stone-600 hover:bg-green-50 border border-stone-200 hover:border-green-300"
                  }`}
                >
                  {key}
                </motion.button>
              ))}
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
                      {/* Budget Package Card */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-stone-300 group-hover:bg-green-400 transition-colors duration-300"></div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">💼</span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                            Budget Package
                          </span>
                        </div>
                        <div className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 mb-2">
                          {pricingData[activePricingTab].budget}
                        </div>
                        <p className="text-xs text-stone-500 mb-4">
                          Value-focused materials & finishes
                        </p>
                        <ul className="space-y-1.5 mb-4">
                          <li className="flex items-center gap-2 text-xs text-stone-600">
                            <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                            Standard laminates
                          </li>
                          <li className="flex items-center gap-2 text-xs text-stone-600">
                            <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                            Basic hardware
                          </li>
                          <li className="flex items-center gap-2 text-xs text-stone-600">
                            <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                            Essential lighting
                          </li>
                        </ul>
                        <button
                          onClick={handleCallNow}
                          className="w-full px-4 py-2.5 bg-white border border-stone-300 text-stone-700 text-sm font-semibold rounded-xl hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
                        >
                          Call Now
                        </button>
                      </motion.div>

                      {/* Premium Package Card */}
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
                            Premium Package
                          </span>
                        </div>
                        <div className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 mb-2">
                          {pricingData[activePricingTab].premium}
                        </div>
                        <p className="text-xs text-stone-600 mb-4">
                          Premium materials & designer finishes
                        </p>
                        <ul className="space-y-1.5 mb-4">
                          <li className="flex items-center gap-2 text-xs text-stone-700">
                            <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                            Premium veneers & acrylics
                          </li>
                          <li className="flex items-center gap-2 text-xs text-stone-700">
                            <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                            Soft-close hardware
                          </li>
                          <li className="flex items-center gap-2 text-xs text-stone-700">
                            <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                            Designer lighting
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
                    <div className="mt-6 flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                      <span className="text-lg">📞</span>
                      <p className="text-xs text-stone-500">
                        All prices include design, materials & installation.
                        <span className="text-green-700 font-semibold">
                          {" "}
                          Call us for exact quote based on your requirements.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LivingPricing;
