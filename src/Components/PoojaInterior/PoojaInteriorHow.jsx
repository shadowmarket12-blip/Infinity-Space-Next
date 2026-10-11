"use client";
import { useState } from "react";

const IMG = {
  hero: "/pooja/How-We-Plan-Your-Pooja-Room-at-Infinity-Space.webp",
  dedicated: "/pooja/Dedicated-pooja-room-interiors.webp",
  small: "/pooja/Small-Pooja-Room-Design-for-Apartments.webp",
  living: "/pooja/Pooja-Unit-in-the-Living-Room.webp",
  dining: "/pooja/Pooja-Space-Near-the-Dining-Area.webp",
  traditional: "/pooja/Traditional-Pooja-Room-Design.webp",
  modern: "/pooja/Modern-Pooja-Room-Design.webp",
  storage: "/pooja/Custom-Pooja-Mandir-Shelves-and-Storage.webp",
  materials: "/pooja/Materials-and-Finishes-for-Your-Pooja-Room.webp",
  lighting: "/pooja",
  vastu: "/pooja/Vastu-Considerations-for-Pooja-Room-Planning.webp",
};

function Img({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-green-200 via-emerald-100 to-stone-200 ${className}`}
      />
    );
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

const planning = [
  [
    "Mandir proportion",
    "We size the shrine according to the wall, ceiling height and the scale of the idols or frames you want to place.",
  ],
  [
    "Open or enclosed design",
    "We help you decide whether an open mandir, framed niche, glass enclosure or partitioned unit works better for the location.",
  ],
  [
    "Daily-use storage",
    "Drawers, shelves and concealed compartments can be planned for diyas, incense, prayer books, puja items and other essentials.",
  ],
  [
    "Diya and incense planning",
    "The design can include suitable ledges, ventilation considerations and clear space around areas used for lamps and incense.",
  ],
  [
    "Backdrop detailing",
    "Wood, stone-look finishes, fluted panels, jaali work, marble-look surfaces or a simpler painted backdrop can be selected according to the style of the home.",
  ],
  [
    "Lighting placement",
    "We plan illumination around the deity area, backdrop and shelves so the mandir remains warm and clear without excessive glare.",
  ],
  [
    "Integration with existing interiors",
    "If the pooja unit sits within a living or dining area, we make its materials and proportions work with the surrounding furniture instead of making it look disconnected.",
  ],
];

const homes = [
  {
    title: "Dedicated Pooja Room",
    img: IMG.dedicated,
    body: [
      "If your home has a separate room for prayer, we can give the space a more complete identity. The layout can accommodate the main mandir, storage, seating or floor space for rituals, decorative detailing and dedicated lighting without making the room unnecessarily elaborate.",
    ],
  },
  {
    title: "Small Pooja Room Design for Apartments",
    img: IMG.small,
    body: [
      "A small pooja room design needs careful control of depth, storage and circulation. For apartments and homes where space is limited, we can use a wall mounted pooja unit, built-in mandir, compact corner unit or customised niche. This can create a defined prayer space without taking away unnecessary floor area.",
      "For a 2 BHK or 3 BHK apartment, we can also consider how the pooja unit fits into the overall room layout rather than treating it as an isolated piece of furniture.",
    ],
  },
  {
    title: "Pooja Unit in the Living Room",
    img: IMG.living,
    body: [
      "A living-room mandir needs more planning because it shares visual space with the rest of the room. We can use a niche, CNC jali or decorative partition, sliding shutters or a built-in unit to give the pooja area a sense of separation while keeping the overall interior cohesive.",
      "The partition does not always need to be solid. A patterned screen or carefully proportioned open unit can provide definition while allowing light and visual continuity.",
    ],
  },
  {
    title: "Pooja Space Near the Dining Area",
    img: IMG.dining,
    body: [
      "For homes where the dining area is the practical location, we can create a compact shrine that feels distinct without interrupting movement. A slim unit, decorative partition or recessed niche can define the space while retaining an open feel.",
    ],
  },
];

const materials = [
  "Wood and wood-finish surfaces for a warm, traditional feel.",
  "Marble or marble-look backdrops for a refined, structured appearance.",
  "CNC jali panels for a decorative backdrop or a light visual partition.",
  "Glass elements when you want visual separation without making the space feel enclosed.",
  "Laminate and other practical finishes for homeowners who prefer easier day-to-day maintenance.",
];

/* Section heading: black text + green-700 highlighted part */
const Heading = ({ plain, accent, className = "" }) => (
  <h2
    className={`mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px] ${className}`}
  >
    {plain} <span className="text-green-700">{accent}</span>
  </h2>
);

const Para = ({ children, className = "" }) => (
  <p
    className={`text-base leading-relaxed text-stone-700 sm:text-lg ${className}`}
  >
    {children}
  </p>
);

/* Decorative compass icon for the Vastu section */
const Compass = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
    <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="3" />
    <circle
      cx="32"
      cy="32"
      r="22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="2 4"
    />
    <path d="M32 9l6 23-6 23-6-23 6-23z" fill="currentColor" opacity="0.9" />
    <path d="M9 32l23-6 23 6-23 6-23-6z" fill="currentColor" opacity="0.35" />
    <circle cx="32" cy="32" r="3.5" fill="white" />
  </svg>
);

export default function PoojaInteriorHow() {
  return (
    <div className="bg-white text-stone-800">
      {/* ---------- 1. HOW WE PLAN ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Heading
              plain="How We Plan Your Pooja Room"
              accent="at Infinity Space"
            />
            <div className="mt-6 h-1 w-20 rounded-full bg-green-600" />
            <Para className="mt-6">
              Our design decisions are specific to the pooja space rather than
              borrowed from a general room-interior formula. We pay attention to
              details that are easy to overlook during planning.
            </Para>
          </div>
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-3xl border-2 border-green-500 sm:block" />
            <Img
              src={IMG.hero}
              alt="Custom pooja mandir designed by Infinity Space"
              className="relative aspect-[4/3] w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {planning.map(([title, text], i) => (
            <li
              key={title}
              className={`rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                i === planning.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="mb-4 block h-2 w-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-400" />
              <h3 className="text-lg font-bold text-black sm:text-xl">
                {title}:
              </h3>
              <p className="mt-2 text-stone-600">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- 2. DIFFERENT TYPES OF HOMES (light green) ---------- */}
      <section className="bg-green-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Heading
            plain="Pooja Room Designs for"
            accent="Different Types of Homes"
          />

          <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-20">
            {homes.map((h, i) => (
              <article
                key={h.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Img
                  src={h.img}
                  alt={h.title}
                  className={`aspect-[4/3] w-full rounded-3xl shadow-xl ${i % 2 ? "lg:order-2" : ""}`}
                />
                <div>
                  <h3 className="text-xl font-bold text-green-800 sm:text-2xl lg:text-3xl">
                    {h.title}
                  </h3>
                  <div className="mt-4 space-y-4">
                    {h.body.map((p) => (
                      <Para key={p}>{p}</Para>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3. TRADITIONAL OR MODERN ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Heading
          className="max-w-3xl"
          plain="Traditional or Modern Pooja Room Design?"
          accent="We Can Work With Both"
        />
        <Para className="mt-6 max-w-3xl">
          Some families prefer a traditional wooden pooja mandir, while others
          want a cleaner contemporary unit with simple lines and subtle
          lighting. We can create either style or combine elements from both.
        </Para>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-green-50 ring-1 ring-green-200">
            <Img
              src={IMG.traditional}
              alt="Traditional pooja room design"
              className="aspect-[16/10] w-full"
            />
            <div className="p-6 sm:p-8">
              <p className="text-stone-700">
                For a traditional pooja room design, detailing may come through
                carved elements, warm wood tones, brass-inspired accents, arches
                or decorative jaali work.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-stone-200">
            <Img
              src={IMG.modern}
              alt="Modern pooja room design"
              className="aspect-[16/10] w-full"
            />
            <div className="p-6 sm:p-8">
              <p className="text-stone-700">
                For a modern pooja room design, we can use clean geometry,
                neutral finishes, floating shelves, concealed storage and
                integrated lighting.
              </p>
            </div>
          </div>
        </div>

        <blockquote className="mt-10 rounded-3xl border-l-8 border-green-600 bg-green-50 p-6 shadow-sm sm:p-10">
          <p className="text-base leading-relaxed text-stone-700 sm:text-lg">
            A hybrid approach can bring traditional visual cues into a modern
            apartment without making the space feel heavy. The aim is not to
            make the pooja area look like a showroom piece. It should belong to
            your home and still feel meaningful years after the rest of the
            interiors have changed.
          </p>
        </blockquote>
      </section>

      {/* ---------- 4. STORAGE (light green) ---------- */}
      <section className="bg-green-50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Img
            src={IMG.storage}
            alt="Custom pooja mandir with shelves and storage"
            className="aspect-[4/3] w-full rounded-3xl shadow-xl lg:aspect-[4/5]"
          />
          <div>
            <Heading
              plain="Custom Pooja Mandir,"
              accent="Shelves and Storage"
            />
            <div className="mt-6 space-y-4">
              <Para>
                A good pooja unit has to do more than hold the main idols. There
                are everyday items to organise, and leaving everything outside
                can quickly make a small space look crowded.
              </Para>
              <Para>
                Depending on the available area, we can plan open shelves for
                frequently used items, drawers for smaller essentials, closed
                storage for less frequently used materials and dedicated ledges
                around the main shrine. For compact homes, vertical storage and
                wall-mounted solutions can make better use of available height
                without increasing the floor footprint.
              </Para>
              <Para>
                If you already have a family mandir, idol arrangement or
                particular storage requirement, we can design around it instead
                of asking you to change it to fit a standard unit.
              </Para>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 5. MATERIALS ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <Heading
              plain="Materials and Finishes"
              accent="for Your Pooja Room"
            />
            <Para className="mt-6">
              Material selection changes the character of the entire pooja
              space. We help you choose finishes according to the style of the
              home, the level of detailing you want and the amount of
              maintenance you are comfortable with.
            </Para>
            <ul className="mt-8 space-y-3">
              {materials.map((m) => (
                <li
                  key={m}
                  className="flex gap-4 rounded-2xl bg-green-50 p-4 shadow-sm ring-1 ring-green-200"
                >
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-green-600" />
                  <span className="text-stone-700">{m}</span>
                </li>
              ))}
            </ul>
            <Para className="mt-8">
              We also consider how the chosen finish will work with the
              surrounding walls, flooring, furniture and existing colour
              palette. The result should feel like part of the home rather than
              a separate decorative installation.
            </Para>
          </div>
          <div className="lg:sticky lg:top-8 lg:col-span-2">
            <Img
              src={IMG.materials}
              alt="Pooja room materials and finishes"
              className="aspect-[4/5] w-full rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ---------- 6. LIGHTING (light green) ---------- */}
      <section className="relative overflow-hidden bg-green-100">
        <Img
          src={IMG.lighting}
          alt="Warm lighting in a pooja room"
          className="absolute inset-0 h-full w-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-green-100/90 to-green-100/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <Heading
              plain="Pooja Room Lighting"
              accent="Planned for Daily Use"
            />
            <div className="mt-6 space-y-4">
              <Para>
                Lighting is particularly important in a pooja space because it
                affects both visibility and mood. Instead of filling the area
                with bright general lighting, we can layer the illumination.
              </Para>
              <Para>
                A soft light around the deity or backdrop can create the main
                visual focus. Shelf lighting or concealed LEDs can add depth,
                while subtle ceiling or ambient lighting can keep the
                surrounding area comfortable. Where appropriate, warm-toned
                lighting can complement wood, brass-style details and
                traditional finishes.
              </Para>
              <Para>
                We also think about practical use. The placement of lights,
                switches and concealed wiring should be considered before the
                unit is fabricated so the finished mandir stays clean and
                uncluttered.
              </Para>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 7. VASTU ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-green-50 ring-1 ring-green-200">
          <div className="grid lg:grid-cols-5">
            {/* image side */}
            <div className="relative min-h-[260px] lg:col-span-2 lg:min-h-full">
              <Img
                src={IMG.vastu}
                alt="Pooja room planned with Vastu considerations"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-green-700 shadow-lg sm:h-24 sm:w-24">
                <Compass className="h-12 w-12 sm:h-14 sm:w-14" />
              </div>
            </div>

            {/* content side */}
            <div className="p-6 sm:p-10 lg:col-span-3 lg:p-14">
              <Heading
                className="!mt-0"
                plain="Vastu Considerations"
                accent="for Pooja Room Planning"
              />
              <div className="mt-6 space-y-5">
                <Para className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-green-200 sm:p-6">
                  If Vastu is an important part of your decision, tell us during
                  the initial discussion. We can consider your preferred
                  direction and placement while planning the pooja room, subject
                  to the actual layout and structural limitations of the home.
                </Para>
                <Para className="border-l-4 border-green-600 pl-5">
                  For apartment interiors in particular, it is not always
                  possible to follow every traditional recommendation without
                  affecting doors, windows, circulation or other essential
                  spaces. Our approach is to discuss the priorities with you and
                  find a practical design solution rather than forcing the home
                  to follow a rigid template.
                </Para>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
