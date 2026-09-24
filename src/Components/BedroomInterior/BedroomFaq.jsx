"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function BedroomFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the cost of bedroom interior design in Bhubaneswar?",
      answer:
        "The cost depends on the bedroom size, wardrobe, bed, dressing unit, materials, finishes, lighting and other requirements. At Infinity Space, we understand the scope first and then prepare a quotation based on your specific requirements.",
    },
    {
      question: "How can Infinity Space make a small bedroom more functional?",
      answer:
        "We look at the available floor and wall space and explore solutions such as sliding wardrobes, vertical storage, storage beds, built-in furniture and customised layouts to make the room more practical.",
    },
    {
      question: "What bedroom storage solutions do you provide?",
      answer:
        "We can plan wardrobes, loft storage, sliding and hinged wardrobes, hydraulic storage beds, bedside storage, dressing units and customised internal storage based on the available space and your requirements.",
    },
    {
      question: "Can you design a complete master bedroom?",
      answer:
        "Yes. We can plan the complete master bedroom, including the bed, wardrobe, dressing unit, storage, lighting, ceiling, wall treatments and other furniture according to the room and your preferences.",
    },
    {
      question: "Can you design bedroom interiors according to a fixed budget?",
      answer:
        "Yes. We can discuss your budget at the beginning and prioritise the elements that matter most to you. This allows the bedroom design to be developed around your actual requirements rather than adding unnecessary features.",
    },
    {
      question:
        "Which home interior solutions provider in Bhubaneswar can help with bedroom interiors?",
      answer:
        "Infinity Space provides customised home interior solutions in Bhubaneswar, including bedroom design, wardrobes, storage solutions, beds, dressing units, lighting, furniture and other interior requirements.",
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
