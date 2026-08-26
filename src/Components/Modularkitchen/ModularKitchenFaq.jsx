"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function ModularKitchenFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the cost of modular kitchen design in Bhubaneswar?",
      answer:
        "Modular kitchen design in Bhubaneswar costs between Rs. 80,000 for a basic straight kitchen and Rs. 8 Lakhs or more for a full island kitchen with premium finishes. An L-shaped kitchen — the most common format in Bhubaneswar apartments — typically costs Rs. 1.20 to Rs. 3.20 Lakhs depending on shutter finish, hardware brand, and countertop choice. Infinity Space provides free, fully itemised quotations for every project.",
    },
    {
      question: "Which plywood should be used for a modular kitchen?",
      answer:
        "BWP Grade 710 boiling-waterproof plywood is the correct substrate for any modular kitchen. MR-grade boards absorb moisture over time and begin to delaminate and warp — particularly in kitchens where steam and humidity are present daily. BWP Grade 710 is fully moisture-resistant and termite-treated. At Infinity Space, we specify the plywood grade in writing on every quotation so clients can verify the material independently.",
    },
    {
      question: "How long does modular kitchen installation take?",
      answer:
        "A standard modular kitchen project takes 15 to 25 days from design approval to handover. Cabinet fabrication is done at our facility and runs in parallel with on-site civil and electrical work, so neither stage waits on the other. Infinity Space provides a written milestone timeline before any payment is made and adheres to it throughout the project.",
    },
    {
      question: "Which kitchen layout works best for an apartment?",
      answer:
        "The L-shaped layout is the most practical choice for standard 2BHK and 3BHK apartments — it creates a natural cooking work triangle, works well in most standard kitchen dimensions, and keeps the space feeling open. Parallel or galley kitchens are better suited to narrow elongated spaces. U-shaped layouts work well when both adjacent walls are at least 10 feet long. Infinity Space recommends the right layout after a free on-site measurement.",
    },
    {
      question: "Does Infinity Space offer Vastu-compliant kitchen design?",
      answer:
        "Yes. For clients who want Vastu principles integrated into their kitchen, Infinity Space plans layouts from the outset with southeast kitchen placement, east-facing hob orientation, north or northeast sink positioning, and heavier storage on the south and west walls. All guidelines are incorporated naturally into a functional modern design without compromising workflow or aesthetics.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
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
