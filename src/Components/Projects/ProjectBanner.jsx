"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsHeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image - Using public folder path */}
      <div className="absolute inset-0">
        <Image
          src="/breadcrumb background imager/about page bread crumb background image.webp"
          alt="Projects Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[450px] w-[450px] rounded-full bg-[#01653F]/30 blur-[160px]"
      />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        {/* Premium Loader */}
        <div className="mb-12 flex justify-center">
          <div className="relative flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-24 w-24 rounded-full border-[3px] border-white/10 border-t-[#01653F]"
            />

            {/* Inner Ring */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-14 w-14 rounded-full border-[3px] border-white/10 border-b-green-400"
            />

            {/* Center Dot */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]"
            />
          </div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black text-white sm:text-6xl lg:text-7xl"
        >
          Projects Coming Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl"
        >
          We're preparing inspiring interior design articles, trends, expert
          tips, project showcases, and modern space-planning ideas for your
          dream interiors.
        </motion.p>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
          }}
          className="mt-10 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[4px] text-white backdrop-blur-md"
        >
          Coming Soon
        </motion.div>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-6 text-sm uppercase tracking-[5px] text-green-300"
        >
          Loading Amazing Content...
        </motion.p>
      </div>
    </section>
  );
}
