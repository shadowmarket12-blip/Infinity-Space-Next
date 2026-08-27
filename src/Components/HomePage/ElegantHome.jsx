"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    video: "/1.mp4",
    description:
      "At Infinity Space, we believe interiors should feel comfortable, visually refined, and functional for everyday living. As experienced interior designers in Bhubaneswar, we create thoughtfully planned spaces that balance modern aesthetics, efficient layouts, smart storage, and personalized detailing.",
  },
  {
    video: "/2.mp4",
    description:
      "We provide complete interior design and execution services for apartments, villas, offices, retail spaces, restaurants, clinics, and commercial properties. From concept planning and 3D visualization to material selection and final execution, our team manages every stage with professional coordination and attention to detail.",
  },
  {
    video: "/3.mp4",
    description:
      "Whether you are planning luxury home interiors, modular kitchen design, office setup interiors, wardrobe solutions, or customized furniture concepts, our goal is to create interiors that match your lifestyle, functionality requirements, and design preferences.",
  },
];

export default function ElegantHome() {
  return (
    <section className="relative overflow-hidden bg-[#fff] py-16 sm:py-20 lg:py-28">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-10%] h-[350px] w-[350px] rounded-full bg-emerald-400/10 blur-[120px]" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
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
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-5 py-3 shadow-md">
              <span className="h-2 w-2 rounded-full bg-green-700" />
              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-green-700 sm:text-xs">
                Premium Interior Design
              </span>
            </div>

            {/* HEADING */}
            <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px]">
              Creating Elegant, Practical &
              <span className="text-green-700"> Space-Efficient </span>
              <br className="hidden sm:block" />
              Interiors
            </h2>

            {/* BUTTON */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <Link href="/projects">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group flex items-center gap-3 rounded-full bg-green-700 px-7 py-4 text-sm font-semibold uppercase tracking-[2px] text-white shadow-[0_18px_40px_rgba(1,101,63,0.22)]"
                >
                  Explore Projects
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="order-1 relative mx-auto w-full max-w-[500px] lg:order-2"
          >
            {/* IMAGE CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="group relative overflow-hidden rounded-[32px] border border-yellow-300 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.08)] sm:p-4"
            >
              {/* GOLDEN BORDER EFFECT */}
              <div className="absolute inset-0 rounded-[32px] border-[3px] border-yellow-400/70 pointer-events-none" />

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[26px]">
                <Image
                  src="/servicebanner.webp"
                  alt="Interior Design"
                  width={500}
                  height={520}
                  className="h-[280px] w-full object-cover transition-all duration-700 group-hover:scale-105 sm:h-[420px] lg:h-[520px]"
                  priority
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3 lg:mt-24">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-[32px] border-2 border-yellow-300 bg-white p-8 text-center shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-green-600 hover:shadow-[0_30px_80px_rgba(1,101,63,0.12)]"
            >
              {/* TOP GLOW */}
              <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-green-500/10 blur-[80px]" />

              {/* VIDEO */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                className="relative z-10 mx-auto flex justify-center"
              >
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="h-20 w-20 rounded-full object-cover border-2 border-green-600/40 shadow-md sm:h-24 sm:w-24"
                />
              </motion.div>

              {/* TEXT */}
              <p className="relative z-10 mt-7 text-[15px] leading-8 text-gray-600">
                {item.description}
              </p>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-green-700 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
