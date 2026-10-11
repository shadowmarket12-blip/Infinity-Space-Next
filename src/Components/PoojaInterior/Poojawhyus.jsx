"use client";

import React from "react";

const poojaPoints = [
  {
    lead: "Pooja-specific planning",
    rest: " rather than a generic room template.",
  },
  {
    lead: "Custom mandir and storage options",
    rest: " for different home sizes.",
  },
  {
    lead: "Design coordination",
    rest: " that considers the pooja space alongside the surrounding room.",
  },
  {
    lead: "Material, colour and lighting selection",
    rest: " based on the home's existing or planned interiors.",
  },
  {
    lead: "Support with layout decisions",
    rest: ", quotation and execution coordination.",
  },
  {
    lead: "Flexibility",
    rest: " for traditional, modern and hybrid pooja spaces.",
  },
];

const DiyaIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.5c1.6 2.1 2.5 3.7 2.5 5.1a2.5 2.5 0 0 1-5 0c0-1.4.9-3 2.5-5.1Z" />
    <path d="M4 13.5h16c0 4-3.6 7-8 7s-8-3-8-7Z" />
    <path d="M8.5 20.5h7" />
  </svg>
);

export default function Poojawhyus() {
  return (
    <section
      aria-labelledby="pooja-why-heading"
      className="relative isolate overflow-hidden bg-white py-16 text-stone-900 sm:py-20 lg:py-28"
    >
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-green-100/60 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-emerald-100/50 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-100/40 blur-[120px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(21,128,61,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(21,128,61,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Top & bottom hairlines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-300/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* LEFT: Heading + intro + arch motif */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5">
              <DiyaIcon className="h-3.5 w-3.5 text-green-700" />
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-green-800">
                Pooja Room Interiors
              </span>
            </div>

            <h2
              id="pooja-why-heading"
              className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]"
            >
              Why Choose{""}
              <span className="text-green-700"> Infinity Space</span> for Pooja
              Room Interiors?
            </h2>

            <p className="mt-7 text-pretty text-[0.9375rem] leading-relaxed text-stone-600 sm:text-base sm:leading-[1.8]">
              A pooja space has a different purpose from the other rooms in a
              home, so it deserves a different design conversation. At Infinity
              Space, an interior design company in Bhubaneswar we focus on
              details that matter specifically to this space: where the mandir
              sits, how it is seen from the surrounding room, how daily-use
              items are stored, how light falls on the shrine and how
              traditional preferences can be incorporated without making the
              design impractical.
            </p>

            {/* Decorative arch motif */}
            <div className="mt-10 hidden items-end gap-1.5 lg:flex">
              {[...Array(9)].map((_, i) => {
                const heights = [24, 34, 46, 58, 72, 58, 46, 34, 24];
                return (
                  <span
                    key={i}
                    className="w-1.5 rounded-t-full bg-gradient-to-t from-green-200 to-green-600"
                    style={{ height: `${heights[i]}px` }}
                  />
                );
              })}
            </div>
          </div>

          {/* RIGHT: Numbered points list */}
          <ol className="lg:col-span-7">
            {poojaPoints.map((point, index) => (
              <li
                key={index}
                className="group relative border-t border-stone-200 last:border-b"
              >
                <div className="flex items-start gap-5 py-6 transition-all duration-300 ease-out hover:pl-2 sm:gap-7 sm:py-7">
                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 font-serif text-2xl font-light tabular-nums text-green-700/60 transition-colors duration-300 group-hover:text-green-700 sm:text-3xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Divider line */}
                  <span className="mt-3 h-px w-6 shrink-0 bg-green-600/40 transition-all duration-300 group-hover:w-10 group-hover:bg-green-700 sm:w-10 sm:group-hover:w-14" />

                  {/* Text */}
                  <p className="flex-1 text-[0.9375rem] leading-relaxed text-stone-600 transition-colors duration-300 group-hover:text-stone-800 sm:text-base sm:leading-[1.75]">
                    <span className="font-semibold text-black">
                      {point.lead}
                    </span>
                    {point.rest}
                  </p>

                  {/* Hover diya icon */}
                  <DiyaIcon className="mt-1 hidden h-4 w-4 shrink-0 text-green-700/0 transition-all duration-300 group-hover:text-green-700 sm:block" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
