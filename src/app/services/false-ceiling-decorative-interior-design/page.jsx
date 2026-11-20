import FalseCeilingContent from "@/Components/Falsecelling/FalseCeilingContent";
import FalseCeilingCost from "@/Components/Falsecelling/FalseCeilingCost";
import FalseCeilingCta from "@/Components/Falsecelling/FalseCeilingCta";
import FalseCeilingFaq from "@/Components/Falsecelling/FalseCeilingFaq";
import FalseCeilingHero from "@/Components/Falsecelling/FalseCeilingHero";
import FalseCeilingProcess from "@/Components/Falsecelling/FalseCeilingProcess";
import FalseCeilingWhy from "@/Components/Falsecelling/FalseCeilingWhy";
import LightingSection from "@/Components/Falsecelling/LightingSection";
import MaterialsSection from "@/Components/Falsecelling/MaterialsSection";
import PlannedAroundSpace from "@/Components/Falsecelling/PlannedAroundSpace";
import RoomIdeas from "@/Components/Falsecelling/RoomIdeas";
import ServiceScope from "@/Components/Falsecelling/ServiceScope";
import TrendingDesigns from "@/Components/Falsecelling/TrendingDesigns";
import React from "react";

export const metadata = {
  title:
    "False Ceiling Design Service Provider in Bhubaneswar | Infinity Space",
  description:
    "Explore customised false ceiling designs in Bhubaneswar with Infinity Space. Get practical ceiling layouts, modern finishes and integrated lighting solutions.",
  keywords:
    "false ceiling design service provider in bhubaneswar, best false ceiling interior designer in bhubaneswar, false ceiling design ideas in bhubaneswar, trending false ceiling designs for homes in bhubaneswar",
  openGraph: {
    title:
      "False Ceiling Design Service Provider in Bhubaneswar | Infinity Space",
    description:
      "Explore customised false ceiling designs in Bhubaneswar with Infinity Space. Get practical ceiling layouts, modern finishes and integrated lighting solutions.",
    type: "website",
    url: "https://infinityspaceodisha.com/services/false-ceiling-decorative-interior-design",
    siteName: "Infinity Space Odisha",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "False Ceiling Design Service Provider in Bhubaneswar | Infinity Space",
    description:
      "Explore customised false ceiling designs in Bhubaneswar with Infinity Space. Get practical ceiling layouts, modern finishes and integrated lighting solutions.",
  },
  alternates: {
    canonical:
      "https://infinityspaceodisha.com/services/false-ceiling-decorative-interior-design",
  },
};

export default function FalseCeilingDecorativeInteriorDesign() {
  // Service + LocalBusiness Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "False Ceiling Design Service in Bhubaneswar",
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
      "Explore customised false ceiling designs in Bhubaneswar with Infinity Space. Get practical ceiling layouts, modern finishes and integrated lighting solutions.",
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
        name: "False Ceiling Design Service in Bhubaneswar",
        item: "https://infinityspaceodisha.com/services/false-ceiling-decorative-interior-design",
      },
    ],
  };

  return (
    <>
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

      <main className="overflow-hidden text-black">
        <FalseCeilingHero />
        <FalseCeilingContent />
        <PlannedAroundSpace />
        <RoomIdeas />
        <TrendingDesigns />
        <MaterialsSection />
        <LightingSection />
        <ServiceScope />
        <FalseCeilingProcess />
        <FalseCeilingCost />
        <FalseCeilingWhy />
        <FalseCeilingCta />
        <FalseCeilingFaq />
      </main>
    </>
  );
}
