"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Poojainteriorcontent = () => {
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
                At Infinity Space, we design pooja spaces around the actual
                character of the room, the available dimensions and the way your
                family uses the space. Whether you want a dedicated mandir, a
                compact pooja unit in an apartment, or a traditional shrine with
                contemporary detailing, we plan the design around your home
                rather than starting with a fixed template.
              </p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-green-500 p-5 sm:p-6 rounded-l-2xl my-8">
              <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                Our{" "}
                <b className="font-bold">
                  pooja room interior services in Bhubaneswar{" "}
                </b>
                cover the elements that make a prayer space practical as well as
                visually complete: the mandir structure, backdrop, shelves,
                drawers, lighting, storage, partitions, materials and finishing
                details. We also discuss Vastu preferences at the planning stage
                when they are important to you, while keeping the final design
                workable for the actual layout of your home.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Poojainteriorcontent;
