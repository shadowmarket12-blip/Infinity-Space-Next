import BlogHeroSection from "@/Components/Blogs/BlogHeroSection";
import BlogPageMain from "@/Components/Blogs/BlogPageMain";
import React from "react";

export default function BlogPage() {
  return (
    <div>
      <main className="overflow-hidden">
        <BlogHeroSection />
        <BlogPageMain />
      </main>
    </div>
  );
}
