"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Pratyush Sahoo",
    role: "Customer",
    text: "Infinity Space transformed our apartment with modern and practical interior designs. The execution quality and finishing were excellent.",
  },
  {
    name: "Fakir Nayak",
    role: "Customer",
    text: "The team delivered our office interiors on time with creative workspace planning and premium finishing.",
  },
  {
    name: "Ashutosh Malick",
    role: "Customer",
    text: "We were looking for interior designers in Bhubaneswar for modular kitchen and wardrobe design solutions. The experience was smooth and highly professional.",
  },
];

export default function TestimonialsSection() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(null);

  /* ---------- RESPONSIVE SLIDES PER VIEW ---------- */
  useEffect(() => {
    const updateSlidesPerView = () => {
      const w = window.innerWidth;
      if (w >= 1024) setSlidesPerView(3);
      else if (w >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  /* ---------- TOTAL DOTS ---------- */
  const totalDots = Math.max(1, testimonials.length - slidesPerView + 1);

  /* keep index valid on resize */
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, totalDots - 1));
  }, [totalDots]);

  /* ---------- AUTOPLAY ---------- */
  useEffect(() => {
    if (isPaused) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev >= totalDots - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(id);
  }, [totalDots, isPaused]);

  /* ---------- TOUCH SWIPE ---------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setActiveIndex((prev) => Math.min(prev + 1, totalDots - 1));
      } else {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    }

    touchStartX.current = null;
  };

  /* ---------- HELPERS ---------- */
  const getInitials = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  const goPrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () =>
    setActiveIndex((prev) => Math.min(prev + 1, totalDots - 1));

  return (
    <section className="relative overflow-hidden bg-[#F7F4EF] py-20 sm:py-24 lg:py-32">
      {/* ================= DECORATIVE BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft green glow */}
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[rgba(1,101,63,0.07)] blur-[130px]" />
        {/* warm gold glow */}
        <div className="absolute -bottom-40 -right-28 h-[460px] w-[460px] rounded-full bg-[rgba(198,160,90,0.16)] blur-[140px]" />
        {/* dotted texture with radial fade */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(1,101,63,0.10) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 72%)",
            maskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 72%)",
          }}
        />
        {/* center vertical hairline */}
        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(1,101,63,0.10)] to-transparent lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          {/* decorative rule */}

          <h2 className="mt-6 text-[30px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px]">
            What Clients Say About{" "}
            <span className="relative inline-block  text-[rgba(1,101,63,1)]">
              Infinity Space
            </span>
          </h2>
        </motion.div>

        {/* ================= SLIDER ================= */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden px-1 py-2">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / slidesPerView)}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-2.5 sm:px-3 md:w-1/2 lg:w-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group relative h-full"
                  >
                    {/* gradient border glow on hover */}
                    <div className="absolute -inset-[1.5px] rounded-[32px] bg-gradient-to-br from-[rgba(1,101,63,0.55)] via-[rgba(198,160,90,0.45)] to-transparent opacity-0 blur-[3px] transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex h-full min-h-[430px] flex-col justify-between overflow-hidden rounded-[30px] border border-[#EAE3D6] bg-white p-8 shadow-[0_18px_50px_-22px_rgba(28,25,20,0.35)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-transparent group-hover:shadow-[0_35px_70px_-25px_rgba(1,101,63,0.40)] sm:p-9">
                      {/* huge watermark quote */}
                      <FaQuoteLeft className="pointer-events-none absolute -right-3 top-4 text-[120px] text-[rgba(1,101,63,0.05)] transition-transform duration-700 group-hover:scale-110 group-hover:text-[rgba(1,101,63,0.08)]" />

                      {/* subtle inner top arc */}
                      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[rgba(198,160,90,0.10)] blur-[60px] transition-opacity duration-500 group-hover:bg-[rgba(198,160,90,0.18)]" />

                      {/* ---------- TOP ---------- */}
                      <div className="relative">
                        <div className="flex items-start justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(1,101,63,1)] to-[rgba(1,101,63,0.72)] text-xl text-white shadow-[0_12px_28px_-10px_rgba(1,101,63,0.85)] transition-transform duration-500 group-hover:-rotate-6">
                            <FaQuoteLeft />
                          </div>

                          <span className="font-serif text-4xl font-bold leading-none text-[#F0EADC] transition-colors duration-500 group-hover:text-[rgba(198,160,90,0.65)]">
                            0{index + 1}
                          </span>
                        </div>

                        <p className="relative mt-8 font-serif text-[16px] leading-[1.9] text-[#55503F] sm:text-[16.5px]">
                          &ldquo;{item.text}&rdquo;
                        </p>
                      </div>

                      {/* ---------- BOTTOM ---------- */}
                      <div className="relative mt-10">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-sm text-[#D8A93B] drop-shadow-[0_2px_4px_rgba(216,169,59,0.35)]"
                            />
                          ))}
                        </div>

                        {/* divider */}
                        <div className="my-6 h-px w-full bg-gradient-to-r from-[#E9E2D5] via-[#E9E2D5] to-transparent" />

                        <div className="flex items-center gap-3.5">
                          {/* initials avatar */}
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(1,101,63,0.18)] bg-[rgba(1,101,63,0.07)] font-serif text-[13px] font-bold tracking-wider text-[rgba(1,101,63,1)] transition-colors duration-500 group-hover:bg-[rgba(1,101,63,0.12)]">
                            {getInitials(item.name)}
                          </div>

                          <div className="min-w-0">
                            <h3 className="truncate text-[17px] font-bold text-[#1D1B18]">
                              {item.name}
                            </h3>
                            <p className="mt-0.5 text-[12.5px] uppercase tracking-[0.14em] text-[#9A927F]">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* bottom glow */}
                      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[rgba(1,101,63,0.14)] opacity-0 blur-[80px] transition-all duration-500 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CONTROLS ================= */}
          <div className="mt-12 flex items-center justify-center gap-5 sm:gap-7">
            {/* PREV */}
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={goPrev}
              disabled={activeIndex === 0}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E2DACB] bg-white text-[13px] text-[rgba(1,101,63,1)] shadow-[0_8px_22px_-12px_rgba(28,25,20,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(1,101,63,0.45)] hover:bg-[rgba(1,101,63,1)] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:border-[#E2DACB] disabled:hover:bg-white disabled:hover:text-[rgba(1,101,63,1)]"
            >
              <FaArrowLeft />
            </button>

            {/* DOTS */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalDots }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={activeIndex === i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-[6px] rounded-full transition-all duration-500 ${
                    activeIndex === i
                      ? "w-9 bg-gradient-to-r from-[rgba(1,101,63,1)] to-[rgba(198,160,90,0.9)]"
                      : "w-[6px] bg-[#D6CEBE] hover:bg-[#BDB3A0]"
                  }`}
                />
              ))}
            </div>

            {/* NEXT */}
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={goNext}
              disabled={activeIndex === totalDots - 1}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E2DACB] bg-white text-[13px] text-[rgba(1,101,63,1)] shadow-[0_8px_22px_-12px_rgba(28,25,20,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(1,101,63,0.45)] hover:bg-[rgba(1,101,63,1)] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:border-[#E2DACB] disabled:hover:bg-white disabled:hover:text-[rgba(1,101,63,1)]"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
