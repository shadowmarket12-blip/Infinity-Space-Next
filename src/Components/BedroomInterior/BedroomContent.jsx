"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BedroomContent = () => {
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
                <span className="font-medium text-stone-900">
                  {" "}
                  At Infinity Space,
                </span>{" "}
                {""}
                <span className="font-bold text-stone-900">
                  <Link href="/">
                    we provide customised bedroom interior design in
                    Bhubaneswar.{" "}
                  </Link>
                </span>
                Whether you are setting up a new apartment, renovating your
                existing bedroom or looking for better storage, we work with you
                to plan the furniture, wardrobe, lighting, colours, finishes and
                other details as one complete design. Our approach is simple:
                understand your space first, understand what you need from it,
                and then create a bedroom that you have always dreamt of.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BedroomContent;
