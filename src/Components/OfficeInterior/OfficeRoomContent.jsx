"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const OfficeRoomContent = () => {
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
                At Infinity Space, we create office interiors around your
                business requirements, available floor area, working style and
                budget priorities. Whether you are setting up a new office,
                redesigning an existing workspace or planning a more formal
                corporate environment, our approach starts with understanding
                how the space needs to work before deciding how it should look.
              </p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-green-500 p-5 sm:p-6 rounded-l-2xl my-8">
              <p className="text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                If you are looking for{" "}
                <Link href="/" className="font-bold">
                  office interior design in Bhubaneswar,
                </Link>
                Infinity Space can help you plan a workspace with considered
                layouts, practical furniture, suitable finishes and coordinated
                interior details. We work to bring the key elements together so
                the result feels professional, usable and aligned with your
                organisation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeRoomContent;
