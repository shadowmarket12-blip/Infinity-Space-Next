"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LivingRoomContent = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="bg-gradient-to-r from-amber-50 to-transparent border-r-4 border-green-500 p-5 sm:p-6 rounded-r-2xl my-8">
              <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                <span className="font-bold text-stone-900">
                  {" "}
                  At Infinity Space,
                </span>{" "}
                we design living rooms that do more than look beautiful. As a{" "}
                {""}
                <span className="font-bold text-stone-900">
                  <Link href="/">
                    trusted interior design company in Bhubaneswar,{" "}
                  </Link>
                </span>
                we build spaces that hold your daily life and your most
                important celebrations with equal ease — from quiet evenings to
                Durga Puja gatherings. Every design decision we make is grounded
                in this city's climate, its culture, and the way Odia families
                truly use their homes. Whether you have a compact apartment in
                Khandagiri or a spacious villa in Nayapalli, our living room
                interior designers in Bhubaneswar create spaces that are
                proportioned to your floor plan, personalised to your taste, and
                built to last through every Odisha season.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LivingRoomContent;
