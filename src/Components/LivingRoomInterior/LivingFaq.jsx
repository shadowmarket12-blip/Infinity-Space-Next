"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function LivingRoomFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is the cost of living room interior design in Bhubaneswar?",
      answer:
        "Living room interior design in Bhubaneswar costs between Rs. 1.00 Lakh and Rs. 3.50 Lakhs for a full living and dining area — TV unit, feature wall, false ceiling with cove lighting, crockery unit, and foyer design. Individual elements start from Rs. 18,000. Infinity Space provides free itemised quotations with zero hidden charges.",
    },
    {
      question:
        "How long does a living room interior design project take in Bhubaneswar?",
      answer:
        "A standard living room project in Bhubaneswar — TV unit, feature wall, false ceiling, and crockery unit — takes 20 to 35 days from design approval to handover. The initial consultation and 3D design phase takes a further 10 to 15 days. Larger scope or civil work may extend the timeline, agreed upfront.",
    },
    {
      question: "Do living room designers in Bhubaneswar follow Vastu Shastra?",
      answer:
        "Yes. Infinity Space integrates Vastu principles into every living room design — main sofa facing north or east, TV wall on the south or southwest, northeast corner kept light and open. These are incorporated naturally from the first floor plan draft without compromising the modern layout or aesthetics.",
    },
    {
      question: "Can I see my living room design in 3D before work starts?",
      answer:
        "Yes — and this is included as standard on every Infinity Space project, not as a paid add-on. We provide photorealistic 3D renders of your living room from multiple viewpoints before any fabrication or material ordering begins. You review, request changes, and approve when you are fully satisfied.",
    },
    {
      question:
        "What living room design styles are popular in Bhubaneswar in 2026?",
      answer:
        "The most popular styles in Bhubaneswar in 2026 are Contemporary Indian Modern — warm wood tones, neutral walls, layered lighting — and Traditional Odia-Modern with Kalinga-inspired wooden panel accents and earthy palettes. Warm Minimalist and Biophilic designs with cane furniture and indoor plants are also rising fast in Bhubaneswar's premium apartment segment.",
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
