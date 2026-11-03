import { blogPosts as olderPosts } from "./site";
import { novemberReport } from "./blog-november-2026";

// Newest first: the rich November 2026 report, followed by the earlier posts.
export const blogPosts = [
  {
    slug: novemberReport.slug,
    title: novemberReport.title,
    seoTitle: novemberReport.seoTitle,
    date: novemberReport.date,
    readTime: novemberReport.readTime,
    excerpt: novemberReport.excerpt,
    image: novemberReport.image,
    imageAlt: novemberReport.imageAlt,
  },
  ...olderPosts,
];
