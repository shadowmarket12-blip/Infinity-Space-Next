import Tilt from "./Tilt";

// Images from public/images folder
const IMAGES = {
  main: "/Office Page Images/Why-Consider-Infinity-Space-for-Your-Office-Interiors-2.webp",
  meeting:
    "/Office Page Images/Why-Consider-Infinity-Space-for-Your-Office-Interiors.webp",
};

const points = [
  [
    "Requirement-led planning",
    "design decisions begin with how the office will be used.",
  ],
  [
    "Practical use of space",
    "workstations, meeting rooms, storage and circulation are considered together.",
  ],
  [
    "Coordinated finishes",
    "materials, lighting and furniture are planned to create a consistent workplace.",
  ],
  [
    "Budget awareness",
    "scope and specifications are discussed so you can make informed choices.",
  ],
  [
    "Clear project communication",
    "decisions, inclusions and changes should be discussed and documented.",
  ],
];

export default function WhyInfinitySpace() {
  return (
    <section className="relative overflow-hidden bg-white py-14 text-black sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#B8935A]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        {/* Sticky 3D visual */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <Tilt className="mx-auto max-w-[480px]" max={9}>
              <div className="relative aspect-[4/5] [transform-style:preserve-3d]">
                <div className="absolute inset-0 overflow-hidden bg-gray-100 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
                  <img
                    src={IMAGES.main}
                    alt="Luxury workplace with coordinated finishes and lighting"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div
                  className="absolute -right-3 bottom-10 w-[58%] overflow-hidden border-[6px] border-white bg-gray-100 shadow-2xl sm:-right-8"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <img
                    src={IMAGES.meeting}
                    alt="Team discussion in a planned meeting space"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div
                  className="absolute -left-2 top-8 border border-[#B8935A]/60 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-6"
                  style={{ transform: "translateZ(110px)" }}
                >
                  <p className="text-[15px] font-bold text-black">
                    Infinity Space
                  </p>
                  <p className="text-[12px] text-gray-600">
                    Office interiors, Bhubaneswar
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Why Consider Infinity Space for Your Office Interiors?
          </h2>
          <p className="max-w-2xl text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
            Choosing an interior design partner is about more than selecting a
            visual style. You need a team that listens to your business
            requirements, explains design decisions and helps clarify the scope
            before execution.
          </p>

          <ul className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {points.map(([title, text]) => (
              <li
                key={title}
                className="group relative grid gap-1 py-4 pl-5 transition-colors hover:bg-black/[0.02] sm:grid-cols-[14rem_1fr] sm:gap-8 sm:pl-7"
              >
                <span className="absolute left-0 top-4 h-[calc(100%-2rem)] w-px bg-[#B8935A]/60 transition-all group-hover:w-[3px] group-hover:bg-[#B8935A]" />
                <h3 className="text-[14px] font-bold text-black sm:text-[15px]">
                  {title}
                </h3>
                <p className="text-[13px] leading-6 text-gray-700 sm:text-[14px]">
                  {text.charAt(0).toUpperCase() + text.slice(1)}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 border border-black/10 bg-gray-50 p-5 sm:p-7">
            <p className="max-w-2xl text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
              If you are comparing the best interior designers in Bhubaneswar
              for office interior, review relevant work, clarify who will manage
              each part of the project and ask for a written scope before making
              a decision. Infinity Space welcomes a discussion about your
              requirements so we can understand whether the proposed project is
              a suitable fit.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex bg-black px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-[#B8935A] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8935A]"
            >
              Discuss your requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
