"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const costFactors = [
  "Total ceiling area to be covered.",
  "Type and quality of material selected.",
  "Complexity of the ceiling pattern.",
  "Number of levels and recessed sections.",
  "Cove lighting, LED strips and other lighting requirements.",
  "Site conditions and installation requirements.",
];

export default function FalseCeilingCost() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      {/* Premium ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-green-100/40 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-gray-100 blur-[130px]" />

      {/* Blueprint grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gray-200/80 bg-white/70 p-6 shadow-[0_60px_120px_-50px_rgba(14,43,39,0.45)] backdrop-blur-2xl sm:p-10 lg:p-16"
        >
          {/* Top gradient accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-600/50 to-transparent" />

          {/* Corner decorative rings */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-green-700/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-gray-200" />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT — Heading + Intro + Factors + Closing */}
            <div className="relative">
              <h2 className="mb-4 mt-2 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
                False Ceiling Design Cost{""}
                <span className="text-green-700"> in Bhubaneswar</span>
              </h2>

              <div className="mt-6 space-y-4 text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
                <p>
                  The cost of a false ceiling in Bhubaneswar depends on several
                  factors. A simple gypsum ceiling border will have a different
                  cost from a multi-level design with concealed lighting,
                  decorative profiles and customised finishes.
                </p>
                <p>The main factors that influence the cost include:</p>
              </div>

              <div className="mt-8 space-y-4 text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
                <p>
                  At Infinity Space, we first understand your room dimensions,
                  preferred design and budget. Based on these details, we can
                  discuss suitable material options and prepare a
                  project-specific quotation.
                </p>
                <p>
                  Instead of selecting a design only by its appearance, it is
                  useful to consider the complete scope, including materials,
                  lighting and finishing requirements. This helps you understand
                  the proposed work and make decisions according to your
                  priorities.
                </p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-[2px] py-[2px]"
                  >
                    {/* Animated rotating border */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-[-150%] bg-conic-gradient from-green-700 via-green-400 to-green-700"
                    />

                    {/* Button inner */}
                    <div className="relative flex items-center gap-3 overflow-hidden rounded-full bg-green-800 px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_20px_45px_rgba(1,101,63,0.35)]">
                      {/* Hover glow */}
                      <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <div className="absolute left-[-30%] top-[-50%] h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                      </div>

                      {/* Shine sweep */}
                      <span className="absolute left-[-120%] top-0 h-full w-20 rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[120%]" />

                      <span className="relative z-10">
                        Discuss Your Project
                      </span>

                      <svg
                        viewBox="0 0 20 20"
                        className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10h11m0 0-4-4m4 4-4 4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — Premium 3D Glass Panel with factors */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-gradient-to-br from-green-900 via-green-800 to-green-950 p-6 text-white shadow-[0_50px_100px_-40px_rgba(1,101,63,0.65)] sm:p-8 lg:p-10">
                {/* Decorative rings inside panel */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full border border-white/10" />

                {/* Soft glow */}
                <div className="pointer-events-none absolute -left-10 top-1/3 h-40 w-40 rounded-full bg-green-400/20 blur-3xl" />

                <div className="relative">
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    The main factors that influence the cost include:
                  </h3>

                  <ul className="mt-6 space-y-0">
                    {costFactors.map((factor, idx) => (
                      <motion.li
                        key={factor}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.08,
                          ease: "easeOut",
                        }}
                        className="group flex items-start gap-4 border-b border-white/10 py-4 last:border-b-0"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_12px_3px_rgba(74,222,128,0.6)] transition-transform duration-300 group-hover:scale-125" />
                        <span className="text-[13px] leading-6 text-white/85 sm:text-[14px] sm:leading-7">
                          {factor}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
