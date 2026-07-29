import AffordableInterior from "@/Components/Overview/AffordableInterior";
import MyService from "@/Components/Overview/MyService";
import ServiceContent from "@/Components/Overview/ServiceContent";
import Servicecta from "@/Components/Overview/ServiceCta";
import ServiceFAQ from "@/Components/Overview/Servicefaq";
import ServiceHeroSection from "@/Components/Overview/ServiceHeroSection";
import WhyChooseAffordable from "@/Components/Overview/WhyChooseAffordable";
import React from "react";

export const metadata = {
  title: "Affordable Interior Design Services in Bhubaneswar | Infinity Space",
  description:
    "Looking for affordable interior design services in Bhubaneswar? Infinity Space offers budget-friendly home interiors, modular kitchens, office interiors, customized furniture, and turnkey interior solutions with smart space planning and modern designs.",
  keywords:
    "affordable interior design Bhubaneswar, budget interior designers Bhubaneswar, low cost interior design Bhubaneswar, interior designers Bhubaneswar price, affordable home interiors Bhubaneswar, modular kitchen budget Bhubaneswar, office interior design cost Bhubaneswar, cheap interior designers Bhubaneswar, cost effective interior design Odisha, residential interior design Bhubaneswar, commercial interior design Bhubaneswar, turnkey interior solutions Bhubaneswar, customized furniture Bhubaneswar, wardrobe design Bhubaneswar, TV unit design Bhubaneswar, false ceiling design Bhubaneswar, modular kitchen designers Bhubaneswar, interior designers in Cuttack, interior designers in Khordha, Infinity Space interior design, budget home interiors Odisha, small home interior design Bhubaneswar, space saving interior design Bhubaneswar, modern affordable interiors Bhubaneswar",
  openGraph: {
    title:
      "Affordable Interior Design Services in Bhubaneswar | Infinity Space",
    type: "website",
  },
  alternates: {
    canonical: "https://infinityspaceodisha.com/services/overview",
  },
};

export default function ServicePage() {
  return (
    <>
      <div>
        <div className="overflow-hidden">
          <ServiceHeroSection />
          <ServiceContent />
          <AffordableInterior />
          <MyService />
          <WhyChooseAffordable />
          <ServiceFAQ />
          <Servicecta />
        </div>
      </div>
    </>
  );
}
