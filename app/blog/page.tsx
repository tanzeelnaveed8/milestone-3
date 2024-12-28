"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first application.",
    date: "2024-03-20",
    author: "John Doe",
    slug: "getting-started-with-nextjs",
  },
  {
    id: 2,
    title: "Understanding React Server Components",
    excerpt: "Deep dive into React Server Components and their benefits.",
    date: "2024-03-21",
    author: "Jane Smith",
    slug: "understanding-react-server-components",
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    excerpt: "Learn how to build beautiful interfaces with Tailwind CSS.",
    date: "2024-03-22",
    author: "Mike Johnson",
    slug: "mastering-tailwind-css",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ffffff] to-[#bee6e9]">
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Main Heading */}
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="w-6 h-6" />
          <h1 className="text-3xl font-bold text-black">Recently Blogs</h1>
        </div>
        {/* Blog Posts */}
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                {/* Blog Post Title */}
                <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors text-black">
                  {post.title}
                </h2>
                {/* Blog Post Meta Information */}
                <div className="mt-2 text-sm text-black">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                </div>
                {/* Blog Post Excerpt */}
                <p className="mt-3 text-black">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
