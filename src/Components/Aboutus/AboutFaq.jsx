"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function AboutFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I choose the right interior designers in Bhubaneswar?",
      answer:
        "When choosing interior designers in Bhubaneswar, look for experience, project quality, transparent communication, space planning expertise, material quality, and execution capability. Reviewing completed projects and understanding the design process can also help in making the right decision.",
    },
    {
      question:
        "What makes Infinity Space different from other interior designers in Bhubaneswar?",
      answer:
        "Our approach focuses on personalized design, practical functionality, organized execution, and thoughtful space planning. Every project is designed according to the client's lifestyle, preferences, and usability requirements instead of following repetitive concepts.",
    },
    {
      question:
        "Do interior designers help with space planning for small homes?",
      answer:
        "Yes, professional interior designers help optimize compact spaces through smart layouts, storage planning, multifunctional furniture, and efficient space utilization to improve comfort and usability.",
    },
    {
      question: "Why is 3D interior design important before execution?",
      answer:
        "3D interior visualization helps clients understand layouts, colors, furniture placement, lighting concepts, and overall design flow before execution begins, making the planning process clearer and more efficient.",
    },
    {
      question:
        "How long does a complete interior design project usually take?",
      answer:
        "Project timelines depend on space size, customization level, material selection, and execution scope. Proper planning and organized workflow help ensure smooth and timely project completion.",
    },
    {
      question:
        "What should I consider before starting a home interior project?",
      answer:
        "Before starting an interior project, it is important to consider space requirements, lifestyle needs, storage planning, budget, material preferences, lighting, and long-term functionality.",
    },
    {
      question:
        "Do interior designers in Bhubaneswar provide turnkey solutions?",
      answer:
        "Many professional interior designers offer turnkey interior solutions that include planning, 3D design, civil work, carpentry, electrical work, furniture installation, and final execution under one roof.",
    },
    {
      question: "What are the latest interior design trends for modern homes?",
      answer:
        "Modern interior trends focus on minimal layouts, smart storage, balanced lighting, neutral color palettes, modular furniture, textured finishes, and space-efficient design concepts that improve both aesthetics and functionality.",
    },
    {
      question: "Is modular furniture a good option for modern homes?",
      answer:
        "Yes, modular furniture is highly preferred for modern homes because it improves space utilization, offers better organization, and provides flexibility in design and storage planning.",
    },
    {
      question: "How can good interior design improve everyday living?",
      answer:
        "Well-planned interiors improve comfort, organization, functionality, movement flow, lighting balance, storage efficiency, and overall living experience while creating a more visually comfortable environment.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        {/* BACKGROUND */}
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

        {/* Grid Pattern */}
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

            <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Your Questions,{" "}
              <span className="text-[rgba(1,101,63,1)]">Answered</span>
            </h2>

            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Find answers to common questions about our interior design
              services and process
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="mt-14 space-y-4 sm:space-y-5 lg:mt-20 lg:space-y-6">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className={`group overflow-hidden rounded-[24px] border bg-white transition-all duration-500 sm:rounded-[28px] ${
                    isActive
                      ? "border-[rgba(1,101,63,0.20)] shadow-[0_20px_70px_rgba(1,101,63,0.10)]"
                      : "border-[rgba(1,101,63,0.08)] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(1,101,63,0.08)]"
                  }`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-start justify-between gap-4 px-4 py-5 text-left sm:px-6 sm:py-6 lg:px-8 lg:py-7"
                  >
                    {/* Question Text */}
                    <h3 className="pr-1 text-[11px] font-bold leading-4 text-black sm:text-sm md:text-base lg:text-lg">
                      {faq.question}
                    </h3>

                    {/* Toggle Icon */}
                    <motion.div
                      animate={{
                        rotate: isActive ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
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
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
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
    </>
  );
}
