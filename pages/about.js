import Layout from "../components/Layout";
import Brand from "../components/Brand";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">About <Brand /></h1>
        <p className="mt-4 text-neutral-300">
          At VulnX Security, LLC, our mission is to strengthen organizations by proactively identifying,
          exploiting, and mitigating weaknesses before adversaries do. We deliver actionable, executive-ready
          insight across networks, web, cloud, and identity.
        </p>

        <h2 className="mt-10 text-4xl font-semibold text-accent">Meet the team</h2>

        {/* Team Member: Ryan */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/headshot-1.jpg"
              alt="Ryan McCutcheon — Founder & Principal Security Consultant"
              width={170}
              height={170}
              className="rounded-lg object-cover shadow-lg shadow-black/40"
              priority
              unoptimized
            />
          </div>
          <div className="text-neutral-300 text-center md:text-left">
            <p className="text-lg font-semibold">Ryan McCutcheon — Founder & Principal Security Consultant</p>
            <p className="mt-2 leading-relaxed text-sm">
              Cybersecurity professional, with a Masters degree in Computer and Information Science, specializing in offensive security, adversary emulation, and enterprise defense
              improvement. Ryan brings a dual-perspective approach to testing and hardening—combining real-world
              exploitation expertise with defensive engineering insight.
            </p>
            <p className="mt-2 leading-relaxed text-sm">
              His experience spans Active Directory, Microsoft 365, web application security, and infrastructure
              assessments, with a focus on transforming vulnerabilities into measurable resilience. He leads engagements
              involving penetration testing, red-team operations, and threat simulations aligned with frameworks such as
              MITRE ATT&CK, NIST, and PTES—delivering executive and technical reporting that drives action.
            </p>
            <h3 className="mt-4 font-medium">Certifications</h3>
            <ul className="mt-2 list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong className="text-accent">OffSec OSCP+ (Offensive Security Certified Professional)</strong> – Demonstrates advanced proficiency in
                real-world penetration testing, exploitation, lateral movement, and post-exploitation reporting.
              </li>
              <li>
                <strong className="text-accent">CompTIA Security+</strong> – Establishes foundational expertise in network defense, access control, and
                enterprise security best practices.
              </li>
            </ul>
          </div>
        </div>

        {/* Team Member: Devin Ogle */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/headshot-3.png"
              alt="Devin Ogle — Principal Security Consultant"
              width={170}
              height={170}
              className="rounded-lg object-cover shadow-lg shadow-black/40"
              unoptimized
            />
          </div>
          <div className="text-neutral-300 text-center md:text-left">
            <p className="text-lg font-semibold">Devin Ogle — Principal Security Consultant</p>
            <p className="mt-2 leading-relaxed text-sm">
              Brings hands-on experience from both public-sector and private-industry environments, delivering practical,
              actionable security insight across varied threat landscapes. Devin’s work focuses on vulnerability assessment,
              penetration testing, and aligning security controls with regulatory and business objectives.
            </p>
            <h3 className="mt-4 font-medium">Certifications</h3>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm leading-relaxed">
              <li><strong className="text-accent">CompTIA Security+</strong></li>
              <li><strong className="text-accent">CompTIA Network+</strong></li>
              <li><strong className="text-accent">Certified Ethical Hacker (CEH)</strong></li>
              <li><strong className="text-accent">TCM Security Practical Network Penetration Tester (PJNT)</strong></li>
            </ul>
            <h4 className="mt-4 font-medium">Experience highlights</h4>
            <ul className="mt-2 list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Worked within government agencies to safeguard sensitive data and maintain compliance with national
                security frameworks.
              </li>
              <li>
                Served commercial organizations by conducting penetration tests, vulnerability assessments, and
                designing scalable defensive architectures.
              </li>
            </ul>
          </div>
        </div>

        {/* Team Member: Brayden Edwards */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/headshot-2.jpg"
              alt="Brayden Edwards — Security Consultant"
              width={170}
              height={170}
              className="rounded-lg object-cover shadow-lg shadow-black/40"
              unoptimized
            />
          </div>
          <div className="text-neutral-300 text-center md:text-left">
            <p className="text-lg font-semibold">Brayden Edwards — Security Consultant</p>
            <p className="mt-2 leading-relaxed text-sm">
              Focused on vulnerability enumeration, exploit validation, and reporting clarity. Supports assessment
              workflows across infrastructure, web, and identity layers.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Passionate about defensive hardening informed by offensive techniques—bridging the gap between
              discovery and measurable risk reduction.
            </p>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-semibold text-accent">Core values</h2>
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
    </Layout >
  );
}

