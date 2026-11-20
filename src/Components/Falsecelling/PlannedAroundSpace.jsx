import Tilt, { ImageSlot } from "./Slotimage";

const factors = [
  [
    "Ceiling height",
    "We select suitable profiles and ceiling levels without unnecessarily reducing the available room height.",
  ],
  [
    "Room dimensions",
    "The size and proportions of the room help determine the shape, layout and detailing of the ceiling.",
  ],
  [
    "Lighting requirements",
    "We plan the positions of LED downlights, cove lighting, profile lights and other fixtures.",
  ],
  [
    "Interior coordination",
    "Ceiling colours, patterns and finishes are selected to complement the furniture, wall treatments and overall interior theme.",
  ],
  [
    "Electrical and service points",
    "Fan positions, AC requirements, wiring and maintenance access are considered during planning.",
  ],
];

export default function PlannedAroundSpace() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-4 sm:py-10 lg:py-10">
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#B8924F]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        {/* Centered Heading + Paragraph */}
        <div className="mx-auto mb-10 max-w-4xl px-5 text-center sm:px-6 lg:mb-10">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            False Ceiling Design Planned{" "}
            <span className="text-emerald-700">Around Your Space</span>
          </h2>
          <div className="mx-auto max-w-3xl space-y-4 text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
            <p>
              A false ceiling should be designed according to the room rather
              than selected from a catalogue without considering the actual
              space. A multi-level ceiling that looks attractive in a large
              living room may not be suitable for a compact bedroom or an
              apartment with limited ceiling height.
            </p>
            <p>
              At Infinity Space, we consider several factors before recommending
              a ceiling design:
            </p>
          </div>
        </div>

        {/* Two Images in One Row */}
        <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:gap-8 sm:px-8 lg:mb-20">
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-[#B8924F]/60 sm:translate-x-5 sm:translate-y-5" />
            <Tilt>
              <ImageSlot
                src="/aboutus.webp"
                alt="False ceiling with concealed cove lighting"
                className="aspect-[4/3] rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(14,43,39,0.55)]"
              />
            </Tilt>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-[#B8924F]/60 sm:translate-x-5 sm:translate-y-5" />
            <Tilt>
              <ImageSlot
                src="/aboutus.webp"
                alt="Modern false ceiling design with profile lighting"
                className="aspect-[4/3] rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(14,43,39,0.55)]"
              />
            </Tilt>
          </div>
        </div>

        {/* Factors List */}
        <ul className="mx-auto max-w-6xl divide-y divide-[#0E2B27]/10 border-y border-[#0E2B27]/10 px-5 sm:px-8">
          {factors.map(([title, text]) => (
            <li
              key={title}
              className="group grid gap-2 py-6 transition-colors hover:bg-[#0E2B27]/[0.03] md:grid-cols-12 md:gap-8 md:px-4"
            >
              <h3 className=" text-lg font-medium text-[#0E2B27] transition-colors group-hover:text-[#8a6a33] sm:text-xl md:col-span-4 md:text-2xl">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-black md:col-span-8 md:max-w-2xl md:text-base">
                {text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl px-5 text-center text-xl leading-snug text-[#000000] sm:px-8 sm:text-2xl lg:text-2xl">
          This approach helps us create a ceiling design that looks balanced and
          serves a purpose in the room.
        </p>
      </div>
    </section>
  );
}
