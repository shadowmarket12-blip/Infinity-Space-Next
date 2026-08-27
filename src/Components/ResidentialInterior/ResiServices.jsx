"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { residentialImages } from "./Residata";

const renderDescriptionWithLink = (description, link) => {
  if (!link?.text || !link?.href) return description;

  const index = description.indexOf(link.text);
  if (index === -1) return description; // phrase not found, render plainly

  const before = description.slice(0, index);
  const after = description.slice(index + link.text.length);

  return (
    <>
      {before}
      <Link href={link.href} className="font-bold text-black">
        {link.text}
      </Link>
      {after}
    </>
  );
};

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Full Home Interior Design",
      subtitle: "1BHK, 2BHK, 3BHK & Villas",
      image: residentialImages.fullHome,
      category: "Complete Home",
      description:
        "A full home interior project is the most powerful investment you can make in your living experience. When our team handles your complete home, every room speaks the same visual language — the palette in your living room flows into your bedroom, the kitchen's material story echoes in your dining area, and every detail connects. Our 2BHK and 3BHK interior design projects in Bhubaneswar are among our most requested services, and for good reason: a coordinated full-home design costs less per room than piecemeal upgrades and delivers a result that feels deeply intentional.",
      highlight:
        "A coordinated full-home design costs less per room than piecemeal upgrades",
      features: [
        {
          title: "1BHK Interiors",
          desc: "Compact, smart, and stylish — we maximise every square foot through clever storage and dual-purpose furniture design",
        },
        {
          title: "2BHK Interiors",
          desc: "Bhubaneswar's most common apartment format — we have refined our 2BHK design process to be efficient, beautiful, and budget-conscious",
        },
        {
          title: "3BHK & 4BHK Interiors",
          desc: "Full-family homes designed for multi-generational Odia living, with generous storage, dedicated pooja rooms, and kids' zones",
        },
        {
          title: "Independent Houses & Villas",
          desc: "Bespoke luxury design for standalone homes in Nayapalli, Patia, Chandrasekharpur, and surrounding areas",
        },
        {
          title: "Free 3D Walkthrough",
          desc: "Every full-home project includes detailed 3D renders — you approve the design digitally before a single item is ordered",
        },
      ],
    },
    {
      id: 2,
      title: "Living Room Interior Design",
      subtitle: "in Bhubaneswar",
      image: residentialImages.livingRoom,
      category: "Living Spaces",
      description:
        "Your living room is the first impression of your home — the space where family gathers and guests form their opinion of your taste. Our living room interior designers in Bhubaneswar create spaces that are open, bright, and deeply personal. We balance aesthetics with practicality, designing rooms that are as functional for a weeknight family dinner as they are impressive for Dussehra celebrations.",
      highlight:
        "Functional for a weeknight family dinner, impressive for Dussehra celebrations",
      // 👇 This is what makes the phrase bold + clickable inside the description above.
      // Replace href with your actual Living Room service page route.
      link: {
        text: "Our living room interior designers in Bhubaneswar",
        href: "/services/living-room-interior-design",
      },
      features: [
        {
          title: "Feature Walls",
          desc: "Wooden panelling, textured plaster, natural stone cladding, or Pipli-inspired motif tiles",
        },
        {
          title: "TV Unit Design",
          desc: "TV unit design with concealed wiring, integrated storage, and backlit niches",
        },
        {
          title: "False Ceiling & Lighting",
          desc: "False ceiling with layered cove, spot, and pendant lighting systems",
        },
        {
          title: "Furniture Layout",
          desc: "Furniture layout optimised for natural airflow — critical in Bhubaneswar's warm climate",
        },
        {
          title: "Styling & Coordination",
          desc: "Sofa, rug, cushion, and curtain coordination to complete the design story",
        },
      ],
    },
    {
      id: 3,
      title: "Bedroom Interior Design",
      subtitle: "in Bhubaneswar",
      image: residentialImages.bedroom,
      category: "Private Spaces",
      description:
        "Sleep, rest, and privacy are non-negotiable — and your bedroom should support all three without compromise. Our bedroom interior design in Bhubaneswar creates restful sanctuaries for every family member, from the master suite to the children's room. We specialise in making bedrooms feel generous even when square footage is limited, using design techniques that open up space visually while filling it with smart, concealed storage.",
      highlight: "Bedrooms feel generous even when square footage is limited",
      features: [
        {
          title: "Custom Wardrobes",
          desc: "Custom wardrobe design: sliding shutters, swing doors, internal organiser systems, and full-length mirrors",
        },
        {
          title: "Headboard & Bed-Back Panel",
          desc: "Headboard and bed-back panel design in laminate, fabric, leatherette, or solid wood finish",
        },
        {
          title: "Under-Bed Storage",
          desc: "Under-bed storage drawer systems — essential space-saving in Bhubaneswar apartments",
        },
        {
          title: "Ambient Lighting",
          desc: "False ceiling with ambient and adjustable bedside lighting circuits",
        },
        {
          title: "Children's Rooms",
          desc: "Children's bedroom design: study zones, bunk configurations, and bright, safe material choices",
        },
        {
          title: "Guest & Family Rooms",
          desc: "Guest bedroom and daughter/son's room design as part of full-home projects",
        },
      ],
    },
    {
      id: 4,
      title: "Modular Kitchen Design",
      subtitle: "in Bhubaneswar",
      image: residentialImages.kitchen,
      category: "Culinary Spaces",
      description:
        "The kitchen is where Odia homes come most alive — the fragrance of Pakhala, the sound of morning chai, the rhythm of daily family life. Our modular kitchen designs in Bhubaneswar honour that centrality by creating kitchens that are as efficient as they are beautiful. We design for the way you actually cook: Indian cooking generates heat, oil, and steam at levels that most European kitchen systems are not built for — our material and ventilation specifications account for this from the start.",
      highlight:
        "Material and ventilation specifications built to handle Indian cooking, not just European kitchen systems",
      features: [
        {
          title: "5 Layout Options",
          desc: "L-shaped, straight, parallel, U-shaped, and island kitchen configurations",
        },
        {
          title: "Cabinet Materials",
          desc: "Cabinet materials: laminate, acrylic, membrane, and veneer finish options at every budget tier",
        },
        {
          title: "Premium Hardware",
          desc: "Hardware: soft-close hinges, Haff-channel drawers, magic-corner units, pull-out baskets",
        },
        {
          title: "Countertops",
          desc: "Countertops: granite, quartz, and high-pressure laminate options with waterproof edge-banding",
        },
        {
          title: "Chimney & Plumbing",
          desc: "Chimney placement, sink positioning, and plumbing coordination",
        },
        {
          title: "Moisture-Resistant",
          desc: "Anti-termite and moisture-resistant finishes — essential for Bhubaneswar's humidity",
        },
        {
          title: "Vastu Compliant",
          desc: "Vastu-based kitchen placement available (southeast-facing, as recommended)",
        },
      ],
    },
    {
      id: 5,
      title: "False Ceiling Design",
      subtitle: "in Bhubaneswar",
      image: residentialImages.falseCeiling,
      category: "Architectural Details",
      description:
        "Few upgrades transform a room as dramatically as a well-designed false ceiling. It adds architectural definition, conceals electrical wiring and split-AC ducts, and creates the layered lighting ambience that distinguishes a professionally designed home from a plain one. Infinity Space Odisha installs all major false ceiling systems across residential projects in Bhubaneswar.",
      highlight:
        "All major false ceiling systems installed across residential projects in Bhubaneswar",
      features: [
        {
          title: "POP False Ceiling",
          desc: "Classic, seamless, and paint-ready — starting from Rs. 120/sq.ft",
        },
        {
          title: "Gypsum Board System",
          desc: "Lightweight, precision-fitted, ideal for living rooms and bedrooms — from Rs. 75/sq.ft",
        },
        {
          title: "PVC Panel Ceiling",
          desc: "PVC panel ceiling with integrated LED strips — low-maintenance and moisture-resistant for kitchens and bathrooms",
        },
        {
          title: "Designer Cove Ceilings",
          desc: "Designer cove ceilings with recessed, down-light, and RGB backlight combinations",
        },
        {
          title: "WPC & Wooden Ceilings",
          desc: "WPC and wooden false ceilings for study rooms, entertainment rooms, and premium bedrooms",
        },
      ],
    },
    {
      id: 6,
      title: "Bathroom & Toilet Interior Design",
      subtitle: "",
      image: residentialImages.bathroom,
      category: "Wet Areas",
      description:
        "Bathrooms are the most-used rooms in any home and the most neglected in most interior plans. At Infinity Space Odisha, we give bathrooms the design attention they deserve — creating spaces that are hygienic, practical, and genuinely pleasant to spend time in. From a compact toilet in a 1BHK to a master en-suite in a luxury villa, every bathroom we design is functional first and beautiful always.",
      highlight:
        "Every bathroom we design is functional first and beautiful always",
      features: [
        {
          title: "Tile Selection & Layout",
          desc: "Tile selection and layout design (floor, wall, accent patterns)",
        },
        {
          title: "Sanitary Fittings",
          desc: "Sanitary fitting recommendations (EWC, basin, shower, storage units)",
        },
        {
          title: "Mirror & Vanity Design",
          desc: "Mirror, vanity unit, and under-basin cabinet design",
        },
        {
          title: "Waterproofing",
          desc: "Waterproofing consultation and material specification",
        },
        {
          title: "Modular Accessories",
          desc: "Modular bathroom accessories and towel rail coordination",
        },
      ],
    },
    {
      id: 7,
      title: "Pooja Room Design & Foyer Area Design",
      subtitle: "",
      image: residentialImages.poojaFoyer,
      category: "Cultural Spaces",
      description:
        "Two spaces that define an Odia home more than any other: the foyer that delivers the first impression, and the pooja room that anchors the home's spiritual identity. Our home interior designers in Bhubaneswar treat both with the cultural sensitivity and design skill they command.",
      highlight: "Cultural sensitivity and design skill in equal measure",
      features: [
        {
          title: "Foyer Area Design",
          desc: "Entry foyer with console tables, mirror panels, shoe storage, and a welcoming colour story that sets the tone for the whole home",
        },
        {
          title: "Pooja Room Design",
          desc: "Traditional mandir units in solid wood or engineered wood, with hand-crafted detailing, brass inlay options, recessed lighting, and vastu-directional placement",
        },
        {
          title: "Pooja Niche Design",
          desc: "Integrated sacred spaces within living rooms or bedrooms for compact apartments",
        },
      ],
    },
    {
      id: 8,
      title: "Turnkey Home Interior Services",
      subtitle: "in Bhubaneswar",
      image: residentialImages.turnkey,
      category: "Full Service",
      description:
        "For clients who want a completely hands-off experience, our turnkey home interior services in Bhubaneswar offer end-to-end project management under a single contract. From the first design concept to the final furnishing installation and handover, Infinity Space Odisha manages everything — design, civil work, carpentry, electrical fittings, painting, procurement, and quality control. You hand us the keys; we hand back a move-in-ready home.",
      highlight: "You hand us the keys; we hand back a move-in-ready home",
      features: [
        {
          title: "Dedicated Project Manager",
          desc: "Dedicated project manager as your single point of contact throughout",
        },
        {
          title: "Coordinated Vendor Management",
          desc: "Coordinated vendor management — no separate carpentry, electrical, or civil contractors for you to manage",
        },
        {
          title: "Weekly Progress Updates",
          desc: "Weekly progress updates via WhatsApp with site photos",
        },
        {
          title: "Milestone-Based Timelines",
          desc: "Strict milestone-based timelines — average 2BHK delivery in 35–50 days, 3BHK in 50–75 days",
        },
        {
          title: "Final Quality Walkthrough",
          desc: "Final quality walkthrough with full snag-resolution before keys are returned",
        },
        {
          title: "Transparent Payment",
          desc: "Transparent, milestone-linked payment schedule — no upfront lump-sum demands",
        },
      ],
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-stone-50/50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-100/40 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-50/30 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-50/20 via-amber-50/20 to-transparent rounded-full filter blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-14 lg:mb-20"
        >
          <h2 className="text-[20px] font-black leading-[1.15] text-black sm:text-[42px] lg:text-[40px]">
            Our Home Interior Design Services in Bhubaneswar —
            <span className="block mt-3 sm:mt-4 text-green-700">
              Every Room, Every Style, Every Budget
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-xl text-black font-light leading-relaxed max-w-3xl mx-auto mt-6"
          >
            As one of the{" "}
            <b>most comprehensive interior designers in Bhubaneswar</b> for
            residential projects, Infinity Space Odisha covers every inch of
            your home — from the entrance foyer to the balcony. Our home
            interior services in Bhubaneswar are structured as room-specific
            specialisations delivered under one unified design vision:
          </motion.p>
        </motion.div>

        {/* ===== One card per row, full width, full details, smooth scroll reveal ===== */}
        <div className="max-w-5xl mx-auto flex flex-col gap-10 lg:gap-14">
          {services.map((service, sIndex) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-[1.75rem] border border-stone-200 shadow-lg shadow-stone-900/5 hover:shadow-2xl hover:shadow-green-900/10 hover:border-green-200 transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 sm:p-8 lg:p-10 order-2 lg:order-1">
                    <h3 className="hidden lg:block text-2xl xl:text-[28px] font-black text-stone-900 leading-tight">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="hidden lg:block text-green-700 text-sm font-semibold mt-1">
                        {service.subtitle}
                      </p>
                    )}

                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3 lg:mt-4">
                      {renderDescriptionWithLink(
                        service.description,
                        service.link,
                      )}
                    </p>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-3 sm:p-4 rounded-r-xl mt-5">
                      <p className="text-green-800 font-medium text-xs sm:text-sm">
                        ✦ {service.highlight}
                      </p>
                    </div>

                    {/* Full feature list — every item shown, no truncation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
                      {service.features.map((feature, fIndex) => (
                        <motion.div
                          key={fIndex}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 0.4,
                            delay: fIndex * 0.05,
                          }}
                          className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-transparent hover:bg-green-50 hover:border-green-200 transition-all duration-300"
                        >
                          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-md text-[10px] font-bold mt-0.5 bg-green-100 text-green-600">
                            {fIndex + 1}
                          </span>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-stone-800 leading-snug">
                              {feature.title}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-stone-500 leading-snug mt-0.5">
                              {feature.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Image — always on the right on desktop */}
                  <div className="relative w-full lg:w-[42%] h-64 sm:h-80 lg:h-auto flex-shrink-0 overflow-hidden order-1 lg:order-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-l lg:from-black/10 lg:via-transparent lg:to-transparent" />

                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                        {service.category}
                      </span>
                    </div>

                    <span className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs font-bold">
                      {sIndex + 1}
                    </span>

                    <div className="absolute bottom-4 left-5 right-5 text-white lg:hidden">
                      <h3 className="text-lg sm:text-xl font-bold leading-tight">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="text-white/80 text-xs mt-1">
                          {service.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
