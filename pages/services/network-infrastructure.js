import Layout from "../../components/Layout";
import Link from "next/link";

export default function NetworkInfrastructure() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Network & Infrastructure Pentesting</h1>
        <p className="mt-4 text-neutral-300">
          Internal and external assessments that validate firewall rules, VPNs, segmentation, and Active Directory resilience.
        </p>

        <h2 className="mt-6 font-medium">What we provide</h2>
        <ul className="list-disc ml-5 mt-2 text-neutral-300">
          <li>External perimeter and internet-facing service testing</li>
          <li>Internal network pivoting, lateral movement, and AD attack path analysis</li>
          <li>Firewall, VPN, and segmentation validation</li>
          <li>Proof-of-concept exploits and remediation guidance</li>
          <li>Executive summary and technical findings with prioritized fixes</li>
        </ul>

        <div className="mt-8">
          <Link href="/services" className="text-accent">← Back to services</Link>
        </div>
      </section>
    </Layout>
  );
}