"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// import bgImage from "@/public/images/homepage-showcase-background.webp";

export default function PromoVideoSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/home page showcase background image.webp"
          alt="Interior Designers in Bhubaneswar"
          fill
          className="object-cover"
          priority
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#01653F]/45" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08111f]/95 via-[#08111f]/75 to-[#08111f]/40" />
      </div>

      {/* LIGHT GLOW */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-white/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#d8a54c]/10 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{
            once: true,
          }}
        >
          {/* HEADING */}
          <h2 className="mt-6 text-[30px] font-black leading-[1.1] text-white sm:text-[42px] lg:text-[46px]">
            Interior Designers in Bhubaneswar for Modern Homes & Workspaces
          </h2>

          {/* TEXT */}
          <p className="mt-8 max-w-xl text-base leading-8 text-white sm:text-lg">
            We provide customized interior design solutions for apartments,
            villas, offices, retail spaces, and commercial properties with a
            focus on functionality, modern aesthetics, and smart space planning.
          </p>

          <p className="mt-8 max-w-xl text-base leading-8 text-white sm:text-lg">
            Our experienced team of interior designers in Bhubaneswar brings
            creativity and precision to every project, ensuring each space
            reflects the unique personality and requirements of our clients
            while maintaining the highest standards of quality and
            craftsmanship.
          </p>

          {/* BUTTON */}
          <Link href="/blogs">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-10 rounded-full border border-white/20 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[2px] text-[#08111f] shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-500 hover:bg-[#d8a54c]"
            >
              Explore Blogs
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 120,
            scale: 0.85,
            rotate: -4,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="relative"
        >
          {/* OUTER GLOW */}
          <div className="absolute -inset-6 rounded-[40px] bg-white/10 blur-3xl" />

          {/* VIDEO CONTAINER */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{
              duration: 0.5,
            }}
            className="group relative overflow-hidden rounded-[36px] border border-white/30 bg-white/5 p-2 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            {/* WHITE BORDER EFFECT */}
            <div className="absolute inset-0 rounded-[36px] border border-white/20" />

            {/* VIDEO */}
            <video
              src="/v1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              className="relative z-10 aspect-[16/10] w-full rounded-[28px] object-cover"
            />

            {/* TOP LIGHT */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />

            {/* BOTTOM FADE */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />

            {/* GOLD GLOW */}
            <div className="absolute -bottom-16 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[#d8a54c]/25 blur-[120px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
