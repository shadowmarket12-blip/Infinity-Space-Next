"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FalseCeilingCta() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      {/* Premium background glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-green-100/40 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-gray-100 blur-[130px]" />

      {/* Subtle grid pattern */}
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
        {/* Main 3D Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gray-200/80 bg-white/70 p-6 shadow-[0_60px_120px_-50px_rgba(14,43,39,0.45)] backdrop-blur-2xl sm:p-10 lg:p-16"
        >
          {/* Top gradient accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-600/50 to-transparent" />

          {/* Corner decorative ring */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-green-700/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-gray-200" />

          {/* SECTION 1 */}
          <div className="relative">
            <h2 className="mb-4 mt-2 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
              False Ceiling Design Services{""}
              <span className="text-green-700">
                {" "}
                in Bhubaneswar and Nearby Areas
              </span>
            </h2>

            <div className="mt-6 max-w-3xl space-y-4 text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
              <p>
                Infinity Space is based in Khandagiri, Bhubaneswar, and provides
                interior design solutions for projects in Bhubaneswar and nearby
                areas, including Cuttack and Khordha.
              </p>
              <p>
                Whether you are planning a false ceiling for a new apartment,
                independent house, villa or commercial space, we can discuss the
                available design options according to your requirements.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent lg:my-14" />

          {/* SECTION 2 */}
          <div className="relative">
            <h2 className="mb-4 mt-2 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
              Plan Your False Ceiling{""}
              <span className="text-green-700"> with Infinity Space</span>
            </h2>

            <div className="mt-6 max-w-3xl space-y-4 text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
              <p>
                Choosing the right ceiling involves more than selecting an
                attractive pattern. The design should suit the room&apos;s
                proportions, lighting requirements, materials and overall
                interior style.
              </p>
              <p>
                If you are comparing options for the best false ceiling interior
                designer in Bhubaneswar, consider how the design is planned
                around your actual space, whether the materials are suitable and
                how the lighting and execution details are coordinated.
              </p>
              <p>
                At Infinity Space, we help you explore practical and customised
                false ceiling solutions for your interiors.
              </p>
              <p>
                Contact Infinity Space to discuss your false ceiling design
                requirements in Bhubaneswar.
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

                    <span className="relative z-10">Contact Us Now</span>

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
        </motion.div>
      </div>
    </section>
  );
}
