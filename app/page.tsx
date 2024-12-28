import Link from "next/link";
import { BookOpen } from "lucide-react";
import 'animate.css';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center bg-black justify-center px-4 py-12 overflow-hidden">
      <div className="text-center max-w-3xl relative">
        <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight opacity-90 animate__animated animate__fadeIn animate__slideInUp animate__delay-1s">
          Welcome to Our Blogs
        </h1>

        <p className="text-xl text-blue-200 mb-8  opacity-90 font-medium animate__animated animate__fadeIn animate__delay-2s">
          Discover captivating stories, in-depth articles, and join engaging
          discussions with a passionate community of readers.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-[#307592] to-[#bee6e9] text-white font-semibold rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-out transform"
        >
          <BookOpen className="w-6 h-6" />
          <span>Read Blog Posts</span>
        </Link>
      </div>
    </div>
  );
}
