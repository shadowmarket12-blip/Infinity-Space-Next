"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FalseCeilingContent = () => {
  return (
    <section className="relative py-16 lg:py-10 overflow-hidden">
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
                At Infinity Space, we provide customised false ceiling design
                solutions based on the dimensions, ceiling height, lighting
                requirements and overall interior style of your home or
                commercial space. As a false ceiling design service provider in
                Bhubaneswar, we plan ceiling layouts that combine visual appeal
                with practical considerations.
              </p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-green-500 p-5 sm:p-6 rounded-l-2xl my-8">
              <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                Whether you prefer a simple gypsum ceiling, a modern layered
                design, a decorative POP finish or a ceiling with integrated LED
                and cove lighting, we help you explore suitable options for your
                space. Our approach is to create a ceiling that works naturally
                with the rest of your interior rather than treating it as a
                separate decorative element.
              </p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-transparent border-r-4 border-green-500 p-5 sm:p-6 rounded-r-2xl my-8">
              <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                If you are planning a new home, renovating an existing space or
                upgrading a particular room, Infinity Space can help you plan a
                false ceiling that suits your requirements and budget.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FalseCeilingContent;
