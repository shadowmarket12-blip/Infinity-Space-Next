"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BedroomCta = () => {
  const phoneNumber1 = "7077797720";
  const phoneNumber2 = " 7077797729";
  const emailAddress = "infinityspaceodisha@gmail.com";
  const studioAddress =
    "FA 1/63, Barabhuja market complex, Khandagiri, Bhubaneswar, Odisha 751030";

  const handleCallNow1 = () => {
    window.location.href = `tel:${phoneNumber1}`;
  };

  const handleCallNow2 = () => {
    window.location.href = `tel:${phoneNumber2}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-stone-900/5 border border-stone-200 overflow-hidden"
          >
            <div className="relative p-6 sm:p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <h2 className="mb-4 mt-6 text-[18px] font-black leading-[1.2] text-black sm:text-[32px] lg:text-[40px]">
                  Let Us Design a Bedroom
                  <span className="relative inline-block">
                    <span className="relative z-10 text-green-700">
                      That Feels Like
                    </span>
                    <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-green-200/50 -z-10"></span>
                  </span>{" "}
                  Yours
                </h2>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16"
              >
                <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                  Your bedroom does not have to look like everyone else's. It
                  should reflect your lifestyle, your preferences and the way
                  you always wanted it to look like. Whether you are planning a
                  new master bedroom, improving a compact apartment bedroom or
                  looking for better storage, Infinity Space can help you plan
                  the space from the initial idea to the finished interior.
                </p>
                <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed">
                  We can help you achieve your dream bedroom interior design in
                  Bhubaneswar, talk to Infinity Space about your room, your
                  requirements and the kind of bedroom you have in mind.
                </p>
              </motion.div>

              {/* Contact Details - Column Layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16"
              >
                <div className="bg-stone-50 border border-stone-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
                  <div className="space-y-6 sm:space-y-8">
                    {/* Phone Numbers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Phone 1 */}
                      <button
                        onClick={handleCallNow1}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-green-50 border border-stone-200 hover:border-green-300 transition-all duration-300 text-left"
                      >
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center group-hover:bg-green-200 group-hover:border-green-300 transition-all duration-300">
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-xs font-semibold uppercase tracking-wider text-black mb-1">
                            Primary Phone
                          </span>
                          <span className="block text-base sm:text-lg font-bold text-black group-hover:text-green-700 transition-colors duration-300">
                            {phoneNumber1}
                          </span>
                        </div>
                        <svg
                          className="w-5 h-5 text-black group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>

                      {/* Phone 2 */}
                      <button
                        onClick={handleCallNow2}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-green-50 border border-stone-200 hover:border-green-300 transition-all duration-300 text-left"
                      >
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center group-hover:bg-green-200 group-hover:border-green-300 transition-all duration-300">
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                            Alternate Number
                          </span>
                          <span className="block text-base sm:text-lg font-bold text-stone-900 group-hover:text-green-700 transition-colors duration-300">
                            {phoneNumber2}
                          </span>
                        </div>
                        <svg
                          className="w-5 h-5 text-stone-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>

                    {/* Email */}
                    <button
                      onClick={handleEmail}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-green-50 border border-stone-200 hover:border-green-300 transition-all duration-300 text-left w-full"
                    >
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center group-hover:bg-green-200 group-hover:border-green-300 transition-all duration-300">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                          Email Address
                        </span>
                        <span className="block text-sm sm:text-base font-bold text-stone-900 group-hover:text-green-700 transition-colors duration-300 truncate">
                          {emailAddress}
                        </span>
                      </div>
                      <svg
                        className="w-5 h-5 text-stone-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>

                    {/* Address */}
                    <div className="group flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-green-50 border border-stone-200 hover:border-green-300 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center group-hover:bg-green-200 group-hover:border-green-300 transition-all duration-300">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                          Visit Our Studio
                        </span>
                        <span className="block text-sm sm:text-base font-medium text-stone-600 group-hover:text-stone-900 transition-colors duration-300 leading-relaxed">
                          {studioAddress}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button - Now links to Contact Us page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <Link href="/contact" passHref>
                  <div className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm md:text-base rounded-full shadow-xl shadow-green-500/20 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden w-full sm:w-auto justify-center cursor-pointer">
                    {/* Hover shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <span className="relative z-10 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="whitespace-nowrap text-center">
                        <span className="block sm:inline">
                          Book Your Free Consultation
                        </span>
                        <span className="hidden sm:inline"> — </span>
                        <span className="block sm:inline text-xs sm:text-sm md:text-base">
                          Response Within 24 Hours
                        </span>
                      </span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BedroomCta;
