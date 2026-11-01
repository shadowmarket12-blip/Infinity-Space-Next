import CommercialInterior from "@/Components/OfficeInterior/CommercialInterior";
import OfficeInteriorHero from "@/Components/OfficeInterior/OfficeInteriorHero";
import OfficeIntro from "@/Components/OfficeInterior/OfficeIntro";
import OfficeRoomContent from "@/Components/OfficeInterior/OfficeRoomContent";
import OfficeRoomFaq from "@/Components/OfficeInterior/OfficeRoomFaq";
import OfficeRoomPricing from "@/Components/OfficeInterior/OfficeRoomPricing";
import OfficeRoomProcess from "@/Components/OfficeInterior/OfficeRoomProcess";
import OfficeRoomServices from "@/Components/OfficeInterior/OfficeRoomServices";
import PlanYourOffice from "@/Components/OfficeInterior/PlanYourOffice";
import WhyInfinitySpace from "@/Components/OfficeInterior/WhyInfinitySpace";
import WorkplaceTypes from "@/Components/OfficeInterior/WorkplaceTypes";
import React from "react";

export const metadata = {
  title: "Office Interior Design in Bhubaneswar | Infinity Space",
  description:
    "Plan a functional, professional workspace with Infinity Space. Explore office interior design in Bhubaneswar, corporate layouts, commercial interiors and cost factors.",
  keywords: "office interior design in Bhubaneswar",
  openGraph: {
    title: "Office Interior Design in Bhubaneswar | Infinity Space",
    description:
      "Plan a functional, professional workspace with Infinity Space. Explore office interior design in Bhubaneswar, corporate layouts, commercial interiors and cost factors.",
    type: "website",
    url: "https://infinityspaceodisha.com/services/commercial-office-interior-design",
    siteName: "Infinity Space Odisha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Interior Design in Bhubaneswar | Infinity Space",
    description:
      "Plan a functional, professional workspace with Infinity Space. Explore office interior design in Bhubaneswar, corporate layouts, commercial interiors and cost factors.",
  },
  alternates: {
    canonical:
      "https://infinityspaceodisha.com/services/commercial-office-interior-design",
  },
};

export default function OfficeInteriorDesign() {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services are included in office interior design in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depending on the agreed scope, office interior design may include space planning, workstation layouts, reception areas, cabins, meeting rooms, storage, furniture, lighting concepts, finish selection and coordination of execution work. Confirm the inclusions and exclusions in the project estimate.",
        },
      },
      {
        "@type": "Question",
        name: "How much does office interior design cost in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost depends on office area, existing site conditions, furniture and workstation requirements, partitions, materials, lighting, electrical work, ceiling or civil work and the level of customisation. An itemised estimate based on the actual site and scope is more useful than a generic price.",
        },
      },
      {
        "@type": "Question",
        name: "Can Infinity Space design a small office?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Infinity Space provides office interior solutions tailored to project requirements. Share the office floor plan or approximate dimensions, team size, storage needs and budget range so the team can discuss a suitable scope.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in corporate office interior design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Corporate office design may cover reception and waiting areas, workstations, leadership cabins, meeting rooms, shared spaces, storage, lighting, finishes and brand-related details. The final scope depends on how the organisation operates and what the office needs to support.",
        },
      },
      {
        "@type": "Question",
        name: "How long does an office interior project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline depends on the size and condition of the office, design approvals, material availability, the amount of civil and electrical work, furniture production and site access. A realistic schedule should be agreed after the scope and dependencies are reviewed.",
        },
      },
      {
        "@type": "Question",
        name: "Can office interiors be completed without disrupting business operations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The feasibility depends on the site, the type of work and whether the office is occupied. Options may include phased work or scheduling certain activities outside normal working hours, where practical and agreed with the project team.",
        },
      },
      {
        "@type": "Question",
        name: "What should I prepare before contacting an office interior designer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prepare the floor plan or approximate area, expected team size, a list of required spaces, reference images if available, preferred completion date and budget range. Also identify special requirements such as data points, privacy, meeting technology or storage.",
        },
      },
    ],
  };

  // Service + LocalBusiness Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Office Interior Design in Bhubaneswar",
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
      "Plan a functional, professional workspace with Infinity Space. Explore office interior design in Bhubaneswar, corporate layouts, commercial interiors and cost factors.",
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
        name: "Office Interior Design in Bhubaneswar",
        item: "https://infinityspaceodisha.com/services/commercial-office-interior-design",
      },
    ],
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
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      /> */}

      <main className="overflow-hidden text-black">
        <OfficeInteriorHero />
        <OfficeRoomContent />
        <OfficeIntro />
        <OfficeRoomServices />
        <CommercialInterior />
        <OfficeRoomProcess />
        <OfficeRoomPricing />
        <WhyInfinitySpace />
        <WorkplaceTypes />
        <PlanYourOffice />
        <OfficeRoomFaq />
      </main>
    </>
  );
}
