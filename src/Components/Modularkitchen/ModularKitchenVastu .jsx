"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCompass,
  FiSun,
  FiDroplet,
  FiLayers,
  FiHome,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiMapPin,
} from "react-icons/fi";

const ModularKitchenVastu = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const vastuPrinciples = [
    {
      icon: <FiCompass className="w-5 h-5" />,
      title: "Southeast Kitchen",
      description:
        "Kitchen in the southeast zone of the home — the preferred Vastu position",
      gradient: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50",
      borderLight: "border-emerald-200",
      textAccent: "text-emerald-600",
      direction: "SE",
      position: "Southeast",
    },
    {
      icon: <FiSun className="w-5 h-5" />,
      title: "East-Facing Hob",
      description: "Hob positioned so the cook faces east while cooking",
      gradient: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50",
      borderLight: "border-amber-200",
      textAccent: "text-amber-600",
      direction: "E",
      position: "East",
    },
    {
      icon: <FiDroplet className="w-5 h-5" />,
      title: "North / NE Sink",
      description:
        "Sink in the north or northeast — the water element direction",
      gradient: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50",
      borderLight: "border-blue-200",
      textAccent: "text-blue-600",
      direction: "NE",
      position: "Northeast",
    },
    {
      icon: <FiLayers className="w-5 h-5" />,
      title: "South & West Storage",
      description: "Heavier storage units on the south and west walls",
      gradient: "from-violet-500 to-purple-600",
      bgLight: "bg-violet-50",
      borderLight: "border-violet-200",
      textAccent: "text-violet-600",
      direction: "SW",
      position: "Southwest",
    },
    {
      icon: <FiStar className="w-5 h-5" />,
      title: "Warm Colours",
      description:
        "Light, warm colours — yellows and greens — for a Vastu-positive environment",
      gradient: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50",
      borderLight: "border-rose-200",
      textAccent: "text-rose-600",
      direction: "☀",
      position: "All Around",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-white"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
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
          className="text-center max-w-4xl mx-auto mb-14 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <FiHome className="w-4 h-4" />
            Vastu Shastra Integration
          </span>

          <h2 className="text-[22px] sm:text-[36px] lg:text-[48px] font-black leading-[1.15] text-black">
            Vastu-Compliant{" "}
            <span className="text-green-700">Modular Kitchen Design</span>
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
            For families who consider Vastu an important part of their home
            plan, we integrate these principles from the first layout stage —
            not as a retrofit:
          </p>
        </motion.div>

        {/* Horizontal Scroll - Principles Row */}
        <div className="max-w-7xl mx-auto mb-12 lg:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
            {vastuPrinciples.map((principle, index) => (
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
                className="group relative"
              >
                {/* Connection Line - Desktop only */}
                {index < vastuPrinciples.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-stone-200 to-stone-100">
                    <div
                      className={`h-full bg-gradient-to-r ${principle.gradient} transition-all duration-500`}
                    ></div>
                  </div>
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Direction Circle */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${principle.gradient} flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500`}
                    >
                      <span className="text-white">{principle.icon}</span>
                    </div>
                    {/* Direction Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-stone-200 flex items-center justify-center shadow-md">
                      <span
                        className={`text-[10px] sm:text-xs font-black ${principle.textAccent}`}
                      >
                        {principle.direction}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-black text-stone-900 group-hover:text-emerald-700 transition-colors duration-300 mb-2 leading-tight">
                    {principle.title}
                  </h3>

                  {/* Position Tag */}
                  <span
                    className={`inline-block px-3 py-1 ${principle.bgLight} ${principle.textAccent} rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3`}
                  >
                    {principle.position}
                  </span>

                  {/* Description */}
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
        </div>

        {/* Summary Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 sm:p-10 lg:p-12 shadow-2xl shadow-emerald-500/20">
            {/* Decorative Circles */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full"></div>

            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30 mx-auto mb-6 rotate-3">
                <FiCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                Built Naturally Into Modern Design
              </h3>

              <p className="text-emerald-50 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                Vastu compliance is built naturally into a functional modern
                layout — no awkward workarounds, no design compromises.
              </p>

              {/* CTA */}
              <button className="mt-8 inline-flex items-center gap-3 px-6 sm:px-8 py-4 bg-white text-emerald-700 font-bold text-sm sm:text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <FiCompass className="w-5 h-5" />
                <span>Get Free Vastu Consultation</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note - Light */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 max-w-2xl mx-auto text-center"
        >
          <p className="text-xs sm:text-sm text-stone-400 flex items-center justify-center gap-2">
            <FiMapPin className="w-4 h-4" />
            Serving Bhubaneswar, Cuttack & all of Odisha
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ModularKitchenVastu;
