"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiMessageCircle,
  FiGrid,
  FiLayout,
  FiMaximize2,
  FiMinimize2,
  FiSquare,
} from "react-icons/fi";

const KitchenLayouts = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const phoneNumber = "7077797720";
  const whatsappMessage = encodeURIComponent(
    "Hi Infinity Space, I want to know which kitchen layout suits my space. Here are my kitchen dimensions:",
  );

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank",
    );
  };

  const layouts = [
    {
      name: "L-Shaped",
      icon: <FiLayout className="w-5 h-5" />,
      description:
        "The most popular choice for standard apartments — two walls of cabinetry create an efficient work triangle with good natural flow between cooking, prep, and washing zones",
      gradient: "from-emerald-500 to-teal-600",
      textAccent: "text-emerald-600",
      shape: "L",
    },
    {
      name: "U-Shaped",
      icon: <FiMaximize2 className="w-5 h-5" />,
      description:
        "U-Shaped	Larger kitchens with 10ft+ on two adjacent walls. Maximum storage and counter space on three sides — ideal for families who cook seriously and daily",
      gradient: "from-blue-500 to-indigo-600",
      textAccent: "text-blue-600",
      shape: "U",
    },
    {
      name: "Parallel / Galley",
      icon: <FiMinimize2 className="w-5 h-5" />,
      description:
        "Narrow, elongated kitchen spaces. Two facing counters make excellent use of a limited footprint without feeling cramped when well-planned",
      gradient: "from-violet-500 to-purple-600",
      textAccent: "text-violet-600",
      shape: "II",
    },
    {
      name: "Straight / Single Wall",
      icon: <FiMinimize2 className="w-5 h-5 rotate-90" />,
      description:
        "Straight / Single Wall Compact kitchens and studio apartments. Everything on one wall — clean, affordable, and surprisingly functional with the right storage configuration",
      gradient: "from-amber-500 to-orange-600",
      textAccent: "text-amber-600",
      shape: "I",
    },
    {
      name: "Island Kitchen",
      icon: <FiSquare className="w-5 h-5" />,
      description:
        "Open-plan layouts with generous floor area. The island adds prep space, casual seating, and a strong visual centrepiece to the kitchen",
      gradient: "from-rose-500 to-pink-600",
      textAccent: "text-rose-600",
      shape: "O",
    },
    {
      name: "G-Shaped",
      icon: <FiGrid className="w-5 h-5" />,
      description:
        "A U-shape with an additional peninsula on the fourth wall — suits large family kitchens that need a breakfast counter or extra storage built in",
      gradient: "from-teal-500 to-cyan-600",
      textAccent: "text-teal-600",
      shape: "G",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-stone-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="mb-4 mt-6 text-[20px] font-black leading-[1.2] text-black sm:text-[42px] lg:text-[56px]">
            Kitchen Layouts We Design —{" "}
            <span className="text-green-700">
              Find the Right Fit for Your Space
            </span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mt-4">
            The layout is the single most important decision in modular kitchen
            design. Hover over each card to learn more about the layout:
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {layouts.map((layout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.08 * index,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group [perspective:1000px] h-48 sm:h-52 lg:h-56"
              >
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face - Title Only */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div className="relative w-full h-full bg-white rounded-2xl border border-stone-200 shadow-md shadow-stone-200/50 overflow-hidden flex flex-col items-center justify-center p-6">
                      {/* Top gradient line */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${layout.gradient}`}
                      ></div>

                      {/* Decorative Shape */}
                      <div
                        className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br ${layout.gradient} opacity-5 rounded-full`}
                      ></div>

                      {/* Large Shape Letter */}
                      <span
                        className={`text-5xl sm:text-6xl font-black ${layout.textAccent} opacity-15 mb-4 leading-none select-none`}
                      >
                        {layout.shape}
                      </span>

                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${layout.gradient} flex items-center justify-center shadow-lg mb-3`}
                      >
                        <span className="text-white">{layout.icon}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-black text-stone-900 text-center leading-tight">
                        {layout.name}
                      </h3>

                      {/* Hint */}
                      <span className="absolute bottom-3 text-[10px] text-stone-400 flex items-center gap-1">
                        Hover to see details
                        <FiArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* Back Face - Description */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div
                      className={`relative w-full h-full bg-gradient-to-br ${layout.gradient} rounded-2xl shadow-xl overflow-hidden flex flex-col p-6`}
                    >
                      {/* Decorative circles */}
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>

                      <div className="relative flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <span className="text-white">{layout.icon}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                            {layout.name}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-white/90 text-xs sm:text-sm leading-relaxed flex-1">
                          {layout.description}
                        </p>

                        {/* Bottom accent */}
                        <div className="flex items-center gap-2 mt-3">
                          <div className="h-0.5 w-8 rounded-full bg-white/60"></div>
                          <div className="h-0.5 w-4 rounded-full bg-white/40"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom WhatsApp CTA - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 sm:mt-12 max-w-3xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 sm:p-8 shadow-xl shadow-emerald-500/20">
              {/* Decorative */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

              <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <FiMessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1">
                    💡 Not sure which layout suits your kitchen?
                  </h4>
                  <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed">
                    Share your kitchen dimensions on WhatsApp. Our designers
                    will recommend the right layout within 24 hours — free.
                  </p>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="flex-shrink-0 group inline-flex items-center gap-2 px-5 py-3 bg-white text-emerald-700 font-bold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat Now</span>
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KitchenLayouts;
