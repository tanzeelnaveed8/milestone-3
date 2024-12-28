interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

export function CommentList({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-8">
        No comments yet. Be the first to comment!
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 rounded-lg bg-card">
          <div className="flex justify-between items-start mb-2">
            <span className="font-semibold">{comment.author}</span>
            <time className="text-sm text-muted-foreground">
              {new Date(comment.date).toLocaleDateString()}
            </time>
          </div>
          <p className="text-foreground/80">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}