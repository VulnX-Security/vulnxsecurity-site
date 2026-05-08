import Layout from "../../components/Layout";
import { getSortedPostsData, getPostData } from "../../lib/posts";

export default function Post({ post }) {
  return (
    <Layout>
      <main className="bg-black text-neutral-200">
        <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <header className="mb-12 border-b border-neutral-800 pb-10">
            {post.category && (
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
                {post.category}
              </p>
            )}

            <h1 className="text-3xl font-semibold leading-tight tracking-wide text-neutral-100 md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">
              {post.date && (
                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              )}

              {post.author && (
                <>
                  <span className="hidden text-neutral-700 sm:inline">/</span>
                  <span>{post.author}</span>
                </>
              )}

              {post.company && (
                <>
                  <span className="hidden text-neutral-700 sm:inline">/</span>
                  <span>{post.company}</span>
                </>
              )}
            </div>

            {post.excerpt && (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
                {post.excerpt}
              </p>
            )}

            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </main>
    </Layout>
  );
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${dateString}T00:00:00`));
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((p) => ({ params: { slug: p.id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug);

  return {
    props: {
      post,
    },
  };
}