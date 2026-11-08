import Tilt from "./Tilt";

// Images from public/images folder
// (spaces in the folder name are URL-encoded so images load reliably on all devices)
const IMAGES = {
  main: "/Office%20Page%20Images/Plan-Your-Office-Interiors-With-Infinity-Space-2.webp",
  detail:
    "/Office%20Page%20Images/Plan-Your-Office-Interiors-With-Infinity-Space.webp",
};

const details = [
  "Office location",
  "Approximate area",
  "Team size",
  "Key requirements",
  "Preferred timeline",
  "Budget range",
];

export default function PlanYourOffice() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-14 text-black sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#B8935A]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        {/* Copy */}
        <div className="lg:col-span-6">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Plan Your Office{" "}
            <span className="text-emerald-700">
              {" "}
              Interiors With Infinity Space
            </span>
          </h2>

          <div className="max-w-xl space-y-4 text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
            <p>
              A successful office interior should look professional, support the
              work being done and make sensible use of the available space.
              Careful planning can also help identify budget priorities and
              practical requirements before execution begins.
            </p>
            <p>
              If you are planning a new office, updating an existing workspace
              or exploring corporate office interior designers in Bhubaneswar,
              contact Infinity Space to discuss your project. Share the office
              location, approximate area, team size, key requirements, preferred
              timeline and budget range. These details will help us understand
              the project and discuss the next steps.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-black px-7 py-3.5 text-[13px] font-semibold text-white transition hover:bg-green-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8935A]"
            >
              Contact Infinity Space
            </a>
            <p className="max-w-xs border-l-2 border-[#B8935A] pl-4 text-[12px] leading-5 text-gray-600 sm:text-[13px]">
              Infinity Space provides interior design solutions from its
              Bhubaneswar base. Contact our team to discuss office and
              commercial interior requirements.
            </p>
          </div>
        </div>

        {/* 3D visual with brief card */}
        <div className="lg:col-span-6">
          <Tilt className="mx-auto w-full max-w-[560px]" max={7}>
            <div className="relative w-full sm:aspect-[6/5] sm:[transform-style:preserve-3d]">
              {/* Main image: full-width on mobile, layered on sm+ */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)] sm:absolute sm:inset-y-0 sm:left-0 sm:aspect-auto sm:w-[88%]">
                <img
                  src={IMAGES.main}
                  alt="Well-planned modern office interior"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Details card: below image on mobile, overlapping on sm+ */}
              <div
                className="relative mt-4 w-full border border-black/10 bg-white p-5 shadow-xl sm:absolute sm:-bottom-6 sm:-right-4 sm:mt-0 sm:w-[78%] sm:max-w-[300px] sm:shadow-2xl sm:[transform:translateZ(var(--z))]"
                style={{ "--z": "90px" }}
              >
                <p className="text-[14px] font-bold text-black">
                  Details to share with us
                </p>
                <div className="mb-3 mt-2 h-px w-10 bg-[#B8935A]" />
                <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-[12px] text-gray-700">
                  {details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#B8935A]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Small detail image: tablet and up */}
              <div
                className="absolute left-4 top-6 hidden overflow-hidden border-[5px] border-white bg-gray-100 shadow-xl sm:block sm:w-[30%] sm:[transform:translateZ(var(--z))]"
                style={{ "--z": "50px" }}
              >
                <img
                  src={IMAGES.detail}
                  alt="Refined office detail"
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
