import Tilt from "./Tilt";

// Images from public/images folder
// (spaces in the folder name are URL-encoded so images load reliably on all devices)
const IMAGES = {
  main: "/Office%20Page%20Images/Office-Interiors-Planned-Around-Your-Business-1.webp",
  meeting:
    "/Office%20Page%20Images/Office-Interiors-Planned-Around-Your-Business.webp",
};

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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Centered main heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Office Interiors Planned
            <span className="text-emerald-700"> Around Your Business</span>
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-16 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-5">
            <div className="max-w-prose space-y-5 text-[15px] leading-7 text-[#3B4A44] sm:text-base sm:leading-8">
              <p>
                No two offices operate in exactly the same way. A consulting
                firm may need private discussion rooms and client seating, while
                a growing team may prioritise open workstations, collaboration
                areas and room for future changes. A well-planned design begins
                with these operational needs rather than applying the same
                layout to every workplace.
              </p>
              <p>
                During planning, we consider factors such as team size, work
                patterns, visitor flow, storage, privacy, available natural
                light and the relationship between different work areas. These
                decisions help establish a practical layout before furniture,
                lighting and finishes are finalised.
              </p>
              <p>
                Our goal is to help you make effective use of your available
                space while creating an environment that feels organised and
                appropriate for your business.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 bg-[#14211C] px-7 py-4 text-sm font-semibold text-[white] transition hover:bg-green-800 hover:text-[white] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8935A]"
            >
              Discuss your requirements
            </a>
          </div>

          {/* 3D image composition — premium layered layout */}
          <div className="pb-12 sm:pb-14 lg:col-span-7 lg:pb-0">
            <Tilt className="mx-auto w-full max-w-[680px]" max={7}>
              <div className="relative aspect-[5/4] w-full lg:[transform-style:preserve-3d]">
                {/* Main image */}
                <div className="absolute inset-y-0 right-0 w-[82%] overflow-hidden bg-[#C9D2CC] shadow-[0_50px_100px_-30px_rgba(20,33,28,0.55)]">
                  <img
                    src={IMAGES.main}
                    alt="Modern office interior with natural light"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* Subtle gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14211C]/30 via-transparent to-transparent" />
                </div>

                {/* Gold accent frame behind main image */}
                <div
                  className="absolute inset-y-4 right-4 w-[82%] border border-[#B8935A]/40 lg:[transform:translateZ(var(--z))]"
                  style={{ "--z": "20px" }}
                  aria-hidden
                />

                {/* Overlapping smaller image (bottom-left) */}
                <div
                  className="absolute -bottom-8 left-0 aspect-[4/5] w-[44%] overflow-hidden border-[5px] border-[#F6F6F2] bg-[#C9D2CC] shadow-[0_35px_70px_-20px_rgba(20,33,28,0.65)] sm:-bottom-10 sm:border-8 lg:[transform:translateZ(var(--z))]"
                  style={{ "--z": "80px" }}
                >
                  <img
                    src={IMAGES.meeting}
                    alt="Private meeting room with refined finishes"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Floating quote card (top-right) */}
                <div
                  className="absolute right-2 top-3 max-w-[150px] bg-[#14211C]/95 p-3 text-[#F6F6F2] shadow-2xl backdrop-blur sm:right-[-14px] sm:top-6 sm:max-w-[240px] sm:p-5 lg:[transform:translateZ(var(--z))]"
                  style={{ "--z": "140px" }}
                >
                  <div className="mb-2 h-px w-8 bg-[#B8935A] sm:mb-3 sm:w-10" />
                  <p className="font-[family-name:var(--font-display)] text-[8px] leading-snug sm:text-xl">
                    Layout first. Furniture, lighting and finishes follow.
                  </p>
                </div>

                {/* Small floating stat badge (bottom-right) */}
                <div
                  className="absolute -bottom-4 right-6 hidden items-center gap-2 rounded-2xl border border-[#14211C]/10 bg-white px-4 py-3 shadow-2xl sm:flex lg:[transform:translateZ(var(--z))]"
                  style={{ "--z": "110px" }}
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
                  className="absolute right-[18%] top-2 hidden h-3 w-3 rounded-full bg-green-700 shadow-lg sm:block lg:[transform:translateZ(var(--z))]"
                  style={{ "--z": "160px" }}
                  aria-hidden
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}
