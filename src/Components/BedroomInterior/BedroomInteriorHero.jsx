"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function BedroomInteriorHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bedroom-interior design/bedroom-interior-design.webp"
          alt="Bedroom Interior Background"
          fill
          className="object-cover"
          priority
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 80, -40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[rgba(1,101,63,0.25)] blur-[120px]"
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1450px] items-center px-4 py-28 sm:px-6 lg:px-14">
        <div className="max-w-4xl">
          {/* BREADCRUMB */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md"
          >
            <Link href="/" className="transition hover:text-white/80">
              Home
            </Link>

            <FiChevronRight className="text-sm" />
            <Link href="/services" className="text-white/70">
              Services
            </Link>
            <FiChevronRight className="text-sm" />
            <span className="text-white/70">Bedroom Interior Design</span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mt-8 text-2xl font-black leading-tight tracking-[-0px] text-white sm:text-3xl md:text-4xl xl:text-5xl"
          >
            Bedroom Interior Design in Bhubaneswar
          </motion.h1>

          {/* SUBTITLE */}
          <Link href="/">
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="mt-6 max-w-3xl text-sm leading-7 tracking-wide text-white/90 sm:text-base sm:leading-8 md:text-lg md:leading-9 lg:text-xl lg:leading-9"
            >
              Your bedroom is one of the most personal spaces in your home. It
              is where you start and end your day, so we believe it should be
              designed around your comfort, routine, storage needs and personal
              style, rather than simply following a popular interior trend.
            </motion.h2>
          </Link>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap"
          >
            {/* BUTTON 1 */}
            <Link href="/projects">
              <motion.button
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-[22px] px-[2px] py-[2px]"
              >
                {/* ANIMATED BORDER */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-150%] bg-conic-gradient from-[rgba(1,101,63,1)] via-green-400 to-[rgba(1,101,63,1)]"
                />

                {/* BUTTON INNER */}
                <div className="relative flex items-center gap-3 overflow-hidden rounded-[20px] bg-[rgba(1,101,63,1)] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_20px_45px_rgba(1,101,63,0.35)]">
                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="absolute left-[-30%] top-[-50%] h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                  </div>

                  {/* SHINE */}
                  <span className="absolute left-[-120%] top-0 h-full w-20 rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

                  <span className="relative z-10">Explore Projects</span>
                </div>
              </motion.button>
            </Link>

            {/* BUTTON 2 */}
            <Link href="/contact">
              <motion.button
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-[22px] border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl"
              >
                {/* HOVER BACKGROUND */}
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileHover={{
                    scale: 8,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="absolute h-10 w-10 rounded-full bg-white"
                />

                {/* TEXT */}
                <span className="relative z-10 transition-all duration-500 group-hover:text-white">
                  Get Free Consultation
                </span>

                {/* SMALL DOT */}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
