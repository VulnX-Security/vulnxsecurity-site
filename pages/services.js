import Layout from "../components/Layout";

export default function Services() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="mt-3 text-neutral-300 max-w-3xl">
          We tailor engagements to your environment and objectives, with clear scope, timelines, and deliverables.
        </p>

        <div className="mt-10 space-y-10">
          <Service title="Network & Infrastructure Pentesting">
            Internal and external testing, firewall assessment, AD attack paths, privilege escalation,
            and lateral movement validation with executive and technical reporting.
          </Service>
          <Service title="Web & API Pentesting">
            OWASP Top 10, business logic, authentication flows, session security, and API abuse scenarios
            with authenticated coverage and reproducible PoCs.
          </Service>
          <Service title="Red Team & Adversary Simulation">
            Objective-driven operations (initial access, phishing, C2, detection testing) tied to MITRE ATT&CK
            with measurable impact and defensive recommendations.
          </Service>
          <Service title="Cloud & M365 Assessments">
            Azure/M365 configuration, identity and access, conditional access policies, Defender & Purview posture.
          </Service>
          <Service title="Security Program Assessment">
            Policy & control mapping to NIST/CIS with prioritized roadmap and quick-win guidance.
          </Service>
          <Service title="Vulnerability Management">
            Continuous scanning, patch validation, quarterly reporting, and remediation guidance.
          </Service>
        </div>
      </section>
    </Layout>
  );
}

function Service({ title, children }) {
  return (
    <div className="rounded-lg border border-neutral-800 p-5">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-neutral-300 leading-relaxed">{children}</p>
    </div>
  );
}

