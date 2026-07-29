import IntroContextSection from "@/Components/ResidentialInterior/IntroContext";
import ProcessPricingSection from "@/Components/ResidentialInterior/ProcessPricingSection";
import ResidentialFaq from "@/Components/ResidentialInterior/ResidentialFaq";
import ResidentialHero from "@/Components/ResidentialInterior/ResidentialHero";
import ServicesSection from "@/Components/ResidentialInterior/ResiServices";
import ServiceAreasTestimonials from "@/Components/ResidentialInterior/ServiceAreasTestimonials";
import TrustSection from "@/Components/ResidentialInterior/TrustResidential";
import WhyChooseUsDesignStyles from "@/Components/ResidentialInterior/WhyChooseUs";
import React from "react";

export const metadata = {
  title:
    "Home Interior Design in Bhubaneswar | Residential Interior Design Services | Infinity Space Odisha",
  description:
    "Transform your home with Infinity Space Odisha — the trusted interior design company in Bhubaneswar. Expert residential interior design for 1BHK, 2BHK, 3BHK & villas. Free 3D design + turnkey delivery. Book a FREE consultation today!",
  keywords:
    "home interior design in Bhubaneswar, residential interior design Bhubaneswar, interior design company Bhubaneswar, best interior designers Bhubaneswar, home interior designers Bhubaneswar, 1BHK interior design Bhubaneswar, 2BHK interior design Bhubaneswar, 3BHK interior design Bhubaneswar, villa interior design Bhubaneswar, turnkey interior solutions Bhubaneswar, modular kitchen designers Bhubaneswar, customized furniture Bhubaneswar, wardrobe design Bhubaneswar, TV unit design Bhubaneswar, false ceiling design Bhubaneswar, bathroom interior design Bhubaneswar, pooja room design Bhubaneswar, foyer design Bhubaneswar, living room interior design Bhubaneswar, bedroom interior design Bhubaneswar, 3D interior design Bhubaneswar, space planning interior design, luxury interior designers Bhubaneswar, interior design services Bhubaneswar, interior designers in Cuttack, interior designers in Khordha, modern interior design Bhubaneswar",
  openGraph: {
    title:
      "Home Interior Design in Bhubaneswar | Residential Interior Design Services | Infinity Space Odisha",
    description:
      "Transform your home with Infinity Space Odisha — the trusted interior design company in Bhubaneswar. Expert residential interior design for 1BHK, 2BHK, 3BHK & villas. Free 3D design + turnkey delivery. Book a FREE consultation today!",
    type: "website",
    url: "https://infinityspaceodisha.com/services/residential-interior-design",
    siteName: "Infinity Space Odisha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Interior Design in Bhubaneswar | Infinity Space Odisha",
    description:
      "Transform your home with Infinity Space Odisha — the trusted interior design company in Bhubaneswar. Expert residential interior design for 1BHK, 2BHK, 3BHK & villas.",
  },
  alternates: {
    canonical:
      "https://infinityspaceodisha.com/services/residential-interior-design",
  },
};

export default function ResidentialInterior() {
  // FAQ Schema for the new FAQ content
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the cost of home interior design in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Home interior design in Bhubaneswar costs between Rs. 1.80 Lakhs for a compact 1BHK and Rs. 18 Lakhs or more for a full 3BHK with premium finishes. A 2BHK typically ranges from Rs. 3.50 to Rs. 10 Lakhs depending on scope and materials. Infinity Space Odisha provides free, itemised quotations with zero hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best interior design company in Bhubaneswar for home interiors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best interior design company in Bhubaneswar combines local expertise, design quality, transparent pricing, and reliable execution. Infinity Space Odisha offers full-home residential interior design across all localities in Bhubaneswar — backed by free 3D visualisation, a 5-year workmanship warranty, and a track record of 200+ completed projects across Odisha.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a home interior design project take in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A single room such as a modular kitchen or bedroom takes 15–30 days. A 2BHK full-home interior typically takes 35–50 days and a 3BHK takes 55–75 days. Infinity Space Odisha provides a milestone-based project timeline at the quotation stage and adheres to it throughout execution.",
        },
      },
      {
        "@type": "Question",
        name: "Do interior designers in Bhubaneswar include Vastu Shastra in home design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Infinity Space Odisha integrates Vastu Shastra from the earliest planning stage — kitchen in the southeast, master bedroom in the southwest, pooja room in the northeast. These placements are built naturally into modern floor plans without compromising the overall design aesthetic or functional layout of your home.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see my home design in 3D before work begins?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Infinity Space Odisha provides free, detailed 3D visualisations covering every room before any material is ordered or work begins. You review, suggest changes, and approve the design digitally at multiple angles. Work only starts once you are completely satisfied — eliminating surprises and ensuring the final result matches your vision exactly.",
        },
      },
      {
        "@type": "Question",
        name: "What materials are best for home interiors in Bhubaneswar's climate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bhubaneswar's heat and monsoon humidity require marine-grade BWP/BWR plywood, heat-resistant laminates, waterproof edge-banding, and anti-termite treatment on all woodwork. For hardware, brands like Hettich, Hafele, and Blum are rated for high-humidity environments. Infinity Space Odisha specifies all materials with Bhubaneswar's tropical climate in mind as a standard practice.",
        },
      },
      {
        "@type": "Question",
        name: "How do I choose the right interior designers in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When choosing interior designers in Bhubaneswar, look for experience, project quality, transparent communication, space planning expertise, material quality, and execution capability. Reviewing completed projects and understanding the design process can also help in making the right decision.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Infinity Space different from other interior designers in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our approach focuses on personalized design, practical functionality, organized execution, and thoughtful space planning. Every project is designed according to the client's lifestyle, preferences, and usability requirements instead of following repetitive concepts.",
        },
      },
      {
        "@type": "Question",
        name: "Do interior designers help with space planning for small homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, professional interior designers help optimize compact spaces through smart layouts, storage planning, multifunctional furniture, and efficient space utilization to improve comfort and usability.",
        },
      },
      {
        "@type": "Question",
        name: "Why is 3D interior design important before execution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3D interior visualization helps clients understand layouts, colors, furniture placement, lighting concepts, and overall design flow before execution begins, making the planning process clearer and more efficient.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a complete interior design project usually take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines depend on space size, customization level, material selection, and execution scope. Proper planning and organized workflow help ensure smooth and timely project completion.",
        },
      },
      {
        "@type": "Question",
        name: "What should I consider before starting a home interior project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Before starting an interior project, it is important to consider space requirements, lifestyle needs, storage planning, budget, material preferences, lighting, and long-term functionality.",
        },
      },
      {
        "@type": "Question",
        name: "Do interior designers in Bhubaneswar provide turnkey solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many professional interior designers offer turnkey interior solutions that include planning, 3D design, civil work, carpentry, electrical work, furniture installation, and final execution under one roof.",
        },
      },
      {
        "@type": "Question",
        name: "What are the latest interior design trends for modern homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern interior trends focus on minimal layouts, smart storage, balanced lighting, neutral color palettes, modular furniture, textured finishes, and space-efficient design concepts that improve both aesthetics and functionality.",
        },
      },
      {
        "@type": "Question",
        name: "Is modular furniture a good option for modern homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, modular furniture is highly preferred for modern homes because it improves space utilization, offers better organization, and provides flexibility in design and storage planning.",
        },
      },
      {
        "@type": "Question",
        name: "How can good interior design improve everyday living?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Well-planned interiors improve comfort, organization, functionality, movement flow, lighting balance, storage efficiency, and overall living experience while creating a more visually comfortable environment.",
        },
      },
    ],
  };

  // Service + LocalBusiness Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Home Interior Design in Bhubaneswar",
    provider: {
      "@type": "LocalBusiness",
      name: "Infinity Space Odisha",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      telephone: "+91-7077797720",
      url: "https://infinityspaceodisha.com",
    },
    areaServed: {
      "@type": "City",
      name: "Bhubaneswar",
    },
    description:
      "Transform your home with Infinity Space Odisha — the trusted interior design company in Bhubaneswar. Expert residential interior design for 1BHK, 2BHK, 3BHK & villas. Free 3D design + turnkey delivery.",
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://infinityspaceodisha.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://infinityspaceodisha.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Home Interior Design in Bhubaneswar",
        item: "https://infinityspaceodisha.com/home-interior-design-in-bhubaneswar",
      },
    ],
  };

  // AggregateRating Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Service",
      name: "Home Interior Design in Bhubaneswar",
      provider: {
        "@type": "LocalBusiness",
        name: "Infinity Space Odisha",
      },
    },
    ratingValue: "4.8",
    bestRating: "5",
    ratingCount: "200",
  };

  return (
    <>
      {/* Schema Markup: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Schema Markup: Service + LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Schema Markup: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Schema Markup: AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />

      <main className="overflow-hidden text-black">
        <ResidentialHero />
        <TrustSection />
        <IntroContextSection />
        <ServicesSection />
        <ProcessPricingSection />
        <WhyChooseUsDesignStyles />
        <ServiceAreasTestimonials />
        <ResidentialFaq />
      </main>
    </>
  );
}
