import HomeBanner from "@/Components/HomePage/Homebanner";
import React from "react";
import InteriorExpertiseSection from "@/Components/HomePage/InteriorExpertise";
import TrustMetricsSection from "@/Components/HomePage/TrustMetrics";
import ElegantHome from "@/Components/HomePage/ElegantHome";
import InteriorServicesSection from "@/Components/HomePage/InteriorServices";
import WhyChooseUsSection from "@/Components/HomePage/WhyChooseUsCircle";
import CompanyOverview from "@/Components/HomePage/CompanyOverview";
import ProcessDesign from "@/Components/HomePage/ProcessDesign";
import PromoVideoSection from "@/Components/HomePage/PromoVideo";
import TestimonialsSection from "@/Components/HomePage/Testimonial";
import HomeFAQ from "@/Components/HomePage/HomeFaq";
import HomeCTA from "@/Components/HomePage/HomeCTA";

export const metadata = {
  title: "Best Interior Designers in Bhubaneswar | Infinity Space",
  description:
    "Looking for the best interior designers in Bhubaneswar? Infinity Space specializes in modern home interiors, modular kitchens, office interiors, customized furniture, false ceiling concepts, and turnkey interior solutions across Bhubaneswar, Cuttack, and Khordha.",
  keywords:
    "interior designers in Bhubaneswar, best interior designers Bhubaneswar, interior design company Bhubaneswar, home interior design Bhubaneswar, modular kitchen Bhubaneswar, office interior designers Bhubaneswar, residential interior design Odisha, commercial interior design Bhubaneswar, wardrobe design Bhubaneswar, TV unit design Bhubaneswar, false ceiling design Bhubaneswar, turnkey interior solutions Bhubaneswar, customized furniture Bhubaneswar, luxury home interiors Bhubaneswar, interior designers in Cuttack, interior designers in Khordha, modern interior design Bhubaneswar, space planning interior design, 3D interior design Bhubaneswar, Infinity Space interior design",
  openGraph: {
    title: "Best Interior Designers in Bhubaneswar | Infinity Space",
    type: "website",
    url: "https://infinityspaceodisha.com/",
    description:
      "Looking for the best interior designers in Bhubaneswar? Infinity Space specializes in modern home interiors, modular kitchens, office interiors, customized furniture, false ceiling concepts, and turnkey interior solutions.",
    siteName: "Infinity Space",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://infinityspaceodisha.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// FAQ Schema for Homepage
const homeFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why choose Infinity Space for interior design in Bhubaneswar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We create modern, functional, and customized interiors tailored to your lifestyle, space requirements, and design preferences with complete planning and execution support.",
      },
    },
    {
      "@type": "Question",
      name: "What interior design services do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services include residential interiors, modular kitchens, office interiors, wardrobe design, TV units, false ceiling concepts, customized furniture, and turnkey interior solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide modular kitchen design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we design modern modular kitchens with smart layouts, optimized storage, premium finishes, and functional space planning for contemporary homes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide office interior design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we design office spaces, workstations, retail interiors, clinics, showrooms, and commercial spaces focused on functionality, branding, and productivity.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of interior design in Bhubaneswar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interior design costs depend on space size, material selection, customization requirements, and project scope. Pricing varies based on design preferences and execution needs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer turnkey interior solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, complete turnkey solutions are available including planning, 3D design, civil work, electrical work, carpentry, furniture installation, lighting, and final execution.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an interior project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary depending on the size, customization, and scope of work. Most projects are completed within a planned timeline after design approval.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide customized wardrobe and TV unit designs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, customized wardrobes, TV units, modular storage, and furniture concepts are designed according to your space and interior theme.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide 3D interior design visualization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, detailed 3D concepts and layout plans are provided before execution to help visualize the final interior design.",
      },
    },
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Infinity Space",
  url: "https://infinityspaceodisha.com",
  description:
    "Premium interior design company in Bhubaneswar specializing in residential, commercial, and turnkey interior solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "FA 1/63, Barabhuja Market Complex, Khandagiri",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    postalCode: "751030",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7077797720",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.facebook.com/people/Infinity-Space/61587564103214/",
    "https://www.instagram.com/infinityspace.co/",
    "https://x.com/InfinitySpaceCo",
    "https://www.youtube.com/@InfinitySpaceOfficial",
    "https://in.pinterest.com/infinityspaceodisha/",
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFAQSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main className="overflow-hidden text-black">
        <HomeBanner />
        <InteriorExpertiseSection />
        <TrustMetricsSection />
        <ElegantHome />
        <InteriorServicesSection />
        <WhyChooseUsSection />
        <CompanyOverview />
        <ProcessDesign />
        <PromoVideoSection />
        <TestimonialsSection />
        <HomeFAQ />
        <HomeCTA />
      </main>
    </>
  );
}
