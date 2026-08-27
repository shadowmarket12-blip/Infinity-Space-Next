// src/app/about-us/NewService.jsx

"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";

export default function ServicesShowcase() {
  const sectionRef = useRef(null);

  const [active, setActive] = useState(2);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), {
    stiffness: 120,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-4, 4]), {
    stiffness: 120,
    damping: 18,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
  });

  const titleY = useTransform(smooth, [0, 1], [60, -40]);

  const cards = [
    {
      image: "/aboutservice/ResidentialInteriorDesign.webp",
      title: "Residential Interior",
      description: "Elegant home interiors crafted for modern living.",
    },
    {
      image: "/aboutservice/ModularKitchen.webp",
      title: "Modular Kitchen",
      description: "Smart kitchens with functionality and style.",
    },
    {
      image: "/aboutservice/CommercialInterior.webp",
      title: "Office Interior",
      description: "Professional and productive workspaces.",
    },
    {
      image: "/aboutservice/TurnkeyInterior.webp",
      title: "Living Room",
      description: "Beautiful spaces for family and entertainment.",
    },
    {
      image: "/aboutservice/Customized Furniture.webp",
      title: "Custom Furniture",
      description: "Tailor-made furniture solutions for every room.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={(e) => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();

        mouseX.set(e.clientX - rect.width / 2);
        mouseY.set(e.clientY - rect.height / 2);
      }}
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
      style={{
        perspective: "1800px",
      }}
    >
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative z-20 mx-auto max-w-[1800px] px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          style={{ y: titleY }}
          className="mb-12 text-center lg:mb-20"
        >
          <h2 className="mt-6 text-[25px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[46px]">
            Our
            <span className="text-green-700"> Interior Design </span>
            Expertise
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="flex h-[280px] gap-2 sm:h-[420px] lg:h-[650px]"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              animate={{
                flex: active === index ? 7 : 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative cursor-pointer overflow-hidden rounded-[24px]"
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0 h-full w-full"
                animate={{
                  scale: active === index ? 1.08 : 1,
                }}
                transition={{
                  duration: 0.8,
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Shine Effect */}
              <motion.div
                animate={{
                  x: ["-150%", "250%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 h-full w-20 rotate-12 bg-white/10 blur-xl"
              />

              {/* Content */}
              <div className="absolute inset-0 z-20">
                {active === index ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8"
                  >
                    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[3px] text-white backdrop-blur-md">
                      Service
                    </span>

                    <h3 className="mt-3 text-lg font-black text-white sm:text-2xl lg:text-4xl">
                      {card.title}
                    </h3>

                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      className="mt-3 max-w-md text-xs leading-6 text-white/75 sm:text-sm lg:text-base"
                    >
                      {card.description}
                    </motion.p>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="whitespace-nowrap text-sm font-black uppercase tracking-[4px] text-white [writing-mode:vertical-rl] rotate-180 sm:text-base lg:text-lg">
                      {card.title}
                    </h3>
                  </div>
                )}
              </div>

              {/* Active Border */}
              {active === index && (
                <motion.div
                  layoutId="activeBorder"
                  className="absolute inset-0 rounded-[24px] border-2 border-emerald-400/70"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
