import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import Link from "next/link";

/* Updated cybersecurity-themed SVG icons */
function IconServerNodes() {
  return (
    <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="6" rx="2" />
      <rect x="3" y="15" width="18" height="6" rx="2" />
      <path d="M7 9v6" />
      <path d="M17 9v6" />
      <circle cx="7" cy="6" r="0.5" />
      <circle cx="17" cy="18" r="0.5" />
    </svg>
  );
}

function IconWebShieldAlt() {
  return (
    <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* Browser window */}
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M2 8h20" />
      {/* Code brackets */}
      <path d="M9 12l-1.5-1.5" />
      <path d="M15 12l1.5-1.5" />
      <path d="M9 12l1.5 1.5" />
      <path d="M15 12l-1.5 1.5" />
      {/* Shield overlay to indicate protection */}
      <path d="M18 14v-2a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v2c0 1.5 1.6 2.6 3 3 1.4-.4 3-1.5 3-3z" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
    </svg>
  );
}

function IconCloudLockAlt() {
  return (
    <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* Cloud */}
      <path d="M20 17.5A4.5 4.5 0 0 0 15.6 13H14a5 5 0 0 0-9.8 1A3.5 3.5 0 0 0 5.5 20H18a2 2 0 0 0 2-2.5z" />
      {/* Padlock (centered) */}
      <rect x="9.5" y="12.5" width="5" height="4" rx="0.9" />
      <path d="M11 12.5v-1a1.5 1.5 0 0 1 3 0v1" />
      <path d="M12 13.5v1" />
    </svg>
  );
}

function IconProgramShield() {
  return (
    <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="14" height="16" rx="2" />
      <path d="M7 8h6" />
      <path d="M7 12h6" />
      <path d="M7 16h3" />
      <path d="M20 8v6a2 2 0 0 1-2 2h-1" />
      <path d="M20 4v2" />
    </svg>
  );
}

// New Web & API icon (browser + code brackets + API/data nodes)
function IconWebApi() {
  return (
    <svg
      className="w-10 h-10 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Browser frame */}
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M2 7h20" />

      {/* Code brackets (left and right) */}
      <path d="M9 11.5l-1.5 1.5L9 14.5" />
      <path d="M15 11.5l1.5 1.5L15 14.5" />

      {/* Shield overlay (centered, indicates protection) */}
      <path d="M12 10.2c1.6 0 2.8.8 3.2 1.4.3.5.3 1.9.3 1.9s-1.1.6-2.4 1.1c-0.9.3-1.7.5-1.7.5s-0.8-0.2-1.7-0.5C9.1 14.1 8 13.5 8 13.5s0-.9.3-1.4C8.7 11 10.4 10.2 12 10.2z" />
      <path d="M12 12.2v1.1" />

      {/* API/data nodes under browser to hint at endpoints */}
      <circle cx="7" cy="18" r="0.5" />
      <circle cx="12" cy="18" r="0.5" />
      <circle cx="17" cy="18" r="0.5" />
      <path d="M7 18h5M12 18h5" />
    </svg>
  );
}

// Revert Vulnerability Management icon back to magnifier+bug variant
function IconVulnMagnifierBug() {
  return (
    <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* magnifier lens */}
      <circle cx="11" cy="11" r="6" />
      {/* handle */}
      <path d="M20 20l-3-3" />
      {/* bug body inside lens */}
      <path d="M8 11a3 3 0 0 0 6 0" />
      <path d="M11 8v6" />
      {/* bug legs */}
      <path d="M7 13l-1 1" />
      <path d="M15 13l1 1" />
      <path d="M7 9l-1-1" />
      <path d="M15 9l1-1" />
    </svg>
  );
}

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
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.href} href={s.href}>
              <div className="block rounded bg-neutral-900/50 hover:bg-neutral-900/70 transition-colors p-5 h-full">
                <div className="flex items-center justify-center mb-4" aria-hidden>
                  {s.icon}
                </div>
                <h3 className="font-medium text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{s.description}</p>
                <span className="mt-4 inline-block text-accent text-sm">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
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

