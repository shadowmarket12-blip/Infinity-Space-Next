import Tilt from "./Tilt";

const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const spaces = [
  {
    name: "Workplaces",
    src: "photo-1497215728101-856f4ea42174",
    alt: "Workplace interior",
  },
  {
    name: "Clinics",
    src: "photo-1519494026892-80bbd2d6fd0d",
    alt: "Clinic interior",
  },
  {
    name: "Retail units",
    src: "photo-1441986300917-64674bd600d8",
    alt: "Retail unit interior",
  },
  {
    name: "Customer-facing premises",
    src: "photo-1556761175-5973dc0f32e7",
    alt: "Customer-facing premises interior",
  },
];

const toShare = [
  "Type of commercial property",
  "Approximate area",
  "Intended use",
];

export default function CommercialInterior() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-14 text-black sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-7">
            <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
              Commercial Interior Design in Bhubaneswar
            </h2>
            <div className="max-w-2xl space-y-4 text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
              <p>
                Office interior design and office renovation in Bhubaneswar
                projects are part of a wider commercial interior design
                requirement: the space must support business operations while
                presenting a consistent image to employees, clients and
                visitors. Infinity Space also works across commercial interior
                requirements, with the scope shaped around the property,
                business activity and project brief.
              </p>
              <p>
                For workplaces, this means balancing efficient planning with
                durable, maintainable finishes and an appearance that suits the
                organisation. For other commercial spaces, such as clinics,
                retail units or customer-facing premises, priorities may differ.
                We discuss the purpose of the space first so the proposed design
                responds to the way it will be used.
              </p>
            </div>
          </div>

          {/* Closing note */}
          <div className="lg:col-span-5 lg:pt-6">
            <div className="border border-black/10 bg-white p-6 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.35)] sm:p-7">
              <div className="mb-4 h-px w-10 bg-[#B8935A]" />
              <p className="text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
                If your requirement extends beyond an office, share the type of
                commercial property, approximate area and intended use with our
                team so the appropriate scope can be discussed.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {toShare.map((t) => (
                  <li
                    key={t}
                    className="border border-[#B8935A]/50 px-3 py-1.5 text-[12px] font-medium text-black"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-6 inline-flex bg-black px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-[#B8935A] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8935A]"
              >
                Discuss your requirements
              </a>
            </div>
          </div>
        </div>

        {/* 3D image row */}
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {spaces.map((s, i) => (
            <li key={s.name} className={i % 2 ? "lg:mt-10" : ""}>
              <Tilt max={10}>
                <figure className="group relative aspect-[3/4] overflow-hidden bg-gray-200 shadow-[0_30px_50px_-25px_rgba(0,0,0,0.5)] [transform-style:preserve-3d]">
                  <img
                    src={img(s.src)}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <figcaption
                    className="absolute inset-x-0 bottom-0 p-4"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div className="mb-2 h-px w-8 bg-[#B8935A] transition-all duration-500 group-hover:w-16" />
                    <p className="text-[13px] font-bold text-white sm:text-[15px]">
                      {s.name}
                    </p>
                  </figcaption>
                </figure>
              </Tilt>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
