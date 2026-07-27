"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaDraftingCompass,
  FaBuilding,
  FaCouch,
  FaGem,
  FaCube,
  FaLightbulb,
  FaClipboardList,
  FaTasks,
  FaHome,
} from "react-icons/fa";

/* ================= DATA ================= */

const cards = [
  {
    title: "Personalized Interior Design Solutions",
    icon: <FaUserCheck />,
    bg: "#FFD861",
  },
  {
    title: "Experienced Interior Designers in Bhubaneswar",
    icon: <FaDraftingCompass />,
    bg: "#B8F9D3",
  },
  {
    title: "Residential & Commercial Interior Expertise",
    icon: <FaBuilding />,
    bg: "#CEB2FC",
  },
  {
    title: "Smart Space Planning & Storage Solutions",
    icon: <FaCouch />,
    bg: "#DCE9FF",
  },
  {
    title: "Premium Materials & Finishing Quality",
    icon: <FaGem />,
    bg: "#FFC7A0",
  },
  {
    title: "3D Interior Design Visualization",
    icon: <FaCube />,
    bg: "#C7F0FF",
  },
  {
    title: "Modern & Space-Efficient Design Concepts",
    icon: <FaLightbulb />,
    bg: "#F7C5FF",
  },
  {
    title: "Transparent Project Coordination",
    icon: <FaClipboardList />,
    bg: "#C8FFD7",
  },
  {
    title: "Organized Execution Workflow",
    icon: <FaTasks />,
    bg: "#FFD0D0",
  },
  {
    title: "Complete Turnkey Interior Solutions",
    icon: <FaHome />,
    bg: "#FFF0B3",
  },
];

/* ================= ANIMATION ================= */

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.06,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

/* ================= CARD ================= */

const Card = memo(({ card, index }) => {
  return (
    <motion.div
      custom={index}
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.2,
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative h-[340px]"
    >
      {/* Main Card */}
      <div className="relative h-full overflow-hidden rounded-[38px] border-2 border-black bg-white px-6 flex flex-col items-center justify-center text-center transition-all duration-300 will-change-transform">
        {/* Overlay */}
        <div
          className="absolute top-[72px] left-1/2 w-[120px] h-[120px] rounded-full transition-transform duration-500 ease-out group-hover:scale-[4.5]"
          style={{
            background: card.bg,
            transform: "translateX(-50%)",
          }}
        />

        {/* Inner Border */}
        <div className="absolute inset-[9px] rounded-[30px] border border-black/10" />

        {/* Icon Circle */}
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative z-10 w-[145px] h-[145px] rounded-full border-2 border-black bg-white flex items-center justify-center"
        >
          {/* Inner Circle */}
          <div
            className="absolute w-[122px] h-[122px] rounded-full"
            style={{
              background: card.bg,
            }}
          />

          {/* Icon */}
          <div className="relative z-10 text-5xl text-black">{card.icon}</div>
        </motion.div>

        {/* TEXT */}
        <motion.h3
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.45,
            delay: 0.1,
          }}
          className="relative z-10 mt-8 text-[14px] font-bold leading-relaxed text-black"
        >
          {card.title}
        </motion.h3>

        {/* Bottom Hover Bar */}
        <div
          className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full transition-all duration-300"
          style={{
            background: card.bg,
          }}
        />

        {/* Corner Dot */}
        <div
          className="absolute top-5 right-5 w-4 h-4 rounded-full border border-black"
          style={{
            background: card.bg,
          }}
        />
      </div>
    </motion.div>
  );
});

Card.displayName = "Card";

/* ================= MAIN ================= */

export default function WhyChooseInfinitySpace() {
  return (
    <section className="relative overflow-hidden bg-white py-5 px-6">
      {/* LIGHT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 opacity-30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 opacity-30 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-6 text-[25px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[56px]"
          >
            Why Clients Choose
            <span className="text-green-700"> Infinity Space</span>
          </motion.h2>
        </motion.div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {cards.map((card, index) => (
            <Card key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
