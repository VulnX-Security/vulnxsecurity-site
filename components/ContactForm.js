import { useMemo, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function ContactForm({
  title = "Request more information",
  intro = "Fill out the form and we’ll follow up to schedule a discovery call.",
  service,
  className = "",
}) {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const endpoint = formId
    ? `https://formspree.io/f/${formId}`
    : "https://formspree.io/f/your-endpoint-id";

  const [values, setValues] = useState(() => ({
    name: "",
    company: "",
    email: "",
    message: service ? `I’d like to learn more about ${service}.` : "",
    botField: "",
  }));
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', message: string }
  const lastSubmitRef = useRef(null);
  const router = useRouter();
  const RATE_LIMIT_MS = 30000; // 30s between successful submissions

  const errors = useMemo(() => {
    const errs = {};
    if (!values.name.trim()) errs.name = "Please enter your name.";
    if (!values.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) errs.message = "Please add a brief message.";
    return errs;
  }, [values]);

  const hasErrors = Object.keys(errors).length > 0;

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    setStatus(null);

    // Honeypot check
    if (values.botField) {
      setStatus({ type: "success", message: "Thanks!" });
      return;
    }
    // Rate limiting: block if a successful submit occurred recently
    if (lastSubmitRef.current && Date.now() - lastSubmitRef.current < RATE_LIMIT_MS) {
      const wait = Math.ceil((RATE_LIMIT_MS - (Date.now() - lastSubmitRef.current)) / 1000);
      setStatus({ type: "error", message: `Please wait ${wait}s before sending another message.` });
      return;
    }
    if (hasErrors) return;

    setSubmitting(true);
    try {
      const payload = {
        name: values.name,
        company: values.company,
        email: values.email,
        message: values.message,
        ...(service ? { service } : {}),
      };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus({ type: "success", message: "Sending succeeded. Redirecting…" });
      lastSubmitRef.current = Date.now();
      // Redirect after a short delay so user sees feedback
      setTimeout(() => {
        router.push("/contact-success");
      }, 900);
      setValues({ name: "", company: "", email: "", message: service ? `I’d like to learn more about ${service}.` : "", botField: "" });
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Sorry, something went wrong sending your message. Please try again or email info@vulnxsecurity.com." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className={`mx-auto max-w-3xl px-4 py-16 ${className}`.trim()}>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mt-3 text-neutral-300">{intro}</p>

      {status && (
        <div
          className={`mt-6 rounded border p-4 text-sm ${
            status.type === "success"
              ? "border-green-700 bg-green-950/40 text-green-200"
              : "border-red-800 bg-red-950/40 text-red-200"
          }`}
          role="status"
        >
          {status.message}
        </div>
      )}

      {!formId && (
        <div className="mt-4 text-xs text-yellow-300/80">
          Warning: Form endpoint is not configured. Set NEXT_PUBLIC_FORMSPREE_FORM_ID in your environment.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5">
        {/* honeypot */}
        <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden>
          <label htmlFor="website">Do not fill this out if you are human</label>
          <input
            id="website"
            type="text"
            name="botField"
            tabIndex={-1}
            autoComplete="off"
            value={values.botField}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm text-neutral-400">Name</label>
          <input
            id="name"
            name="name"
            required
            className={`mt-1 w-full rounded bg-neutral-900 border p-3 ${
              touched.name && errors.name ? "border-red-700" : "border-neutral-800"
            }`}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-xs text-red-300">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm text-neutral-400">Company</label>
          <input
            id="company"
            name="company"
            className="mt-1 w-full rounded bg-neutral-900 border border-neutral-800 p-3"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-neutral-400">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className={`mt-1 w-full rounded bg-neutral-900 border p-3 ${
              touched.email && errors.email ? "border-red-700" : "border-neutral-800"
            }`}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-red-300">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-neutral-400">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={`mt-1 w-full rounded bg-neutral-900 border p-3 ${
              touched.message && errors.message ? "border-red-700" : "border-neutral-800"
            }`}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.message && errors.message && (
            <p className="mt-1 text-xs text-red-300">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded bg-accent text-white hover:opacity-90 disabled:opacity-50"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send Message"}
        </button>
      </form>

      <div className="mt-8 text-neutral-400 text-sm">
        Prefer email? Reach us at {" "}
        <a href="mailto:info@vulnxsecurity.com" className="underline">info@vulnxsecurity.com</a>.
      </div>
    </section>
  );
}
