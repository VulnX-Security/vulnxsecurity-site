import Layout from "../../components/Layout";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function CloudM365() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Cloud & M365 Security</h1>
        <p className="mt-4 text-neutral-300">
          Assessments focused on identity, configuration, and access controls across Azure and Microsoft 365 environments.
        </p>

        <h2 className="mt-6 font-medium">What we provide</h2>
        <ul className="list-disc ml-5 mt-2 text-neutral-300">
          <li>Identity and conditional access posture reviews</li>
          <li>Azure configuration, RBAC, and storage security checks</li>
          <li>Exploitation paths and escalation scenarios in cloud environments</li>
          <li>Remediation playbooks for secure baseline posture</li>
        </ul>

        <div className="mt-8">
          <Link href="/services" className="text-accent">← Back to services</Link>
        </div>
      </section>
      <ContactForm service="Cloud & M365 Security" className="pt-0" />
    </Layout>
  );
}