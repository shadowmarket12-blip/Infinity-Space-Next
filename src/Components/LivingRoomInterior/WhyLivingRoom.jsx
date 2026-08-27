"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const WhyChooseUsPremium = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  const features = [
    {
      id: "01",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: "Every Room Talks to the Next",
      subtitle: "We Design Systems, Not Isolated Spaces",
      description:
        "Your living room is always designed in conversation with the rest of your home — palette flows into the dining area, materials connect to the corridor, lighting logic carries through. The result feels intentionally designed end to end, not assembled room by room.",
      highlight: "Designed end to end, not assembled room by room.",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50",
      borderLight: "border-emerald-200",
      textAccent: "text-emerald-600",
      iconBg: "bg-emerald-100",
    },
    {
      id: "02",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "20–35 Day Delivery",
      subtitle: "Written Timeline Before We Start",
      description:
        "You receive a written, milestone-based schedule before a single rupee is paid. Every stage has a committed date. Most living room projects in Bhubaneswar are complete and handed over within 20 to 35 days from design approval.",
      highlight: "Written milestone-based schedule before payment.",
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50",
      borderLight: "border-blue-200",
      textAccent: "text-blue-600",
      iconBg: "bg-blue-100",
      badge: "20-35 Days",
    },
    {
      id: "03",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "We Handle the Chaos",
      subtitle: "You Just Show Up at Handover",
      description:
        "We coordinate every trade — carpenters, electricians, painters, false ceiling contractors — scheduling, supervising, and quality-checking so everything runs in sequence. WhatsApp updates at every milestone. You show up at handover to a finished room.",
      highlight: "WhatsApp updates at every milestone.",
      color: "violet",
      gradient: "from-violet-500 to-purple-600",
      bgLight: "bg-violet-50",
      borderLight: "border-violet-200",
      textAccent: "text-violet-600",
      iconBg: "bg-violet-100",
    },
    {
      id: "04",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      title: "Free 3D Design",
      subtitle: "See It Before You Build It",
      description:
        "Before any fabrication begins, you see your living room in photorealistic 3D — TV unit finish, feature wall texture, ceiling lighting, full spatial composition. You approve when you love it. Included as standard, not as a paid add-on.",
      highlight: "Included as standard, not a paid add-on.",
      color: "amber",
      gradient: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50",
      borderLight: "border-amber-200",
      textAccent: "text-amber-600",
      iconBg: "bg-amber-100",
      badge: "Free",
    },
    {
      id: "05",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Transparent Pricing",
      subtitle: "Line by Line, No Surprises",
      description:
        "Every quotation is itemised — every material, every unit, every fitting named and priced individually. The invoice at completion matches the approved quote. No hidden charges, no last-minute additions.",
      highlight: "Invoice matches approved quote. No surprises.",
      color: "rose",
      gradient: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50",
      borderLight: "border-rose-200",
      textAccent: "text-rose-600",
      iconBg: "bg-rose-100",
    },
  ];

  const handleFeatureClick = useCallback((index) => {
    setActiveFeature(index);
    setUserInteracted(true);
    setIsAutoPlaying(false);

    setTimeout(() => {
      setUserInteracted(false);
      setIsAutoPlaying(true);
    }, 8000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || userInteracted) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, userInteracted, features.length]);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 lg:py-15 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Why Bhubaneswar Homeowners{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-green-700">
                Choose Infinity Space
              </span>
            </span>
          </h2>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            {/* Left Side - Feature Navigation (Hidden on Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block lg:col-span-2 space-y-2"
            >
              {features.map((feature, index) => (
                <motion.button
                  key={feature.id}
                  onClick={() => handleFeatureClick(index)}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left group relative px-5 py-3.5 rounded-xl transition-all duration-500 cursor-pointer ${
                    activeFeature === index
                      ? `${feature.bgLight} border ${feature.borderLight} shadow-lg`
                      : "bg-white border border-transparent hover:border-stone-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-bold text-sm transition-colors duration-300 ${
                          activeFeature === index
                            ? "text-stone-900"
                            : "text-stone-600 group-hover:text-stone-800"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>

                    <div
                      className={`flex-shrink-0 transition-all duration-500 ${
                        activeFeature === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 ${feature.textAccent}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-gradient-to-b ${feature.gradient} transition-all duration-500 ${
                      activeFeature === index
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-0"
                    }`}
                  ></div>
                </motion.button>
              ))}
            </motion.div>

            {/* Right Side - Feature Detail Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-3 lg:sticky lg:top-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.97 }}
                  transition={{ duration: 0.5 }}
                  className={`relative rounded-3xl overflow-hidden border ${features[activeFeature].borderLight} shadow-2xl`}
                >
                  <div
                    className={`absolute inset-0 ${features[activeFeature].bgLight}`}
                  ></div>

                  <div
                    className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${features[activeFeature].gradient} opacity-10 rounded-full blur-3xl`}
                  ></div>
                  <div
                    className={`absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr ${features[activeFeature].gradient} opacity-10 rounded-full blur-3xl`}
                  ></div>

                  <div className="relative p-6 sm:p-8 lg:p-10">
                    {/* Icon with Background - Smaller Size */}
                    <div className="mb-6">
                      <motion.div
                        key={`icon-${activeFeature}`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          duration: 0.6,
                        }}
                        className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${features[activeFeature].gradient} shadow-lg shadow-${features[activeFeature].color}-500/25 rotate-3 hover:rotate-0 transition-transform duration-300`}
                      >
                        <span className="text-white">
                          {features[activeFeature].icon}
                        </span>
                      </motion.div>
                    </div>

                    {/* Badge */}
                    {features[activeFeature].badge && (
                      <div className="mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${features[activeFeature].gradient} text-white text-xs font-bold rounded-full`}
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          {features[activeFeature].badge}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="space-y-4">
                      {/* Subtitle */}
                      <p
                        className={`text-sm font-semibold ${features[activeFeature].textAccent} uppercase tracking-wider`}
                      >
                        {features[activeFeature].subtitle}
                      </p>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 leading-tight">
                        {features[activeFeature].title}
                      </h3>

                      <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                        {features[activeFeature].description}
                      </p>

                      {/* Progress Dots */}
                      <div className="flex items-center justify-center gap-2 pt-4">
                        {features.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleFeatureClick(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                              activeFeature === index
                                ? `w-8 bg-gradient-to-r ${features[activeFeature].gradient}`
                                : "w-2 bg-stone-300 hover:bg-stone-400"
                            }`}
                            aria-label={`View feature ${index + 1}`}
                          ></button>
                        ))}
                      </div>

                      {/* Mobile Swipe Hint */}
                      <div className="lg:hidden flex items-center justify-center gap-2 text-xs text-stone-400 pt-1">
                        <span>Tap dots to explore</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsPremium;
