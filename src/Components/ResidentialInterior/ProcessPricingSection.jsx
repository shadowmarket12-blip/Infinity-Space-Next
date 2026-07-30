"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ProcessPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activePricingTab, setActivePricingTab] = useState("2BHK");
  const [showAllFactors, setShowAllFactors] = useState(false);

  const phoneNumber = "7077797720";

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const designSteps = [
    {
      step: "01",
      title: "Free Consultation & Site Visit",
      icon: "🤝",
      description:
        "Your journey begins with a free, no-obligation consultation — at your home or at our studio, whichever works for you. We listen to your vision, study your floor plan, assess natural light and ventilation, and discuss your budget and timeline with complete honesty. This first meeting is the foundation of everything that follows.",
      highlight:
        "This first meeting is the foundation of everything that follows.",
      details: [
        "In-home or studio consultation",
        "Floor plan analysis",
        "Natural light & ventilation assessment",
        "Honest budget & timeline discussion",
      ],
      image: "/Residentialimages/Free Consultation-Site Visit.webp",
    },
    {
      step: "02",
      title: "Design Concept & Free 3D Visualisation",
      icon: "🎨",
      description:
        "Our design team creates a comprehensive concept for your home: floor plans, 3D renders of every room, material boards, colour palettes, and lighting plans. You can see exactly what your home will look like before a single piece of work begins. We refine the design through as many feedback rounds as needed — there is no clock running until you are genuinely happy.",
      highlight:
        "We refine the design through as many feedback rounds as needed — there is no clock running until you are genuinely happy.",
      details: [
        "Detailed floor plans",
        "3D renders of every room",
        "Material & color boards",
        "Unlimited design revisions",
      ],
      image: "/Residentialimages/Design Concept-Free 3D Visualisation.webp",
    },
    {
      step: "03",
      title: "Material Selection & Transparent Quotation",
      icon: "📋",
      description:
        "Once the design is finalised, we guide you through material selection at our studio — touching and comparing finishes, laminates, handles, and tile samples in person. We then prepare a detailed, itemised cost quotation with zero hidden charges. You approve every line item before we proceed.",
      highlight: "You approve every line item before we proceed.",
      details: [
        "In-studio material selection",
        "Physical sample comparison",
        "Itemised cost quotation",
        "Zero hidden charges guarantee",
      ],
      image: "/Residentialimages/Material Selection.webp",
    },
    {
      step: "04",
      title: "Execution — Civil, Carpentry, Electrical & Painting",
      icon: "🔨",
      description:
        "Our experienced on-site team handles all trade coordination: civil work, false ceilings, carpentry fabrication, electrical fittings, painting, and installations. Your project manager supervises every stage and ensures quality at each checkpoint.",
      highlight:
        "Regular photographic updates keep you informed throughout the execution phase.",
      details: [
        "Dedicated project manager",
        "All trade coordination",
        "Quality checkpoints",
        "Regular photo updates via WhatsApp",
      ],
      image: "/Residentialimages/Execution.webp",
    },
    {
      step: "05",
      title: "Quality Walkthrough & Handover",
      icon: "✨",
      description:
        "Before handover, we conduct a thorough quality inspection and resolve any snags to your complete satisfaction. We then give you a final walkthrough of your finished home, hand over all material documentation and warranty cards, and remain available for any after-service needs.",
      highlight:
        "We remain available for any after-service needs — our relationship doesn't end at handover.",
      details: [
        "Thorough quality inspection",
        "Snag resolution",
        "Documentation & warranty handover",
        "Continued after-service support",
      ],
      image: "/Quality-Walkthrough-Handover.webp",
    },
  ];

  const pricingData = {
    "1BHK": {
      budget: "₹1.80 – 2.50 Lakhs",
      premium: "₹3.00 – 5.00 Lakhs",
      size: "Up to 600 sq.ft",
      image: "/Residentialimages/1 BHK Flat.webp",
      popular: false,
    },
    "2BHK": {
      budget: "₹3.50 – 5.50 Lakhs",
      premium: "₹6.00 – 10.00 Lakhs",
      size: "700–1,100 sq.ft",
      image: "/Residentialimages/2 BHK Flat.webp",
      popular: true,
    },
    "3BHK": {
      budget: "₹6.00 – 9.00 Lakhs",
      premium: "₹10.00 – 18.00 Lakhs",
      size: "1,100–1,600 sq.ft",
      image: "/Residentialimages/3 BHK Flat.webp",
      popular: true,
    },
    "4BHK": {
      budget: "₹10.00 – 15.00 Lakhs",
      premium: "₹18.00 – 30.00 Lakhs",
      size: "Row House",
      image: "/Residentialimages/4 BHK Flat.webp",
      popular: false,
    },
    Villa: {
      budget: "₹15.00 – 25.00 Lakhs",
      premium: "₹30.00 – 60.00+ Lakhs",
      size: "Independent Villa",
      image: "/Residentialimages/Independent Villa.webp",
      popular: false,
    },
    Kitchen: {
      budget: "₹1.20 – 2.50 Lakhs",
      premium: "₹2.50 – 5.00 Lakhs",
      size: "Modular Kitchen",
      image: "/Residentialimages/Modular Kitchen.webp",
      popular: false,
    },
    Bedroom: {
      budget: "₹80,000 – 1.50 Lakhs",
      premium: "₹1.50 – 3.00 Lakhs",
      size: "Single Bedroom",
      image: "/Residentialimages/Bedroom Interior Design.webp",
      popular: false,
    },
  };

  const costFactors = [
    {
      icon: "📏",
      title: "Home Size & BHK Type",
      description:
        "The single largest cost factor — more rooms means more material, more fabrication, and more site management time",
    },
    {
      icon: "📋",
      title: "Scope of Work",
      description:
        "Full turnkey is more comprehensive than partial (e.g., kitchen-only or wardrobe-only projects)",
    },
    {
      icon: "🎨",
      title: "Material Selection",
      description:
        "Laminates and PVC start affordable; veneers, acrylics, solid wood, and Italian finishes are premium",
    },
    {
      icon: "✨",
      title: "Design Complexity",
      description:
        "Minimalist interiors cost less than intricate traditional or eclectic styles requiring detailed craftsmanship",
    },
    {
      icon: "🏗️",
      title: "Civil Work Involvement",
      description:
        "False ceilings, electrical rework, wall demolitions, and plumbing changes add to the overall budget",
    },
    {
      icon: "🔧",
      title: "Brand of Hardware & Fittings",
      description:
        "Entry-level to premium brands (Hettich, Blum, Hafele) create significant variation in the cost of kitchens and wardrobes",
    },
    {
      icon: "🎯",
      title: "Customisation Level",
      description:
        "Custom-designed furniture and unique storage solutions cost 20–30% more than catalogue-standard modular items",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-stone-50 to-white py-10 lg:py-15 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-100/50 rounded-full filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ============ DESIGN PROCESS SECTION ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[56px]">
              How We Work — Our Home Interior{" "}
              <span className="text-green-700">
                Design Process in Bhubaneswar
              </span>
            </h2>

            <p className="text-stone-700 mt-3 lg:mt-4 leading-relaxed text-sm sm:text-base">
              We follow a transparent, client-first process that keeps you
              informed, in control, and confident at every stage. Here is
              exactly what happens when you choose Infinity Space Odisha for
              your <b>home interior design in Bhubaneswar:</b>
            </p>
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

        {/* ============ PRICING SECTION  ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="mt-6 text-[20px] font-black leading-[1.2] text-black sm:text-[42px] lg:text-[56px]">
              Home Interior Design{" "}
              <span className="text-green-700">Cost in Bhubaneswar</span>
            </h2>
            <p className="text-stone-700 mt-3 lg:mt-4 leading-relaxed text-sm sm:text-base">
              One of the most important decisions in any home interior project
              is budgeting — and at Infinity Space Odisha, we believe you
              deserve complete clarity before committing to anything. Below is
              our honest guide to{" "}
              <b>home interior design costs in Bhubaneswar:</b>
            </p>
          </div>

          {/* Pricing Cards - New Design */}
          <div className="max-w-6xl mx-auto mb-12">
            {/* Pricing Tabs — scrollable on mobile/tablet, wrapped+centered on desktop */}
            <div className="mb-8 lg:mb-10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
              <div className="flex lg:flex-wrap items-center gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible lg:justify-center pb-2 lg:pb-0 scrollbar-hide snap-x snap-mandatory lg:snap-none">
                {Object.keys(pricingData).map((key) => (
                  <motion.button
                    key={key}
                    onClick={() => setActivePricingTab(key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex-shrink-0 whitespace-nowrap snap-start px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      activePricingTab === key
                        ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/25"
                        : "bg-white text-stone-600 hover:bg-green-50 border border-stone-200 hover:border-green-300"
                    }`}
                  >
                    {key}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Active Pricing Card - Redesigned */}
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
                        {activePricingTab} Interior Design
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

          {/* Cost Factors */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 text-center mb-8 lg:mb-10">
              What Drives the Cost of Home Interior Design in Bhubaneswar?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
              {costFactors
                .slice(0, showAllFactors ? costFactors.length : 4)
                .map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-5 lg:p-6 border border-stone-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="text-2xl lg:text-3xl mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {factor.icon}
                    </div>
                    <h4 className="font-semibold text-stone-900 mb-2 text-xs lg:text-sm">
                      {factor.title}
                    </h4>
                    <p className="text-stone-500 text-[11px] lg:text-xs leading-relaxed">
                      {factor.description}
                    </p>
                  </motion.div>
                ))}
            </div>

            {costFactors.length > 4 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllFactors(!showAllFactors)}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white border border-stone-300 text-stone-700 text-sm font-medium rounded-full hover:border-green-400 hover:text-green-600 transition-all duration-300"
                >
                  {showAllFactors
                    ? "Show Less Factors"
                    : "View All Cost Factors"}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${showAllFactors ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessPricingSection;
