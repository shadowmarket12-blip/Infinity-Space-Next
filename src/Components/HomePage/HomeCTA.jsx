"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex rounded-full border border-black/10 bg-[rgba(1,101,63,0.05)] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[rgba(1,101,63,1)]">
            Infinity Space Interiors
          </div>

          <h2 className="mx-auto mt-8 max-w-4xl text-2xl font-black leading-tight text-black sm:text-3xl lg:text-5xl">
            Looking for Professional Interior Designers in
            <span className="text-[rgba(1,101,63,1)]"> Bhubaneswar?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Transform your home, office, or commercial space with Infinity
            Space. From{" "}
            <Link
              href="/services/modular-kitchen-design"
              className="text-[rgba(1,101,63,1)] hover:underline"
            >
              modular kitchens
            </Link>{" "}
            and{" "}
            {/* <Link
              href="/services"
              className="text-[rgba(1,101,63,1)] hover:underline"
            > */}
            wardrobe designs to office setup
            {/* </Link>{" "} */}
            interiors and luxury living spaces, we create interiors that combine
            functionality, comfort, and modern aesthetics.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/contact">
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full bg-[rgba(1,101,63,1)] px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[1px] sm:tracking-[2px] text-white transition-all duration-300 hover:bg-black"
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
