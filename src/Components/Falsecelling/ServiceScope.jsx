import Tilt, { ImageSlot } from "./Slotimage";

const items = [
  "Understanding your ceiling requirements and preferred design style.",
  "Assessing room dimensions and available ceiling height.",
  "Developing a suitable false ceiling layout.",
  "Recommending gypsum, POP, wood-finish or other suitable materials.",
  "Planning LED lights, cove lighting and recessed fixtures.",
  "Coordinating fan positions, electrical points and relevant ceiling services.",
  "Preparing 3D visualisation to help you understand the proposed design.",
  "Coordinating execution and reviewing the finishing details.",
];

const Check = () => (
  <svg
    viewBox="0 0 20 20"
    className="h-5 w-5 shrink-0 text-green-700"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="8.5" />
    <path
      d="m6.5 10.3 2.4 2.4 4.6-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServiceScope() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      {/* Soft premium background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-green-100/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gray-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Centered Heading + Paragraph */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            What Is Included in Our{""}
            <span className="text-green-700">
              {" "}
              False Ceiling Design Service?
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
            At Infinity Space, our false ceiling design service can be planned
            as part of a complete interior project or as a requirement for a
            selected room, depending on the project scope.
          </p>
        </div>

        {/* Premium 3D separated image composition */}
        <div className="relative mx-auto mt-16 flex w-full max-w-3xl flex-col items-center gap-8 sm:mt-20 sm:flex-row sm:items-end sm:justify-center sm:gap-10 lg:gap-14">
          {/* LEFT IMAGE - raised with 3D depth */}
          <Tilt max={12} className="w-full sm:w-[42%]">
            <div className="relative">
              {/* Soft depth shadow beneath */}
              <div className="absolute -bottom-6 left-1/2 h-10 w-[80%] -translate-x-1/2 rounded-full bg-black/10 blur-2xl" />
              {/* Green glow behind */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-green-100/70 to-transparent blur-xl" />
              <ImageSlot
                src="/Ceilling page image/False-Ceiling-Design-Planned-Around-Your-Space-two.webp"
                alt="Ceiling layout planning"
                className="relative aspect-[3/4] rounded-[1.75rem] shadow-[0_40px_70px_-25px_rgba(14,43,39,0.45)] ring-1 ring-black/5"
              />
            </div>
          </Tilt>

          {/* CENTER FLOATING BADGE - sits in the gap between images */}
          <div className="hidden shrink-0 self-center sm:block">
            <div className="relative flex h-24 w-24 items-center justify-center lg:h-28 lg:w-28">
              {/* Rotating dashed ring */}
              <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-green-700/30" />
              <div className="absolute inset-2 rounded-full border border-green-700/20" />
              <div className="relative rounded-full border border-gray-200 bg-white px-4 py-4 text-center shadow-[0_20px_40px_-15px_rgba(14,43,39,0.35)]">
                <span className="block text-[9px] font-semibold uppercase tracking-widest text-green-800 lg:text-[10px]">
                  Design
                </span>
                <span className="my-0.5 block text-[9px] font-semibold uppercase tracking-widest text-green-800 lg:text-[10px]">
                  Plan
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-widest text-green-800 lg:text-[10px]">
                  Execute
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE - lower with 3D depth */}
          <Tilt max={12} className="w-full sm:mt-16 sm:w-[42%] lg:mt-20">
            <div className="relative">
              {/* Soft depth shadow beneath */}
              <div className="absolute -bottom-6 left-1/2 h-10 w-[80%] -translate-x-1/2 rounded-full bg-black/10 blur-2xl" />
              {/* Green glow behind */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-green-100/70 to-transparent blur-xl" />
              <ImageSlot
                src="/Ceilling page image/False-Ceiling-Design-Planned-Around-Your-Space-one.webp"
                alt="3D visualisation of a ceiling"
                className="relative aspect-[4/5] rounded-[1.75rem] border-4 border-white shadow-[0_40px_70px_-25px_rgba(14,43,39,0.5)] ring-1 ring-black/5"
              />
            </div>
          </Tilt>
        </div>

        {/* Premium glass scope card */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/70 p-6 shadow-[0_50px_100px_-40px_rgba(14,43,39,0.35)] backdrop-blur-xl sm:p-10 lg:mt-24 lg:p-14">
          {/* subtle top gradient line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-600/40 to-transparent" />

          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <h3 className="text-2xl font-medium text-black sm:text-3xl">
              Our work may include:
            </h3>
            <span className="rounded-full border border-green-700/20 bg-green-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-green-800">
              Full Scope
            </span>
          </div>

          <ul className="mt-8 grid gap-x-12 gap-y-0 sm:grid-cols-2">
            {items.map((t) => (
              <li
                key={t}
                className="group flex gap-3 border-b border-gray-200/80 py-4 text-base leading-relaxed text-gray-700 transition-colors hover:text-black"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  <Check />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 border-t border-gray-200/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-lg  leading-snug text-black sm:text-xl lg:text-2xl">
              The final scope is discussed before the project begins so that the
              design, materials and execution requirements are clear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
