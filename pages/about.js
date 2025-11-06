import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">About VulnX Security</h1>
        <p className="mt-4 text-neutral-300">
          At VulnX Security, our mission is to strengthen organizations by proactively identifying,
          exploiting, and mitigating weaknesses before adversaries do. We deliver actionable, executive-ready
          insight across networks, web, cloud, and identity.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Leadership</h2>
        <p className="mt-2 text-neutral-300">
          <strong>Ryan McCutcheon — Founder & Principal Security Consultant.</strong> Offensive security engineer with
          enterprise experience in AD, M365, and red-team operations. Certifications include OSCP and Security+.
        </p>

        <h2 className="mt-10 text-xl font-semibold">Values</h2>
        <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
          <li><strong>Integrity:</strong> Transparent, ethical testing.</li>
          <li><strong>Precision:</strong> Evidence-driven findings and clear remediation.</li>
          <li><strong>Impact:</strong> Measurable reduction in business risk.</li>
        </ul>
      </section>
    </Layout>
  );
}

