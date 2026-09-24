import BedroomContent from "@/Components/BedroomInterior/BedroomContent";
import BedroomCta from "@/Components/BedroomInterior/BedroomCta ";
import BedroomFaq from "@/Components/BedroomInterior/BedroomFaq";
import BedroomFinish from "@/Components/BedroomInterior/BedroomFinish";
import BedroomInteriorHero from "@/Components/BedroomInterior/BedroomInteriorHero";
import BedroomContentSections from "@/Components/BedroomInterior/BedRoomnew";
import BedroomInteriorSections from "@/Components/BedroomInterior/BedroomSections";
import React from "react";

export const metadata = {
  title: "Bedroom Interior Design in Bhubaneswar | Infinity Space",
  description:
    "Get customised bedroom interior design in Bhubaneswar with Infinity Space. Explore smart storage, wardrobes, furniture, lighting and personalised bedroom interior solutions.",
  keywords:
    "bedroom interior design in bhubaneswar, bedroom interior design cost in bhubaneswar, best bedroom interior solutions in bhubaneswar, bedroom storage solutions, home interior solutions provider in bhubaneswar",
  openGraph: {
    title: "Bedroom Interior Design in Bhubaneswar | Infinity Space",
    description:
      "Get customised bedroom interior design in Bhubaneswar with Infinity Space. Explore smart storage, wardrobes, furniture, lighting and personalised bedroom interior solutions.",
    type: "website",
    url: "https://infinityspaceodisha.com/services/bedroom-interior-design",
    siteName: "Infinity Space Odisha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedroom Interior Design in Bhubaneswar | Infinity Space",
    description:
      "Get customised bedroom interior design in Bhubaneswar with Infinity Space. Explore smart storage, wardrobes, furniture, lighting and personalised bedroom interior solutions.",
  },
  alternates: {
    canonical:
      "https://infinityspaceodisha.com/services/bedroom-interior-design",
  },
};

export default function BedroomInterior() {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the cost of bedroom interior design in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost depends on the bedroom size, wardrobe, bed, dressing unit, materials, finishes, lighting and other requirements. At Infinity Space, we understand the scope first and then prepare a quotation based on your specific requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How can Infinity Space make a small bedroom more functional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We look at the available floor and wall space and explore solutions such as sliding wardrobes, vertical storage, storage beds, built-in furniture and customised layouts to make the room more practical.",
        },
      },
      {
        "@type": "Question",
        name: "What bedroom storage solutions do you provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can plan wardrobes, loft storage, sliding and hinged wardrobes, hydraulic storage beds, bedside storage, dressing units and customised internal storage based on the available space and your requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design a complete master bedroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can plan the complete master bedroom, including the bed, wardrobe, dressing unit, storage, lighting, ceiling, wall treatments and other furniture according to the room and your preferences.",
        },
      },
      {
        "@type": "Question",
        name: "Can you design bedroom interiors according to a fixed budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can discuss your budget at the beginning and prioritise the elements that matter most to you. This allows the bedroom design to be developed around your actual requirements rather than adding unnecessary features.",
        },
      },
      {
        "@type": "Question",
        name: "Which home interior solutions provider in Bhubaneswar can help with bedroom interiors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Infinity Space provides customised home interior solutions in Bhubaneswar, including bedroom design, wardrobes, storage solutions, beds, dressing units, lighting, furniture and other interior requirements.",
        },
      },
    ],
  };

  // Service + LocalBusiness Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bedroom Interior Design in Bhubaneswar",
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
      "Get customised bedroom interior design in Bhubaneswar with Infinity Space. Explore smart storage, wardrobes, furniture, lighting and personalised bedroom interior solutions.",
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
        name: "Bedroom Interior Design in Bhubaneswar",
        item: "https://infinityspaceodisha.com/services/bedroom-interior-design",
      },
    ],
  };

  // AggregateRating Schema
  // const aggregateRatingSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "AggregateRating",
  //   itemReviewed: {
  //     "@type": "Service",
  //     name: "Bedroom Interior Design in Bhubaneswar",
  //     provider: {
  //       "@type": "LocalBusiness",
  //       name: "Infinity Space Odisha",
  //     },
  //   },
  //   ratingValue: "4.8",
  //   bestRating: "5",
  //   ratingCount: "200",
  // };

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
        <BedroomInteriorHero />
        <BedroomContent />
        <BedroomInteriorSections />
        <BedroomContentSections />
        <BedroomFinish />
        <BedroomCta />
        <BedroomFaq />
      </main>
    </>
  );
}
