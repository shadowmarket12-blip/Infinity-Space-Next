// src/Components/BedroomInterior/BedroomContentSections.jsx
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

/* Shared WhatsApp CTA link (server-safe, no onClick) */
const WHATSAPP =
  "https://wa.me/7077797720?text=" +
  encodeURIComponent(
    "Hi Infinity Space, I want to discuss my bedroom interior project.",
  );

const QUOTE_LINK =
  "https://wa.me/7077797720?text=" +
  encodeURIComponent(
    "Hi Infinity Space, I would like a quotation for bedroom interior design in Bhubaneswar.",
  );

/* ---------------------------------------------------------------------- */
/* 1. Wardrobes, Beds and Dressing Units Made for Your Bedroom            */
/* ---------------------------------------------------------------------- */

export function FurnitureSection() {
  const items = [
    {
      title: "Custom Bedroom Wardrobes",
      text: "We design wardrobes according to the wall dimensions, storage requirements and overall bedroom layout. Depending on the space, we can plan sliding or hinged shutters along with internal drawers, shelves, hanging sections and loft storage.",
      image: "/bedroom-interior-design/bedroom-interior-design.webp",
    },
    {
      title: "Bed and Headboard Design",
      text: "The bed is usually the centre of the bedroom, so we consider its size, position and relationship with the wardrobe, bedside tables and other furniture. Depending on your style, we can work with simple bed designs, storage beds, upholstered headboards or more detailed customised designs.",
      image: "/bedroom-interior-design/bedroom-interior-design.webp",
    },
    {
      title: "Dressing Unit Design",
      text: "A dressing unit should be convenient to use without taking unnecessary space. We consider the mirror, storage, lighting and position of the unit while planning it with the rest of the bedroom. If space allows, the dressing area can also be integrated with the wardrobe to create a more seamless look.",
      image: "/bedroom-interior-design/bedroom-interior-design.webp",
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
            Wardrobes, Beds and Dressing Units Made for Your Bedroom
          </h2>
          <p className="mt-6 text-[1.03rem] leading-relaxed text-[#221B15]/75">
            The main furniture pieces usually have the biggest impact on both
            the functionality and appearance of a bedroom.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {items.map((item) => (
            <article key={item.title} className="group flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#EFE9DD]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-[1.35rem] leading-tight font-medium">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.96rem] leading-relaxed text-[#221B15]/70">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-[#F6F1E7] px-6 py-8 sm:px-10 sm:py-9">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] sm:text-[1.7rem] leading-tight font-medium">
              Discuss Your Project
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-[#221B15]/70 max-w-[52ch]">
              Share your bedroom size, storage needs and design preference —
              we&apos;ll help you plan the right furniture for your space.
            </p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#8C6E3E] px-6 py-3 text-[0.92rem] font-medium text-white shadow-sm transition hover:bg-[#6B432B]"
          >
            Discuss Your Project
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 2. Lighting, Walls and Ceilings That Complete the Bedroom              */
/* ---------------------------------------------------------------------- */

export function LightingWallsSection() {
  const wallOptions = [
    "Accent colours",
    "Wallpaper",
    "Decorative panels",
    "Wooden finishes",
    "Upholstered headboards",
    "Simple painted feature walls",
  ];

  return (
    <section
      className={`${fraunces.variable} ${inter.variable} bg-[#FBF8F3] text-[#221B15] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="block h-px w-16 bg-[#8C6E3E] mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] font-medium">
              Lighting, Walls and Ceilings That Complete the Bedroom
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1.03rem] leading-relaxed text-[#221B15]/75">
              Once the major furniture is planned, we look at the elements that
              give the bedroom its character. For example, the right lighting
              can make the same bedroom feel completely different. Depending on
              your requirements, we can plan ambient lighting, bedside lights,
              wardrobe lighting, mirror lighting, cove lighting or accent
              lighting.
            </p>

            <p className="mt-8 text-[0.95rem] text-[#221B15]/55">
              For walls, we can work with options such as:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {wallOptions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8C6E3E]" />
                  <span className="text-[0.95rem] leading-snug text-[#221B15]/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-[52ch] text-[1rem] leading-relaxed text-[#221B15]/70">
              False ceiling designs can also be considered where they suit the
              room&apos;s proportions and your overall design preference. We do
              not believe every bedroom needs every decorative feature. We
              select elements based on the design we are creating for your
              particular space.
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#EFE9DD]">
              <Image
                src="/bedroom-interior-design/bedroom-interior-design.webp"
                alt="Bedroom lighting, wall treatment and false ceiling design"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 3. Materials and Finishes We Consider for Your Bedroom                 */
/* ---------------------------------------------------------------------- */

export function MaterialsSection() {
  const details = [
    "Hardware and hinges",
    "Drawer channels",
    "Shutter mechanisms",
    "Internal storage accessories",
    "Surface finishes",
    "Ease of maintenance",
  ];

  return (
    <section
      className={`${fraunces.variable} ${inter.variable} bg-white text-[#221B15] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#EFE9DD]">
              <Image
                src="/bedroom-interior-design/bedroom-interior-design.webp"
                alt="Bedroom furniture materials, laminates and finishes"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <span className="block h-px w-16 bg-[#8C6E3E] mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] font-medium">
              Materials and Finishes We Consider for Your Bedroom
            </h2>
            <p className="mt-6 max-w-[56ch] text-[1.03rem] leading-relaxed text-[#221B15]/75">
              The look of a bedroom is important, but the materials used for its
              furniture also matter. When we plan wardrobes, beds, dressing
              units and other customised furniture, we discuss the available
              material and finish options based on the design, expected usage
              and budget.
            </p>
            <p className="mt-4 max-w-[56ch] text-[1.03rem] leading-relaxed text-[#221B15]/75">
              Depending on the project, this may include different plywood or
              board options along with laminate, veneer, acrylic and other
              finishes.
            </p>

            <p className="mt-8 text-[0.95rem] text-[#221B15]/55">
              We also pay attention to details such as:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {details.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8C6E3E]" />
                  <span className="text-[0.95rem] leading-snug text-[#221B15]/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-[56ch] text-[0.98rem] leading-relaxed text-[#221B15]/70 italic font-[family-name:var(--font-display)]">
              We want you to understand what is being used in your bedroom
              rather than simply choosing a finish based on appearance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 4. Bedroom Interior Design Cost in Bhubaneswar                         */
/* ---------------------------------------------------------------------- */

export function CostSection() {
  const costFactors = [
    "Size of the bedroom",
    "Wardrobe size and configuration",
    "Bed design",
    "Dressing unit",
    "Storage requirements",
    "Material and finish",
    "Lighting",
    "False ceiling",
    "Wall treatment",
    "TV or study unit",
    "Hardware and accessories",
    "Level of customisation",
  ];

  return (
    <section
      className={`${fraunces.variable} ${inter.variable} bg-[#FBF8F3] text-[#221B15] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-[62ch]">
          <span className="block h-px w-16 bg-[#8C6E3E] mb-6" />
          <h2 className="font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] font-medium">
            Bedroom Interior Design Cost in Bhubaneswar
          </h2>
          <p className="mt-6 text-[1.03rem] leading-relaxed text-[#221B15]/75">
            We often get asked about bedroom interior design cost in
            Bhubaneswar, but there is no single price that can accurately apply
            to every bedroom. At Infinity Space, we first understand what you
            want to include in the room before preparing the design and
            quotation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[0.85rem] text-[#8C6E3E] mb-5">
              The cost can depend on:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {costFactors.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8C6E3E]" />
                  <span className="text-[0.95rem] leading-snug text-[#221B15]/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#8C6E3E]/15 bg-white p-7 sm:p-9">
              <p className="text-[1rem] leading-relaxed text-[#221B15]/80">
                For example, a bedroom requiring only a wardrobe and basic
                furniture will have a very different scope from a complete
                master bedroom with a large wardrobe, storage bed, dressing
                unit, feature wall, ceiling and customised lighting.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-[#221B15]/70">
                We therefore prefer to discuss your requirements first and
                provide a quotation based on the actual scope rather than giving
                you an unrealistic one-size-fits-all price.
              </p>

              <a
                href={QUOTE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#8C6E3E] px-6 py-3 text-[0.92rem] font-medium text-white shadow-sm transition hover:bg-[#6B432B]"
              >
                Get A Quote
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 5. Best Bedroom Interior Solutions in Bhubaneswar for Your Budget      */
/* ---------------------------------------------------------------------- */

export function BudgetSection() {
  const priorities = [
    {
      label: "Storage First",
      title: "If storage is your main concern",
      text: "We focus more on the wardrobe and internal organisation — planning internal drawers, shelves, hanging sections and loft storage to make the most of every wall.",
    },
    {
      label: "Luxury Look",
      title: "If you want a more luxurious appearance",
      text: "We explore premium finishes, customised furniture, layered lighting and wall treatments that give the bedroom a refined, considered feel.",
    },
    {
      label: "Tighter Budget",
      title: "If you are working with a tighter budget",
      text: "We prioritise the essential furniture and storage first, keeping the design clean and practical so nothing feels compromised.",
    },
  ];

  return (
    <section
      className={`${fraunces.variable} ${inter.variable} bg-white text-[#221B15] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-[62ch]">
          <span className="block h-px w-16 bg-[#8C6E3E] mb-6" />
          <h2 className="font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] font-medium">
            Best Bedroom Interior Solutions in Bhubaneswar for Your Budget
          </h2>
          <p className="mt-6 text-[1.03rem] leading-relaxed text-[#221B15]/75">
            We understand that every homeowner has a different budget. Our job
            is not to add more features simply to increase the scope of the
            project. Instead, we discuss what matters most to you and prioritise
            the design accordingly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {priorities.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#8C6E3E]/15 bg-[#FBF8F3] p-7 sm:p-8"
            >
              <span className="inline-block rounded-full bg-[#8C6E3E]/10 px-3 py-1 text-[0.72rem] tracking-wide text-[#6B432B]">
                {item.label}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.25rem] leading-tight font-medium">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[#221B15]/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[62ch] text-[1.03rem] leading-relaxed text-[#221B15]/75">
          This is how we approach and provide best bedroom interior solutions in
          Bhubaneswar town — by finding the right balance between your
          requirements, available space, design preferences and budget.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* 6. Why Homeowners Choose Infinity Space for Bedroom Interiors          */
/* ---------------------------------------------------------------------- */

export function WhyChooseSection() {
  const solutions = [
    "Bedroom layout planning",
    "Custom wardrobes",
    "Bedroom storage solutions",
    "Beds and headboards",
    "Dressing units",
    "Study units",
    "TV units",
    "Bedroom lighting",
    "False ceilings",
    "Accent walls",
    "Material and finish selection",
    "Customised furniture",
  ];

  return (
    <section
      className={`${fraunces.variable} ${inter.variable} bg-[#221B15] text-white font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left text */}
          <div className="lg:col-span-6">
            <span className="block h-px w-16 bg-[#8C6E3E] mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] font-medium">
              Why Homeowners Choose Infinity Space for Bedroom Interiors
            </h2>
            <p className="mt-6 max-w-[52ch] text-[1.03rem] leading-relaxed text-white/75">
              When you work with an interior design company, you are not simply
              choosing furniture. You are trusting someone to understand your
              home and turn your ideas into a practical space.
            </p>
            <p className="mt-4 max-w-[52ch] text-[1.03rem] leading-relaxed text-white/70">
              At Infinity Space, we begin by listening to what you want from
              your bedroom. Some homeowners come to us with a clear design
              reference. Others simply tell us that they want more storage, a
              modern look or a bedroom that feels more spacious. We take those
              requirements and work them into a practical design.
            </p>
          </div>

          {/* Right: solutions grid */}
          <div className="lg:col-span-6">
            <p className="text-[0.85rem] text-[#D9C7A6] mb-5">
              Our bedroom interior solutions can include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8C6E3E]" />
                  <span className="text-[0.95rem] leading-snug text-white/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[52ch] text-[1rem] leading-relaxed text-white/70 italic font-[family-name:var(--font-display)]">
              Our goal is to make the complete bedroom feel coordinated rather
              than treating each element as a separate piece of furniture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* Combined page export                                                   */
/* ---------------------------------------------------------------------- */

export default function BedroomContentSections() {
  return (
    <main className="bg-white">
      <FurnitureSection />
      <LightingWallsSection />
      <MaterialsSection />
      <CostSection />
      <BudgetSection />
      <WhyChooseSection />
    </main>
  );
}
