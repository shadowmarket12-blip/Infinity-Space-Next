"use client";
import { useState } from "react";

const materials = [
  {
    title: "Gypsum False Ceiling",
    image: "/Ceilling page image/Gypsum-False-Ceiling.webp",
    text: "Gypsum boards are widely used for contemporary false ceiling designs because they provide a smooth finish and can accommodate recessed lights and cove lighting. They are suitable for simple ceiling borders, layered designs and clean geometric layouts.",
  },
  {
    title: "POP False Ceiling",
    image: "/Ceilling page image/POP-False-Ceiling.webp",
    text: "Plaster of Paris is used for decorative ceiling profiles, mouldings and selected shaped details. It offers flexibility for certain design treatments, although the final finish depends on proper application and workmanship.",
  },
  {
    title: "Wooden False Ceiling",
    image: "/Ceilling page image/Wooden-False-Ceiling.webp",
    text: "Wooden ceiling elements or wood-finish panels can add warmth and natural texture to an interior. Their suitability depends on the selected product, room conditions, budget and maintenance expectations.",
  },
  {
    title: "PVC False Ceiling",
    image: "/Ceilling page image/PVC-False-Ceiling.webp",
    text: "PVC ceiling panels may be considered for specific applications where their finish and maintenance characteristics suit the space. Product quality and site conditions should be assessed before choosing this option.",
  },
];

export default function MaterialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-700">
            Materials
          </span>
          <h2 className="mt-3 text-[26px] font-black leading-[1.2] text-black sm:text-[34px] lg:text-[42px]">
            Choosing the Right Material
            <span className="text-green-700"> for Your False Ceiling</span>
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#B8924F]" />
          <p className="mx-auto mt-6 max-w-3xl text-[14px] leading-7 text-neutral-700 sm:text-[15px]">
            The material used for a false ceiling affects its finish, detailing,
            installation requirements and maintenance. At Infinity Space, we
            help you consider suitable materials based on the design, site
            conditions and intended appearance.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 flex flex-col gap-4 lg:h-[34rem] lg:flex-row">
          {materials.map((m, idx) => {
            const on = active === idx;
            return (
              <article
                key={m.title}
                tabIndex={0}
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                className={`group relative min-h-[22rem] cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-[#1d4a42] via-[#12332e] to-[#0b1f1c] shadow-[0_30px_60px_-30px_rgba(14,43,39,0.7)] outline-none transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] focus-visible:ring-2 focus-visible:ring-green-700 lg:min-h-0 lg:min-w-[11rem] ${
                  on ? "lg:flex-[2]" : "lg:flex-1"
                }`}
              >
                {/* Background image */}
                <img
                  src={m.image}
                  alt={m.title}
                  loading="lazy"
                  onError={(e) => {
                    console.warn("Image not found:", m.image);
                    e.currentTarget.style.display = "none";
                  }}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ${
                    on ? "scale-105" : "scale-100"
                  }`}
                />

                {/* Dark overlay for readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f1c] via-[#0b1f1c]/55 to-transparent" />

                {/* Number badge */}
                <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30 text-xs font-semibold text-white backdrop-blur-sm">
                  0{idx + 1}
                </span>

                {/* Active dot */}
                <span
                  className={`absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-[#B8924F] transition-opacity duration-500 ${
                    on ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Text: always horizontal, wraps by whole words */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-[#ECEBE7] sm:p-8 lg:p-5 xl:p-7">
                  <h3
                    style={{ writingMode: "horizontal-tb" }}
                    className={`break-normal font-semibold leading-tight transition-all duration-500 ${
                      on
                        ? "text-2xl sm:text-3xl"
                        : "text-2xl lg:text-lg xl:text-xl"
                    }`}
                  >
                    {m.title}
                  </h3>

                  <div
                    className={`mt-3 h-0.5 bg-[#B8924F] transition-all duration-500 ${
                      on ? "w-12" : "w-6"
                    }`}
                  />

                  <p
                    style={{ writingMode: "horizontal-tb" }}
                    className={`mt-3 max-w-xl break-normal text-[0.95rem] leading-relaxed text-[#ECEBE7]/85 transition-all duration-500 lg:overflow-hidden ${
                      on
                        ? "lg:max-h-48 lg:opacity-100"
                        : "lg:max-h-0 lg:opacity-0"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing note */}
        <p className="mx-auto mt-12 max-w-3xl text-center text-xl italic leading-snug text-neutral-800 sm:text-2xl">
          There is no single material that works best for every project. We
          consider the design requirements, ceiling condition, lighting
          integration and expected maintenance before finalising the material.
        </p>
      </div>
    </section>
  );
}
