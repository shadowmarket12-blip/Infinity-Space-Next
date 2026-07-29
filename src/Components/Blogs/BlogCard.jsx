import React from "react";
import Link from "next/link";
import Image from "next/image";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Function to create URL-friendly string from title
function createSlugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function BlogCard({ blog, size = "default" }) {
  const authorName = blog.author?.name || "Infinity Space Odisha";
  const authorRole = blog.author?.role || "Editorial Team";

  // Use slug if available, otherwise create from title
  const blogSlug = blog.slug || createSlugFromTitle(blog.title);

  return (
    <Link href={`/blogs/${blogSlug}`} className="group block">
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E7E2D8] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2B3A67]/30 hover:shadow-[0_25px_50px_-20px_rgba(20,24,27,0.25)]">
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#2B3A67] shadow-sm backdrop-blur-sm">
            {blog.category}
          </span>

          <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/95 text-[#14181B] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <span className="text-[11px] uppercase tracking-wider text-[#B98A1D]">
            {formatDate(blog.date)} · {blog.readTime} min read
          </span>

          <h3 className="mt-2 text-lg sm:text-xl font-semibold leading-snug text-[#14181B] transition-colors group-hover:text-[#2B3A67]">
            {blog.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#5B6169] line-clamp-2">
            {blog.excerpt}
          </p>

          <div className="mt-auto flex items-center gap-3 pt-5 border-t border-[#EFEBE2] mt-5">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#14181B]">
                {authorName}
              </p>
              <p className="truncate text-xs text-[#8A8F97]">{authorRole}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
