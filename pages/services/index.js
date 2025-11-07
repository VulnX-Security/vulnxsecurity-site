import Layout from "../../components/Layout";
import Link from "next/link";

export default function ServicesIndex() {
    const services = [
        {
            title: "Network & Infrastructure Pentesting",
            href: "/services/network-infrastructure",
            description:
                "Internal/external testing, firewall validation, AD attack paths and lateral movement.",
        },
        {
            title: "Web & API Pentesting",
            href: "/services/web-api",
            description:
                "OWASP Top 10 and business-logic testing with authenticated coverage and PoC validation.",
        },
        {
            title: "Red Team & Adversary Simulation",
            href: "/services/red-team",
            description:
                "Goal-driven operations (phishing, initial access, C2) with measurable impact metrics.",
        },
        {
            title: "Cloud & M365 Security",
            href: "/services/cloud-m365",
            description:
                "Azure/M365 identity, configuration, and conditional access posture hardening.",
        },
        {
            title: "Security Program Assessment",
            href: "/services/security-program",
            description:
                "Policy & control gap analysis aligned to NIST/CIS with prioritized roadmap.",
        },
        {
            title: "Vulnerability Management",
            href: "/services/vulnerability-management",
            description:
                "Continuous scanning, patch validation, and remediation guidance with executive reporting.",
        },
    ];

    return (
        <Layout>
            <section className="mx-auto max-w-6xl px-4 py-16">
                <h1 className="text-3xl font-semibold">Our Services</h1>
                <p className="mt-4 text-neutral-300 max-w-3xl">
                    Explore detailed descriptions of the offensive and defensive services VulnX provides.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <Link
                            key={s.href}
                            href={s.href}
                            className="block rounded bg-neutral-900/50 hover:bg-neutral-900/70 transition-colors p-5 h-full"
                        >
                            <h3 className="font-medium text-lg">{s.title}</h3>
                            <p className="mt-2 text-sm text-neutral-300">{s.description}</p>
                            <span className="mt-4 inline-block text-accent text-sm">Learn more →</span>
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    );
}