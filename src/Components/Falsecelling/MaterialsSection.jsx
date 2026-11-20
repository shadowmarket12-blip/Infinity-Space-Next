"use client";
import { useState } from "react";
import { ImageSlot } from "./Slotimage";

const materials = [
  {
    title: "Gypsum False Ceiling",
    image: "/images/ceiling/material-gypsum.jpg",
    text: "Gypsum boards are widely used for contemporary false ceiling designs because they provide a smooth finish and can accommodate recessed lights and cove lighting. They are suitable for simple ceiling borders, layered designs and clean geometric layouts.",
  },
  {
    title: "POP False Ceiling",
    image: "/images/ceiling/material-pop.jpg",
    text: "Plaster of Paris is used for decorative ceiling profiles, mouldings and selected shaped details. It offers flexibility for certain design treatments, although the final finish depends on proper application and workmanship.",
  },
  {
    title: "Wooden False Ceiling",
    image: "/images/ceiling/material-wood.jpg",
    text: "Wooden ceiling elements or wood-finish panels can add warmth and natural texture to an interior. Their suitability depends on the selected product, room conditions, budget and maintenance expectations.",
  },
  {
    title: "PVC False Ceiling",
    image: "/images/ceiling/material-pvc.jpg",
    text: "PVC ceiling panels may be considered for specific applications where their finish and maintenance characteristics suit the space. Product quality and site conditions should be assessed before choosing this option.",
  },
];

export default function MaterialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading + Paragraph */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Choosing the Right Material{""}
            <span className="text-green-700"> for Your False Ceiling</span>
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-[13px] leading-6 text-black sm:text-[14px] sm:leading-7">
            The material used for a false ceiling affects its finish, detailing,
            installation requirements and maintenance. At Infinity Space, we
            help you consider suitable materials based on the design, site
            conditions and intended appearance.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4 lg:h-[34rem] lg:flex-row">
          {materials.map((m, idx) => {
            const on = active === idx;
            return (
              <article
                key={m.title}
                tabIndex={0}
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                className={`group relative min-h-[22rem] cursor-pointer overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(14,43,39,0.7)] outline-none transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] focus-visible:ring-2 focus-visible:ring-black lg:min-h-0 ${
                  on ? "lg:flex-[3]" : "lg:flex-1"
                }`}
              >
                {/* ADD IMAGE: material-*.jpg */}
                <ImageSlot
                  src={m.image}
                  alt={m.title}
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f1c] via-[#0b1f1c]/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-[#ECEBE7] sm:p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium sm:text-3xl lg:whitespace-nowrap">
                    {m.title}
                  </h3>
                  <p
                    className={`mt-3 max-w-xl text-[0.95rem] leading-relaxed text-[#ECEBE7]/80 transition-all duration-500 lg:overflow-hidden ${
                      on
                        ? "lg:max-h-48 lg:opacity-100"
                        : "lg:max-h-0 lg:opacity-0"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
                <span
                  className={`absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-[#B8924F] transition-opacity ${on ? "opacity-100" : "opacity-0"}`}
                />
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-2xl italic leading-snug text-black sm:text-2xl">
          There is no single material that works best for every project. We
          consider the design requirements, ceiling condition, lighting
          integration and expected maintenance before finalising the material.
        </p>
      </div>
    </section>
  );
}
