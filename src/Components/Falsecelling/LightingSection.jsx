"use client";
import { useRef } from "react";

const options = [
  [
    "Recessed LED downlights",
    "Provide focused or general illumination while maintaining a clean ceiling appearance.",
  ],
  [
    "Concealed LED strip lighting",
    "Creates a soft glow within ceiling recesses and profiles.",
  ],
  [
    "Cove lighting",
    "Adds ambient illumination around selected ceiling sections.",
  ],
  [
    "Profile lights",
    "Introduce linear lighting that complements geometric ceiling patterns.",
  ],
  [
    "Accent lighting",
    "Highlights selected interior features and decorative sections.",
  ],
];

export default function LightingSection() {
  const tiltRef = useRef(null);
  const MAX = 8; // tilt strength in degrees

  // 3D tilt: follows the cursor on desktop, does nothing on touch screens
  const handleMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * MAX}deg) rotateY(${x * MAX}deg) scale(1.02)`;
  };

  const handleLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-black sm:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-700">
            Lighting
          </span>
          <h2 className="mt-3 text-[26px] font-black leading-[1.2] text-black sm:text-[34px] lg:text-[42px]">
            False Ceiling Lighting
            <span className="text-green-700"> Creating the Right Ambience</span>
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#B8924F]" />
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[14px] leading-7 text-neutral-700 sm:text-[16px]">
            <p>
              Lighting is an essential part of false ceiling planning. A ceiling
              may look attractive during the day, but its lighting arrangement
              determines how the room feels after sunset.
            </p>
            <p>
              At Infinity Space, we coordinate ceiling patterns with the
              lighting layout so that fixtures are positioned thoughtfully.
            </p>
            <p className="font-semibold text-black">
              Some commonly used lighting options include:
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* 3D tilt image */}
          <div className="order-2 lg:order-1" style={{ perspective: "1000px" }}>
            <div
              ref={tiltRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              className="relative transition-transform duration-300 ease-out will-change-transform motion-reduce:!transform-none"
            >
              <div className="absolute -inset-2 rounded-[2.2rem] border border-green-700/20" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1d4a42] via-[#12332e] to-[#0b1f1c] shadow-[0_40px_80px_-25px_rgba(0,0,0,0.35)]">
                <img
                  src="/Ceilling page image/False-Ceiling-Lighting-Creating-the-Right-Ambience.webp"
                  alt="False ceiling lighting at night"
                  loading="lazy"
                  onError={(e) => {
                    console.warn("Image not found:", e.currentTarget.src);
                    e.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Options list */}
          <div className="order-1 lg:order-2">
            <ul className="space-y-3">
              {options.map(([t, d], i) => (
                <li
                  key={t}
                  className="group flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-green-600 hover:bg-green-50/60 hover:shadow-lg"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-semibold text-white shadow-[0_0_10px_2px_rgba(21,128,61,0.3)]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-black sm:text-xl">
                      {t}
                    </h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-gray-700">
                      {d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing note */}
        <p className="mx-auto mt-14 max-w-3xl text-center text-xl italic leading-snug text-neutral-800 sm:text-2xl">
          The number, position and brightness of lights should depend on the
          room size, natural lighting and intended use. Planning these details
          before installation also helps avoid unnecessary changes later.
        </p>
      </div>
    </section>
  );
}
