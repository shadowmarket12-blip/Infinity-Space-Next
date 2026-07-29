// src/app/Trustmatics.jsx

"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ===================================================== */
/* COUNTER COMPONENT */
/* ===================================================== */

function Counter({ from = 0, to }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  const [count, setCount] = useState(from);

  useEffect(() => {
    let controls;

    if (isInView) {
      controls = animate(from, to, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
    }

    return () => {
      if (controls) controls.stop();
    };
  }, [isInView, from, to]);

  return <span ref={ref}>{count}</span>;
}

/* ===================================================== */
/* DATA */
/* ===================================================== */

const metrics = [
  {
    number: 150,
    suffix: "+",
    title: "Completed Projects",
  },
  {
    number: 90,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    number: 5,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 45,
    suffix: "+",
    title: "Modular Kitchen Projects",
  },
];

/* ===================================================== */
/* COMPONENT */
/* ===================================================== */

export default function TrustMetricsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-[-120px] h-[400px] w-[400px] rounded-full bg-[rgba(1,101,63,0.05)] blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-200px] right-[-120px] h-[450px] w-[450px] rounded-full bg-[rgba(1,101,63,0.04)] blur-[140px]"
        />
      </div>

      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* METRICS */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {metrics.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-[rgba(1,101,63,0.10)] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 sm:p-7 lg:p-8"
          >
            {/* TOP GLOW */}
            <motion.div
              animate={{
                x: ["-100%", "250%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 h-full w-[120px] rotate-12 bg-white/40 blur-2xl"
            />

            {/* HOVER LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(1,101,63,0.08)] via-transparent to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100" />

            {/* CONTENT */}
            <div className="relative z-10">
              {/* NUMBER */}
              <motion.h2
                whileHover={{
                  scale: 1.03,
                }}
                className="flex items-start text-5xl font-black tracking-tight text-[rgba(1,101,63,1)] sm:text-6xl lg:text-7xl"
                style={{
                  textShadow: "0px 12px 30px rgba(1,101,63,0.20)",
                }}
              >
                <Counter to={item.number} />
                <span className="ml-1 text-2xl sm:text-3xl lg:text-4xl">
                  {item.suffix}
                </span>
              </motion.h2>

              {/* LINE */}
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "90px",
                }}
                transition={{
                  duration: 1,
                  delay: 0.2 + index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-5 h-[4px] rounded-full bg-[rgba(1,101,63,1)]"
              />

              {/* TEXT */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-6 max-w-[220px] text-sm font-medium leading-7 text-gray-600 sm:text-base sm:leading-8 lg:text-lg"
              >
                {item.title}
              </motion.p>
            </div>

            {/* BOTTOM BLUR */}
            <div className="absolute bottom-0 left-1/2 h-16 w-32 -translate-x-1/2 rounded-full bg-[rgba(1,101,63,0.10)] blur-3xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
