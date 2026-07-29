"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CompanyOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[rgba(1,101,63,0.08)] blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[rgba(1,101,63,0.08)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-[rgba(1,101,63,0.08)] bg-white p-6 shadow-lg sm:p-8 lg:p-10"
          >
            <div className="absolute left-0 top-0 h-full w-2 bg-[rgba(1,101,63,1)]" />

            <h2 className="text-xl font-black text-black sm:text-2xl lg:text-3xl">
              Designing Interiors That Reflect Modern Lifestyle & Comfort
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-[15px]">
              We believe interior design should improve how people experience
              their homes and workspaces. Our design approach combines
              creativity, functionality, balanced lighting, smart storage,
              modern aesthetics, and personalized detailing to create spaces
              that feel{" "}
              <Link
                href="/about-us"
                className="text-[rgba(1,101,63,1)] font-semibold hover:underline transition-all"
              >
                elegant, practical, and comfortable for everyday living.
              </Link>
            </p>

            <div className="mt-6 h-1 w-16 rounded-full bg-[rgba(1,101,63,1)] transition-all duration-300 group-hover:w-32" />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-[rgba(1,101,63,0.08)] bg-white p-6 shadow-lg sm:p-8 lg:p-10"
          >
            <div className="absolute left-0 top-0 h-full w-2 bg-[rgba(1,101,63,1)]" />

            <h2 className="text-xl font-black text-black sm:text-2xl lg:text-3xl">
              Elegant Interior Design Projects Across Bhubaneswar, Cuttack &
              Khordha
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-[15px]">
              Our portfolio includes luxury apartments, modular kitchens, office
              interiors, wardrobe designs, TV unit concepts, workspace
              interiors, and customized furniture solutions designed with
              premium craftsmanship and modern aesthetics.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
              We focus on creating interiors that combine functionality,
              comfort, elegance, and contemporary living standards.
            </p>

            <div className="mt-6 h-1 w-16 rounded-full bg-[rgba(1,101,63,1)] transition-all duration-300 group-hover:w-32" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
