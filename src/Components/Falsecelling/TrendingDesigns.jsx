import Tilt, { ImageSlot } from "./Slotimage";

const styles = [
  {
    title: "Minimalist False Ceiling Design",
    image: "/images/ceiling/style-minimalist.jpg",
    body: [
      "Minimalist false ceilings use simple lines, clean edges and limited decorative detailing. They are suitable for contemporary homes where the objective is to maintain an uncluttered appearance.",
      "A simple gypsum border with carefully positioned lights can provide a finished look without introducing too many ceiling levels.",
    ],
  },
  {
    title: "Cove Lighting False Ceiling",
    image: "/images/ceiling/style-cove.jpg",
    body: [
      "Cove lighting uses concealed LED strip lights placed within a recessed ceiling section or perimeter profile. It creates a soft glow that can make the room feel more comfortable, especially in living rooms and bedrooms.",
      "The light colour, brightness and placement should be selected according to the room's purpose.",
    ],
  },
  {
    title: "Multi-Level False Ceiling Design",
    image: "/images/ceiling/style-multilevel.jpg",
    body: [
      "Multi-level false ceilings use different ceiling heights to introduce depth and visual interest. They can be used to highlight specific areas, such as the living room seating zone or dining space.",
      "However, these designs require sufficient ceiling height and careful planning to prevent the room from feeling compressed.",
    ],
  },
  {
    title: "Geometric False Ceiling Design",
    image: "/images/ceiling/style-geometric.jpg",
    body: [
      "Rectangular patterns, straight lines, recessed sections and symmetrical layouts are commonly used in contemporary ceiling designs. These patterns work particularly well with modern furniture, clean wall finishes and linear lighting.",
    ],
  },
  {
    title: "POP False Ceiling Design",
    image: "/images/ceiling/style-pop.jpg",
    body: [
      "POP false ceilings allow decorative shapes, mouldings and selected ceiling details. They can be considered for interiors that require a more detailed or traditional finish.",
      "The amount of decoration should be proportionate to the room size and the overall design theme.",
    ],
  },
  {
    title: "Wooden and Wood-Finish False Ceiling",
    image: "/images/ceiling/style-wooden.jpg",
    body: [
      "Wooden battens and wood-finish ceiling panels can introduce warmth and texture. They can be used as selected ceiling accents in living rooms, bedrooms and other interior spaces.",
      "Rather than covering the entire ceiling, wood-finish elements can be introduced in specific sections to create a balanced design.",
    ],
  },
];

export default function TrendingDesigns() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading + Paragraph */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            Trending False Ceiling Designs{""}
            <span className="text-green-700"> for Homes in Bhubaneswar</span>
          </h2>
          <div className="mx-auto mt-7 max-w-3xl space-y-4 text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
            <p>
              The trending false ceiling designs for homes in Bhubaneswar
              increasingly include clean geometric patterns, simple layered
              profiles, concealed lighting and designs that avoid unnecessary
              decoration. However, a popular design may not necessarily be the
              right choice for every home.
            </p>
            <p>
              Here are some ceiling styles worth considering when planning your
              interiors.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {styles.map((s, idx) => (
            <Tilt key={s.title} className={idx % 3 === 1 ? "lg:mt-14" : ""}>
              <article className="overflow-hidden rounded-3xl bg-[#FAFAF8] shadow-[0_30px_60px_-25px_rgba(14,43,39,0.45)] ring-1 ring-[#0E2B27]/5">
                {/* ADD IMAGE: see s.image path */}
                <ImageSlot
                  src={s.image}
                  alt={s.title}
                  className="aspect-[4/3]"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium leading-tight text-[#0E2B27] sm:text-3xl">
                    {s.title}
                  </h3>
                  <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-[#5B6663]">
                    {s.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
