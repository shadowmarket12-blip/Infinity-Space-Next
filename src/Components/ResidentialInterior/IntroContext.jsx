"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiArrowDown } from "react-icons/fi";
import Link from "next/link";

const IntroContextSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-10 overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-stone-50 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-50 rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-6xl">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 mb-15 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px] text-center"
        >
          Why Home Interior Design in{" "}
          <span className="relative inline-block">
            <span className="text-green-700">Bhubaneswar Demands</span>
          </span>{" "}
          a Local Expert
        </motion.h2>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Paragraph 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-stone-600 text-base sm:text-lg lg:text-xl leading-relaxed text-center sm:text-left">
              Bhubaneswar is one of Eastern India's fastest-evolving cities — a
              place where ancient temple architecture and modern smart-city
              ambitions exist side by side. Apartment complexes are rising
              across Khandagiri, Niladri Vihar, and Gothapatna. Independent
              homes in Nayapalli and Unit-I are being renovated to match
              contemporary lifestyles. The city's design sensibility is
              distinctly its own: layered, warm, culturally rooted, and
              increasingly global in its aspirations.
            </p>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <p className="text-stone-600 text-base sm:text-lg lg:text-xl leading-relaxed text-center sm:text-left">
              <Link href="/blogs" className="font-bold text-black">
                Home interior design in Bhubaneswar
              </Link>{" "}
              therefore requires something that most generic interior firms
              cannot offer — genuine local knowledge. Knowing that Bhubaneswar
              summers push temperatures above 40°C means specifying
              heat-resistant laminates and prioritising ventilation in kitchen
              layouts. Understanding that Odisha's cyclone seasons bring high
              humidity means choosing marine-grade plywood and waterproof
              finishes rather than cheaper alternatives that warp or delaminate
              within a year. Recognising the cultural importance of the pooja
              room, the festival gathering space, and the joint-family dining
              arrangement means designing homes that honour how Bhubaneswar
              families actually live.
            </p>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <p className="text-stone-700 text-base sm:text-lg lg:text-xl leading-relaxed text-center font-medium">
              This is the design philosophy at{" "}
              <span className="font-bold text-stone-900">
                Infinity Space Odisha
              </span>
              . As a{" "}
              <Link href="/" className="font-bold text-black">
                trusted interior design company in Bhubaneswar
              </Link>{" "}
              with roots in this city, we bring every one of these insights to
              every project we take on — large or small, new construction or
              renovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroContextSection;
