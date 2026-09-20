// src/app/about-us/Mycontent.jsx

import React from "react";
import Link from "next/link";

export default function AboutContentSection() {
  const paragraphs = [
    {
      title: "Our Design Philosophy",
      content: `At Infinity Space, we believe great interior design is not just about decorating a space — it is about creating an environment that improves the way people live, work, and experience everyday life. As trusted interior designers in Bhubaneswar, we focus on designing thoughtfully planned homes and workspaces that combine comfort, elegance, smart functionality, and personalized aesthetics.`,
    },
    {
      title: "Crafting Stories Through Spaces",
      content: `Every home has a story, and every workspace reflects a vision. Our goal is to create spaces that feel warm, refined, organized, and comfortable while ensuring every detail serves a meaningful purpose. Whether it is a modern apartment, luxury villa, office workspace, retail showroom, modular kitchen, or customized furniture solution, our team works closely with clients to transform ideas into beautifully designed environments.`,
    },
    {
      title: "Comprehensive Interior Solutions",
      content: `Infinity Space is a trusted interior design company in Bhubaneswar specializing in residential interior design, commercial interiors, modular kitchen design, wardrobe solutions, TV unit concepts, false ceiling design, customized furniture, and turnkey interior solutions. From concept planning and 3D visualization to material selection and final execution, every stage is managed with professional coordination, attention to detail, and quality craftsmanship.`,
    },
    {
      title: "Tailored Approach for Every Client",
      content: `We understand that designing a home or workspace is a personal journey. That is why we focus on listening carefully to our clients, understanding their lifestyle needs, space preferences, and functional requirements before creating a design concept. Instead of using repetitive templates, we believe every project deserves a tailored approach that reflects individuality, comfort, and practicality.`,
    },
    {
      title: "Modern Living, Elevated Design",
      content: `As experienced home interior designers in Bhubaneswar, we create spaces that maximize natural flow, improve usability, optimize storage, and maintain visual balance. Our design philosophy combines contemporary styling, intelligent layouts, premium textures, balanced lighting, and space-efficient planning to create interiors that feel sophisticated yet comfortable for modern living.`,
    },
    {
      title: "Trusted Across Bhubaneswar & Beyond",
      content: `Over the years, we have worked on apartments, villas, office interiors, retail spaces, clinics, modular kitchens, and commercial projects across Bhubaneswar, Cuttack, and Khordha. Our commitment to transparent communication, organized project execution, premium materials, and finishing quality has helped us build long-term relationships with homeowners and businesses looking for reliable interior designers in Bhubaneswar.`,
    },
    {
      title: "Functionality Meets Aesthetics",
      content: `What truly sets us apart is our practical approach to design. We do not focus only on visual appeal — we create spaces that support everyday functionality, comfort, organization, and productivity. From compact urban homes to large commercial spaces, every project is planned with creativity, precision, and thoughtful execution.`,
    },
    {
      title: "Visit Our Design Studio",
      content: `Our office is located at Barabhuja Market Complex, Khandagiri, Bhubaneswar, Odisha, where clients can connect with our team to discuss residential interiors, modular kitchen planning, office interior design, turnkey execution, and personalized interior solutions designed around their vision and budget.`,
    },
    {
      title: "Timeless Design, Lasting Impact",
      content: `At Infinity Space, we believe interior design should feel meaningful, long-lasting, and deeply connected to the people who use the space every day. Whether you are renovating your home, designing a modern office, planning a modular kitchen, or creating a new living environment from scratch, our team is dedicated to delivering spaces that combine beauty, comfort, functionality, and timeless design.`,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf9f6] to-white py-24 sm:py-28 lg:py-36">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(1,101,63,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Elegant Gold Lines */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[rgba(1,101,63,0.2)] to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[rgba(1,101,63,0.2)] to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-[rgba(1,101,63,0.02)] blur-[150px]" />
      <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-[rgba(1,101,63,0.02)] blur-[150px]" />

      <div className="absolute left-1/2 top-20 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[rgba(1,101,63,0.015)] blur-[100px]" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center sm:mb-20 lg:mb-24">
          <span className="inline-block rounded-full border border-[rgba(1,101,63,0.15)] bg-[rgba(1,101,63,0.03)] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[rgba(1,101,63,1)] sm:tracking-[4px]">
            Our Story
          </span>

          <h2 className="mt-6 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Redefining{" "}
            <span className="font-semibold text-[rgba(1,101,63,1)]">
              Interior Design
            </span>{" "}
            Excellence
          </h2>

          <div className="mx-auto mt-6 h-0.5 w-20 bg-gradient-to-r from-transparent via-[rgba(1,101,63,0.5)] to-transparent sm:mt-8" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Discover our journey, philosophy, and commitment to creating
            exceptional spaces
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {paragraphs.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(1,101,63,0.08)] hover:border-[rgba(1,101,63,0.15)] sm:p-10">
                {/* Subtle Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(1,101,63,0.02)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Decorative Corner */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[rgba(1,101,63,0.03)] transition-all duration-500 group-hover:scale-150 group-hover:bg-[rgba(1,101,63,0.05)]" />

                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[rgba(1,101,63,0.4)] via-[rgba(1,101,63,0.2)] to-transparent rounded-l-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number & Title */}
                  <div className="mb-5 flex items-center gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(1,101,63,0.06)] text-sm font-semibold text-[rgba(1,101,63,1)] sm:h-11 sm:w-11 sm:text-base">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
                      {item.title === "Modern Living, Elevated Design" ? (
                        <Link
                          href="/services/living-room-interior-design"
                          className="transition-colors duration-300 hover:text-[rgba(1,101,63,1)]"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        item.title
                      )}
                    </h3>
                  </div>

                  {/* Paragraph */}
                  <p className="text-[15px] leading-8 text-gray-600 sm:text-[16px] sm:leading-9">
                    {item.content}
                  </p>

                  {/* Bottom Decorative Element */}
                  <div className="mt-6 h-px w-12 bg-gradient-to-r from-[rgba(1,101,63,0.2)] to-transparent transition-all duration-500 group-hover:w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center sm:mt-20 lg:mt-24">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-[rgba(1,101,63,0.2)] bg-white px-8 py-4 text-sm font-semibold text-[rgba(1,101,63,1)] shadow-[0_4px_15px_rgba(1,101,63,0.05)] transition-all duration-500 hover:bg-[rgba(1,101,63,1)] hover:text-white hover:shadow-[0_8px_30px_rgba(1,101,63,0.2)] hover:border-[rgba(1,101,63,1)]"
          >
            <span>Start Your Design Journey</span>
            <svg
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
