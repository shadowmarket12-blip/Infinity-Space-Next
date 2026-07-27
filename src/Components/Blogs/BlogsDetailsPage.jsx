// app/blogs/[slug]/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogCard from "./BlogCard";
import blogsData from "./BogData";
import BlogFaqSection from "./BlogFaqSection";
import {
  FiChevronRight,
  FiHome,
  FiClock,
  FiCalendar,
  FiArrowUpRight,
  FiMail,
} from "react-icons/fi";

const SITE_URL = "https://www.infinityspaceodisha.com";

function createSlugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatShortDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug || "");

  const blog = blogsData.find((b) => {
    const blogSlug = b.slug || createSlugFromTitle(b.title);
    return blogSlug === decodedSlug;
  });

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const blogSlug = blog.slug || createSlugFromTitle(blog.title);
  const pageTitle = blog.metaTitle || `${blog.title} | Infinity Space Odisha`;
  const pageDescription = blog.metaDescription || blog.excerpt;
  const canonicalUrl = `${SITE_URL}/blogs/${blogSlug}`;
  const ogImage = blog.image;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: blog.keywords?.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    other: {
      "article:published_time": blog.date,
      "article:author": blog.author?.name || "Infinity Space Odisha",
    },
  };
}

function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <FiChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-white/50" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="group flex items-center gap-1.5 text-white/70 transition-all duration-300 hover:text-white"
              >
                {index === 0 && (
                  <FiHome className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                )}
                <span className="relative text-sm">
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ) : (
              <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function NeedHelpCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#14181B] to-[#1E242A] p-6 text-white shadow-xl shadow-black/10">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E3A008]/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-[#2B3A67]/30 blur-3xl"></div>

      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#ffffff]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFFfff] animate-pulse"></span>
          Still have questions?
        </span>

        <h3 className="mt-4 text-xl font-semibold leading-snug">
          Need a hand with something?
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Our team replies within a day. Ask about a topic, request a
          correction, or just say hello.
        </p>

        <div className="mt-5 flex flex-col gap-2.5">
          <a
            href="mailto:infinityspaceodisha@gmail.com"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#14181B] transition-all duration-300 hover:bg-green-700 hover:text-white"
          >
            <FiMail className="h-4 w-4" />
            Contact support
            <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <Link
            href="/services/overview"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            More Services
          </Link>
        </div>
      </div>
    </div>
  );
}

function RecentArticleRow({ blog }) {
  const blogSlug = blog.slug || createSlugFromTitle(blog.title);

  return (
    <Link
      href={`/blogs/${blogSlug}`}
      className="group flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 hover:bg-white hover:shadow-sm"
    >
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg relative">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="64px"
        />
      </div>

      <div className="min-w-0">
        <p className="line-clamp-2 text-sm font-medium leading-snug text-[#14181B] group-hover:text-[#2B3A67]">
          {blog.title}
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-[#8A8F97]">
          {formatShortDate(blog.date)} · {blog.readTime} min
        </p>
      </div>
    </Link>
  );
}

function RecentArticlesCard({ posts }) {
  return (
    <div className="rounded-2xl border border-[#E7E2D8] bg-[#FAFAF9] p-5">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#14181B]">
          Recent articles
        </h3>
        <Link
          href="/blogs"
          className="text-xs font-medium text-[#2B3A67] hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-[#E7E2D8]/60">
        {posts.map((p) => (
          <RecentArticleRow key={p.id} blog={p} />
        ))}
      </div>
    </div>
  );
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  // Decode the URL parameter
  const decodedSlug = decodeURIComponent(slug || "");

  // Find blog by matching slug or by creating slug from title
  const blog = blogsData.find((b) => {
    const blogSlug = b.slug || createSlugFromTitle(b.title);
    return blogSlug === decodedSlug;
  });

  if (!blog) {
    notFound();
  }

  const blogSlug = blog.slug || createSlugFromTitle(blog.title);

  const related = blogsData
    .filter((b) => {
      const bSlug = b.slug || createSlugFromTitle(b.title);
      return b.category === blog.category && bSlug !== blogSlug;
    })
    .slice(0, 3);

  const recent = blogsData
    .filter((b) => {
      const bSlug = b.slug || createSlugFromTitle(b.title);
      return bSlug !== blogSlug;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: blog.title, href: null },
  ];

  // JSON-LD structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: [blog.image],
    author: {
      "@type": "Person",
      name: blog.author?.name || "Infinity Space Odisha",
    },
    publisher: {
      "@type": "Organization",
      name: "Infinity Space Odisha",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blogs/${blogSlug}`,
    },
  };

  const faqSchema =
    blog.faq && blog.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main className="overflow-hidden bg-white text-black">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] sm:min-h-[90vh] flex items-end">
          <div className="absolute inset-0">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
          </div>

          <div className="relative z-10 w-full">
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:pb-20">
              <div className="mb-6 inline-flex">
                <div className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15">
                  <Breadcrumb items={breadcrumbItems} />
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#B98A1D]/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                  {blog.category}
                </span>
              </div>

              <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                {blog.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80 sm:text-base">
                <div className="flex items-center gap-2">
                  <FiCalendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <span className="text-white/40 hidden sm:block">·</span>
                <div className="flex items-center gap-2">
                  <FiClock className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{blog.readTime} min read</span>
                </div>
                {blog.author && (
                  <>
                    <span className="text-white/40 hidden sm:block">·</span>
                    <span>By {blog.author.name || blog.author}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                {blog.content.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={i}
                        className="mt-10 text-2xl font-semibold tracking-tight text-[#14181B] first:mt-0"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="my-8 rounded-r-xl border-l-4 border-green-700 bg-[#FAF8F3] py-4 pl-5 pr-4 text-xl italic text-[#2B3A67]"
                      >
                        {block.text}
                      </blockquote>
                    );
                  }
                  return (
                    <p key={i} className="mt-5 leading-relaxed text-[#000]">
                      {block.text}
                    </p>
                  );
                })}
              </article>

              <BlogFaqSection faq={blog.faq} />

              <div className="mt-10 flex flex-wrap gap-2 border-t border-[#E7E2D8] pt-8">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E7E2D8] bg-white px-3 py-1 text-xs text-[#5B6169] transition-all hover:border-[#2B3A67] hover:text-[#2B3A67]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 lg:hidden">
                <NeedHelpCard />
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1 [scrollbar-width:thin]">
                <div className="hidden lg:block">
                  <NeedHelpCard />
                </div>
                <RecentArticlesCard posts={recent} />
              </div>
            </aside>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <h3 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
              More in {blog.category}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
