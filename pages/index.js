import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/network-infrastructure" className="block">
            <ServiceCard
              title="Network & Infrastructure Pentesting"
              description="Internal/external testing, firewall validation, AD attack paths and lateral movement."
            />
          </Link>

          <Link href="/services/web-api" className="block">
            <ServiceCard
              title="Web & API Pentesting"
              description="OWASP Top 10 and business-logic testing with authenticated coverage and PoC validation."
            />
          </Link>

          <Link href="/services/red-team" className="block">
            <ServiceCard
              title="Red Team & Adversary Simulation"
              description="Goal-driven operations (phishing, initial access, C2) with measurable impact metrics."
            />
          </Link>

          <Link href="/services/cloud-m365" className="block">
            <ServiceCard
              title="Cloud & M365 Security"
              description="Azure/M365 identity, configuration, and conditional access posture hardening."
            />
          </Link>

          <Link href="/services/security-program" className="block">
            <ServiceCard
              title="Security Program Assessment"
              description="Policy & control gap analysis aligned to NIST/CIS with prioritized roadmap."
            />
          </Link>

          <Link href="/services/vulnerability-management" className="block">
            <ServiceCard
              title="Vulnerability Management"
              description="Continuous scanning, patch validation, and remediation guidance with executive reporting."
            />
          </Link>
        </div>
        <div className="mt-10">
          <Link href="/services" className="px-5 py-3 rounded bg-accent text-white hover:opacity-90">
            Explore All Services
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Why <Brand />?</h2>

        <p className="mt-4 text-neutral-300 max-w-3xl">
          At VulnX Security, we don’t just find vulnerabilities — we help you understand, prioritize, and eliminate them.
          Our team approaches every engagement with an attacker’s mindset and a defender’s discipline, delivering actionable
          intelligence your organization can trust.
        </p>

        <h3 className="mt-6 font-medium text-neutral-200">What sets us apart:</h3>
        <ul className="mt-3 list-disc list-inside text-neutral-300 max-w-3xl space-y-2">
          <li>
            <strong>Real-World Methodology:</strong> We replicate genuine adversarial tactics to uncover what automated scanners miss.
          </li>
          <li>
            <strong>Enterprise-Grade Reporting:</strong> Our deliverables rival top consulting firms — detailed technical findings, executive summaries, and clear remediation guidance.
          </li>
          <li>
            <strong>Defensive Impact:</strong> Every test includes tailored blue-team recommendations to strengthen detection, response, and resilience.
          </li>
          <li>
            <strong>Custom Engagements:</strong> We adapt our methodology to your environment — not the other way around.
          </li>
          <li>
            <strong>Trusted Expertise:</strong> Our team brings real-world experience from enterprise environments, government, and critical infrastructure.
          </li>
        </ul>

        <p className="mt-6 text-neutral-300 max-w-3xl italic">
          The best defense is a good offense — and that’s where we come in.
        </p>
      </section>
    </Layout>
  );
}

