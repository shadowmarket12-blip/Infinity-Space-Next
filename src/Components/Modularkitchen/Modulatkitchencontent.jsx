"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ModularKitchenContent = () => {
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
                A well-designed kitchen changes how you feel about cooking every
                single day. At Infinity Space, we design modular kitchens that
                are precise in their layout, honest in their pricing, and built
                to the material standards that actually hold up over time. As a {''}
                <Link href="/blogs" className="font-bold">
                  trusted interior design company in Bhubaneswar,
                </Link>
                we have delivered modular kitchens across the city — in compact
                1BHK apartments, spacious 3BHK flats, and independent villas —
                each one designed around the specific dimensions, habits, and
                priorities of the family using it.
              </p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-green-500 p-5 sm:p-6 rounded-l-2xl my-8">
              <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                If you are worried about your {""}
                <Link href="/" className="font-bold">
                  Modular Kitchen Design in Bhubaneswar
                </Link>{" "}
                {""}
                then stay stress free as every project with Infinity Space
                starts with a free consultation and a precise site measurement
                and ends with a 3D-approved kitchen you have signed off on
                before we make a single cabinet.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModularKitchenContent;
