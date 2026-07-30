"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LivingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const designSteps = [
    {
      step: "01",
      title: "Free Consultation",
      icon: "🤝",
      description:
        "We visit your home or meet at our studio — assess the space, understand your vision, discuss your budget honestly",
      image: "/Residentialimages/Free Consultation-Site Visit.webp",
    },
    {
      step: "02",
      title: "Free 3D Design",
      icon: "🎨",
      description:
        "Complete living room concept: floor plan, photorealistic 3D renders, material board, and lighting plan",
      image: "/Residentialimages/Design Concept-Free 3D Visualisation.webp",
    },
    {
      step: "03",
      title: "Materials & Quote Approval",
      icon: "📋",
      description:
        "You select materials in person at our studio. We present a full itemised quotation. Work begins only after your approval",
      image: "/Residentialimages/Material Selection.webp",
    },
    {
      step: "04",
      title: "Fabrication & Execution",
      icon: "🔨",
      description:
        "TV units and panels are fabricated off-site. Our on-site team installs false ceiling, painting, electrics, and all carpentry — with WhatsApp updates throughout.",
      image: "/Residentialimages/Execution.webp",
    },
    {
      step: "05",
      title: "Quality Check & Handover",
      icon: "✨",
      description:
        "Full pre-handover inspection. Every snag resolved. Living room handed over ready to live in — and photograph",
      image: "/Quality-Walkthrough-Handover.webp",
    },
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
            <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[56px]">
              How We Work Your Living{" "}
              <span className="text-green-700">Room Project, Step by Step</span>
            </h2>
          </div>

          {/* Process Timeline */}
          <div className="max-w-7xl mx-auto">
            {/* Step Navigation */}
            <div className="hidden lg:flex justify-between mb-12 relative">
              {/* Connection Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-stone-200">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-600 to-green-500"
                  initial={{ width: "0%" }}
                  whileInView={{
                    width: `${(activeStep / (designSteps.length - 1)) * 100}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>

              {designSteps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative z-10 flex flex-col items-center gap-2 transition-all duration-300 ${
                    activeStep === index
                      ? "text-green-700"
                      : "text-stone-400 hover:text-stone-600"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                      activeStep === index
                        ? "bg-gradient-to-br from-green-600 to-green-500 text-white shadow-lg shadow-green-500/25"
                        : "bg-white text-stone-400 border-2 border-stone-200 hover:border-green-300"
                    }`}
                  >
                    {step.step}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Active Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-stone-200 shadow-xl shadow-stone-900/5 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Content Side */}
                  <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <span className="text-3xl sm:text-4xl lg:text-5xl">
                        {designSteps[activeStep].icon}
                      </span>
                      <div>
                        <span className="text-green-600 font-bold text-xs lg:text-sm tracking-wider">
                          STEP {designSteps[activeStep].step}
                        </span>
                        <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-stone-900 mt-1">
                          {designSteps[activeStep].title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4 lg:mb-6">
                      {designSteps[activeStep].description}
                    </p>

                    {/* Mobile Step Navigation */}
                    <div className="flex gap-2 mt-6 lg:hidden">
                      {designSteps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStep(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            activeStep === index
                              ? "w-8 bg-green-600"
                              : "w-2 bg-stone-300 hover:bg-stone-400"
                          }`}
                        ></button>
                      ))}
                    </div>
                  </div>

                  {/* Image Side - Using Next.js Image component */}
                  <div className="relative h-64 sm:h-72 lg:h-96 overflow-hidden flex items-center justify-center bg-stone-100">
                    <Image
                      src={designSteps[activeStep].image}
                      alt={designSteps[activeStep].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-l lg:from-black/60 lg:via-black/20 lg:to-transparent"></div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-16 lg:w-20 h-16 lg:h-20 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-12 lg:w-14 h-12 lg:h-14 border border-white/20 rounded-full"></div>
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

export default LivingProcess;
