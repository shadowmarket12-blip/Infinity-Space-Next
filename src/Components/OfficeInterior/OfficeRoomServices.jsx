"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const OfficeRoomServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const services = [
    {
      title: "Office Space Planning and Layout",
      description:
        "The layout influences how people move through an office and how comfortably they can work. We plan the arrangement of workstations, cabins, meeting areas, reception, storage and circulation paths according to the floor plan and project requirements. The aim is to reduce awkward movement, avoid overcrowded zones and make each area serve a clear purpose.",
      image: "/office-interior-design/Space-Planning-Layout.webp",
    },
    {
      title: "Reception and Waiting Area Design",
      description:
        "The reception is often the first point of contact for visitors. A well-considered reception can bring together the front desk, seating, lighting, signage and brand elements in a way that feels welcoming and professional. The design should also account for visitor movement and the amount of space available.",
      image: "/office-interior-design/Reception-Front-Office.webp",
    },
    {
      title: "Workstations and Employee Areas",
      description:
        "Workstations should provide useful desk space, comfortable circulation and practical access to power and data points. Depending on your team and floor plan, the layout may use individual desks, shared workstation clusters or a combination of open and more private work areas. Furniture dimensions, cable management and storage should be considered early.",
      image: "/office-interior-design/Workstations-Furniture.webp",
    },
    {
      title: "Cabins and Meeting Rooms",
      description:
        "Private cabins and meeting rooms need to support focused work, conversations and presentations. Their design may involve suitable partitions, furniture, lighting, storage and coordination with meeting technology. Privacy or noise concerns should be identified during planning.",
      image: "/office-interior-design/Cabins-Meeting-Rooms.webp",
    },
    {
      title: "Storage and Utility Areas",
      description:
        "Files, supplies, equipment and everyday items need defined storage locations. Built-in cabinets and storage units can help keep work surfaces clear and make better use of the available footprint. We consider the type and volume of items to be stored so the solution is useful rather than simply decorative.",
      image: "/office-interior-design/Lighting-Electrical-Planning.webp",
    },
    {
      title: "Lighting, Finishes and Interior Details",
      description:
        "Lighting and finishes affect how an office feels throughout the working day. The design should account for available daylight, task requirements, surface maintenance and the overall look of the business. We help bring together suitable colour palettes, wall finishes, flooring, ceiling treatments and lighting concepts based on the project scope.",
      image: "/office-interior-design/Storage-Utility-Zones.webp",
    },
    {
      title: "Corporate Office Interior Design in Bhubaneswar",
      description:
        "Corporate office interiors need to express a clear identity while supporting day-to-day operations. The reception, workstations, leadership cabins, meeting rooms and shared spaces should feel connected, even when each area has a different purpose.",
      image: "/office-interior-design/Free-3D-Office-Renders.webp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-100/40 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal-100/30 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Our Office{" "}
            <span className="text-emerald-700">Interior Design Services</span>{" "}
            Covers
          </h2>
        </motion.div>

        {/* ============ SERVICES LIST ============ */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.08 * index,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative grid overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-sm transition-all duration-500 hover:border-emerald-200 hover:shadow-[0_25px_80px_-20px_rgba(5,150,105,0.18)] md:grid-cols-2"
              >
                {/* ---- Image ---- */}
                <div
                  className={`relative h-64 overflow-hidden bg-stone-100 sm:h-80 md:h-auto md:min-h-[320px] ${
                    reverse ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-70" />

                  {/* Number Badge */}
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/95 shadow-lg backdrop-blur-md sm:left-5 sm:top-5 sm:h-14 sm:w-14">
                    <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-base font-black text-transparent sm:text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* ---- Content ---- */}
                <div
                  className={`flex flex-col justify-center p-6 sm:p-8 lg:p-12 ${
                    reverse ? "md:order-1" : ""
                  }`}
                >
                  {/* Label */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-px w-10 bg-gradient-to-r from-emerald-500 to-transparent" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-700">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-black leading-tight tracking-tight text-stone-900 transition-colors duration-300 group-hover:text-emerald-800 sm:text-3xl lg:text-[32px]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] leading-relaxed text-stone-600 sm:text-base lg:text-[17px]">
                    {service.description}
                  </p>

                  {/* Included Tag */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
                      <svg
                        className="h-3 w-3 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-xs font-medium text-stone-500 sm:text-sm">
                      Included as standard
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ============ BOTTOM NOTE (Premium Dark Card) ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-14 max-w-5xl sm:mt-16 lg:mt-20"
        >
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 p-6 shadow-2xl shadow-emerald-900/30 sm:rounded-[36px] sm:p-8 lg:p-12">
            {/* Decorative Layers */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-white/[0.07]" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
              <div className="absolute right-1/3 top-0 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl" />
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
              />
            </div>

            {/* Two Column Content */}
            <div className="relative grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-500 hover:border-emerald-300/30 hover:bg-white/[0.07] sm:p-6">
                {/* Accent line */}
                <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-emerald-400 to-teal-500 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <p className="text-[13.5px] leading-relaxed text-emerald-50/85 sm:text-sm sm:leading-[1.75] lg:text-[15px]">
                  For{" "}
                  <span className="font-semibold text-white">
                    corporate office interior design in Bhubaneswar
                  </span>
                  , we consider the organisation&apos;s work culture, employee
                  needs, visitor experience and brand personality. Some
                  businesses may prefer a formal and understated setting, while
                  others may need a flexible, collaborative environment. The
                  design should reflect those differences without sacrificing
                  practical use of space.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-500 hover:border-emerald-300/30 hover:bg-white/[0.07] sm:p-6">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-teal-400 to-emerald-500 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <p className="text-[13.5px] leading-relaxed text-emerald-50/85 sm:text-sm sm:leading-[1.75] lg:text-[15px]">
                  As requirements become clearer, we can plan furniture,
                  partitions, finishes, lighting and storage as parts of one
                  coordinated interior. Specialist needs—such as{" "}
                  <span className="font-semibold text-white">
                    access control, network infrastructure, acoustic treatment,
                    HVAC or statutory requirements
                  </span>
                  —should be identified early and coordinated with relevant
                  professionals or contractors as appropriate.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeRoomServices;
