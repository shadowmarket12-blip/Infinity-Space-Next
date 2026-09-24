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

const BedroomFinish = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const layouts = [
    {
      name: "From Idea to Finished Space",
      icon: <FiLayout className="w-5 h-5" />,
      description:
        "We start with a conversation about your bedroom, lifestyle, storage needs, preferred design, budget and what you want to change.",
      gradient: "from-emerald-500 to-teal-600",
      shape: "L",
      image: "/modular-kitchen-page/L-Shaped Kitche.webp",
    },
    {
      name: "We Study the Space",
      icon: <FiMaximize2 className="w-5 h-5" />,
      description:
        "We look at the room dimensions, doors, windows, electrical points and available wall space to understand what can realistically be done.",
      gradient: "from-blue-500 to-indigo-600",
      shape: "U",
      image: "/modular-kitchen-page/U-Shaped-Kitche.webp",
    },
    {
      name: "We Plan the Layout",
      icon: <FiMinimize2 className="w-5 h-5" />,
      description:
        "The bed, wardrobe, dressing unit, storage and other furniture are planned together so that the room remains functional and comfortable.",
      gradient: "from-violet-500 to-purple-600",
      shape: "II",
      image: "/modular-kitchen-page/Parallel-Kitche.webp",
    },
    {
      name: "We Develop the Design",
      icon: <FiMinimize2 className="w-5 h-5 rotate-90" />,
      description:
        "Once the layout is clear, we work on the colours, materials, finishes, lighting, wall treatments and other design details.",
      gradient: "from-amber-500 to-orange-600",
      shape: "I",
      image: "/modular-kitchen-page/straight-kitchen-desig.webp",
    },
    {
      name: "We Discuss Materials and Cost",
      icon: <FiSquare className="w-5 h-5" />,
      description:
        "We discuss the proposed materials, finishes and scope of work and prepare the quotation based on the requirements.",
      gradient: "from-rose-500 to-pink-600",
      shape: "O",
      image: "/modular-kitchen-page/Island-Kitche.webp",
    },
    {
      name: "We Move Towards Execution",
      icon: <FiGrid className="w-5 h-5" />,
      description:
        "After the design and scope are finalised, the required furniture and interior elements move into execution and installation. Throughout the process, our focus remains on keeping the design aligned with the original requirements rather than adding unnecessary elements.",
      gradient: "from-teal-500 to-cyan-600",
      shape: "G",
      image: "/modular-kitchen-page/Countertop — Granit.webp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-10 overflow-hidden "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            How We Take Your Bedroom{" "}
            <span className="text-green-700">From Idea to Finished Space</span>
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
                className="group [perspective:1000px] h-56 sm:h-64 lg:h-72"
              >
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face - Image Only */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div className="relative w-full h-full rounded-2xl shadow-lg overflow-hidden">
                      {/* Background Image */}
                      <img
                        src={layout.image}
                        alt={layout.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Subtle gradient at bottom for name visibility */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>

                      {/* Name overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-black text-lg sm:text-xl leading-tight drop-shadow-lg">
                          {layout.name}
                        </h3>
                        <div
                          className={`h-1 w-12 bg-gradient-to-r ${layout.gradient} rounded-full mt-2`}
                        ></div>
                      </div>

                      {/* Hover hint */}
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FiArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Back Face - Description with Gradient */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div
                      className={`relative w-full h-full bg-gradient-to-br ${layout.gradient} rounded-2xl shadow-xl overflow-hidden flex flex-col p-6`}
                    >
                      {/* Decorative circles */}
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>

                      <div className="relative flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <span className="text-white">{layout.icon}</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                            {layout.name}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-white/95 text-xs sm:text-sm leading-relaxed flex-1">
                          {layout.description}
                        </p>

                        {/* Bottom accent */}
                        <div className="flex items-center gap-2 mt-4">
                          <div className="h-0.5 w-8 rounded-full bg-white/60"></div>
                          <div className="h-0.5 w-4 rounded-full bg-white/40"></div>
                          <span className="text-white/70 text-xs ml-auto">
                            Back to image
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BedroomFinish;
