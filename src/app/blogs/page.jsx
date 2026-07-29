import BlogHeroSection from "@/Components/Blogs/BlogHeroSection";
import BlogPageMain from "@/Components/Blogs/BlogPageMain";
import React from "react";

export const metadata = {
  title: "Interior Design Blogs in Bhubaneswar | Infinity Space",
  description:
    "Read expert interior design blogs by Infinity Space. Discover home design ideas, modular kitchen tips, bedroom inspiration, Vastu, trends, and décor guides in Bhubaneswar.",

  keywords: [
    "Interior Design Blogs",
    "Interior Designers in Bhubaneswar",
    "Home Interior Design in Bhubaneswar",
    "Best Interior Design Company in Bhubaneswar",
    "Modular Kitchen Design",
    "Bedroom Interior Design",
    "Living Room Interior Design",
    "Commercial Interior Design",
    "Interior Design Tips",
    "Home Decoration Ideas",
    "Interior Design Trends",
    "Vastu Interior Design",
    "Infinity Space",
    "Interior Design Odisha",
  ],

  alternates: {
    canonical: "https://infinityspaceodisha.com/blogs",
  },

  openGraph: {
    title: "Interior Design Blogs by Infinity Space",
    description:
      "Read expert interior design blogs by Infinity Space. Discover home design ideas, modular kitchen tips, bedroom inspiration, Vastu, trends, and décor guides in Bhubaneswar.",
    url: "https://infinityspaceodisha.com/blogs",
    siteName: "Infinity Space",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Interior Design Blogs by Infinity Space",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Interior Design Blogs by Infinity Space",
    description:
      "Read expert interior design blogs by Infinity Space. Discover home design ideas, modular kitchen tips, bedroom inspiration, Vastu, trends, and décor guides in Bhubaneswar.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function BlogPage() {
  return (
    <main className="overflow-hidden">
      <BlogHeroSection />
      <BlogPageMain />
    </main>
  );
}
