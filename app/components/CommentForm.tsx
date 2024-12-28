"use client";

import { useState } from "react";

interface CommentFormProps {
  onSubmit: (comment: { author: string; content: string }) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [newComment, setNewComment] = useState({ author: "", content: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.content.trim()) {
      onSubmit(newComment);
      setNewComment({ author: "", content: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={newComment.author}
          onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
          className="w-full p-2 rounded-md border border-input bg-background"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Write a comment..."
          value={newComment.content}
          onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          className="w-full p-2 rounded-md border border-input bg-background min-h-[100px]"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
      >
        Post Comment
      </button>
    </form>
  );
}