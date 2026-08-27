"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const ModularKitchenAreas = () => {
  const [showAllAreas, setShowAllAreas] = useState(false);

  const serviceAreas = [
    {
      area: "Patia & Chandrasekharpur",
      projects:
        "Premium apartment kitchens, gated community villas, modular kitchen designs",
      featured: true,
    },
    {
      area: "Nayapalli & Unit-I / Unit-IV",
      projects:
        "Independent home kitchens, luxury modular kitchen installations",
      featured: true,
    },
    {
      area: "Khandagiri & Niladri Vihar",
      projects:
        "Modern apartment kitchens, 2BHK & 3BHK modular kitchen projects",
      featured: true,
    },
    {
      area: "Saheed Nagar & VSS Nagar",
      projects:
        "Flat kitchens, modular kitchen designs, L-shaped & U-shaped layouts",
      featured: true,
    },
    {
      area: "Bhubaneswar New Town (BDA)",
      projects: "New-flat kitchens, first-time homeowner kitchen packages",
      featured: false,
    },
    {
      area: "Gothapatna & Jagamara",
      projects: "Residential colony homes, independent house kitchen designs",
      featured: false,
    },
    {
      area: "Pokhariput & Mancheswar",
      projects: "Apartment kitchens, affordable modular kitchen packages",
      featured: false,
    },
    {
      area: "Infocity Area & Rasulgarh",
      projects:
        "Professional modular kitchens, executive apartment kitchen design",
      featured: false,
    },
    {
      area: "Cuttack City",
      projects: "Full modular kitchen design & installation services",
      featured: true,
    },
    {
      area: "Puri & Berhampur",
      projects: "Residential, hospitality & guest-house kitchen design",
      featured: false,
    },
  ];

  const displayedAreas = showAllAreas ? serviceAreas : serviceAreas.slice(0, 6);

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-stone-50 via-white to-transparent rounded-full filter blur-3xl opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-50 via-white to-transparent rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="max-w-7xl mx-auto mb-12 lg:mb-16">
            <div className="text-center">
              <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
                Modular Kitchen Projects
                <span className="text-green-700"> Across Bhubaneswar</span>
              </h2>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
                View our full range of {""}
                <Link href="/services/overview">
                  home interior design in Bhubaneswar {""}
                </Link>
                services — or contact us directly to begin your kitchen project.
              </p>
            </div>
          </div>

          {/* Areas Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {displayedAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="relative flex items-center gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-stone-100 hover:border-stone-300 transition-all duration-300 hover:shadow-lg hover:shadow-stone-900/5 cursor-pointer">
                    {/* Number */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 transition-colors duration-300">
                      <span className="text-sm sm:text-base font-bold text-stone-400 group-hover:text-white transition-colors duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-stone-900 text-sm sm:text-base truncate">
                          {area.area}
                        </h3>
                      </div>
                      <p className="text-stone-500 text-xs sm:text-sm leading-relaxed line-clamp-1">
                        {area.projects}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <FiArrowUpRight className="w-4 h-4 text-stone-600" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show More Button */}
            {serviceAreas.length > 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <button
                  onClick={() => setShowAllAreas(!showAllAreas)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-stone-800 transition-all duration-300 group"
                >
                  {showAllAreas
                    ? "Show Less"
                    : `View All ${serviceAreas.length} Areas`}
                  <FiArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${showAllAreas ? "rotate-90" : "group-hover:translate-x-1"}`}
                  />
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModularKitchenAreas;
