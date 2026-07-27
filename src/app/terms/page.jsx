// src/app/terms/page.jsx

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - Infinity Space",
  description:
    "Terms and Conditions for Infinity Space interior design services",
};

const TermsConditions = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="bg-gray-100 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-black text-sm md:text-base">
              Welcome to Infinity Space
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="prose prose-gray max-w-none">
            <p className="text-black leading-relaxed">
              Welcome to Infinity Space. By accessing or using our website
              https://infinityspaceodisha.com, you agree to comply with and be
              bound by the following Terms & Conditions. Please read them
              carefully before using our website or services.
            </p>

            <hr className="my-8" />

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing this website, you agree to use the website in
                accordance with these Terms & Conditions, applicable laws, and
                regulations. If you do not agree with any part of these terms,
                please discontinue use of the website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                2. About Our Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Infinity Space is an interior design company based in
                Bhubaneswar, Odisha providing residential interior design,
                commercial interior solutions, modular kitchen design,
                customized furniture, office interiors, false ceiling design,
                and turnkey interior services.
              </p>

              <p className="text-black leading-relaxed mt-4">
                All information provided on the website is intended for general
                informational purposes regarding our services and projects.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                3. Intellectual Property Rights
              </h2>

              <p className="text-black mb-4">
                All content available on this website including:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-black">
                <li>text</li>
                <li>images</li>
                <li>graphics</li>
                <li>logos</li>
                <li>project visuals</li>
                <li>design concepts</li>
                <li>branding materials</li>
              </ul>

              <p className="text-black leading-relaxed mt-4">
                is the property of Infinity Space unless otherwise stated.
              </p>

              <p className="text-black leading-relaxed mt-4">
                Unauthorized copying, reproduction, distribution, modification,
                or commercial use of any website content without written
                permission is prohibited.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                4. Project Images & Portfolio Content
              </h2>

              <p className="text-black leading-relaxed">
                Project images displayed on the website are intended for
                showcasing completed or ongoing interior design work. Some
                images may represent conceptual designs or visual references for
                presentation purposes.
              </p>

              <p className="text-black leading-relaxed mt-4">
                Users may not download, reproduce, or reuse project images for
                commercial purposes without permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                5. Website Information Accuracy
              </h2>

              <p className="text-black leading-relaxed">
                We strive to keep all website information accurate and updated.
                However, Infinity Space does not guarantee the completeness,
                reliability, or accuracy of all information, pricing references,
                timelines, or design details displayed on the website.
              </p>

              <p className="text-black leading-relaxed mt-4">
                Interior design requirements, material availability, project
                timelines, and costs may vary depending on project scope and
                customization requirements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                6. Third-Party Links
              </h2>

              <p className="text-black leading-relaxed">
                Our website may contain links to third-party websites or
                platforms for informational purposes. Infinity Space is not
                responsible for the content, policies, or practices of external
                websites.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                7. User Responsibilities
              </h2>

              <p className="text-gray-700 mb-4">Users agree not to:</p>

              <ul className="list-disc pl-6 space-y-2 text-black">
                <li>misuse the website</li>
                <li>attempt unauthorized access</li>
                <li>distribute malicious content</li>
                <li>copy website content unlawfully</li>
                <li>interfere with website functionality</li>
              </ul>

              <p className="text-black leading-relaxed mt-4">
                Any misuse of the website may result in restricted access or
                legal action where applicable.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                8. Limitation of Liability
              </h2>

              <p className="text-black mb-4">
                Infinity Space shall not be held liable for:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-black">
                <li>temporary website unavailability</li>
                <li>technical errors</li>
                <li>indirect losses</li>
                <li>reliance on website information</li>
                <li>third-party website issues</li>
              </ul>

              <p className="text-black leading-relaxed mt-4">
                Users access and use the website at their own discretion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                9. Privacy
              </h2>

              <p className="text-black leading-relaxed">
                Use of this website is also governed by our Privacy Policy,
                which explains how user information may be collected and used.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-4">
                10. Changes to Terms & Conditions
              </h2>

              <p className="text-black leading-relaxed">
                Infinity Space reserves the right to update or modify these
                Terms & Conditions at any time without prior notice. Users are
                encouraged to review this page periodically for updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                11. Contact Information
              </h2>

              <p className="text-black leading-relaxed mb-4">
                For questions regarding these Terms & Conditions, users may
                contact:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900">
                  Infinity Space
                </h3>

                <p className="text-black mt-2">
                  Barabhuja Market Complex, Khandagiri, Bhubaneswar, Odisha
                </p>

                <p className="text-black mt-2">
                  Website:
                  <a
                    href="https://infinityspaceodisha.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-600 hover:underline"
                  >
                    https://infinityspaceodisha.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
