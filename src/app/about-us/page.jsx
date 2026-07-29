import AboutContentSection from "@/Components/Aboutus/AboutContent";
import AboutFAQ from "@/Components/Aboutus/AboutFaq";
import AboutHeroSection from "@/Components/Aboutus/AboutHero";
import WhyChooseInfinitySpace from "@/Components/Aboutus/AttractiveCards";
import AboutCTA from "@/Components/Aboutus/Cta";
import ServicesShowcase from "@/Components/Aboutus/HoverCard";
import React from "react";

export const metadata = {
  title:
    "About Us Infinity Space | Trusted Interior Design Company in Bhubaneswar",
  description:
    "Learn about Infinity Space, trusted interior design company in Bhubaneswar specializing in residential interiors, modular kitchens, office interiors, customized furniture, and turnkey interior solutions across Bhubaneswar, Cuttack, and Khordha.",
  keywords:
    "about us Infinity Space, Infinity Space interior design Bhubaneswar, interior design company Bhubaneswar, best interior designers Bhubaneswar, home interior designers Bhubaneswar, commercial interior designers Bhubaneswar, modular kitchen designers Bhubaneswar, turnkey interior solutions Bhubaneswar, customized furniture Bhubaneswar, wardrobe design Bhubaneswar, TV unit design Bhubaneswar, false ceiling design Bhubaneswar, office interior design Bhubaneswar, residential interior design Odisha, interior designers in Cuttack, interior designers in Khordha, modern interior design Bhubaneswar, 3D interior design Bhubaneswar, space planning interior design, luxury interior designers Bhubaneswar, interior design services Bhubaneswar",
  openGraph: {
    title:
      "About Us Infinity Space | Trusted Interior Design Company in Bhubaneswar",
    type: "website",
    url: "https://infinityspaceodisha.com/about-us",
  },
  alternates: {
    canonical: "https://infinityspaceodisha.com/about-us",
  },
};

export default function AboutPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
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

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="overflow-hidden text-black">
        <div>
          <AboutHeroSection />
          <AboutContentSection />
          <WhyChooseInfinitySpace />
          <ServicesShowcase />
          <AboutCTA />
          <AboutFAQ />
        </div>
      </main>
    </>
  );
}
