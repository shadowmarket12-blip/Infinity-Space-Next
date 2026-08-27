"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiClock,
  FiLayers,
  FiGrid,
  FiPackage,
  FiCheckCircle,
} from "react-icons/fi";

export default function AffordableInterior() {
  const concerns = [
    {
      icon: <FiDollarSign />,
      title: "Budget Overruns",
    },
    {
      icon: <FiClock />,
      title: "Delayed Execution",
    },
    {
      icon: <FiLayers />,
      title: "Poor Coordination",
    },
    {
      icon: <FiCheckCircle />,
      title: "Low-Quality Finishes",
    },
    {
      icon: <FiGrid />,
      title: "Impractical Layouts",
    },
    {
      icon: <FiPackage />,
      title: "Lack of Storage Planning",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px]">
              Cost-Effective Interior Design Is
              <span className="text-green-700"> About Smart Planning</span> -
              Not Compromising Quality
            </h2>

            <p className="mt-8 text-base leading-8 text-black sm:text-lg">
              Many people believe interior design is only for luxury homes or
              large budgets. In reality, well-planned interiors help improve
              comfort, organization, storage efficiency, lighting, movement
              flow, and everyday functionality regardless of the project size.
            </p>

            <p className="mt-6 text-base leading-8 text-black sm:text-lg">
              Our affordable interior design services in Bhubaneswar focus on
              intelligent space planning, cost-effective material selection,
              practical layouts, and efficient execution to create interiors
              that feel sophisticated without unnecessary spending. Instead of
              following expensive design trends blindly, we focus on solutions
              that offer long-term value, usability, durability, and visual
              balance.
            </p>
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[36px] border border-green-100 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] lg:p-10"
          >
            {/* Glow */}
            <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-green-500/10 blur-[90px]" />

            <h3 className="text-1xl font-black text-gray-900 sm:text-3xl">
              Common Client Concerns
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              We understand that homeowners and businesses often worry about:
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {concerns.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:border-green-200 hover:bg-white"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl text-green-700">
                    {item.icon}
                  </div>

                  <h4 className="text-sm font-semibold text-gray-800 sm:text-base">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* Bottom Statement */}
            <div className="mt-8 rounded-2xl bg-green-700 p-6 text-white">
              <p className="leading-8">
                That is why our approach emphasizes transparent planning,
                organized execution, thoughtful material selection, and clear
                communication throughout every stage of the project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
