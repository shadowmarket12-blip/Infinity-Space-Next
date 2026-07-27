"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="text-center"
        >
          {/* HEADING */}
          <h2 className="mx-auto mt-8 max-w-4xl text-2xl font-black leading-tight text-black sm:text-3xl lg:text-5xl">
            Looking for Experienced
            <span className="text-[rgba(1,101,63,1)]">
              {" "}
              Interior Designers{" "}
            </span>
            in Bhubaneswar?
          </h2>

          {/* PARAGRAPH */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Infinity Space creates thoughtfully designed interiors for{" "}
            <Link
              href="/services"
              className="text-[rgba(1,101,63,1)] hover:underline"
            >
              homes, offices, and commercial spaces
            </Link>{" "}
            with a focus on comfort, functionality, aesthetics, and modern
            living.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap lg:mt-12">
            <Link href="/contact" className="w-full px-4 sm:w-auto sm:px-0">
              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="w-full rounded-full bg-[rgba(1,101,63,1)] px-5 py-3 text-xs font-bold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-black sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm sm:tracking-[1.5px] lg:px-8 lg:py-4 lg:text-sm lg:tracking-[2px]"
              >
                Schedule Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
