import Tilt from "./Tilt";

const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export default function OfficeIntro() {
  return (
    <section className="relative overflow-hidden bg-[#FFF] py-20 text-[#14211C] sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-24 h-[560px] w-[560px] rounded-full bg-[#B8935A]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-600/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <div className="lg:col-span-5">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Office Interiors Planned Around Your Business
          </h2>

          <div className="mt-8 max-w-prose space-y-5 text-[15px] leading-7 text-[#3B4A44] sm:text-base sm:leading-8">
            <p>
              No two offices operate in exactly the same way. A consulting firm
              may need private discussion rooms and client seating, while a
              growing team may prioritise open workstations, collaboration areas
              and room for future changes. A well-planned design begins with
              these operational needs rather than applying the same layout to
              every workplace.
            </p>
            <p>
              During planning, we consider factors such as team size, work
              patterns, visitor flow, storage, privacy, available natural light
              and the relationship between different work areas. These decisions
              help establish a practical layout before furniture, lighting and
              finishes are finalised.
            </p>
            <p>
              Our goal is to help you make effective use of your available space
              while creating an environment that feels organised and appropriate
              for your business.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 bg-[#14211C] px-7 py-4 text-sm font-semibold text-[#F6F6F2] transition hover:bg-green-600 hover:text-[#14211C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8935A]"
          >
            Discuss your requirements
          </a>
        </div>

        {/* 3D image composition — premium layered layout */}
        <div className="lg:col-span-7">
          <Tilt className="mx-auto max-w-[680px]" max={7}>
            <div className="relative aspect-[5/4] [transform-style:preserve-3d]">
              {/* Main image */}
              <div className="absolute inset-y-0 right-0 w-[82%] overflow-hidden bg-[#C9D2CC] shadow-[0_50px_100px_-30px_rgba(20,33,28,0.55)]">
                <img
                  src={img("photo-1497366216548-37526070297c")}
                  alt="Modern office interior with natural light"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Subtle gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14211C]/30 via-transparent to-transparent" />
              </div>

              {/* Gold accent frame behind main image */}
              <div
                className="absolute inset-y-4 right-4 w-[82%] border border-[#B8935A]/40"
                style={{ transform: "translateZ(20px)" }}
                aria-hidden
              />

              {/* Overlapping smaller image (bottom-left) */}
              <div
                className="absolute -bottom-10 left-0 aspect-[4/5] w-[44%] overflow-hidden border-[6px] border-[#F6F6F2] bg-[#C9D2CC] shadow-[0_35px_70px_-20px_rgba(20,33,28,0.65)] sm:border-8"
                style={{ transform: "translateZ(80px)" }}
              >
                <img
                  src={img("photo-1524758631624-e2822e304c36", 800)}
                  alt="Private meeting room with refined finishes"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating quote card (top-right) */}
              <div
                className="absolute right-3 top-6 max-w-[210px] bg-[#14211C]/95 p-4 text-[#F6F6F2] shadow-2xl backdrop-blur sm:right-[-14px] sm:max-w-[240px] sm:p-5"
                style={{ transform: "translateZ(140px)" }}
              >
                <div className="mb-3 h-px w-10 bg-[#B8935A]" />
                <p className="font-[family-name:var(--font-display)] text-lg leading-snug sm:text-xl">
                  Layout first. Furniture, lighting and finishes follow.
                </p>
              </div>

              {/* Small floating stat badge (bottom-right) */}
              <div
                className="absolute -bottom-4 right-6 hidden items-center gap-2 rounded-2xl border border-[#14211C]/10 bg-white px-4 py-3 shadow-2xl sm:flex"
                style={{ transform: "translateZ(110px)" }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600/10 text-green-700">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#3B4A44]">
                    Space Optimised
                  </p>
                  <p className="text-[13px] font-bold text-[#14211C]">
                    For Your Team
                  </p>
                </div>
              </div>

              {/* Gold dot accent (top-left of main image) */}
              <div
                className="absolute right-[18%] top-2 hidden h-3 w-3 rounded-full bg-[#B8935A] shadow-lg sm:block"
                style={{ transform: "translateZ(160px)" }}
                aria-hidden
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
