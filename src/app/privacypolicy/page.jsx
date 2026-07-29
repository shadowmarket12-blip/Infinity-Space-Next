// src/app/privacypolicy/page.jsx

import React from "react";

export const metadata = {
  title: "Privacy Policy - Infinity Space",
  description: "Privacy Policy for Infinity Space interior design services",
};

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Privacy Policy
            </h1>
            <p className="mt-4 text-black text-sm md:text-base">
              Infinity Space Privacy Policy
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-black leading-8">
            <div>
              <p>
                Infinity Space respects your privacy and is committed to
                protecting any personal information shared through our website{" "}
                <a
                  href="https://infinityspaceodisha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://infinityspaceodisha.com
                </a>
                .
              </p>

              <p className="mt-4">
                This Privacy Policy explains how information may be collected,
                used, and protected when users visit our website or contact us
                for interior design services.
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                1. Information We May Collect
              </h2>

              <p className="mb-4">
                We may collect limited personal information when users:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>submit contact forms</li>
                <li>request consultations</li>
                <li>inquire about services</li>
                <li>communicate through email or phone</li>
                <li>interact with the website</li>
              </ul>

              <p className="mt-6 mb-4">
                The information collected may include:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>name</li>
                <li>phone number</li>
                <li>email address</li>
                <li>project requirements</li>
                <li>location details</li>
              </ul>

              <p className="mt-6">
                We do not collect sensitive financial information through the
                website.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                2. How We Use Information
              </h2>

              <p className="mb-4">
                Information shared with Infinity Space may be used to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>respond to inquiries</li>
                <li>provide consultation support</li>
                <li>communicate regarding interior design services</li>
                <li>improve website experience</li>
                <li>enhance customer support</li>
                <li>share project-related information when requested</li>
              </ul>

              <p className="mt-6">
                We use information only for legitimate business communication
                purposes.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                3. Information Protection
              </h2>

              <p>
                Infinity Space takes reasonable measures to protect user
                information from unauthorized access, misuse, disclosure, or
                alteration.
              </p>

              <p className="mt-4">
                While we aim to maintain secure systems, no online platform can
                guarantee absolute security.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                4. Cookies & Website Analytics
              </h2>

              <p className="mb-4">
                Our website may use cookies or analytics tools to understand
                visitor behavior, improve website performance, and enhance user
                experience.
              </p>

              <p className="mb-4">Cookies help analyze:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>page visits</li>
                <li>browsing behavior</li>
                <li>website traffic</li>
                <li>device information</li>
              </ul>

              <p className="mt-6">
                Users may choose to disable cookies through browser settings if
                preferred.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                5. Third-Party Services
              </h2>

              <p className="mb-4">
                We may use third-party tools or platforms including:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>website analytics services</li>
                <li>map integrations</li>
                <li>social media links</li>
                <li>contact integrations</li>
              </ul>

              <p className="mt-6">
                These third-party platforms may have their own privacy policies
                and data practices.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                6. Sharing of Information
              </h2>

              <p className="mb-4">
                Infinity Space does not sell, trade, or rent personal
                information to third parties.
              </p>

              <p className="mb-4">Information may only be shared when:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>required by law</li>
                <li>necessary for service-related communication</li>
                <li>required for technical website operations</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                7. External Links
              </h2>

              <p>
                Our website may contain links to external websites or social
                platforms. Infinity Space is not responsible for the privacy
                practices or content of third-party websites.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                8. User Rights
              </h2>

              <p className="mb-4">Users may request:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>access to shared information</li>
                <li>correction of inaccurate details</li>
                <li>removal of submitted information where applicable</li>
              </ul>

              <p className="mt-6">
                Requests may be made through our contact details.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                9. Updates to Privacy Policy
              </h2>

              <p>
                Infinity Space reserves the right to update this Privacy Policy
                periodically. Updated versions will be reflected on this page.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
                10. Contact Information
              </h2>

              <p className="font-medium">
                For privacy-related questions or requests, users may contact:
              </p>

              <div className="mt-4 rounded-xl border border-gray-200 p-5 bg-gray-50">
                <p className="font-semibold text-gray-900">Infinity Space</p>
                <p>Barabhuja Market Complex, Khandagiri, Bhubaneswar, Odisha</p>
                <p className="mt-2">
                  Website:{" "}
                  <a
                    href="https://infinityspaceodisha.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
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

export default PrivacyPolicy;
