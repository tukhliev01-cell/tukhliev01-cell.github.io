import { getAllPosts } from "../../lib/posts";
import SearchBox from "../../components/SearchBox";
import Pagination from "../../components/Pagination";

export default function Blog({ searchParams }) {
  const page = Number(searchParams?.page || 1);
  const perPage = 5;
  const posts = getAllPosts();

  const start = (page - 1) * perPage;
  const paginated = posts.slice(start, start + perPage);

  return (
    <>
      <h1 className="text-3xl font-bold">Blog</h1>
      <SearchBox posts={posts} />

      <ul className="mt-6">
        {paginated.map(p => (
          <li key={p.slug}>
            <a href={`/blog/${p.slug}`}>{p.title}</a>
          </li>
        ))}
      </ul>

      <Pagination page={page} total={Math.ceil(posts.length / perPage)} />
    </>
  );
}
