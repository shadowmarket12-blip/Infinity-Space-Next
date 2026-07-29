"use client";

import React from "react";
import { motion } from "framer-motion";

const LivingRoomCta = () => {
  const phoneNumber = "7077797720";
  const emailAddress = "hello@infinityspaceodisha.com";
  const studioAddress = "Plot No. 123, Patia, Bhubaneswar, Odisha - 751024";

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleBookConsultation = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="relative  py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-2xl sm:rounded-3xl  shadow-2xl shadow-stone-900/5 overflow-hidden"
          >
            <div className="p-6 sm:p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="mb-4 mt-6 text-[20px] font-black leading-[1.2] text-black sm:text-[42px] lg:text-[56px]">
                  Book Your Free Living Room{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-green-700">
                      Design Consultation
                    </span>
                  </span>{" "}
                  Today
                </h2>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-3xl mx-auto text-center mb-10 sm:mb-12"
              >
                <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                  The living room is where your home announces itself - to your
                  guests, and to you, every single day. It deserves more than a
                  catalogue selection and a rushed installation. It deserves
                  thought, local expertise, and the kind of personalised
                  creative attention that only a genuinely invested design team
                  can offer.
                </p>
                <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Infinity Space Odisha is ready to design your living room. Our
                  interior designers in Bhubaneswar will visit your space,
                  listen to your vision, and show you exactly what your living
                  room could look like in 3D before you commit a single rupee.
                  <span className="font-bold text-emerald-700">
                    The first consultation is completely free. Contact us today.
                  </span>
                </p>
              </motion.div>

              {/* Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12"
              >
                {/* Phone */}
                <button
                  onClick={handleCallNow}
                  className="group relative bg-stone-50 hover:bg-emerald-50 rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      📞
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                        Call / WhatsApp
                      </span>
                      <span className="block text-sm sm:text-base font-bold text-stone-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {phoneNumber}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Email */}
                <button
                  onClick={handleEmail}
                  className="group relative bg-stone-50 hover:bg-blue-50 rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      📧
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                        Email Us
                      </span>
                      <span className="block text-sm sm:text-base font-bold text-stone-900 group-hover:text-blue-700 transition-colors duration-300 truncate">
                        {emailAddress}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Studio */}
                <div className="group relative bg-stone-50 hover:bg-amber-50 rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      📍
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                        Visit Our Studio
                      </span>
                      <span className="block text-sm font-bold text-stone-900 group-hover:text-amber-700 transition-colors duration-300 leading-snug">
                        {studioAddress}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <button
                  onClick={handleBookConsultation}
                  className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white font-bold text-sm sm:text-base rounded-full shadow-xl shadow-stone-900/20 hover:shadow-2xl hover:shadow-stone-900/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <span className="relative z-10 flex items-center gap-3">
                    <svg
                      className="w-5 h-5"
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
                    Book Your Free Consultation — Response Within 24 Hours
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Trust Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center text-stone-400 text-xs sm:text-sm mt-6"
          >
            No obligation • Free 3D design included • Response within 24 hours
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default LivingRoomCta;
