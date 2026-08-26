"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ModularKitchenCover = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const services = [
    {
      title: "Custom Cabinet Design",
      description:
        "Upper and lower cabinets drawn precisely to your kitchen dimensions — no catalogue compromises, no awkward gaps or wasted corners",
      image: "/modular-kitchen-page/Custom-Cabinet-Design.webp",
    },
    {
      title: "Shutter Finish Selection",
      description:
        "Laminate, acrylic, membrane, or veneer — we guide you through the options at our studio with actual samples in hand, not just a brochure",
      image: "/modular-kitchen-page/Shutter-Finish-Selection.webp",
    },
    {
      title: "Countertop Fitting",
      description:
        "Granite, quartz, or high-pressure laminate countertops with waterproof edge-banding, under-mount or top-mount sink coordination, and proper sealing",
      image: "/modular-kitchen-page/Countertop-Fitting.webp",
    },
    {
      title: "Hardware Specification",
      description:
        "Soft-close hinges, telescopic drawer channels, magic-corner units, pull-out baskets, and tandem box systems from Hettich, Hafele, or Ebco",
      image: "/modular-kitchen-page/Hardware-Specification.webp",
    },
    {
      title: "Appliance Coordination",
      description:
        "Cabinet positions are designed around your chimney, hob, microwave, oven, and dishwasher — everything integrates cleanly, nothing looks like an afterthought",
      image: "/modular-kitchen-page/Appliance-Coordination.webp",
    },
    {
      title: "Loft and Overhead Storage",
      description:
        "Full-height upper cabinets with loft units that close the gap between cabinet top and ceiling — no dead space, maximum storage",
      image: "/modular-kitchen-page/Loft-and-Overhead-Storage.webp",
    },
    {
      title: "Free 3D Kitchen Renders",
      description:
        "Photorealistic 3D views of your kitchen before any fabrication begins — you approve the layout, finish, and configuration before we make anything",
      image: "/modular-kitchen-page/Free-3D-Kitchen-Renders.webp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-[20px] font-black leading-[1.15] text-black sm:text-[42px] lg:text-[50px]">
            What Our Modular Kitchen Design
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">
                Services in Bhubaneswar Covers
              </span>
            </span>
          </h2>

          <p className="text-base sm:text-xl text-black font-light leading-relaxed max-w-3xl mx-auto mt-6">
            Every modular kitchen interior design in Bhubaneswar, we deliver is
            a complete, end-to-end service — not just cabinet supply. Here is
            what is included as standard on every project:
          </p>
        </motion.div>

        {/* Services List - One Card Per Row */}
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 * index,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Decorative Corner Accent */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>

              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-10"></div>

              {/* Image Container - Left side on desktop */}
              <div className="relative h-56 sm:h-64 md:h-auto md:w-72 lg:w-80 xl:w-96 flex-shrink-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-150"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 25vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-stone-900/10 to-transparent md:bg-gradient-to-r md:from-stone-900/40 md:via-stone-900/10 md:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Content Section - Right side on desktop */}
              <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-center relative">
                {/* Decorative dots */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-200 group-hover:bg-emerald-400 transition-colors duration-300"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-300 group-hover:bg-emerald-500 transition-colors duration-300 delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-emerald-600 transition-colors duration-300 delay-150"></div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 group-hover:text-emerald-700 transition-colors duration-300 mb-3 sm:mb-4 leading-tight pr-8">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
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
                  One Complete Kitchen Package
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm lg:text-base font-medium leading-relaxed">
                  Material standard: we use BWP Grade 710 plywood as the
                  substrate on every kitchen we build. It is moisture-proof and
                  termite-resistant. We specify the grade in every quotation so
                  you can verify it independently.
                  {/* <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                    Free 3D visualisation is included as standard on every
                    modular kitchen project.
                  </span> */}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModularKitchenCover;
