"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function HomeFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why choose Infinity Space for interior design in Bhubaneswar?",
      answer:
        "We create modern, functional, and customized interiors tailored to your lifestyle, space requirements, and design preferences with complete planning and execution support.",
    },
    {
      question: "What interior design services do you provide?",
      answer:
        "Our services include residential interiors, modular kitchens, office interiors, wardrobe design, TV units, false ceiling concepts, customized furniture, and turnkey interior solutions.",
    },
    {
      question: "Do you provide modular kitchen design services?",
      answer:
        "Yes, we design modern modular kitchens with smart layouts, optimized storage, premium finishes, and functional space planning for contemporary homes.",
    },
    {
      question: "Do you provide office interior design services?",
      answer:
        "Yes, we design office spaces, workstations, retail interiors, clinics, showrooms, and commercial spaces focused on functionality, branding, and productivity.",
    },
    {
      question: "What is the cost of interior design in Bhubaneswar?",
      answer:
        "Interior design costs depend on space size, material selection, customization requirements, and project scope. Pricing varies based on design preferences and execution needs.",
    },
    {
      question: "Do you offer turnkey interior solutions?",
      answer:
        "Yes, complete turnkey solutions are available including planning, 3D design, civil work, electrical work, carpentry, furniture installation, lighting, and final execution.",
    },
    {
      question: "How long does an interior project take?",
      answer:
        "Project timelines vary depending on the size, customization, and scope of work. Most projects are completed within a planned timeline after design approval.",
    },
    {
      question: "Do you provide customized wardrobe and TV unit designs?",
      answer:
        "Yes, customized wardrobes, TV units, modular storage, and furniture concepts are designed according to your space and interior theme.",
    },
    {
      question: "Do you provide 3D interior design visualization?",
      answer:
        "Yes, detailed 3D concepts and layout plans are provided before execution to help visualize the final interior design.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* BACKGROUND */}
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
          className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[rgba(1,101,63,0.06)] blur-[120px]"
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

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group overflow-hidden rounded-[24px] border bg-white transition-all duration-500 sm:rounded-[28px] ${
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
                  <div className="flex items-start gap-3 sm:gap-5">
                    <h3 className="pr-1 text-[11px] font-bold leading-4 text-black sm:text-sm md:text-base lg:text-lg">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-10 w-10 min-w-[40px] items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 ${
                      isActive
                        ? "bg-[rgba(1,101,63,1)] text-white"
                        : "bg-[rgba(1,101,63,0.08)] text-[rgba(1,101,63,1)]"
                    }`}
                  >
                    {isActive ? (
                      <FaMinus className="text-sm" />
                    ) : (
                      <FaPlus className="text-sm" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[rgba(1,101,63,0.08)] px-4 pb-6 pt-5 sm:px-6 sm:pb-7 lg:px-8">
                        <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
