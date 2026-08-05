"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";
import Image from "next/image";

const processData = [
  {
    title: "Consultation & Requirement Understanding",
    description:
      "Understanding your design expectations, lifestyle needs, budget goals, and space functionality requirements.",
    video: "/processv/Consultation & Requirement Analysis.mp4",
  },
  {
    title: "Space Planning & Design Development",
    description:
      "Creating layouts and interior concepts that balance usability, comfort, aesthetics, and storage optimization.",
    video: "/processv/Space Planning & 3D Visualization.mp4",
  },
  {
    title: "3D Visualization & Material Selection",
    description:
      "Helping clients visualize layouts, textures, colors, furniture placement, and finishes before execution begins.",
    video: "/processv/Material Selection & Budget Planning.mp4",
  },
  {
    title: "Execution & Installation",
    description:
      "Managing civil work, carpentry, painting, electrical work, furniture setup, and interior execution with organized coordination.",
    video: "/processv/Execution & Installation.mp4",
  },
  {
    title: "Final Finishing & Handover",
    description:
      "Quality checks, detailing, finishing touches, and project completion with planned delivery.",
    video: "/processv/Final Styling & Handover.mp4",
  },
];

const OverviewProcess = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/processbg.webp"
          alt="Process Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-white/10 blur-[120px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Our Interior Design Process
          </h2>
        </motion.div>

        {/* PROCESS */}
        <div className="grid gap-y-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
          {processData.map((item, index) => (
            <div key={index} className="relative">
              {/* DESKTOP ARROW */}
              {index !== processData.length - 1 && (
                <div className="absolute -right-7 top-[110px] z-30 hidden lg:flex">
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl"
                  >
                    <FaArrowRightLong className="text-lg" />
                  </motion.div>
                </div>
              )}

              {/* MOBILE ARROW */}
              {index !== processData.length - 1 && (
                <div className="absolute -bottom-11 left-1/2 z-30 flex -translate-x-1/2 lg:hidden">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl"
                  >
                    <FaArrowDownLong />
                  </motion.div>
                </div>
              )}

              {/* CARD */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                {/* VIDEO BOX */}
                <div className="relative mx-auto">
                  <div className="absolute inset-0 rounded-[34px] bg-white/10 blur-2xl" />

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="h-[260px] w-full object-cover sm:h-[300px]"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                </div>

                {/* TEXT */}
                <div className="mx-auto mt-6 max-w-xs">
                  {/* TITLE */}
                  <h3 className="text-lg font-black leading-snug text-white">
                    {item.title}
                  </h3>

                  {/* SMALL LINE */}
                  <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-white/70" />

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-sm leading-7 text-white/75">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewProcess;
