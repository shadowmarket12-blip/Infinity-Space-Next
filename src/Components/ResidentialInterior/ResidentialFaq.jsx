// app/residential-faq/page.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function ResidentialFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the cost of home interior design in Bhubaneswar?",
      answer:
        "Home interior design in Bhubaneswar costs between Rs. 1.80 Lakhs for a compact 1BHK and Rs. 18 Lakhs or more for a full 3BHK with premium finishes. A 2BHK typically ranges from Rs. 3.50 to Rs. 10 Lakhs depending on scope and materials. Infinity Space Odisha provides free, itemised quotations with zero hidden charges.",
    },
    {
      question:
        "Which is the best interior design company in Bhubaneswar for home interiors?",
      answer:
        "The best interior design company in Bhubaneswar combines local expertise, design quality, transparent pricing, and reliable execution. Infinity Space Odisha offers full-home residential interior design across all localities in Bhubaneswar — backed by free 3D visualisation, a 5-year workmanship warranty, and a track record of 200+ completed projects across Odisha.",
    },
    {
      question:
        "How long does a home interior design project take in Bhubaneswar?",
      answer:
        "A single room such as a modular kitchen or bedroom takes 15–30 days. A 2BHK full-home interior typically takes 35–50 days and a 3BHK takes 55–75 days. Infinity Space Odisha provides a milestone-based project timeline at the quotation stage and adheres to it throughout execution",
    },
    {
      question:
        "Do interior designers in Bhubaneswar include Vastu Shastra in home design?",
      answer:
        "Yes. Infinity Space Odisha integrates Vastu Shastra from the earliest planning stage — kitchen in the southeast, master bedroom in the southwest, pooja room in the northeast. These placements are built naturally into modern floor plans without compromising the overall design aesthetic or functional layout of your home.",
    },
    {
      question: "Can I see my home design in 3D before work begins?",
      answer:
        "Yes. Infinity Space Odisha provides free, detailed 3D visualisations covering every room before any material is ordered or work begins. You review, suggest changes, and approve the design digitally at multiple angles. Work only starts once you are completely satisfied — eliminating surprises and ensuring the final result matches your vision exactly.",
    },
    {
      question:
        "What materials are best for home interiors in Bhubaneswar's climate?",
      answer:
        "Bhubaneswar's heat and monsoon humidity require marine-grade BWP/BWR plywood, heat-resistant laminates, waterproof edge-banding, and anti-termite treatment on all woodwork. For hardware, brands like Hettich, Hafele, and Blum are rated for high-humidity environments. Infinity Space Odisha specifies all materials with Bhubaneswar's tropical climate in mind as a standard practice.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      {/* Gradient Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full "
        />

        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] right-[-120px] h-[450px] w-[450px] rounded-full bg-[rgba(1,101,63,0.05)] blur-[140px]"
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ====================================================== */}
      {/* CONTENT */}
      {/* ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(1,101,63,0.10)] bg-[rgba(1,101,63,0.05)] px-5 py-3 text-xs font-semibold text-[rgba(1,101,63,1)] shadow-lg sm:px-6 sm:text-lg">
            <FaQuestionCircle />
            Frequently Asked Questions
          </div>
        </motion.div>

        {/* FAQ */}
        <div className="mt-14 space-y-4 sm:space-y-5 lg:mt-20 lg:space-y-6">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-[24px] border bg-white transition-all duration-500 ease-out sm:rounded-[28px]
                ${
                  isActive
                    ? "border-[rgba(1,101,63,0.20)] shadow-[0_20px_70px_rgba(1,101,63,0.10)]"
                    : "border-[rgba(1,101,63,0.08)] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(1,101,63,0.08)]"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-4 px-4 py-5 text-left sm:px-6 sm:py-6 lg:px-8 lg:py-7"
                >
                  {/* Left */}
                  <div className="flex items-start gap-3 sm:gap-5">
                    <h3 className="pr-1 text-[11px] font-bold leading-4 text-black sm:text-sm md:text-base lg:text-lg">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Icon */}
                  <div
                    className={`flex h-10 w-10 min-w-[40px] items-center justify-center rounded-xl transition-all duration-500 ease-out sm:h-12 sm:w-12
                    ${
                      isActive
                        ? "bg-[rgba(1,101,63,1)] text-white rotate-180"
                        : "bg-[rgba(1,101,63,0.08)] text-[rgba(1,101,63,1)] rotate-0"
                    }`}
                  >
                    <FaPlus
                      className={`text-sm transition-all duration-500 ease-out ${
                        isActive
                          ? "opacity-0 scale-0 rotate-90"
                          : "opacity-100 scale-100 rotate-0"
                      }`}
                    />
                    <FaMinus
                      className={`text-sm absolute transition-all duration-500 ease-out ${
                        isActive
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-0 -rotate-90"
                      }`}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[rgba(1,101,63,0.08)] px-4 pb-6 pt-5 sm:px-6 sm:pb-7 lg:px-8">
                      <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
