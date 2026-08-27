// src/app/Whytwo.jsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPalette,
  FaDraftingCompass,
  FaGem,
  FaUserTie,
  FaClipboardList,
  FaClock,
} from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    title: "Customized Design Approach",
    desc: "Every interior is designed according to your lifestyle, functionality, and aesthetic preferences.",
    icon: <FaPalette />,
    color: "from-green-400 to-emerald-700",
  },
  {
    title: "Smart Space Planning",
    desc: "We maximize every corner with practical layouts and intelligent storage solutions.",
    icon: <FaDraftingCompass />,
    color: "from-emerald-400 to-green-600",
  },
  {
    title: "Premium Materials & Finishes",
    desc: "High-quality materials and modern finishes ensure durability and elegance.",
    icon: <FaGem />,
    color: "from-green-500 to-emerald-700",
  },
  {
    title: "Experienced Interior Designers",
    desc: "Creative planning combined with professional project execution for every space.",
    icon: <FaUserTie />,
    color: "from-green-500 to-green-700",
  },
  {
    title: "Transparent Project Execution",
    desc: "Clear communication regarding materials, timelines, and execution stages.",
    icon: <FaClipboardList />,
    color: "from-green-500 to-green-700",
  },
  {
    title: "Timely Delivery Commitment",
    desc: "Organized project management ensures efficient and timely completion.",
    icon: <FaClock />,
    color: "from-green-500 to-green-700",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-[rgba(1,101,63,0.06)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[rgba(1,101,63,0.08)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px]">
            Why Infinity Space is a Preferred
            <span className="text-green-700"> Interior Design Company </span>
            <br className="hidden sm:block" />
            in Bhubaneswar
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT SIDE */}
          <div className="relative flex items-center justify-center py-10 lg:w-[38%]">
            {/* Glow */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-[rgba(1,101,63,0.12)] blur-[90px]" />

            {/* Floating Circle */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="relative z-20 flex h-[240px] w-[240px] items-center justify-center rounded-full bg-white border-[10px] border-[rgba(1,101,63,0.08)] shadow-[0_30px_80px_rgba(1,101,63,0.15)] sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px]"
            >
              <Image
                src="/logo.png"
                alt="Infinity Space"
                width={238}
                height={238}
                className="w-[70%] object-contain"
                priority
              />
            </motion.div>

            {/* Orbit Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[320px] w-[320px] rounded-full border-2 border-dashed border-[rgba(1,101,63,0.18)] sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px]"
            >
              {/* Dot 1 */}
              <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-[rgba(1,101,63,1)]" />
              {/* Dot 2 */}
              <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[rgba(1,101,63,0.8)]" />
              {/* Dot 3 */}
              <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[rgba(1,101,63,0.6)]" />
              {/* Dot 4 */}
              <div className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[rgba(1,101,63,0.9)]" />
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full max-w-2xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group rounded-2xl border border-[rgba(1,101,63,0.08)] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-[0_15px_30px_rgba(1,101,63,0.12)]"
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-sm text-white shadow-lg sm:h-11 sm:w-11 sm:text-base`}
                  >
                    {item.icon}
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="mt-3 text-sm font-bold text-black sm:text-base">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm">
                    {item.desc}
                  </p>

                  {/* LINE */}
                  <div className="mt-3 h-[2px] w-0 rounded-full bg-[rgba(1,101,63,1)] transition-all duration-300 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
