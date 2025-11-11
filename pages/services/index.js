import Brand from "../../components/Brand";
import Layout from "../../components/Layout";
import ServiceCard from "../../components/ServiceCard";
import { IconServerNodes, IconWebApi, IconTarget, IconCloudLockAlt, IconProgramShield, IconVulnMagnifierBug } from "../../components/ServiceIcons";

export default function ServicesIndex() {
    const services = [
        {
            title: "Network & Infrastructure Pentesting",
            href: "/services/network-infrastructure",
            description: "Internal/external testing, firewall validation, AD attack paths and lateral movement.",
            icon: <IconServerNodes />
        },
        {
            title: "Web & API Pentesting",
            href: "/services/web-api",
            description: "OWASP Top 10 and business-logic testing with authenticated coverage and PoC validation.",
            icon: <IconWebApi />
        },
        {
            title: "Red Team & Adversary Simulation",
            href: "/services/red-team",
            description: "Goal-driven operations (phishing, initial access, C2) with measurable impact metrics.",
            icon: <IconTarget />
        },
        {
            title: "Cloud & M365 Security",
            href: "/services/cloud-m365",
            description: "Azure/M365 identity, configuration, and conditional access posture hardening.",
            icon: <IconCloudLockAlt />
        },
        {
            title: "Security Program Assessment",
            href: "/services/security-program",
            description: "Policy & control gap analysis aligned to NIST/CIS with prioritized roadmap.",
            icon: <IconProgramShield />
        },
        {
            title: "Vulnerability Management",
            href: "/services/vulnerability-management",
            description: "Continuous scanning, patch validation, and remediation guidance with executive reporting.",
            icon: <IconVulnMagnifierBug />
        },
    ];

    return (
        <Layout>
            <section className="mx-auto max-w-6xl px-4 py-16">
                <h1 className="text-3xl font-semibold">Our Services</h1>
                <p className="mt-4 text-neutral-300 max-w-3xl">
                    Explore detailed descriptions of the services VulnX Security provides.
                </p>

                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </section>
        </Layout>
    );
}