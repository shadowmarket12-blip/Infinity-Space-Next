"use client";

import React from "react";
import { FiPlus } from "react-icons/fi";

function FaqAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
        isOpen
          ? "border-[#2B3A67]/30 bg-[#2B3A67]/[0.03]"
          : "border-[#E7E2D8] bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-[#14181B] sm:text-base">
          {item.question}
        </span>
        <span
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#2B3A67] text-white rotate-45"
              : "bg-[#F2EFE8] text-[#5B6169]"
          }`}
        >
          <FiPlus className="h-3.5 w-3.5" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm leading-relaxed text-[#5B6169]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogFaqSection({ faq }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  if (!faq || faq.length === 0) return null;

  return (
    <section className="mt-12 border-t border-[#E7E2D8] pt-10">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B98A1D]">
        FAQ
      </span>
      <h2 className="mb-6 mt-2 text-2xl font-semibold text-[#14181B]">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-3">
        {faq.map((item, index) => (
          <FaqAccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}
