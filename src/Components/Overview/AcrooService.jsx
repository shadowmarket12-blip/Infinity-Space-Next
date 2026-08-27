"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiHome, FiBriefcase, FiShoppingBag } from "react-icons/fi";

const ServiceAreasSection = () => {
  const serviceCategories = [
    {
      icon: <FiHome className="w-6 h-6" />,
      title: "Modern Homes",
      description: "Thoughtfully designed living spaces",
    },
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Apartments",
      description: "Space-efficient urban interiors",
    },
    {
      icon: <FiShoppingBag className="w-6 h-6" />,
      title: "Offices & Retail",
      description: "Productive commercial environments",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Commercial Properties",
      description: "Balanced professional spaces",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-50 via-orange-50 to-transparent rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-stone-50 via-gray-50 to-transparent rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white  overflow-hidden"
          >
            {/* Top Gradient Bar */}
            <div className="h-1.5 sm:h-2"></div>

            <div className="p-6 sm:p-8 lg:p-12">
              {/* Header Section */}
              <div className="text-center mb-10 sm:mb-12 lg:mb-14">
                <h2 className="text-[24px] sm:text-[38px] lg:text-[46px] font-black leading-[1.15] text-stone-900 mb-4 sm:mb-6">
                  Serving Clients Across{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-green-700">
                      Bhubaneswar, Cuttack
                    </span>
                    <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3  -z-10"></span>
                  </span>{" "}
                  & Khordha
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
                >
                  Infinity Space provides affordable interior design services in
                  Bhubaneswar for modern homes, apartments, offices, retail
                  spaces, and commercial properties across Cuttack and Khordha.
                  Our focus is on creating interiors that feel practical,
                  visually balanced, space-efficient, and comfortable for
                  everyday living and working environments.
                </motion.p>
              </div>

              {/* Service Categories Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12"
              >
                {serviceCategories.map((service, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center text-center p-4 sm:p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-stone-300 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-stone-200 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-300 shadow-sm">
                      <span className="text-stone-600 group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 mb-1 group-hover:text-stone-700 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-stone-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
