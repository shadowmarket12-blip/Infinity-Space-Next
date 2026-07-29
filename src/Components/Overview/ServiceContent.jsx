"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ServiceContent() {
  const content = [
    {
      gif: "/servicepage paragraph gif/08186acc-24bf-11f0-918f-476445ceb791.gif",
      text: `Infinity Space provides affordable interior design services in
      Bhubaneswar for homeowners, families, professionals, and businesses
      looking for thoughtfully designed interiors that combine functionality,
      aesthetics, comfort, and smart budget planning.`,
    },
    {
      gif: "/servicepage paragraph gif/bec47126-1175-11ee-ae4f-ef901fbeb0fe.gif",
      text: `As experienced interior designers in Bhubaneswar, we specialize in
      residential interiors, office interior design, modular kitchen
      solutions, customized furniture, wardrobe design, false ceiling
      concepts, TV unit designs, and complete turnkey interior solutions.`,
    },
    {
      gif: "/servicepage paragraph gif/ee1fa1fc-1175-11ee-9273-bf92e5b48a66.gif",
      text: `Whether you are designing a compact apartment, renovating your
      family home, upgrading a workspace, or planning interiors for a new
      property, our team focuses on creating affordable yet premium interior
      solutions.`,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-20">
          {content.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="group relative overflow-hidden rounded-[36px] border border-green-100 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(1,101,63,0.12)] sm:p-8 lg:p-12"
              >
                {/* Glow */}
                <div className="absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-green-500/10 blur-[90px]" />

                <div
                  className={`
                    relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:gap-16
                    ${reverse ? "lg:flex-row-reverse" : ""}
                  `}
                >
                  {/* GIF SECTION */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="flex shrink-0 items-center justify-center"
                  >
                    <Image
                      src={item.gif}
                      alt="Interior Design"
                      width={220}
                      height={220}
                      className="h-[140px] w-[140px] object-contain sm:h-[170px] sm:w-[170px] lg:h-[220px] lg:w-[220px]"
                      unoptimized
                    />
                  </motion.div>

                  {/* TEXT SECTION */}
                  <div
                    className={`
                      flex-1
                      ${
                        reverse
                          ? "text-center lg:text-right"
                          : "text-center lg:text-left"
                      }
                    `}
                  >
                    <p className="text-[16px] leading-[2] text-black sm:text-[18px] lg:text-[20px]">
                      <Link href="/" className="hover:underline">
                        {item.text}
                      </Link>
                    </p>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "120px" }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                      }}
                      viewport={{ once: true }}
                      className={`
                        mt-8 h-[4px] rounded-full bg-[rgba(1,101,63,1)]
                        ${
                          reverse
                            ? "mx-auto lg:ml-auto lg:mr-0"
                            : "mx-auto lg:mx-0"
                        }
                      `}
                    />
                  </div>
                </div>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[rgba(1,101,63,1)] transition-all duration-700 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceContent;
