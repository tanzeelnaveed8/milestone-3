"use client";
import { useState } from "react";

export function CommentForm({ onSubmit }: { onSubmit: (comment: { author: string; content: string }) => void }) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && content) {
      onSubmit({ author, content });
      setContent(""); // Clear the content after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-black">Your Name</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-black"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-black">Comment</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-black"
          placeholder="Write a comment"
        />
      </div>
      <button type="submit" className="px-6 py-2 bg-primary text-black rounded-md">Post Comment</button>
    </form>
  );
}
