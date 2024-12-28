'use client';

import { useState } from "react";
import { ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";
import { CommentForm } from "@/app/components/CommentForm";
import { CommentList } from "@/app/components/CommentList";
import { getPost } from "@/app/data/posts";
import { use } from "react";

type PostSlug = "getting-started-with-nextjs" | "understanding-react-server-components" | "mastering-tailwind-css";

export default function BlogPost({ params }: { params: Promise<{ slug: PostSlug }> }) {
  const { slug } = use(params);
  const [comments, setComments] = useState<Array<{ id: number; author: string; content: string; date: string }>>([]);
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ffffff] to-[#bee6e9]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">404</h1>
          <p className="text-lg text-black">Post not found</p>
          <Link href="/blog" className="mt-4 inline-block text-primary hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const handleNewComment = (comment: { author: string; content: string }) => {
    setComments([
      ...comments,
      {
        id: Date.now(),
        author: comment.author,
        content: comment.content,
        date: new Date().toISOString(),
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ffffff] to-[#bee6e9]">
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-black hover:text-primary mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2 text-black" />
          Back to blog
        </Link>

        {/* Blog Post Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-black mb-4">{post.title}</h1>
          <div className="text-sm text-black mb-8">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <time>{new Date(post.date).toLocaleDateString()}</time>
          </div>
          <div className="text-black whitespace-pre-line">{post.content}</div>
        </article>

        {/* Comments Section */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="w-5 h-5 text-black" />
            <h2 className="text-2xl font-semibold text-black">Comments</h2>
          </div>

          <CommentForm onSubmit={handleNewComment} />
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
}
