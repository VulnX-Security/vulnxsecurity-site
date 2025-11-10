import Layout from "../components/Layout";
import Link from "next/link";

export default function ContactSuccess() {
  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Message received ✅</h1>
        <p className="mt-4 text-neutral-300">
          Thanks for reaching out. We’ll review your message and get back to you shortly.
        </p>
        <p className="mt-4 text-neutral-400 text-sm">
          While you wait, you can explore our <Link href="/services" className="text-accent underline">services</Link> or read the <Link href="/blog" className="text-accent underline">blog</Link>.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-5 py-3 rounded bg-neutral-800 hover:bg-neutral-700">Return Home</Link>
          <Link href="/services" className="px-5 py-3 rounded bg-accent text-white hover:opacity-90">View Services</Link>
        </div>
      </section>
    </Layout>
  );
}
