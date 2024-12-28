export const posts = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js",
    content: `Next.js is a powerful React framework that makes building full-stack web applications simple and efficient. 
    It provides features like server-side rendering, static site generation, and API routes out of the box.
    
    In this post, we'll explore the basics of Next.js and how to create your first application. We'll cover topics like:
    - Project setup
    - File-based routing
    - Data fetching methods
    - Deployment options`,
    date: "2024-03-20",
    author: "John Doe"
  },
  "understanding-react-server-components": {
    title: "Understanding React Server Components",
    content: `React Server Components represent a paradigm shift in how we build React applications. 
    They allow us to render components on the server while maintaining the interactivity we expect from React.
    
    Key benefits include:
    - Reduced bundle size
    - Improved initial page load
    - Better SEO
    - Simplified data fetching`,
    date: "2024-03-21",
    author: "Jane Smith"
  },
  "mastering-tailwind-css": {
    title: "Mastering Tailwind CSS",
    content: `Tailwind CSS has revolutionized how we style web applications. 
    Its utility-first approach provides a powerful set of building blocks that make it easy to create beautiful, responsive designs.
    
    In this guide, we'll cover:
    - Core concepts
    - Responsive design
    - Custom configurations
    - Best practices`,
    date: "2024-03-22",
    author: "Mike Johnson"
  }
} as const;

export type PostSlug = keyof typeof posts;

export const getPostSlugs = () => Object.keys(posts) as PostSlug[];

export const getPost = (slug: PostSlug) => posts[slug];