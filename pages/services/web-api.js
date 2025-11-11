import Layout from "../../components/Layout";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function WebApi() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Web & API Pentesting</h1>
        <p className="mt-4 text-neutral-300">
          Comprehensive web and API testing covering OWASP Top 10, authentication flows, business logic, and chained vulnerabilities.
        </p>

        <h2 className="mt-6 font-medium">What we provide</h2>
        <ul className="list-disc ml-5 mt-2 text-neutral-300">
          <li>Authenticated and unauthenticated testing of web apps and APIs</li>
          <li>Automated scanning plus deep manual validation</li>
          <li>Business-logic abuse and chained attack validation</li>
          <li>Proof-of-concept payloads and exploitation paths</li>
          <li>Remediation steps and regression testing options</li>
        </ul>

        <div className="mt-8">
          <Link href="/services" className="text-accent">← Back to services</Link>
        </div>
      </section>
      <ContactForm service="Web & API Pentesting" className="pt-0" />
    </Layout>
  );
}