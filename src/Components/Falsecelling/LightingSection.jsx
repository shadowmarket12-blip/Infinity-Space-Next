import Tilt, { ImageSlot } from "./Slotimage";

const options = [
  [
    "Recessed LED downlights",
    "Provide focused or general illumination while maintaining a clean ceiling appearance.",
  ],
  [
    "Concealed LED strip lighting",
    "Creates a soft glow within ceiling recesses and profiles.",
  ],
  [
    "Cove lighting",
    "Adds ambient illumination around selected ceiling sections.",
  ],
  [
    "Profile lights",
    "Introduce linear lighting that complements geometric ceiling patterns.",
  ],
  [
    "Accent lighting",
    "Highlights selected interior features and decorative sections.",
  ],
];

export default function LightingSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-black sm:px-8 lg:py-32">
      <div className="relative mx-auto max-w-7xl">
        {/* Centered Heading + Paragraph */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            False Ceiling Lighting {""}
            <span className="text-green-700"> Creating the Right Ambience</span>
          </h2>
          <div className="mx-auto mt-7 max-w-3xl space-y-4 text-[13px] leading-6 text-black sm:text-[19px] sm:leading-7">
            <p>
              Lighting is an essential part of false ceiling planning. A ceiling
              may look attractive during the day, but its lighting arrangement
              determines how the room feels after sunset.
            </p>
            <p>
              At Infinity Space, we coordinate ceiling patterns with the
              lighting layout so that fixtures are positioned thoughtfully.
            </p>
            <p>Some commonly used lighting options include:</p>
          </div>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-center">
          <Tilt max={8} className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-px rounded-[2rem] border border-gray-200" />
              {/* ADD IMAGE: /public/images/ceiling/lighting-hero.jpg */}
              <ImageSlot
                src="/images/ceiling/lighting-hero.jpg"
                alt="False ceiling lighting at night"
                className="relative aspect-[4/5] rounded-[2rem] shadow-[0_40px_80px_-25px_rgba(0,0,0,0.25)]"
              />
            </div>
          </Tilt>

          <div className="order-1 lg:order-2">
            <ul className="space-y-3">
              {options.map(([t, d]) => (
                <li
                  key={t}
                  className="group flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-green-600 hover:bg-green-50/50"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-green-700 shadow-[0_0_10px_2px_rgba(21,128,61,0.35)]" />
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-black sm:text-2xl">
                      {t}
                    </h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-gray-700">
                      {d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center  text-xl italic leading-snug text-black sm:text-2xl lg:text-2xl">
          The number, position and brightness of lights should depend on the
          room size, natural lighting and intended use. Planning these details
          before installation also helps avoid unnecessary changes later.
        </p>
      </div>
    </section>
  );
}
