import Layout from "../../components/Layout";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Insights & Case Studies</h1>
        <ul className="mt-8 space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="border-b border-neutral-800 pb-6">
              <Link href={`/blog/${post.id}`} className="text-xl font-semibold hover:underline">
                {post.title}
              </Link>
              <p className="mt-2 text-neutral-300">{post.excerpt}</p>
              <p className="mt-2 text-xs text-neutral-500">{post.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts } };
}

