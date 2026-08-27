"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function InteriorExpertiseSection() {
  const items = [
    {
      title: "Personalized Interior Concepts",
      link: "/services#residential-interior",
    },
    {
      title: "3D Interior Design Visualization",
      link: "/services#modular-kitchen",
    },
    {
      title: "Turnkey Interior Execution",
      link: "/services#turnkey-solutions",
    },
    {
      title: "Smart Space Planning",
      link: "/services#customized-furniture",
    },
    {
      title: "Premium Material Selection",
      link: "/services#false-ceiling",
    },
    {
      title: "Residential & Commercial Expertise",
      link: "/services#commercial-office",
    },
    {
      title: "Transparent Project Management",
      link: "/services#turnkey-solutions",
    },
    {
      title: "Organized Execution Workflow",
      link: "/services#turnkey-solutions",
    },
  ];

  const heading =
    "Trusted Interior Designers in Bhubaneswar for Homes & Workspaces";

  const ref = useRef(null);

  const words = heading.split(" ");

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* HEADING */}
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px]">
            Trusted Interior Designers in
            <span className="text-green-700"> Bhubaneswar for </span>
            <br className="hidden sm:block" />
            Homes & Workspaces
          </h2>

          <p className="text-black mt-10">
            Infinity Space is a{" "}
            <Link
              href="/about-us"
              className="font-bold hover:text-green-700 transition-colors"
            >
              trusted interior design company in Bhubaneswar
            </Link>
            , Odisha offering tailored residential and commercial interior
            solutions that combine aesthetics, comfort, and functionality. From
            modular kitchens and luxury living rooms to office interiors,
            wardrobe designs,{" "}
            <Link
              href="/services"
              className="font-bold hover:text-green-700 transition-colors"
            >
              TV units, false ceiling concepts, and turnkey execution
            </Link>
            , every space is designed with attention to detail and practical
            usability.
          </p>

          <p className="text-black mt-10">
            Our experienced{" "}
            <Link
              href="/about-us"
              className="font-bold hover:text-green-700 transition-colors"
            >
              interior designers in Bhubaneswar
            </Link>{" "}
            focus on smart space planning, premium finishes, modern layouts, and
            organized execution to create interiors that reflect your lifestyle
            and everyday needs. We proudly serve homeowners and businesses
            across Bhubaneswar, Cuttack, and Khordha with personalized interior
            solutions designed for contemporary living.
          </p>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
                scale: 1.04,
              }}
              className="relative overflow-hidden rounded-full border border-black/10 bg-white px-6 py-4 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-green-700/20 hover:shadow-[0_15px_40px_rgba(1,101,63,0.12)]"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/[0.03] to-emerald-500/[0.05]" />

              {/* CONTENT */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-green-700 to-emerald-500" />
                <Link href={item.link} className="block">
                  <p className="text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors sm:text-base">
                    {item.title}
                  </p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
