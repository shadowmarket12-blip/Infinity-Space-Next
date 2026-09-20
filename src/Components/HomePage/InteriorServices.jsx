"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Residential Interior Design",
    image: "/ResidentialInteriorDesign.webp",
    link: "/services/residential-interior-design",
    description:
      "We create elegant and functional residential interiors designed for comfort, aesthetics, smart storage, and modern living.",
    points: [
      "Drawing Room Interiors",
      "Living Room Design",
      "Bedroom Interiors",
      "Pooja Room Design",
      "Dining Space Interiors",
      "Luxury Apartment Interiors",
    ],
  },
  {
    title: "Modular Kitchen Interiors",
    image: "/ModularKitchenInteriors.webp",
    link: "/services/modular-kitchen-design",
    description:
      "Our modular kitchen interiors combine efficient layouts, premium finishes, and optimized storage solutions for contemporary homes.",
    points: [
      "L-Shaped Kitchens",
      "U-Shaped Kitchens",
      "Parallel Kitchens",
      "Island Kitchen Design",
      "Smart Storage Solutions",
      "Modular Accessories",
    ],
  },
  {
    title: "Commercial & Office Interiors",
    image: "/Commercial.webp",
    link: "/commercial-office-interiors",
    description:
      "We design productive and visually appealing commercial interiors focused on functionality, branding, and modern workspace concepts.",
    points: [
      "Office Setup Interiors",
      "Workspace Planning",
      "Retail Showroom Design",
      "Clinic Interiors",
      "Reception Area Design",
      "Commercial Space Planning",
    ],
  },
  {
    title: "Customized Furniture Solutions",
    image: "/Customized Furniture Solutions.webp",
    link: "/customized-furniture-solutions",
    description:
      "Customized furniture solutions designed according to your interior style, storage needs, and space requirements.",
    points: [
      "Wardrobe Design",
      "TV Unit Design",
      "Study Table Design",
      "Storage Cabinets",
      "Space Saving Furniture",
      "Custom Furniture Concepts",
    ],
  },
  {
    title: "False Ceiling & Decorative Design",
    image: "/False-Ceiling-Decorative-Design.webp",
    link: "/false-ceiling-decorative-design",
    description:
      "Enhance your interiors with modern ceiling concepts, decorative lighting, elegant wall finishes, and contemporary decorative elements.",
    points: [
      "False Ceiling Concepts",
      "Decorative Lighting",
      "Wall Panel Design",
      "Wallpaper Concepts",
      "Wooden Ceiling Design",
      "Ambient Lighting Solutions",
    ],
  },
  {
    title: "Turnkey Interior Solutions",
    image: "/Turnkey Interior Solutions.webp",
    link: "/turnkey-interior-solutions",
    description:
      "Complete turnkey interior solutions covering design, planning, execution, installation, and finishing under one roof.",
    points: [
      "Space Planning",
      "3D Visualization",
      "Civil Work",
      "Electrical Work",
      "Carpentry",
      "Furniture Installation",
      "Final Styling & Execution",
    ],
  },
];

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function InteriorServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-15 sm:py-14 lg:py-15">
      {/* CONTAINER */}
      <motion.div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
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
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px]">
            Our Interior
            <span className="text-green-700"> Design Services </span>
            <br className="hidden sm:block" />
            in Bhubaneswar
          </h2>
        </motion.div>

        {/* SERVICES */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              viewport={{
                once: true,
              }}
              className={`group relative overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_100px_rgba(1,101,63,0.12)] ${
                index % 2 === 0
                  ? "lg:grid lg:grid-cols-[0.95fr_1.05fr]"
                  : "lg:grid lg:grid-cols-[1.05fr_0.95fr]"
              }`}
            >
              {/* IMAGE */}
              <Link
                href={service.link}
                className={`relative block overflow-hidden ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={420}
                  className="h-[320px] w-full object-cover transition-all duration-700 group-hover:scale-105 sm:h-[420px] lg:h-full"
                  priority={index === 0}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </Link>

              {/* CONTENT */}
              <div
                className={`relative flex flex-col justify-center p-7 sm:p-10 lg:p-12 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* GREEN GLOW */}
                <div className="absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-[rgba(1,101,63,0.08)] blur-[90px]" />

                {/* TITLE */}
                <Link
                  href={service.link}
                  className="relative z-10 inline-block"
                >
                  <h3 className="text-2xl font-black leading-tight text-black transition-colors duration-300 hover:text-green-700 sm:text-4xl">
                    {service.title}
                  </h3>
                </Link>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-5 text-[13px] leading-8 text-gray-600 sm:text-[16px]">
                  {service.description}
                </p>

                {/* POINTS */}
                <div className="relative z-10 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#fafafa] px-4 py-4 transition-all duration-300 hover:translate-x-1 hover:border-[rgba(1,101,63,0.18)] hover:bg-[rgba(1,101,63,0.03)]"
                    >
                      {/* ICON */}
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(1,101,63,0.10)] text-sm font-bold text-[rgba(1,101,63,1)]">
                        ✓
                      </div>

                      {/* TEXT */}
                      <p className="text-sm font-semibold text-black">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-[5px] w-0 bg-[rgba(1,101,63,1)] transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
