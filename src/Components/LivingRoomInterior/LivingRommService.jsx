"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const LivingRoomServiceCovers = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const services = [
    {
      title: "TV Unit Design",
      description:
        "Floor-to-ceiling panel compositions with concealed cable management, integrated LED lighting, closed storage, and open display niches — in laminate, acrylic, or veneer finish",
      image: "/Living room page/Tv-unit-design.webp",
    },
    {
      title: "Feature Wall Design",
      description:
        "Wooden panels, textured plaster, stone cladding, premium wallpaper, or Pattachitra-inspired motif accents — the backdrop that defines your living room's personality",
      image: "/Living room page/Feature-Wall-Design.webp",
    },
    {
      title: "False Ceiling Design",
      description:
        "Cove ceiling with LED strip, multi-level systems, POP coffered ceiling, or wooden batten ceiling — with a complete integrated lighting plan across ambient, task, and accent layers",
      image: "/Living room page/False-Ceiling-Design.webp",
    },
    {
      title: "Space Planning & Furniture Layout",
      description:
        "Vastu-compliant layouts with traffic flow mapping, cross-ventilation positioning, and conversation zone planning — designed in 3D before any furniture is purchased",
      image: "/Living room page/Space-Planning-and-Furniture-Layout.webp",
    },
    {
      title: "Crockery Unit & Storage",
      description:
        "Glass-shutter display units, full-wall storage systems, and partition cabinets that solve storage intelligently while adding to the room's aesthetic",
      image: "/Living room page/Crockery-Unit-and-Storage.webp",
    },
    {
      title: "Foyer & Entry Design",
      description:
        "Shoe cabinets, console tables, mirror panels, and feature wall treatments that make a strong first impression the moment guests step inside",
      image: "/Living room page/Foyer-and-Entry-Design.webp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-stone-50/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #059669 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-[20px] font-black leading-[1.15] text-black sm:text-[42px] lg:text-[56px]">
            What Our Living Room{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">
                Design Service Covers
              </span>
            </span>
          </h2>

          <p className="text-base sm:text-xl text-black font-light leading-relaxed max-w-3xl mx-auto mt-6">
            Our living room interior design services in Bhubaneswar cover every
            element of the space — designed together as one unified composition,
            not assembled as separate purchases:
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateY: 5 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.12 * index,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-[2rem] shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Decorative Corner Accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>

                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-10"></div>

                {/* Image Container */}
                <div className="relative h-52 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-150"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 lg:p-8 flex-1 flex flex-col relative">
                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-200 group-hover:bg-emerald-400 transition-colors duration-300"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-300 group-hover:bg-emerald-500 transition-colors duration-300 delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-emerald-600 transition-colors duration-300 delay-150"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 group-hover:text-emerald-700 transition-colors duration-300 mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-5 sm:mt-6 flex items-center gap-3">
                    <div className="h-0.5 w-12 bg-stone-200 group-hover:w-20 group-hover:bg-emerald-400 transition-all duration-500 rounded-full"></div>
                    <div className="h-0.5 w-6 bg-stone-200 group-hover:w-10 group-hover:bg-emerald-400 transition-all duration-500 delay-75 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 sm:mt-16 lg:mt-20 max-w-3xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/50 border-2 border-emerald-200/50 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 overflow-hidden group shadow-xl shadow-emerald-500/5">
              {/* Background decorations */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-400/5 rounded-full blur-3xl"></div>

              {/* Animated rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-emerald-300/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-emerald-300/10 rounded-full animate-pulse delay-500"></div>

              <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/20 rotate-3"
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-stone-900 font-bold text-base sm:text-lg lg:text-xl mb-2">
                    One Complete Design Package
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm lg:text-base font-medium leading-relaxed">
                    All elements are designed together as a single cohesive
                    concept — not selected from separate catalogues.{" "}
                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
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
