"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function PoojaInteriorFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is the cost of a pooja room interior design in Bhubaneswar?",
      answer:
        "The cost depends on the size, type of pooja unit, materials, storage, lighting, wall treatment, partition and level of customisation. Infinity Space prepares the quotation after understanding the actual space and scope of work.",
    },
    {
      question: "Can Infinity Space design a pooja room for a small apartment?",
      answer:
        "Yes. We can plan compact wall-mounted, built-in, corner or customised pooja units depending on the available space. Storage and proportions are planned carefully so the unit does not unnecessarily reduce usable floor area.",
    },
    {
      question: "Can you include Vastu requirements in the pooja room design?",
      answer:
        "Yes. If Vastu is important to you, discuss it with us during the initial planning stage. We can incorporate practical Vastu considerations where the home's layout and site conditions allow.",
    },
    {
      question:
        "Can I choose between a traditional and modern pooja room design?",
      answer:
        "Yes. We can create traditional, contemporary or hybrid designs. The mandir structure, backdrop, materials, storage, lighting and decorative details can be customised to suit your home's overall style.",
    },
    {
      question: "Can I see the pooja room design before execution?",
      answer:
        "Yes. We develop a clear design proposal before execution so you can review the layout, materials, colours and key details and make decisions before the work begins.",
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
