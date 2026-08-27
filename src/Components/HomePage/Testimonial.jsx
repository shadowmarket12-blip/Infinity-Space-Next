"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mt-5 text-2xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-5xl">
            What Clients Say About Infinity Space
          </h2>
        </motion.div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group px-2"
              >
                <div className="relative flex min-h-[420px] flex-col justify-between rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-[rgba(1,101,63,0.25)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                  {/* Quote */}
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(1,101,63,0.08)] text-3xl text-[rgba(1,101,63,1)]">
                      <FaQuoteLeft />
                    </div>

                    <p className="mt-8 text-[15px] leading-8 text-gray-600">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-10">
                    <div className="mb-6 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-sm text-yellow-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Glow */}
                  <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[rgba(1,101,63,0.10)] opacity-0 blur-[80px] transition-all duration-500 group-hover:opacity-100" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
