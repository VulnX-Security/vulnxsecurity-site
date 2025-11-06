import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Request a Security Assessment</h1>
        <p className="mt-3 text-neutral-300">
          Fill out the form and we’ll follow up to schedule a discovery call.
        </p>

        {/* Replace the Formspree endpoint below with your own */}
        <form
          action="https://formspree.io/f/your-endpoint-id"
          method="POST"
          className="mt-8 grid gap-5"
        >
          <div>
            <label className="block text-sm text-neutral-400">Name</label>
            <input name="name" required className="mt-1 w-full rounded bg-neutral-900 border border-neutral-800 p-3" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400">Company</label>
            <input name="company" className="mt-1 w-full rounded bg-neutral-900 border border-neutral-800 p-3" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded bg-neutral-900 border border-neutral-800 p-3" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full rounded bg-neutral-900 border border-neutral-800 p-3" />
          </div>
          <button className="px-5 py-3 rounded bg-accent text-white hover:opacity-90">
            Send Message
          </button>
        </form>

        <div className="mt-8 text-neutral-400 text-sm">
          Prefer email? Reach us at <a href="mailto:info@vulnxsecurity.com" className="underline">info@vulnxsecurity.com</a>.
        </div>
      </section>
    </Layout>
  );
}

