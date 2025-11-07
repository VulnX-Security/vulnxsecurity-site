import Layout from "../components/Layout";
import Brand from "../components/Brand";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">About <Brand /> Security</h1>
        <p className="mt-4 text-neutral-300">
          At VulnX Security, our mission is to strengthen organizations by proactively identifying,
          exploiting, and mitigating weaknesses before adversaries do. We deliver actionable, executive-ready
          insight across networks, web, cloud, and identity.
        </p>

        <h2 className="mt-10 text-4xl font-semibold text-accent">Meet the team</h2>

        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <Image
              src="/headshot-1.jpg"
              alt="Ryan McCutcheon — Founder & Principal Security Consultant"
              width={160}
              height={160}
              className="rounded-lg object-cover"
              priority
              unoptimized
            />
          </div>

          <div className="text-neutral-300">
            <p>
              <strong>Ryan McCutcheon — Founder & Principal Security Consultant</strong>
            </p>
            <p className="mt-2">
              Offensive security subject-matter expert with enterprise experience in Active Directory, Microsoft 365,
              and red-team operations.
            </p>

            <h3 className="mt-4 font-medium">Certifications</h3>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li>
                <strong className="text-accent">OffSec OSCP+ (Offensive Security Certified Professional)</strong>: Hands-on, practical penetration testing
                certification requiring candidates to identify, exploit, and document vulnerabilities in a time‑boxed lab
                environment. Demonstrates strong offensive security, and reporting skills.
              </li>
              <li>
                <strong className="text-accent">CompTIA Security+</strong>: Vendor-neutral certification covering foundational knowledge in network
                security, threat management, access control, and compliance. Validates competency in implementing and
                monitoring basic security practices in enterprise environments.
              </li>
            </ul>
          </div>
        </div>

        <h2 className="mt-10 text-4xl font-semibold text-accent">Core values</h2>
        <ul className="mt-4 list-disc list-inside text-neutral-300 space-y-3">
          <li>
            <strong>Integrity Above All —</strong> We hold ourselves to the highest ethical standards in every engagement,
            ensuring honesty, transparency, and trust with our clients.
          </li>
          <li>
            <strong>Excellence in Execution —</strong> Every assessment, every report, every recommendation is crafted with
            precision, accuracy, and pride in our technical expertise.
          </li>
          <li>
            <strong>Adversarial Mindset, Defensive Purpose —</strong> We think like attackers to strengthen your defenses.
            Our offensive insights drive real-world resilience.
          </li>
          <li>
            <strong>Continuous Learning —</strong> We stay ahead of evolving threats through constant research, red-team
            simulations, and professional development.
          </li>
          <li>
            <strong>Client Partnership —</strong> We see security as a collaboration. We align our methods and findings with
            your goals, empowering your team through knowledge transfer.
          </li>
          <li>
            <strong>Confidentiality and Trust —</strong> We treat your data and systems with the same protection we apply to our own.
          </li>
          <li>
            <strong>Innovation and Adaptability —</strong> We embrace new tools, techniques, and threat intelligence to stay
            one step ahead of adversaries.
          </li>
          <li>
            <strong>Accountability and Ownership —</strong> We stand by our work, our words, and our results — always delivering what we promise.
          </li>
        </ul>
      </section>
    </Layout>
  );
}

