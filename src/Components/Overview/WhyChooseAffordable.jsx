"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiUsers,
  FiGrid,
  FiMessageSquare,
  FiPenTool,
  FiShield,
} from "react-icons/fi";

export default function WhyChooseAffordable() {
  const features = [
    {
      icon: <FiAward />,
      title: "Affordable Yet Premium Design Approach",
      description:
        "We focus on creating interiors that feel sophisticated, practical, and comfortable while maintaining balanced and cost-effective project planning.",
    },
    {
      icon: <FiUsers />,
      title: "Personalized Design Solutions",
      description:
        "Every project is designed according to your lifestyle, usability requirements, budget preferences, and available space instead of using repetitive templates.",
    },
    {
      icon: <FiGrid />,
      title: "Smart Space Utilization",
      description:
        "We optimize layouts, storage planning, furniture placement, and movement flow to maximize functionality within the available area.",
    },
    {
      icon: <FiMessageSquare />,
      title: "Transparent Project Coordination",
      description:
        "Clear communication, organized workflow, planned timelines, and efficient execution help create a smoother project experience.",
    },
    {
      icon: <FiPenTool />,
      title: "Experienced Interior Designers in Bhubaneswar",
      description:
        "Our team combines creative thinking, practical planning, technical understanding, and execution expertise to create thoughtfully designed spaces.",
    },
    {
      icon: <FiShield />,
      title: "Quality Materials & Long-Term Value",
      description:
        "We focus on durable materials, refined finishes, and practical design choices that improve both aesthetics and long-term usability.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 sm:py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-green-500/10 blur-[140px]" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px]">
            Why Choose Infinity Space for
            <span className="text-green-700"> Affordable Interior Design </span>
            <br className="hidden sm:block" />
            Services in Bhubaneswar?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[32px] border border-green-100 bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-green-300 hover:shadow-[0_30px_80px_rgba(1,101,63,0.12)]"
            >
              {/* Hover Glow */}
              <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-green-500/10 opacity-0 blur-[90px] transition-all duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-700">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-black leading-snug text-gray-900">
                {item.title}
              </h3>

              {/* Line */}
              <div className="mt-4 h-[3px] w-14 rounded-full bg-green-700" />

              {/* Description */}
              <p className="mt-5 text-[15px] leading-8 text-gray-600">
                {item.description}
              </p>

              {/* Bottom Hover Border */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-green-700 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
