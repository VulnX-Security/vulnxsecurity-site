import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import { IconServerNodes, IconWebApi, IconTarget, IconCloudLockAlt, IconProgramShield, IconVulnMagnifierBug } from "../components/ServiceIcons";

export default function Home() {
  const services = [
    {
      title: "Network & Infrastructure Pentesting",
      href: "/services/network-infrastructure",
      description: "Internal/external testing, firewall validation, AD attack paths and lateral movement.",
      icon: <IconServerNodes />,
    },
    {
      title: "Web & API Pentesting",
      href: "/services/web-api",
      description: "OWASP Top 10 and business-logic testing with authenticated coverage and PoC validation.",
      icon: <IconWebApi />,
    },
    {
      title: "Red Team & Adversary Simulation",
      href: "/services/red-team",
      description: "Goal-driven operations (phishing, initial access, C2) with measurable impact metrics.",
      icon: <IconTarget />,
    },
    {
      title: "Cloud & M365 Security",
      href: "/services/cloud-m365",
      description: "Azure/M365 identity, configuration, and conditional access posture hardening.",
      icon: <IconCloudLockAlt />,
    },
    {
      title: "Security Program Assessment",
      href: "/services/security-program",
      description: "Policy & control gap analysis aligned to NIST/CIS with prioritized roadmap.",
      icon: <IconProgramShield />,
    },
    {
      title: "Vulnerability Management",
      href: "/services/vulnerability-management",
      description: "Continuous scanning, patch validation, and remediation guidance with executive reporting.",
      icon: <IconVulnMagnifierBug />,
    },
  ];

  return (
    <Layout>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.href}
              href={s.href}
              title={s.title}
              description={s.description}
              icon={s.icon}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <Link href="/services" className="px-5 py-3 rounded bg-accent text-white hover:opacity-90">
            Explore All Services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-semibold">Why <Brand />?</h2>

        <p className="mt-4 text-neutral-300 max-w-3xl">
          At VulnX Security, we don’t just find vulnerabilities — we help you understand, prioritize, and eliminate them.
          Our team approaches every engagement with an attacker’s mindset and a defender’s discipline, delivering actionable
          intelligence your organization can trust.
        </p>

        <h3 className="mt-6 font-medium text-neutral-200">What sets us apart:</h3>
        <ul className="mt-3 list-none list-inside text-neutral-300 max-w-3xl space-y-2">
          <li>
            <strong className="text-accent">Real-World Methodology</strong>: We replicate genuine adversarial tactics to uncover what automated scanners miss.
          </li>
          <li>
            <strong className="text-accent">Enterprise-Grade Reporting</strong>: Our deliverables rival top consulting firms — detailed technical findings, executive summaries, and clear remediation guidance.
          </li>
          <li>
            <strong className="text-accent">Defensive Impact</strong>: Every test includes tailored blue-team recommendations to strengthen detection, response, and resilience.
          </li>
          <li>
            <strong className="text-accent">Custom Engagements</strong>: We adapt our methodology to your environment — not the other way around.
          </li>
          <li>
            <strong className="text-accent">Trusted Expertise</strong>: Our team brings real-world experience from enterprise environments, government, and critical infrastructure.
          </li>
        </ul>

        <p className="mt-6 text-neutral-300 max-w-3xl italic">
          The best defense is a good offense — and that’s where we come in.
        </p>
      </section>
      {/* Contact form at bottom of home page */}
      <ContactForm title="Get in touch" intro="Have a question or want to scope an engagement? Send a message and we'll respond promptly." service="Home page" />
    </Layout>
  );
}

