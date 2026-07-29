import ProjectsHeroSection from "@/Components/Projects/ProjectBanner";
import React from "react";

export const metadata = {
  title: "Our Projects | Infinity Space",
  description:
    "Explore our portfolio of interior design projects and transformations.",
};

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden text-black">
      <ProjectsHeroSection />
    </main>
  );
}
