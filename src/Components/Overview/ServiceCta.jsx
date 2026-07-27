"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Servicecta() {
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
          {/* SMALL TAG */}
          <div className="inline-flex rounded-full border border-black/10 bg-[rgba(1,101,63,0.05)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[rgba(1,101,63,1)]">
            Infinity Space Interiors
          </div>

          {/* HEADING */}
          <h2 className="mx-auto mt-8 max-w-4xl text-3xl font-black leading-tight text-black sm:text-3xl lg:text-5xl">
            Looking for Affordable Interior Design Services in
            <span className="text-[rgba(1,101,63,1)]"> Bhubaneswar?</span>
          </h2>

          {/* PARAGRAPH */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Infinity Space creates affordable yet thoughtfully designed
            interiors for homes, offices, modular kitchens, and commercial
            spaces with a focus on comfort, functionality, modern aesthetics,
            and practical long-term living.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            {/* BUTTON 1 */}
            <Link href="/contact">
              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="rounded-full bg-[rgba(1,101,63,1)] px-8 py-4 text-sm font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-black"
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
