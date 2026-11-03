import Tilt from "./Tilt";

const types = [
  {
    text: "Small offices that need to make effective use of limited floor space.",
    src: "/Office Page Images/Small-Office-Interior-Design-for-Different-Workplaces.webp",
    alt: "Compact office with efficient layout",
    span: "lg:col-span-3",
  },
  {
    text: "Growing teams that need workstations and storage arranged efficiently.",
    src: "/Office Page Images/Growing-Office-Interior-Design-for-Different-Workplaces.webp",
    alt: "Open workstations for a growing team",
    span: "lg:col-span-3",
  },
  {
    text: "Corporate offices with reception, cabins, meeting rooms and shared areas.",
    src: "/Office Page Images/Corporate-Office-Interior-Design-in-Bhubaneswar.webp",
    alt: "Corporate office reception and meeting areas",
    span: "lg:col-span-2",
  },
  {
    text: "Professional service offices where client conversations and privacy matter.",
    src: "/Office Page Images/Professional-Office-Interior-Design-for-Different-Workplaces.webp",
    alt: "Private client consultation room",
    span: "lg:col-span-2",
  },
  {
    text: "Renovation projects where some existing furniture, finishes or services may be retained.",
    src: "/Office Page Images/Renovation-Office-Interior-Design-for-Different-Workplaces.webp",
    alt: "Renovated office retaining existing elements",
    span: "lg:col-span-2",
  },
];

export default function WorkplaceTypes() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#14211C] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <h2 className="mb-4 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px] lg:col-span-6">
            Office Interior Design for Different Workplaces
          </h2>
          <p className="max-w-xl text-[15px] leading-7 text-[#3B4A44] sm:text-base sm:leading-8 lg:col-span-6 lg:col-start-7">
            Office needs vary by team size, business activity and how often
            clients or partners visit the premises. Depending on the project,
            planning may need to account for:
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {types.map((t) => (
            <li key={t.text} className={t.span}>
              <Tilt className="h-full" max={6}>
                <article className="group relative h-full min-h-[320px] overflow-hidden bg-[#14211C] shadow-[0_30px_60px_-30px_rgba(20,33,28,0.7)] [transform-style:preserve-3d] sm:min-h-[380px]">
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14211C] via-[#14211C]/45 to-transparent" />
                  <div
                    className="absolute inset-x-0 bottom-0 p-6 sm:p-7"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <div className="mb-4 h-px w-10 bg-[#B8935A] transition-all duration-500 group-hover:w-20" />
                    <p className=" text-[1.45rem] leading-snug text-[#F6F6F2] sm:text-2xl">
                      {t.text}
                    </p>
                  </div>
                </article>
              </Tilt>
            </li>
          ))}
        </ul>

        <p className="mt-14 max-w-3xl border-l-2 border-[#B8935A] pl-6  text-2xl leading-snug sm:text-2xl">
          The final design should be based on the actual brief, not on a
          standard package that assumes every workplace has the same needs.
        </p>
      </div>
    </section>
  );
}
