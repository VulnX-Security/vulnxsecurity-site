import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Network & Infrastructure Pentesting"
            description="Internal/external testing, firewall validation, AD attack paths and lateral movement." />
          <ServiceCard title="Web & API Pentesting"
            description="OWASP Top 10 and business-logic testing with authenticated coverage and PoC validation." />
          <ServiceCard title="Red Team & Adversary Simulation"
            description="Goal-driven operations (phishing, initial access, C2) with measurable impact metrics." />
          <ServiceCard title="Cloud & M365 Security"
            description="Azure/M365 identity, configuration, and conditional access posture hardening." />
          <ServiceCard title="Security Program Assessment"
            description="Policy & control gap analysis aligned to NIST/CIS with prioritized roadmap." />
          <ServiceCard title="Vulnerability Management"
            description="Continuous scanning, patch validation, and remediation guidance with executive reporting." />
        </div>
        <div className="mt-10">
          <Link href="/services" className="px-5 py-3 rounded bg-accent text-white hover:opacity-90">
            Explore All Services
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Why Vuln<span className="text-accent">X</span>?</h2>
        <p className="mt-4 text-neutral-300 max-w-3xl">
          Real-world attacker methodology, enterprise-grade reporting, and clear defensive guidance.
          We blend offensive expertise with blue-team action plans to reduce risk fast.
        </p>
      </section>
    </Layout>
  );
}

