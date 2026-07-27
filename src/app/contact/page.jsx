"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectType: "",
    propertyLocation: "",
    propertySize: "",
    projectDetails: "",
    services: [],
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((item) => item !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🏡 *Interior Design Consultation Request*

👤 Full Name:
${formData.fullName}

📞 Phone:
${formData.phone}

📧 Email:
${formData.email}

🏢 Project Type:
${formData.projectType}

📍 Property Location:
${formData.propertyLocation}

📐 Property Size:
${formData.propertySize} sq.ft.

🛠 Services Required:
${formData.services.join(", ")}

📝 Project Details:
${formData.projectDetails}
`;

    window.open(
      `https://wa.me/917077797720?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      projectType: "",
      propertyLocation: "",
      propertySize: "",
      projectDetails: "",
      services: [],
    });
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT GIF */}
          <div className="order-1 flex justify-center lg:order-1 lg:-mt-16">
            <div className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[550px]">
              <Image
                src="/contactgif.gif"
                alt="Interior Design Consultation"
                width={550}
                height={550}
                className="w-full h-auto object-contain -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-26"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="order-2">
            <span className="inline-block rounded-full bg-[#01653F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#01653F]">
              Contact Form
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Get Free Consultation
            </h2>

            <p className="mt-3 text-gray-600">
              Fill out the form and our interior design team will contact you
              shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg lg:p-8"
            >
              {/* Full Name */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#01653F]"
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#01653F]"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#01653F]"
                />
              </div>

              {/* Project Type */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#01653F]"
                >
                  <option value="">Select Project Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office Interior</option>
                  <option>Commercial Space</option>
                  <option>Retail Store</option>
                </select>
              </div>

              {/* Location */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Property Location
                </label>
                <input
                  type="text"
                  name="propertyLocation"
                  value={formData.propertyLocation}
                  onChange={handleChange}
                  placeholder="Bhubaneswar"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#01653F]"
                />
              </div>

              {/* Property Size */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Property Size (sq. ft.)
                </label>
                <input
                  type="text"
                  name="propertySize"
                  value={formData.propertySize}
                  onChange={handleChange}
                  placeholder="Enter property size"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#01653F]"
                />
              </div>

              {/* Services Checkboxes */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Services Required
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Interior Design",
                    "Modular Kitchen",
                    "Living Room Design",
                    "Bedroom Design",
                    "Office Interior",
                    "Commercial Interior",
                    "Customized Furniture",
                    "Turnkey Interior Solutions",
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckbox(service)}
                        className="rounded border-gray-300 text-[#01653F] focus:ring-[#01653F]"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#01653F]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#01653F] py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Get Free Consultation
              </button>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 flex items-center gap-3 rounded-xl bg-green-50 p-4"
                  >
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-green-700">
                      Consultation request sent successfully!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
