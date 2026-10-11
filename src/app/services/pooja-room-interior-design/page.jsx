import PoojaDesignCta from "@/Components/PoojaInterior/PoojaDesignCta";
import Poojainteriorcontent from "@/Components/PoojaInterior/Poojainteriorcontent ";
import PoojaInteriorFaq from "@/Components/PoojaInterior/PoojaInteriorFaq";
import PoojaInteriorHow from "@/Components/PoojaInterior/PoojaInteriorHow";
import PoojaInteriorPrice from "@/Components/PoojaInterior/PoojaInteriorPrice";
import PoojaInteriorProcess from "@/Components/PoojaInterior/PoojaInteriorProcess";
import Poojawhyus from "@/Components/PoojaInterior/Poojawhyus";
import PoojsInteriorHero from "@/Components/PoojaInterior/PoojsInteriorHero";
import React from "react";

export const metadata = {
  title: "Pooja Room Interior Services in Bhubaneswar | Infinity Space",
  description:
    "Create a peaceful, personalised pooja space in Bhubaneswar with Infinity Space. From custom mandirs and storage to lighting and Vastu planning, we design around your requirements.",
  keywords:
    "pooja room interior services in bhubaneswar, pooja room interior design in bhubaneswar, pooja room interior design cost in bhubaneswar",
  openGraph: {
    title: "Pooja Room Interior Services in Bhubaneswar | Infinity Space",
    description:
      "Create a peaceful, personalised pooja space in Bhubaneswar with Infinity Space. From custom mandirs and storage to lighting and Vastu planning, we design around your requirements.",
    type: "website",
    url: "https://infinityspaceodisha.com/services/pooja-room-interior-design",
    siteName: "Infinity Space Odisha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja Room Interior Services in Bhubaneswar | Infinity Space",
    description:
      "Create a peaceful, personalised pooja space in Bhubaneswar with Infinity Space. From custom mandirs and storage to lighting and Vastu planning, we design around your requirements.",
  },
  alternates: {
    canonical:
      "https://infinityspaceodisha.com/services/pooja-room-interior-design",
  },
};

export default function PoojaInteriorDesign() {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the cost of a pooja room interior design in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost depends on the size, type of pooja unit, materials, storage, lighting, wall treatment, partition and level of customisation. Infinity Space prepares the quotation after understanding the actual space and scope of work.",
        },
      },
      {
        "@type": "Question",
        name: "Can Infinity Space design a pooja room for a small apartment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can plan compact wall-mounted, built-in, corner or customised pooja units depending on the available space. Storage and proportions are planned carefully so the unit does not unnecessarily reduce usable floor area.",
        },
      },
      {
        "@type": "Question",
        name: "Can you include Vastu requirements in the pooja room design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If Vastu is important to you, discuss it with us during the initial planning stage. We can incorporate practical Vastu considerations where the home's layout and site conditions allow.",
        },
      },
      {
        "@type": "Question",
        name: "Can I choose between a traditional and modern pooja room design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can create traditional, contemporary or hybrid designs. The mandir structure, backdrop, materials, storage, lighting and decorative details can be customised to suit your home's overall style.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see the pooja room design before execution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We develop a clear design proposal before execution so you can review the layout, materials, colours and key details and make decisions before the work begins.",
        },
      },
    ],
  };

  // Service + LocalBusiness Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pooja Room Interior Services in Bhubaneswar",
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
      "Create a peaceful, personalised pooja space in Bhubaneswar with Infinity Space. From custom mandirs and storage to lighting and Vastu planning, we design around your requirements.",
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
        name: "Pooja Room Interior Services in Bhubaneswar",
        item: "https://infinityspaceodisha.com/services/pooja-room-interior-design",
      },
    ],
  };

  // AggregateRating Schema
  // const aggregateRatingSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "AggregateRating",
  //   itemReviewed: {
  //     "@type": "Service",
  //     name: "Pooja Room Interior Services in Bhubaneswar",
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
        <PoojsInteriorHero />
        <Poojainteriorcontent />
        <PoojaInteriorHow />
        <PoojaInteriorPrice />
        <PoojaInteriorProcess />
        <Poojawhyus />
        <PoojaDesignCta />
        <PoojaInteriorFaq />
      </main>
    </>
  );
}
