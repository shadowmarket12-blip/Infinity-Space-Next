"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const services = [
  {
    id: "residential-interior",
    title: "Residential Interior Design",
    image: "/service page service section/Residential Interior Design.webp",
    description:
      "We create warm, comfortable, and space-efficient interiors for apartments, villas, duplexes, and independent houses. Our residential interior designers in Bhubaneswar focus on practical layouts, smart storage planning, balanced aesthetics, and functional living spaces designed for modern lifestyles.",
    points: [
      "Living Room Interiors",
      "Bedroom Design",
      "Dining Space Design",
      "Pooja Room Interiors",
      "Kids Room Design",
      "Apartment Interior Design",
      "Villa Interior Design",
      "Space Saving Interior Concepts",
    ],
    why: "A well-designed home improves comfort, organization, movement flow, and overall living experience while maximizing available space efficiently.",
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen Design",
    image: "/service page service section/Modular Kitchen Interiors.webp",
    description:
      "A kitchen should feel organized, functional, and easy to use every day. Our modular kitchen designers in Bhubaneswar create layouts that improve workflow efficiency, storage accessibility, and usability while maintaining a clean and modern visual appearance.",
    points: [
      "L-Shaped Kitchens",
      "U-Shaped Kitchens",
      "Parallel Kitchen Layouts",
      "Modular Storage Planning",
      "Island Kitchen Design",
      "Kitchen Cabinets & Accessories",
    ],
    why: "Thoughtful modular kitchen planning improves convenience, storage organization, movement efficiency, and long-term practicality.",
  },
  {
    id: "commercial-office",
    title: "Commercial & Office Interior Design",
    image: "/service page service section/Commercial-Office Interiors.webp",
    description:
      "We provide affordable commercial interior design services for offices, clinics, salons, retail stores, showrooms, and professional workspaces. Our office interior designers in Bhubaneswar focus on efficient space utilization, workflow planning, employee comfort, and professional aesthetics.",
    points: [
      "Office Setup Interiors",
      "Workspace Planning",
      "Reception Area Design",
      "Retail Showroom Concepts",
      "Clinic & Salon Interiors",
      "Workspace Optimization",
    ],
    why: "Professionally designed workspaces improve productivity, organization, customer experience, and daily operational efficiency.",
  },
  {
    id: "customized-furniture",
    title: "Customized Furniture Solutions",
    image: "/service page service section/Customized Furniture Solutions.webp",
    description:
      "Customized furniture helps improve storage planning, organization, and space utilization while maintaining visual harmony with the overall interior theme.",
    points: [
      "Wardrobe Design",
      "TV Unit Design",
      "Study Table Concepts",
      "Modular Furniture",
      "Storage Cabinets",
      "Space Saving Furniture Solutions",
    ],
    why: "Personalized furniture concepts help maximize available space while improving usability and interior organization.",
  },
  {
    id: "false-ceiling",
    title: "False Ceiling & Decorative Interior Concepts",
    image: "/service page service section/False Ceiling-Decorative Design.webp",
    description:
      "Decorative detailing helps create a more balanced and visually comfortable environment. Our false ceiling and decorative concepts focus on lighting enhancement, depth, visual balance, and modern styling.",
    points: [
      "False Ceiling Design",
      "Decorative Lighting",
      "Wallpaper Design",
      "Wall Panel Concepts",
      "Wooden Ceiling Finishes",
      "Ambient Lighting Layouts",
    ],
    why: "Balanced lighting and ceiling concepts improve ambiance, visual comfort, and the overall feel of a space.",
  },
  {
    id: "turnkey-solutions",
    title: "Turnkey Interior Solutions",
    image: "/service page service section/Turnkey Interior Solutions.webp",
    description:
      "Our turnkey interior solutions cover planning, coordination, execution, installation, and final finishing under one roof for a smooth and hassle-free experience.",
    points: [
      "Space Planning",
      "3D Interior Visualization",
      "Civil Work",
      "Electrical Work",
      "Carpentry",
      "Furniture Installation",
      "Final Styling & Finishing",
    ],
    why: "Turnkey execution improves coordination, reduces delays, and ensures better project management throughout the process.",
  },
];

export default function MyService() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[rgba(1,101,63,0.07)] blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[rgba(1,101,63,0.05)] blur-[120px]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          {/* TAG */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(1,101,63,0.10)] bg-[rgba(1,101,63,0.04)] px-6 py-3">
            <span className="h-2 w-2 rounded-full bg-[rgba(1,101,63,1)]" />
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[rgba(1,101,63,1)]">
              Our Services
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px]">
            Our Affordable
            <span className="text-green-700"> Interior Design Services </span>
            in Bhubaneswar
          </h2>
        </motion.div>

        {/* SERVICES */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              id={service.id}
              key={index}
              className={`scroll-mt-32 grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="relative"
              >
                {/* IMAGE CARD */}
                <div className="group relative overflow-hidden rounded-[34px] border border-[rgba(1,101,63,0.10)] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(1,101,63,0.12)]">
                  {/* IMAGE */}
                  <div className="relative h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[560px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    />
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 80 : -80,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="relative"
              >
                {/* SMALL LINE */}
                <div className="mb-6 h-[4px] w-20 rounded-full bg-[rgba(1,101,63,1)]" />

                {/* TITLE */}
                <h3 className="text-3xl font-black leading-tight text-black sm:text-4xl lg:text-3xl">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-gray-600 sm:text-[16px]">
                  {service.description}
                </p>

                {/* POINTS */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {service.points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 rounded-2xl border border-[rgba(1,101,63,0.08)] bg-[#fafafa] px-4 py-4 transition-all duration-300 hover:border-[rgba(1,101,63,0.20)] hover:bg-[rgba(1,101,63,0.03)]"
                    >
                      {/* CHECK */}
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(1,101,63,0.10)] text-[11px] text-[rgba(1,101,63,1)]">
                        <FaCheck />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* WHY IT MATTERS CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-10 rounded-[28px] border border-[rgba(1,101,63,0.10)] bg-gradient-to-br from-[rgba(1,101,63,0.04)] to-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:p-7 lg:p-8"
                >
                  <div className="inline-flex items-center rounded-full bg-[rgba(1,101,63,0.10)] px-4 py-2">
                    <span className="text-xs font-bold uppercase tracking-[2px] text-[rgba(1,101,63,1)]">
                      Why It Matters
                    </span>
                  </div>
                  <p className="mt-5 text-[15px] leading-8 text-gray-700 sm:text-[16px]">
                    {service.why}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
