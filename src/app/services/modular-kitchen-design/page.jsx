import KitchenLayouts from "@/Components/Modularkitchen/KitchenLayouts";
import ModularKitchenAreas from "@/Components/Modularkitchen/ModularKitchenAreas";
import ModularKitchenCover from "@/Components/Modularkitchen/ModularKitchenCover";
import ModularKitchenCta from "@/Components/Modularkitchen/ModularKitchenCta";
import ModularKitchenFaq from "@/Components/Modularkitchen/ModularKitchenFaq";
import ModularKitchenHero from "@/Components/Modularkitchen/ModularkitchenHero";
import ModularKitchenPricing from "@/Components/Modularkitchen/ModularKitchenPricing";
import ModularKitchenProcess from "@/Components/Modularkitchen/ModularKitchenProcess";
import ModularKitchenTestimonial from "@/Components/Modularkitchen/ModularKitchenTestimonial";
import ModularKitchenVastu from "@/Components/Modularkitchen/ModularKitchenVastu ";
import ModularKitchenWhyUs from "@/Components/Modularkitchen/ModularKitchenWhyUs";
import ModularKitchenContent from "@/Components/Modularkitchen/Modulatkitchencontent";
import React from "react";

export const metadata = {
  title:
    "Modular Kitchen Design in Bhubaneswar | Custom Layouts, Premium Materials & Free 3D Design | Infinity Space",
  description:
    "Get modular kitchen design in Bhubaneswar with smart layouts, premium materials, transparent pricing, free 3D designs, and 15–25 day delivery with Infinity Space.",
  keywords:
    "modular kitchen design in bhubaneswar, modular kitchen design services in bhubaneswar, home interior design in Bhubaneswar, modular kitchen design cost in bhubaneswar, cost of modular kitchen design in bhubaneswar, modular kitchen interior design in bhubaneswar, residential interior design Bhubaneswar, interior design company Bhubaneswar, best interior designers Bhubaneswar, home interior designers Bhubaneswar, 1BHK interior design Bhubaneswar, 2BHK interior design Bhubaneswar, 3BHK interior design Bhubaneswar, villa interior design Bhubaneswar, turnkey interior solutions Bhubaneswar, modular kitchen designers Bhubaneswar, customized furniture Bhubaneswar, wardrobe design Bhubaneswar, TV unit design Bhubaneswar, false ceiling design Bhubaneswar, bathroom interior design Bhubaneswar, pooja room design Bhubaneswar, foyer design Bhubaneswar, living room interior design Bhubaneswar, bedroom interior design Bhubaneswar, 3D interior design Bhubaneswar, space planning interior design, luxury interior designers Bhubaneswar, interior design services Bhubaneswar, interior designers in Cuttack, interior designers in Khordha, modern interior design Bhubaneswar",
  openGraph: {
    title:
      "Modular Kitchen Design in Bhubaneswar | Custom Layouts, Premium Materials & Free 3D Design | Infinity Space",
    description:
      "Get modular kitchen design in Bhubaneswar with smart layouts, premium materials, transparent pricing, free 3D designs, and 15–25 day delivery with Infinity Space.",
    type: "website",
    url: "https://infinityspaceodisha.com/services/modular-kitchen-design",
    siteName: "Infinity Space Odisha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Design in Bhubaneswar | Infinity Space",
    description:
      "Get modular kitchen design in Bhubaneswar with smart layouts, premium materials, transparent pricing, free 3D designs, and 15–25 day delivery with Infinity Space.",
  },
  alternates: {
    canonical:
      "https://infinityspaceodisha.com/services/modular-kitchen-design",
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
        name: "What is the cost of modular kitchen design in Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modular kitchen design in Bhubaneswar costs between Rs. 80,000 for a basic straight kitchen and Rs. 8 Lakhs or more for a full island kitchen with premium finishes. An L-shaped kitchen, the most common format in Bhubaneswar apartments, typically costs Rs. 1.20 to Rs. 3.20 Lakhs depending on shutter finish, hardware brand, and countertop choice. Infinity Space provides free, fully itemised quotations for every project.",
        },
      },
      {
        "@type": "Question",
        name: "Which plywood should be used for a modular kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BWP Grade 710 boiling-waterproof plywood is the correct substrate for a modular kitchen. MR-grade boards can absorb moisture over time and may delaminate or warp, particularly in kitchens exposed to regular steam and humidity. BWP Grade 710 provides moisture resistance and termite treatment. Infinity Space specifies the plywood grade in writing on every quotation so clients can verify the material independently.",
        },
      },
      {
        "@type": "Question",
        name: "How long does modular kitchen installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard modular kitchen project takes 15 to 25 days from design approval to handover. Cabinet fabrication is done at the facility and runs in parallel with on-site civil and electrical work. Infinity Space provides a written milestone timeline before payment and follows it throughout the project.",
        },
      },
      {
        "@type": "Question",
        name: "Which kitchen layout works best for an apartment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The L-shaped layout is a practical choice for standard 2BHK and 3BHK apartments because it creates a natural cooking work triangle, works well in many standard kitchen dimensions, and keeps the space feeling open. Parallel or galley kitchens are better suited to narrow spaces, while U-shaped layouts work well in larger kitchens. Infinity Space recommends the appropriate layout after a free on-site measurement.",
        },
      },
      {
        "@type": "Question",
        name: "Does Infinity Space offer Vastu-compliant kitchen design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Infinity Space can integrate Vastu principles into kitchen planning, including southeast kitchen placement, east-facing hob orientation, north or northeast sink positioning, and heavier storage on the south and west walls. These guidelines are incorporated into a functional modern design without compromising workflow or aesthetics.",
        },
      },
    ],
  };

  // Service + LocalBusiness Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Modular Kitchen Design in Bhubaneswar",
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
      "Get modular kitchen design in Bhubaneswar with smart layouts, premium materials, transparent pricing, free 3D designs, and 15–25 day delivery with Infinity Space.",
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
        name: "Modular Kitchen Design in Bhubaneswar",
        item: "https://infinityspaceodisha.com/services/modular-kitchen-design",
      },
    ],
  };

  // AggregateRating Schema
  // const aggregateRatingSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "AggregateRating",
  //   itemReviewed: {
  //     "@type": "Service",
  //     name: "Modular Kitchen Design in Bhubaneswar",
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
        <ModularKitchenHero />
        <ModularKitchenContent />
        <KitchenLayouts />
        <ModularKitchenCover />
        <ModularKitchenPricing />
        <ModularKitchenProcess />
        <ModularKitchenWhyUs />
        {/* <ModularKitchenVastu /> */}
        <ModularKitchenAreas />
        <ModularKitchenTestimonial />
        <ModularKitchenCta />
        <ModularKitchenFaq />
      </main>
    </>
  );
}
