import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

/*
  IMAGE PATH
  ----------
  Rename your public folder from "bedroom-interior design" (has a space —
  fragile in URLs, breaks on some hosts/CDNs) to "bedroom-interior-design"
  and move the file to match this path, or update DEFAULT_IMAGE below to
  match wherever the file actually lives.

  Every image reference below uses DEFAULT_IMAGE as a fallback via
  `image || DEFAULT_IMAGE`, so a blank string can never reach <Image src>
  again — that empty "" was what threw the console error. Once you have
  separate photos per room/storage type, just fill in each `image` field
  and the fallback stops being used for that item.
*/
const DEFAULT_IMAGE = "/bedroom-interior-design/bedroom-interior-design.webp";

/* Small helper so no <Image> can ever receive "" or undefined */
function SafeImage({ src, alt, ...props }) {
  return <Image src={src || DEFAULT_IMAGE} alt={alt} {...props} />;
}

/* ---------------------------------------------------------------------- */
/* 1. How We Plan a Bedroom Around Your Space                             */
/* ---------------------------------------------------------------------- */

export function PlanningSection() {
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
    <section
      className={`${fraunces.variable} ${inter.variable} bg-white text-[#221B15] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 order-1">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#EFE9DD]">
              <SafeImage
                src={DEFAULT_IMAGE}
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
            <span className="block h-px w-16 bg-[#8C6E3E] mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] font-medium">
              How We Plan a Bedroom Around Your Space
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1.03rem] leading-relaxed text-[#221B15]/75">
              Every bedroom we work on has different dimensions and different
              requirements. A spacious master bedroom may need a large wardrobe
              and dressing area, while a compact apartment bedroom may need us
              to carefully use every available wall.
            </p>
            <p className="mt-4 max-w-[52ch] text-[1.03rem] leading-relaxed text-[#221B15]/75">
              This helps us avoid simply placing furniture wherever there is
              space. Instead, we plan the room so that the different elements
              work together.
            </p>

            <p className="mt-8 text-[0.95rem] text-[#221B15]/55">
              When we begin a bedroom project, we look at practical details such
              as:
            </p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8C6E3E]" />
                  <span className="text-[0.95rem] leading-snug text-[#221B15]/85">
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

export function LifestyleSection() {
  const rooms = [
    {
      tag: "Master",
      title: "Master Bedroom Interiors",
      text: "For a master bedroom, we can bring together a comfortable bed, customised wardrobe, dressing unit, bedside storage and lighting while keeping enough space for movement. Depending on your requirements, we can also incorporate an upholstered headboard, TV unit, accent wall, false ceiling or additional storage. Our focus is to make the room feel complete without making it unnecessarily crowded.",
      image: "", // add a dedicated master-bedroom photo here later
    },
    {
      tag: "Compact",
      title: "Small and Compact Bedroom Interiors",
      text: "When space is limited, planning becomes even more important. For compact bedrooms, we can explore solutions such as sliding wardrobes, built-in storage, hydraulic beds, loft cabinets and customised furniture. Vertical space can also be used where appropriate to increase storage without taking away too much floor area. We also consider colours, lighting and furniture proportions so that a small bedroom does not feel visually heavy.",
      image: "",
    },
    {
      tag: "Kids",
      title: "Kids' Bedroom Interiors",
      text: "For children's bedrooms, we consider more than just appearance. Storage, study requirements, safety, movement and the possibility of changing needs as the child grows are all part of our planning. A bedroom can include a bed, wardrobe, study table, bookshelves and organised storage while still leaving sufficient space for everyday activities.",
      image: "",
    },
    {
      tag: "Guest",
      title: "Guest Bedroom Interiors",
      text: "For guest bedrooms, we usually focus on creating a comfortable and welcoming environment without overloading the room with furniture. A well-planned bed, wardrobe, bedside storage, lighting and dressing area can provide everything a guest needs while keeping the space clean and comfortable.",
      image: "",
    },
  ];

  return (
    <section
      className={`${fraunces.variable} ${inter.variable} bg-white text-[#221B15] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-[56ch]">
          <span className="block h-px w-16 bg-[#8C6E3E] mb-6" />
          <h2 className="font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] font-medium">
            Bedroom Interiors for Different Needs and Lifestyles
          </h2>
          <p className="mt-6 text-[1.03rem] leading-relaxed text-[#221B15]/75">
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
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#6B432B] text-[0.72rem] tracking-wide px-3 py-1 rounded-full">
                  {room.tag}
                </span>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-[1.35rem] leading-tight font-medium">
                {room.title}
              </h3>
              <p className="mt-2.5 text-[0.96rem] leading-relaxed text-[#221B15]/70">
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

export function StorageSection() {
  const solutions = [
    { name: "Full-height wardrobes", image: "" },
    { name: "Sliding wardrobes", image: "" },
    { name: "Hinged wardrobes", image: "" },
    { name: "Loft storage", image: "" },
    { name: "Built-in wardrobes", image: "" },
    { name: "Hydraulic storage beds", image: "" },
    { name: "Bedside drawers", image: "" },
    { name: "Dressing units with storage", image: "" },
    { name: "Open shelves", image: "" },
    { name: "Customised internal wardrobe organisers", image: "" },
  ];

  return (
    <section
      className={`${fraunces.variable} ${inter.variable} bg-white text-[#221B15] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: heading + intro */}
          <div className="lg:col-span-4">
            <span className="block h-px w-16 bg-[#8C6E3E] mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.4rem] leading-[1.12] font-medium">
              Bedroom Storage Solutions Designed Around What You Own
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-[#221B15]/75">
              One of the first things we discuss with homeowners is storage.
              Instead of deciding the wardrobe size first and asking you to
              adjust your belongings around it, we prefer to understand what you
              actually need to store.
            </p>
            <ul className="mt-6 space-y-2 text-[1rem] italic font-[family-name:var(--font-display)] text-[#221B15]/70">
              <li>Do you have more hanging clothes?</li>
              <li>Do you need additional drawers?</li>
              <li>
                Do you require space for luggage, shoes, accessories or seasonal
                items?
              </li>
            </ul>
            <p className="mt-6 text-[0.92rem] leading-relaxed text-[#221B15]/55">
              For us, good storage is not simply about making a larger wardrobe.
              It is about making the available space more useful and keeping
              everyday items organised.
            </p>
          </div>

          {/* Right: image grid of solutions */}
          <div className="lg:col-span-8">
            <p className="text-[0.85rem] text-[#8C6E3E] mb-5">
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
                  <p className="mt-2.5 text-[0.85rem] leading-snug text-[#221B15]/80">
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
/* Combined page export                                                   */
/* ---------------------------------------------------------------------- */

export default function BedroomInteriorSections() {
  return (
    <main className="bg-white">
      <PlanningSection />
      <LifestyleSection />
      <StorageSection />
    </main>
  );
}
