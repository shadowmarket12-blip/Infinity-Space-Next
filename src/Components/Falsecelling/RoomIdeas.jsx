"use client";
import { useState } from "react";
import Tilt, { ImageSlot } from "./Slotimage";

const rooms = [
  {
    tab: "Living Room",
    title: "Living Room False Ceiling Design",
    image: "/images/ceiling/room-living.jpg",
    body: [
      "The living room is often one of the main areas where a false ceiling can create a visual focal point. A gypsum border, recessed ceiling panel or layered design with concealed LED lighting can define the seating area and complement the TV unit or feature wall.",
      "For larger living rooms, geometric ceiling patterns and multi-level designs can introduce depth. In smaller living spaces, a simple perimeter ceiling with subtle cove lighting may create a cleaner appearance without making the room feel visually heavy.",
      "We coordinate the ceiling design with the TV unit, furniture arrangement, wall finishes and lighting plan to maintain a consistent interior look.",
    ],
  },
  {
    tab: "Bedroom",
    title: "Bedroom False Ceiling Design",
    image: "/images/ceiling/room-bedroom.jpg",
    body: [
      "A bedroom ceiling should contribute to a comfortable and relaxing atmosphere. Instead of using too many decorative elements, we generally explore simple ceiling profiles, warm LED lighting and subtle recessed details.",
      "A false ceiling with cove lighting can provide soft ambient illumination, while selected recessed lights can be positioned for practical lighting requirements. Ceiling details can also be coordinated with the headboard wall and wardrobe finishes.",
    ],
  },
  {
    tab: "Dining Area",
    title: "Dining Area False Ceiling Design",
    image: "/images/ceiling/room-dining.jpg",
    body: [
      "A false ceiling can help define the dining space, particularly in homes where the living and dining areas share an open layout. A recessed ceiling section, linear design or selected lighting feature can distinguish the dining zone without requiring a full partition.",
      "The design should work with the dining table, pendant lighting and surrounding furniture.",
    ],
  },
  {
    tab: "Office and Commercial",
    title: "Office and Commercial False Ceiling Design",
    image: "/images/ceiling/room-office.jpg",
    body: [
      "Commercial spaces require a different approach to ceiling planning. Offices, clinics, retail outlets and other workspaces may need organised lighting, access to electrical services and a clean professional appearance.",
      "We consider the purpose of the space, lighting requirements and interior layout before suggesting a suitable ceiling concept.",
    ],
  },
];

export default function RoomIdeas() {
  const [i, setI] = useState(0);
  const room = rooms[i];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-black sm:px-8 lg:py-32">
      <div className="relative mx-auto max-w-7xl">
        {/* Centered Heading + Paragraph */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
            False Ceiling Design Ideas{""}
            <span className="text-green-700"> in Bhubaneswar</span>
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-[13px] leading-6 text-gray-700 sm:text-[14px] sm:leading-7">
            When exploring False Ceiling Design Ideas in Bhubaneswar, it is
            important to consider how each room is used. The lighting, ceiling
            pattern and level of detailing should be different depending on
            whether the space is meant for relaxation, family gatherings, dining
            or work.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Room types"
          className="mt-12 flex justify-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none]"
        >
          {rooms.map((r, idx) => (
            <button
              key={r.tab}
              role="tab"
              aria-selected={i === idx}
              onClick={() => setI(idx)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                i === idx
                  ? "border-black bg-black text-white"
                  : "border-gray-300 text-gray-700 hover:border-black"
              }`}
            >
              {r.tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <div key={room.tab} className="order-2 lg:order-1">
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-medium text-black sm:text-4xl">
              {room.title}
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              {room.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Tilt max={9}>
              <div className="relative">
                {/* ADD IMAGES: room-living.jpg, room-bedroom.jpg, room-dining.jpg, room-office.jpg */}
                <ImageSlot
                  key={room.image}
                  src={room.image}
                  alt={room.title}
                  className="relative aspect-[5/4] rounded-[2rem] border border-gray-200 shadow-[0_50px_90px_-25px_rgba(0,0,0,0.25)]"
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}
