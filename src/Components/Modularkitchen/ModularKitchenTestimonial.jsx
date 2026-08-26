"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiCheckCircle,
  FiHome,
  FiMapPin,
} from "react-icons/fi";

const ModularKitchenTestimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Suryakanta & Sujata Dash",
      project: "U-Shaped Modular Kitchen",
      location: "Nayapalli, Bhubaneswar",
      rating: 5,
      text: "Two years in and the cabinets look exactly as they did on day one. The soft-close hinges still work perfectly, the acrylic shutters have not dulled, and the pull-out baskets are still smooth. I was sceptical about paying for Hettich hardware at the time. I am not sceptical anymore.",
      initials: "SD",
      highlight: "Long-lasting quality",
    },
    {
      name: "Srikanta Sahoo",
      project: "L-Shaped Modular Kitchen",
      location: "Patia, Bhubaneswar",
      rating: 5,
      text: "Our kitchen is not large — it is L-shaped and fairly compact. The team maximised every corner: magic corner unit, pull-out baskets in every lower cabinet, overhead lofts right to the ceiling. It holds nearly twice the storage of our previous kitchen in the same footprint. The 3D design made all the difference — we approved every detail before they built anything.",
      initials: "SS",
      highlight: "Smart storage",
    },
  ];

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 leading-tight">
                What Our <span className="text-green-700">Clients Say</span>
              </h2>
              <div className="flex items-center gap-3 justify-center mt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-stone-500 text-sm font-medium">
                  5.0 Rating on Google
                </span>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="max-w-4xl mx-auto relative">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl border border-stone-200 shadow-2xl shadow-stone-900/5 overflow-hidden p-6 sm:p-8 lg:p-10">
                    {/* Top Section - Profile & Rating */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 pb-6 border-b border-stone-100">
                      {/* Avatar */}
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center border-2 border-stone-100 shadow-sm">
                        <span className="text-xl sm:text-2xl font-bold text-stone-700">
                          {testimonials[activeTestimonial].initials}
                        </span>
                      </div>

                      {/* Name & Info */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-1">
                          {testimonials[activeTestimonial].name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-stone-500 text-sm">
                          <span className="inline-flex items-center gap-1.5 bg-stone-50 px-2.5 py-1 rounded-lg">
                            <FiHome className="w-3.5 h-3.5" />
                            {testimonials[activeTestimonial].project}
                          </span>
                          <span className="inline-flex items-center gap-1.5 bg-stone-50 px-2.5 py-1 rounded-lg">
                            <FiMapPin className="w-3.5 h-3.5" />
                            {testimonials[activeTestimonial].location}
                          </span>
                        </div>
                      </div>

                      {/* Rating & Badge */}
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-0.5">
                          {[
                            ...Array(testimonials[activeTestimonial].rating),
                          ].map((_, i) => (
                            <FiStar
                              key={i}
                              className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                          <FiCheckCircle className="w-3 h-3" />
                          {testimonials[activeTestimonial].highlight}
                        </span>
                      </div>
                    </div>

                    {/* Quote Section */}
                    <div className="relative mb-6">
                      {/* Large Quote Mark */}
                      <div className="absolute -top-4 -left-2 text-5xl sm:text-6xl text-amber-200 leading-none select-none">
                        ❝
                      </div>
                      <p className="text-stone-600 text-base sm:text-lg leading-relaxed pl-8 sm:pl-10">
                        {testimonials[activeTestimonial].text}
                      </p>
                    </div>

                    {/* Bottom - Google Verified */}
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        <span className="text-stone-400 text-xs sm:text-sm">
                          Verified Google Review
                        </span>
                      </div>
                      <div className="text-stone-400 text-xs sm:text-sm">
                        {activeTestimonial + 1} / {testimonials.length}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 shadow-md"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2 px-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        activeTestimonial === index
                          ? "w-8 h-2.5 bg-stone-900"
                          : "w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 shadow-md"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Auto-play indicator */}
              <div className="text-center mt-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
                >
                  {isAutoPlaying ? "⏸ Pause" : "▶ Play"} auto-rotate
                </button>
              </div>
            </div>
          </div>

          {/* Google Reviews Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://www.google.com/search?sca_esv=50cabc64150e6c10&rlz=1C1VDKB_enIN1000IN1000&sxsrf=APpeQnvfjGsASXnp-88aX1cgema5LrEoHw:1783407092890&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-__V505ub1tZUSvY0KMT5YnofGD62dl0thf09XX6sjAIbJhRdIX5e23_beFt--uu2oafBGvL7vq8Gt8UA1dqOofV5G9S&q=Infinity+Space+Reviews&sa=X&ved=2ahUKEwiWooaS_b-VAxVjXGcHHeg8Gh4Q0bkNegQIOhAH&biw=1536&bih=776&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-stone-800 transition-all duration-300 group shadow-lg shadow-stone-900/20"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              See All Google Reviews
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModularKitchenTestimonial;
