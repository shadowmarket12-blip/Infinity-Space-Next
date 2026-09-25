"use client";

import { useState } from "react";
import Image from "next/image";

/*
  SafeImage:
  - If `src` is missing, or the image 404s, this renders a visible
    dashed placeholder box showing the EXACT path that failed —
    right in the page, not just the console — so you can immediately
    see which file is missing or misnamed.
  - Once every path below actually exists in /public with matching
    case, you'll see the real photos instead of placeholders.
*/
function SafeImage({ src, alt, className = "", ...props }) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 border border-dashed border-black/30 bg-black/5 p-3 text-center">
        <span className="text-[0.7rem] font-medium text-black/70">
          Image not found
        </span>
        {src && (
          <span className="break-all text-[0.65rem] text-black/50">{src}</span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}

/* ---------------------------------------------------------------------- */
/* 1. How We Plan a Bedroom Around Your Space                             */
/* ---------------------------------------------------------------------- */

export function PlanningSection({
  image = "/bedroom-interior-design/How-We-Plan-a-Bedroom-Around-Your-Space.webp",
}) {
  const checklist = [
    "Where the bed can be positioned comfortably",
    "How much wardrobe and storage space you actually need",
    "Whether a dressing unit can fit without restricting movement",
    "Window and door positions",
    "Existing electrical points",
    "Natural light and ventilation",
    "Lighting requirements",
    "Ceiling height",
    "Available wall space",
    "Your preferred colours, finishes and design style",
  ];

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 order-1">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#EFE9DD]">
              <SafeImage
                src={image}
                alt="Bedroom being planned around the available space, bed and wardrobe layout"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text + checklist */}
          <div className="lg:col-span-6 order-2">
            <h2 className="mb-2 mt-2 text-center mx-auto text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
              How We Plan a Bedroom{""}
              <span className="text-green-700"> Around Your Space</span>
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1.03rem] leading-relaxed text-black">
              Every bedroom we work on has different dimensions and different
              requirements. A spacious master bedroom may need a large wardrobe
              and dressing area, while a compact apartment bedroom may need us
              to carefully use every available wall.
            </p>
            <p className="mt-4 max-w-[52ch] text-[1.03rem] leading-relaxed text-black">
              This helps us avoid simply placing furniture wherever there is
              space. Instead, we plan the room so that the different elements
              work together.
            </p>

            <p className="mt-8 text-[0.95rem] text-black">
              When we begin a bedroom project, we look at practical details such
              as:
            </p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <span className="text-[0.95rem] leading-snug text-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 2. Bedroom Interiors for Different Needs and Lifestyles                */
/* ---------------------------------------------------------------------- */

const DEFAULT_ROOMS = [
  {
    tag: "Master",
    title: "Master Bedroom Interiors",
    text: "For a master bedroom, we can bring together a comfortable bed, customised wardrobe, dressing unit, bedside storage and lighting while keeping enough space for movement. Depending on your requirements, we can also incorporate an upholstered headboard, TV unit, accent wall, false ceiling or additional storage. Our focus is to make the room feel complete without making it unnecessarily crowded.",
    image: "/bedroom-interior-design/Master-Bedroom-Interiors.jpg",
  },
  {
    tag: "Compact",
    title: "Small and Compact Bedroom Interiors",
    text: "When space is limited, planning becomes even more important. For compact bedrooms, we can explore solutions such as sliding wardrobes, built-in storage, hydraulic beds, loft cabinets and customised furniture. Vertical space can also be used where appropriate to increase storage without taking away too much floor area. We also consider colours, lighting and furniture proportions so that a small bedroom does not feel visually heavy.",
    image: "/bedroom-interior-design/Small-and-Compact-Bedroom-Interiors.jpg",
  },
  {
    tag: "Kids",
    title: "Kids' Bedroom Interiors",
    text: "For children's bedrooms, we consider more than just appearance. Storage, study requirements, safety, movement and the possibility of changing needs as the child grows are all part of our planning. A bedroom can include a bed, wardrobe, study table, bookshelves and organised storage while still leaving sufficient space for everyday activities.",
    image: "/bedroom-interior-design/Kids-Bedroom-Interiors.jpg",
  },
  {
    tag: "Guest",
    title: "Guest Bedroom Interiors",
    text: "For guest bedrooms, we usually focus on creating a comfortable and welcoming environment without overloading the room with furniture. A well-planned bed, wardrobe, bedside storage, lighting and dressing area can provide everything a guest needs while keeping the space clean and comfortable.",
    image: "/bedroom-interior-design/Guest-Bedroom-Interiors.png",
  },
];

export function LifestyleSection({ rooms = DEFAULT_ROOMS }) {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="">
          {/* <span className="block h-px w-16 bg-black mb-6" /> */}
          <h2 className="mb-4 mt-6 text-center mx-auto text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Bedroom Interiors for Different{""}
            <span className="text-green-700"> Needs and Lifestyles</span>
          </h2>
          <p className="mt-6 text-[1.03rem] leading-relaxed text-black">
            We do not follow the same bedroom design for every home. The design
            changes according to the people using the room and the space
            available.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {rooms.map((room) => (
            <article key={room.tag} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#EFE9DD]">
                <SafeImage
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black text-[0.72rem] tracking-wide px-3 py-1 rounded-full z-10">
                  {room.tag}
                </span>
              </div>
              <h3 className="mt-5 text-[1.35rem] leading-tight font-medium text-black">
                {room.title}
              </h3>
              <p className="mt-2.5 text-[0.96rem] leading-relaxed text-black">
                {room.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 3. Bedroom Storage Solutions Designed Around What You Own              */
/* ---------------------------------------------------------------------- */

const DEFAULT_SOLUTIONS = [
  {
    name: "Full-height wardrobes",
    image: "/bedroom-interior-design/Full-height-wardrobes.png",
  },
  {
    name: "Sliding wardrobes",
    image: "/bedroom-interior-design/Sliding-wardrobes.png",
  },
  {
    name: "Hinged wardrobes",
    image: "/bedroom-interior-design/Hinged-wardrobes.png",
  },
  {
    name: "Loft storage",
    image: "/bedroom-interior-design/Loft-storage.png",
  },
  {
    name: "Built-in wardrobes",
    image: "/bedroom-interior-design/Built-in-wardrobes.png",
  },
  {
    name: "Hydraulic storage beds",
    image: "/bedroom-interior-design/Hydraulic-storage-beds.png",
  },
  {
    name: "Bedside drawers",
    image: "/bedroom-interior-design/Bedside-drawers.png",
  },
  {
    name: "Dressing units with storage",
    image: "/bedroom-interior-design/Dressing-units-with-storage.webp",
  },
  {
    name: "Open shelves",
    image: "/bedroom-interior-design/Open-shelves.webp",
  },
  {
    name: "Customised internal wardrobe organisers",
    image:
      "/bedroom-interior-design/Customised-internal-wardrobe-organisers.webp",
  },
];

export function StorageSection({ solutions = DEFAULT_SOLUTIONS }) {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Heading at the top of the section body */}
        <h2 className="mb-4 mt-6 text-center mx-auto text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
          Bedroom Storage Solutions Designed{""}
          <span className="text-green-700"> Around What You Own</span>
        </h2>

        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: intro */}
          <div className="lg:col-span-4">
            <p className="text-[1rem] leading-relaxed text-black">
              One of the first things we discuss with homeowners is storage.
              Instead of deciding the wardrobe size first and asking you to
              adjust your belongings around it, we prefer to understand what you
              actually need to store.
            </p>
            <ul className="mt-6 space-y-2 text-[1rem] italic text-black">
              <li>Do you have more hanging clothes?</li>
              <li>Do you need additional drawers?</li>
              <li>
                Do you require space for luggage, shoes, accessories or seasonal
                items?
              </li>
            </ul>
            <p className="mt-6 text-[0.92rem] leading-relaxed text-black">
              For us, good storage is not simply about making a larger wardrobe.
              It is about making the available space more useful and keeping
              everyday items organised.
            </p>
          </div>

          {/* Right: image grid of solutions */}
          <div className="lg:col-span-8">
            <p className="text-[0.85rem] text-black mb-5">
              Based on these requirements and the available space, we can plan
              bedroom storage solutions such as:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
              {solutions.map((item) => (
                <div key={item.name} className="group">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#EFE9DD]">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 768px) 22vw, (min-width: 640px) 30vw, 46vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-2.5 text-[0.85rem] leading-snug text-black">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* Default export — combines all three sections                           */
/* ---------------------------------------------------------------------- */

export default function BedroomInteriorSections({
  planningImage,
  rooms,
  solutions,
}) {
  return (
    <main className="bg-white">
      <PlanningSection image={planningImage} />
      <LifestyleSection rooms={rooms} />
      <StorageSection solutions={solutions} />
    </main>
  );
}
