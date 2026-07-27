"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({ icon, value, suffix, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.9 }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative group"
    >
      <div className="relative rounded-3xl p-6 sm:p-8 shadow-lg shadow-stone-900/5 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-stone-100 hover:border-amber-200/50">
        {/* Icon */}
        <div className="relative mb-4 sm:mb-6"></div>

        {/* Counter Value */}
        <div className="relative">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-800 tracking-tight mb-2">
            <Counter end={parseInt(value)} suffix={suffix} />
          </div>

          {/* Gradient Line */}
          <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-green-200 rounded-full mb-3 group-hover:w-20 transition-all duration-500"></div>

          {/* Label */}
          <p className="text-sm sm:text-base text-stone-600 font-medium leading-tight">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TrustSection = () => {
  const stats = [
    {
      value: "150",
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      value: "5",
      suffix: "+Yr",
      label: "Years in Bhubaneswar",
    },
    {
      value: "50",
      suffix: "+",
      label: "Families Served in Odisha",
    },
    {
      value: "10",
      suffix: "+",
      label: "Years Warranty on all Woodwork",
    },
    {
      value: "150",
      suffix: "+",
      label: "Free 3D Design Before Work Starts",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-16 lg:mb-20"
        >
          {/* Main Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="bg-gradient-to-r from-amber-50 to-transparent border-r-4 border-green-500 p-5 sm:p-6 rounded-r-2xl my-8">
              <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                <span className="font-bold text-stone-900">
                  Infinity Space Odisha
                </span>{" "}
                is Bhubaneswar's dedicated residential interior design studio —
                built from the ground up to serve the city's homeowners with
                design that goes far beyond decoration. Whether you are moving
                into a brand-new 2BHK in Patia, renovating your family home in
                Nayapalli, or designing a luxury villa in Chandrasekharpur, we
                bring <b>expert home interior design in Bhubaneswar</b> that is
                personalised to your lifestyle, budget, and the unique character
                of your space.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-green-500 p-5 sm:p-6 rounded-l-2xl my-8">
              <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                We are not a national aggregator with a Bhubaneswar landing
                page. We are a{" "}
                <span className="font-semibold text-stone-900">
                  local interior design company in Bhubaneswar
                </span>{" "}
                — which means our designers know these localities, understand
                Odisha's tropical climate, respect the region's Kalinga cultural
                heritage, and are genuinely invested in making your home
                extraordinary. Every project we take on is a long-term
                relationship, not a transaction.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Bar / Stats Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[56px]">
              Trusted by Hundreds
              <span className="text-green-700"> of Families </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
