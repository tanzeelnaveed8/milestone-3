import { getPostSlugs } from "@/app/data/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}
