import LivingRoomFaq from "@/Components/LivingRoomInterior/LivingFaq";
import LivingRoomAreas from "@/Components/LivingRoomInterior/LivingLocation";
import LivingProcess from "@/Components/LivingRoomInterior/LivingProcess";
import LivingRoomServiceCovers from "@/Components/LivingRoomInterior/LivingRommService";
import LivingRoomCta from "@/Components/LivingRoomInterior/LivingRoomCta";
import LivingRoomHero from "@/Components/LivingRoomInterior/LivingRoomHero";
import LivingPricing from "@/Components/LivingRoomInterior/LivingRoomPrice";
import LivingRoomTestimonials from "@/Components/LivingRoomInterior/LivingTestimonial";
import WhyLivingRoom from "@/Components/LivingRoomInterior/WhyLivingRoom";
import React from "react";

export const metadata = {
  title:
    "Living Room Interior Design in Bhubaneswar | TV Unit, Feature Wall & False Ceiling | Infinity Space",
  description:
    "Searching for the best interior designers in Bhubaneswar for your living room? Get custom TV units, feature walls, false ceilings, Vastu-compliant layouts, free 3D designs, and a FREE consultation with Infinity Space.",
  keywords:
    "home interior design in Bhubaneswar, residential interior design Bhubaneswar, interior design company Bhubaneswar, best interior designers Bhubaneswar, home interior designers Bhubaneswar, 1BHK interior design Bhubaneswar, 2BHK interior design Bhubaneswar, 3BHK interior design Bhubaneswar, villa interior design Bhubaneswar, turnkey interior solutions Bhubaneswar, modular kitchen designers Bhubaneswar, customized furniture Bhubaneswar, wardrobe design Bhubaneswar, TV unit design Bhubaneswar, false ceiling design Bhubaneswar, bathroom interior design Bhubaneswar, pooja room design Bhubaneswar, foyer design Bhubaneswar, living room interior design Bhubaneswar, bedroom interior design Bhubaneswar, 3D interior design Bhubaneswar, space planning interior design, luxury interior designers Bhubaneswar, interior design services Bhubaneswar, interior designers in Cuttack, interior designers in Khordha, modern interior design Bhubaneswar",
  openGraph: {
    title:
      "Living Room Interior Design in Bhubaneswar | TV Unit, Feature Wall & False Ceiling | Infinity Space",
    description:
      "Searching for the best interior designers in Bhubaneswar for your living room? Get custom TV units, feature walls, false ceilings, Vastu-compliant layouts, free 3D designs, and a FREE consultation with Infinity Space.",
    type: "website",
    url: "https://infinityspaceodisha.com/services/residential-interior-design",
    siteName: "Infinity Space Odisha",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Living Room Interior Design in Bhubaneswar | TV Unit, Feature Wall & False Ceiling | Infinity Space",
    description:
      "Searching for the best interior designers in Bhubaneswar for your living room? Get custom TV units, feature walls, false ceilings, Vastu-compliant layouts, free 3D designs, and a FREE consultation with Infinity Space.",
  },
  alternates: {
    canonical:
      "https://infinityspaceodisha.com/services/residential-interior-design",
  },
};

export default function LivingRoomInterior() {
  // FAQ Schema for the new FAQ content
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the cost of living room interior design in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Living room interior design in Bhubaneswar costs between Rs. 1.00 Lakh and Rs. 3.50 Lakhs for a full living and dining area. Individual elements start from Rs. 18,000 for a feature wall and Rs. 30,000 for a custom TV unit. Infinity Space provides free itemised quotations with zero hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a living room interior design project take in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard living room project in Bhubaneswar takes 20 to 35 days from design approval to handover. The consultation and 3D design phase takes a further 10 to 15 days. Larger scope or civil work may extend the timeline, agreed upfront before work begins.",
        },
      },
      {
        "@type": "Question",
        name: "Do living room designers in Bhubaneswar follow Vastu Shastra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Infinity Space integrates Vastu Shastra into every living room design in Bhubaneswar — main sofa facing north or east, TV wall on south or southwest, northeast corner kept unobstructed. These are incorporated naturally from the first floor plan draft.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see my living room design in 3D before work starts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Infinity Space provides free photorealistic 3D renders of your living room from multiple viewpoints before any fabrication or material ordering begins. This is included as standard on every project. You approve when fully satisfied before work starts.",
        },
      },
      {
        "@type": "Question",
        name: "What living room design styles are popular in Bhubaneswar in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most popular styles in Bhubaneswar in 2026 are Contemporary Indian Modern and Traditional Odia-Modern with Kalinga-inspired panel accents and earthy palettes. Warm Minimalist and Biophilic designs with cane furniture and indoor plants are also rising fast in Bhubaneswar's premium apartment segment.",
        },
      },
    ],
  };

  // Service + LocalBusiness Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Living Room Interior Design in Bhubaneswar",
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
      "Searching for the best interior designers in Bhubaneswar for your living room? Get custom TV units, feature walls, false ceilings, Vastu-compliant layouts, free 3D designs, and a FREE consultation with Infinity Space.",
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
        name: "Living Room Interior Design in Bhubaneswar",
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
      name: "Living Room Interior Design in Bhubaneswar",
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
        <LivingRoomHero />
        <LivingRoomServiceCovers />
        <WhyLivingRoom />
        <LivingPricing />
        <LivingProcess />
        <LivingRoomAreas />
        <LivingRoomTestimonials />
        <LivingRoomCta />
        <LivingRoomFaq />
      </main>
    </>
  );
}
