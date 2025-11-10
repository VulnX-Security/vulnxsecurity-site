import Layout from "../../components/Layout";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function RedTeam() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Red Team & Adversary Simulation</h1>
        <p className="mt-4 text-neutral-300">
          Goal-driven emulations of real attackers to measure detection, response, and business impact.
        </p>

        <h2 className="mt-6 font-medium">What we provide</h2>
        <ul className="list-disc ml-5 mt-2 text-neutral-300">
          <li>Phishing, credential harvesting, and user-targeted campaigns</li>
          <li>Initial access, persistence, privilege escalation, and C2 simulation</li>
          <li>Detection and telemetry evaluation with playbook recommendations</li>
          <li>Quantifiable impact metrics and executive-level risk reporting</li>
        </ul>

        <div className="mt-8">
          <Link href="/services" className="text-accent">← Back to services</Link>
        </div>
      </section>
      <ContactForm service="Red Team & Adversary Simulation" className="pt-0" />
    </Layout>
  );
}