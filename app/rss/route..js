import { Feed } from "feed";
import { getAllPosts } from "../../lib/posts";

export async function GET() {
  const feed = new Feed({
    title: "My Blog",
    id: "https://your-site.netlify.app",
    link: "https://your-site.netlify.app"
  });

  getAllPosts().forEach(post => {
    feed.addItem({
      title: post.title,
      link: `/blog/${post.slug}`,
      description: post.description
    });
  });

  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/xml" }
  });
}
