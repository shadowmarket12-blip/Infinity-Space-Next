import Tilt from "../OfficeInterior/Tilt";

const IMAGES = {
  main: "/Ceilling page image/Modern Blue-Toned Open-Plan Office.webp",
  meeting: "/Ceilling page image/Modern Teal Lounge Office.webp",
};

const points = [
  [
    "Design Coordination",
    "we consider how the ceiling will work with the room's furniture, wall finishes, lighting and other interior elements.",
  ],
  [
    "Space-Based Planning",
    "ceiling height, room dimensions and existing site conditions guide our design recommendations.",
  ],
  [
    "Material Guidance",
    "we help you compare suitable materials and finishes based on the desired appearance and project requirements.",
  ],
  [
    "3D Visualisation",
    "where included in the project scope, 3D visualisation helps you review the proposed ceiling design before execution.",
  ],
  [
    "Organised Project Coordination",
    "we discuss design, material selection and execution requirements as part of the project scope to support a more organised process.",
  ],
];

export default function FalseCeilingWhy() {
  return (
    <section className="relative overflow-hidden bg-white py-14 text-black sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#B8935A]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Centered heading + intro paragraph */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Why Choose Infinity Space
            <span className="text-emerald-700"> for False Ceiling Design?</span>
          </h2>
          <p className="mx-auto max-w-3xl text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
            A false ceiling should complement the complete interior, not compete
            with it. At Infinity Space, we focus on planning ceiling designs
            that are visually balanced and suitable for the way each space is
            used.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-14">
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
                      for False Ceiling Design?
                    </p>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-black/10 border-y border-black/10">
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
                Our aim is to make sure the ceiling feels like a natural part of
                your interior rather than an additional decorative layer.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex bg-black px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-green-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8935A]"
              >
                Discuss your requirements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
