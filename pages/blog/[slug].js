import Layout from "../../components/Layout";
import { getSortedPostsData, getPostData } from "../../lib/posts";

export default function Post({ post }) {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-4 py-16 prose prose-invert prose-neutral">
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        <p className="text-sm text-neutral-500">{post.date}</p>
        <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((p) => ({ params: { slug: p.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug);
  return { props: { post } };
}

