import Layout from "../../components/Layout";
import Link from "next/link";

export default function SecurityProgram() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Security Program Assessment</h1>
        <p className="mt-4 text-neutral-300">
          Independent assessments of policies, controls, and processes aligned to NIST/CIS to mature security programs.
        </p>

        <h2 className="mt-6 font-medium">What we provide</h2>
        <ul className="list-disc ml-5 mt-2 text-neutral-300">
          <li>Policy and control gap analysis mapped to standards</li>
          <li>Risk-based prioritization and remediation roadmaps</li>
          <li>Operational guidance for incident response and vulnerability management</li>
          <li>Executive summaries and technical appendices for engineering teams</li>
        </ul>

        <div className="mt-8">
          <Link href="/services" className="text-accent">← Back to services</Link>
        </div>
      </section>
    </Layout>
  );
}