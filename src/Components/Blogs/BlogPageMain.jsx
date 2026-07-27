"use client";

import React, { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import blogsData, { categories } from "./BogData";

export default function BlogPageMain() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const featured = blogsData.filter((b) => b.featured);
  const rest = blogsData.filter((b) => !b.featured);

  const filtered = useMemo(() => {
    return rest.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;
      const matchesQuery =
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, rest]);

  return (
    <div>
      <div className="overflow-hidden bg-[#FAFAF9] text-[#000000]">
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B98A1D]">
                From the journal
              </p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                Latest stories
              </h2>
            </div>

            <div className="w-full sm:w-72">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-[#E7E2D8] bg-white px-5 py-2.5 text-sm text-[#14181B] placeholder:text-[#9A9FA6] focus:border-[#2B3A67] focus:outline-none focus:ring-2 focus:ring-[#2B3A67]/20"
              />
            </div>
          </div>

          <div className="mb-10 flex flex-wrap gap-2 sm:mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#2B3A67] text-white"
                    : "bg-white text-[#5B6169] border border-[#E7E2D8] hover:border-[#2B3A67] hover:text-[#2B3A67]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {activeCategory === "All" && query === "" && featured.length > 0 && (
            <div className="mb-14 grid grid-cols-1 gap-6 sm:mb-20 lg:grid-cols-2">
              {featured.map((blog) => (
                <BlogCard key={blog.id} blog={blog} size="large" />
              ))}
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#E7E2D8] py-20 text-center">
              <p className="text-xl text-[#14181B]">No articles match yet</p>
              <p className="mt-2 text-sm text-[#8A8F97]">
                Try a different category or search term.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
