"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LivingRoomServiceCovers = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const services = [
    {
      title: "TV Unit Design",
      description:
        "Floor-to-ceiling panel compositions with concealed cable management, integrated LED lighting, closed storage, and open display niches — in laminate, acrylic, or veneer finish",
    },
    {
      title: "Feature Wall Design",
      description:
        "Wooden panels, textured plaster, stone cladding, premium wallpaper, or Pattachitra-inspired motif accents — the backdrop that defines your living room's personality",
    },
    {
      title: "False Ceiling Design",
      description:
        "Cove ceiling with LED strip, multi-level systems, POP coffered ceiling, or wooden batten ceiling — with a complete integrated lighting plan across ambient, task, and accent layers",
    },
    {
      title: "Space Planning & Furniture Layout",
      description:
        "Vastu-compliant layouts with traffic flow mapping, cross-ventilation positioning, and conversation zone planning — designed in 3D before any furniture is purchased",
    },
    {
      title: "Crockery Unit & Storage",
      description:
        "Glass-shutter display units, full-wall storage systems, and partition cabinets that solve storage intelligently while adding to the room's aesthetic",
    },
    {
      title: "Foyer & Entry Design",
      description:
        "Shoe cabinets, console tables, mirror panels, and feature wall treatments that make a strong first impression the moment guests step inside",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative  py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[56px]">
            What Our Living Room{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">
                Design Service Covers
              </span>
            </span>
          </h2>

          <p className="text-stone-700 mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Our living room interior design services in Bhubaneswar cover every
            element of the space — designed together as one unified composition,
            not assembled as separate purchases:
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-stone-200 hover:border-emerald-200 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 overflow-hidden"
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                <div className="p-5 sm:p-6 lg:p-8">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-stone-900 mb-3 sm:mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-4 sm:mt-5 h-0.5 w-12 bg-stone-200 group-hover:w-20 group-hover:bg-emerald-400 transition-all duration-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 sm:mt-14 lg:mt-20 max-w-3xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-7 overflow-hidden group">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-black text-xs sm:text-sm lg:text-base font-medium leading-relaxed">
                    All elements are designed together as a single cohesive
                    concept — not selected from separate catalogues.{" "}
                    <span className="font-bold text-emerald-700">
                      Free 3D visualisation is included as standard on every
                      living room project.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LivingRoomServiceCovers;
