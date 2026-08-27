// app/why-choose-us/page.jsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheck,
  FiShield,
  FiSun,
  FiCompass,
  FiEye,
  FiDollarSign,
  FiClock,
  FiMapPin,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

const WhyChooseUsDesignStyles = () => {
  const [activeStyle, setActiveStyle] = useState(0);
  const [expandedReason, setExpandedReason] = useState(null);

  const reasons = [
    {
      icon: FiMapPin,
      title: "We Are Local — Genuinely, Not Just Geographically",
      shortDescription:
        "We live in Bhubaneswar. Our designers understand the daily rhythms of Odia life.",
      fullDescription:
        "We live in Bhubaneswar. Our designers shop at Ekamra Haat, eat at Dalma restaurants, and understand the daily rhythms of Odia life. This lived familiarity shows in every design decision: we know which localities have compact apartments that need every-inch thinking, which areas have generous floor plans that allow bold design moves, and which building societies have material delivery restrictions that affect project timelines. A national brand gives you a Bhubaneswar page; we give you a Bhubaneswar team.",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
    },
    {
      icon: FiSun,
      title: "Climate-Smart Design Is Built Into Our DNA",
      shortDescription:
        "Every material we specify is chosen with Bhubaneswar's climate in mind.",
      fullDescription:
        "Most interior guides from national platforms are written for Mumbai or Bangalore. Bhubaneswar has its own climate story: summer temperatures above 40°C, high monsoon humidity from June to September, and cyclone-season moisture that destroys inferior materials within two to three years. Every material we specify — from the plywood grade to the laminate finish to the hardware brand — is chosen with Bhubaneswar's climate in mind. Our clients' interiors look as good in year five as they did on day one.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
    },
    {
      icon: FiCompass,
      title: "Vastu Shastra — Integrated, Not Bolted On",
      shortDescription:
        "Vastu compliance is a genuine priority, woven into our floor plans naturally.",
      fullDescription:
        "Vastu compliance is a genuine priority for most Bhubaneswar homeowners, not an afterthought. Our designers are trained in Vastu principles and integrate them from the earliest planning stage — not as a retrofitted checklist. Kitchen in the southeast, master bedroom in the southwest, pooja room in the northeast, study desk facing east: these placements are woven into our floor plans naturally, without compromising the design.",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
    },
    {
      icon: FiEye,
      title: "Free 3D Design — Approve Before You Spend",
      shortDescription:
        "See your home in photorealistic 3D before any money is committed.",
      fullDescription:
        "One of the most common complaints about interior design companies in Bhubaneswar is that clients feel surprised by the final outcome. We eliminate this risk entirely with our free, detailed 3D visualisation process. Before any money is committed to materials or fabrication, you see your home in photorealistic 3D — room by room, angle by angle. If anything does not feel right, we revise it. You only proceed when you love what you see.",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
    },
    {
      icon: FiDollarSign,
      title: "Transparent Pricing — Line by Line",
      shortDescription:
        "Every cost in detailed, itemised format — no surprises, no hidden charges.",
      fullDescription:
        "We present every cost in a detailed, itemised format: material name, brand, quantity, rate, and total. You can see exactly what you are paying for at every line. There are no provisional sums, no vague contingency buffers, and no surprise invoices mid-project. Our clients consistently cite transparency as one of the top reasons they recommend us to family and friends.",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50",
      textColor: "text-rose-700",
      borderColor: "border-rose-200",
    },
    {
      icon: FiShield,
      title: "5-Year Warranty on All Woodwork & Installations",
      shortDescription:
        "We back our quality with a formal 5-year warranty on all carpentry.",
      fullDescription:
        "We back our quality with a formal 5-year warranty on all carpentry, modular kitchens, wardrobes, and woodwork installations. This is our commitment to the standard of our craftsmanship — and your assurance that when you invest in Infinity Space Odisha, you are investing in something built to last.",
      color: "from-teal-500 to-green-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
    },
  ];

  const designStyles = [
    {
      name: "Contemporary Indian Modern",
      description:
        "The dominant preference in Bhubaneswar today — clean lines, warm wood tones, layered lighting, and subtle cultural accents that feel current without being cold",
      icon: "🏛️",
    },
    {
      name: "Traditional Odia with Modern Touches",
      description:
        " Earthy terracotta and ochre palettes, Kalinga-inspired motif panels, Pipli-applique textile accents, and wooden mandir units — balanced with modern kitchen and wardrobe systems",
      icon: "🏺",
    },
    {
      name: "Minimalist",
      description:
        ": Fewer elements, better quality — restrained colour palettes, hidden storage, and a deep respect for negative space that creates calm in busy family homes",
      icon: "🤍",
    },
    {
      name: "Scandinavian",
      description:
        "Light-soaked, functional, and unpretentious — birch-tone furniture, neutral palettes, and a focus on natural materials that work beautifully in Bhubaneswar's well-lit apartments",
      icon: "🪵",
    },
    {
      name: "Luxury / Neo-Classical",
      description:
        "High-gloss finishes, marble countertops, chandelier lighting, ornate cornicing, and rich colour — for villas and premium apartments where grandeur is the brief",
      icon: "👑",
    },
    {
      name: "Industrial Chic",
      description:
        "Exposed brick panels, concrete-look laminates, matte black hardware, and Edison bulb lighting — increasingly popular in the younger homeowner segment",
      icon: "⚙️",
    },
    {
      name: "Biophilic & Sustainable",
      description:
        "2026's fastest-growing design trend in Bhubaneswar: laterite stone accents, bamboo and cane elements, indoor planting zones, and locally sourced natural materials",
      icon: "🌿",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-stone-50 to-transparent rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-50 to-transparent rounded-full filter blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ============ WHY CHOOSE US SECTION ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 sm:mb-24 lg:mb-32"
        >
          {/* Section Header - CENTERED */}
          <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
            <div className="text-center">
              <h2 className="mt-6 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[40px]">
                Why Bhubaneswar Homeowners Choose Infinity
                <span className="text-green-700">
                  {" "}
                  Space Odisha for Home Interior Design
                </span>
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-6 max-w-3xl mx-auto text-left sm:text-center lg:text-left  pl-6 sm:pl-0 lg:pl-6">
                Searching for an <b>interior design company in Bhubaneswar</b>{" "}
                brings up dozens of options — national platforms, freelance
                decorators, aggregator pages, and local studios. The choice can
                feel overwhelming. Here is what makes the Infinity Space Odisha
                difference tangible:
              </p>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  layout
                  onClick={() =>
                    setExpandedReason(expandedReason === index ? null : index)
                  }
                  className={`group cursor-pointer relative rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
                    expandedReason === index
                      ? `${reason.borderColor} shadow-xl shadow-stone-900/10 lg:col-span-2`
                      : "border-stone-200 hover:border-stone-400 hover:shadow-lg"
                  }`}
                >
                  {/* Colored Top Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${reason.color}`}
                  ></div>

                  <div className="p-5 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${reason.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <reason.icon
                          className={`w-6 h-6 sm:w-7 sm:h-7 ${reason.textColor}`}
                        />
                      </div>

                      <div className="flex-1 min-w-0 w-full">
                        <h3 className="font-bold text-stone-900 text-base sm:text-lg mb-3 pr-4 sm:pr-8">
                          {reason.title}
                        </h3>

                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={
                              expandedReason === index
                                ? "expanded"
                                : "collapsed"
                            }
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            {expandedReason === index ? (
                              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                                {reason.fullDescription}
                              </p>
                            ) : (
                              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">
                                {reason.shortDescription}
                              </p>
                            )}
                          </motion.div>
                        </AnimatePresence>

                        {/* Read More Button */}
                        <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-stone-900 transition-colors">
                          {expandedReason === index ? "Show Less" : "Read More"}
                          <motion.span
                            animate={{
                              rotate: expandedReason === index ? 90 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <FiArrowRight className="w-3.5 h-3.5" />
                          </motion.span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ============ DESIGN STYLES SECTION ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header - CENTERED */}
          <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
            <div className="text-center">
              <h2 className="mt-4 text-[20px] font-black leading-[1.1] text-black sm:text-[42px] lg:text-[40px]">
                Styles We Specialise In For Every{" "}
                <span className="text-green-700">Bhubaneswar Home</span>
              </h2>
              <p className="text-black text-sm sm:text-base leading-relaxed mt-6 max-w-3xl mx-auto text-left sm:text-center lg:text-left  pl-6 sm:pl-0 lg:pl-6">
                Good home interior design in Bhubaneswar is not
                one-size-fits-all. It reflects the personality of the family
                living there.
              </p>
            </div>
          </div>

          {/* Design Styles Grid & Detail */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Style Navigation */}
              <div className="lg:col-span-1">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3">
                  {designStyles.map((style, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveStyle(index)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl transition-all duration-300 group ${
                        activeStyle === index
                          ? "bg-stone-900 text-white shadow-xl shadow-stone-900/20"
                          : "bg-white text-stone-600 hover:bg-stone-50 border border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-center lg:items-center gap-2 sm:gap-3">
                        <span className="text-xl sm:text-2xl lg:text-3xl">
                          {style.icon}
                        </span>
                        <div className="text-center sm:text-left lg:text-left">
                          <h4
                            className={`font-semibold text-xs sm:text-sm lg:text-base ${
                              activeStyle === index
                                ? "text-white"
                                : "text-stone-900 group-hover:text-stone-700"
                            }`}
                          >
                            {style.name}
                          </h4>
                        </div>
                        {activeStyle === index && (
                          <FiArrowRight className="hidden sm:block lg:block w-4 h-4 lg:w-5 lg:h-5 ml-auto text-white/60" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Style Detail Card */}
              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStyle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-3xl border border-stone-200 shadow-xl shadow-stone-900/5 overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 lg:p-10">
                      {/* Style Icon & Name */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-stone-100 to-stone-50 flex items-center justify-center shadow-inner flex-shrink-0">
                          <span className="text-3xl sm:text-4xl lg:text-5xl">
                            {designStyles[activeStyle].icon}
                          </span>
                        </div>
                        <div>
                          <span className="text-stone-400 text-xs font-semibold uppercase tracking-wider">
                            Design Style
                          </span>
                          <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-stone-900 mt-1">
                            {designStyles[activeStyle].name}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {designStyles[activeStyle].description}
                      </p>

                      {/* Bottom Indicator */}
                      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-stone-400 text-xs">
                          Style {activeStyle + 1} of {designStyles.length}
                        </span>
                        <div className="flex items-center gap-2">
                          {designStyles.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveStyle(index)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                activeStyle === index
                                  ? "w-8 bg-stone-900"
                                  : "w-1.5 bg-stone-300 hover:bg-stone-400"
                              }`}
                            ></button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsDesignStyles;
